import React, { useState, useEffect } from "react";
import back from "./img/cop.jpg";
import media from "./img/media.png";
import front from "./img/front.png";

const images = [
  front,
  "https://todowine.com/wp-content/uploads/2022/03/bodealba-almacen.png",
  "https://png.pngtree.com/png-clipart/20240317/original/pngtree-construction-worker-builder-man-png-image_14611987.png",
  "https://irp.cdn-website.com/9873f9dd/MOBILE/png/896.png",
  "https://irp.cdn-website.com/c78ea348/MOBILE/png/975.png",
  "https://cdn.pixabay.com/photo/2018/06/25/23/06/winery-3498194_1280.png",
];

export default function LoginView() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambiar la imagen cada 4 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    // Validaciones de los campos
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Aquí podrías hacer una petición de login si las validaciones pasan
    console.log("Formulario enviado correctamente");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-black p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg">BODEGAS SIGEBO</h1>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline">
            Inicio
          </a>
          <a href="/login" className="hover:underline">
            Iniciar sesión
          </a>

          {/* Definir las rutas dentro del componente */}

          <a href="/#contact-link" className="hover:underline">
            Contacto
          </a>
        </nav>

        {/* Botón de menú en móviles */}
      </header>

      <div className="flex w-4/7 max-w-4xl gap-8">
        <div className="flex flex-col items-center w-2/5">
          <div className="bg-white rounded-xl shadow-xl p-10 w-full">
            <img
              src={media}
              alt="Logo"
              className="md:h-20 h-8 object-contain mx-auto mb-10"
            />

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-sm p-2 mb-4 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-sm p-2 mb-4 focus:outline-none"
              />

              {/*   
              <button
                type="submit"
                className="w-full bg-[#FF7700] text-white py-2 rounded-md mb-4 hover:bg-[#a77d4e]"
              >
                Entrar
              </button>
*/}

              <a
                href="/wineries"
                className="w-full bg-[#FF7700] text-white py-2 rounded-md mb-4 block text-center hover:bg-[#a77d4e]"
              >
                Entrar
              </a>
            </form>

            <div className="text-center mb-6">
              <a
                href="/lost-password"
                className="text-sm text-gray-600 no-underline transition duration-300 hover:underline hover:text-black hover:brightness-125"
              >
                ¿Has olvidado la contraseña?
              </a>
            </div>
          </div>

          <div className="bg-white rounded-md p-4 mt-4 w-full text-center shadow-sm text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-[#FF7700] hover:underline">
              Regístrate
            </a>
          </div>
        </div>

        <div className="w-3/5 flex items-center justify-center relative">
          <div className="relative w-full h-full">
            <img
              src={images[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className="absolute top-[10px] left-[250px] w-108 h-108 object-contain mix-blend-normal bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
