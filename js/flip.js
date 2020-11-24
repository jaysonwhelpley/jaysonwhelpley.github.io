var heads = 0
var tails = 0
var ratio = 0
var ratios = []
var ratioratio = 0


function flip() {
  heads = 0
  tails = 0
  ratios = []
  ratioratio = 0
  for ( var j = 0; j < 100; j++) {
    for (var i = 0; i < 100; i++) {
      x = Math.random();
      if (x > .5) {
        heads++
      } else {
        tails++
      }
    }

    ratio = (heads / tails)
    ratios.push(ratio)
  }
  for (var i = 0; i < ratios.length; i++) {
    ratioratio = ratioratio + ratios[i]
  }
  ratioratio = ratioratio / (ratios.length)
  return ratioratio
}

flip()



console.log(ratioratio)
