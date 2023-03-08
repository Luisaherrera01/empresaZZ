// Función para validar el inicio de sesión
const validarInicioSesion = () => {
  let usuario = document.querySelector("#usuario").value;
  let password = document.querySelector("#password").value;

  if (usuario === "1" && password === "1") {
    document.querySelector("#inicio-sesion").style.display = "none";
    document.querySelector("#menu").style.display = "block";
    } else {
    alert("Usuario o contraseña incorrectos");
  }
}
document.querySelector("#btnInicio").addEventListener("click", validarInicioSesion);


///////////////////CELULARES/////////////////////////////

//Funcion para mostrar el formulario de celulares
const mostrarFormularioCelular = () =>{
  document.querySelector("#formularios").style.display = "block";
  document.querySelector("#formulario-portatil").style.display = "none";
  document.querySelector("#formulario-celular").style.display = "block";
  document.querySelector("#formulario-cliente").style.display = "none";
  document.querySelector("#lista-celulares").style.display = "block"
  document.querySelector("#lista-portatiles").style.display = "none"
  document.querySelector("#lista-clientes").style.display = "none"
}
document.querySelector("#btnCelular").addEventListener("click",mostrarFormularioCelular)

//Función para agregar un nuevo celular al array celulares
let celulares = [];

const btnAgregarCelular =() =>{
  let nombre = document.querySelector("#nombre-celular").value;
  let referencia = document.querySelector("#referencia-celular").value;
  let codigo = document.querySelector("#codigo-celular").value;
  let valor = document.querySelector("#valor-celular").value;
  let cantidad = document.querySelector("#cantidad-celular").value;
  let imagen = document.querySelector("#imagen-celular").value;

  let celular = {
    nombre: nombre,
    referencia: referencia,
    codigo: codigo,
    valor:valor,
    cantidad:cantidad,
    imagen:imagen
  };

  celulares.push(celular);

  alert("Celular agregado con exito")

  //se crea la card
  let listaCelulares = document.querySelector("#lista-celulares"); //se selecciona el nodo al que se le va a agregar los elementos
  let cardCelular = document.createElement("div");//se crea el elemento contenedor padre
  cardCelular.classList.add("celular-card"); //se le da el nombre a la clase para darle style

  //cada elemento hijo
  let nombreCelular = document.createElement("h3"); 
  nombreCelular.innerHTML = "Nombre celular: " + nombre;
  cardCelular.appendChild(nombreCelular);

  let referenciaCelular = document.createElement("p");
  referenciaCelular.innerHTML = "Referencia: " + referencia;
  cardCelular.appendChild(referenciaCelular);

  let codigoCelular = document.createElement("p");
  codigoCelular.innerHTML = "Código: " + codigo;
  cardCelular.appendChild(codigoCelular);

  let valorCelular = document.createElement("p");
  valorCelular.innerHTML = "Valor $: " + valor;
  cardCelular.appendChild(valorCelular);

  let cantidadCelular = document.createElement("p");
  cantidadCelular.innerHTML = "Cantidades vendidas : " + cantidad;
  cardCelular.appendChild(cantidadCelular);

  let imagenCelular = document.createElement("img");
  imagenCelular.src = imagen;
  cardCelular.appendChild(imagenCelular);

  listaCelulares.appendChild(cardCelular);

  document.querySelector("#lista-celulares").style.display = "block"
  }
document.querySelector("#btnAgregarCelular").addEventListener("click", btnAgregarCelular);

///////////////////PORTATILES/////////////////////////////

//Funcion para mostrar el formulario de portatiles
const mostrarFormularioPortatil = () =>{
  document.querySelector("#formularios").style.display = "block";
  document.querySelector("#formulario-portatil").style.display = "block";
  document.querySelector("#formulario-celular").style.display = "none";
  document.querySelector("#formulario-cliente").style.display = "none";
  document.querySelector("#lista-celulares").style.display = "none"
  document.querySelector("#lista-portatiles").style.display = "block"
  document.querySelector("#lista-clientes").style.display = "none"
}
document.querySelector("#btnPortatil").addEventListener("click",mostrarFormularioPortatil)

//Función para agregar un nuevo portatil al array portatiles
let portatiles = [];

const btnAgregarPortatil =() =>{
  let nombre = document.querySelector("#nombre-portatil").value;
  let referencia = document.querySelector("#referencia-portatil").value;
  let codigo = document.querySelector("#codigo-portatil").value;
  let valor = document.querySelector("#valor-portatil").value;
  let cantidad = document.querySelector("#cantidad-portatil").value;
  let imagen = document.querySelector("#imagen-portatil").value;

  let portatil = {
    nombre: nombre,
    referencia: referencia,
    codigo: codigo,
    valor:valor,
    cantidad:cantidad,
    imagen:imagen
  };

  portatiles.push(portatil);

  alert("Portatil agregado con exito")

  //se crea la card
  let listaPortatiles = document.querySelector("#lista-portatiles"); //se selecciona el nodo al que se le va a agregar los elementos
  let cardPortatil = document.createElement("div");//se crea el elemento contenedor padre
  cardPortatil.classList.add("portatil-card"); //se le da el nombre a la clase para darle style

  //cada elemento hijo
  let nombrePortatil = document.createElement("h3"); 
  nombrePortatil.innerHTML = "Nombre Portatil: " + nombre;
  cardPortatil.appendChild(nombrePortatil);

  let referenciaPortatil = document.createElement("p");
  referenciaPortatil.innerHTML = "Referencia: " + referencia;
  cardPortatil.appendChild(referenciaPortatil);

  let codigoPortatil = document.createElement("p");
  codigoPortatil.innerHTML = "Código: " + codigo;
  cardPortatil.appendChild(codigoPortatil);

  let valorPortatil = document.createElement("p");
  valorPortatil.innerHTML = "Valor $: " + valor;
  cardPortatil.appendChild(valorPortatil);

  let cantidadPortatil = document.createElement("p");
  cantidadPortatil.innerHTML = "Cantidades vendidas : " + cantidad;
  cardPortatil.appendChild(cantidadPortatil);

  let imagenPortatil = document.createElement("img");
  imagenPortatil.src = imagen;
  cardPortatil.appendChild(imagenPortatil);

  listaPortatiles.appendChild(cardPortatil);

  document.querySelector("#lista-portatiles").style.display = "block"
}
document.querySelector("#btnAgregarPortatil").addEventListener("click", btnAgregarPortatil);

///////////////////CLIENTES/////////////////////////////

//Funcion para mostrar el formulario del cliente
const mostrarFormularioCliente = () =>{
  document.querySelector("#formularios").style.display = "block";
  document.querySelector("#formulario-portatil").style.display = "none";
  document.querySelector("#formulario-celular").style.display = "none";
  document.querySelector("#formulario-cliente").style.display = "block";
  document.querySelector("#lista-celulares").style.display = "none"
  document.querySelector("#lista-portatiles").style.display = "none"
  document.querySelector("#lista-clientes").style.display = "block"
}
document.querySelector("#btnCliente").addEventListener("click",mostrarFormularioCliente)

//Función para agregar un nuevo cliente al array clientes
let clientes = [];

const btnAgregarCliente =() =>{
  let nombre = document.querySelector("#nombre-cliente").value;
  let documento = document.querySelector("#documento-cliente").value;
  let celular = document.querySelector("#celular-cliente").value;
  let direccion = document.querySelector("#direccion-cliente").value;
  let correo = document.querySelector("#correo-cliente").value;

  let cliente = {
    nombre: nombre,
    documento: documento,
    celular: celular,
    direccion: direccion,
    correo: correo,
  };

  clientes.push(cliente);

  alert("Cliente agregado con exito")

  //se crea la card
  let listaClientes = document.querySelector("#lista-clientes"); //se selecciona el nodo al que se le va a agregar los elementos
  let cardClientes = document.createElement("div");//se crea el elemento contenedor padre
  cardClientes.classList.add("clientes-card"); //se le da el nombre a la clase para darle style

  //cada elemento hijo
  let nombreCliente = document.createElement("h3"); 
  nombreCliente.innerHTML = "Nombre Cliente: " + nombre;
  cardClientes.appendChild(nombreCliente);

  let documentoCliente = document.createElement("p");
  documentoCliente.innerHTML = "Documento: " + documento;
  cardClientes.appendChild(documentoCliente);

  let celularCliente = document.createElement("p");
  celularCliente.innerHTML = "Celular: " + celular;
  cardClientes.appendChild(celularCliente);

  let direccionCliente = document.createElement("p");
  direccionCliente.innerHTML = "Direccion:  " + direccion;
  cardClientes.appendChild(direccionCliente);

  let correoCliente = document.createElement("p");
  correoCliente.innerHTML = "Correo: " + correo;
  cardClientes.appendChild(correoCliente);

  listaClientes.appendChild(cardClientes);

  document.querySelector("#lista-clientes").style.display = "block"
}
document.querySelector("#btnAgregarCliente").addEventListener("click", btnAgregarCliente);

///////////////////////////////////////////////////////////////////////////////////////7

// Función para cerrar sesión
function cerrarSesion() {
  document.querySelector("#formularios").style.display = "none";
  document.querySelector("#menu").style.display = "none";
  document.querySelector("#inicio-sesion").style.display = "block";
}
document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);







