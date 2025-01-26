import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f8f9fa", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", color: "#333" }}>Oops! Something went wrong.</h1>
            <p style={{ color: "#666", margin: "1rem 0" }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button 
                style={{ padding: "0.5rem 1rem", backgroundColor: "#9538E2", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default Error;
