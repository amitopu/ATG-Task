import React from "react";
import "./BannerSmall.css";

const BannerSmall = () => {
    return (
        <div className="position-relative d-block d-md-none">
            <img
                src="/assets/banner_small.png"
                className="img-fluid w-100"
                alt="banner with a laptop screen"
            ></img>
            <div className="styleBannerGradientSmall h-100 w-100 top-0 start-0 position-absolute"></div>
            <div className="bannerTextSmall text-white position-absolute">
                <h1 className="styleBannerHeadingSmall">
                    Computer Engineering
                </h1>
                <p className="styleSecondaryHeadingSmall">
                    142,765 Computer Engineers follow this
                </p>
            </div>
        </div>
    );
};

export default BannerSmall;
