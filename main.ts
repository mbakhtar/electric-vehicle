fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        basic.pause(500)
    }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        basic.pause(500)
    }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
        basic.pause(500)
    }
})
