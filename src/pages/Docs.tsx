import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useFetchUser } from "../utils/hooks/useFetchUser";

const Docs = () => {
    const { user } = useFetchUser();
    return (
       <>
<Navbar />

                <div className="flex justify-center items-start bg-dark min-h-screen">
                <div className="text-start m-2 p-2 w-[600px]">
                <h1 className="text-4xl text-white">Setup</h1>
                <p className="text-base text-white">This is a guide on how to start sharing your awesme neovim plugins and configuration.</p>
                <h1 className="text-2xl mt-5 text-white">First step:</h1>
                <p className="text-base text-white">Sign in with github in this website. We will only access your public information such as username, profile picture, etc.</p>
                <h1 className="text-2xl mt-5 text-white">Second step:</h1>
                <p className="text-base text-white">Install the itsmyvim plugin depending on your package manager. If the package manager you are using is not supported, you cannot use this tool. You can inform your developer friends to contribute in the project to support the package manager you are using. </p>
                    <div>
                <h1 className="text-xl mt-5 text-white">Supported Package Managers:</h1>
                        <ul>
                            <a className="text-blue-500" href="https://github.com/itsmyvim/packer-imv">- packer</a>
                        </ul>
                    </div>
                <h1 className="text-2xl mt-5 text-white">Third step:</h1>
                <p className="text-base text-white">Use the setup command of the itsmyvim plugin you installed. After that, you are good to go! visit <p className="text-blue-500">https://aksdlaksjd/{user ? user.username : 'github_username'}</p></p>
                </div>
            </div>
            <Footer />
            </> 
    )
}

export default Docs ;
