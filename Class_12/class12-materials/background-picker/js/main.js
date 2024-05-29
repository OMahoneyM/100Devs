// Event listener is the click
document.getElementById('cte').onclick = albumOne
document.getElementById('tyhb').onclick = albumTwo
document.getElementById('melo').onclick = albumThree
document.getElementById('tmip').onclick = albumFour
document.getElementById('social-cues').onclick = albumFive
document.getElementById('neon-pill').onclick = albumSix


function albumOne() {
  document.querySelector('body').style.background = 'url(img/01-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'white'
  document.getElementById('cte').classList.toggle('red-border')
  document.getElementById('tyhb').classList.remove('red-border')
  document.getElementById('melo').classList.remove('red-border')
  document.getElementById('tmip').classList.remove('red-border')
  document.getElementById('social-cues').classList.remove('red-border')
  document.getElementById('neon-pill').classList.remove('red-border')
}

function albumTwo() {
  document.querySelector('body').style.background = 'url(img/02-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'red'
  document.getElementById('cte').classList.remove('red-border')
  document.getElementById('tyhb').classList.toggle('red-border')
  document.getElementById('melo').classList.remove('red-border')
  document.getElementById('tmip').classList.remove('red-border')
  document.getElementById('social-cues').classList.remove('red-border')
  document.getElementById('neon-pill').classList.remove('red-border')
}

function albumThree() {
  document.querySelector('body').style.background = 'url(img/03-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'white'
  document.getElementById('cte').classList.remove('red-border')
  document.getElementById('tyhb').classList.remove('red-border')
  document.getElementById('melo').classList.toggle('red-border')
  document.getElementById('tmip').classList.remove('red-border')
  document.getElementById('social-cues').classList.remove('red-border')
  document.getElementById('neon-pill').classList.remove('red-border')
}

function albumFour() {
  document.querySelector('body').style.background = 'url(img/04-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'white'
  document.getElementById('cte').classList.remove('red-border')
  document.getElementById('tyhb').classList.remove('red-border')
  document.getElementById('melo').classList.remove('red-border')
  document.getElementById('tmip').classList.toggle('red-border')
  document.getElementById('social-cues').classList.remove('red-border')
  document.getElementById('neon-pill').classList.remove('red-border')
}

function albumFive() {
  document.querySelector('body').style.background = 'url(img/05-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'white'
  document.getElementById('cte').classList.remove('red-border')
  document.getElementById('tyhb').classList.remove('red-border')
  document.getElementById('melo').classList.remove('red-border')
  document.getElementById('tmip').classList.remove('red-border')
  document.getElementById('social-cues').classList.toggle('red-border')
  document.getElementById('neon-pill').classList.remove('red-border')
}

function albumSix() {
  document.querySelector('body').style.background = 'url(img/06-cte.jpg)'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.color = 'red'
  document.getElementById('cte').classList.remove('red-border')
  document.getElementById('tyhb').classList.remove('red-border')
  document.getElementById('melo').classList.remove('red-border')
  document.getElementById('tmip').classList.remove('red-border')
  document.getElementById('social-cues').classList.remove('red-border')
  document.getElementById('neon-pill').classList.toggle('red-border')
}