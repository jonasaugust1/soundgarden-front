import formataData from './admin.js'

const url = 'https://xp41-soundgarden-api.herokuapp.com/events'
const div = document.querySelector('#eventsContainer')

const requestAPI = async () => {
    try{
        const response = await fetch(url)
        if(response.ok){
            console.log("Request successful")
            const jsonResponse = await response.json()
            let items = 0
            while(items < 3){
                div.innerHTML +=
                `<div>
                    <article class="evento card p-5 m-3" id="card1">
                        <h2>${jsonResponse[items].name} - ${formataData(jsonResponse[items].scheduled)}</h2>
                        <h4>${jsonResponse[items].attractions}</h4>
                        <p>${jsonResponse[items].description}</p>
                        <a href="#" class="btn btn-primary reservar" data-toggle="modal" data-target="#exampleModal">reservar ingresso</a>
                    </article>
                
                </div>`

                items++
            }
        }
    } catch(error) {
        alert("Algo deu errado, tente novamente!")
    }
}

requestAPI()
// const eventAtractions = events.map( i => i.attractions)

// const eventDescriptionArray = events.map( i => i.description)

// let random1 = Math.floor(Math.random() * eventsNames.length)
// let eventTitle1 = document.querySelector('#card1 h2')
// let eventLineup1 = document.querySelector('#card1  h4')
// let eventDescription1 = document.querySelector('#card1  p')
// eventTitle1.innerHTML = eventsNames[random1]
// eventLineup1.innerHTML = eventAtractions[random1]
// eventDescription1.innerHTML = eventDescriptionArray[random1]

// let random2 = Math.floor(Math.random() * eventsNames.length)
// let eventTitle2 = document.querySelector('#card2 h2')
// let eventLineup2 = document.querySelector('#card2 h4')
// let eventDescription2 = document.querySelector('#card2 p')
// eventTitle2.innerHTML = eventsNames[random2]
// eventLineup2.innerHTML = eventAtractions[random2]
// eventDescription2.innerHTML = eventDescriptionArray[random2]

// let random3 = Math.floor(Math.random() * eventsNames.length)
// let eventTitle3 = document.querySelector('#card3 h2')
// let eventLineup3 = document.querySelector('#card3 h4')
// let eventDescription3 = document.querySelector('#card3 p')
// eventTitle3.innerHTML = eventsNames[random3]
// eventLineup3.innerHTML = eventAtractions[random3]
// eventDescription3.innerHTML = eventDescriptionArray[random3]