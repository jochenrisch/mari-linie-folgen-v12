/**
 * makecode.microbit.org
 * 
 * Risch
 * 
 * Startvorausetzung:
 * 
 * DFRobot so über der Linie positionieren,
 * 
 * dass beide blauen Dioden leuchten
 */
// Mari Linie folgen V11 vom 19.09.23
// 
// Erweiterung Maqueen
// 
// Risch
basic.showNumber(1)
basic.pause(5000)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 6)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 6)
        }
    }
})
