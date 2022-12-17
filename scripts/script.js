  "use strict";

/*
 *  Regalzi Jeremias
 */

let productos = [
  {
    id: 1,
    nombre: "Air Force Grey",
    descripcion: "Unisex, gris + tira roja, low",
    precio: 25000,
    imagen: "img/airforce4.jpeg",
    cat: "Categoria 1",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
  {
    id: 2,
    nombre: "Air Force Color",
    descripcion: "Unisex, multicolor, low",
    precio: 25000,
    imagen: "img/airforce8edit.jpg",
    cat: "Categoria 1",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
  {
    id: 3,
    nombre: "Air Force UV",
    descripcion: "Unisex, edicion limitada, low",
    precio: 25000,
    imagen: "img/airforce6edit.jpg",
    cat: "Categoria 2",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
  {
    id: 4,
    nombre: "Jordan Flyer",
    descripcion: "Unisex, botita, multicolor",
    precio: 25000,
    imagen: "img/jordan-flyer.jpeg",
    cat: "Categoria 2",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
  {
    id: 5,
    nombre: "Air Max 97",
    descripcion: "Unisex, escala de grises",
    precio: 25000,
    imagen: "img/max-97.jpeg",
    cat: "Categoria 3",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
  {
    id: 6,
    nombre: "SB Dior",
    descripcion: "Unisex, edicion limitada, low",
    precio: 25000,
    imagen: "img/sb-dior.jpeg",
    cat: "Categoria 3",
    talles: [`6.5`, `7`, `7.5`, `8`, `8.5`, `9`, `9.5`, `10`, `10.5`, `11`],
  },
];

const miniCarrito = document.getElementById("minicarrito");
const div = document.getElementById("productos");
div.setAttribute('class', 'row justify-content-center text-center align-items-end');
let divCompleto,
  figure,
  img,
  divDetalles,
  nombre,
  descripcion,
  precioIgual,
  precioNumerico,
  categoria,
  divTalles,
  talleLabel,
  talleSelect,
  talleOption,
  boton;

//Creo los elementos html
const armar = (array) => {
  /* let card = ``; */
  array.forEach((producto) => {
    divCompleto = document.createElement("div");
    divCompleto.setAttribute("id", `${producto.id}`);
    divCompleto.setAttribute('class', 'col-10 col-sm-5 col-md-3 shadow py-3 px-3 my-3 mx-2 rounded')
    div.prepend(divCompleto);

    figure = document.createElement('figure');
    divCompleto.appendChild(figure);


    img = document.createElement("img");
    img.setAttribute("src", `${producto.imagen}`);
    img.setAttribute("alt", `${producto.nombre}`);
    img.setAttribute('class', 'img-fluid rounded')
    figure.appendChild(img);

    divDetalles = document.createElement("div");
    divCompleto.append(divDetalles);

    nombre = document.createElement("h3");
    divDetalles.prepend(nombre);
    nombre.innerText = producto.nombre;

    descripcion = document.createElement("p");
    divDetalles.appendChild(descripcion);
    descripcion.innerText = producto.descripcion;

    precioIgual = document.createElement("p");
    divDetalles.appendChild(precioIgual);
    precioIgual.innerText = `Precio: $`;

    precioNumerico = document.createElement("span");
    precioIgual.appendChild(precioNumerico);
    precioNumerico.innerText = producto.precio;

    categoria = document.createElement("p");
    divDetalles.appendChild(categoria);
    categoria.innerText = producto.cat;

    divTalles = document.createElement('div');
    divTalles.setAttribute('class', 'mb-3');
    divDetalles.appendChild(divTalles);

    talleLabel = document.createElement('label');
    divTalles.appendChild(talleLabel);
    talleLabel.innerText = 'Talle';

    talleSelect = document.createElement('select');
    talleSelect.setAttribute('name', 'talle');
    divTalles.appendChild(talleSelect);

    talleOption = document.createElement('option');
    talleOption.setAttribute('value', `${producto.talles}`);
    talleSelect.appendChild(talleOption);
    
    boton = document.createElement("button");
    boton.setAttribute('class', 'btn btnAgregar');
    boton.setAttribute('style', 'background-color:#488BC8; color:white');
    divDetalles.appendChild(boton);
    boton.innerText = `Agregar al carrito`;
    

   
    /* card +=`
    <div class="col-10 col-sm-5 col-md-3 shadow py-3 px-3 my-3 mx-2 rounded">
              <figure class="">
                <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}"/>
              </figure>
              <div>
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: $<span>${producto.precio}</span></p>
                <p>${producto.cat}</p>
                <div class="mb-3">
                  <label>Talle</label>
                  <select name="talle">
                    <option value="talle">38</option>
                    <option value="talle">39</option>
                    <option value="talle">40</option>
                    <option value="talle">41</option>
                    <option value="talle">42</option>
                    <option value="talle">43</option>
                  </select>
                </div>
                <button id="add" type="button" class="btn btn-primary">Agregar</button>
            </div>
            </div>
    `;
      div.innerHTML = card; */
  });
};
armar(productos);

//vaciar carrito
let vaciarCarrito = document.createElement("button");
vaciarCarrito.setAttribute('class', 'btn btn-danger mx-3 col-4');
miniCarrito.lastElementChild.append(vaciarCarrito);
vaciarCarrito.innerText = `Vaciar carrito`;

vaciarCarrito.addEventListener("click", (e) => {
  carrito = [];
  localStorage.removeItem("carrito");
  itemsAgregados.innerHTML = 0;
  precioTotal.innerHTML = 0;
  console.log(e.target);
  console.log(`borre todos los productos del carrito`);
});


let itemsAgregados = miniCarrito.firstElementChild.firstElementChild.firstElementChild,
  precioTotal = miniCarrito.firstElementChild.firstElementChild.nextElementSibling.firstElementChild; 



let carrito = JSON.parse(localStorage.getItem("carrito")) || [],
  btnAgregar = document.getElementsByClassName("btnAgregar");



const calcular = () => {
  let total = carrito.reduce(
    (accumulator, producto) => accumulator + producto.precio,
    0
  );
  console.log(total);
  itemsAgregados.innerHTML = carrito.length;
  precioTotal.innerHTML = total;
  return total;
}; 


const add = () => {
  const agregarAlCarrito = (objectId) => {
    const producto = productos.find((producto) => producto.id == objectId);
    carrito.push(producto);
    console.log(producto);
    console.log(carrito);
  };

  for (const btn of btnAgregar) {
    btn.addEventListener("click", (e) => {
      agregarAlCarrito(e.target.parentNode.parentNode.id);
      console.log(
        `agregue un producto al carrito, id = ${e.target.parentNode.parentNode.id}`
      );
      localStorage.setItem("carrito", JSON.stringify(carrito));
      calcular();
    });
  }
};
add();

calcular(); 

const modal = () => {
  let modalCarrito,
  modalDialog,
  modalContent,
  modalHeader,
  modalTitle,
  closeModal,
  modalBody,
  itemsyTotal,
  carritoVacio,
  hr,
  ul,
  li,
  comprar;

  modalCarrito = document.createElement("div");
    modalCarrito.setAttribute("id", "exampleModal");
    modalCarrito.setAttribute("class", "modal fade");
    modalCarrito.setAttribute('tabindex', '-1');
    modalCarrito.setAttribute('aria-labelledby', 'exampleModalLabel');
    modalCarrito.setAttribute('aria-hidden', 'true');
    div.before(modalCarrito);

    modalDialog = document.createElement("div");
    modalDialog.setAttribute("class", "modal-dialog");
    modalCarrito.prepend(modalDialog);
    
    modalContent = document.createElement("div");
    modalContent.setAttribute('class', 'modal-content');
    modalDialog.prepend(modalContent);
    
    modalHeader = document.createElement("div");
    modalHeader.setAttribute('class', 'modal-header');
    modalContent.prepend(modalHeader);
    
    modalTitle = document.createElement('h1');
    modalTitle.setAttribute('class', 'modal-title fs-5');
    modalTitle.setAttribute('id', 'exampleModalLabel');
    modalTitle.innerText = `Mi carrito`;
    modalHeader.prepend(modalTitle);

    closeModal = document.createElement('button');
    closeModal.setAttribute('type', 'button');
    closeModal.setAttribute('id', 'cerrarModal');
    closeModal.setAttribute('class', 'btn-close');
    closeModal.setAttribute('data-bs-dismiss', 'modal');
    closeModal.setAttribute('aria-label', 'Close');
    modalHeader.append(closeModal);

    modalBody = document.createElement("div");
    modalBody.setAttribute('class', 'modal-body');
    modalContent.appendChild(modalBody);

  if (carrito.length == 0) {

    carritoVacio = document.createElement("p");
    modalBody.appendChild(carritoVacio);
    carritoVacio.innerText = `Aún no agregaste productos al carrito`;

  } else {
  
    itemsyTotal = document.createElement("p");
    modalBody.appendChild(itemsyTotal);
    itemsyTotal.innerText = `Productos totales: ${carrito.length} - Precio total: ${calcular()}`;

    carrito.forEach((productoAgregado) => {

      hr = document.createElement("hr");
      itemsyTotal.after(hr);

      ul = document.createElement("ul");
      hr.after(ul);
        
        li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = `${productoAgregado.nombre}, ${productoAgregado.precio}`;

    });
    
    comprar = document.createElement('button');
      comprar.setAttribute('class', 'btn btn-primary');
      modalBody.appendChild(comprar);
      comprar.innerText = 'Finalizar compra';
    
  }

  let cerrarModal = document.getElementById('cerrarModal')
    cerrarModal.addEventListener ('click', () => {
      modalCarrito.remove()
    })
  
};



//ver carrito
let verCarrito = miniCarrito.lastElementChild.lastElementChild.previousElementSibling;



verCarrito.addEventListener("click", (e) => {
   
  modal();
  console.log(e.target);
  console.log("se muestra el carrito");
}); 

const borrar = () => {
  productos.forEach((producto) => {
    if (document.getElementById(`${producto.id}`)) {
      div.removeChild(document.getElementById(`${producto.id}`));
    }
  });
}; 


//llamo a la categoria 1
const cat1 = productos.filter((producto) => producto.cat === "Categoria 1");
let firstCat = miniCarrito.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild;

firstCat.addEventListener("click", (e) => {
  borrar(); 
  armar(cat1);
  add();
  console.log(e.target);
  console.log(`active la cat1`);
});

//llamo a la categoria 2
const cat2 = productos.filter((producto) => producto.cat === "Categoria 2");
let secondCat = miniCarrito.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;

secondCat.addEventListener("click", (e) => {
  borrar(); 
  armar(cat2);
  add();
  console.log(e.target);
  console.log(`active la cat2`);
});

//llamo a la categoria 3
const cat3 = productos.filter((producto) => producto.cat === "Categoria 3");
let thirdCat = miniCarrito.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling;

thirdCat.addEventListener("click", (e) => {
  borrar(); 
  armar(cat3);
  add();
  console.log(e.target);
  console.log(`active la cat3`);
});

//Todas las categorias
const todasCat = productos.filter((producto) => producto.precio === 25000 );
let allCat = miniCarrito.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;

allCat.addEventListener("click", (e) => {
  borrar();
  armar(todasCat);
  add();
  console.log(e.target);
  console.log(`muestro todas las categorias`);
});


