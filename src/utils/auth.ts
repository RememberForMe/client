import { useMutation } from '@apollo/client';
import { loginGQL } from '../graphql/gqls/auth.gql';

interface ILoginResponse {
    access_token: string;
}

interface IOnCompletedLoginMutation {
    login: ILoginResponse
}

export function useLoginMutation() {
    const [login, { data, loading, error }] = useMutation(loginGQL, {
        onCompleted({ login }: IOnCompletedLoginMutation) {
            localStorage.setItem('access_token', login.access_token)
        }
    })

    return { login, data, loading, error } 
}