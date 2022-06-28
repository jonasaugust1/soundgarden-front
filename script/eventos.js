import formataData from './admin.js'

const url = 'https://xp41-soundgarden-api.herokuapp.com/events'
const div = document.querySelector('.eventsContainer')

const requestAPI = async () => {
    try{
        const response = await fetch(url)
        if(response.ok){
            console.log("Request successful")
            const jsonResponse = await response.json()
            console.log(jsonResponse[0].name)
            for(let i = 0; i < jsonResponse.length; i++) {
                div.innerHTML +=
                `<div>
                    <article class="evento card p-5 m-3" id="card1">
                        <h2>${jsonResponse[i].name} - ${formataData(jsonResponse[i].scheduled)}</h2>
                        <h4>${jsonResponse[i].attractions}</h4>
                        <p>${jsonResponse[i].description}</p>
                        <a href="#" class="btn btn-primary reservar" data-toggle="modal" data-target="#exampleModal">Reservar ingresso</a>
                    </article>
                
                </div>`
            }
        }
    } catch(error) {
        alert("Algo deu errado, tente novamente!")
    }
}

requestAPI()
