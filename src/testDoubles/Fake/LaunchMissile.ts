import {AuthServer, LaunchMissileSystem, Missile} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    authServer: AuthServer

    constructor(missile: Missile, authServer: AuthServer) {
        this.missile = missile
        this.authServer = authServer
    }

    login(userId: string) {
        // テストが通るように実装してください
        this.authServer.login(userId)
    }

    async launchBy(userId: string) {
        // テストが通るように実装してください
     const result =  await this.authServer.getUser(userId)
    if(result !== undefined){
        this.missile.fire()
    }
    }
}