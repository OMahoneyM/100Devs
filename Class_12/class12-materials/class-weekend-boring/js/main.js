document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

if(day === 'saturday' || day === 'sunday'){
  document.querySelector('#placeToSee').innerText = 'The Weekend!';
}else if(day === 'tuesday' || day === 'thursday'){
  document.querySelector('#placeToSee').innerText = 'Class Day!';
}else if(day === 'wednesday'){
  document.querySelector('#placeToSee').innerText = 'Hump Day Baby!'
}else {
  document.querySelector('#placeToSee').innerText = 'Boring!';
}
}
