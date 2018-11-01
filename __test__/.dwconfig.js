/*
* Config file for dw cli
*
*/

// Dependencies
const pj = require("./../package.json");

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
