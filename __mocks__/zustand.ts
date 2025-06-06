import { act } from "@testing-library/react";
import type * as ZustandExportedTypes from "zustand";

const actual = jest.requireActual<typeof ZustandExportedTypes>("zustand");
const { create: actualCreate } = actual;

export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  const store = actualCreate(stateCreator);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

export const create = (<T>(
  stateCreator: ZustandExportedTypes.StateCreator<T>
) => {
  return typeof stateCreator === "function"
    ? createUncurried(stateCreator)
    : createUncurried;
}) as typeof actual.create;

afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});
