const ID_ATUAL = window.location.href.split('=')[1];
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";

let form = document.querySelector("#formulario");

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
    formObject.set('data') = jsonResponse.scheduled
    formObject.set('number_tickets') = parseInt(jsonResponse.number_tickets)
    }

receive();

form.onsubmit = async (evento) => {
    evento.preventDefault();

    const formObject = new FormData(form)
    const atractionsArray = formObject.get('attractions').split(', ')

    bodyInfo = {

        name: formObject.get('name'),
        poster: formObject.get('poster'),
        attractions: atractionsArray,
        description: formObject.get('description'),
        scheduled: formObject.get('data'),
        number_tickets: formObject.get('number_tickets'),

    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(bodyInfo),
        headers:{
            "Content-Type": "application/json",
            },
            redirect: "follow",
    };

    try {
        const response = await fetch(`${BASE_URL}/${ID_ATUAL}`, options)
        if(response.ok){
            alert("Dados alterados!")
            return window.location.href = 'admin.html'
        }
    } catch(error) {
        alert("Opa, deu algo errado... Verifique seus dados corretamente")
}

}

