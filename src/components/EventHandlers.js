import React from 'react';
import { Button } from 'react-materialize';
/**
 *
 *
 * @class EventHandlers
 * @extends {React.Component}
 */
class EventHandlers extends React.Component {
    /**
     * Creates an instance of EventHandlers.
     * @param {any} props
     * @memberof EventHandlers
     */
    constructor(props){
        super(props);

        this.state = {
            eventCount: 0,
            username: ''
        }
    }
    /**
     *
     *
     * @memberof EventHandlers
     */
    increment = () => {
        this.setState({
            eventCount : this.state.eventCount + 1
        });
    }
    /**
     *
     *
     * @memberof EventHandlers
     */
    updateUserName = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    /**
     *
     *
     * @returns
     * @memberof EventHandlers
     */
    render(){
        return (
            <div>
                <p>There have been <span className="text-large">{this.state.eventCount}</span> events</p>
                <div>
                    <Button onClick={this.increment}>
                        <span role="img" aria-label="img">R E A C T</span>
                    </Button>
                </div>
                <p>You typed:</p>
                <div className="text-large">{this.state.username}</div>
                <p><input type="text" onChange={this.updateUserName} /></p>
            </div>
        );
    }

}

export default EventHandlers;
