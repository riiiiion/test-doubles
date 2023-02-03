import {Missile} from './Types'

// Spyの役割を果たすように書き換えてください
export default class SpyMissile implements Missile {
    fire_wasCalled = false
    fire(): void {
       this.fire_wasCalled = true
    }

    disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled = true

    }

}