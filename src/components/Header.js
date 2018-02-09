import React from 'react';
import { Link } from 'react-router-dom';
/**
 * The Header creates links that can be used to navigate between routes.
 *
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
    /**
     *
     *
     * @returns
     * @memberof Header
     */
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/jsx'>Jsx</Link></li>
                        <li><Link to='/components'>Components</Link></li>
                        <li><Link to='/proptypes'>Proptypes</Link></li>
                        <li><Link to='/re-rendering'>Re-rendering</Link></li>
                        <li><Link to='/style-components'>Style Components</Link></li>
                        <li><Link to='/event-handlers'>Event Handlers</Link></li>
                        <li><Link to='/component-state'>Component State</Link></li>
                        <li><Link to='/class-components'>Class Components</Link></li>
                        <li><Link to='/manipulate-the-dom'>Manipulate The Dom</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
