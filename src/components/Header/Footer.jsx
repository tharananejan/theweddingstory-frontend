import React from 'react';
import './Footer.css';
const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <footer className="footerMain">
            <div className="footerContainer">

                <div className="footerBrand">
                    The Wedding Story SL
                </div>
                <div className="footerLinks">
                    <a href='https://www.instagram.com/theweddingstory.sl?igsh=MWI3bnlzaDdjbWdzZw%3D%3D&utm_source=qr' target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.tiktok.com/@theweddingstory.sl?_r=1&_t=ZS-94yyTjgksh3" target="_blank" rel="noopener noreferrer">TikTok</a>

                    <a href="https://wa.link/mvmn5x" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>

                <div className="footerCopyright">
                    &copy; { currentYear } The Wedding Story. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;