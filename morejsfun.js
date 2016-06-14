var userIntentions = prompt('Would you like to view add or quit the list?')
var toDoList = ['feed the fish', 'make dinner', 'fall asleep']

function displayList (list) {
  for (var i = 0; i < list.length; i++) {
    console.log(i + ': ' + list[i])
  }
}

while (userIntentions !== "quit") {
  if (userIntentions === "view") {
    displayList(toDoList)
  } else if (userIntentions === "add") {
    var listAdd = prompt('Add stuff to the list.')
    toDoList.push(listAdd)
    displayList(toDoList)
  }

  input = prompt('What would you like to do')
}

function circle (radius){
  this.radius = radius
  this.diameter = radius * 2
  this.getArea = function (){
    return (3.14 * (this.radius * this.radius))
  }
  this.getCircumference = function (){
    return (2 * this.radius * 3.14)
  }
}

var myCircle = new circle(5)

var movie = [
  {
    name: "Pineapple Express",
    type: "comedy",
    rating: "10/10",
    cast: ["Seth Rogan", "James Franco"],
    watched: "yes",
  },
  {
    name:"21 Jump Street",
    type: "comedy",
    rating: "10/10",
    cast: ["Chaning Tatum", "Jonah Hill"],
    watched: "yes",
  },
  {
    name: "Ride Along",
    type: "comedy",
    rating: "10/10",
    cast: ["Ice Cube", "Kevin Hart"],
    watched: "yes",
  },
  {
    name: "22 Jump Street",
    type: "comedy",
    rating: "10/10",
    cast: ["Chaning Tatum", "Jonah Hill"],
    watched: "yes",
  },
  {
    name: "The Interview",
    type: "comedy",
    rating: "10/10",
    cast: ["Seth Rogan", "James Franco"],
    watched: "yes",
  }
]

for (var key in movie){
  console.log(movie[key])
}
