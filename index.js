const superbowlWin = (objArray)=>{
    let objFind = objArray.find((item)=>item.result === "W")
    if(objFind != undefined){
      return objFind.year;
    } else {
      return undefined;
    }
  }
  
  superbowlWin(objArray);
