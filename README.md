# GL React Starter

Yet another React starter project.

Before you proceed further, we'd like to say:

**We hope you will gain knowledge just by reading the code and documentation even WITHOUT using the starter itself**.

If you do use the starter, we hope:

1.  You can kickstart your React project **quickly** by leveraging [GitHub Repository Template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/).
2.  You can keep the **_reinvention of the wheel_ at a minimum** by using standardized de-facto libraries.
3.  To still be **flexible enough for customization** (in case our standardized libraries do not suit you).
4.  For anyone to be able to **apply the knowledge in this repo into their existing project just by reading this repo**.

To re-iterate:

1. The ultimate goal for this starter project is not the **code**, but the **knowledge**.
2. If you already have your own project structure, you **should NOT** try to change it to be like this project structure. Unless you have a strong reason to.
3. If you already have your own project and plan to incorporate something (e.g. i18n), hopefully you can do it **faster** just by reading this repo.
4. We provide **no npm package to install**. Our main goal is the dissemination of **knowledge**, not the **code**.

---

## FAQ (TODO)

1. Have you heard about Create React App? Why another starter?
2. What about `gl-commons-npm`?

---

## Folder Structure

**.vscode**

- Contains custom VSCode settings, e.g. `tabSize`, `formatOnSave`.

**public**

- Contains public static files, e.g. index.html, favicon.ico, images, fonts

**scripts**

- Contains script to set up this starter.

**server**

- Contains simple Express server script to simulate running production build.

**src**

- Contains business logic code.
- Majority of file has header comments in it. Please read the header comments first before reading the source code.
- Subfolders:
  - **`apps/`**
    - In a typical scenario, there will be only 1 subfolder inside `apps/`.
    - We can add more subfolders to test small PoC.
    - **`Nested`**: Sample on nested (multi-level) `<Route>`.
    - **`Root`**: Sample on one level `<Route>`.
    - **`Separated`**: Sample on multiple (and separated) `<Router>`.
  - **`common/`**
    - Contains codes shared to all "apps" in `apps/`.
    - **`constants`**: Centralized constants (from `.env.defaults` or our arbitrary constants).
    - **`GLLoadable`**: Contains default implementation for `GLLoadable.ts` in `domain/`.
    - **`i18n`**: Contains default implementation for i18n. EN and ID strings translation file are provided.
  - **`domain/`**
    - Contains custom `type` and `interface` declaration.
    - Default implementation for everything in this folder is in `common/`.
  - **`global.d.ts`**
    - Contains declaration to augment `Window` (JavaScript object).
  - **`index.tsx`**
    - Main entry point for this codebase.
  - **`typings.d.ts`**
    - Contains arbitrary declaration for the whole codebase.
    - Check the file to know why it's separated from `global.d.ts`.

**.env.defaults**

- Default values that will be used if you don't specify it yourself.
- If you do specify your own `.env` file, check the webpack configuration (`webpack.dev.js` or `webpack.prod.js`), specifically on `path` option.
- Update it as necessary.

**.env.example**

- Contains information on what values need to be present if you specify your own .env file.

**.gitignore**

- Contains files & folders to be ignored by git.

**jest.config.js**

- Config file to override default `jest` (test framework) options.

**package-lock.json**

- Describes the dependency tree generated by installing dependencies in `package.json`.
- [Intended to be committed into source repositories](https://github.com/npm/npm/blob/v5.0.0/doc/files/package-lock.json.md).

**package.json**

- Various script and dependency list.
- Each dependency is accompanied with short description on what it does / why it is needed.

**prettier.config.js**

- Config file to override default Prettier options.

**README.md**

- This file.

**tsconfig.json**

- TypeScript config file.

**tsconfig.test.json**

- TypeScript config file specific for test environment. Check the file on why we need it.

**tslint.json**

- TypeScript lint config file.

**webpack.common.js**

- Webpack config that's common for all build type (dev, prod).

**webpack.dev.js**

- Webpack config for dev build (also for webpack-dev-server config)

**webpack.prod.alt.js**

- Webpack config for alternate production build. It extends **webpack.prod.js**. Check the file on what it does and how it differs.

**webpack.prod.js**

- Webpack config for production build.

---

## Development

1. Install [vscode](https://code.visualstudio.com/).
2. Install the following extensions:
   1. [TSLint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) for highlighting TSLint errors. Also to fix it automatically (when applicable). The config to auto fix (on save action) has been included on `.vscode/settings.json`.
   2. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Analogous to TSLint extension above but it's for Prettier.
   3. [psioniq File Header](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header) (for header comment file). vscode command to insert header comment: `Header Insert` (on Mac keyboard: Cmd+P, then type `> Header Insert` (notice the angle bracket)). Template and instruction on how to insert it is in the bottom of this readme.
3. Run `./scripts/setup.sh`
   1. One of the goal for this script is to install node (using [NVM](https://github.com/nvm-sh/nvm)).
   2. Sometimes we still can't execute `node` command on terminal after running the script. When this happens, please try to install it yourself. Instructions [here](https://github.com/nvm-sh/nvm).
   3. Make sure you can execute `node` and `npm` on your terminal before proceeding.
4. Run `npm start`. For subsequent development, just run this step. No need to do step 1-3 again.
5. Navigate to `localhost:3000`

---

## Deployment

This is a CSR-only, single page web application.

1. To build the arficat, run `npm run build`.
2. The artifact will be on folder `dist/`.
3. To inject environment variables:
   1. As this is a web application, it can't read values from environment variables on runtime.
   2. We need to "inject" them into the built artifact by using **string replacement**.
   3. The string(s) that need to be replaced are in `.env.defaults` file.
   4. For example, the content of `.env.defaults`:
   ```
   GRAPHQL_URL=http://localhost:8080
   DUMMY_KEY=dummy value
   ```
   5. You have environment where the values should be:
   ```
   GRAPHQL_URL=https://production.com:8080
   DUMMY_KEY=production value
   ```
   6. What you need to replace:
   - `GRAPHQL_URL:"http://localhost:8080"` with `GRAPHQL_URL:"https://production.com:8080"`
   - `DUMMY_KEY:"dummy value"` with `DUMMY_KEY:"production value"`.

---

## User Setting for Psioniq File Header

1. Open `vscode user setting`. On Mac: Preference > Settings and then click the curly bracket icon on top right corner to open `settings.json` file so you can edit it directly. The template is not included in `.vscode/settings.json` because it will contain developer's name and email. So it will be different on different machine.
2. Add the following entries (don't forget to update it accordingly using your name and email):

```
"psi-header.variables": [
    [
      "author",
      "<your full name>"
    ],
    [
      "authoremail",
      "<your name>@<your domain>"
    ],
    [
      "modifyauthor",
      "<your full name>"
    ],
    [
      "modifyauthoremail",
      "<your name>@<your domain>"
    ]
  ],
  "psi-header.templates": [
    {
      "language": "*",
      "template": [
        "<<filename>>",
        "DEFAULT DESCRIPTION. EDIT OR DELETE THIS.",
        "",
        "Author: <<author>> (<<authoremail>>)",
        "Created at: <<filecreated('MMMM Do YYYY')>>",
        "-----",
        "Last Modified: <<dateformat('MMMM Do YYYY')>>",
        "Modified By: <<modifyauthor>> (<<modifyauthoremail>>)",
        "-----",
        "Copyright (c) <<year>> GLAIR. All rights reserved.",
      ]
    }
  ],
  "psi-header.changes-tracking": {
    "isActive": true,
    "modAuthor": "Modified By: ",
    "modDate": "Last Modified: "
  }
```
