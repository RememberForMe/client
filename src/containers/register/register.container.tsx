import {
    useState,
    Dispatch,
    SetStateAction
} from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/button.component";
import InputComponent from "../../components/input/input.component";

function RegisterContainer() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');

    function handleSetState<T>(setState: Dispatch<SetStateAction<T>>) {
        return (target: unknown): void => setState(target as T);
    }

    function handleClickRegister() {
        if (password !== passwordAgain) {
            console.log('failed')
        }
    }

    return (
        <div className="w-max m-auto">
            <img className="w-32 h-32 rounded-full object-cover m-auto mb-3.5" src="/logo.jpg" alt="logo" />
            <h1 className="text-center text-5xl font-light mb-5">Welcome to <h1 className="text-primary">Remember For Me</h1></h1>
            <p className="w-80 text-center mb-7 m-auto">Thanks for coming with us, we improve your experience every day</p>
            <div className="grid gap-y-3.5 m-auto mb-2">
                <InputComponent
                    type="text"
                    handleInputing={handleSetState<string>(setUsername)}
                    value={username}
                    placeholder="Username"
                />
                <InputComponent
                    type="password"
                    handleInputing={handleSetState<string>(setPassword)}
                    value={password}
                    placeholder="Password"
                />
                <InputComponent
                    type="password"
                    handleInputing={handleSetState<string>(setPasswordAgain)}
                    value={passwordAgain}
                    placeholder="Password Again"
                />
            </div>
            <div className="my-7">
                <ButtonComponent type="primary" content="Register" handleClick={handleClickRegister} />
            </div>
            <p className="text-center text-secondary cursor-pointer"><Link to='/auth/login'>Have an account!</Link></p>
        </div>
    );
}

export default RegisterContainer;