# 19 My PWA, Online Text Editor 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[PNG of app](./Assets/JATE-image.png)

## Links

[REPO on GitHub](https://github.com/MiinoSil/19-PWA-TXT-EDITOR-HW-GIT)

[HEROKU deployment](https://ngo-jate-web-text-editor-app.herokuapp.com/)

[REPO on HEROKU](https://git.heroku.com/ngo-jate-web-text-editor-app.git)

## Table of Contents
1. [Description](#description)
2. [User Story](#user-story)
3. [NPM Package Requirements](#npm-package-requirements)
4. [Installation/Usage](#installation-and-usage)
6. [Credits]()
7. [License]()

## Description

This is an text editor app built using Express.js that will run in the browser as a single-page application meeting PWA criteria. The application will function offline, and uses data persistence techniques to maintain function on browsers even when not supported. Content or data is retrieved and stored using ```idb``` package, a IndexedDB API wrapper. The application is also hosted on HEROKU.

### User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## NPM Package Requirements
| Package Name | More information |
| :---: | :---: |
| Express.js | [Package info](https://www.npmjs.com/package/express) |
| idb | [Package info](https://www.npmjs.com/package/idb) |
| code mirror themes | [Package info](https://www.npmjs.com/package/code-mirror-themes) |
| babel | [Package info](https://babeljs.io/) |
| webpack | [Package info](https://www.npmjs.com/package/webpack) |

## Installation and Usage

Install NPM packages individually or if cloning from REPO with package.json, run the following code:
```
npm install
```

To build webpack, run the following code:
```
npm run build
```

To run server, run the following code:
```
npm run start
```

Once server is running, view the app at the [localhost](http://localhost:3000) OR visit on the [HEROKU deployment](https://ngo-jate-web-text-editor-app.herokuapp.com/)

## Credits

Author: Andrew Ngo
[Github Profile](https://github.com/MiinoSil)

## License

[License info](/LICENSE)