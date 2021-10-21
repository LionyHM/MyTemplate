import MenuItem from "./MenuItem"
import Logo from "./Logo"
import { IconeAjustes, IconeCasa, IconeNotificacoes, IconeSair } from "../icons"

export default function MenuLateral(props){
    return(
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`                
                flex flex-col justify-center
                bg-gradient-to-r from-indigo-100 to-purple-800
                h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotificacoes} />
            </ul>
            <ul className={``}>
                <MenuItem onClick={() => console.log("logout")}
                className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white dark:hover:text-white
                `}
                texto="Sair" icone={IconeSair} />
            </ul>
        </aside>
    )
}