import formataData from './admin.js'

const url = 'https://xp41-soundgarden-api.herokuapp.com/events'
const div = document.querySelector('.eventsContainer')
console.log(div)



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
                        <button class="btn btn-primary reservar" type="button">reservar ingresso</button>
                    </article>
                
                </div>`
            }
        }
    } catch(error) {
        alert("Algo deu errado, tente novamente!")
    }
}

requestAPI()

const reserveButton = document.querySelector('.reservar')
reserveButton.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})