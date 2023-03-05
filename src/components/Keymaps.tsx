import { User } from "../utils/types";

interface Mapping {
    lhs: string;
    rhs: string;
}

interface KeymapsProps {
    user: User
}

const Keymap = (props: Mapping) => {
    return (
       <div className="flex w-[400px] md:w-[700px] m-1 bg-dark rounded" key={props.rhs}>
            <p className="text-white p-2 text-sm flex-1">{props.lhs}</p>
            <p className="text-white p-2 text-sm flex-1">{props.rhs}</p>
        </div> 
    )
}

const Keymaps = (props: KeymapsProps) => {
       console.log(props.user)
       return (
        <div className="flex bg-gray-500 min-h-screen flex-1 flex-col items-center">
            <div className="flex flex-col p-2 m-2">
                {props.user.keymappings.map((data: Mapping) => {
                        return <Keymap lhs={data.lhs} rhs={data.rhs} />
                    })}
             </div>
                    </div>
    )
}

export default Keymaps;

