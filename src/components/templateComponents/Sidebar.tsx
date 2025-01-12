import { IconCalendar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { MesLink } from "../../interfaces/generalInterfaces";

const meses: MesLink[] = [
  { nomeMes: "Janeiro", link: "/jan" },
  { nomeMes: "Fevereiro", link: "/fev" },
  { nomeMes: "Março", link: "/mar" },
  { nomeMes: "Abril", link: "/abr" },
  { nomeMes: "Maio", link: "/mai" },
  { nomeMes: "Junho", link: "/jun" },
  { nomeMes: "Julho", link: "/jul" },
  { nomeMes: "Agosto", link: "/ago" },
  { nomeMes: "Setembro", link: "/set" },
  { nomeMes: "Outubro", link: "/out" },
  { nomeMes: "Novembro", link: "/nov" },
  { nomeMes: "Dezembro", link: "/dez" }
];


export default function Sidebar(){
  return (
    <aside className="text-zinc-600 dark:text-zinc-400 w-44 mt-5 px-2">
      <Link to="/">
        <h1 className="text-2xl hover:text-purple-400">Atividades</h1>
      </Link>
      <div className="my-3">
        <h2 className="text-xl text-purple-900 dark:text-purple-100">Mêses</h2>
        {meses.map((mes)=>{
          return(
            <Link className="flex gap-2 my-1 hover:text-purple-400 hover:underline" to={mes.link}>
              <IconCalendar size={20}/> <p>{mes.nomeMes}</p>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}