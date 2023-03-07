interface IPropsButtonComponent {
    content: string;
    handleClick: () => void;
    type: 'primary' | 'secondary'
}

function ButtonComponent({ content, handleClick, type }: IPropsButtonComponent) {
    return (
        <button 
            className={`${type === 'primary' ? 'bg-primary' : 'secondary'} w-full text-white py-2 rounded`}
            onClick={() => handleClick()}
        >
            {content}
        </button>
    )
}

export default ButtonComponent