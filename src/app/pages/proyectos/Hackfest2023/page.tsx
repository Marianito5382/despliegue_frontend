
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide font-sans">
  Mate-bug
</h1>

        
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/matebug.jpeg"
                alt="Descripción de la imagen 1"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed text-white text-justify">
                Este proyecto se baso por una actividad llamada Hack-fest que se fue realizando en los ultimos dos años de la Universidad. Entonces nosotros como grupo tuvimos la idea
                de realizar el tema de la pagina sobre algo importante en la U, que fue el curso de Ecuaciones diferenciales. Donde en esta pagina tiene ejemplos, algunos temas y ejercicios
                con sus respectivas soluciones para que el estudiante pueda acceder y además de que reciba la informacion, pueda navegar en ella y asi estar al tanto de esta informacion con algunos temas.
                Además el lenguaje que se uso fue svelte, css, javacript, entre otros. Donde se combino el uso de las tecnologias para darle las animaciones y componentes necesarios para

              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg leading-relaxed text-purple-800 ">Mi rol:</h4>
              <p className="text-lg leading-relaxed text-white text-justify">
                Mi rol en este proeycto fue ayduar a crear las pages y enlazarlas entre ellas para la barra de navegación para que el usuario pueda navegar enntre el sitio. Tambien otra 
                contribución que tive fue de llenar de informacion las paginas de algunos temas y tambien los ejercicios y la solución correspondiente. Tambien el logo y editar algunas cuestiones
                de diseño.
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/matebug2.jpeg"
                alt="Descripción de la imagen 2"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="https://github.com/TatoBig/matebug" className="inline-flex items-center text-lg text-purple-800 hover:underline">
            <FaGithub className="mr-2" /> Repositorio del Proyecto
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="/pages/proyectos" className="inline-flex items-center text-lg text-purple-800 hover:underline">
            &lt; Volver a Proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
