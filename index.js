/*
fetch = function used for making HTTP requests to fetch resources
        (JSON style data, images, files)
        Simplifies asynchronous data fetching in JavaScript and
        used for interacting with APIs to retrieve and send
        data asynchronously over the web.

        fetch(url, {options})
        fetch(url, { method: 'GET', 'POST', etc.})

*/

/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(data => console.log(data.name))
                            //use data.<name of key>
                            //ex. data.weight, data.height, etc.
    .catch(error => console.error(error))
*/

/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //.then(response => console.log(response))
    .then(response => {

        if(!response.ok){
            throw new Error('Could not fetch resource')
        }

        return response.json()

    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error))
*/

//async await
async function fetchData(){

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/lugia')

        if(!response.ok){
            throw new Error('Could not fetch resource')
        }

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.error(error)
    }
}

fetchData();