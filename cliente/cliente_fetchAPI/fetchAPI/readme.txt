Test ejemplo Fetch
------------------
Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas 
utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose. La forma de realizar 
una petición es muy sencilla, básicamente se trata de llamar a fetch y pasarle por parámetro la URL de la 
petición a realizar:

😀 Ya no es necesario XMLHttpRequest


La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes de la canalización HTTP, 
como solicitudes y respuestas. También proporciona un fetch()método global que proporciona una forma lógica 
y sencilla de obtener recursos de forma asincrónica a través de la red.

Este tipo de funcionalidad se logró anteriormente utilizando XMLHttpRequest. Fetch proporciona una mejor 
alternativa que puede ser utilizada fácilmente por otras tecnologías como Service Workers. Fetch también 
proporciona un lugar lógico único para definir otros conceptos relacionados con HTTP, como CORS y extensiones de HTTP.

La fetchespecificación se diferencia de jQuery.ajax()tres formas principales:

	La promesa devuelta fetch() no se rechazará en el estado de error HTTP incluso si la respuesta es un HTTP 404 o 500. 
	En cambio, se resolverá normalmente (con el okestado establecido en falso) y solo se rechazará en caso de falla 
	de la red o si algo impidió el solicitud de completar.

	fetch() no enviará cookies de origen cruzado a menos que establezca la opción de inicio de credenciales . 
	(Desde abril de 2018. La especificación cambió la política de credenciales predeterminada a . Firefox cambió desde 61.0b13).same-origin

example:

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));


  
// Realizamos la petición y guardamos la promesa
const request = fetch("URL");

// Si es resuelta, entonces ejecuta esta función...
request.then(function(response) {
	 ... 
});

method:

get