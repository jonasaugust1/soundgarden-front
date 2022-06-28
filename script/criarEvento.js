const url = 'https://xp41-soundgarden-api.herokuapp.com/events';

const form = document.getElementById('formulario')
console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formObject = new FormData(form)
    console.log(formObject)
    const atractionsArray = formObject.get('attractions').split(', ')

    const body = {
            "name": formObject.get('name'),
            "poster": "link da imagem",
            "attractions": atractionsArray,
            "description": formObject.get('description'),
            "scheduled": formObject.get('data'), 
            "number_tickets": parseInt(formObject.get('number_tickets'))
        }

    try {
        fetch(url, {
            "method": 'POST',
            "headers": {'Content-Type': 'application/json'},
            "body": JSON.stringify(body)
        }).then(response => {
            console.log(response)
            alert('Evento criado com sucesso')
            return window.location.href = 'admin.html'
        })
    } catch(error) {
        alert("Algo deu errado, tente novamente")
        console.log(error)
    }
    
})

