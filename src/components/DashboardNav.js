import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./DashboardNav.css";

import { SmileOutlined } from '@ant-design/icons';
import { IdcardOutlined } from '@ant-design/icons';
import { ReconciliationOutlined } from '@ant-design/icons';
import { ShakeOutlined } from '@ant-design/icons';
import { ArrowDownOutlined } from '@ant-design/icons';


const DashboardNav = () => {
    const [logo, setLogo] = useState('CE');



    return (
        <>
            <div className="area" ></div>
            <nav className="main-menu"
                onMouseOver={() => {
                    setLogo("Christian Eiteneuer")
                }}
                onMouseOut={() => {
                    setLogo("CE")
                }}
            >
                <div className='logo'><h2>{logo}</h2></div>
                <ul>
                    <li>
                        <span className="nav-text">
                            <Link to="/" className={`nav-link nav-link-custom `}>
                                <SmileOutlined className='h3 nav-link-text-custom' />
                                Hallo
                            </Link>
                        </span>
                    </li>
                    <li className="has-subnav">
                        <span className="nav-text">
                            <Link to="/about" className={`nav-link nav-link-custom`}>
                                <IdcardOutlined className='h3 nav-link-text-custom' />
                                Über mich
                            </Link>
                        </span>
                    </li>
                    <li className="has-subnav">
                        <span className="nav-text">
                            <Link to="/portfolio" className={`nav-link nav-link-custom `}>
                                <ReconciliationOutlined className="h3 nav-link-text-custom" />
                                Portfolio
                            </Link>
                        </span>
                    </li>
                    <li className="has-subnav">
                        <span className="nav-text">
                            <Link to="/contact" className={`nav-link nav-link-custom`}>
                                <ShakeOutlined className='h3 nav-link-text-custom' />
                                Kontakt
                            </Link>
                        </span>

                    </li>
                    <li className="has-subnav">
                        <span className="nav-text">
                            <Link to="/download" className={`nav-link nav-link-custom`}>
                                <ArrowDownOutlined  className='h3 nav-link-text-custom' />
                                Downloads
                            </Link>
                        </span>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default DashboardNav;