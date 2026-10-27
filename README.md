# Proyecto Veterinario Fullstack II

Este proyecto tiene la finalidad de aprender a crear paginas html con React, Vite.

Con la libreria de Bootstrap se puede crear, ordenar y modificar partes de la pagina al gusto que uno necesite para ayudar al cliente a poder navegar comodamente por la pagina.


## Antes de hacer funcionar la pagina

Por predefinido al descargar o clonar este repositorio no tendra una carpeta vital llamada ```node_modules```, esta carpeta contiene las funcionalidades para darle vida al html, para poder tener la carpeta lo que se necesita hacer es entrar a VSC (Visual Studio Code) abrir la consola (```Ctrl + J```) y ingresar ```npm install```
Una vez ingresado el comando y presionar Enter este instalara la carpeta ```node_modules``` y podra iniciar correctamente la pagina.

## Arranque de la pagina

Una vez hecho lo anterior se puede ingresar el siguiente comando ```npm run dev```.
Este iniciara la pagina con sus componentes y todo que tenga dentro.

En el caso de querer detener la pagina puede o cerrar la consola, presionar ```q``` y despues ```Enter```, esto detendra la pagina

## Funcionalidad del proyecto

Ya con todo iniciado y listo podemos entra a la pagina, para esto basta con copiar el link que salga en la consola cuando iniciamos el codigo, usualmente siendo ```Local:   http://localhost:NumeroPuerto/```, por ejemplo ```Local:   http://localhost:5173/```, o presionando ```o``` y despues ```Enter``` para poder abrir directamente la pagina en una pestaña nueva.

Para poder realizar testeos de la carpeta test, se requiere primero detener la pagina (revise "Arranque de la pagina"), ya despues de eso en la consola debe ingresar ```npm run test```, con esto se iniciara el proceso de testear unas partes del codigo del proyecto, tambien si desea ver mas a fondo los testeos tambien puede usar ```npx vitest --reporter=verbose```, en caso de querer terminar el testeo basta con solo precionar la tecla ```q``` y el testeo finalizara, permitiendole iniciar la pagina denuevo o cerrar el proyecto por completo.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
