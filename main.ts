radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (0 <= receivedNumber) {
        i = 0
        for (let index = 0; index < Math.trunc(receivedNumber / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        }
        l = 0
        for (let index = 0; index < receivedNumber % 5; index++) {
            led.plot(l, i)
            l += 1
        }
    } else {
        re = receivedNumber * -1
        i = 4
        for (let index = 0; index < Math.trunc(re / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        }
        l = 4
        for (let index = 0; index < re % 5; index++) {
            led.plot(l, i)
            l += -1
        }
    }
    basic.pause(10)
})
radio.onReceivedValue(function (name, value) {
    if (value == 25) {
        led.setBrightness(255)
    } else if (value == 0) {
        led.setBrightness(100)
    }
})
let re = 0
let l = 0
let i = 0
radio.setGroup(11)
basic.showNumber(0)
