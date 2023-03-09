
import logo from "../../logo/logo.png";


function Header() {

    const mainMenu = [
        { title: "Home", url: "/" },
        {
            title: "About",
            url: "/",
            submenu: [
                { title: "About CSE", url: "/" },
                { title: "History", url: "/" },
                { title: "Vision", url: "/" },
            ],
        },
        {
            title: "Facilities",
            url: "/",
            submenu: [
                { title: "Class Room", url: "/" },
                { title: "Labratories", url: "/" },
                { title: "Seminer", url: "/" },
                { title: "Others", url: "/" },
            ],
        },
        {
            title: "Academic",
            url: "/",
            submenu: [
                { title: "Events", url: "/" },
                { title: "B.Sc Admission", url: "/" },
                { title: "M.Sc Admission", url: "/" },
                { title: "Seminer", url: "/" },
                { title: "Others", url: "/" },
            ],
        },
        {
            title: "People",
            url: "/",
            submenu: [
                { title: "Teachers", url: "/" },
                { title: "Students", url: "/" },
            ],
        },
        {
            title: "Reachers",
            url: "/",
            submenu: [
                { title: "Publisher", url: "/" },
            ],
        },
        {
            title: "Notification/Anouncement",
            url: "/",
            submenu: [
                { title: "Notice", url: "/" },
                { title: "News Events", url: "/" },
            ],
        },
    ];

    return (
        <>
            <header id="home">
                <div className="w-full">
                    <div className="header-top bg-primary_bg dark:bg-black">
                        <div className="container">
                            <div className="row">
                                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                                    <div className="header-contact-info flex">
                                        <div className="header-contact header-contact-phone">
                                            <span className="ti-headphone"></span>
                                            <p className="phone-number">+0123456789</p>
                                        </div>
                                        <div className="header-contact header-contact-email">
                                            <span className="ti-email"></span>
                                            <p className="email-name">support@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
                                    <div className="header-social-icon-list">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span className="ti-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="ti-twitter-alt"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="ti-dribbble"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="ti-google"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="ti-pinterest"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-bottom-area header-sticky">
                        <div className="container">
                            <div className="row items-center py-3">
                                <div className="xl:w-2/5 lg:w-2/5  md:w-1/2 w-1/2">
                                    {/* logo */}
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src={logo} alt="" height={"1000"} />
                                        </a>
                                    </div>
                                </div>

                                {/* {university and deptName} */}

                                <div className="xl:3/5 lg:w-3/5 md:w-1/2 w-1/2">
                                    <div className="text-center">
                                        <h1 className="font-extrabold text-4xl">
                                            Department of Compuer Science & Enginnering
                                        </h1>
                                        <h1 className="font-bold text-lg"> Estalished: 2008</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="main-menu">
                            <nav id="mobile-menu"></nav>
                            <ul className="">
                                {mainMenu.map((menu) => (
                                    <>
                                        <li>
                                            <a href={menu.url}>{menu.title}</a>

                                            {menu.submenu ? (
                                                <ul className="submenu">
                                                    {menu.submenu.map((el) => (
                                                        <li>
                                                            <a href={el.url}>{el.title}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                ""
                                            )}
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;