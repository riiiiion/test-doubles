import {SpyMissile} from './SpyMissile'
import {LaunchMissileImpl} from './LaunchMissile'

// テストスパイはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントにどのようなアクセスがあったかを記録するものです。
// コンポーネントへのアクセスというのは「メソッド呼び出し」のことです。

describe('ミサイル発射システム（LaunchMissileImpl）のテスト', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const correctPassword = 'black300'
        const launchMissile = new LaunchMissileImpl(spyMissile, correctPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyMissile.fire(）が呼ばれないこと', () => {
        const spyMissile = new SpyMissile()
        const invalidPassword = 'white200'
        const launchMissile = new LaunchMissileImpl(spyMissile, invalidPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).not.toBeTruthy()
    })
})
