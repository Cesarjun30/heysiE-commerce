



document.querySelector('#partyservice').innerHTML = `
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
            <a href="../index.html"
              ><figure>
                <img src="../assets/HeysiLogo.svg" alt="logo-heysi" /></figure
            ></a>
          </div>
          <nav class="mainMenu">
            <menu>
              <li><a href="../index.html">Inicio</a></li>
              <li><a href="tienda.html" >Tienda</a></li>
              <li><a href="partyservice.html" class="active" >Party-Service <i class="fa-solid fa-caret-down"></i
                ></a>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="contacto.html">Contacto</a></li>
            </menu>
          </nav>

          <div class="cart-login">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </header>
      <section> <p>SOY LA PAGINA PARTY SERVICE</p> </section>

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
                <li><a href="/pages/sobre-nosotros.html">Nosotros</a></li>
                <li><a href="pages/tienda.html">Tienda</a></li>
                <li><a href="pages/blog.html">Blog</a></li>
                <li><a href="pages/contacto.html">Contacto</a></li>
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
     
  <main>
`