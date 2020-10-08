const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

const superbowlWin = recordsArray => {
  let results = recordsArray.find( record => record.result === "W" )
  return results.year
}