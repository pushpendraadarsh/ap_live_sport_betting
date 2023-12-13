import { FaWhatsappSquare, FaUserCircle } from "react-icons/fa";
import Slider from 'slider-moon';
import '../Slider.css';
function Index() {
    const Sliders = ["/slider/desktop_banner_9.png", "/slider/desktop_banner_8.png", "/slider/desktop_banner_11.jpg", "/slider/desktop_banner_12.jpg", "/slider/desktop_banner_13.jpg", "/slider/desktop_banner_14.jpg", "/slider/desktop_banner_15.jpg", "/slider/desktop_banner_16.jpg", "/slider/desktop_banner_17.jpg"];
    return (
        <>
            <header className="bottom-curve">
                <img src="/logo.png" className="logo" alt="Logo" />
                <div className="second">
                    <span className="icons whatsapp">
                        <FaWhatsappSquare />
                    </span>
                    <span className="icons user">
                        <FaUserCircle />
                    </span>
                </div>
            </header>
            <Slider
                slideClass={'my-slider'}
                infinite={true}
                bullets={true}
                arrowsNav={false}
                animation={'scale'}
                callback={() => {
                    console.log('here');
                }}
            >
                <div className='slider my-slider'>
                    <ul className='slider-wrapper'>
                        {Sliders.map((item, i) => (
                            <li key={i}>
                                <img src={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Slider>
            <div className="container">
                <div className="small_banner">
                    <img src="/slider/sport-book-desktop.png" alt="" />
                    <img src="/slider/sport-exchange-desktop.png" alt="" />
                </div>
                <div className="small_banner horse">
                    <img src="/horse/binary.png" alt="" />
                    <img src="/horse/greyhound.png" alt="" />
                    <img src="/horse/horse-racing.png" alt="" />
                    <img src="/horse/virtual-cricket.png" alt="" />
                </div>
                <h3>Live Casino</h3>
                <div className="live-casino-container">
                    <img src="/live/c1.png" alt="" />
                    <img src="/live/c2.png" alt="" />
                    <img src="/live/c3.png" alt="" />
                    <img src="/live/c4.png" alt="" />
                    <img src="/live/c5.png" alt="" />
                    <img src="/live/c6.png" alt="" />
                    <img src="/live/c7.png" alt="" />
                    <img src="/live/c8.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Index;
