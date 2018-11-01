/*
* Test for the index.js
*
*/

// Dependencies
const argsParser = require("./../");
const config = require("./.dwconfig");

/////////////////////////////////////////////
// Test index
/////////////////////////////////////////////

let args = [];

test("Expect method to return empty array", () => {
  argsParser(args, config)
    .then(args => {
      expect(args).toEqual([]);
    })
    .catch(err => console.log(err));
});

test("Expect method to return init", () => {
  args = ["-i"];
  argsParser(args, config)
    .then(args => {
      expect(args).toEqual(["init"]);
    })
    .catch(err => console.log(err));
});

test("Expect method to return help", () => {
  args = ["-h"];
  argsParser(args, config)
    .then(args => {
      expect(args).toEqual(["help"]);
    })
    .catch(err => console.log(err));
});

test("Expect method to return version", () => {
  args = ["-v"];
  argsParser(args, config)
    .then(args => {
      expect(args).toEqual(["version"]);
    })
    .catch(err => console.log(err));
});

test("Expect method to return init and watch", () => {
  args = ["-i", "--watch"];
  argsParser(args, config)
    .then(args => {
      expect(args).toEqual(["init", "watch"]);
    })
    .catch(err => console.log(err));
});
