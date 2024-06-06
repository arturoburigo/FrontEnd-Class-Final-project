import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h2>Ocorreu um erro...</h2>
            <p>Status: {error.status} - {error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}

export default ErrorPage
