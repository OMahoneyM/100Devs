//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       document.querySelector('h2').innerText = data.name
       document.querySelector('h3').innerText = `Class: ${data.classes[0].name}`

       //remove any subclass li between searches
       let listElements = document.querySelectorAll('li');

       for (let i = 0; (li = listElements[i]); i++) {
            li.parentNode.removeChild(li);
       }

       data.subclasses.forEach(e => {
        // create an li
        const li = document.createElement('li')
        // add text to li
        li.textContent = e.name
        // append the li to the ul
        document.querySelector('ul').appendChild(li)
       })


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

