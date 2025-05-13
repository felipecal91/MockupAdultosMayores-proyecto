import React, { useState, useEffect } from "react";
import {
  Bell,
  Menu,
  Search,
  Home,
  Smartphone,
  FileText,
  Video,
  Calendar,
  HelpCircle,
  LogIn,
  UserPlus,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

// Componente principal de la aplicación
export default function PlataformaEducativa() {
  const [currentPage, setCurrentPage] = useState("inicio");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para iniciar sesión
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername("María González");
  };

  // Función para registrarse
  const handleRegister = () => {
    setShowRegistrationMessage(true);
    setTimeout(() => {
      setShowRegistrationMessage(false);
      setIsLoggedIn(true);
      setUsername("Nuevo Usuario");
    }, 3000);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  // Función para navegar entre páginas
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Barra de navegación superior */}
      <header className="bg-amber-100 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mr-4 p-2 rounded-full hover:bg-amber-200 md:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold">
              PLATAFORMA EDUCATIVA ADULTOS MAYORES
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <span className="hidden md:inline">{username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-amber-700 text-white py-1 px-3 rounded-md text-sm"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm"
                >
                  Ingresar
                </button>
                <button
                  onClick={handleRegister}
                  className="bg-gray-700 text-white py-1 px-3 rounded-md text-sm"
                >
                  Registro
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mensaje de registro exitoso */}
      {showRegistrationMessage && (
        <div className="fixed top-16 right-4 bg-green-500 text-white p-3 rounded-md shadow-lg z-50">
          Usuario registrado exitosamente
        </div>
      )}

      {/* Menú lateral en dispositivos móviles */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="bg-white w-64 h-full p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold">Menú</h2>
              <button onClick={() => setMenuOpen(false)} className="p-1">
                ✕
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigateTo("inicio")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <Home size={20} /> Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("celular")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <Smartphone size={20} /> Aprende a usar tu celular
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("tramites")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <FileText size={20} /> Accede a trámites en línea
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("comunicacion")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <Video size={20} /> Comunícate con tu familia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("calendario")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <Calendar size={20} /> Calendario de actividades
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("faq")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-amber-100 rounded"
                  >
                    <HelpCircle size={20} /> Preguntas frecuentes
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex flex-1">
        {/* Menú lateral para pantallas medianas y grandes */}
        <aside className="hidden md:block w-64 bg-white shadow-md">
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigateTo("inicio")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "inicio"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <Home size={20} /> Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("celular")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "celular"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <Smartphone size={20} /> Aprende a usar tu celular
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("tramites")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "tramites"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <FileText size={20} /> Accede a trámites en línea
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("comunicacion")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "comunicacion"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <Video size={20} /> Comunícate con tu familia
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("calendario")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "calendario"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <Calendar size={20} /> Calendario de actividades
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("faq")}
                  className={`flex items-center gap-2 w-full p-2 rounded ${
                    currentPage === "faq"
                      ? "bg-amber-200"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <HelpCircle size={20} /> Preguntas frecuentes
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Área de contenido */}
        <main className="flex-1 p-4">
          {currentPage === "inicio" && <PaginaInicio onNavigate={navigateTo} />}
          {currentPage === "celular" && <CursoAprenderCelular />}
          {currentPage === "tramites" && <CursoTramites />}
          {currentPage === "comunicacion" && <CursoComunicacion />}
          {currentPage === "calendario" && <CalendarioActividades />}
          {currentPage === "faq" && <PreguntasFrecuentes />}
        </main>
      </div>

      {/* Pie de página */}
      <footer className="bg-amber-100 p-4 text-center text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <p>PLATAFORMA EDUCATIVA ADULTOS MAYORES © 2025</p>
      </footer>
    </div>
  );
}

// Componente de la página de inicio
function PaginaInicio({ onNavigate }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cursos disponibles</h2>
        <p className="text-gray-600 mb-6">Click sobre el curso para ingresar</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Curso 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-40 rounded-md mb-4 flex items-center justify-center">
              <Smartphone size={60} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Aprende a usar tu celular
            </h3>
            <p className="text-gray-600 mb-4">
              Aprende a utilizar tu teléfono celular de manera sencilla y
              segura. Este curso te guiará paso a paso en funciones básicas.
            </p>
            <button
              onClick={() => onNavigate("celular")}
              className="text-blue-500 font-medium flex items-center"
            >
              Ver curso <ChevronRight size={16} />
            </button>
          </div>

          {/* Curso 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-40 rounded-md mb-4 flex items-center justify-center">
              <FileText size={60} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Accede a trámites en línea
            </h3>
            <p className="text-gray-600 mb-4">
              Aprende a realizar trámites en línea de manera segura, cómo
              solicitar documentos y utilizar los portales públicos desde tu
              hogar.
            </p>
            <button
              onClick={() => onNavigate("tramites")}
              className="text-blue-500 font-medium flex items-center"
            >
              Ver curso <ChevronRight size={16} />
            </button>
          </div>

          {/* Curso 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-40 rounded-md mb-4 flex items-center justify-center">
              <Video size={60} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Comunícate con tu familia
            </h3>
            <p className="text-gray-600 mb-4">
              Aprende a hacer, enviar mensajes y hacer videollamadas para
              mantenerte en contacto con tu familia.
            </p>
            <button
              onClick={() => onNavigate("comunicacion")}
              className="text-blue-500 font-medium flex items-center"
            >
              Ver curso <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Calendario */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2 text-amber-600" />
            <h3 className="text-lg font-bold">Calendario de actividades</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Seminarios y talleres programados para los próximos meses. Aprende a
            usar el calendario.
          </p>
          <button
            onClick={() => onNavigate("calendario")}
            className="text-blue-500 font-medium flex items-center"
          >
            Ver calendario <ChevronRight size={16} />
          </button>
        </div>

        {/* Preguntas frecuentes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <HelpCircle className="mr-2 text-amber-600" />
            <h3 className="text-lg font-bold">Preguntas frecuentes</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Resuelve las dudas más comunes sobre el uso de tecnología.
          </p>
          <button
            onClick={() => onNavigate("faq")}
            className="text-blue-500 font-medium flex items-center"
          >
            Ver preguntas <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente de curso: Aprende a usar tu celular
function CursoAprenderCelular() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="mr-3 p-2 hover:bg-amber-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold">Aprende a usar tu celular</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3">¿Qué es un celular?</h3>
        <p className="mb-4">
          Es un teléfono moderno que no solo permite hacer llamadas, también
          sirve para enviar mensajes, ver fotos, escuchar música, navegar por
          internet, y mucho más.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔓 Cómo encender y apagar el celular
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-2">
                <strong>Encender:</strong> Mantén presionado el botón lateral
                (generalmente ubicado al costado derecho) hasta que aparezca el
                logo.
              </p>
              <p>
                <strong>Apagar:</strong> Mantén presionado el mismo botón y
                selecciona "Apagar".
              </p>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen1.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🏠 Pantalla principal (Inicio)
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p>
                Al encender el teléfono verás la pantalla de inicio, donde se
                encuentran los íconos de tus aplicaciones.
              </p>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen2.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            📞 Hacer una llamada
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el ícono del <strong>teléfono</strong>. (Generalmente es
                  un botón verde con icono de teléfono)
                </li>
                <li>
                  Marca el número deseado o toca el nombre de un contacto.
                </li>
                <li>Presiona el botón verde para llamar.</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen3.jpg"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            💬 Enviar un mensaje de texto (SMS)
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el ícono de la aplicación llamada{" "}
                  <strong>Mensajes</strong> (parece un globo de diálogo).
                </li>
                <li>
                  Presiona el botón de <strong>nuevo mensaje</strong> (+ o ícono
                  de lápiz).
                </li>
                <li>Escribe el número o elige un contacto.</li>
                <li>Escribe tu mensaje usando el teclado.</li>
                <li>
                  Presiona el botón de <strong>enviar</strong> (generalmente una
                  flecha o avión de papel).
                </li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen4.jpg"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔍 Usar Internet (navegar)
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el ícono de <strong>Google Chrome</strong> o{" "}
                  <strong>Internet</strong>.
                </li>
                <li>
                  Escribe lo que quieres buscar (ej: "recetas de cocina").
                </li>
                <li>Presiona la lupa o "Buscar".</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen5.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            📷 Tomar fotos
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el ícono de <strong>Cámara</strong>.
                </li>
                <li>Apunta hacia lo que quieres fotografiar.</li>
                <li>Presiona el botón circular para tomar la foto.</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen6.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            📂 Ver tus fotos
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el ícono de <strong>Galería</strong> o{" "}
                  <strong>Fotos</strong>.
                </li>
                <li>Desliza hacia arriba o abajo para ver tus imágenes.</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen7.jpg"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔋 Cargar el celular
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Conecta el cable en el puerto del celular (generalmente
                  abajo).
                </li>
                <li>Enchúfalo a la corriente.</li>
                <li>
                  Espera hasta que la batería esté llena (ícono de batería
                  lleno).
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen8.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔊 Subir o bajar volumen
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-2">Usa los botones laterales del celular:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>El de arriba sube el volumen.</li>
                <li>El de abajo lo baja.</li>
              </ul>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen9.jpg"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de curso: Accede a trámites en línea
function CursoTramites() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="mr-3 p-2 hover:bg-amber-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold">Accede a Trámites en Línea</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3">
          ✅ ¿Qué son los trámites en línea?
        </h3>
        <p className="mb-4">
          Son gestiones que antes requerían ir a una oficina, pero que ahora
          puedes hacer desde el celular o computador con conexión a internet.
          Ejemplos: pedir un certificado, revisar tu previsión, o agendar una
          hora. Para todos los tramites mencionados anteriormente es necesario
          poseer la clave única.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔌 Conéctate a Internet
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Asegúrate de estar conectado al <strong>WiFi</strong> o{" "}
              <strong>datos móviles</strong>.
            </li>
            <li>Verifica que tu celular tenga señal.</li>
          </ul>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🌐 Abre el navegador
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Toca el ícono de <strong>Chrome</strong> o{" "}
              <strong>Internet</strong>.
            </li>
            <li>Se abrirá una barra para escribir.</li>
          </ul>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            ✍️ Escribe la página que necesitas
          </h4>
          <p className="mb-3">Aquí algunos ejemplos de páginas oficiales:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Fonasa</strong> → www.fonasa.cl
            </li>
            <li>
              <strong>Registro Civil</strong> → www.registrocivil.cl
            </li>
            <li>
              <strong>ChileAtiende</strong> → www.chileatiende.gob.cl
            </li>
          </ul>
          <p className="mt-3">
            Luego, presiona <strong>Buscar</strong> o la <strong>lupa</strong>{" "}
            🔍.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            Guía solicitud de clave única
          </h4>
          <p className="mb-3">
            Para solicitar tu ClaveÚnica debes tener 14 años, y contar con tu
            cédula de identidad vigente y en buen estado.
          </p>
          <p className="mb-3">
            Ingresa a la siguiente página desde tu celular o navegador
            www.codigo.srcei.cl y pulsa sobre el botón "Iniciar Tramite":
          </p>
          <div className="md:w-1/2 rounded-md flex items-center justify-center">
            <img
              src="/Imagen10.png"
              alt="Botón de encendido"
              className="max-h-48 rounded-md"
            />
          </div>
          <p>
            Rellena los datos solicitados y pulsa sobre el botón "Ingresar
            Solicitud". Posterior a esto agendaras una hora para la obtención de
            tu clave única y deberás esperar a recibir una llamada o un email
            con los datos de tu cuenta.
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen11.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </p>
          <p className="mt-3">
            Cabe destacar que si quieres obtener tu Clave única de manera mas
            rápida puedes hacerlo directamente en la oficina del registro civil
            de tu ciudad.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            Descargar tu certificado de afiliación: Fonasa
          </h4>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              Accede a nuevo.fonasa.gob.cl desde un celular o navegador web.
            </li>
            <li>
              Pincha sobre el botón "Certificado de afiliación":
              <div className="md:w-1/2 rounded-md flex items-center justify-center">
                <img
                  src="/Imagen12.png"
                  alt="Botón de encendido"
                  className="max-h-48 rounded-md"
                />
              </div>
            </li>
            <li>
              Al pinchar sobre el botón, te redigira a una nueva página en la
              cual deberas ingresar con tu clave única.
              <div className="md:w-1/2 rounded-md flex items-center justify-center">
                <img
                  src="/Imagen13.png"
                  alt="Botón de encendido"
                  className="max-h-48 rounded-md"
                />
              </div>
            </li>
            <li>
              Accede con tu usuario y contraseña de clave única y serás
              redirigido a tu certificado directamente.
            </li>
            <li>
              Ya tendrás acceso a la lectura online de tu certificado o si lo
              prefieres también puedes descargarlo en formato PDF pulsando en el
              botón "Descargar certificado":
              <div className="md:w-1/2 rounded-md flex items-center justify-center">
                <img
                  src="/Imagen14.png"
                  alt="Botón de encendido"
                  className="max-h-48 rounded-md"
                />
              </div>
            </li>
          </ol>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔒 Seguridad
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Asegúrate de que la página comience con <strong>https://</strong>.
            </li>
            <li>
              No compartas tu <strong>clave única</strong> con desconocidos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Componente de curso: Comunícate con tu familia
function CursoComunicacion() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="mr-3 p-2 hover:bg-amber-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold">Comunícate con tu Familia</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3">✅ ¿Qué es WhatsApp?</h3>
        <p>Es una aplicación del celular que permite:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Enviar mensajes.</li>
          <li>Hacer llamadas.</li>
          <li>Compartir fotos.</li>
          <li>Hacer videollamadas (ver y hablar al mismo tiempo)</li>
        </ul>
      </div>

      <div className="space-y-8">
        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🟢 Abrir WhatsApp
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ul className="list-disc list-inside">
                <li>Toca el ícono verde con un teléfono blanco.</li>
                <li>📲 Se abrirá la lista de contactos y mensajes.</li>
              </ul>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen15.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            💬 Enviar un mensaje
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Toca el <strong>nombre del familiar</strong> (hijo, nieto,
                  etc.).
                </li>
                <li>Escribe tu mensaje en la parte inferior.</li>
                <li>Toca el ícono de enviar (📤 o una flechita).</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen16.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            📞 Hacer una llamada
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>Abre el chat del familiar.</li>
                <li>
                  Toca el ícono del <strong>teléfono</strong> (arriba a la
                  derecha).
                </li>
                <li>📞 El celular comenzará a llamar.</li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen17.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🎥 Hacer una videollamada
          </h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2">
                <li>Abre el chat del familiar.</li>
                <li>
                  Toca el ícono de <strong>cámara de video</strong> (junto al
                  teléfono).
                </li>
                <li>
                  🎥 Podrás <strong>ver y hablar al mismo tiempo</strong>.
                </li>
              </ol>
            </div>
            <div className="md:w-1/2 rounded-md flex items-center justify-center">
              <img
                src="/Imagen18.png"
                alt="Botón de encendido"
                className="max-h-48 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🗨️ ¿Qué necesito para hacer videollamadas?
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Estar <strong>conectado a internet</strong> (WiFi o datos
              móviles).
            </li>
            <li>Tener WhatsApp instalado.</li>
            <li>Que la otra persona también tenga WhatsApp.</li>
          </ul>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold flex items-center mb-3">
            🔒 Consejos de seguridad
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Habla solo con personas que conoces</strong>.
            </li>
            <li>
              Si ves mensajes de números extraños, <strong>no respondas</strong>
              .
            </li>
            <li>
              <strong>
                No compartas claves, fotos privadas ni datos bancarios.
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Componente de Calendario de actividades
function CalendarioActividades() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="mr-3 p-2 hover:bg-amber-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold">Calendario de Actividades</h2>
      </div>

      <p className="mb-6">
        Aquí puedes ver los próximos seminarios y talleres programados.
        Inscríbete a las actividades que te interesen.
      </p>

      <div className="bg-amber-50 p-6 rounded-lg mb-6">
        <div className="h-96 bg-white rounded-lg shadow-sm p-4">
          <p className="text-center text-gray-500 my-20">
            Calendario comunitario cargando...
          </p>
        </div>
      </div>

      <div className="p-4 bg-amber-50 rounded-lg">
        <h4 className="text-lg font-bold mb-3">Próximos eventos</h4>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <h5 className="font-bold">Taller de WhatsApp avanzado</h5>
              <span className="text-amber-700">15 Mayo, 15:00</span>
            </div>
            <p className="text-gray-600 mt-2">
              Aprende a usar grupos, compartir ubicación y realizar
              videollamadas grupales.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <h5 className="font-bold">Uso seguro de banca en línea</h5>
              <span className="text-amber-700">22 Mayo, 10:00</span>
            </div>
            <p className="text-gray-600 mt-2">
              Cómo hacer transferencias y pagos de manera segura desde tu
              celular.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <h5 className="font-bold">Club de fotografía digital</h5>
              <span className="text-amber-700">1 Junio, 16:00</span>
            </div>
            <p className="text-gray-600 mt-2">
              Tomar fotos, editarlas y compartirlas con amigos y familiares.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de Preguntas Frecuentes
function PreguntasFrecuentes() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="mr-3 p-2 hover:bg-amber-100 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
      </div>

      <p className="mb-6">Resuelve las dudas más comunes sobre tecnología.</p>

      <div className="space-y-6">
        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold mb-2">
            ¿Necesito internet para usar WhatsApp?
          </h4>
          <p>
            Sí, WhatsApp funciona con internet. Puedes usarlo si estás conectado
            a WiFi o si tienes un plan de datos en tu celular. Sin internet, no
            podrás enviar ni recibir mensajes o hacer llamadas.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold mb-2">
            ¿Las llamadas y videollamadas por WhatsApp cuestan dinero?
          </h4>
          <p>
            No, las llamadas y videollamadas por WhatsApp no tienen un costo
            extra si estás conectado a WiFi. Si usas datos móviles, puede
            consumir parte de tu plan, pero no es como una llamada telefónica
            tradicional.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold mb-2">
            ¿Puedo usar WhatsApp para hablar con alguien en otro país?
          </h4>
          <p>
            Sí, puedes hablar con familiares o amigos en el extranjero sin pagar
            más. Solo necesitas que ambos tengan WhatsApp y estén conectados a
            internet.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold mb-2">
            ¿Qué necesito para hacer un trámite en línea?
          </h4>
          <p>Generalmente necesitas tener:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>RUT</strong> (tu número de identificación).
            </li>
            <li>
              <strong>Clave Única</strong> (una contraseña que te permite
              identificarte en varios sitios del gobierno).
            </li>
          </ul>
          <p className="mt-2">
            Si no la tienes, puedes solicitarla en www.claveunica.gob.cl o en
            una oficina de ChileAtiende.
          </p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="text-lg font-bold mb-2">
            ¿Es seguro hacer trámites por internet?
          </h4>
          <p>
            Sí, siempre que lo hagas desde los{" "}
            <strong>sitios web oficiales</strong> como:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>www.chileatiende.gob.cl</li>
            <li>www.registrocivil.cl</li>
            <li>www.fonasa.cl</li>
          </ul>
          <p className="mt-2">
            Evita ingresar tus datos en páginas que no conoces y no compartas tu
            Clave Única con nadie.
          </p>
        </div>
      </div>
    </div>
  );
}
