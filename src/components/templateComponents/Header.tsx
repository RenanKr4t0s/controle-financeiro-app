import { BooleanState } from "../../interfaces/generalInterfaces"
import { IconMoneybag } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import LightDarkButton from "../fragments/lghtDarkButton"


export default function Header({state, setState}:BooleanState){
  return (
    <div className="dark:text-zinc-200 text-purple-950 bg-white dark:bg-zinc-900  px-4 py-2 justify-between flex">
      <div className="flex gap-6 items-center">
        <Link to={"/"} className=" text-purple-800 hover:text-purple-400"><IconMoneybag size={40}/></Link>
        
        <div>
          <h1 className="text-2xl">Controle Financeiro</h1>
          <p className="text-sm mt-1 dark:text-purple-100">Onde nossa família vai controlar suas finanças de 2025.</p>
        </div> 
      </div>
      <LightDarkButton state={state} setState={setState} />
    </div>
  )
}
