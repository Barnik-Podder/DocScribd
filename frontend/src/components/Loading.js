import React from "react";
import "./Loading.css"; // Make sure to import the CSS file

const Loader = () => {
    return (
        <div className="spinner-container">
            <p className="loading-text">Please wait! Loading...</p>
            <div className="dots">
                {[...Array(15)].map((_, i) => (
                    <span key={i} style={{ "--i": i }}></span>
                ))}
            </div>
        </div>
    );
};

export default Loader;
