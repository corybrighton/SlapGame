export default class Weapon {

  laserImg = {
    clear: 'Assets/png/clearLaser.png',
    left: 'Assets/png/laser.png',
    right: 'Assets/png/laserR.png',
    index: 0
  }

  weapons =
    {
      laser: 1,
      missile: 10,
      proton: 5,
      rateOfFire: 1
    }

  modifier = {
    single: {
      name: 'single',
      modifier: 1,
      discription: 'one cannon at a time'
    },
    double: {
      name: 'double',
      modifier: 2,
      discription: 'two cannons at a time'
    },
    quad: {
      name: 'quad',
      modifier: 4,
      discription: 'all four cannons at a time'
    }
  }
}