const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

// console.log(record.filter(function(s){return s['year'] === "2018"}))


function superbowlWin(array){
  let result = array.find(record => record.result === "W")
  return result ? result.year : undefined
}

console.log(superbowlWin(record))