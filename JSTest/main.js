console.log('main.js loaded')

function getName (){
  var nameResult = prompt('What is your name?')
  return nameResult
}



function welcome (name) {
  console.log(name)
  alert('Welcome ' + name + '!')
}

var someName = getName()
welcome(someName)
