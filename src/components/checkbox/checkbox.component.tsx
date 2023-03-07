interface IPropsCheckBoxComponent {
    handleCheck: () => void;
    value: boolean;
}

function CheckBoxComponent({ handleCheck, value }: IPropsCheckBoxComponent) {
    return (
        <input
            className="scale-125"
            type="checkbox" 
            onChange={() => handleCheck()}
            checked={value}
        />
    )
}

export default CheckBoxComponent