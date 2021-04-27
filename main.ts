function useTheForce () {
    pins.i2cWriteNumber(
    4,
    force,
    NumberFormat.Int8LE,
    false
    )
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "lift") {
        force = lift
        basic.showIcon(IconNames.Yes)
    } else {
        force = drop
        basic.showIcon(IconNames.No)
    }
    useTheForce()
})
let force = 0
let drop = 0
let lift = 0
radio.setGroup(1)
lift = 1
drop = 0
