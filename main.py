def on_received_number(receivedNumber):
    global i, l, re
    basic.clear_screen()
    if 0 <= receivedNumber:
        i = 0
        for index in range(int(receivedNumber / 5)):
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        l = 0
        for index2 in range(receivedNumber % 5):
            led.plot(l, i)
            l += 1
    else:
        re = receivedNumber * -1
        i = 4
        for index3 in range(int(re / 5)):
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        l = 4
        for index4 in range(re % 5):
            led.plot(l, i)
            l += -1
    basic.pause(10)
radio.on_received_number(on_received_number)

re = 0
l = 0
i = 0
radio.set_group(11)
basic.show_number(0)