const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find( obj => obj.result === 'W');
  if (win) {
    return win.year
  } else
  return undefined
}