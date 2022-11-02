import React from "react";
import Article from "./Article/Article";
import Event from "./Event/Event";
import Job from "./Job/Job";

const Body = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-8 my-3">
                    {/* atricles */}
                    <Article
                        img="/assets/Rectangle_5.png"
                        bodyText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                        title="What if famous brands had regular fonts? Meet RegulaBrands!"
                        article="/assets/article.png"
                        avatar="/assets/rectangle_3.png"
                        views="1.4k"
                        author="Sarthak Kamra"
                    ></Article>
                    <Article
                        img="/assets/Rectangle_5-2.png"
                        bodyText="I've worked in UX for the better part of a decade. From now on, I plan to rei…"
                        title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                        article="/assets/education.png"
                        avatar="/assets/rectangle_3-3.png"
                        views="1.4k"
                        author="Sarah West"
                    ></Article>
                    <Event
                        title="Finance & Investment Elite Social Mixer @Lujiazui"
                        article="/assets/meetup.png"
                        views="800"
                        avatar="/assets/rectangle_3-2.png"
                        author="Ronal Jones"
                        time="Fri, 12 Oct, 2018"
                        location="Ahmedabad, India"
                    ></Event>
                    <Job
                        title="Software Developer"
                        article="/assets/job.png"
                        views="1.4k"
                        avatar="/assets/rectangle_3-1.png"
                        author="Joseph Gray"
                        company="Innovaccer Analytics Private Ltd."
                        location="Ahmedabad, India"
                    ></Job>
                </div>
            </div>
        </div>
    );
};

export default Body;
