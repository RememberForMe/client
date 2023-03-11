import HobbiesBoxWrapperContainer from "../hobbiesBoxWrapper/hobbiesBoxWrapper.container";
import { useGetHobbiesQuery } from "../../utils/hobbies";
import { useEffect, useState } from "react";
import { HobbiesResponse } from "../../types/hobbies-response.type";

function HobbiesBoxContainer() {
    const [hobbies, setHobbies] = useState<HobbiesResponse>([]);

    const { data, loading, error } = useGetHobbiesQuery()

    useEffect(() => {
        if (data?.hobbys) {
            setHobbies(data.hobbys);
        }
    }, [data]);

    return (
        <>
            <HobbiesBoxWrapperContainer data={hobbies} loading={loading} error={error}/> 
        </> 
    );
}

export default HobbiesBoxContainer;