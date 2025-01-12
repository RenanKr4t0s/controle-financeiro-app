import model from "../assets/ideia.excalidraw.svg"

export default function Home(){
    return(
        <div className="align-center justify-items-center">
            <h1 className="text-3xl font-black underline text-purple-950 dark:text-purple-400">
                Modelo de como vamos trabalhar
            </h1>
            <div className="m-5">
                <img className="rounded-3xl" src={model} alt="Modelo de página de uso" />
            </div>

            {/* <div className="bg-neutral-700 w-96 h-56 items-center flex justify-center m-5 rounded-md shadow-lg">
                <p className="text-lg text-purple-200">Esse é um parágrafo dentro de uma div</p>
            </div> */}
        </div>
    )
}