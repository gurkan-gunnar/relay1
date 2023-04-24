input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
function bock () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
}
function stangAv () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    visaBock()
}
input.onButtonPressed(Button.A, function () {
    skickaUpp()
})
function visaBock () {
    bock()
    basic.pause(750)
    basic.clearScreen()
}
function skickaUpp () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    stangAv()
}
input.onButtonPressed(Button.B, function () {
    stangAv()
})
basic.forever(function () {
    if (input.soundLevel() > 100) {
        skickaUpp()
    }
})
