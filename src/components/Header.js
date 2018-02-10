import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-materialize';

/**
 * The Header creates links that can be used to navigate between routes.
 *
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {

    constructor(props){
        super(props);

        this.menu = [
            {link: '/', title: 'Home'},
            {link: '/jsx', title: 'Jsx'},
            {link: '/components', title: 'Components'},
            {link: '/proptypes', title: 'Proptypes'},
            {link: '/re-rendering', title: 'Re-rendering'},
            {link: '/style-components', title: 'Style Components'},
            {link: '/style-components', title: 'Style Components'},
            {link: '/event-handlers', title: 'Event Handlers'},
            {link: '/component-state', title: 'Component State'},
            {link: '/class-components', title: 'Class components'},
            {link: '/manipulate-the-dom', title: 'Manipulate the DOM'},
            {link: '/basic-forms', title: 'Basic forms'},
            {link: '/rendering-lists', title: 'Rendering lists'},
            {link: '/make-http-requests', title: 'Make HTTP requests'},
        ];

    }
    /**
     *
     *
     * @returns
     * @memberof Header
     */
    render(){
        return (
            this.menu.map((element, i) => {
                return (
                    <Row key={i}>
                        <Col s={12}><Button flat={true} className="blue lighten-5 white-text"><Link to={element.link}>{element.title}</Link></Button></Col>
                    </Row>
                )
            })
        );
    }
}

export default Header;
