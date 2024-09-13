//import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  /*=============================================
  =            Super Menu            =
  =============================================*/

  /* Declaracion de variables  */

  const btnCategorias = document.getElementById("btn-categorias"),
        grid = document.getElementById("grid"),
        esDispositivoMovil = () => window.innerWidth <= 800;

  btnCategorias.addEventListener("mouseover", () => {
    if (!esDispositivoMovil()) {
      grid.classList.add("active");
    }
  });

  grid.addEventListener('mouseleave', () =>{
  //  grid.classList.remove('active')
  })

  const links = document.querySelectorAll('#menu .categorias a')
  links.forEach((elemento) =>{
    elemento.addEventListener('mouseenter',(e) => {
      //console.log(e.target.dataset.categoria)
     document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
      //console.log(categoria.dataset.categoria)
   categoria.classList.remove('active')
   if(categoria.dataset.categoria == e.target.dataset.categoria ){
    categoria.classList.add('active')
   }   
    })
    
    })
  })

  /*=====  End of Super menu   ======*/

  
 
  

  
  /*=============================================
  =                 SLIDER                      =
  =============================================*/
  
 
  // declaracion de variables y constantes

  const slider = document.querySelector("#slider"),
    arrowLeft = document.querySelector("#left"),
    arrowRight = document.querySelector("#right"),
    sliderSection = document.querySelectorAll(".heroArea");

  // contador para sumar o restar a la posicion
  let calcPosicion = 0;
  // si hay mas slider calculara que porcetaje tiene que mover
  let widthSliders = 100 / sliderSection.length;
  // lo usamos para reiniciar el slider una vez ha recorrido todas las imagenes
  let counter = 0;

  const toRight = function (e) {
    if (counter >= sliderSection.length - 1) {
      counter = 0;
      calcPosicion = 0;
      slider.style.transform = `translate(-${calcPosicion}%)`;
      return;
    }
    counter++;
    calcPosicion += widthSliders;
    slider.style.transform = `translate(-${calcPosicion}%)`;
  };

  const toLeft = function () {
    counter--;
    if (counter < 0) {
      counter = sliderSection.length - 1;
      calcPosicion = widthSliders * (sliderSection.length - 1);
      slider.style.transform = `translate(-${calcPosicion}%)`;
      return;
    }
    calcPosicion -= widthSliders;
    slider.style.transform = `translate(-${calcPosicion}%)`;
  };

  arrowLeft.addEventListener("click", toLeft);
  arrowRight.addEventListener("click", toRight);

  setInterval(() => {
    toRight();
  }, 5000);

  // Final cogio slider
});

document.querySelector("#app").innerHTML = `
 


       <div class="bar">
          <p>
            Aprovecha las ventas de temporada hasta un <span>30%</span> de
            descuento <a href="#"> Compra Ahora</a>
          </p>
          <p>Servicio al Cliente <a href="#"> +1-800-000-4499</a></p>
        </div>



        <div class="menu" id="menu">
         
          <!-- <div class="containerCategoria">
        
           <div class ="categorias">
            <h1 class="placeholder">Todas las categorias</h1>             
            </div>

            <ul class="listaCategoria">
              <a href="#">Mobiliarios</a>
              <a href="#">Floristeria</a>
              <a href="#">Arreglos en Globos</a>
              <a href="#">Arreglos en flores</a>
              <a href="#">GiftShop</a>
              <a href="#">Eventos</a>
          
            </ul>
         </div> -->

          <div class="contenedor-botones-menu">
            <button id="btn-menu-barras" class="btn-menu-barras"><i class="fas fa-bars"></i></button>
            <button id="btn-menu-cerrar" class="btn-menu-cerrar"><i class="fas fa-times"></i></button>
          </div>

          <div class="contenedor-enlaces-nav">
            
            <div class="logo">
              <a href="index.html"
                ><figure>
                  <img src="assets/HeysiLogo.svg" alt="logo-heysi" /></figure
              ></a>
            </div>

            <div class="btn-categorias" id="btn-categorias">
              <p>Todas las<span>Categorias </span></p>
              <i class="fas fa-caret-down"></i>
            </div>
        

            <nav class="mainMenu">

              <menu>

                <li><a href="index.html" class="active">Inicio</a></li>
                <li><a href="/public/tienda.html">Tienda</a></li>
                <li>
                <a href="public/partyservice.html"
                  >Party-Service <i class="fa-solid fa-caret-down"></i
                ></a>
                </li>
                <li><a href="/public/blog.html">Blog</a></li>
                <li><a href="/public/nosotros.html">Nosotros</a></li>
                <li><a href="/public/contacto.html">Contacto</a></li>
              </menu>

            </nav>

            <div class="cart-login">
              <i class="fa-solid fa-user"></i>
              <i class="fa-solid fa-bag-shopping"></i>
            </div>

          </div>
          
          <div class="contenedor-grid">
            
            <div class="grid active" id="grid">
              
              <div class="categorias">

                <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
              
                <h3 class="subtitulo" >Categorias</h3>

                <a href="#" data-categoria="mobiliarios">Mobiliarios <i class="fas fa-angle-right"></i></a>
                <a href="#" data-categoria="floristeria">Floristeria<i class="fas fa-angle-right"></i></a>
                <a href="#" data-categoria="arreglos-en-globos">Arreglos en Globos<i class="fas fa-angle-right"></i></a>
                <a href="#" data-categoria="arreglos-en-flores">Arreglos en Flores<i class="fas fa-angle-right"></i></a>
                <a href="#" data-categoria="giftshop">GiftShop<i class="fas fa-angle-right"></i></a>
                <a href="#" data-categoria="eventos">Eventos<i class="fas fa-angle-right"></i></a>
                
              </div>

          <div class="contenedor-subcategorias">
                
                <div class="subcategoria active" data-categoria="mobiliarios">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Mobiliarios</h3>
                    <a href="#">Mesas</a>
                    <a href="#">Estantes</a>
                    <a href="#">Elevadores</a>
                    <a href="#">Cilindros</a>
                    <a href="#">Paneles</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 
                
                <div class="subcategoria" data-categoria="floristeria">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Floristeria</h3>
                    <a href="#">Margaritas</a>
                    <a href="#">Flor del Sol</a>
                    <a href="#">Elevadores</a>
                    <a href="#">Cilindros</a>
                    <a href="#">Paneles</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 

                <div class="subcategoria" data-categoria="arreglos-en-globos">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Arreglos en Globos</h3>
                    <a href="#">Cadenas</a>
                    <a href="#">Tematicos</a>
                    <a href="#">Elevadores</a>
                    <a href="#">Cilindros</a>
                    <a href="#">Paneles</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 

                <div class="subcategoria" data-categoria="arreglos-en-flores">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Mobiliarios</h3>
                    <a href="#">Arreglos con rosas rojas</a>
                    <a href="#">Arreglos con rosas blancas</a>
                    <a href="#">Arreglos Mixtos</a>
                    <a href="#">Cilindros</a>
                    <a href="#">Paneles</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 

                <div class="subcategoria" data-categoria="giftshop">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Mobiliarios</h3>
                    <a href="#">relojes</a>
                    <a href="#">recuerdos</a>
                    <a href="#">Suveniles</a>
                    <a href="#">DIY</a>
                    <a href="#">Pan</a>
                    <a href="#">recuerdos</a>
                    <a href="#">Suveniles</a>
                    <a href="#">DIY</a>
                    <a href="#">recuerdos</a>
                    <a href="#">Suveniles</a>
                    <a href="#">DIY</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 

                <div class="subcategoria" data-categoria="eventos">

                  <div class="enlaces-subcategoria">
                    <button class="btn-atras"><i class="fa-solid fa-arrow-left"></i>Atras</button>
                    <h3 class="subtitulo">Mobiliarios</h3>
                    <a href="#">Quince años</a>
                    <a href="#">Bodas</a>
                    <a href="#">Graduaciones</a>
                    <a href="#">Revelaciones de sexo</a>
                    <a href="#">BabeShower</a>
                  </div>

                  <div class="banner-subcategoria">
                    <a href="">
                      <img src="/assets/Productos/Mobiliarios/S5911053d895c49ef8b417db3458bc81bT.jpg_640x640.jpg_.png" alt="">
                    </a>
                  </div>

                  <div class="galeria-subcategoria">
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Azul.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Decorado.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel oso.jpg_.avif" alt="">
                    </a>
                    <a href="#">
                      <img src="assets/Productos/Mobiliarios/Paneles/Panel Rosado.jpg_.avif" alt="">
                    </a>
                  </div>

                </div> 
              
              </div>
                    

            </div> 

            

         
          </div>

        </div>

      

      <main> <!--Body -->

        <section class="hero"> <!-- container carrusel-->
          

          <div class="slider" id="slider"> <!--Carruseles-->
             

            <div class="heroArea"> <!--slider section-->
              <p class="title">Coleccion Mobiliario 2024</p>
              <h1>Se el anfitrion que tus invitados esperan</h1>
              <p class="description">
                Aprovecha las ofertas de temporada en alquiler de modernos de
                mobiliarios
              </p>
              <button>Ver nueva Coleccion</button>
            </div>

            <div class="heroArea"> <!--slider section-->
              <p class="title">¿quieres hacer un evento tematico?</p>
              <h1>Hacemos realidad tu motivo</h1>
              <p class="description">
                Sea cual sea la idea que tienes en mente lo convertimos en
                realidad. haz que tus invitados quieran hablar de tu evento
              </p>
              <button>Contactanos</button>
            </div>

            <div class="heroArea"> <!--slider section-->
              <p class="title">
                Aprovecha nuestros paquetes para ese evento especial
              </p>
              <h1>Tenemos la solucion para tu evento</h1>
              <p class="description">
                ¿cuantos invitados esperas? ¿50? ¿100? ¿150? no importa, tenemos
                tu solucion.
              </p>
              <button>Ver nuestros paquetes</button>
            </div>

          </div>

          <div class="arrows"> <!-- Arrows -->
            <i id="left" class="fa-solid fa-angle-left"></i>
            <i id="right" class="fa-solid fa-angle-right"></i>
          </div>

        </section> 

<section class="masPedidos secciones">
  <h1>Los mas Pedidos</h1>
  <div class="productsContainer">
    <div class="productos">
            <div class="imagen"><figure>
              <img src="./assets/Productos/Mobiliarios/Cilindro-blanco-puro-para-cumplea-os-decoraciones-de-fiesta-de-boda.png" alt="">
            </figure>
          </div> <div class="info" >
          <h2 class="nombreProducto">Juego de Cilindro</h2>
          <p class="precio">$11,000.00</p>
          </div>
          <p class="descripcionProducto">Cilindro blanco purto Cumpleaños</p>
          <button class="addToCart">Agregar al Carrito</button>
          </div>


           <div class="productos">
            <div class="imagen"><figure>
              <img src="./assets/Productos/Mobiliarios/Cilindro tipo romano.png" alt="">
            </figure>
          </div> <div class="info" >
          <h2 class="nombreProducto">Juego de Cilindro Romano</h2>
          <p class="precio">$11,000.00</p>
          </div>
          <p class="descripcionProducto">Estante para pastel de boda, columna romana</p>
          <button class="addToCart">Agregar al Carrito</button>
          </div>

           <div class="productos">
            <div class="imagen"><figure>
              <img src="./assets/Productos/Mobiliarios/Cubiertas-de-z-calo-cil-ndrico-para-decoraciones-de-fiestas-mantel-de-Pedestal-Baby-Shower-boda.png" alt="">
            </figure>
          </div> <div class="info" >
          <h2 class="nombreProducto">Cubierta de Zocalo Cilindrico</h2>
          <p class="precio">$11,000.00</p>
          </div>
          <p class="descripcionProducto">Cubiertas de zócalo cilíndrico decoraciones...</p>
          <button class="addToCart">Agregar al Carrito</button>
          </div>

           <div class="productos">
            <div class="imagen">
                <figure>
                  <img src="./assets/Productos/Mobiliarios/Calcoman-as-de-vinilo-para-pared-para-fiesta-de-cumplea-os-pegatinas-de-tablero-de-plexigl.jpg_.png" alt="">
                </figure>
                </div> <div class="info" >
               <h2 class="nombreProducto">Calcomania de vinilo</h2>
               <p class="precio">$11,000.00</p>
              </div>
              <p class="descripcionProducto">Calcomanias de vinilo para fiesta de cumpleaños</p>
              <button class="addToCart">Agregar al Carrito</button>
            </div>
          </div>
      
         
        </section>

        


      </main>

      <footer>

        <div class="footerContainer">

          <div class="newsletter">
            <h1>Newsletter</h1>

            <form action="">
              <label for="newsLetter"
                >Suscribete y recibe nuestros articulos y consejos de decoracion
                para eventos</label
              >
              <div class="datos">
                <input
                  type="email"
                  id="newsLetter"
                  placeholder="Ingresa tu email"
                />
                <button>Enviar</button>
              </div>
            </form>

            <div class="logo">
              <a href="index.html"
                ><figure>
                  <img src="assets/HeysiLogo.svg" alt="logo-heysi" /></figure
              ></a>
            </div>
          </div>

          <div class="horario">
            <h1>Nuestro horario</h1>
            <div class="tiempo">
              <p><strong> Lunes </strong></p>
              <p><time>8:00</time> am - <time>5:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Martes </strong></p>
              <p><time>8:00</time> am - <time>5:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Miercoles </strong></p>
              <p><time>8:00</time> am - <time>5:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Jueves </strong></p>
              <p><time>8:00</time> am - <time>5:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Viernes </strong></p>
              <p><time>8:00</time> am - <time>5:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Sabado </strong></p>
              <p><time>8:00</time> am - <time>12:00</time> pm</p>
            </div>
            <div class="tiempo">
              <p><strong> Domingo </strong></p>
              <p><time>Cerrado</time></p>
            </div>
          </div>

          <div class="menuContainer">
            <h1>Menu</h1>

            <nav class="footerMenu">
              <menu>
                <li><a href="/public/nosotros.html">Nosotros</a></li>
                <li><a href="public/tienda.html">Tienda</a></li>
                <li><a href="public/blog.html">Blog</a></li>
                <li><a href="public/contacto.html">Contacto</a></li>
              </menu>
            </nav>
          </div>


          <div class="faq">

            <h1>FAQ</h1>

            <div class="faqlinks">
              <p><a href="#">Politicas de privacidad</a></p>
              <p><a href="#">Terminos y Condiciones</a></p>
              <p><a href="#">Politica de envios </a></p>
            </div>

          </div>

        </div>

      </footer>




`;
