import { gql } from "@apollo/client";

export const hobbiesGQL = gql`
    query Hobbies {
        hobbys {
            id
            name
        }
    }
`