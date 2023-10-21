let luz = 0
basic.forever(function () {
    luz = input.lightLevel()
    if (luz <= 128) {
        basic.showNumber(luz)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showNumber(luz)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
