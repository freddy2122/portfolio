import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher ';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';
    const { t } = useTranslation();
    return (
        <header >
            <nav className="navbar navbar-expand-lg d-flex align-items-center fixed-top" style={{ backgroundColor: "#FFE9D9", padding: "16px", borderBottom: '1px solid black' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" style={{ height: "40px" }} />
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22.5px", fontWeight: 800, paddingTop: "3px", paddingLeft: '8px' }}>
                            Constant-Law
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ outline: 'none', boxShadow: 'none', border: 'none' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" style={{ width: '70%', backgroundColor: '#095D89' }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header p-3">
                            {/*  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5> */}
                            <button type="button" className="btn-close text-reset text-white" style={{ backgroundColor: '#FFB646', color: 'white' }} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center bg-black rounded-5 p-2 d-none d-md-flex">
                                <Link className={`nav-link ${isActive('/')}`} style={{ color: 'white' }} aria-current="page" to="/">
                                    <span className="first-letter">{t('4').charAt(0)}</span>{t('4').slice(1)}
                                </Link>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/about')}`} style={{ color: 'white' }} to="/about">
                                    <span className="first-letter">{t('2').charAt(0)}</span>{t('2').slice(1)}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/projects')}`} style={{ color: 'white' }} to="/projects">
                                    <span className="first-letter">{t('5').charAt(0)}</span>{t('5').slice(1)}
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/blog')}`} style={{ color: 'white' }} to="/blog">
                                        <span className="first-letter">B</span>log
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/contact')}`} style={{ color: 'white' }} to="/contact">
                                    <span className="first-letter">{t('3').charAt(0)}</span>{t('3').slice(1)}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center  rounded-5 p-2 d-flex d-lg-none">
                                <li className="nav-item">
                                    <Link className="nav-link text-white active" aria-current="page" to="/">{t('4')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">{t('2')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/projects">{t('5')}</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to="/blog">Blog</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">{t('3')}</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item">
                                    <Link className="nav-link text-white active" aria-current="page" to="#">
                                        <i className="fa-solid fa-magnifying-glass text-white" style={{ backgroundColor: "#095D89", padding: "10px", borderRadius: "50%" }}></i>
                                    </Link>
                                </li>
                                <LanguageSwitcher />

                                <li className="nav-item">
                                    <Link className="nav-link" to="" style={{ fontSize: "19px", color: "#095D89" }}>{t('7')} <i className="fas fa-arrow-right"></i></Link>
                                </li>
                                <li className="nav-item d-flex d-lg-none">
                                    <Link className="nav-link text-white" to="" style={{ fontSize: "19px", }}>{t('7')} <i className="fas fa-arrow-right"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
