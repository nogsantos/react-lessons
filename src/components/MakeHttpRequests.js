import React from 'react';
import User from './User';
import { Input } from 'react-materialize';
/**
 *
 *
 * @class MakeHttpRequests
 * @extends {React.Component}
 */
class MakeHttpRequests extends React.Component {
    /**
     * Creates an instance of MakeHttpRequests.
     * @param {any} props
     * @memberof MakeHttpRequests
     */
    constructor(props){
        super(props);

        this.state = {
            username: undefined
        };
    }
    /**
     *
     *
     * @memberof MakeHttpRequests
     */
    handleSubmit = event => {
        event.preventDefault();
        if(event.target.elements.username.value !== ''){
            this.setState({
                username: event.target.elements.username.value,
            });
        }
    }
    /**
     *
     *
     * @returns
     * @memberof MakeHttpRequests
     */
    render() {
        const {
            username
        } = this.state;
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Input type="text" s={12} label="Github username" name="username" />
                </form >
                {
                    username ? ( <User username = { username }/>) : null
                }
            </div>
        );
    }
}

export default MakeHttpRequests;
