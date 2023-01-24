export type Missile = {
    passwordCheck: () => string
    fire: () => Promise<string>
    selfDestruction: () => string
}

export type LaunchMissileSystem = {
    launch: () => Promise<string> | string
}
