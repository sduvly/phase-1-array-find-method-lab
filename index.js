
function superbowlWin(recordArr){
  
    const winningSeason = recordArr.find(season => season.result === "W")
    
    console.log(winningSeason)
    
    return !!winningSeason ? winningSeason.year : undefined
}

