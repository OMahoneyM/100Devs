//Control image carousel
function startCarousel() {
    let activeImage = 0;
    const images = document.querySelectorAll("#carousel img");

    function cycleImages() {
        if (!images[activeImage]) {
        // If the active image is undefined, stop the interval and return
        clearInterval(intervalId);
        return;
        }
        //Loops the carousel
        images[activeImage].classList.remove("active");
        activeImage = (activeImage + 1) % images.length;
        images[activeImage].classList.add("active");
    }
  
    let intervalId = setInterval(cycleImages, 3000);
}

//Handle edit requests
function editItem(id, name, description){
    document.getElementById('updateId').value = id
    document.getElementById('updateName').value = name
    document.getElementById('updateDescription').value = description

    document.getElementById('updateForm').action = `/item/update/${id}`
}

//Handle delete requests
async function deleteItem(id){
    try {
        const res = await fetch(`http://localhost:5000/item/delete/${id}`, {
            method: 'DELETE'
        })
        if(res.ok) {
            location.reload()
        } else {
            console.log('failed to delete item')
        }
    } catch(err){
        console.log('Error occurred: ', err)
    }
}


//Handle db server errors
function checkError(){
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('error')) {
        alert("Validation failed. Name and description are required.")
    }
}

window.onload = function () {
    startCarousel();
    checkError();
}