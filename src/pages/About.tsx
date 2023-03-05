import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
       <>
<Navbar />

                <div className="flex justify-center items-start bg-dark min-h-screen">
                <div className="text-start m-2 p-2 w-[600px]">
 r              <h1 className="text-4xl text-white">About</h1>
                <p className="text-base text-white">I made this tool so you can share how you use neovim easily.</p>
                <p className="text-base text-white mt-5">You can check other's neovim usage and config by going to https://kjsda.com/github_username. </p>
                <p className="text-base text-white mt-5">This project is 100% open source, you can check the code in the repository. Contributions are always welcome :) This project is inspired by <a className="text-blue-700">howivscode.com.</a> </p>
                <p className="text-base text-white mt-5">Huge thanks to tailwindcss, flowbite, and some amazing persons in discord as they made this tool possible</p>
                </div>
            </div>
            <Footer />
            </> 
    )
}

export default About ;
