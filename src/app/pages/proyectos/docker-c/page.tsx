
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Arquitectura de Microservicios: Implementación y Simulación"</h1>
        
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/virtu1.jpeg"
                alt="conexion"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed text-white text-justify">
                En este proyecto del curos llamado Virtualización, como poryecto final de curso. Tuvimos que virtualziar 3 maquinas en VirtualBosx con Ubuntu_linux, y el trabajo era que en la primera maquina virutal se tenia que tener las aplicaciones
                de inserción de datos, las cuales eran dos para cada case de datos y no hubiera problema. Pero en este caso usamos el uso de 3 aplicacione de inserción ya que teniamos que hacer una acción futura la cual necesitabamos del uso de una tercera.
                Luego en la segunda maquina virtual que tenian la base de datos, en esa se tuvo la opción de guardar las bases de datos, las cuales creamos un docker-compose como archivo especial que permite la ejecución de contenedores simultaneos, con su 
                definición de que o sobre que creamos los contenedores. Y en la ultima maquina se tuvo un pograma d epytohn que creaba una tabla y graficaba los datos insertados en las bases de datos.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h4 className="text-lg leading-relaxed text-purple-800 ">Mi rol:</h4>
              <p className="text-lg leading-relaxed text-white text-justify">
                El papel que desempeñe en el proyecto, fue el de crear y gestionar las bases de datos, creadno archivos de respaldo para cada base, que eran los .init 
                que estos sirven para guardar los requerimientos y creación de las tablas de las bases, se uso esto para optimizar le tiempo de estar ingresando a la base de datos y 
                hacerlo manualmente. y también el encargasdo de ver que los servicios no se cayeran. Y tambien ayude a la creación de los programas o aplicacione de inserción de datos.
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/virtu2.jpeg"
                alt="las maquinar virtuales"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="https://github.com/Marianito5382/Proyecto-final-virtualizacion" className="inline-flex items-center text-lg text-purple-600 hover:underline">
            <FaGithub className="mr-2" /> Repositorio del Proyecto
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
