fetch('https://pokeapi.co/api/v2/pokemon/pikachu', { method: 'GET' })
    //.then(response => console.log(response))
    .then(response => {

        if(!response.ok){
            throw new Error('Could not fetch resource')
        }

        return response.json()

    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error))