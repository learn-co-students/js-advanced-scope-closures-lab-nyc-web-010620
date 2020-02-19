function produceDrivingRange(blockRange) {
    return function (startBlock, endBlock) {
        const tripRange = parseInt(endBlock) - parseInt(startBlock)
        return tripRange < blockRange ? `within range by ${blockRange - tripRange}` : `${tripRange - blockRange} blocks out of range` 
    }
}

function produceTipCalculator(tipPercent) {
    return function (fare) {
        return fare * tipPercent
    }
}

function createDriver() {
    let driverId = 0

    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}