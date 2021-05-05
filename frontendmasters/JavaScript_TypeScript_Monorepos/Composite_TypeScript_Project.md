## Agenda

- Yarn workspaces
- TypeScript composite projects
- Build scripts for Monorepos
- Lerna
- API Extractor
- "Package private" and "Project private" interfaces
- Hassle-free "publish to npm" testing
- Versionng strategies
- App and Library Use cases
- "Wrapper" packages
- Private "dev utility" packages

### Intro

Yarn workspaces allows multiple little subprojects to work when you're executing code
such as `yarn build` from within the right subfolder -- things work exactly as you would expect. 

* The Node.js `require` and `resolve` methods work -> https://nodejs.org/api/modules.html#modules_all_together 

* Why having a `node_modules` folder at the root of the project is sufficient in order to help you understand why the subfolder work and it would work even before `yarn workspaces` was live.

### Yark workspaces

* Yarn provides us with the lowest level of monorepo tooling, through Workspaces.

* We want to have one central place where the settings live, and then very thin configuration files on a per package bases, that we can kind of forget about.

* The `tsconfig.settings.json` file is as a sibling of the packages. 

### Composite TypeScript Project

* TypeScript has a way of describing a build process that involves multiple subparts of a project where the pieces of the project can refer to build outputs of other pieces -- this saves us from having to build the lowest level chunks and then go and build the other chunk which includes the lowest level piece.

You can build these things as independent parts and then stitch together like a quilt.

* TypeScript supports the concept of several sub-projects that _refer_ to eachother's build output. This will make the most frequently-performed tasks much faster (i.e., an incremental build) so it's in our interest to set this up.



* The `tsconfig.tsbuildinfo` -> This type of file represent the information that is used when determing whether the current build is in sync with the current source code.

### Cleaning Output & rimraf

The `tsconfig.json` file in the `packages` folder is for the purpose of: **Building whatever is necessary, for all of the packages**

**Commands**

1. tsc -b . => Building all the packages
2. rm -rf */*.tsbuildinfo */dist


* Part of the current state of monorepo tooling involves cashing layers, and it involves potential things falling out of sync. 

* So you want to give yourself a nice button you can click to clear everything away and start fresh.

* Installing `rimraf` -> is a platform independent, `rm -rf` -> 

### Volta Executable Version Q&A

1. Which TS we are using?

2. Volta manages global and package dependencies and it's job is to make sure you get the right thing, depending on context.

3. All the things that are in the `.bin` folder, inside `types` node_modules, and `utils` node_modules, they are just symlinks. `Symbolic links` that take you to the `workspace` level node_modules. 

3.1 The reason they are placed in the local `node_modules` is that not every tool system, can handle the idea of being invoked from a nonconventional location.

### Adding Tests with Jest & Babel

Run this command in both the `utils` and `types` workspaces.

`yarn add -D @babel/preset-env @babel/preset-typescript`

- Now following the convention of `one meaningful source of truth`  

- Lets have a Babel config in tha `packages` folder that every package can extend from.

* In the `.babelrc` file, we have the `presets` array, inside it we have the `preset-env`-> its purpose is for babel to transform whatever it needs to transform based on the build target environment. Make it work in `node` version 10. - this will automatically simplify things down, based on the build target you specify.

### Yarn 2 and Dependencies Q&A

* Volta manages the version of things in your toolchain

* Why we are putting `jest` as a `package` level dependency, and why is `rimref` at the workspace level. 
    What if we use a slightly different version of jest for one of the packages, the package that has the different jest version, will download all that version, this is connected with the Nodejs `require`. 