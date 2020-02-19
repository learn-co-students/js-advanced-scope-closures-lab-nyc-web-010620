function produceDrivingRange(blockRange){
    return function(s1, s2){
        let s1Int = parseInt(s1.slice(0, -2))
        let s2Int = parseInt(s2.slice(0, -2))
        let dist = Math.abs(s1Int - s2Int)

        if (dist <= blockRange){
            return `within range by ${Math.abs(dist - blockRange)}`
        } else {
            return `${Math.abs(dist - blockRange)} blocks out of range`
        }
    }
}

function produceTipCalculator(percent){
    return function(fare){
        return fare * percent
    }
}

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name
            this.id = driverId++
        }
    }

}