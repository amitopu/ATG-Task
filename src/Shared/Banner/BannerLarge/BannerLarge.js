import React from "react";
import "./BannerLarge.css";

const BannerLarge = () => {
    return (
        <div className="position-relative d-none d-md-block">
            <img
                src="/assets/banner_large.png"
                className="img-fluid"
                alt="banner with a laptop screen"
            ></img>
            <div className="styleBannerGradient h-100 w-100 top-0 start-0 position-absolute"></div>
            <div className="container text-white position-relative">
                <div className="contianer mx-auto bannerText position-absolute">
                    <h1 className="styleBannerHeading">Computer Engineering</h1>
                    <p className="styleSecondaryHeading">
                        142,765 Computer Engineers follow this
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerLarge;
