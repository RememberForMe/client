interface IPropsInputComponent {
    type: string;
    value: string;
    placeholder?: string;
    handleInputing: (target: unknown) => void;
    handleFocusing?: () => void;
}

function InputComponent({ type, handleInputing, value, handleFocusing, placeholder }: IPropsInputComponent) {
    return (
        <input
            className="block border-2 rounded border-slate-300 outline-2 border-secondary p-2 outline-primary"
            type={type}
            value={value}
            onChange={(e) => handleInputing(e.target.value)}
            onFocus={handleFocusing ? () => handleFocusing() : () => {}}
            placeholder={placeholder}
        />
    );
}

export default InputComponent;