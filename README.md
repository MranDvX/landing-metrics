# Landing Metrics

Construido siguiendo el patrón de **Arquitectura Hexagonal** con **Vue.js 3** y **TypeScript** para asegurar la separación de responsabilidades, facilitar la prueba y mantener la lógica de negocio desacoplada de detalles externos.

## 👀 Demo
- [Demo de la landing](landing-metrics.netlify.app)

## 🚀 Inicio rápido

1. **Distribución de carpetas**
    ```bash
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
    ```

2. **Inicio Rápido**
    
   Asegúrate de tener `yarn` instalado. Si no lo tienes, puedes descargarlo desde [aquí](https://classic.yarnpkg.com/en/docs/install/). Luego, instala las dependencias del proyecto:

   ```bash
   yarn install
    ```
3. **Desarrollo local**

    Para iniciar un servidor de desarrollo con recarga en caliente:

    ```bash
   yarn serve
   ```
    Esto compilará y servirá tu proyecto, mostrando cambios en tiempo real.

4. **Construcción para producción**

    Cuando estés listo para crear una versión de producción:
    ```bash
   yarn build
   ```
   Esto optimizará y minimizará los archivos compilados en la carpeta dist.

## 🧪 Pruebas
    
Este proyecto cuenta con pruebas unitarias y end-to-end para asegurar la calidad y funcionalidad del código.

- Pruebas unitarias

    Utilizamos Jest para las pruebas unitarias. Ejecuta las pruebas con:

    ```bash
    yarn test:unit
    ```
- Pruebas end-to-end

    Las pruebas E2E son realizadas usando Cypress. Puedes ejecutarlas con:

    ```bash
    yarn test:e2e
    ```
## 🛠️ Herramientas y configuración
- Linter

    Asegúrate de que tu código siga las mejores prácticas y corrige automáticamente los problemas detectados:

    ```bash
    yarn lint
    ```

## 📘 Arquitectura y patrones

Este proyecto sigue el patrón de Arquitectura Hexagonal, lo que permite una separación clara entre la lógica de negocio y los detalles técnicos externos. Esto facilita la adaptabilidad, las pruebas y el mantenimiento del código.

## 📖 Recursos adicionales
- [Adobe XD](https://xd.adobe.com/view/7a960ded-077f-4cf0-a0b1-e7538530864f-2fc5/specs/)