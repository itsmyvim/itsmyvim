import Footer from "../components/Footer";
import LoginButton from "../components/loginbutton";
import Navbar from "../components/Navbar";
import { useFetchUser } from "../utils/hooks/useFetchUser";

const Landing = () => {
    const { user  } = useFetchUser()
    return (
        <>
        <Navbar />
        <body className="h-[830px] bg-dark w-100">
            <div className="flex justify-center">
                <div className="w-[800px] h-[800px] flex justify-center items-center text-center">
                    <div className="flex justify-center items-center flex-col w-[380px] p-2 sm:w-[600px]">
                    <h1 className="text-indigo-500 text-[30px] sm:text-[40px] font-bold">The easy answer to the question, "how are you using Neovim?"</h1>
                    <p className="text-xl text-white">Share your neovim plugins and configuration to everyone with some few simple steps!</p>
                        <div className="flex flex-row mt-2">
                            <LoginButton displayName={user ? "Configure your profile" : "Sign in with Github"} />
                            <a href="/caycun" className="text-white underline m-2">or view a sample profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
                    <Footer />
                        </>
    )
}

export default Landing;
