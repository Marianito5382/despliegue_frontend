"use client";
import Link from "next/link";

interface Props {
    id: number;
    titulo: string;
    cuerpo: string;
}

export default function ProjectCard({ id, titulo, cuerpo }: Props) {
    return (
        <div className="border rounded-lg shadow-lg p-6 bg-gray-200 w-full md:w-2/3 lg:w-1/2 mx-auto my-4 transform transition-transform duration-300 hover:scale-105 text-justify">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 hover:text-purple-800 transition-colors duration-300">{titulo}</h2>
            <p className="text-base md:text-lg text-gray">{cuerpo}</p>
        </div>
    );
}