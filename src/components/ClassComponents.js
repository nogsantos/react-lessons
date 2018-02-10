import React from 'react';
import { Button } from 'react-materialize';
/**
 *
 *
 * @class ClassComponents
 * @extends {React.Component}
 */
class ClassComponents extends React.Component {
    /**
     * Creates an instance of ClassComponents.
     * @param {any} props
     * @memberof ClassComponents
     */
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }
    /**
     *
     *
     * @memberof ClassComponents
     */
    handleClick = () => {
        this.setState(({count}) => (
            {
                count: count + 1
            }
        ));
    }
    /**
     *
     *
     * @returns
     * @memberof ClassComponents
     */
    render() {
        return (
            <Button floating large className='purple' waves='light' onClick={this.handleClick}>
                {this.state.count}
            </Button>
        );
    }
}

export default ClassComponents;
