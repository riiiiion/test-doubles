import {Missile} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockMissile implements Missile {
    private fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled = true
    }

    private disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled = true
    }

    verifyFire() {
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).not.toBeTruthy()
    }

    verifyDisable() {
        expect(this.fire_wasCalled).not.toBeTruthy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}