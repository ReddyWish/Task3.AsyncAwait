
const toggleLoader = () => {
    const loaderHtml = document.querySelector('#loader')
    const isHidden = loaderHtml.hasAttribute('hidden')
    if (isHidden) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}

// создал функцию которая будет создавать li элементы для альбомов с соответствующим названием
const albumElement = (text) => {
    const liElement = document.createElement('li')
    liElement.textContent = text
    return liElement
}
// ........................................................................

// создал контейнер и span элемент с соответствующими атрибутами
const body = document.querySelector("body")
const olContainer = document.createElement('ol')
olContainer.classList.add('data-container')
body.append(olContainer)
const spanElement = document.createElement('span')
spanElement.textContent = 'Loading...'
spanElement.id = 'loader'
spanElement.setAttribute('hidden', '')
olContainer.append(spanElement)
    // ........................................................


const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

const renderAlbums = async () => {
   try {
       toggleLoader()
       const albumsResponses = await fetch(ALBUMS_URL);
       const albums = await albumsResponses.json()
       albums.forEach(album => {
           const albumHTML = albumElement(album.title)
           olContainer.append(albumHTML)
       })

   } catch (e) {
       console.log(e)
   } finally {
       toggleLoader()
   }

}

renderAlbums()



