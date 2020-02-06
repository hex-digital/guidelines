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

## Setup Prettier
- Ensure Prettier was selected when initialising the project (or it's a pain)
- Replace the contents of prettier.rc with the one in this repo 

## Setup Stylelint
- Install stylelint, and Nuxt's stylelint module
- `yarn add --dev stylelint @nuxtjs/stylelint-module`
- Copy the stylelint.config.js file from this repo
- Add stylelint-module to Nuxt's build modules

      export default {
        buildModules: [
          // Doc: https://github.com/nuxt-community/stylelint-module
          '@nuxtjs/stylelint-module',
        ]
      }

- For Hex's default setup (recommended), copy the stylelint.config.js file from this repo
- Install the following packages which add further rules
- `yarn add --dev @mapbox/stylelint-processor-arbitrary-tags stylelint-scss stylelint-order stylelint-prettier`
- If not using prettier, remove thr stylelint-prettier dependency, and any references to prettier in the stylelint config file

## Setup Typescript
- TBC (Refer to Whirli repo)

## Setup storybook
- `npx -p @storybook/cli sb init`
- `yarn storybook`
- https://storybook.js.org/docs/basics/introduction/
- If getting an issue with core-js modules:
- **ONLY IF GETTING ISSUE** `yarn add -D core-js@3 @babel/runtime-corejs3`
- See https://nuxtjs.org/guide/release-notes/#v2.6.0 for details

      export default {
        build: {
          babel: {
            presets({ isServer }) {
              return [
                [
                  require.resolve('@nuxt/babel-preset-app'),
                  // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
                  {
                    buildTarget: isServer ? 'server' : 'client',
                    corejs: { version: 3 }
                  }
                ]
              ]
            }
          }
        }
      }
