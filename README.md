# App de Rick and Morty

Esta es una aplicación simple de React Native construida con Expo que muestra personajes de la API de Rick and Morty. Permite a los usuarios ver una lista de personajes, sus detalles y agregarlos a una lista de favoritos.

## Cómo Empezar

### Prerrequisitos

- Node.js (v18.18 o superior)
- npm o yarn
- La aplicación Expo Go en tu dispositivo móvil (para probar en un dispositivo físico) o un simulador configurado (iOS/Android).

### Instalación y Ejecución

1.  **Clona el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd rick-and-morty-app
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta la aplicación:**
    ```bash
    npm start
    ```
    Esto iniciará el bundler de Metro. Luego puedes:
    - Escanear el código QR con la app Expo Go en tu teléfono.
    - Presionar `i` para ejecutar en el simulador de iOS.
    - Presionar `a` para ejecutar en el emulador de Android.

    Nota: En local puede ocurrir que no encuentra la App en el ip local, para solucionar ese problema se puede utilizar "localhost".

### Ejecutar Pruebas

El proyecto incluye pruebas unitarias para la lógica de obtención de datos de la API. Para ejecutarlas:
```bash
npm test
```

## Estructura del Proyecto

El proyecto sigue una estructura estándar de React Native. El código principal de la aplicación se encuentra en el directorio `src/`, que está organizado de la siguiente manera:

-   `src/api`: Configuración de la instancia de `axios` utilizada para comunicarse con la API de Rick and Morty.
-   `src/components`: Componentes reutilizables de la aplicación (ej: `CharacterCard`).
-   `src/contexts`: Contiene los proveedores de Contexto de React para el manejo de estado global (ej: `FavoritesContext`).
-   `src/hooks`: Hooks que encapsulan la lógica de negocio (ej: `useCharacters` para obtener datos).
-   `src/navigation`: Configuración de la navegación.
-   `src/screens`: Screens de la aplicación (ej: `ListScreen`, `DetailsScreen`).
-   `src/types`: Types de TypeScript para las respuestas de la API (`api.ts`) y algunos parámetros de navegación (`navigation.ts`).

Los estilos están dentro de sus respectivos archivos de componentes.
