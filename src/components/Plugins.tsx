import { FaGithub } from "react-icons/fa";
import { User } from "../utils/types";

interface PluginsProps {
    user: User
}

interface Plugin {
    url: string;
    path: string;
    loaded: boolean;
}

interface PluginProps {
    plugin: Plugin
    name: string;
}

const Plugin = (props: PluginProps) => {
    return (
       <div className="flex w-[400px] md:w-[700px] m-1 bg-dark rounded" key={props.plugin.url}>
            <p className="text-white p-2 flex-1">{props.name}</p>
            <a href={props.plugin.url}><FaGithub className="w-10 h-10 p-2 text-white hover:text-text-dark"  /></a>
        </div> 
    )
}

const Plugins = (props: PluginsProps) => {
       return (
        <div className="flex bg-gray-500 min-h-screen flex-1 flex-col items-center">
            <div className="flex flex-col p-2 m-2">
                {Object.keys(props.user.plugins).map((key: string) => {

                return <Plugin plugin={props.user.plugins[key as keyof typeof Plugin]} name={key} />
                })
            }
             </div>
                    </div>
    )
}

export default Plugins;
