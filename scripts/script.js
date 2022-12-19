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
div.setAttribute(
  "class",
  "row justify-content-center text-center align-items-end"
);
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
    divCompleto.setAttribute(
      "class",
      "col-10 col-sm-5 col-md-3 shadow py-3 px-3 my-3 mx-2 rounded"
    );
    div.prepend(divCompleto);

    figure = document.createElement("figure");
    divCompleto.appendChild(figure);

    img = document.createElement("img");
    img.setAttribute("src", `${producto.imagen}`);
    img.setAttribute("alt", `${producto.nombre}`);
    img.setAttribute("class", "img-fluid rounded");
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

    divTalles = document.createElement("div");
    divTalles.setAttribute("class", "mb-3");
    divDetalles.appendChild(divTalles);

    talleLabel = document.createElement("label");
    divTalles.appendChild(talleLabel);
    talleLabel.innerText = "Talle";

    talleSelect = document.createElement("select");
    talleSelect.setAttribute("name", "talle");
    divTalles.appendChild(talleSelect);

    talleOption = document.createElement("option");
    talleOption.setAttribute("value", `${producto.talles}`);
    talleSelect.appendChild(talleOption);

    boton = document.createElement("button");
    boton.setAttribute("class", "btn btnAgregar");
    boton.setAttribute("style", "background-color:#488BC8; color:white");
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
vaciarCarrito.setAttribute("class", "btn btn-danger mx-3 col-4");
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

let itemsAgregados =
    miniCarrito.firstElementChild.firstElementChild.firstElementChild,
  precioTotal =
    miniCarrito.firstElementChild.firstElementChild.nextElementSibling
      .firstElementChild;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [],
  btnAgregar = document.getElementsByClassName("btnAgregar");

const totalProductos = () => {
  let totalProductos = carrito.reduce(
    (accumulator, producto) => accumulator + producto.cantidad,
    0
  );

  return totalProductos;
};

const calcular = () => {
  let total = carrito.reduce(
    (accumulator, producto) => accumulator + producto.precio,
    0
  );
  console.log(total);
  itemsAgregados.innerHTML = totalProductos();
  precioTotal.innerHTML = total;
  return total;
};
calcular();

const agregarAlCarrito = (objectId) => {
  const agregado = carrito.some((producto) => producto.id == objectId);
  const producto = productos.find((producto) => producto.id == objectId);

  if (agregado) {
    const productoIndex = carrito.findIndex(
      (producto) => producto.id === objectId
    );
    carrito.splice(productoIndex, 1);
    producto.cantidad++;
    producto.precio = 25000 * producto.cantidad;
  } else {
    producto.cantidad = 1;
  }
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  console.log(producto);
  console.log(carrito);
};

const add = () => {
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

const modal = () => {
  let modalAside,
    modalContent,
    modalHeader,
    modalTitle,
    closeModal,
    modalBody,
    itemsyTotal,
    carritoVacio,
    modalFooter,
    hr,
    ul,
    li,
    btnBorrar,
    comprar;

  modalAside = document.createElement("aside");
  modalAside.setAttribute("id", "modal");
  modalAside.setAttribute("class", "modal");
  miniCarrito.after(modalAside);

  modalContent = document.createElement("div");
  modalContent.setAttribute("class", "content-modal");
  modalAside.prepend(modalContent);

  modalHeader = document.createElement("header");
  modalHeader.setAttribute("class", "modal-header");
  modalContent.prepend(modalHeader);

  modalTitle = document.createElement("h1");
  modalTitle.innerText = `Mi carrito`;
  modalHeader.prepend(modalTitle);

  closeModal = document.createElement("a");
  closeModal.setAttribute("class", "close-modal");
  closeModal.setAttribute("id", "cerrarModal");
  modalTitle.after(closeModal);
  closeModal.innerText = "X";

  modalBody = document.createElement("div");
  modalBody.setAttribute("id", "carritoContainer");
  modalBody.setAttribute("class", "modal-body");
  modalHeader.after(modalBody);

  if (carrito.length == 0) {
    carritoVacio = document.createElement("h2");
    modalBody.appendChild(carritoVacio);
    carritoVacio.innerText = `Aún no agregaste productos al carrito`;
  } else {
    itemsyTotal = document.createElement("h2");
    itemsyTotal.setAttribute("class", "modal-precio");
    modalBody.appendChild(itemsyTotal);
    itemsyTotal.innerText = `Productos totales: ${totalProductos()} - Precio total: $${calcular()}`;

    carrito.forEach((productoAgregado) => {
      hr = document.createElement("hr");
      itemsyTotal.after(hr);

      ul = document.createElement("ul");
      hr.after(ul);

      li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = `${productoAgregado.nombre} 
                Precio: $${productoAgregado.precio} 
                Cantidad: ${productoAgregado.cantidad}`;

      btnBorrar = document.createElement('button')
      btnBorrar.setAttribute('class', 'botonesBorrar mx-3')
      btnBorrar.setAttribute('id', `${productoAgregado.id}`)
      btnBorrar.innerText = 'Eliminar uno';
      li.appendChild(btnBorrar)

    });
    modalFooter = document.createElement("footer");
    modalFooter.setAttribute("class", "modal-footer");
    modalContent.append(modalFooter);

    comprar = document.createElement("button");
    comprar.setAttribute("class", "btn btn-primary");
    modalFooter.appendChild(comprar);
    comprar.innerText = "Comprar";
    
    comprar.addEventListener("click", (e) => {
      console.log(e.target);
      console.log("Paso al checkout");
      modalBody.remove();
      comprar.innerText = "Finalizar compra";
      
      let 
      form, 
  divName, 
  labelName, 
  inputName, 
  nameValid;
  
  modalBody = document.createElement("div");
  modalBody.setAttribute("class", "modal-body");
  modalHeader.after(modalBody);
  
  form = document.createElement("form");
  form.setAttribute("class", "row justify-content-center py-4 needs-validation");
  form.setAttribute("method", "post");
  form.setAttribute("novalidate");
  modalBody.prepend(form);
  
  divName = document.createElement("div");
  divName.setAttribute("class", "col-8 col-sm-4 mb-3");
  form.appendChild(divName);
  
  labelName = document.createElement("label");
  labelName.setAttribute("for", "formulario1");
    labelName.setAttribute("class", "form-label");
    labelName.innerText = "Nombre";
    divName.appendChild(labelName);
    
    inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "nombre");
    inputName.setAttribute("class", "form-control");
    inputName.setAttribute("id", "formulario1");
    inputName.setAttribute("placeholder", "Nombre");
    inputName.setAttribute("required");
    divName.appendChild(inputName);
    
    nameValid = document.createElement("div");
    nameValid.setAttribute("class", "valid-feedback");
    divName.appendChild(nameValid); 
  }); 
}
  
  let cerrarModal = document.getElementById("cerrarModal");
  cerrarModal.addEventListener("click", () => {
    modalAside.remove();
  });
  
  let botonesBorrar = document.getElementsByClassName('botonesBorrar')
  
  for (const boton of botonesBorrar) {
    boton.addEventListener('click', (e) => {

        const producto = carrito.find((producto) => producto.id == e.target.id);
      
        if(producto.cantidad > 1) {
          producto.cantidad--;
          producto.precio = 25000 * producto.cantidad;
        } else {
          const productoIndex = carrito.findIndex(producto => producto.id === e.target.id);
          carrito.splice(productoIndex, 1);
        }
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        modalAside.remove()
        modal()
        calcular()
      })
    }

};

//ver carrito
let verCarrito =
  miniCarrito.lastElementChild.lastElementChild.previousElementSibling;

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

const modalOferta = () => {
 let 
    modalAside,
    modalContent,
    modalHeader,
    modalTitle,
    closeModal,
    modalBody,
    figure,
    img;

    modalAside = document.createElement("aside");
    modalAside.setAttribute("id", "modal");
    modalAside.setAttribute("class", "modal");
    miniCarrito.after(modalAside);
  
    modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modalOferta-content");
    modalAside.prepend(modalContent);
  
    modalHeader = document.createElement("header");
    modalHeader.setAttribute("class", "modal-header");
    modalContent.prepend(modalHeader);
  
    modalTitle = document.createElement("h1");
    modalTitle.innerText = `Lo último en RC`;
    modalHeader.prepend(modalTitle);
  
    closeModal = document.createElement("a");
    closeModal.setAttribute("class", "close-modal");
    closeModal.setAttribute("id", "cerrarModal");
    modalTitle.after(closeModal);
    closeModal.innerText = "X";
  
    modalBody = document.createElement("div");
    modalHeader.after(modalBody);

    figure = document.createElement('figure');
    modalBody.appendChild(figure);

    img = document.createElement('img');
    img.setAttribute('src', 'img/jordan-flyer.jpeg');
    img.setAttribute('alt', 'jordan flyer');
    img.setAttribute('height', '500');
    img.setAttribute('width', '500');
    img.setAttribute('style', 'margin: 0 20px');
    figure.appendChild(img);

   let cerrarModal = document.getElementById("cerrarModal");
  cerrarModal.addEventListener("click", () => {
    modalAside.remove();
  });
  
  setTimeout(() => {
    modalAside.remove();
    
  }, 10000);
  
}

//llamo a la categoria 1
const cat1 = productos.filter((producto) => producto.cat === "Categoria 1");
let firstCat =
miniCarrito.lastElementChild.lastElementChild.previousElementSibling
.previousElementSibling.firstElementChild;

firstCat.addEventListener("click", (e) => {
  borrar();
  armar(cat1);
  add();
  modalOferta();
});

//llamo a la categoria 2
const cat2 = productos.filter((producto) => producto.cat === "Categoria 2");
let secondCat =
  miniCarrito.lastElementChild.lastElementChild.previousElementSibling
    .previousElementSibling.firstElementChild.nextElementSibling;

secondCat.addEventListener("click", (e) => {
  borrar();
  armar(cat2);
  add();
  modalOferta();
});

//llamo a la categoria 3
const cat3 = productos.filter((producto) => producto.cat === "Categoria 3");
let thirdCat =
  miniCarrito.lastElementChild.lastElementChild.previousElementSibling
    .previousElementSibling.lastElementChild.previousElementSibling;

thirdCat.addEventListener("click", (e) => {
  borrar();
  armar(cat3);
  add();
  modalOferta();
});

//Todas las categorias
const todasCat = productos.filter((producto) => producto.precio === 25000);
let allCat =
  miniCarrito.lastElementChild.lastElementChild.previousElementSibling
    .previousElementSibling.lastElementChild;

allCat.addEventListener("click", (e) => {
  borrar();
  armar(todasCat);
  add();
  console.log(e.target);
  console.log(`muestro todas las categorias`);
});
