var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var selections = []

for (var i = 0; i < 4; i++) {
  selections.push(numbers.splice(Math.floor((Math.random()*numbers.length)),1).pop())
}

var cards = [Math.floor(Math.random()*13), Math.floor(Math.random()*13), Math.floor(Math.random()*13), Math.floor(Math.random()*13)]

var u1 = new Object();

u1.card = null
u1.vision = null
u1.position = null
u1.guess1 = null

var u2 = new Object();

u2.card = null
u2.vision = null
u2.position = null
u2.guess1 = null

var u3 = new Object();

u3.card = null
u3.vision = null
u3.position = null
u3.guess1 = null

var u4 = new Object();

u4.card = null
u4.vision = null
u4.position = null
u4.guess1 = null

var users = [u1,u2,u3,u4]

for (var i = 0; i < users.length; i++) {
  let ordered =  selections.slice().sort(function(a,b){return a-b})
  users[i].card = selections[i]
  users[i].position = ordered.indexOf(users[i].card)
}

for (var i = 0; i < users.length; i++) {
  console.log("\n")

  let arr = selections.filter(() => true)
  let removeIndex = selections.indexOf(users[i].card)

  arr.splice(removeIndex,1)
  users[i].vision = arr
  users[i].vision.sort(function(a,b){return a-b})
  console.log("vision: " + users[i].vision)
  console.log("number: " + users[i].card)

  let gapSizes = []

  for (var j = 0; j < users[i].vision.length; j++) {

    if (j === 0) {
      gapSizes.push(users[i].vision[j] - 1)
    } else {
      gapSizes.push((users[i].vision[j] - users[i].vision[j-1])-1)
    }

    if (j == (users[i].vision.length-1)) {
      gapSizes.push(13 - users[i].vision[j])
    }

  }
  console.log("selections: " + selections)
  console.log("gapSizes: " + gapSizes)

  let biggestGap = gapSizes.indexOf(Math.max(...gapSizes))
  console.log("biggestGap: " + biggestGap)

// Have to figure out how to guess a random selection in the biggest gap.

  if (biggestGap == 0){
    users[i].guess1 = Math.ceil(Math.random()*gapSizes[0])
    console.log("SmallGuess:" + users[i].guess1)
  } else if (biggestGap == (gapSizes.length-1)) {
    users[i].guess1 = (users[i].vision[biggestGap] -Math.ceil(Math.random*(gapSizes[gapSizes.length-1])))
    console.log("BigGuess:" + users[i].guess1)
  } else {

  }



}
