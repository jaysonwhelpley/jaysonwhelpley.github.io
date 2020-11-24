var set = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", "?", "'", " "]
var tier1 = Array.from({length: set.length}, (v, k) => k+1);
var tier2 = Array.from(tier1, x => x + set.length)
var tier3 = Array.from(tier2, x => x + set.length)
var tier4 = Array.from(tier3, x => x + set.length)

function encode(the_string) {

  the_string = the_string.toUpperCase().replace("\"", "\'\'")

  string_array = the_string.split("")

  string_array_numbered = []

  for (var i = 0; i < string_array.length; i++) {
    insert = set.indexOf(string_array[i])
    string_array_numbered.push(insert)
  }

  string_array_shuffled = []

  tier = 4

  for (var i = 0; i < string_array_numbered.length; i++) {

    var shuffled_insert
    var increment = i

    while (increment > (set.length-1)) {
      increment = increment - set.length
    }

    tier_increment = (tier - 1) * (set.length)

    shuffled_insert = string_array_numbered[i] + increment + tier_increment + 1

    reduced = false

    while (shuffled_insert >= 100 ) {
      shuffled_insert = shuffled_insert - set.length
      reduced = true
    }

    if ( tier == 1) {
      tier = 4
    } else if (tier == 2) {
      tier = 1
    } else if (tier == 3) {
      tier = 2
    } else if (tier == 4) {
      tier = 3
    }

    if (shuffled_insert < 10) {
      shuffled_insert = "0" + shuffled_insert
    }

    string_array_shuffled.push(shuffled_insert.toString())
  }

  // return string_array_numbered
  return string_array_shuffled.join("")

}

function decode(the_code) {
  the_array = the_code.match(/.{1,2}/g)
  var ddict = []
  var output_array = []

    for (var i = 0; i < tier1.length; i++) {

      var the_key

      if (tier1[i] <= 9) {
        the_key = "0" + tier1[i]
      } else {
        the_key = tier1[i].toString()
      }

      ddict[the_key] = set[i]

    }

    for (var i = 0; i < tier3.length; i++) {

      var the_key

      if (tier2[i] <= 9) {
        the_key = "0" + tier2[i]
      } else {
        the_key = tier2[i].toString()
      }

      ddict[the_key] = set[i]

    }

    for (var i = 0; i < tier3.length; i++) {

      var the_key

      if (tier3[i] <= 9) {
        the_key = "0" + tier3[i]
      } else {
        the_key = tier3[i].toString()
      }

      ddict[the_key] = set[i]

    }

    for (var i = 0; i < tier4.length; i++) {

      var the_key

      if (tier4[i] <= 9) {
        the_key = "0" + tier4[i]
      } else {
        the_key = tier4[i].toString()
      }

      ddict[the_key] = set[i]

    }


     for (var i = 0; i < the_array.length; i++) {

       output_key = parseInt(the_array[i])-i

       if (output_key < 10) {
         output_key = "0" + output_key
       } else {
         output_key = output_key.toString()
       }

       output_array.push(ddict[output_key])
     }

     return output_array.join("")

}
