
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-stone-800 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide font-sans">
 Active Directory: red de laboratorio
</h1>
        
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/act1.jpeg"
                alt="Descripción de la imagen 1"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed text-white text-justify">
               El proyecto se baso en virtualziar el windows server el cual nos bridna esta herramienta llamada Active-Directory, el cual nos sirvio para cumplir con los objetivos del proyecto el cual fue realizar o simular
               un ambiente de laboratoriopara dar servicios a los usuarios como permisos de lo que pueden realizar en a red o tambien de el bloqueo de ciertos sitios web no autorizasdos para los usuarios. Tambien con este servicio esta
               diseñado para la versión de windows-pro para tener una mejor experiencia, pero los opciones no son imposibles. Ya que por una conexión ssh se puede conectar a los usuarios qu cuentas con un windows-home y esto funciona sobre 
               windows 10, pero se puede adaptar al 11.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h4 className="text-lg leading-relaxed text-amber-600 ">Mi rol:</h4>
              <p className="text-lg leading-relaxed text-white text-justify">
                El rol que tuve fue de levantar o instalar la maquina virtual con el sistema de windows server 2019. También la instalación de este servicio dentro de la maquina.
                Además de realizar el grupo para los usuarios como darles persmisos especiales o de administrador segun sea el caso. Tambien que asignar el dns para que los otros equipos
                con windows10 instalado pudieran ser participes de esta conexion al grupo. Y por ultimo realize la conexión de escritrio remoto por la ip de una maquina cliente.
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/act2.jpeg"
                alt="Descripción de la imagen 2"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="" className="inline-flex items-center text-lg text-amber-700 hover:underline">
            <FaGithub className="mr-2" /> No Hay Repositorio del Proyecto
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="/pages/proyectos" className="inline-flex items-center text-lg text-amber-700 hover:underline">
            &lt; Volver a Proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
