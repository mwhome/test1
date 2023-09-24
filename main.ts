let Abstand = 0
serial.redirectToUSB()
basic.forever(function () {
    Abstand = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    serial.writeValue("Abstand", Abstand)
    if (Abstand > 0) {
        if (Abstand > 150) {
        	
        }
    }
})
