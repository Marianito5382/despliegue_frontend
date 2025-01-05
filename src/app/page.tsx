'use client';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGamepad, FaUtensils, 
  FaDumbbell, FaMusic, FaCamera, FaArrowCircleUp, FaTelegram } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { motion } from 'framer-motion';
import TextAnimation from "./components/Texanimation";

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen flex flex-col items-center p-8">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            className="relative rounded-full overflow-hidden w-80 h-80 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/myself.jpeg"
              width={320}
              height={320}
              alt="foto de mi"
              className="object-cover"
            />
          </motion.div>
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mariano Gutiérrez
          </motion.h1>
          <TextAnimation />
        </div>
        <motion.div
          className="text-white text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg mb-4 text-justify">
            ¡Hola! Soy Mariano Gutiérrez, un estudiante de quinto año de la carrera de ingenieria en informatica y sistemas, me gusta los diseños y estilos de una pagina web.
             Ultimamente he aprendido bastantes tecnologias que son de suma importancia en el ambito laboral como docker, los servicios AWS, REACT, conocer el backend de un proyecto y las librerias de Tailwind.
             Creo que este año ha sido un reto, ya que pude observar y explotar mas habilidades que no sabia que podria lograr como la determinacion y la responsabilidad, creo que
             el trabajar bajo presión ha tenido un significado diferente en esta etapa, tambien me considero alguien que aprende con la marcha y me gusto el tratar de aprender 
             nuevas cosas y tecnologias.  Además de mi dedicación a la programación, también difruto de pasatiempos como ir al gimnasio y difsrutar de un cafe o una comida con amigos👌 .
          </p>
          <div className="mb-4">
            <p className="text-lg text-gray-400">Contacto por correo:</p>
            <p className="text-lg text-white">luismarianogudi@gmail.com</p>
          </div>
          <div>
            <p className="text-lg text-gray-400">Metodos Sociales:</p>
            <div className="flex justify-center space-x-4">
            <Link href="https://t.me/+50254792821" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTelegram size={35} />
              </Link>
              <Link href="https://github.com/Marianito5382" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={35} />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mis intereses:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-white">
              <FaGamepad size={36} className="mb-2" />
              <span>Videojuegos</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaUtensils size={36} className="mb-2" />
              <span>Comida</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaDumbbell size={36} className="mb-2" />
              <span>Gimnasio</span>
            </div>
            <div className="flex flex-col items-center text-white">
            <SiAdobephotoshop size={36} className="mb-2" />
              <span>Photoshop</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaMusic size={36} className="mb-2" />
              <span>Música</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <FaCamera size={36} className="mb-2" />
              <span>Fotos</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mis habilidades profesionales:</h2>
          <div className="text-left space-y-4">
            <div>
              <label className="text-lg text-white">Comunicación</label>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-purple-800 h-4 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <label className="text-lg text-white">Dedicación</label>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-purple-800 h-4 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <label className="text-lg text-white">Trabajo en equipo</label>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-purple-800 h-4 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-4">Conocimientos Tecnicos:</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* */}
       
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">Docker</h2>
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">Python</h2>
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">HTML&CSS</h2>
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">TypeScript</h2>
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">AWS</h2>
          </motion.div>
          <motion.div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <Link href=''>
            <h2 className="text-xl font-bold text-white mb-2">REGRESAR</h2>
            <FaArrowCircleUp size={25}/>
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </main>
  );
}
