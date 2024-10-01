# Demo: create-vite

```
Vite (French word for "quick", pronounced like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
```

## What you get

Projects scaffolded with  **create-vite**  are comparetively more lightweight than **create-react-app** projects (check the node_modules size!). Only the bare minimum dependencies are to run and build the React app.



1.  Run the create command. Follow the prompts to configure your scaffolded template.
    
    ```
    $ npm create vite@latest
    ```
2.  Start the Application
    
 ```
    $ cd my-app/
    $ npm install
    $ npm run dev
```    

Your browser should open to  [http://localhost:5173/](http://localhost:5173/), and you should see the following output in your terminal.

```
VITE [version]  ready in 338 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

The my-app directory should have the following file structure:

```
my-app
├── node_modules
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public
│   └── vite.svg
└── src
    ├── assets
│       └── react.svg
    └── App.css
    └── App.jsx
    └── index.css
    └── main.jsx
```

## For the project to build correctly, specific files must exist with  _exact_  filenames:

-   `index.html`  is the page template
-   `src/main.jsx`  is the JavaScript entry point

## Resouces

* [https://vitejs.dev/guide/](https://vitejs.dev/guide/)