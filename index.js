superbowlWin = (record) =>{
  const result = record.find(i => i.result === "W")
  if(result){
    return result.year
  }else{
    return undefined
  }
}
