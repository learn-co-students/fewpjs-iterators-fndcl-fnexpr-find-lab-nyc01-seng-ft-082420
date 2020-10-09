const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(r => r.result === "W")
    if (!!win === true) {
      return win.year
    } else {
      return undefined
    }
}