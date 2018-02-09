import React from 'react';

/**
 *
 *
 * @class Components
 * @extends {React.Component}
 */
class Components extends React.Component {
    /**
     *
     *
     * @memberof Components
     */
    Message = props => {
        return (
            <div>{props.children} <b>World!</b></div>
        );
    }
    /**
     *
     *
     * @returns
     * @memberof Components
     */
    render(){
        return (
            <div className = "container" >
                <this.Message><i>Hello</i></this.Message>
                <this.Message> <i>Goodbye</i> </this.Message>
            </div>
        );
    }
}

export default Components;
