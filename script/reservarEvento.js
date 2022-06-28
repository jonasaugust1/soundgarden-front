const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const requestBookings = async () => {
    try {
        const response = await fetch(url)
        if(response.ok) {
            console.log('Request Successful')
            const jsonResponse = response.json()
            console.log(jsonResponse)
        } 
    } catch(error) {
        console.log(error)
    }
}

requestBookings()