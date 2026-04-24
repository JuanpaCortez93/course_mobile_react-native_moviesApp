# Movies App 🎬

Una aplicación móvil multiplataforma para explorar películas, construida con React Native y Expo. Accede a información detallada de películas, elencos, y más.

## Características

- 🎬 Exploración de películas por categorías (Populares, En cines, Mejor calificadas, Próximamente)
- 🎭 Información detallada de actores y elenco
- 🔍 Detalles completos de películas con sinopsis, calificaciones y géneros
- 📱 Interfaz nativa optimizada para iOS y Android
- 🎨 Diseño moderno con Tailwind CSS y NativeWind

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Expo Go (opcional, para desarrollo rápido)

## Instalación

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Inicia la aplicación:

   ```bash
   npx expo start
   ```

3. Selecciona una opción para abrir la app:
   - **Android**: Emulador de Android
   - **iOS**: Simulador de iOS
   - **Web**: Navegador web
   - **Expo Go**: Aplicación Expo Go en tu dispositivo

## Scripts Disponibles

- `npx expo start` - Inicia el servidor de desarrollo
- `npm run android` - Ejecuta en Android
- `npm run ios` - Ejecuta en iOS
- `npm run web` - Ejecuta en web
- `npm run lint` - Analiza el código con ESLint

## Estructura del Proyecto

```
app/                    # Rutas de la aplicación (file-based routing)
├── home/              # Pantalla principal
└── movie/             # Detalle de película

core/                   # Lógica de negocio
├── actions/           # Funciones para obtener datos
├── api/               # Configuración de API

infrastructure/         # Interfaces y mappers
├── interfaces/        # Tipos e interfaces TypeScript
└── mappers/           # Transformación de datos

presentation/           # Componentes UI
├── components/        # Componentes reutilizables
└── hooks/             # Custom hooks (useMovie, useMovies)

config/                # Configuración del proyecto
├── helpers/           # Utilidades
```

## Tecnologías Principales

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma para simplificar desarrollo con React Native
- **TypeScript** - Tipado estático
- **React Router** (expo-router) - Navegación basada en rutas
- **React Query** - Manejo de estado y caché de datos
- **Axios** - Cliente HTTP
- **Tailwind CSS + NativeWind** - Estilos
- **ESLint** - Análisis de código

## Documentación

- [Expo Docs](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/routing/introduction/)
- [React Query](https://tanstack.com/query/latest)
