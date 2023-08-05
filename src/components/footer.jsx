import React from "react";


function Footer(){
    const a = new Date();
    const year = a.getFullYear();
    return(
    <footer>
        <p>copyright @{year}</p>
    </footer>
    );
}

export default Footer;