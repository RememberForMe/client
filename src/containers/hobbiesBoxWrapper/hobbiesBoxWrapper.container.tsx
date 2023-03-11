import { ApolloError } from "@apollo/client";
import { Dispatch, SetStateAction, useState } from "react";
import HobbyBoxComponent from "../../components/hobbyBox/hobbyBox.component";
import { HobbiesResponse, Hobby } from "../../types/hobbies-response.type";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

interface IPropsHobbiesBoxWrapperContainer {
    data: HobbiesResponse
    loading: boolean
    error: ApolloError | undefined
}

function HobbiesBoxWrapperContainer({ data, loading, error }: IPropsHobbiesBoxWrapperContainer) {
    const [checkedHobbies, setCheckedHobbies] = useState<string[]>([]);

    function handleCheckHobby(setState: Dispatch<SetStateAction<string[]>>) {
        return (id: string) => {
            if (checkedHobbies.includes(id)) {
                setState(state => state.filter(hobby => hobby !== id));
            } else {
                setCheckedHobbies(state => [...state, id]);
            }
        };
    }

    if (error) {
        console.log(error.name)
    }

    return (
        <div className="flex flex-wrap justify-center border w-11/12 md:w-9/12 m-auto drop-shadow-xl bg-white rounded-xl p-7 gap-4 md:gap-8">
            {loading ? <p>Loading...</p> : data.map((hobby: Hobby) => (
                <HobbyBoxComponent key={hobby.id} checked={checkedHobbies.includes(hobby.id)} id={hobby.id} name={hobby.name} handleCheck={handleCheckHobby(setCheckedHobbies)} />
            ))}
            {error && <FontAwesomeIcon icon={faTriangleExclamation} size='3x' color="red"/>}
        </div>
    );
}

export default HobbiesBoxWrapperContainer