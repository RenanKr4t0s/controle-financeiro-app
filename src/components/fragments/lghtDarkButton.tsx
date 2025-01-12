import { BooleanState } from "../../interfaces/generalInterfaces"

export default function LightDarkButton({state, setState}:BooleanState){
    function toggleDark(){
        setState(!state)
      }
    return(
        <button className="w-14 h-14 rounded-full
             bg-purple-200 text-black 
             hover:bg-purple-950 hover:text-purple-100
             dark:bg-purple-950 dark:text-purple-100
             dark:hover:bg-purple-100 dark:hover:text-black"
            onClick={toggleDark}
            >
            {state?"WHT":"DRK"}
        </button>
    )
}