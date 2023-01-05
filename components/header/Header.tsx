import Navbar from "../navbar/Navbar";
import Slideshow from "../slideshow/Slideshow";

const Header = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Slideshow />
            </div>
        </div>
    );
}

export default Header;