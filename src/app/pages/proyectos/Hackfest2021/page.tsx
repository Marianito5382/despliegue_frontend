
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide font-sans">
 Sitio Web Agenda 2030
</h1>

        
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/onu1.jpeg"
                alt="Descripción de la imagen 1"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed text-white text-justify">
                Este proyecto fue tambien para la primera edición del Hack-fest el cual el tema fue de la agenda 2030 para el desarrollo sostenible. Donde en este proyecto fue hecho en css y html puro, con algunas
                importaciones de librerias para poner animaciones. Además de que al ser la primera relación con paginas web entonces esta fue una prueba la cual se experimento con estas tecnologias y se supo entender como es que actuaba.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h4 className="text-lg leading-relaxed text-purple-800 ">Mi rol:</h4>
              <p className="text-lg leading-relaxed text-white text-justify">
               Mi rol fue el encargado de poner esas animaciones para las paginas en algunas cartas de imagenes e imagenes normales. Tambien en la realización de algunas paginas, como el texto de ella, la informacion y en algunas links.
               Tambien los componentes del footer para la vista en la page y una landing page para el inicio dinamico con la pagina.
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/onu2.jpeg"
                alt="Descripción de la imagen 2"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="https://github.com/agentepeke/Paz-Justicia-Instituciones" className="inline-flex items-center text-lg text-purple-600 hover:underline">
            <FaGithub className="mr-2" />Repositorio del Proyecto
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="/pages/proyectos" className="inline-flex items-center text-lg text-purple-600 hover:underline">
            &lt; Volver a Proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
