import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <>
            <div className="max-w-2xl mx-auto my-32 text-center">
                <h1 className="text-2xl my-2">{err.error.message}</h1>
                <p className="text-lg text-neutral-500 my-2">Looks like the page is not available. Head back to the home page and explore more flavors.</p>
                <Link to="/">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg cursor-pointer">Go Back to Home</button>
                </Link>
            </div>
        </>
    )
}

export default Error;