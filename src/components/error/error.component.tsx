import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ApolloError } from '@apollo/client';

interface IPropsErrorComponent {
    error: ApolloError
}

function ErrorComponent({ error }: IPropsErrorComponent) {
    return (
        <div>
            <FontAwesomeIcon icon={faTriangleExclamation} size='3x' color="red" className='relative left-1/2 -translate-x-1/2'/>
            <span className='block font-thin'>{error.message}</span>
        </div>
    )
}

export default ErrorComponent