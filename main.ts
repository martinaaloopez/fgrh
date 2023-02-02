radio.onReceivedNumber(function (receivedNumber) {
    while (enviado == 0) {
        basic.pause(100)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    ganador(receivedNumber)
})
function ganador (núm: number) {
    if (núm == 3 && enviado == 1 || (núm == 1 && enviado == 2 || núm == 2 && enviado == 3)) {
        basic.showIcon(IconNames.Happy)
    } else if (núm == enviado) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    enviado = 0
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(3)
    enviado = 3
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
    enviado = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(1)
    enviado = 1
})
let enviado = 0
radio.setGroup(79)
enviado = 0
basic.forever(function () {
	
})
