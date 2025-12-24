// fetch method

/*
fetch is a function used for making HTTP requests to fetch resources
        (JSON style data, images, files)
        Simplifies asynchronous data fetching in JavaScript and
        used for interacting with APIs to retrieve and send
        data asynchronously over the web.

        fetch(url, {options})
        fetch(url, { method: 'GET', 'POST', etc.})

*/


fetch('https://pokeapi.co/api/v2/pokemon/pikachu', { method: 'GET' })
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(data => console.log(data.name))
                            //use data.<name of key>
                            //ex. data.weight, data.height, etc.
    .catch(error => console.error(error))