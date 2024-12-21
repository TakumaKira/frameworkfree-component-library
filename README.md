# Framework-Free Component Library

This is a trial to create a framework-free component library. The component library is built with Lit to be aimed at working with any JavaScript framework.

`/shared-components`, `/remix-app`, `/vue-app` were built bare minimum to see how the component library works with different frameworks.

`/shared-components` was the component library to be shared. It is basically a fork from `Lit TypeScript starter project` introduced [here](https://lit.dev/docs/tools/starter-kits/).

`/remix-app` was created with `npx create-remix`, removed templates, and added wrapper component(`/remix-app/app/components/MyElement.tsx`) as a tutorial is introduced [here](https://lit.dev/docs/frameworks/react/) before adding the component to the project.

`/vue-app` was created with `npm create vue@latest`, removed templates, and added the component to the project.

## How to run

### Run component library

1. Run `npm run install` to install the dependencies.
2. Run `npm run build:watch` to build the component library.
3. Run `npm run serve` to serve the component library.
4. Now you can see the component is working on `http://localhost:8000/dev`.

### Run Remix app

1. Run `npm run install` to install the dependencies.
2. Run `npm run dev` to run the Remix app.
3. (Provided you had done with the build step above) Now you can see the exact same component is working on `http://localhost:5173`.

### Run Vue app

1. Run `npm run install` to install the dependencies.
2. Run `npm run dev` to run the Vue app.
3. (Provided you had done with the build step above, and the remix app is still running which changes the port to 5174 as 5173 is already used by remix) Now you can see the exact same component is working on `http://localhost:5174`.

## The left-over

- Make the component library truly ready to be installed as a package
  - Re-structure the project to be able to...
    - make it installable as a package without any extra files
    - handle multiple components
  - Dependence to `lit` should be adequately managed
