import { Link } from "wouter"

const HomePage = () => {
    return <main className="d-flex flex-center flex-column">
        <h1>Home</h1>
        <p>Welcome to the home page</p>

        <div className="mt-4">
            <Link type="button" to="~/app" className="btn btn-primary">
                Go to app
            </Link>
        </div>
    </main>
}

export default HomePage
