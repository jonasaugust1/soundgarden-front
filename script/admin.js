const table = document.querySelector("table");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"


const formataData = (data) => {
    const dataFormated = new Date(data).toLocaleDateString()
    return dataFormated
};


let listEvents = async () => {

    //Requisição
    const response = await fetch(`${BASE_URL}/events`, { method: "GET", redirect: 'follow' })

    //extraindo json
    const jsonResponse = await response.json()
    // console.log(contentAnswer)
    jsonResponse.forEach((item, index) => {
        table.innerHTML +=
            `
        <tr>
                                <th scope="row">${index + 1}</th>
                                <td id="remove">${formataData(item.scheduled)}</td>
                                <td>${item.name}</td>
                                <td id="remove">${item.attractions}</td>
                                <td>
                                    <a href="reservas.html?id=${item._id}" class="btn btn-dark w-100">ver reserva</a>
                                    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary w-100">editar</a>
                                    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger w-100">excluir</a>
                                </td>
                            </tr>
        
        `
    });


};

listEvents()

export default formataData

