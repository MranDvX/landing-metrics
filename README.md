# Landing Metrics

Built following the **Hexagonal Architecture** pattern with **Vue.js** and **TypeScript** to ensure separation of responsibilities, ease testing and keep business logic decoupled from external details.

## 👀 Demo
- [Landing Page on Netlify](landing-metrics.netlify.app)

## 📘 Architecture and patterns

This project follows the Hexagonal Architecture pattern, which allows a clear separation between business logic and external technical details. This facilitates adaptability, testing and code maintenance.

**Folder distribution**

    ``bash
    src/
    |-- adapters/
    |   |-- DataAPIAdapter.ts
    |   |-- LocalStorageAdapter.ts
    |
    |-- domain/
    |   |-- usecases/
    |       |-- calculateVariation.ts
    |       |-- FetchAndProcessDollarData.ts
    |
    |-- ports/
    |   |-- IDataAPIPort.ts
    |
    |-- ui/
    |   |-- assets/
    |   |   |-- images/
    |   |       |-- ...
    |   |
    |-- views/
    |-- Landingpage.vue
    |-- Description.vue
    |-- Services.vue
    |-- References.vue
    |-- Triangles.vue
    |-- DollarChart.vue
    |
    |-- tests/
    |   |-- e2e/
    |   |   |-- ...
    |   |-- unit/
    |   |   |-- ...
    |
    ``

## 🚀 Quick start

1. **Proyect Documentation**

   Make sure you have `yarn` installed. If you don't have it, you can download it from [here](https://classic.yarnpkg.com/en/docs/install/). Then, install the project dependencies:

   ``bash
   yarn install
    ``
2. **Local development**

    To start a development server with hot reloading:

    ``bash
   yarn serve
   ``
    This will compile and serve your project, showing changes in real time.

3. **Production**

    When you are ready to create a production version:

    ``bash
   yarn build
   ``
   This will optimize and minimize the compiled files in the dist folder.

## 🧪 Test
    
Este proyecto cuenta con pruebas unitarias y end-to-end para asegurar la calidad y funcionalidad del código.

- Unit test

    We use Jest for unit testing. Run the tests with:

    ``bash
    yarn test:unit
    ``
- Test E2E

    E2E tests are performed using Cypress. You can run them with:

    ``bash
    yarn test:e2e
    ``
## 🛠️ Tools and configuration
- Linter

    Make sure your code follows best practices and automatically fixes detected problems:

    ``bash
    yarn lint
    ``

## 📖 Recursos adicionales
- [Adobe XD](https://xd.adobe.com/view/7a960ded-077f-4cf0-a0b1-e7538530864f-2fc5/specs/)