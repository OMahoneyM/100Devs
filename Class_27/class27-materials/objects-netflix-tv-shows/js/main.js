//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows{
    constructor(showTitle,showGenre,showLength,showRating){
        this.title = showTitle
        this.genre = showGenre
        this.length = showLength
        this.rating = showRating
    }
    play(){
        alert(`${this.title} is starting`)
    }
    pause(){
        alert(`${this.title} is paused`)
    }
    stop(){
        alert(`Stopped watching the ${this.title}`)
    }
}

let StrangerThings = new NetflixShows('Stranger Things', 'Fantasy', 45, '99%')
