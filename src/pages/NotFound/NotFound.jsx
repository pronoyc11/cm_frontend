import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="min-h-[60vh] flex items-center justify-center px-4 py-16">
            <section className="max-w-lg text-center">
                <p className="text-7xl sm:text-8xl font-black gradient-text">404</p>
                <h1 className="page-heading mt-4">Page not found</h1>
                <p className="mt-3 text-base-content/70">
                    The page you requested does not exist or may have moved.
                </p>
                <Link to="/" className="btn btn-primary mt-8">
                    Return Home
                </Link>
            </section>
        </main>
    );
}
