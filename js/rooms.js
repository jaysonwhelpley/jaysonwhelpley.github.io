// Room hosts array of strings.
let hosts = ["Joshua", "Aaron", "Jessie", "Jayson"]

// Non-host attendees, array of strings.
let people = ["Marc", "Bethany", "Gavin", "Howard", "Kyle", "Sway", "Kayla", "Ana", "Raeli", "Andy", "Ariel", "Dan", "Matt", "Tyler"]

// Rooms to be populated next.
let rooms = []

// Assign each host to a room.
for (var i = 0; i < hosts.length; i++) {
  rooms.push([hosts[i]])
}

// Which rooms are not full? Array of items that match the keys of the rooms.
let available_rooms = Array.from({length:rooms.length},(v,k)=>k)

// Set the maximum number of people in a room to the average, but allow for the remainder.
let max = Math.ceil(people.length/available_rooms.length)+1

// Set the total number of over-fills to the mod
let max_countdown = people.length % available_rooms.length

// For each unassigned person.
for (var i = 0; i < people.length; i++) {
  // people[i]

  // Pick a random room number from the available_rooms, returns a numerical value.
  let room_number = Math.floor(Math.random(available_rooms.length)*available_rooms.length)

  // Find the `room` that matches the value present in `available_rooms`, put the selected person into it.
  rooms[available_rooms[room_number]].push(people[i])
  console.log(`Room ${available_rooms[room_number]} has ${rooms[available_rooms[room_number]].length} people in it.`);

  // Compare if that room is now full by comparing it to the max.
  if (rooms[available_rooms[room_number]].length >= max) {

    console.log(`Room number ${available_rooms[room_number]} has ${rooms[available_rooms[room_number]].length} people in it which is larger than the current max of ${max}`);
    console.log(`Removing room number ${available_rooms[room_number]}`);
    // If it is remove that room from available_rooms.
    available_rooms.splice(room_number,1)

    // Tick one off of the countdowns
    max_countdown--

    // If the countdown is zero. Reduce the max allowed preventing any from overfilling.
    if (max_countdown == 0) {
      // The new max is one lower.
      max--

      // Check for rooms that have already hit this new max.
      for (var j = 0; j < available_rooms.length; j++) {
        if (rooms[available_rooms[j]].length >= max) {
          // Remove them.
          available_rooms.splice(j,1)
        }
      }

    }
  }

}

console.log(rooms)
