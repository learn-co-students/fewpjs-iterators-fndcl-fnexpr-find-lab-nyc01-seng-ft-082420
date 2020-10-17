const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (statsArray) => {
  let result = statsArray.find(stat => stat.result === "W")
    if (result){
      return result.year
    } else {
      return undefined
    }
}
