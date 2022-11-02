import React from "react";
import NavigationBarLarge from "./NavigationBarLarge/NavigationBarLarge";
import NavigationBarSmall from "./NavigationBarSmall/NavigationBarSmall";

const NavigationBar = () => {
    return (
        <>
            <NavigationBarLarge></NavigationBarLarge>
            <NavigationBarSmall></NavigationBarSmall>
        </>
    );
};

export default NavigationBar;
