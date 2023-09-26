import React from 'react';
import Logo from "../../assets/Logo.png";
import Woman from  "../../assets/Woman-hand-holding-mobile-phone-and-laptop-data-synchronization-675913278_6016x4016.jpeg"
import Programmer from  "../../assets/Programmer-working-in-a-software-developing-company-office-665158684_5379x3586.jpeg"
import Young from  "../../assets/Young-creative-business-people-meeting-at-office.-832112086_2125x1416.jpeg"
import People from  "../../assets/People-silhouettes-binary-code-background-898966394_4500x3000.jpeg"

function RandomImage() {
    const getImage = () => {}
    const images = [Woman, Programmer, Young, People];
    const imgIndex = Math.floor(Math.random() * 4);

    return (
        <img src={images[imgIndex]} alt="logo"/>
    );
}

export default React.memo(RandomImage);
