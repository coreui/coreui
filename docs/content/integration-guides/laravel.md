---
layout: docs
title: CoreUI & Laravel
description: The official guide for how to include and bundle CoreUI’s CSS and JavaScript in your Laravel project.
group: integrations-guides
toc: true
---


## Setup 

1. **Create a new Laravel project.** Start by creating a new Laravel project

   ```sh
   composer create-project laravel/laravel example-app
   ```

   after installtion go to project

   ```sh
   cd example-app
   ```

2. **Install CoreUI** Now we can install CoreUI. We’ll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don’t plan on using those components, you can omit Popper here.

   ```sh
   npm i --save @coreui/coreui @popperjs/core
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @popperjs/core
   ```

3. **Install additional dependency.** In addition to CoreUI, we need another dependency (Sass) to properly import and bundle CoreUI’s CSS.

   ```sh
   npm i --save-dev sass
   ```

Now that we have all the necessary dependencies installed and setup, we can get to work creating the project files and importing CoreUI.

## Project structure

We’ve already created the `example-app` folder and installed all dependencies. Now we’ll also create our `app.scss` file. Run the following from `example-app`, or manually create the folder and file structure shown below.

```sh
mkdir resources/sass
touch resources/sass/app.scss
```

You can also remove `app.css` file because we don't need it.

```sh
rm resources/css/app.css
rmdir resources/css
```

When you're done, your complete project should look like this:

```text
example-app/
├── app/
├── bootstrap/
├── config/
├── database/
├── node_modules/
├── public/
├── resources/
│   ├── js/
│   │   ├── app.js
│   │   └── bootstrap.js
│   ├── sass/
│   │   └── app.scss
│   └── views/
│       └── welcome.blade.php
├── routes/
├── storage/
├── tests/
├── vendor/
├── ...
├── composer.json
├── composer.lock
├── package-lock.json
├── package.json
├── ...
└── vite.config.js
```


## Configure Vite

With dependencies installed and our project folder ready for us to start coding, we can now configure Vite.

1. **Open `vite.config.js` in your editor.** Since it’s not blank, we’ll need to make some changes to work with our `app.scss` file instead of `app.css`.

   ```diff
   import { defineConfig } from 'vite';
   import laravel from 'laravel-vite-plugin';

   export default defineConfig({
      plugins: [
         laravel({
   -        input: ['resources/css/app.scss', 'resources/js/app.js'],
   +        input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
         }),
      ],
   });
   ```

2. **Next, we modify `resources/views/welcome.blade.php`.** We'll need to add our SCSS and JavaScript files to our blade file.

   ```diff
   <!DOCTYPE html>
   <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
      <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">

         <title>Laravel</title>

         <!-- Fonts -->
         <link rel="preconnect" href="https://fonts.bunny.net">
         <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
   +
   +     <!-- Scripts -->
   +     @vite(['resources/sass/app.scss', 'resources/js/app.js'])

         <!-- Styles -->
   ```

## Import CoreUI

1. **Now, let’s import CoreUI’s CSS.** Add the following to `resources/sass/app.scss` to import all of CoreUI’s source Sass.

   ```scss
   // Import all of CoreUI's CSS
   @import "@coreui/coreui/scss/coreui"
   ```

   **For PRO users**

   ```scss
   // Import all of CoreUI PRO's CSS
   @import "@coreui/coreui-pro/scss/coreui"
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs]({{< docsref "/customize/sass#importing" >}}) for details.*

2. **Next we import CoreUI’s JavaScript**. Add the following to resources/js/bootstrap.js to import all of CoreUI’s JS. Popper will be imported automatically through CoreUI.
   <!-- eslint-skip -->
   ```js
   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui'

   window.coreui = coreui
   ```

   **For PRO users**
   <!-- eslint-skip -->
   ```js
   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui-pro'

   window.coreui = coreui
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:
   <!-- eslint-skip -->
   ```js
   import { Tooltip, Toast, Popover } from '@coreui/coreui'
   ```

   *[Read our JavaScript docs]({{< docsref "/getting-started/javascript" >}}) for more information on how to use CoreUI's plugins.*

## Build and Run Laravel App

1. **Now we need to build CSS and JS files.** From the `example-app` folder in your terminal, run that 

   ```sh
   npm run build
   ```

2. **And finally, we can start our Laravel App.** From the `example-app` folder in your terminal, run:

   ```sh
   php artisan serve	
   ```

3. **And you’re done!** 🎉 With CoreUI’s source Sass and JS fully loaded, your local development server should now look like this.

   Now you can start adding any CoreUI components you want to use.