function produceDrivingRange(num){
 return function (start, finish){
    const startNum = parseInt(start.slice(0,start.length - 2))
    const finishNum = parseInt(finish.slice(0,start.length - 2))
    const difference = startNum > finishNum ? startNum - finishNum : finishNum - startNum
        if(difference > num ){
            return(`${difference - num} blocks out of range`)
        } else {
            return(`within range by ${difference}`)
        }
    }
  }

  function produceTipCalculator(num){
    return function (fare){
        return fare * num 
    }
  }

  function createDriver(){
      let ItemId = 0; 

      return class {
          constructor(name){
              this.name = name
              this.id = ++ItemId
          }
      }
  }