let startTime = 0
function moveCenterToCenter() {
    
    startTime = input.runningTime()
    while (input.runningTime() - startTime < 1300) {
        motion.drive(40, 40)
    }
    wait()
}

function wait() {
    
    startTime = input.runningTime()
    while (input.runningTime() - startTime < 500) {
        motion.drive(0, 0)
    }
}

function moveHalfSquare() {
    
    startTime = input.runningTime()
    while (input.runningTime() - startTime < 650) {
        motion.drive(40, 40)
    }
    wait()
}

function turnRight() {
    
    startTime = input.runningTime()
    while (input.runningTime() - startTime < 330) {
        motion.drive(40, -40)
    }
    wait()
}

function turnLeft() {
    
    startTime = input.runningTime()
    while (input.runningTime() - startTime < 320) {
        motion.drive(-40, 40)
    }
    wait()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    moveHalfSquare()
    turnLeft()
    moveCenterToCenter()
    turnRight()
    moveCenterToCenter()
})
