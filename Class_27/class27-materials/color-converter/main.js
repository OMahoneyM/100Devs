// Convert Hex to RGB
document.querySelector('#hexSubmit').addEventListener('click', getRGB)

function getRGB(){
    let hexVal = document.querySelector('#hexValue').value
    if (hexVal[0] != '#')
        hexVal = `#${hexVal}`

    let rgbArr = convertHexToRGB(hexVal)

    document.querySelector('#rValue').value = rgbArr[0];
    document.querySelector('#gValue').value = rgbArr[1];
    document.querySelector('#bValue').value = rgbArr[2];

    document.querySelector('.colorBlock').style.backgroundColor = hexVal;
}

function convertHexToRGB(val){
    if (val[0] != '#'){
        val = `#${val}`
    }
    console.log(val)
    return new Array(parseInt(val.slice(1, 3), 16), parseInt(val.slice(3, 5), 16), parseInt(val.slice(5, 7), 16))
}


// Get palette colors
document.querySelector('#paletteGen').addEventListener('click', getPalette)

function getPalette(){
    let color = document.querySelector('#hexValuePalette').value
    const scheme = document.querySelector('#schemePicker').value
    if (color[0] === '#')
        color = color.replace('#', '')
    
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector('.palette').style.display = 'flex'
        
        data.colors.forEach((e,i) => {
            document.querySelector(`.color${i+1}-txt`).innerText = e.hex.value
            document.querySelector(`.color${i+1}`).style.backgroundColor = e.hex.value
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}