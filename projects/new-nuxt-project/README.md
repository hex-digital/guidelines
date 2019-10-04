# New Nuxt Project
When setting up a new Nuxt project, there are some common setups we often want to include.

As we don't want to maintain a skeleton theme as Nuxt advances, it is easier for us to maintain a list of steps to setup Nuxt with these changes.

## SCSS and Inuit

- Setup scss folder structure by copying it from this repo
    - `cp -R /this/repo/projects/new-nuxt-project/scss /path/to/app/assets/.`
- Install inuit
    - `yarn add inuitcss inuitcss-hex`
- Setup scss loading and style resource
    - `yarn add sass-loader node-sass @nuxtjs/style-resources`
- Add style-resources to modules sections, and styleResources key for settings

        export default {
          /*
           ** Global CSS
           */
          css: ['assets/scss/app.scss'],
          /*
           ** StyleResources: SCSS to load in all Vue components - don't load any outputted CSS here, just settings + tools
           */
          styleResources: {
           scss: ['assets/scss/settings-tools.scss'],
          },
          /*
           ** Nuxt.js modules
           */
          modules: [
            '@nuxtjs/style-resources',
          ],
        }

## Setup Stylelint

## Setup typescript
