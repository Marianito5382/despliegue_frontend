'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { FaYoutube } from "react-icons/fa";
import BotonRegreso from "@/app/components/Button";

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Habilidades - Logros - Educación
        </h1>

        <motion.section //texto 1 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-red-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <Image
                  src="/experiencia.jpeg"
                  alt="Descripción de la imagen 1"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <p className="text-lg leading-relaxed text-white text-justify">
                Para empezar quiero hablar de mis Habilidades. En esta parte quiero resaltar mis concomientos sobre la programacacion, actualmente me gusta más la parte de paginas web, en el lado de Front-end. Ya que es algo que difrutov er mas en un proyecto, además que 
                entre ellas no solo conozco los lenguajes y las extenciones, a lo largo de mi carrera he visto mas lenguajes y tambien la implementación de base de datos, tambien la virtualizacion y conocimientos basicos sobre redes. Tambien esto no solo se basa en lo cademico, tambien 
                en las habilidades blandas, creo que mi forma de expresarme, escuchar y trabajar en equipo, es algo que he aprendido más en este tiempo y tambien practicado.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section // texto numero 2 logros
          className="mb-16"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} // Define la animación al aparecer
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <p className="text-lg leading-relaxed text-white text-justify">
                  Como segundo bloque, he tenido bastantes experiencias las cuales han sido bastantes buenas y otras no tanto. Pero quiero resaltar un  logro reciente el cual fue ganar el Hack-fest de crear un pagina web en la versión de grupo.
                  También que ha sido algo muy importante y tambien que disfrute mucho de esa experiencia. Entre otros logros tengo reconocimientos de talleres, cursos en linea y haber participado en u bootcamp de una empresa aqui en 
                  Quetzaltenango.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-red-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <Image
                  src="/win2023.jpeg"
                  alt="triunfando"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section // texto numero 3 amigos
          className="mb-16"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-red-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <Image
                  src="/amigos.jpeg"
                  alt="experiencias-bonitas"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <p className="text-lg leading-relaxed text-white text-justify">
                  Tambien quiero resaltar en lo personal, ya que en esta carrera universitaria me he encontrado con personas extraordinarias y además que se han convertido en una parte importante de mi.
                  Tambíen que me gusta mucho interactuar con mis compañeros y mas con mis amigos. Quiero mencionar que me gusta participar en torneos de fultbol con mi equipo, que en verdad fue creado de 
                  una busqueda de quienes jugaban y se convirtieron en tambien buenos colegas. Y pues actualmente quiero seguir aprendiendo de mi carrera y seguir expandiendola mas para ver lo extenso que puede llegar a ser. 
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section // texto4
          className="mb-16"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} // Define la animación al aparecer
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h1 className="text-3xl md:text-6xl lg:text-5xl mb-8 text-center text-white font-bold drop-shadow-lg">
             Educación</h1>
                <p className="text-lg leading-relaxed text-white text-justify">
                  Mi bachillerato lo estudie en el Colegio el Valle, en quetzaltenango, donde estudie bachillerato en computación. Luego segui mis estudios en la universidad Rafael Landivar, donde actualmente estudio mi ultimo año de Ingeniería en Informatica y Sistemas.
                  Donde he recibido talleres importantes, donde se han aplicado bastante en la mi carrera y además que me he informado por medio de redes sociales, youtube e internet, he tenido que aprender y 
                  fortalecer estos concomientos, ya que en verdad los cursos que he llevado han sido muy importantes en mi formación.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-red-900 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <Image
                  src="/universidad.png"
                  alt="mis-estudios"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>
        <BotonRegreso />
      </div>
    </main>
  );
}
