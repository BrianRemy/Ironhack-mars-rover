// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0
}
// ======================
function turnLeft(rover){0
  if (rover.direction == "N") {
    rover.direction = "W"
  }
  else if (rover.direction == "W") {
    rover.direction = "S"
  }
  else if (rover.direction == "S") {
    rover.direction = "E"
  }
  else if (rover.direction == "E") {
    rover.direction = "N"
  }
  console.log("turnLeft was called!");
  console.log(`Rover is now facing ${rover.direction}`)
}

function turnRight(rover){
  if (rover.direction == "N") {
    rover.direction = "E"
  }
  else if (rover.direction == "E") {
    rover.direction = "S"
  }
  else if (rover.direction == "S") {
    rover.direction = "W"
  }
  else if (rover.direction == "W") {
    rover.direction = "N"
  }
  console.log("turnRight was called!");
  console.log(`Rover is now facing ${rover.direction}`)
}

function moveForward(rover){
  if (rover.direction == "N") {
    rover.y -= 1
  }
  else if (rover.direction == "S") {
    rover.y += 1
  }
  else if (rover.direction == "W") {
    rover.x -= 1
  }
  else if (rover.direction == "E") {
    rover.x += 1
  }
  console.log("moveForward was called!")
  console.log(`Rover is at coordinates ${rover.x}, ${rover.y}`)
}
