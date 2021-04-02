### Development Utils

`npm i -D npm-run-all`

- allows to run npm scripts in sequnce or parallel

`npm i -D rimraf`
`npm i -D replace-in-file`
`npm i -D wait-on `

---

### Testing libs and packages

`npm i -D cypress`

`npm i -D @briebug/cypress-schematic`

`ng add @briebug/cypress-schematic`

- removes default protactor integration from Angular

`angular.json`

```typescript
"e2e": {
    "builder": "@briebug/cypress-schematic:cypress",
    "options": {
        "devServerTarget": "skele:serve",
        "watch": true,
        "headless": false
    },
    "configurations": {
        "production": {
            "devServerTarget": "skele:serve:production"
        },
        "ci": {
            "devServerTarget": "skele:serve",
            "browser": "chrome",
            "headless": true,
            "watch": false
        }
    }
}
```

`package.json`

```json
"scripts": {
    "e2e:ci": "ng e2e --configuration=ci"
}
```

`npm install --save-dev start-server-and-test`

    ```
    Now that our tests run locally, let's kick of a small CI (continuous integration) pipeline. A good way to prepare for this, is to create npm scripts and combine them so that the build system can use a single script as entry point. By following this method, you can try the CI steps locally before pushing online. Moreover npm scripts are rather independent from any actual build system.

    On CI, we need to start our server in the background and wait for it to bundle our application, which might take a while. Then we need to start the Cypress test runner, go through the tests and shut down the server when the tests finish. Luckily we can do this all with a single utility called start-server-and-test as described in the Cypress docs:
    ```

---

### SCSS

`angular.json`

```json
"architect": {
    "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
        "outputPath": "dist/skele",
        "index": "src/index.html",
        "main": "src/main.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "tsconfig.app.json",
        "aot": true,
        "assets": ["src/favicon.ico", "src/assets"],
        "styles": ["src/styles.scss"],
        "scripts": [],
        //Add This to allow @import "filename"
        "stylePreprocessorOptions": {
            "includePaths": ["./src/scss"]
        }
    }
}
```

Use Normalize convention

https://ageek.dev/normalize-css
