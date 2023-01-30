import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    missile: AnswerMissile
    password: string

    constructor(missile: AnswerMissile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        if (this.password === "black300") {
            this.missile.fire()
        } else {
            this.missile.selfDestruction()
        }
    }
}