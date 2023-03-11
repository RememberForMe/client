import { useQuery } from "@apollo/client";
import { hobbiesGQL } from "../graphql/gqls/hobby.gql";

export function useGetHobbiesQuery() {
    const { data, loading, error } = useQuery(hobbiesGQL)

    return { data, loading, error }
}