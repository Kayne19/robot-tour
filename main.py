startTime = 0
def moveCenterToCenter():
    global startTime
    startTime = input.running_time()
    while input.running_time() - startTime < 1300:
        motion.drive(40,40)
    wait()

def wait():
    global startTime
    startTime = input.running_time()
    while input.running_time() - startTime < 500:
        motion.drive(0, 0)

def moveHalfSquare():
    global startTime
    startTime = input.running_time()
    while input.running_time() - startTime < 650:
        motion.drive(40,40)
    wait()

def turnRight():
    global startTime
    startTime = input.running_time()
    while input.running_time() - startTime < 330:
        motion.drive(40,-40)
    wait()

def turnLeft():
    global startTime
    startTime = input.running_time()
    while input.running_time() - startTime < 320:
        motion.drive(-40,40)
    wait()


def on_button_pressed_a():
    moveHalfSquare()
    turnLeft()
    moveCenterToCenter()
    turnRight()
    moveCenterToCenter()
input.on_button_pressed(Button.A, on_button_pressed_a)