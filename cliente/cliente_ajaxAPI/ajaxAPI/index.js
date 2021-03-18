//----------------------------------------------------
//------------- consumir imagen: GET
//----------------------------------------------------

var localeImgage = document.getElementById('localeImage')
var APIImage = document.getElementById('APIImage')


function getJSONDataFromAPI(){
    let xhr; 
    let endpoint = 'https://jsonplaceholder.typicode.com/users';
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open('GET',endpoint);
    xhr.addEventListener('load',(data)=>{
        let lista = document.getElementById('lista');
        let dataJSON = JSON.parse(data.target.response);
        
        console.log(typeof(data));
        console.log(data);
        console.log(data.target.response);
        //debugger
        for(let userInfo of dataJSON){
            let listItem = document.createElement('li');
            listItem.textContent =   `Id: ${userInfo.id} - Name: ${userInfo.name}`; //${userInfo.id};
            lista.appendChild(listItem);
        }
    });  
    xhr.send();
}

//-------------------------------------------------------
function upploadImageFromLocalServer(){
    let xhr;
    let endpoint = '/img/nature.json'  
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }                
    xhr.open('GET',endpoint);
    xhr.addEventListener('load',data=>{
        console.log(data);
        console.log(typeof(data));
        let jsonData = JSON.parse(data.target.response);
        console.log(jsonData)
        localeImgage.setAttribute('src',jsonData.image);
    });
    xhr.send();
}

function removeImagenFromLocalServer(){
    localeImgage.setAttribute('src','');
}

//-------------------------------------------------
function upploadImageFromAPIServer(){
    let endpoint = 'https://pokeapi.co/api/v2/pokemon/25/'
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xhr.open('GET',endpoint);
    xhr.addEventListener('load',data=>{
        //console.log(typeof(data.target.response))
        let jsonData = JSON.parse(data.target.response);
        //console.log(jsonData)
        APIImage.setAttribute('src',jsonData.sprites.front_default);
    });
    xhr.send();
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
    let xhr;
    const endpoint = 'http://localhost/servidor/ajaxAPI/formulario.php';
    
    var datos = new FormData(formulario);
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xhr.open('POST',endpoint);

    xhr.send(datos);

    xhr.onload = () => {
        //console.log(xhr.responseText);
        let msg = document.getElementById('msg');
        msg.innerHTML = xhr.response;
    }

    

});

//-------------------------------------------

