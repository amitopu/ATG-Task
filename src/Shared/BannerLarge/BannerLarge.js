import React from "react";
import "./BannerLarge.css";

const BannerLarge = () => {
    return (
        <div className="position-relative">
            <img
                src="/assets/banner_large.png"
                class="img-fluid"
                alt="banner with a laptop screen"
            ></img>
            <div className="styleBannerGradient"></div>
            <div className="bannerText">
                <h1 className="styleBannerHeading">Computer Engineering</h1>
                <p className="styleSecondaryHeading">
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default BannerLarge;
