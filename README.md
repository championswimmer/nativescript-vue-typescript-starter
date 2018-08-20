# NS Vue Typescript Sample

> A native mobile application built with NativeScript-Vue in Typescript

## Technologies

### NativeScript
A cross-platform Javascript platform that allows writing native (not hybrid) mobile apps
for iOS and Android using Javascript.

https://nativescript.org

### Vue JS
A modern Javascript frontend framework, strongly believing in single file components.

https://vuejs.org

#### Vue Router
Default router (made by official maintainers of Vue JS)

https://router.vuejs.org/

#### Vuex
Default state management framework for Vue (made by official maintainers of Vue JS)

https://vuex.vuejs.org/

### Typescript
A language developed by Microsoft that is a superset of Javascript ES2017 standard.
Adds the concept of strong types, interfaces to Javascript. Compiles down to Javascript.

https://typescriptlang.org

## Usage

### Installing and Running
Here `<platform>` can be `android` or `ios`

``` bash
# Install dependencies
npm install
# -- or -- 
yarn 

# Build, watch for changes and run the application
tns run <platform> --bundle
```

### Debugging vs Production

During usual run, project runs with following settings -
1. Code is **not** minified
2. Vue.config.silent is false, so every component creation is logged

```bash
# Build, watch for changes and debug the application
tns debug <platform> --bundle
```

To minify code, and prevent Vue logs -

```bash
# Build for production
tns build <platform> --bundle --env.production

tns run <platform> --bundle --env.production
```