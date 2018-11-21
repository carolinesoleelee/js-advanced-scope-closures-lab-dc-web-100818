function produceDrivingRange(blockRange){
  return function(start, end){
     let math = (parseFloat(end, 10) - parseFloat(start, 10))
      let range = Math.abs(math);
     return ( range > blockRange  ? `${Math.abs(range - blockRange)} blocks out of range` : `within range by ${Math.abs(blockRange - range)}`);
  }
}

function produceTipCalculator(){
    return function(tip){
    return (tip * .10)
    }
}

function createDriver(){
  let id = 0

  return class{
    constructor(name){
      this.id = ++id
      this.name = name
    }
  }
}
