module.exports = {
  Log(data) {
    console.log(`[\x1b[33;1mScyre\x1b[0m]: ${data}\x1b[0m`)
  },
  Error(data) {
    console.log(`[\x1b[31mScyreError\x1b[0m]: ${data}\x1b[0m`)
  },
  Server(data) {
    console.log(`[\x1b[31mScyreServer\x1b[0m]: ${data}\x1b[0m`)
  }
}
// i got to recode this soon