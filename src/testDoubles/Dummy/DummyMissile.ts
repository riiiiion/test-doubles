import {Missile} from "./Types";

// Dummyの役割を果たすように書き換えてください
export class DummyMissile implements Missile {
    fire() {
        throw new Error("偽物です")
    }
}
