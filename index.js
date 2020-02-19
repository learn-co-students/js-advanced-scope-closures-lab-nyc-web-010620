const produceDrivingRange = function(blockRange){
        return function(first,second){
            const start = parseInt(first.slice(0,-2))
            const finish = parseInt(second.slice(0,-2))
            const difference = start > finish ? start - finish : finish - start
            if (difference < blockRange) {
                return `within range by ${blockRange - difference}`
            } else {
                return `${difference - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(num){
    return function(fare){
        return num * fare
    }
}

function createDriver(){
    let DriverId = 0;
    return class {
        constructor(name){
        this.name = name;
        this.id = ++DriverId;
        }
    }
}