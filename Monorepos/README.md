# LERNA

1. Able to run scripts across packages
2. For cases to run scripts just for some of the packages, you use the `--scope=` to use in the scripts and mention what packages you want to run the test.
3. --conventional-commits -> Is a way to run commits as in here: https://www.conventionalcommits.org/en/v1.0.0-beta.2/
4. the command of `npm run new-version` will create a GIT TAG and some CHANGE LOGS and it will push all this to GitHub -> where you host your code. -- The CHANGE LOG
5. instead of `--scope` flag - using the `--since` flag -- run the packages that have changes since the last release
