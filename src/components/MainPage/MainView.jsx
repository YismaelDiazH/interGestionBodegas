import React from "react";

import blur from "./img/blur.png";
import camera from "./img/camera.png";
import clean from "./img/clean.png";
import drop from "./img/drop.png";
export default function MainView() {
  return (
    <div className="w-full font-sans">
      {/* Header */}
      <header className="bg-orange-500 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg">BODEGAS SIGEBO</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <a href="#" className="hover:underline">
            Iniciar Sesión
          </a>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://containerliving.mx/wp-content/uploads/bb-plugin/cache/Minibodega-amarilla-scaled-landscape.jpg"
          alt="Bodega"
          className="w-full h-124 object-cover"
        />
        <div className="absolute top-15 right-70 w-full h-full flex items-center justify-center text-white text-6xl font-bold">
          Renta de Bodegas en Cuernavaca
        </div>
      </section>
      {/* Servicios */}
      <section className="p-8 grid grid-cols-2 gap-8 items-center">
        {/* Contenedor de textos */}
        <div>
          <h2 className="text-orange-500 font-bold text-3xl relative ml-40 mt-6 mb-4 after:block after:h-[1.5px] after:w-1/6   after:absolute after:left-0 after:mt-1">
            Servicios
          </h2>
          <p className="text-gray-700 my-2 text-justify">
            Almacena tus bienes temporalmente, en un lugar seguro y
          </p>
          <p className="text-gray-700 my-2 text-justify mb-15">
            accesible con las mejores tarifas del mercado.
          </p>
          <h2 className="text-orange-500 font-bold text-3xl relative ml-23 mt-6 mb-4 after:block after:h-[1.5px] after:w-1/3  after:absolute after:left-0 after:mt-1">
            ¿Qué puedo guardar?
          </h2>
          <p className="text-gray-600">
            Todo lo que necesites temporalmente, con la
          </p>
          <p className="text-gray-600">
            tranquilidad de que tus pertenencias están seguras.
          </p>
        </div>

        {/* Contenedor de imágenes con efecto zoom-in */}
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://jit.com.co/wp-content/uploads/2023/08/almacenamiento-de-mercancias-en-bodega.jpg"
              alt="Servicios"
              className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg"></div>
        </div>
      </section>
      <img src={blur} alt="Bodega" className="w-full h-auto object-cover  " />
      {/* Características */}
      <section className="p-8 grid grid-cols-3 gap-4">
        <div className="text-center">
          <img
            src={camera}
            alt="Feature 1"
            className="w-40 h-35 mx-auto mb-2"
          />
          <p>
            La seguridad en una bodega es un aspecto clave para garantizar la
            integridad de los bienes almacenados. Una bodega en venta debe
            contar con sistemas modernos de vigilancia, tales como cámaras de
            circuito cerrado, sensores de movimiento y control de acceso
            restringido. Estos elementos no solo disuaden a posibles intrusos,
            sino que también permiten un monitoreo en tiempo real de las
            instalaciones.
          </p>
        </div>
        <div className="text-center">
          <img src={drop} alt="Feature 2" className="w-40 h-35 mx-auto mb-2" />
          <p>
            Para garantizar condiciones óptimas, es recomendable que la bodega
            cuente con sistemas de ventilación adecuados. La circulación de aire
            evita la acumulación de humedad y ayuda a mantener un ambiente
            estable dentro del almacén. Además, la instalación de
            deshumidificadores puede ser una excelente solución en zonas donde
            la humedad relativa es alta.
          </p>
        </div>
        <div className="text-center">
          <img src={clean} alt="Feature 3" className="w-40 h-35 mx-auto mb-2" />
          <p>
            Nuestro plan de limpieza estructurado incluye la eliminación regular
            de desechos y la desinfección de áreas de almacenamiento y tránsito.
            Barrer, aspirar y trapear los pisos evita la acumulación de polvo y
            partículas que puedan afectar la calidad de los productos.
          </p>
        </div>
      </section>
      {/* Testimonios */}
      <section className="p-13 text-center bg-gray-100">
        <div className="text-center">
          <p className="text-3xl font-bold mb-6">
            ¡Conoce las opiniones de nuestros clientes!
          </p>

          <div className="w-90 mx-auto">
            <p>
              Las bodegas están en muy buenas condiciones, toda el área es
              bastante amplia y lo más importante, son seguras. La atención y
              organización de primera.
            </p>
            <strong>Eduardo</strong>
          </div>
        </div>
      </section>
      {/* Galería */}
      <section className="flex justify-center gap-4 p-8">
        <img
          src="https://blog.akzent.mx/hubfs/claves-en-la-digitalizacion-de-bodegas-industriales-akzent-blog-espan__ol_720.jpg"
          alt="Bodega 1"
          className="w-50 h-50 object-cover transition-transform duration-600 ease-in-out hover:scale-110"
        />
        <img
          src="https://img10.naventcdn.com/avisos/18/01/42/83/36/34/360x266/1442368434.jpg?isFirstImage=true"
          alt="Bodega 2"
          className="w-50 h-50 object-cover transition-transform duration-600 ease-in-out hover:scale-110"
        />
        <img
          src="https://eldiarioinmobiliario.cl/wp-content/uploads/2024/03/CENTRO-DE-BODEGAS_EDI.png"
          alt="Bodega 3"
          className="w-50 h-50 object-cover transition-transform duration-600 ease-in-out hover:scale-110"
        />
        <img
          src="https://u-storage.com.mx/blog/wp-content/uploads/2018/09/Sucursal-DelValle4-800x433.jpg"
          alt="Bodega 4"
          className="w-50 h-50 object-cover transition-transform duration-600 ease-in-out hover:scale-110"
        />
        <img
          src="https://bodegachica.cl/wp-content/uploads/2021/10/funcionesbodega.jpg"
          alt="Bodega 5"
          className="w-50 h-50 object-cover transition-transform duration-600 ease-in-out hover:scale-110"
        />
      </section>

      {/* Ubicación */}
      <section className="text-center p-8">
        <h2 className="text-orange-500 font-bold text-4xl mb-15">
          ¡Ven a conocernos!
        </h2>

        <div className="w-full max-w-4xl mx-auto mt-4 mb-20">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60240.290885546634!2d-99.2572227!3d18.9186118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf99525bb5bb%3A0xb34d4fa19655cd52!2sCuernavaca%2C%20Mor.!5e0!3m2!1ses-419!2smx!4v1710192834860!5m2!1ses-419!2smx"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="bg-gray-500   text-center py-6">
        {/* Imagen de redes sociales */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-216-721958.png?f=webp"
            alt="Redes Sociales"
            className="w-12 h-auto rounded-lg  "
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
            alt="Redes Sociales"
            className="w-12 h-auto rounded-lg  "
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            alt="Redes Sociales"
            className="w-12 h-auto rounded-lg  "
          />
        </div>

        <p className="text-lg font-semibold">
          © 2025 Bodegas SIGEBO - Todos los derechos reservados.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-orange-500 transition"></a>
        </div>
      </footer>
    </div>
  );
}
