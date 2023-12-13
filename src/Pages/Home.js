import { FaUserCircle } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import Slider from 'slider-moon';
import { useState } from "react";
import '../Slider.css';
import '../Style.css';
function Home() {
    const Sliders = ["/slider/desktop_banner_9.png", "/slider/desktop_banner_8.png", "/slider/desktop_banner_11.jpg", "/slider/desktop_banner_12.jpg", "/slider/desktop_banner_13.jpg", "/slider/desktop_banner_14.jpg", "/slider/desktop_banner_15.jpg", "/slider/desktop_banner_16.jpg", "/slider/desktop_banner_17.jpg"];
    const [loginpopup, setloginpopup] = useState('show');
    const [loginmodeldisplay, setloginmodeldisplay] = useState('block');
    return (
        <body>
            <div className="top">
                <div className="header full-wrap">
                    <div className="d-inline">
                        <span className="icon-toggle-right mobile-menu">
                            <IoIosOptions/>
                        </span>
                        <a className="logo">
                            <img
                                alt=""
                                src="/logo.png"
                                width={195}
                                height="60px"
                                className="mainlogo"
                            />
                        </a>
                    </div>
                    <ul className="account-wrap">
                        <li className="mb3 cmenu">
                            <a
                                target="_blank"
                                className="hed-btn cmenu"
                                id="accountPopup"
                                style={{ cursor: "pointer" }}
                            >
                                <span className="line cmenu">
                                    <span className="darkblue pr-1 cmenu">
                                        <FaUserCircle />
                                    </span>
                                </span>
                                <span className="pl-1 cmenu p-8" style={{ color: "black" }}>
                                    My Account
                                </span>
                                <i
                                    className="fa fa-caret-down pl-2 cmenu rigarrow"
                                    aria-hidden="true"
                                    style={{ color: "black" }}
                                />
                            </a>
                            <ul
                                id="account_pop"
                                className="cmenu"
                                style={{ display: "none", zIndex: 999 }}
                            >
                                <li className="cmenu">
                                    <h4 className="cmenu">
                                        zxcv1234
                                        <span className="cmenu gmt" title="Time Zone">
                                            GMT+5:30
                                        </span>
                                    </h4>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/change-password.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Change Password
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/Account-Statement.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Account Statement
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/Account-Statement.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        CG Account Statement
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/profit-loss-report.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Profit Loss Report
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/bet-history.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Bet Histroy
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/bet-history.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        CG Bet Histroy
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/unsettle-bet.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Unsettled Bet
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/unsettle-bet.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        CG Unsettled Bet
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/set-button-value.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Set Button Value
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/rules.svg"
                                            className="ball-images-tab"
                                        />{" "}
                                        Rules
                                    </a>
                                </li>
                                <li className="logout">
                                    <a id="logout">
                                        {" "}
                                        LOGOUT
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/casino/banner/images/log-out.svg"
                                            className="ball-images-tab ml-2"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="mb3 cmenu">
                            <a className="hed-btn text-white cmenu" style={{ cursor: "pointer" }}>
                                <span className="line coin cmenu">
                                    <img
                                        alt=""
                                        src="https://images.staticcontent.io/casino/banner/images/coin.svg"
                                        className="pr-1 cmenu"
                                    />
                                </span>
                                <span className="pl-1 cmenu p2">0.00</span>
                                <i
                                    className="fa fa-caret-down pl-2 cmenu rigarrow"
                                    aria-hidden="true"
                                />
                            </a>
                            <div
                                className="wallet-detail cmenu"
                                id="multiBalancePop"
                                style={{ display: "none" }}
                            >
                                <div className="wallet-detail-group cmenu">
                                    <dl
                                        className="wallet-detail-content mb-1 cmenu"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <dt className="cmenu">Exposure</dt>
                                        <dd className="wallet-balance-num cmenu">
                                            <span id="mainBalance" className="cmenu">
                                                <span className="cmenu">0.00</span>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="wallet-detail-group cmenu">
                                    <dl className="wallet-detail-content mb-1 cmenu">
                                        <dt className="cmenu">P&amp;L</dt>
                                        <dd className="wallet-balance-num cmenu">
                                            <span id="mainBalance" className="cmenu">
                                                <span className="cmenu">0.00</span>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="btn-box cmenu">
                                    <button className="btn">Close</button>
                                </div>
                            </div>
                        </li>
                        <li className="cmenu">
                            <a className="hed-btn text-white cmenu" style={{ cursor: "pointer" }}>
                                <span className="line coin cmenu cgtext">RC</span>
                                <span className="pl-1 cmenu  p-6">0.00</span>
                                <i
                                    className="fa fa-caret-down pl-2 cmenu rigarrow"
                                    aria-hidden="true"
                                />
                            </a>
                            <div
                                className="wallet-detail cmenu"
                                id="multiRGBalancePop"
                                style={{ display: "none" }}
                            >
                                <div className="wallet-detail-group cmenu">
                                    <dl className="wallet-detail-content mb-1 cmenu">
                                        <dt className="cmenu">RC Exposure</dt>
                                        <dd className="wallet-balance-num cmenu">
                                            <span id="mainBalance" className="cmenu">
                                                <span className="cmenu">0.00</span>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="wallet-detail-group cmenu">
                                    <dl className="wallet-detail-content mb-1 cmenu">
                                        <dt className="cmenu">RC P&amp;L</dt>
                                        <dd className="wallet-balance-num cmenu">
                                            <span id="mainBalance" className="cmenu">
                                                <span className="cmenu">0.00</span>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="btn-box cmenu">
                                    <button className="btn">Close</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu-wrap mobile-menu-hide">
                    <div className="full-wrap">
                        <ul className="menu">
                            <li>
                                <a className="select">Home</a>
                            </li>
                            <li>
                                <a>In-Play</a>
                            </li>
                            <li>
                                <a className="awesome"> Club Games</a>
                            </li>
                            <li>
                                <a>
                                    <span id="tagLive" className="tag-live">
                                        <strong />1
                                    </span>{" "}
                                    Cricket
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span id="tagLive" className="tag-live">
                                        <strong />0
                                    </span>
                                    Soccer
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span id="tagLive" className="tag-live">
                                        <strong />1
                                    </span>
                                    Tennis
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span id="tagLive" className="tag-live">
                                        <strong />2
                                    </span>
                                    Horse
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span id="tagLive" className="tag-live">
                                        <strong />0
                                    </span>
                                    Greyhound
                                </a>
                            </li>
                            <li>
                                <a className="">Indian Poker</a>
                            </li>
                            <li>
                                <a className="">Indian Poker II</a>
                            </li>
                            <li>
                                <a className="">
                                    <span id="tagLive" className="tag-live1">
                                        <img
                                            className="ball-images-tab1-aviator new-scrollmenu"
                                            src="https://images.staticcontent.io/casino/banner/images/aviator-icon.svg"
                                            alt=""
                                        />
                                    </span>
                                    Aviator
                                </a>
                            </li>
                            <li>
                                <a className="">AE SEXY</a>
                            </li>
                            <li>
                                <a className="">Evolution</a>
                            </li>
                            <li>
                                <a className="">Live Casino</a>
                            </li>
                            <li>
                                <a className="">Vivo</a>
                            </li>
                            <li>
                                <a className="">Betgames</a>
                            </li>
                            <li>
                                <a className="">Casino III</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="container-fluid footer">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <marquee scrollamount={5} behavior="scroll">
                            <p className="mb-0 font-12">
                                <i className="fa fa-bullhorn mr-2" aria-hidden="true" />
                                Welcome To Our Exchange.... 1️⃣ Virtual Cricket Started in Our
                                Exchange....
                            </p>
                        </marquee>
                    </div>
                </div>
            </footer>
            <div className="scrollmenu scrollmenuheader">
                <a>
                    <span className="sports-icon inplaytablet" />
                    In-Play
                </a>
                <a className="awesomemobile">
                    <img
                        alt=""
                        src="https://images.staticcontent.io/casino/banner/images/indian-poker-icon.svg"
                        className="ball-images-tab new-scrollmenu"
                    />
                    Club Games
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />1
                    </span>
                    <span className="sports-icon crickettablet" />
                    Cricket
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />0
                    </span>
                    <span className="sports-icon soccertablet" />
                    Soccer
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />1
                    </span>
                    <span className="sports-icon tennistablet" /> Tennis
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />2
                    </span>
                    <span className="sports-icon horsetablet" /> Horse
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />0
                    </span>
                    <span className="sports-icon greyhoundtablet" /> Greyhound
                </a>
                <a className="">
                    <span className="sports-icon casinotablet" />
                    Indian Poker
                </a>
                <a className="">
                    <span className="sports-icon indianpokertablet" />
                    Indian Poker II
                </a>
                <a className="">
                    <img
                        className="ball-images-tab1-aviator-tablet"
                        src="https://images.staticcontent.io/casino/banner/images/aviator-icon.svg"
                        alt=""
                    />
                    Aviator
                </a>
                <a className="">
                    <span className="sports-icon casinotablet" />
                    AE SEXY
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Evolution
                </a>
                <a className="">
                    <span className="sports-icon casinotablet" />
                    Live Casino
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Vivo
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Betgames
                </a>
                <a className="">
                    <span className="sports-icon casinotablet" />
                    Casino III
                </a>
            </div>
            <div className="scrollmenu marposition">
                <a>
                    <span className="sports-icon inplaymobile" /> In-Play
                </a>
                <a className="awesomemobile">
                    <img
                        alt=""
                        src="https://images.staticcontent.io/casino/banner/images/indian-poker-icon.svg"
                        className="ball-images-tab new-scrollmenu"
                    />
                    Club Games
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />1
                    </span>
                    <span className="sports-icon cricketmobile" />
                    Cricket
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />0
                    </span>
                    <span className="sports-icon soccermobile" />
                    Soccer
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />1
                    </span>
                    <span className="sports-icon tennismobile" /> Tennis
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />2
                    </span>
                    <span className="sports-icon horsemobile" />
                    Horse
                </a>
                <a>
                    <span id="tagLive" className="tag-livemobile">
                        <strong />0
                    </span>
                    <span className="sports-icon greyhoundmobile" />
                    Greyhound
                </a>
                <a className="">
                    <span className="sports-icon casinomobile" />
                    Indian Poker
                </a>
                <a className="">
                    <span className="sports-icon indianpokermobile" />
                    Indian Poker II
                </a>
                <a className="">
                    <img
                        className="ball-images-tab1-aviator-mobile"
                        src="https://images.staticcontent.io/casino/banner/images/aviator-icon.svg"
                        alt=""
                    />
                    Aviator
                </a>
                <a className="">
                    <span className="sports-icon casinomobile" />
                    AE SEXY
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Evolution
                </a>
                <a className="">
                    <span className="sports-icon casinomobile" />
                    Live Casino
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Vivo
                </a>
                <a className="">
                    <img
                        className="ball-images-tab new-scrollmenu"
                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                        alt=""
                    />
                    Betgames
                </a>
                <a className="">
                    <span className="sports-icon casinomobile" />
                    Casino III
                </a>
            </div>
            <div className="full-wrap mar-top100">
                <div className="col-left" id="sidebar">
                    <div className="sub_path over-wrap">
                        <ul className="list-unstyled components">
                            <p>
                                Popular{" "}
                                <i className="fa fa-close pt-1 icon-toggle-right mobile-menu float-right" />
                            </p>
                            <li className="tab-show">
                                <a aria-expanded="true">
                                    <span className="sports-icon homeside" /> Home
                                </a>
                            </li>
                            <li>
                                <a aria-expanded="false">
                                    <span className="sports-icon inplayside" /> In-Play
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="sports-icon multimarketside" /> Multi Markets
                                </a>
                            </li>
                            <li>
                                <a href="/clubgames">
                                    <img
                                        alt=""
                                        src="https://images.staticcontent.io/casino/banner/images/indian-poker-icon.svg"
                                        className="ball-images-tab"
                                    />{" "}
                                    Club Games
                                </a>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    className="dropdown-toggle"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <span className="sports-icon cricketside" /> Cricket
                                </a>
                                <div id="cricketSubmenu" style={{ display: "none" }}>
                                    <div id="sidetree">
                                        <ul id="tree">
                                            <li style={{ marginLeft: 15 }}>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Indian Premier League Virtual Cricket T10
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Punjab Kings T10 v Delhi Capitals T10 "
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Punjab Kings T10 v Delhi Capitals T10{" "}
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Rajasthan Royals T10 v  Royal Challengers Bangalore T10"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Rajasthan Royals T10 v Royal Challengers Bangalore
                                                                    T10
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            International Virtual Cricket T10
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Sri Lanka T10 v Afghanistan T10"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Sri Lanka T10 v Afghanistan T10
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Australia T10 v India T10 "
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Australia T10 v India T10{" "}
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Womens One Day Internationals
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Bangladesh Women v India Women"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Bangladesh Women v India Women
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Test Matches
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="England v Australia"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    England v Australia
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="West Indies v India"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    West Indies v India
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Sri Lanka v Pakistan"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Sri Lanka v Pakistan
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Major League Cricket
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="MI New York v Seattle Orcas"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    MI New York v Seattle Orcas
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="MI New York v Washington Freedom"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    MI New York v Washington Freedom
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="San Francisco Unicorns v Texas Super Kings"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    San Francisco Unicorns v Texas Super Kings
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Los Angeles Knight Riders v Seattle Orcas"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Los Angeles Knight Riders v Seattle Orcas
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="San Francisco Unicorns v Washington Freedom"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    San Francisco Unicorns v Washington Freedom
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Zim Afro T10
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Durban Qalanders v Joburg Buffaloes"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Durban Qalanders v Joburg Buffaloes
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Harare Hurricanes v Cape Town Samp Army"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Harare Hurricanes v Cape Town Samp Army
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Cape Town Samp Army v Bulawayo Braves"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Cape Town Samp Army v Bulawayo Braves
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    className="dropdown-toggle"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <span className="sports-icon soccerside" /> Soccer
                                </a>
                                <div id="cricketSubmenu" style={{ display: "none" }}>
                                    <div id="sidetree">
                                        <ul id="tree">
                                            <li style={{ marginLeft: 15 }}>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Japanese J League
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Kobe v Kawasaki"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Kobe v Kawasaki
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Polish Ekstraklasa
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Stal Mielec v Cracovia Krakow"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Stal Mielec v Cracovia Krakow
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Swedish Allsvenskan
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Djurgardens v Elfsborg"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Djurgardens v Elfsborg
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Swedish Superettan
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Landskrona v AFC Eskilstuna"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Landskrona v AFC Eskilstuna
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Gefle v Ostersunds FK"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Gefle v Ostersunds FK
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Skovde AIK v Orgryte"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Skovde AIK v Orgryte
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Sundsvall v Orebro"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Sundsvall v Orebro
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            FIFA Women's World Cup
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="England (W) v Haiti (W)"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    England (W) v Haiti (W)
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Denmark (W) v China (W)"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Denmark (W) v China (W)
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Zambia (W) v Japan (W)"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Zambia (W) v Japan (W)
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Irish FAI Cup
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Cockhill Celtic v Bray Wanderers"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Cockhill Celtic v Bray Wanderers
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Portuguese League Cup
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Rio Ave v Academico de Viseu"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Rio Ave v Academico de Viseu
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            South Korean K League 1
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="FC Seoul v Incheon Utd"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    FC Seoul v Incheon Utd
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Suwon FC v Gwangju FC"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Suwon FC v Gwangju FC
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Gangwon v Suwon Bluewings"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Gangwon v Suwon Bluewings
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Daejeon Citizen v Daegu FC"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Daejeon Citizen v Daegu FC
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    className="dropdown-toggle"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <span className="sports-icon tennisside" /> Tennis
                                </a>
                                <div id="cricketSubmenu" style={{ display: "none" }}>
                                    <div id="sidetree">
                                        <ul id="tree">
                                            <li style={{ marginLeft: 15 }}>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            WTA Palermo 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="J Paolini v Sorribes Tormo"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    J Paolini v Sorribes Tormo
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="M Sherif v Q Zheng"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    M Sherif v Q Zheng
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            WTA Iasi 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Serban v A Bogdan"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Serban v A Bogdan
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="I Begu v T Zidansek"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    I Begu v T Zidansek
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            WTA Budapest 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Fann Stollar v Ka Baindl"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Fann Stollar v Ka Baindl
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Ma Timofeeva v Podoroska"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Ma Timofeeva v Podoroska
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ATP Gstaad 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Ramos-Vinolas v Kecmanovic"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Ramos-Vinolas v Kecmanovic
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Cachin v Ha Medjedovic"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Cachin v Ha Medjedovic
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ATP Bastad 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Ruud v Musetti"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Ruud v Musetti
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Cerundolo v Rublev"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Cerundolo v Rublev
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ATP Newport 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Humbert v Mannarino"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Humbert v Mannarino
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Isner v Al Michelsen"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Isner v Al Michelsen
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Hopman Cup 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Donna Vekic v Rebeka Masarova"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Donna Vekic v Rebeka Masarova
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            WTA Hamburg 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Sharma v Zeyn Sonmez"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Sharma v Zeyn Sonmez
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Els Jacquemot v Tat Prozorova"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Els Jacquemot v Tat Prozorova
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Rueffer v Mir Bulgaru"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Rueffer v Mir Bulgaru
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Poli Kudermetova v Kempen"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Poli Kudermetova v Kempen
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="D Saville v Bar Palicova"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    D Saville v Bar Palicova
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ATP Hamburg 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="P Kotov v Kovalik"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    P Kotov v Kovalik
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Th Seyboth Wild v Collarini"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Th Seyboth Wild v Collarini
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="M Moeller v Choinski"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    M Moeller v Choinski
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="E Ymer v Gakhov"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    E Ymer v Gakhov
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Olivo v T Monteiro"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Olivo v T Monteiro
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Coppejans v Tirante"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Coppejans v Tirante
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Galan v Max Rehberg"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Galan v Max Rehberg
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Garin v Ma Topo"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Garin v Ma Topo
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ATP Umag 2023
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Cobolli v Lu Nardi"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Cobolli v Lu Nardi
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="J De Jong v Brancaccio"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    J De Jong v Brancaccio
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Maestrelli v Bagnis"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Maestrelli v Bagnis
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Skatov v Je Brkic"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Skatov v Je Brkic
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Tabilo v Dzumhur"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Tabilo v Dzumhur
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="To Barrios Vera v Serdarusic"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    To Barrios Vera v Serdarusic
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Vavassori v Kolar"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Vavassori v Kolar
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="P Cuevas v Misolic"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    P Cuevas v Misolic
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    className="dropdown-toggle"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <span className="sports-icon horseside" /> Horse
                                </a>
                                <div id="cricketSubmenu" style={{ display: "none" }}>
                                    <div id="sidetree">
                                        <ul id="tree">
                                            <li style={{ marginLeft: 15 }}>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            NZ-New Plymouth
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="New Plymouth (NZL) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    New Plymouth (NZL) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Coonabarabran
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Coonabarabran (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Coonabarabran (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Doomben
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Doomben (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Doomben (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Leeton
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Leeton (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Leeton (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Darwin
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Darwin (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Darwin (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Caulfield
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Caulfield (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Caulfield (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Mackay
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Mackay (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Mackay (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Derby
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Derby (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Derby (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Morphettville
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Morphettville (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Morphettville (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Rosehill
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Rosehill (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Rosehill (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Belmont
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Belmont (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Belmont (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            NZ-Tauranga
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Tauranga (NZL) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Tauranga (NZL) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Gosford
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Gosford (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Gosford (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Gold Coast
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Gold Coast (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Gold Coast (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Pakenham
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Pakenham (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Pakenham (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    className="dropdown-toggle"
                                    style={{ textTransform: "capitalize" }}
                                >
                                    <span className="sports-icon greyhoundside" /> Greyhound
                                </a>
                                <div id="cricketSubmenu" style={{ display: "none" }}>
                                    <div id="sidetree">
                                        <ul id="tree">
                                            <li style={{ marginLeft: 15 }}>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            GB-Romford
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Romford 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Romford 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Dubbo
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Dubbo (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Dubbo (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            GB-Swindon
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Swindon 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Swindon 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            GB-Harlow
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Harlow 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Harlow 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Bendigo
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Bendigo (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Bendigo (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Wentworth Park
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Wentworth Park (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Wentworth Park (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-The Gardens
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="The Gardens (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    The Gardens (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-Ipswich
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Ipswich (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Ipswich (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            AU-The Meadows
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="The Meadows (AUS) 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    The Meadows (AUS) 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="treeview"
                                                    style={{
                                                        position: "relative",
                                                        padding: "4px 0px 0px",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        verticalAlign: "middle"
                                                    }}
                                                >
                                                    <svg
                                                        className="toggle"
                                                        viewBox="64 -65 897 897"
                                                        style={{
                                                            width: "1em",
                                                            height: "1em",
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            opacity: 1
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                                                        </g>
                                                    </svg>
                                                    <span
                                                        style={{
                                                            textTransform: "uppercase",
                                                            fontFamily: "monospace",
                                                            fontSize: "0.6em",
                                                            verticalAlign: "middle",
                                                            marginRight: 0
                                                        }}
                                                    />
                                                    <span style={{ verticalAlign: "middle" }}>
                                                        <span
                                                            className="treeviewnode"
                                                            style={{
                                                                fontSize: 11,
                                                                color: "rgb(0, 0, 0)",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            GB-Crayford
                                                        </span>
                                                    </span>
                                                    <div
                                                        style={{
                                                            height: 0,
                                                            opacity: 0,
                                                            transform: "translate3d(20px, 0px, 0px)",
                                                            willChange: "transform, opacity, height",
                                                            marginLeft: 6,
                                                            padding: "4px 0px 0px 14px",
                                                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                        }}
                                                    >
                                                        <div
                                                            className="treeview"
                                                            style={{
                                                                position: "relative",
                                                                padding: "4px 0px 0px",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap",
                                                                overflow: "hidden",
                                                                verticalAlign: "middle"
                                                            }}
                                                        >
                                                            <svg
                                                                className="toggle"
                                                                viewBox="64 -65 897 897"
                                                                style={{
                                                                    width: "1em",
                                                                    height: "1em",
                                                                    marginRight: 10,
                                                                    cursor: "pointer",
                                                                    verticalAlign: "middle",
                                                                    opacity: "0.3"
                                                                }}
                                                            >
                                                                <g>
                                                                    <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                                                                </g>
                                                            </svg>
                                                            <span
                                                                style={{
                                                                    textTransform: "uppercase",
                                                                    fontFamily: "monospace",
                                                                    fontSize: "0.6em",
                                                                    verticalAlign: "middle",
                                                                    marginRight: 0
                                                                }}
                                                            />
                                                            <span style={{ verticalAlign: "middle" }}>
                                                                <span
                                                                    className="treeviewnode"
                                                                    title="Crayford 22nd Jul"
                                                                    style={{
                                                                        color: "rgb(0, 0, 0)",
                                                                        fontSize: 11,
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    Crayford 22nd Jul
                                                                </span>
                                                            </span>
                                                            <div
                                                                style={{
                                                                    height: 0,
                                                                    opacity: 0,
                                                                    transform: "translate3d(20px, 0px, 0px)",
                                                                    willChange: "transform, opacity, height",
                                                                    marginLeft: 6,
                                                                    padding: "4px 0px 0px 14px",
                                                                    borderLeft: "1px dashed rgba(255, 255, 255, 0.4)"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled components bb-none">
                            <li>
                                <a href="/royalcasino">
                                    <span className="sports-icon casinoside" />
                                    Indian Poker
                                </a>
                            </li>
                            <li>
                                <a href="/indianpoker">
                                    <span className="sports-icon indianpokerside" />
                                    Indian Poker II
                                </a>
                            </li>
                            <li>
                                <a href="/spribe">
                                    <img
                                        className="ball-images-tab"
                                        src="https://images.staticcontent.io/casino/banner/images/aviator-icon.svg"
                                        alt=""
                                    />
                                    Aviator
                                </a>
                            </li>
                            <li>
                                <a href="/casino3/aesexybcrt">
                                    <span className="sports-icon casinoside" />
                                    AE SEXY
                                </a>
                            </li>
                            <li>
                                <a href="/evolution">
                                    <img
                                        className="ball-images-tab"
                                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                                        alt=""
                                    />
                                    Evolution
                                </a>
                            </li>
                            <li>
                                <a href="/livecasino">
                                    <span className="sports-icon casinoside" />
                                    Live Casino
                                </a>
                            </li>
                            <li>
                                <a href="/vivo">
                                    <img
                                        className="ball-images-tab"
                                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                                        alt=""
                                    />
                                    Vivo
                                </a>
                            </li>
                            <li>
                                <a href="/betgames">
                                    <img
                                        className="ball-images-tab"
                                        src="https://images.staticcontent.io/casino/banner/images/casino-icon.svg"
                                        alt=""
                                    />
                                    Betgames
                                </a>
                            </li>
                            <li>
                                <a href="/casino3">
                                    <span className="sports-icon casinoside" />
                                    Casino III
                                </a>
                            </li>
                        </ul>
                        <ul className="list-unstyled components" />
                    </div>
                </div>
                <div className="col-center1 markets">
                    <section className="homebanner desktop-view">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="slick-slider slick-initialized" dir="ltr">
                                    <button
                                        type="button"
                                        data-role="none"
                                        className="slick-arrow slick-prev"
                                        style={{ display: "block" }}
                                    >
                                        {" "}
                                        Previous
                                    </button>
                                    <div className="slick-list">
                                        <div
                                            className="slick-track"
                                            style={{
                                                opacity: 1,
                                                transform: "translate3d(0px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                data-index={-1}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_17.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={0}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_1.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={1}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_2.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={2}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_3.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={3}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_4.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={4}
                                                className="slick-slide slick-active slick-current"
                                                tabIndex={-1}
                                                aria-hidden="false"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_5.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={5}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_9.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={6}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_10.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={7}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_11.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={8}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_12.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={9}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_13.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={10}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_14.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={11}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_15.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={12}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_16.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={13}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_17.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={14}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_1.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={15}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_2.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={16}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_3.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={17}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_4.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={18}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_5.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={19}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_9.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={20}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_10.png"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={21}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_11.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={22}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_12.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={23}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_13.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={24}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_14.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={25}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_15.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={26}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_16.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={27}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 0 }}
                                            >
                                                <div>
                                                    <div
                                                        className="img-slider"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <img
                                                            src="https://images.staticcontent.io/banners/desktop_banner_17.jpg"
                                                            alt=""
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-role="none"
                                        className="slick-arrow slick-next"
                                        style={{ display: "block" }}
                                    >
                                        {" "}
                                        Next
                                    </button>
                                    <ul className="slick-dots" style={{ display: "block" }}>
                                        <li className="">
                                            <button>1</button>
                                        </li>
                                        <li className="">
                                            <button>2</button>
                                        </li>
                                        <li className="">
                                            <button>3</button>
                                        </li>
                                        <li className="">
                                            <button>4</button>
                                        </li>
                                        <li className="slick-active">
                                            <button>5</button>
                                        </li>
                                        <li className="">
                                            <button>6</button>
                                        </li>
                                        <li className="">
                                            <button>7</button>
                                        </li>
                                        <li className="">
                                            <button>8</button>
                                        </li>
                                        <li className="">
                                            <button>9</button>
                                        </li>
                                        <li className="">
                                            <button>10</button>
                                        </li>
                                        <li className="">
                                            <button>11</button>
                                        </li>
                                        <li className="">
                                            <button>12</button>
                                        </li>
                                        <li className="">
                                            <button>13</button>
                                        </li>
                                        <li className="">
                                            <button>14</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mobilelogin">
                        <section className="banner bannermobileshow">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="slick-slider slick-initialized" dir="ltr">
                                        <button
                                            type="button"
                                            data-role="none"
                                            className="slick-arrow slick-prev"
                                            style={{ display: "block" }}
                                        >
                                            {" "}
                                            Previous
                                        </button>
                                        <div className="slick-list">
                                            <div
                                                className="slick-track"
                                                style={{
                                                    width: 20416,
                                                    opacity: 1,
                                                    transform: "translate3d(-3520px, 0px, 0px)"
                                                }}
                                            >
                                                <div
                                                    data-index={-1}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_17.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={0}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_1.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={1}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_2.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={2}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_3.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={3}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_4.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={4}
                                                    className="slick-slide slick-active slick-current"
                                                    tabIndex={-1}
                                                    aria-hidden="false"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_5.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={5}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_9.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={6}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_10.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={7}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_11.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={8}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_12.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={9}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_13.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={10}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_14.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={11}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_15.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={12}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_16.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={13}
                                                    className="slick-slide"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                    style={{ outline: "none", width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_17.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={14}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_1.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={15}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_2.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={16}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_3.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={17}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_4.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={18}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_5.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={19}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_9.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={20}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_10.png"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={21}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_11.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={22}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_12.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={23}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_13.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={24}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_14.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={25}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_15.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={26}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_16.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-index={27}
                                                    tabIndex={-1}
                                                    className="slick-slide slick-cloned"
                                                    aria-hidden="true"
                                                    style={{ width: 704 }}
                                                >
                                                    <div>
                                                        <div
                                                            className="img-slider"
                                                            tabIndex={-1}
                                                            style={{ width: "100%", display: "inline-block" }}
                                                        >
                                                            <img
                                                                className="bannerimgmobile"
                                                                src="https://images.staticcontent.io/banners/mobile_banner_17.jpg"
                                                                alt=""
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            data-role="none"
                                            className="slick-arrow slick-next"
                                            style={{ display: "block" }}
                                        >
                                            {" "}
                                            Next
                                        </button>
                                        <ul className="slick-dots" style={{ display: "block" }}>
                                            <li className="">
                                                <button>1</button>
                                            </li>
                                            <li className="">
                                                <button>2</button>
                                            </li>
                                            <li className="">
                                                <button>3</button>
                                            </li>
                                            <li className="">
                                                <button>4</button>
                                            </li>
                                            <li className="slick-active">
                                                <button>5</button>
                                            </li>
                                            <li className="">
                                                <button>6</button>
                                            </li>
                                            <li className="">
                                                <button>7</button>
                                            </li>
                                            <li className="">
                                                <button>8</button>
                                            </li>
                                            <li className="">
                                                <button>9</button>
                                            </li>
                                            <li className="">
                                                <button>10</button>
                                            </li>
                                            <li className="">
                                                <button>11</button>
                                            </li>
                                            <li className="">
                                                <button>12</button>
                                            </li>
                                            <li className="">
                                                <button>13</button>
                                            </li>
                                            <li className="">
                                                <button>14</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="horse">
                        <div className="sub_path center-box">
                            <p>Horse Racing</p>
                        </div>
                        <div className="game-wrap col3  py-1 d-flex">
                            <span className="upcome">Coming Up</span>
                            <div className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars">
                                <div style={{ whiteSpace: "nowrap" }}>
                                    <ul className="horsedatahome">
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/horse.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">09:40</span>Rosehill (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/horse.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">09:40</span>Mackay (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/horse.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">09:44</span>Belmont (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/horse.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">09:44</span>Leeton (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/horse.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">09:48</span>Doomben (AUS) 22nd Jul
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="horse">
                        <div className="sub_path center-box">
                            <p>Greyhound Racing</p>
                        </div>
                        <div className="game-wrap col3  py-1 d-flex">
                            <span className="upcome">Coming Up</span>
                            <div className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars">
                                <div style={{ whiteSpace: "nowrap" }}>
                                    <ul className="horsedatahome">
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/dog.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">12:36</span>Bendigo (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/dog.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">12:42</span>Harlow 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/dog.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">12:49</span>Dubbo (AUS) 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/dog.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">12:57</span>Harlow 22nd Jul
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img
                                                    src="https://images.staticcontent.io/casino/banner/images/dog.svg"
                                                    className="horsehomeimg"
                                                />
                                                <span className="mr-1">12:59</span>Bendigo (AUS) 22nd Jul
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cricket mt-7">
                        <div className="sub_path center-box">
                            <p>Cricket</p>
                        </div>
                        <div className="game-wrap col3 mobile-view">
                            <div className="w-100 pt-1">
                                <div className="meventtitle">
                                    <span className="lvnow" />
                                    Bangladesh Women v India Women{" "}
                                </div>
                                <span className="livenow ml-2 livenownew">Live Now</span>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                    <span className="bm1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/bm-icon1.svg"
                                        />
                                    </span>
                                    <span className="fancy1 mr-1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/fancy-icon1.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 09:00</span> |
                                        Womens One Day Internationals
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a
                                                    id="btnBack0"
                                                    className="btn-back"
                                                    side="Back"
                                                    style={{}}
                                                >
                                                    <div style={{ minHeight: 13 }}>4.6</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay" style={{}}>
                                                    <div style={{ minHeight: 13 }}>4.8</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a
                                                    id="btnBack1"
                                                    className="btn-back"
                                                    side="Back"
                                                    style={{}}
                                                >
                                                    <div style={{ minHeight: 13 }}>1.27</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay" style={{}}>
                                                    <div style={{ minHeight: 13 }}>1.28</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">England v Australia </div>
                                <div className="d-inline float-right">
                                    <span className="bm1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/bm-icon1.svg"
                                        />
                                    </span>
                                    <span className="fancy1 mr-1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/fancy-icon1.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>19 Jul 15:30</span> |
                                        Test Matches
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a
                                                    id="btnBack0"
                                                    className="btn-back"
                                                    side="Back"
                                                    style={{}}
                                                >
                                                    <div style={{ minHeight: 13 }}>2.36</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay" style={{}}>
                                                    <div style={{ minHeight: 13 }}>2.38</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a
                                                    id="btnBack2"
                                                    className="btn-back"
                                                    side="Back"
                                                    style={{}}
                                                >
                                                    <div style={{ minHeight: 13 }}>1.74</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay" style={{}}>
                                                    <div style={{ minHeight: 13 }}>1.75</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>410</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>530</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">West Indies v India </div>
                                <div className="d-inline float-right">
                                    <span className="bm1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/bm-icon1.svg"
                                        />
                                    </span>
                                    <span className="fancy1 mr-1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/fancy-icon1.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>20 Jul 19:30</span> |
                                        Test Matches
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>30</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>32</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.9</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>4</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.4</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.41</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">
                                    Punjab Kings T10 v Delhi Capitals T10
                                </div>
                                <div className="d-inline float-right">
                                    <span className="bm1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/bm-icon1.svg"
                                        />
                                    </span>
                                    <span className="fancy1 mr-1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/fancy-icon1.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:00</span> |
                                        Indian Premier League Virtual Cricket T10
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.98</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.98</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Sri Lanka T10 v Afghanistan T10 </div>
                                <div className="d-inline float-right">
                                    <span className="bm1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/bm-icon1.svg"
                                        />
                                    </span>
                                    <span className="fancy1 mr-1">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/fancy-icon1.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 15:00</span> |
                                        International Virtual Cricket T10
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.98</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.98</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="h23">
                                <a
                                    className="viewmore"
                                    title="view more"
                                    style={{ cursor: "pointer" }}
                                >
                                    View More...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cricket mt-7">
                        <div className="sub_path center-box">
                            <p>Soccer</p>
                        </div>
                        <div className="game-wrap col3 mobile-view">
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Zambia (W) v Japan (W) </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 12:30</span> |
                                        FIFA Women's World Cup
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>10</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>10.5</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>6.2</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>6.4</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.34</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.35</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">England (W) v Haiti (W) </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 15:00</span> |
                                        FIFA Women's World Cup
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.02</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.03</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>50</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>55</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>170</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>240</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Kobe v Kawasaki </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 15:30</span> |
                                        Japanese J League
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>2.46</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>2.5</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.7</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>3.8</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>3.05</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Rio Ave v Academico de Viseu </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 15:30</span> |
                                        Portuguese League Cup
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.68</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.72</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>4</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>4.2</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>5.7</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>6.2</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Suwon FC v Gwangju FC </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 15:30</span> |
                                        South Korean K League 1
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.8</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>3.95</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.7</div>
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>3.85</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>2.1</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>2.14</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="h23">
                                <a
                                    className="viewmore"
                                    title="view more"
                                    style={{ cursor: "pointer" }}
                                >
                                    View More...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cricket mt-7">
                        <div className="sub_path center-box">
                            <p>Tennis</p>
                        </div>
                        <div className="game-wrap col3 mobile-view">
                            <div className="w-100 pt-1">
                                <div className="meventtitle">
                                    <span className="lvnow" />
                                    Fann Stollar v Ka Baindl{" "}
                                </div>
                                <span className="livenow ml-2 livenownew">Live Now</span>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:30</span> | WTA
                                        Budapest 2023
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.95</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>4</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.33</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.34</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Coppejans v Tirante </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:00</span> | ATP
                                        Hamburg 2023
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>2.12</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>2.28</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.79</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.9</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">D Saville v Bar Palicova </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:00</span> | WTA
                                        Hamburg 2023
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.44</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.45</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.2</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>3.3</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Garin v Ma Topo </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:00</span> | ATP
                                        Hamburg 2023
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.32</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.37</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>3.75</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>4.1</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="w-100 pt-1">
                                <div className="meventtitle">Ramos-Vinolas v Kecmanovic </div>
                                <div className="d-inline float-right">
                                    <span className="l-tv">
                                        <img
                                            alt=""
                                            src="https://images.staticcontent.io/dev/uimg/tv.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-100" style={{ display: "block" }}>
                                <div className="mtitle">
                                    <span>
                                        <i className="flaticon-clock" /> <span>22 Jul 14:30</span> | ATP
                                        Gstaad 2023
                                    </span>
                                </div>
                                <div className="col-info d-inline-flex float-right mr-1">
                                    <a
                                        className="add-pin-mobile"
                                        title="Add to Multi Markets"
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            <table className="table w-100 game-list-col mb-1 ">
                                <tbody>
                                    <tr />
                                    <tr>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack0" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>2.34</div>
                                                </a>
                                                <a id="btnLay0" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>2.4</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack2" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                                <a id="btnLay2" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center w33 border-bt-0">
                                            <div className="">
                                                <a id="btnBack1" className="btn-back" side="Back">
                                                    <div style={{ minHeight: 13 }}>1.72</div>
                                                </a>
                                                <a id="btnLay1" className="btn-lay" side="Lay">
                                                    <div style={{ minHeight: 13 }}>1.74</div>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-bottom-1">&nbsp;</div>
                            <div className="h23">
                                <a
                                    className="viewmore"
                                    title="view more"
                                    style={{ cursor: "pointer" }}
                                >
                                    View More...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="splashscreenmodalpopup"
                className={`modal fade ${loginpopup} sign-up-form depositpopup`}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-modal="true"
                style={{ display: loginmodeldisplay }}
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content hebebox b-0">
                        <div className="modal-body p-0" id="content">
                            <div className="splash-image-parent-div">
                                <button
                                    type="button"
                                    className="close btncloseset"
                                    onClick={() => { setloginpopup(''); setloginmodeldisplay('none') }}
                                >
                                    ×
                                </button>
                                <img
                                    className="splash-image-img"
                                    src="https://images.staticcontent.io/splashpopup/CLIENT_splashpopup.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" />
            </div>
        </body>
    );
}

export default Home;
