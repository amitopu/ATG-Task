import React from "react";

const Article = ({ img, bodyText, title, article, views, avatar, author }) => {
    return (
        <div>
            <div class="card mb-3">
                <img src={img} class="card-img-top" alt="Article banner" />

                {/* article body */}
                <div class="card-body">
                    <div className="mb-4">
                        <img src={article} alt="" />
                    </div>

                    {/* article text content with title */}
                    <div className="d-flex justify-content-between">
                        <h5
                            style={{ fontWeight: "600", fontSize: "22px" }}
                            className="card-title mb-3"
                        >
                            {title}
                        </h5>
                        <div>
                            <button className="optionIcon border border-0 rounded bg-light">
                                <svg
                                    width="20"
                                    height="6"
                                    viewBox="0 0 20 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p
                        style={{ fontSize: "19px", fontWeight: "400" }}
                        class="card-text mb-5"
                    >
                        {bodyText}
                    </p>

                    {/* last card line contains author, views and share */}
                    <div className="d-flex justify-content-between">
                        {/* author title and avatar */}
                        <div className="d-flex justify-content-start">
                            <img
                                src={avatar}
                                className="me-3"
                                alt="author avatar"
                            />
                            <div>
                                <span style={{ fontWeight: "700" }}>
                                    {author}
                                </span>
                                <div className="d-block d-md-none">
                                    <span>{views} views</span>
                                </div>
                            </div>
                        </div>

                        {/* views and share  */}
                        <div className="d-flex justify-content-end align-items-center">
                            <span className="d-none d-md-flex">
                                <span className="me-2">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="icon/action/visibility_24px">
                                            <path
                                                id="icon/action/visibility_24px_2"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                                                fill="#8A8A8A"
                                            />
                                        </g>
                                    </svg>
                                </span>
                                <span className="me-3">{views} views</span>
                            </span>

                            <button className="px-3 pb-2 pt-1 border border-0 rounded-1 bg-grey me-3">
                                <span>
                                    <svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
                                            fill="#2D2D2D"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
