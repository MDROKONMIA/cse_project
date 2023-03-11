
import logo from "../../logo/logo1.png";


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
                { title: "Teachers", url: "/teachers" },
                { title: "Students", url: "/" },
                { title: "staffs", url: "/staffs" },
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
                { title: "Notice", url: "/notice" },
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
                                            <p className="phone-number">+8801781013468</p>
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

                    <div className="header-bottom-area header-sticky w-full">
                        <div className="container">
                            <div className="row items-center py-3">
                                <div className="xl:w-1/5 lg:w-1/5  md:w-1/2 w-1/2">
                                    {/* logo */}
                                    <div className="logo m-auto flex">
                                        <a href="/" className="w-full flex items-center justify-center">
                                            <img src={logo} alt="" width={"100px"} height={"100px"} />
                                        </a>
                                    </div>
                                </div>

                                {/* {university and deptName} */}

                                <div className="xl:4/5 lg:w-4/5 md:w-1/2 w-1/2">
                                    <div className=" w-full text-center">
                                        <h1 className="font-extrabold text-4xl">
                                            Department of Compuer Science & Enginnering
                                        </h1>
                                        <h1 className="font-bold text-lg"> Established: 12 October, 2008</h1>
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