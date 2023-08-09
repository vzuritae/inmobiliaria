//arreglo de objetos

const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "./assets/imgs/casa_de_campo.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "./assets/imgs/casa_de_playa.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "./assets/imgs/casa_en_el_centro.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "./assets/imgs/casa_rodante.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "./assets/imgs/departamento.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "./assets/imgs/mansion.jpg",
      cuartos: 5,
      metros: 500
    }
];


//variables

let cuartos = document.querySelector('#cuartos')
let desde = document.querySelector('#desde')
let hasta = document.querySelector('#hasta')
let total = document.querySelector('#total')
let propiedades = document.querySelector('.propiedades')
let totalPropiedades = propiedadesJSON.length

let html = ""

let boton = document.querySelector('#boton')

boton.addEventListener('click', buscar)


//template

for (let propiedad of propiedadesJSON) {
    
    html += `
      <div class="propiedad">
          <div class="img" style="background-image: url('${propiedad.src}')"></div>
          <section>
              <h5>${propiedad.nombre}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${propiedad.cuartos}</p>
                  <p>Metros: ${propiedad.metros}</p>
              </div>
              <p class="my-3">${propiedad.descripcion}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
      </div>
    `
}

propiedades.innerHTML = html
total.innerHTML = totalPropiedades


//función buscar

function buscar() {
  let html = ""
  totalPropiedades = 0
  
  if (cuartos.value == "" || desde.value == "" || hasta.value == "") {
    alert('Faltan campos por llenar')
  }
  else if (cuartos.value < 0 || desde.value < 0 || hasta.value < 0) {
    alert('Ingresa un valor igual o mayor a cero') 
  }
  else {
    for (let propiedad of propiedadesJSON){
      if (propiedad.cuartos >= cuartos.value && propiedad.metros >= desde.value && propiedad.metros <= hasta.value){

        totalPropiedades++
        
        html += `
          <div class="propiedad">
              <div class="img" style="background-image: url('${propiedad.src}')"></div>
              <section>
                  <h5>${propiedad.nombre}</h5>
                  <div class="d-flex justify-content-between">
                      <p>Cuartos: ${propiedad.cuartos}</p>
                      <p>Metros: ${propiedad.metros}</p>
                  </div>
                  <p class="my-3">${propiedad.descripcion}</p>
                  <button class="btn btn-info ">Ver más</button>
              </section>
          </div>
        `
      }
    }
    
  propiedades.innerHTML = html
  total.innerHTML = totalPropiedades
  }
}