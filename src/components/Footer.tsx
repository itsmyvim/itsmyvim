import { FaGithub } from "react-icons/fa";

const Footer = () => {
    
    return (
<footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 bg-medium-dark">
    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">itsmyvim</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-4 text-sm text-white dark:text-gray-400">
        <li>
            <a href="#" className="mr-4 hover:underline pt-2 md:mr-6 "><FaGithub size={20} /></a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline pt-2 md:mr-6 "><FaGithub size={20} /></a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline pt-2 md:mr-6 "><FaGithub size={20} /></a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline pt-2 md:mr-6 "><FaGithub size={20} /></a>
        </li>
    </ul>
</footer>
    )
}

export default Footer;
