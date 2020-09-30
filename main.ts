controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 4 4 . . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 4 4 4 . . 
        . . . . . . . 4 . . . . . 4 4 . 
        . . . 4 4 4 . 4 4 4 . . . 4 . . 
        . . 4 4 . . . . . . . . . 4 . . 
        . . . . . . . . . . . . . 4 4 . 
        . . . . . . . 4 4 4 . . . . 4 . 
        . . . . 4 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . 4 . . . . . 4 4 4 4 . . 
        . . . . 4 4 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    sprite.startEffect(effects.fire)
})
let Es: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(2)
mySprite = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . . f a f f a f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    Es = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 2 2 2 . 
        . . . . . . . . . . 2 . . . 2 2 
        . . . . . . . . . 2 2 . 2 . . 2 
        . . . . . . . . . 2 . . 2 . 2 2 
        . . 2 2 2 2 2 . . 2 . . . 2 2 . 
        2 2 2 . . . 2 2 2 2 2 2 2 2 2 . 
        2 . . . . . . . . . . . 2 . . . 
        2 . . . . . . . . . . . 2 . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 . . . . . . . . . 2 . . . 
        . . 2 . . . . . . . . . 2 . . . 
        . . 2 . . . . . . . . . 2 . . . 
        . . 2 . . . . . . . . . 2 . . . 
        . . 2 . . . . . . . . . 2 . . . 
        `, SpriteKind.Player)
    Es.setPosition(randint(0, 160), randint(0, 120))
})
