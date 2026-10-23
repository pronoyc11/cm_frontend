import { Navigate } from "react-router-dom";

export default function AdminRoute({ children, me, loading = false }) {
    if (loading || !me) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary" />
            </div>
        );
    }
    if (!me) return null; // me loading থাকলে কিছু রেন্ডার না
    if (me.role !== "admin") return <Navigate to="/student" replace />;
    return children;
}
