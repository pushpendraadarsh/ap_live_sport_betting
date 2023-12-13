import { FaWhatsappSquare, FaUserCircle } from "react-icons/fa";
import Slider from 'slider-moon';
import { useState } from "react";
import { Link } from "react-router-dom";
import '../Slider.css';
import '../Style.css';
function Index() {
    const Sliders = ["/slider/desktop_banner_9.png", "/slider/desktop_banner_8.png", "/slider/desktop_banner_11.jpg", "/slider/desktop_banner_12.jpg", "/slider/desktop_banner_13.jpg", "/slider/desktop_banner_14.jpg", "/slider/desktop_banner_15.jpg", "/slider/desktop_banner_16.jpg", "/slider/desktop_banner_17.jpg"];
    const [loginpopup, setloginpopup] = useState('');
    const [loginmodeldisplay, setloginmodeldisplay] = useState('none');
    return (
        <>
            <div className="radheexch login-background">
                <div className="logindesktopview1" />
                <div className="loginnew">
                    <header className="headermobileshow">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 float-left">
                                    <div className="logo">
                                        <a href="">
                                            <img
                                                src="/logo.png"
                                                className="brandlogo"
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 loginbtn-center ">
                                    <button className="loginbtnnew mr-2">
                                        <a
                                            href="https://wa.me/+918957287400"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="twhite"
                                        >
                                            <span className="icons whatsapp">
                                                <FaWhatsappSquare />
                                            </span>
                                        </a>
                                    </button>
                                    <button className="loginbtnnew" onClick={()=>{setloginpopup('show');setloginmodeldisplay('flex')}}>
                                        <span className="icons user">
                                            <FaUserCircle />
                                        </span>
                                        <span className="d-block">Login</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Slider
                        slideClass={'my-slider'}
                        infinite={false}
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
                    <section className="sportbook">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="w-50" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/sport-book-desktop.png"
                                        className="img-fluid sportbook-img desktop"
                                        alt="logo"
                                    />
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/sport-book.png"
                                        className="img-fluid sportbook-img mobile"
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-50 text-right" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/sport-exchange-desktop.png"
                                        className="img-fluid sportbook-img desktop"
                                        alt="logo"
                                    />
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/sport-exchange.png"
                                        className="img-fluid sportbook-img mobile"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <div className="row mt-10">
                                <div className="w-25" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/horse-racing.png"
                                        className="img-fluid sportbook-img"
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-25" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/greyhound.png"
                                        className="img-fluid sportbook-img"
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-25" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/binary.png"
                                        className="img-fluid sportbook-img"
                                        alt="logo"
                                    />
                                </div>
                                <div className="w-25" style={{ cursor: "pointer" }}>
                                    <img
                                        src="https://images.staticcontent.io/dev/loginimages/virtual-cricket.png"
                                        className="img-fluid sportbook-img"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="casino-login">
                        <div className="container-fluid">
                            <div className="logincasino-title2">Live Casino</div>
                            <div className="casino-box">
                                <div
                                    className="casino-login-grid-container2"
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="casino-login-grid-item2">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c1.png"
                                            alt="logo"
                                        />{" "}
                                    </div>
                                    <div className="casino-login-grid-item2">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c2.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c3.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c4.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mb-t-7">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c5.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mb-t-7">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c6.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mb-t-7">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c7.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mb-t-7">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c8.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mobile-hide-casinoimg">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c9.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mobile-hide-casinoimg">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c10.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mobile-hide-casinoimg">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c11.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="casino-login-grid-item2 mt-7 mobile-hide-casinoimg">
                                        <img
                                            src="https://images.staticcontent.io/dev/loginimages/c12.png"
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div>
                            <a
                                href="https://wa.me/+918957287400"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="telegramsicon"
                                style={{ color: "rgb(0, 0, 0)" }}
                            >
                                <span className="icons whatsapp">
                                    <FaWhatsappSquare />
                                </span>
                                Customer support +91 8957 287400
                            </a>
                        </div>
                    </footer>
                    <div
                        className={`modal fade ${loginpopup} login-popup`}
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-modal="true"
                        style={{ display: loginmodeldisplay }}
                    >
                        <div className="modal-dialog  modal-dialog-scrollable modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                        onClick={()=>{setloginpopup('');setloginmodeldisplay('none')}}
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="modal-body contentbody">
                                    <h5
                                        className="modal-title mt-0 text-black text-center"
                                        id="myModalLabel"
                                    >
                                        Login
                                    </h5>
                                    <div className="margin-bottom-5px">
                                        <label htmlFor="usernameforgot" className="uname" data-icon="u">
                                            Username
                                        </label>
                                        <input
                                            className="field lowercase"
                                            tabIndex={1}
                                            name="uid"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            autoComplete="off"
                                            type="text"
                                            defaultValue="zxcv1234"
                                        />
                                    </div>
                                    <div className="margin-bottom-5px mt-3 login-password-div">
                                        <label htmlFor="passwordsignup" className="youpasswd" data-icon="p">
                                            Password{" "}
                                        </label>
                                        <input
                                            className="field p-relative"
                                            tabIndex={2}
                                            type="Password"
                                            name="passcode"
                                            id="passcode"
                                            defaultValue="Qwer1234"
                                        />
                                        {/* <span className="float-right login-password-div-span-i">
                                            <i className="fa fa-eye-slash" aria-hidden="true" />
                                        </span> */}
                                    </div>
                                    <div className="d-flex justify-content-start mb-3 signin">
                                        <input type="checkbox" required="" name="tncChecked" />{" "}
                                        <span className="signup-validation-text"> Remember me</span>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="row w-100">
                                        <div className="signin button mx-auto">
                                            <Link to="/home">
                                            <button className="btn-type-submit">
                                                <span className="">Login</span>
                                            </button>
                                            </Link>
                                            {/* <button type="submit" className="btn-type-submit">
                                                <i className="fa fa-android pr-2" aria-hidden="true" />
                                                Download Apk
                                            </button> */}
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-backdrop fade show" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
