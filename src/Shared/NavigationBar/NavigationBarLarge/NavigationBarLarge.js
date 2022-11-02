import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBarLarge.css";

const NavigationBarLarge = () => {
    return (
        <Navbar
            style={{
                height: "72px",
                zIndex: 10,
            }}
            className="d-none d-md-flex bg-white position-sticky t-0 l-0"
        >
            <Container
                fluid
                className="px-md-5 mx-md-4 d-flex justify-content-between"
            >
                <Navbar.Brand href="#home">
                    <img src="/assets/logo.png" alt="" />
                </Navbar.Brand>
                <form className="container d-none d-lg-flex justify-content-center w-100">
                    <div style={{ width: "360px" }}>
                        <div className="styleSearchIcon">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
                                    fill="#7A7A7A"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for your favorite groups in ATG"
                            className="searchFormStyle"
                        />
                    </div>
                </form>
                <div
                    className="d-flex justify-content-end align-items-center"
                    style={{ minWidth: "210px" }}
                >
                    <a
                        href="#home"
                        style={{
                            textDecoration: "none",
                            color: "#2E2E2E",
                            fontWeight: "700",
                            fontFamily: "IBM Plex Sans, Sans-serif",
                        }}
                    >
                        Create account.{" "}
                        <span style={{ fontSize: "16px", color: "#2F6CE5" }}>
                            It's free!
                        </span>
                    </a>

                    <span>
                        <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: "7px" }}
                        >
                            <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
                        </svg>
                    </span>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavigationBarLarge;
