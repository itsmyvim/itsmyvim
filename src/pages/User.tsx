import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetchByUsername } from "../utils/hooks/useFetchByUsername";
import Loading from "./Loading";

const User = () => {
    const { username } = useParams();
    const { user, loading } = useFetchByUsername(username || "caycun")

    if(loading) return <Loading />
    return (
        <>
        <Navbar />
                <div className="flex justify-center items-start bg-dark min-h-screen">
                    <div className="w-[1000px] min-h-screen flex bg-medium-dark rounded p-3 mt-[100px] m-5">
                        <div className="flex p-2">
                        <img className="rounded-full w-10 h-10" src={`https://github.com/${user?.['username']}.png`}/>
                    <h1 className="text-xl m-1 text-white font-bold">{user?.['username']}</h1> 
                        </div>
                    </div>
                </div>
    </>
    )
}

export default User;
