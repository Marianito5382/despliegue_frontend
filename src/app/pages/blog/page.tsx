import axios from "axios";
import { parsedEnv } from "../../../../env";
import BotonRegreso from "../../components/Button";
import ProjectCard from "./component/ProjectCard";


interface Projects {
    id: number;
    titulo: string;
    cuerpo: string;
}

export default async function Home() {
    const response = await axios.get<Projects[]>(`${parsedEnv.API_URL}`);

    return (
        <main className="p-4 md:p-10 bg-gray-800 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl mb-8 text-white text-justify">
            Información de importancia en la Ingenieria </h1>
            <div className="w-full flex flex-col items-center">
                {
                    response.data.map((project) => (
                        <ProjectCard key={project.id} id={project.id} titulo={project.titulo} cuerpo={project.cuerpo} />
                    ))
                }
            </div>
            <BotonRegreso />
        </main>
    );
}
