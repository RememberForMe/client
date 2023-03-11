import { gql } from '@apollo/client';

export const loginGQL = gql`
    mutation Login($input: AuthInput!) {
        login(loginInput: $input) {
            access_token 
        }
    }
`