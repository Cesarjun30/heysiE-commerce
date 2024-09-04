//import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  
  // slider
  
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
  
  setInterval(()=>{
    toRight()
   },5000);

   // Final cogio slider 
   
   

});

document.querySelector("#app").innerHTML = `
  <main>

  
      <header>

        <div class="bar">
          <p>
            Aprovecha las ventas de temporada hasta un <span>30%</span> de
            descuento <a href="#"> Compra Ahora</a>
          </p>
          <p>Servicio al Cliente <a href="#"> +1-800-000-4499</a></p>
        </div>

        <div class="container">

          <div class="logo">
            <a href="index.html"
              ><figure>
                <img src="assets/HeysiLogo.svg" alt="logo-heysi" /></figure
            ></a>
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

      </header>

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

          <div class="menu">
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


  </main>
`;
