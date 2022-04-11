import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blogs',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation({ user }) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
            <span className="menu-title">Kshatriya Maratha History</span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>

                        </li>
                    ))
                }
                </ul>
                <div className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </div>
            </div>
            <i className="icon ionicons ion-ios-menu" onClick={(ev) => setMenuActive(!menuActive)} />

        </nav>)
}