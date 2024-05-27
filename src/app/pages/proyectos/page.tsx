'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CardProject() {
  const imageUrls = [
    '/matebug.jpeg',
    '/fl_onu.jpeg',
    '/activeimg.jpg',
    '/dockercimg.jpeg'
  ];

  const descriptions = [
    'Realizamos una pagina web sobre matematicas',
    'Pagina web de la agenda ecologica',
    'Active-directory y bloquear sitios',
    'Virtualizar aplicaciones, base de datos y en 3 maquinas virtuales en un contexto con Docker'
  ];

  const links = [
    '/pages/proyectos/Hackfest2023',
    '/pages/proyectos/Hackfest2021',
    '/pages/proyectos/active-directory',
    '/pages/proyectos/docker-c'
  ];

  return (
    <div className="bg-gray-800 container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image src={url} alt={`Proyecto ${index + 1}`} width={600} height={400} className="w-full h-auto" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-purple-950 bg-opacity-80 text-white p-4">
              <h2 className="text-xl font-bold mb-2">Proyecto {index + 1}</h2>
              <p>{descriptions[index]}</p>
              <Link 
                href={links[index]} 
                className="mt-2 inline-block bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
              >
                Ver Proyecto
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
