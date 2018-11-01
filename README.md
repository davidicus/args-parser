# Argz-Parser [![Build Status](https://travis-ci.org/davidicus/argz-parser.svg?branch=master)](https://travis-ci.org/davidicus/argz-parser)

A utility module used by CLI tools for parsing arguments. Returns an array of corresponding actions to be taken.

## Configuration

This module must be passed a config file in order to parse the arguments.

```
/*
* Config file for dw cli
*
*/

// Dependencies
const pj = require("./package.json");

module.exports = {
  version: pj.version,
  help: `
    Usage:
    dw [flag]        dw calls the cli options chosen by passing a flag

    Options:
    -i, --init       install a new Devwatch blog in current directory
    -h, --help       print help menu
    -v, --version    print current version of kick-init package
    -w, --watch      watch the project for changes, site recompiles on change

    Examples:
    # creates a new blog in current directory
    $ dw --init
    # Print help menu
    $ dw -h
  `,
  flags: [
    {
      flag: ["-i", "--init"],
      action: "init"
    },
    {
      flag: ["-h", "--help"],
      action: "help"
    },
    {
      flag: ["-v", "--version"],
      action: "version"
    },
    {
      flag: ["-w", "--watch"],
      action: "watch"
    }
  ]
};
```

## Basic Use

Install module by running

```
$ yarn add args-parser
```

or

```
$ npm -i args-parser
```

Then call args-parser passing in the argument list and the config file. This function will return a promise that resolves into an array of string names representing the actions to be taken.

```
"use strict";

const path = require("path");
const { argsParser } = require("./argsParser");
const { init } = require("./lib/dwFunctions");
const config = require("./.dwconfig.js");

module.exports = args => {
  args = typeof args == "object" ? args : false;

  if (args) {
    argsParser(args, config).then(args => {
      args.map(arg => {
        switch (arg) {
          case "init":
            init(path.join(__dirname, "/bin/setUpApp.sh"), process.cwd());
            break;
          case "help":
            console.log(config.help);
            break;
          case "watch":
            console.log("im watching");
            break;
          default:
            console.log(config.version);
        }
      });
    });
  } else {
    throw Error(
      "\x1b[31m%s\x1b[0m",
      "Improper arguments passed to the devwatch cli"
    );
  }
};
```
