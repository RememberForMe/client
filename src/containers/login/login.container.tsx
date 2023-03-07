import {
    useState,
    Dispatch,
    SetStateAction
} from "react";
import ButtonComponent from "../../components/button/button.component";
import CheckBoxComponent from "../../components/checkbox/checkbox.component";
import InputComponent from "../../components/input/input.component";

function LoginContainer() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    function handleSetState<T>(setState: Dispatch<SetStateAction<T>>) {
        return (target: unknown): void => setState(target as T);
    }

    function toggleRememberMe() {
        setRememberMe(state => !state);
    }

    function handleClickLogin() {
        console.log('login');
    }

    return (
        <div className="w-max m-auto">
            <img className="w-32 h-32 rounded-full object-cover m-auto mb-3.5" src="/logo.jpg" alt="logo" />
            <h1 className="text-center text-5xl font-light mb-5">Hello Again!</h1>
            <p className="w-80 text-center mb-7">Thanks for coming back, we improve your experience every day</p>
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
            </div>
            <div className="flex justify-between">
                <span className="flex items-center gap-2">
                    <CheckBoxComponent value={rememberMe} handleCheck={toggleRememberMe} />
                    <label>Remember Me</label>
                </span>
                <p className="text-primary hover:opacity-50 font-bold cursor-pointer">
                    Recovery Password
                </p>
            </div>
            <div className="my-7">
                <ButtonComponent type="primary" content="Login" handleClick={handleClickLogin} />
            </div>
            <p className="text-center text-secondary cursor-pointer">Don't have an account yet?</p>
        </div>
    );
}

export default LoginContainer;