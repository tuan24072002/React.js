import React from 'react';
import './NavbarStyle.scss';
import { MenuItems } from './MenuItems.js';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'><a href='/'>Trippy</a></h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-times fa-beat" : "fa-solid fa-bars fa-beat"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}><i class={item.icon}></i>{item.title}</Link>
                            </li>
                        );

                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }
}
export default Navbar;