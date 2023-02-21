import { FaGithub } from 'react-icons/fa';

interface LoginProps {
    displayName: string;
}

const LoginButton = (props: LoginProps) => {
    function login() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=207a80cc346e1b5e364b")
    }
    return <button className="bg-black rounded p-2 text-sm font-semibold leading-6 text-slate-200 flex flex-row" onClick={login}><FaGithub size={17} className="m-1" /> {props.displayName}</button>
}

export default LoginButton;
