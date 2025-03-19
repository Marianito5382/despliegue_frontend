
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
                src="/Dedos-2-AI.jpeg"
                alt="Descripción de la imagen 1"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg leading-relaxed text-white text-justify">
              El proyecto ha sido desarrollado utilizando librerías de Python como Matplotlib, OpenCV (cv2), MediaPipe y NumPy. A través del análisis de video, permite reconocer las manos de los individuos. 
              Una vez proyectadas y mostradas en pantalla, es posible identificar los diferentes dedos y contar la cantidad de dedos levantados. Para ello, se emplea el cálculo del centroide de la palma y la longitud de 
              los dedos, además del ángulo que permite diferenciar un dedo en específico. Esta información se compara con los demás dedos para identificar correctamente cuál es y mostrarlo en pantalla. Asimismo, al reconocer 
              ciertos dedos, se les asigna un número, lo que permite identificar gestos específicos y representarlos visualmente en la pantalla.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h3 className="text-lg leading-relaxed text-amber-600 ">Implementación:</h3>
              <p className="text-lg leading-relaxed text-white text-justify">
              En este proyecto, se trabajó con un Jupyter Notebook proporcionado por Anaconda, lo que facilitó la aplicación de funciones y el uso de las librerías de Python. Entrenar el modelo para el reconocimiento de gestos representó 
              un desafío, pero se logró que, a través de ciertas señales realizadas con las manos o los dedos, el sistema pudiera identificarlas y contar la cantidad de dedos levantados.
                <br/>
              Aunque se contempla continuar con este desarrollo para lograr el reconocimiento de una conversación en lenguaje de señas, esta demostración representa solo una muestra del verdadero alcance que puede tener la inteligencia 
              artificial en este campo. Para su implementación, se utiliza Visual Studio Code como IDE principal, lo que permite un desarrollo más eficiente y optimiza el uso del espacio.
                
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Dedos-IA.jpeg"
                alt="Descripción de la imagen 2"
                width={500}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:focus-visible:"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="https://github.com/Marianito5382/Reconocimiento_dedosygestos" className="inline-flex items-center text-lg text-amber-700 hover:underline">
            <FaGithub className="mr-2" />Repositorio del Proyecto
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
