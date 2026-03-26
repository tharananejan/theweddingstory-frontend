import React from 'react';
import './Footer.css';

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
                    <a href="https://www.facebook.com/profile.php?id=100093441644419" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="">Privacy</a>
                </div>

                <div className="footerCopyright">
                    &copy; 2024 The Wedding Story. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;