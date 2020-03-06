const fixtureFirefoxStack:Error =new Error(`
bar@http://192.168.31.8:8000/c.js:2:9
foo@http://192.168.31.8:8000/b.js:4:15
calc@http://192.168.31.8:8000/a.js:4:3
<anonymous>:1:11
http://192.168.31.8:8000/a.js:22:3
`) 
const fixtureStack:Error = new Error(
    `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  `
)

export {
    fixtureFirefoxStack,
    fixtureStack
}