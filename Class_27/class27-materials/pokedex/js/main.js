//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name

        document.querySelector('.order').innerText = `Order: ${data.order}`

        document.querySelector('img').src = data.sprites.other.home.front_default
        document.querySelector('img').alt = `picture of ${data.name}`

        document.querySelector('audio').src = data.cries.latest
        document.querySelector('audio').classList.remove('hidden')

        let type = ''

        data.types.forEach((e, idx, arr) => {
          (idx == (arr.length - 1)) ? type += e.type.name : type += `${e.type.name} / `
        })

        document.querySelector('.type').innerText = `Type: ${type}`
        document.querySelector('.height').innerText = `Height: ${data.height}`
        document.querySelector('.weight').innerText = `Weight: ${data.weight}kg`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

