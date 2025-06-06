# Tenpo Challenge

Aplicación web desarrollada con Next.js, TypeScript y Zustand para el manejo de estado.

## 🚀 Características

- Autenticación de usuarios
- Rutas públicas y privadas
- Manejo de estado con Zustand
- Diseño responsive
- Optimización de rendimiento

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git

## 🔧 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MarcOliva/tenpo-challenge.git
cd tenpo-challenge
```

2. Instalar dependencias:

```bash
npm install
# o
yarn install
```

3. Para una mejor experiencia levantar el build

```bash
npm build
# o
yarn build
```

Luego usar el siguiente comando

```bash
npm start
# o
yarn start
```

La aplicación estará disponible en `http://localhost:3000`

4. Si necesitas iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── auth/          # Componentes de autenticación
│   ├── layouts/       # Layouts de la aplicación
│   └── posts/         # Componentes relacionados con posts
├── hooks/             # Hooks personalizados
├── lib/               # Utilidades y configuraciones
├── models/            # Tipos e interfaces
├── pages/             # Páginas de la aplicación
├── services/          # Servicios y llamadas a API
├── store/             # Estado global con Zustand
├── styles/            # Estilos CSS Modules
├── utils/             # Funciones utilitarias
└── views/             # Vistas principales de la aplicación
```

## 🔐 Autenticación

La aplicación implementa un sistema de autenticación con las siguientes características:

- Manejo de tokens JWT
- Rutas protegidas
- Persistencia de sesión
- Logout manual

### Credenciales de Prueba

Para acceder a la aplicación, puedes usar las siguientes credenciales:

- Email: cualquier email válido
- Password: cualquier contraseña

## 🎨 Diseño

El diseño de la aplicación es completamente responsive y se adapta a diferentes tamaños de pantalla:

- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Móvil (< 768px)

## 📱 Características Técnicas

### Frontend

- Next.js 13+
- TypeScript
- Stitches para el styling
- Zustand para estado global
- React Query para manejo de datos

### Optimizaciones

- Server Side Rendering (SSR) con getServerSideProps
- Código modular y componentes reutilizables
- Virtualización de listas con react-virtualized
- Diseño responsive con Stitches
- Manejo de errores y estados de carga

## 📦 Dependencias Principales

- `next`: Framework de React
- `react`: Biblioteca UI
- `typescript`: Tipado estático
- `stitches`: CSS-in-JS para los componentes
- `zustand`: Manejo de estado
- `axios`: Cliente HTTP
- `react-virtualized`: Virtualización de listas

## 🔄 Flujo de Datos

1. **Autenticación**:

   - Usuario ingresa credenciales
   - Se valida y genera token
   - Token se almacena en Zustand
   - Redirección a página principal (/)

2. **Posts**:
   - Carga inicial desde servidor
   - Virtualización para mejor rendimiento

## 📝 Notas de Desarrollo

- El proyecto utiliza TypeScript para mejor mantenibilidad
- Los componentes están organizados por funcionalidad
- Se implementan las mejores prácticas de React
- El código sigue los principios SOLID

## 🔄 Optimizaciones de Llamadas al Backend

### 1. Implementación de Caché

- **React Query / SWR**: Implementación de una capa de caché para peticiones HTTP
  - Caché automática de respuestas
  - Revalidación en segundo plano
  - Deduplicación de peticiones
  - Manejo de estados de carga y error

### 2. Paginación y Lazy Loading

- **Paginación del Servidor**: Implementación de paginación real desde el backend
  - Reducción del tamaño de las respuestas
  - Mejora del tiempo de carga inicial
  - Optimización del uso de memoria
  - Implementación de infinite scroll

### 3. Optimización de Peticiones

- **Batching**: Agrupación de múltiples peticiones en una sola
  - Reducción del número de llamadas al servidor
  - Minimización de la latencia
  - Optimización del uso de la red

### 4. Monitoreo y Métricas

- **APM**: Implementación de monitoreo de rendimiento
  - Tracking de tiempos de respuesta
  - Identificación de cuellos de botella
  - Métricas de uso de recursos
