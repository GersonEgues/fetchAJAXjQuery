
//sintaxis javascript
var bjs = document.getElementById('bjs');

bjs.addEventListener('click',function(e){
    e.preventDefault();
    let pjs = document.getElementById('pjs');
    console.log("hola desde javascript");
    pjs.innerHTML = "texto cambiado por javascript";
});

//sintaxis equivalente jquery
$('#bjq').click(function(e){
    e.preventDefault();
    console.log("hola desde jquery");
    $('#pjq').html('texto cambiado por jquery');
});
//------------------------------------------------------------------
//------------------------------------------------------------------


//------------------------------------------------------------------
//--- GET: get data from API
//------------------------------------------------------------------
$('#elements').click(function(e){
   e.preventDefault();
    $.get('https://jsonplaceholder.typicode.com/users', function(data, status){
      printDatos(data,status);
      for(let userInfo of data){
         let listItem = document.createElement('li');
         listItem.textContent = `Id: ${userInfo.id} - Name: ${userInfo.name}`;
         $('#lista').append(listItem);   
      }
    });
});
//------------------------------------------------------------------
// ---- GET: get image from Local Server
//------------------------------------------------------------------
$('#getImgLoc').click(function(e){
   e.preventDefault();
   $.get('/img/nature.json',function(data,status){
      printDatos(data,status);
      $('#localeImage').attr('src',data.image);
   });
});
$('#remImgLoc').click(function(e){
   e.preventDefault();
   $('#localeImage').attr('src','');
});
//------------------------------------------------------------------
// ---- GET: get image from API
//------------------------------------------------------------------
$('#getImgAPI').click(function(e){
   e.preventDefault();
   $.get('https://pokeapi.co/api/v2/pokemon/25/',function(data,status){
      printDatos(data,status);
      $('#APIImage').attr('src',data.sprites.front_default);
   });
});

$('#remImgAPI').click(function(e){
   e.preventDefault();
   $('#APIImage').attr('src','');
});
//------------------------------------------------------------------
// -- POST
//------------------------------------------------------------------
$('#butSub').click(function(e){
   e.preventDefault();
   let endpoint = 'http://localhost/servidor/ajaxAPIjQuery/formulario.php';
   $.post( endpoint,$('#formulario').serialize() ,function( data,status ) {
      printDatos(data,status);
      $('#msg').html(data);
   });
});





//------------------------------------------------------------------
//------------------------------------------------------------------
function printDatos(data,status){
   console.log('status: ' + status);
   console.log(data);
   console.log(typeof(data))
   //let jsonData = jQuery.parseJSON(data);
   //console.log(jsonData);
}






