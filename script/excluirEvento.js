const ID_ATUAL = window.location.href.split('=')[1]
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const form = document.getElementById('formulario')

let receive = async () => {
    const response = await fetch(`${BASE_URL}/${ID_ATUAL}`)
  //EXTRAINDO O JSON
  const jsonResponse = await response.json()
//atribuindo os dados da respota nos inputs do html
const formObject = new FormData(form)
formObject.set('name') = jsonResponse.name
formObject.set('poster') = jsonResponse.poster
formObject.set('attractions') = jsonResponse.attractions
formObject.set('description') = jsonResponse.description
//new Date(inDate.value).toISOString()
formObject.set('data') = jsonResponse.scheduled
formObject.set('number_tickets') = parseInt(jsonResponse.number_tickets)

}
receive();

form.onsubmit = async (evento) => {
    evento.preventDefault();

    const options = {
        method: 'DELETE',
        // body: JSON.stringify(bodyInfo),
        headers:{
            "Content-Type": "application/json",
            },
            redirect: "follow",
    };
    
    try{
        const response = await fetch(`${BASE_URL}/${ID_ATUAL}`, options)
        if(response.ok){
            console.log('Request successfull')
            alert("Evento Excluído!")
            return window.location.href = 'admin.html'
        }
    } catch(error){
        console.log(error)
        alert("Opa, deu algo errado... Verifique seus dados corretamente")
    }
}