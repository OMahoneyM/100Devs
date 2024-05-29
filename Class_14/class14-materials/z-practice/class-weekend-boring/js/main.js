//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else if(day === "wednesday"){
//     console.log("HumpDay!")
//   }else{
//     console.log("BORING")
//   }

// }

// document.querySelector('#check').addEventListener('click', run)

// function run (){
//   const day = document.querySelector('#day').value.toLowerCase()

//   if (day === 'tuesday' || day === 'thursday'){
//     document.querySelector('#placeToSee').innerText = "Class Day!"
//   }else if(day === 'saturday' || day === 'sunday'){
//     document.querySelector('#placeToSee').innerText = "Weekend Baby!"
//   }else if(day === 'wednesday'){
//     document.querySelector('#placeToSee').innerText = "Hump Day!"
//   }else{
//     document.querySelector('#placeToSee').innerText = "Boring"
//   }
// }

document.querySelector('#check').addEventListener('click', run)

function run() {
  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerText = "Class Day"
  }else if (day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerText = "Weekend!"
  }else if (day === 'wednesday'){
    document.querySelector('#placeToSee').innerText = "Hump Day!"
  }else {
    document.querySelector('#placeToSee').innerText = "Boring"
  }
}