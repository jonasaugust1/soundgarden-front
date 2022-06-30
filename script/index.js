import formataData from './admin.js'

const getUrl = 'https://xp41-soundgarden-api.herokuapp.com/events'
const div = document.querySelector('#eventsContainer')



const requestAPI = async () => {
    try{
        const response = await fetch(getUrl)
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
                        <button type="button" data-bs-whatever="${(jsonResponse[items]._id) * 2}" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">reservar ingresso</button>
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

const bookingsUrl = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

let exampleModal = document.getElementById('exampleModal')
console.log(exampleModal)
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    let button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever')
    console.log(recipient)
    
    const form = document.querySelector(".modal-dialog form")
    
    form.onsubmit = async (evento) => {
        evento.preventDefault();
        try {
            const formObject = new FormData(form)
            const newBooking = {
                owner_name: formObject.get('name'),
                owner_email: formObject.get('email'),
                number_tickets: formObject.get('tickets'),
                event_id: recipient,
            };
            const options = {
                method: "POST",
                body: JSON.stringify(newBooking),
                headers: {
                    "Content-Type": "application/json",
                },
        };
        const response = await fetch(bookingsUrl, options);
                            const jsonResponse = await response.json();
                            console.log(newBooking);
                            console.log(response);
                            console.log(jsonResponse);
                            alert('Ingressos para o evento reservados com sucesso!')
                            return window.location.href = "index.html"
    } catch (erro) {
        alert('Erro ao cadastrar, verifique os campos digitados!')
    }
    }
})
