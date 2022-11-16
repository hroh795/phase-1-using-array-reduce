const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (v1, v2){
  return v1+v2;
})
//sum of all of the battery amounts in the batteryBatches array
