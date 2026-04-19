input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(0)
    }
    while (!(input.buttonIsPressed(Button.B))) {
        distance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.Centimeters
        )
        serial.writeLine("" + (distance))
        basic.pause(20)
        basic.clearScreen()
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
let distance = 0
basic.clearScreen()
