function getDataFromAPI(){
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    let lista = document.getElementById('lista');
    
    fetch(endpoint,{
        method:'GET',
    })
    .then((response)=>response.json())
    .then((data)=>{
        for(let userInfo of data){
            let listItem = document.createElement('li');
            listItem.textContent =   `Id: ${userInfo.id} - Name: ${userInfo.name}`;
            lista.appendChild(listItem);
        }
    })
}


//----------------------------------------------------
//------------- consumir imagen: GET
//----------------------------------------------------

var localeImgage = document.getElementById('localeImage')
var APIImage = document.getElementById('APIImage')

//-------------------------------------------------------

function upploadImageFromLocalServer(){
    const endpoint = '/img/nature.json'                 
    const header = new Headers() // provee informacion del cliente al servidor, depende de si el servidor esta usando
    fetch(endpoint,{
        method:'GET',  //default
        mode:'no-cors', //no necesary
        headers:header // to send information to server
    })
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data) //trae el json {name: "nature", image: "nature.jpg"}
        localeImgage.setAttribute('src',data.image);
    })
}

function removeImagenFromLocalServer(){
    localeImgage.setAttribute('src','');
}

//-------------------------------------------------
function upploadImageFromAPIServer(){
    const endpointAPI = 'https://pokeapi.co/api/v2/pokemon/25/'
    const headerAPI = new Headers()

    fetch(endpointAPI,{
        method:'GET',
        //mode:'no-cors', //cuando llamamos a una api externa no poner este atributo
        headers:headerAPI
    })
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data)
        APIImage.setAttribute('src',data.sprites.front_default);
    })
}

function removeImagenFromAPIServer(){
    APIImage.setAttribute('src','');
}
//---------------------------------------------------

//----------------------------------------------------
//------------- enviar datos a servidor: POST
//----------------------------------------------------

var formulario = document.getElementById('formulario')

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const endpoint = 'http://localhost/servidor/fetchAPI/formulario.php';
    
    var datos = new FormData(formulario);

    fetch(endpoint,{
        method:'POST',
        body: datos,
    })
    .then((response)=>response.json())
    .then((data)=>{
        document.getElementById('msg').innerHTML = data;
    })

});