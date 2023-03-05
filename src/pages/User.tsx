import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Keymaps from "../components/Keymaps";
import Navbar from "../components/Navbar";
import Plugins from "../components/Plugins";
import { useFetchByUsername } from "../utils/hooks/useFetchByUsername";
import Loading from "./Loading";

type options = "Plugins" | "Keymappings";

const User = () => {
    const { username } = useParams();
    const { user, loading } = useFetchByUsername(username || "caycun")
        const [selected, setSelected] = useState<options>("Plugins");

    if(loading) return <Loading />
    if(!user) return;
    return (
        <>
        <Navbar />
                <div className="flex justify-center items-start bg-dark min-h-screen">
                    <div className="w-[500px] md:w-[800px] min-h-screen flex bg-medium-dark rounded p-3 mt-[100px] m-2 flex-col mb-[60px]">
                        <div className="flex p-2">
                        <img className="rounded-full w-10 h-10" src={`https://github.com/${user?.['username']}.png`}/>
                    <h1 className="text-xl m-1 text-white font-bold">{user?.['username']}</h1> 
                        </div>
                        <div className="flex items-center flex-col">
                        <div className="flex">
                        <button className="text-white font-bold py-2 px-4 rounded bg-dark m-2 p-2 hover:bg-text-dark" onClick={() => setSelected("Plugins")}>Plugins</button>
                        <button className="text-white font-bold py-2 px-4 rounded bg-dark m-2 p-2 hover:bg-text-dark" onClick={() => setSelected("Keymappings")}>Keymaps</button>
                        </div>
                        {selected == "Plugins" ? <Plugins user={user}/> : <Keymaps user={user} />}
                    </div>
                    </div>
                </div>
                <Footer />
    </>
    )
}

export default User;
