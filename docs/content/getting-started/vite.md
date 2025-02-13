---
layout: docs
title: "CoreUI & Vite"
description: The official guide for how to include and bundle CoreUI's CSS and JavaScript in your project using Vite.
group: getting-started
toc: true
---

## Setup

We're building a Vite project with CoreUI from scratch, so there are some prerequisites and up front steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and setup npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Install Vite.** Unlike our Webpack guide, there’s only a single build tool dependency here. We use `--save-dev` to signal that this dependency is only for development use and not for production.

   ```sh
   npm i --save-dev vite
   ```

3. **Install CoreUI.** Now we can install CoreUI. We'll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Popper here.

   ```sh
   npm i --save @coreui/coreui @popperjs/core
   ```

4. **Install additional dependency.** In addition to Vite and CoreUI, we need another dependency (Sass) to properly import and bundle CoreUI's CSS.

   ```sh
   npm i --save-dev sass
   ```

Now that we have all the necessary dependencies installed and setup, we can get to work creating the project files and importing CoreUI.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `src` folder, stylesheet, and JavaScript file to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

When you're done, your complete project should look like this:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

At this point, everything is in the right place, but Vite won't work because we haven't filled in our `vite.config.js` yet.

## Configure Vite

With dependencies installed and our project folder ready for us to start coding, we can now configure Vite and run our project locally.

1. **Open `vite.config.js` in your editor.** Since it's blank, we'll need to add some boilerplate config to it so we can start our server. This part of the config tells Vite where to look for our project's JavaScript and how the development server should behave (pulling from the `src` folder with hot reload).

   <!-- eslint-skip -->
   ```js
   import { resolve } from 'path'

   export default {
     root: resolve(__dirname, 'src'),
     server: {
       port: 8080
     }
   }
   ```

2. **Next we fill in `src/index.html`.** This is the HTML page Vite will load in the browser to utilize the bundled CSS and JS we'll add to it in later steps.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>CoreUI w/ Vite</title>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, CoreUI and Vite!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
       <script type="module" src="./js/main.js"></script>
     </body>
   </html>
   ```

   We're including a little bit of CoreUI styling here with the `div class="container"` and `<button>` so that we see when CoreUI's CSS is loaded by Vite.

3. **Now we need an npm script to run Vite.** Open `package.json` and add the `start` script shown below (you should already have the test script). We'll use this script to start our local Vite dev server.

   ```json
   {
     // ...
     "scripts": {
       "start": "vite",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **And finally, we can start Vite.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

In the next and final section to this guide, we’ll import all of CoreUI’s CSS and JavaScript.

## Import CoreUI

1. **Set up CoreUI's Sass import in `vite.config.js`.** Your configuration file is now complete and should match the snippet below. The only new part here is the `resolve` section—we use this to add an alias to our source files inside `node_modules` to keep imports as simple as possible.

   <!-- eslint-skip -->
   ```js
   import { resolve } from 'path'

   export default {
     root: path.resolve(__dirname, 'src'),
     resolve: {
       alias: {
         '~coreui': resolve(__dirname, 'node_modules/@coreui/coreui'),
       }
     },
     server: {
       port: 8080,
       hot: true
     }
   }
   ```

2. **Now, let's import CoreUI's CSS.** Add the following to `src/scss/styles.scss` to import all of CoreUI's source Sass.

  {{< callout-dart-sass-modules >}}

   ```scss
   // Import all of CoreUI's CSS
   @use "~@coreui/coreui/scss/coreui";
   ```

   {{< callout-dart-sass-deprecations >}}
  
   ```scss
   @import "~@coreui/coreui/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs]({{< docsref "/customize/sass#importing" >}}) for details.*

3. **Next we load the CSS and import CoreUI's JavaScript.** Add the following to `src/js/main.js` to load the CSS and import all of CoreUI's JS. Popper will be imported automatically through CoreUI.

   <!-- eslint-skip -->
   ```js
   // Import our custom CSS
   import '../scss/styles.scss'

   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui'
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   <!-- eslint-skip -->
   ```js
   import Alert from '@coreui/coreui/js/dist/alert';

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from '@coreui/coreui';
   ```

   *[Read our JavaScript docs]({{< docsref "/getting-started/javascript" >}}) for more information on how to use CoreUI's plugins.*

4. **And you're done! 🎉** With CoreUI's source Sass and JS fully loaded, your local development server should now look like this.

   Now you can start adding any CoreUI components you want to use.
