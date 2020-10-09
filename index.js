const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let wins = array.find(win => win.result === 'W')
  if(typeof wins != 'undefined'){
    return wins.year
  }else{
    return undefined
  }
}
