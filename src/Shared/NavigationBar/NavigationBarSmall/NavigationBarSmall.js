import React from "react";

const NavigationBarSmall = () => {
    return (
        <nav
            className="container-fluid d-flex d-md-none justify-content-between align-items-center position-absolute t-0 l-0 z-10"
            style={{ height: "72px", zIndex: "10" }}
        >
            <div>
                <span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="icon/navigation/arrow_back_24px">
                            <path
                                id="icon/navigation/arrow_back_24px_2"
                                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                                fill="white"
                            />
                        </g>
                    </svg>
                </span>
            </div>
            <div>
                <button
                    style={{
                        fontFamily: "IBM Plex Sans, Sans-serif",
                        fontSize: "14px",
                        fontWeight: "500",
                        height: "28px",
                        width: "80px",
                    }}
                    className="bg-transparent text-white border border-1 rounded"
                >
                    Join Group
                </button>
            </div>
        </nav>
    );
};

export default NavigationBarSmall;
