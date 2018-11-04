let empire = {
  TIE_Interceptor: {
    name: "Tie Interseptor",
    image: "https://vignette.wikia.nocookie.net/battlefront/images/e/ed/TIE_Interceptor.png/revision/latest?cb=20110825201554",
    health: 100,
    hits: 0,
    weapons: ["laser", 'missile', 'proton']
  }
}
let laserImg = {
  clear: 'Assets/png/clearLaser.png',
  left: 'Assets/png/laser.png',
  right: 'Assets/png/laserR.png',
  index: 0
}
let weapons =
{
  laser: 1,
  missile: 10,
  proton: 5,
  rateOfFire: 1
}

let modifier = {
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
  },
}


function fireAKAslap(hit) {
  hit *= weapons.rateOfFire
  if (empire.TIE_Interceptor.health - hit > 0) {
    empire.TIE_Interceptor.health -= hit
    empire.TIE_Interceptor.hits++
  } else {
    if (empire.TIE_Interceptor.health > 0) {
      empire.TIE_Interceptor.hits++
    }
    empire.TIE_Interceptor.health = 0
    document.getElementById('enemeyPic').innerHTML = `
    <img src="http://pngimg.com/uploads/explosion/explosion_PNG15357.png"
        style = "max-width:300px"  alt="">
    `
  }
  drawLasers()
  update()
}

function drawLasers() {
  let lL = [laserImg.left, laserImg.clear, laserImg.clear, laserImg.clear]
  let lLL = [laserImg.clear, laserImg.left, laserImg.clear, laserImg.clear]
  let lR = [laserImg.clear, laserImg.clear, laserImg.right, laserImg.clear]
  let lRL = [laserImg.clear, laserImg.clear, laserImg.clear, laserImg.right]

  if (weapons.rateOfFire == 2) {
    lL = [laserImg.left, laserImg.clear, laserImg.left, laserImg.clear]
    lLL = [laserImg.clear, laserImg.left, laserImg.clear, laserImg.left]
    lR = [laserImg.clear, laserImg.right, laserImg.clear, laserImg.right]
    lRL = [laserImg.right, laserImg.clear, laserImg.right, laserImg.clear]
  } else if (weapons.rateOfFire == 4) {
    lL = [laserImg.left, laserImg.left, laserImg.left, laserImg.left]
    lLL = [laserImg.left, laserImg.left, laserImg.left, laserImg.left]
    lR = [laserImg.right, laserImg.right, laserImg.right, laserImg.right]
    lRL = [laserImg.right, laserImg.right, laserImg.right, laserImg.right]
  }

  let template = `
  <img src="${lL[laserImg.index]}" class="img-fluid" alt="" />
  <img src="${lLL[laserImg.index]}" class="img-fluid" alt="" />
  `
  document.getElementById('laserL').innerHTML = template

  template = `
  <img src="${lR[laserImg.index]}" class="img-fluid" alt="" />
  <img src="${lRL[laserImg.index]}" class="img-fluid" alt="" />
  `
  document.getElementById('laserR').innerHTML = template
  laserImg.index++
  if (laserImg.index > 3) {
    laserImg.index = 0
  }
}

function update() {
  try {

    document.getElementById("progress").innerHTML = `<div class="progress-bar bg-success" role="progressbar" style="width: ${empire.TIE_Interceptor.health}%" aria-valuenow="50" aria-valuemin="0"
    aria-valuemax="100"></div>
    `
    document.getElementById('health').innerText = empire.TIE_Interceptor.health.toString()
    document.getElementById('hits').innerText = empire.TIE_Interceptor.hits.toString()
  } catch (err) {
  }
}
update()
drawButton()

function reset() {
  empire.TIE_Interceptor.health = 100
  empire.TIE_Interceptor.hits = 0
  document.getElementById('enemeyPic').innerHTML = `
  <img src="${empire.TIE_Interceptor.image}"
          alt="">`
  update()
}

function photonAKApunch(item) {
  fireAKAslap(weapons[item])

}

function missileAKAkick(item) {
  fireAKAslap(weapons[item])
}


function drawButton() {
  let template = ''
  for (let mod in modifier) {
    if (modifier.hasOwnProperty(mod)) {
      let elem = modifier[mod]
      template += `<button class="btn btn-primary" data-toggle="button" onclick="changeRate('${elem.name}')">${elem.name}</button>`
    }
  }
  document.getElementById("modButtons").innerHTML = template
}

function changeRate(item) {
  weapons.rateOfFire = modifier[item].modifier
}