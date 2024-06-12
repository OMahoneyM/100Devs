document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://poetrydb.org/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const title = data[0].title;
        const author = data[0].author;
        let poem = '';

        document.querySelector('h2').innerText = title;
        document.querySelector('h2').classList.add('title')
        
        data[0].lines.forEach(e => {
          poem += `${e}<br>`
        })
        document.querySelector('blockquote').innerHTML = poem;

        document.querySelector('span').innerText = `~ ${author}`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

