interface IPropsHobbyBoxComponent {
    id: string
    name: string
    handleCheck: (id: string) => void
    checked: boolean
}

function HobbyBoxComponent({ id, name, handleCheck, checked }: IPropsHobbyBoxComponent) {
    return (
        <button 
            onClick={() => handleCheck(id)}
            className={`ease-linear duration-500 px-7 py-2 border-black rounded drop-shadow-md ${checked ? 'bg-third text-white' : 'bg-white text-third'} hover:bg-third hover:text-white hover:scale-110 font-bold`}
        >
            {name}
        </button>
    )
}

export default HobbyBoxComponent