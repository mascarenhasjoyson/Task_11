const btn = document.getElementById('btn');
const pokemonDiv = document.querySelector('.pokemon');
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '',
}
btn.addEventListener('click', poke);

function poke() {
    const inputData = document.getElementById('pokeID').value;
    if (parseInt(inputData) < 899 && parseInt(inputData) > 0) {
        pokemonDiv.hidden=false;

        apiData.id = parseInt(inputData);
        // console.log(apiData.id);


        const { url, type, id } = apiData

        const apiUrl = `${url}${type}/${id}`

        fetch(apiUrl)
            .then((data) => {
                if (data.ok) {
                    return data.json()
                }
                throw new Error('Response not ok.');
            })
            .then(pokemon => generateHtml(pokemon))
            .catch(error => console.error('Error:', error))


        const generateHtml = (data) => {
            console.log(data)
            const html = `
            <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
            <span>Height: ${data.height}</span><br>
            <span>Weight: ${data.weight}</span>
            </div>
            `
            
            pokemonDiv.innerHTML = html;
        }
    }
    else {
        alert("Enter value between 1 to 898");
    }
    document.getElementById('myform').reset();
}