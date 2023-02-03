import { LaunchMissileSystem, Weather, WeatherRepository } from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }


    async launch(): Promise<string> {
        // テストが通るように書き換えてください
        const result = await this.weatherRepository.getByCity("Nagoya")
        if(result === Weather.SUNNY){
        return Promise.resolve('ミサイルを発射しました')
        }else{
        return Promise.resolve('自爆しました')

        }
    }
}