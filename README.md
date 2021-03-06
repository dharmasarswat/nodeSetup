# nodeSetup

Basic setup - run -

1.  git init - create empty git repo and adds .gitignore file
2.  npm init - initialize npm project
3.  node -v > .nvmrc - create .nvmrc file or node version lock file
4.  yarn add -D typescript ts-node @types/node - add TS to the project
5.  npx tsc --init - initialize TS in the project
6.  add eslint plugin to code editor
7.  yarn add -D eslint - add eslint to the project
8.  npx eslint --init - initialize eslint
    select
    √ How would you like to use ESLint? · style

        √ What type of modules does your project
        use? · esm

        √ Which framework does your project use?
        · none

        √ Does your project use TypeScript? · No
        / Yes

        √ Where does your code run? · browser
        √ How would you like to define a style for your project? · guide

        ? Which style guide do you want to follow? ...
        > Airbnb: https://github.com/airbnb/javascript
        ? Which style guide do you want to follow? ...
        Airbnb: https://github.com/airbnb/javascript
        ? Which style guide do you want to follow? ...
        Airbnb: https://github.com/airbnb/javascript
        ? Which style guide do you want to follow? ...
        Airbnb: https://github.com/airbnb/javascript
        ? Which style guide do you want to follow? ...
        > Airbnb: https://github.com/airbnb/javascript
        ? Which style guide do you want to follow? ...
        Airbnb: https://github.com/airbnb/javascript
        > Standard: https://github.com/standard/standard
        √ Which style guide do you want to follow? · airbnb
        √ What format do you want your config file to be in? · JavaScript
        Checking peerDependencies of eslint-config-airbnb-base@latest
        The config that you've selected requires the following dependencies:

        @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
        √ Would you like to install them now with npm? · No / Yes

9.  touch .eslintignore
10. add prettier extention to code editor
11. add .prettierrc file - add options from docs
12. yarn add -D eslint-plugin-prettier eslint-config-prettier
    add plugins and rules
13. yarn add -D eslint-import-resolver-typescript tsconfig-paths
14. yarn add -D nodemon
15. yarn add dotenv-safe
16. yarn add @types/dotenv-safe

--------- Testing -----------

17. yarn add -D jest ts-jest @types/jest
    18 npx ts-jest config:init

------- Starting ----------- 18. yarn 19. setup .env
