const nombre = document.getElementById("name")
const direccion = document.getElementById("direccion")
const comuna = document.getElementById("comuna")
const comunaFilter = document.getElementById("filterComuna")
const tableContainer = document.getElementById('table-container');
const btn =  document.getElementById("btnAdd")
const container = document.getElementById("containerAdd")
const btnFilter =  document.getElementById("btnFilter")

const Persona = function(nombre, direccion, comuna){
    this.nombre = nombre
    this.direccion = direccion
    this.comuna = comuna
}

let p1 = new Persona("Juan", "Los libertadores 194", "Santiago")
let p2 = new Persona("Jose ", "11 de Septiembre 4726", "Ñuñoa")
let p3 = new Persona("Raul", "Bernardo Ohiggins 9863", "Providencia")
let p4 = new Persona("Pedro", "Los trapenses 3456", "Provedencia")
let p5 = new Persona("Claudio", "Salesanos 97465", "Providencia")
let p6 = new Persona("Max", "Los libertadores 123", "Santiago")

var listaPersonas = [p1,p2,p3,p4,p5,p6]

function filtrarComuna(){
    if (filterComuna.value == "")
    {
        alert("Datos incorrectos. ")
        return 
    }   

    let resultado = listaPersonas.filter((x)=>x.comuna.toUpperCase().includes(filterComuna.value.toUpperCase()))

    if (resultado.length > 0)
    {
        console.table(resultado)
    }
    else{
        alert("No se encontraron personas en la comuna ingresada: " + filterComuna.value)
        return
    }
    Imprimir(resultado)
}

function agregarPersona(){
    
    if (nombre.value == "" || direccion.value == "" || comuna.value == "")
    {
        alert("Datos incorrectos. ")
        return 
    }   

    let persona = new Persona(nombre.value, direccion.value, comuna.value)

    if (listaPersonas.some((x)=>x.nombre.trim().toUpperCase() === persona.nombre.trim().toUpperCase()))
    {
        alert("el nombre ya existe")
        return
    }

    listaPersonas.push(persona)
    console.table(listaPersonas)
    return true
}

function Imprimir(data){
    // Obtener el elemento div donde se mostrará el arreglo
    if (data == null)
        data = listaPersonas
    const table = createTableFromData(data)
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

function LimpiarTabla(){
    tableContainer.innerHTML = '';
}

/*
let opcion = 0
while (opcion != 4)
{
    let menu = "1. Ingresar persona\n2. Listar personas\n3. Buscar por comuna\n4. Salir"
    opcion = parseInt(prompt(menu))
    
    if (isNaN(opcion) || opcion == null || opcion < 1 || opcion > 4  )
    {
        alert("Opción incorrecta");
        continue
    }
    switch(opcion){
        case 1:
            agregarPersona()
            Imprimir(listaPersonas)
            break
        case 2:
            console.table(listaPersonas)
            Imprimir(listaPersonas)
            break
        case 3:
            filtrarComuna()
            break
        default:
            break
    }
}
*/

btn.addEventListener("click", ()=>{
    if (agregarPersona()) 
        crearTarjeta(container)
})

btnFilter.addEventListener("click", ()=>{
    filtrarComuna()
})

function crearTarjeta(container){
    const tarjeta =  document.createElement("div")
    tarjeta.innerHTML= `
    <h2>${nombre.value}</h2>
    <p>${direccion.value}</p>
    <p>${comuna.value}</p>
    `
    container.innerHTML = '';
    container.appendChild(tarjeta)
}

/********Captura clic ******** */
const triggerTabList = document.querySelectorAll('#pills button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
})
})

function createTableFromData(data) {
    const table = document.createElement('table');
  
    const headerRow = document.createElement('tr');
  
    const keys = Object.keys(data[0]);
  
    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    data.forEach(item => {
      const row = document.createElement('tr');
  
      keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      table.appendChild(row);
    });
   return table;
  }

  
  