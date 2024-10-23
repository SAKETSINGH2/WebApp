const Footer = () => {
    return (
        <div className="bg-teal-900 mb-10">
            {" "}
            <div className="flex items-center justify-center">
                <a href="https://facebook.com/">
                    <img
                        className="mt-6 w-[70px]"
                        src="../images/facebook.png"
                        alt="facebook"
                    />
                </a>
                <a href="https://instagram.com/">
                    {" "}
                    <img
                        className="mt-6 w-[60px]"
                        src="../images/instagram.webp"
                        alt="instagram"
                    />
                </a>
                <a href="https://youtube.com/">
                    <img
                        className="mt-6 w-[60px]"
                        src="../images/youtubeLogo.webp"
                        alt="youtube"
                    />
                </a>
            </div>
            <div className="flex gap-4 justify-center text-gray-300 mt-8 font-semiboldbold text-[16px]">
                <p>News</p>
                <p>Contact us</p>
                <p>Home</p>
                <p>Our Team</p>
                <p>Support</p>
            </div>
            <div className="flex  justify-center mt-[40px] text-gray-300  font-semiboldbold  text-[16px]">
                Copyright@2024 Designed by Saket Singh
            </div>
        </div>
    );
};
export default Footer;
