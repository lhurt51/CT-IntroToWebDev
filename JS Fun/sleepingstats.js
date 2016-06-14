var yearsAlive = prompt("How old are you?")

function getDaysFromYears (years) {
  var days

  if (years) {
    days = 365 * years
  }

  return days
}

var daysIveBeenLiving = getDaysFromYears(yearsAlive)
console.log("I have been alive for " + daysIveBeenLiving + " days.")

function getSleepingHoursFromDays (days) {
  var sleepingHours

  if (days){
    sleepingHours = days * 8
  }

  return sleepingHours
}

var hoursSlept = getSleepingHoursFromDays(daysIveBeenLiving)
console.log("I have slept for " + hoursSlept + " hours.")

function getDaysAsleep (sleepingHours) {
  var daysSleeping

  if (sleepingHours){
    daysSleeping = sleepingHours / 24
  }

  return daysSleeping
}

var daysSlept = getDaysAsleep (hoursSlept)
console.log("I have slept for " + daysSlept + " days")

function getYearsAsleep (sleepingDays) {
  var yearsSlept

  if (sleepingDays){
    yearsSlept = sleepingDays / 365
  }

  return yearsSlept
}

var yearsSlept = getYearsAsleep (daysSlept)
console.log("I have slept " + yearsSlept + " years")

//this converts tempuratures

var tempurature = prompt("What is the tempurature?")
var tempType = prompt("What type is it?")

function convertTemp (degrees, type){
  var conversion

  if (type === "f" || type === "F" ){
    conversion = (degrees - 32) / 1.8000
  }
  else if (type === "c" || type === "C"){
    conversion = degrees * 1.8000 + 32.00
  }
  else {
    alert("Invalid")
  }


  return conversion
}

function tempConversion(originalType){
  var convertedType

  return convertedType = (originalType.toUpperCase() === "F") ? "C" : "F";

//  if (originalType === "f" || originalType === "F"){
//    convertedType = "C"
//  }
//  else if (originalType === "c" || originalType === "C"){
//    convertedType = "F"
//  }
//  else{
//    alert("Invalid")
//  }
//  return convertedType
}

var temp = convertTemp (tempurature, tempType)
var type = tempConversion (tempType)
console.log(temp,type)
