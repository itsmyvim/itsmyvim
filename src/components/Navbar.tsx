import { useState } from "react";
import { useFetchUser } from "../utils/hooks/useFetchUser";
import LoginButton from "./loginbutton";

const Navbar = () => {
    const { user  } = useFetchUser()
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="bg-medium-dark border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">itsmyvim</span>
    </a>
    <button data-collapse-toggle="navbar-default" onClick={() => setToggle(!toggle)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-medium-dark focus:outline-none focus:ring-2 focus:bg-medium-dark dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={`${toggle ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg bg-dark md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-dark dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/about" className="block m-2 text-white text-sm bg-medium-dark rounded md:bg-transparent hover:bg-text-dark md:p-0 dark:text-white md:hover:text-blue-700 " aria-current="page">About</a>
        </li>
        <li>
          <a href="/docs" className="block m-2 text-white text-sm bg-medium-dark rounded hover:bg-text-dark md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Docs</a>
        </li>
                            <LoginButton displayName={user ? "Configure your profile" : "Sign in with Github"} />
             </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
