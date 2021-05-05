### Linting & ESLint Setup

Having a root `.eslintrc` file and then very think layers of `.eslintrc` files for each package.

* The differences in `tsconfig` files for package to package, like are we parsing jsx or not. You have to inform the linter about that, so it can act accordingly.

* For each package's `package.json` file will get a new script for linting.

`"lint": "eslint src --ext js,ts"`

* Each `package.json` will get a lint task - with this whenever you go to a project and run `yarn lint` -- you'll run `eslint` `src` and analyze javascript and typescript files.

### Lerna Config & Versioning

Lerna solves a lot of problems, one of them is that Lerna provides a mechanism to run a command on each package in our monorepo with one CLI. Example, running all the tests.

* Lerna is a workspace level dependency, so we will install it at the workspace level.

`yarn add -DW lerna`

* We got the `lerna.json` file into the root of the monorepo project.

Some notes for the content inside the `lerna.json` file.

1. "packages": ["packages/*"],
    This first property, `package` it is kind of equivalent to `workspaces` in our `package.json`

    We have to tell Lerna about where it could find our packages, but why do we need to specify this here, if we already are specifying it in our `package.json` file.

    - Lerna works with NPM, in addition to `yarn` 
    - This is connected to the `"npmClient": "yarn"` - we specify that we want to use Yarn, but we could use `npm` 
    - The reason is that NPM doesn't have the concept of `workspaces` - and there needs to be some way to clue Lerna in, about where it could find our stuff.
    - The second thing is that Lerna deals with things like publishing packages, there may be things that are present in your workspace that you do not wish Lerna to manage.

### Lerna Commands

* `Lerna bootstrap` - Link local packages together and install remaining package dependencies

    - Bootstrap includes linking, but bootstrap does more things, it's like superset of `yarn link`.

* `Lerna link` - Symlink together all packages that are dependencies of each other

* `Lerna add` - Add a single dependency to matched packages

* `Lerna run` - Run an npm script in each package that contains that script.

* `Lerna exex` - Execute an arbitrary command in each package.

- Lowest level to highest level

1. `Lerna link` - As soon as we have interdependencies between our packages, we're going to want to have some of our packages discoverable in our node_modules folder of another package.

    Example: @shlack/ui will need @shlack/utils
    it needs to find it in the `node_modules` folder the way it could find any other package. 
    
    So, `link` creates the `symlinks` that make that work.

2. `Lerna bootstrap` does the same thing as `link`, but it runs the `yarn install` in it, downloads anything that it needs to be downloaded.

3. `Lerna run` - it's like a for loop with a `yarn script` - if you want to run `lerna run build`, will go through each package, and will `build` them.
    It's smarter than this, it will analyze who depends on who, and it will first `build` the lowest level of packages, and only after that's build, it will build things that depend on these packages. So, it build from the bottom up. This is what you would want in order to make sure things stay in sync.

4. `Lerna exec` is kind of like `Lerna run` - however you can run an arbitrary command.

    You could run `ls`, or `mkdir`, you'll not run like `yarn test`, you'll just run some sort of shell command.

5. `Lerna add` - like `yarn add`

* Question: Why do we need the local symlinks?

There are a couple of reasons
1. The `versions` 
2. Tooling, when you have the `build` that watches for changes in certain places, often you'll watch a folder and then all subfolders. 
    For example, we have a `webpack` running in the `utils` folder, and you would want to update anytime you saved something, you can tell webpack to monitor `node_modules` and if you're in that package working, then webpack dev server will bounce, then you'll see the changes in front of you. 

    That'll only work, if you're in the `utils` node_modules, that's why the files that you're touching 





