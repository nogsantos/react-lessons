import React from 'react';
/**
 *
 *
 * @class SayHello
 * @extends {React.Component}
 */
class ComponentState extends React.Component {
    /**
     * Creates an instance of ComponentState.
     * @param {any} props
     * @memberof ComponentState
     */
    constructor(props){
        super(props);

        this.state = {
            lapse : 0,
            running: false
        };
    }
    /**
     *
     *
     * @memberof ReRendering
     */
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
        this.timer = false;
    }
    /**
     *
     *
     * @memberof ComponentState
     */
    handleRunClick = () => {
        this.setState(state => {
            if(state.running){
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timer = setInterval(() => {
                    this.setState({
                        lapse: Date.now() - startTime
                    });
                });
            }
            return {running: !state.running}
        });
    }
    /**
     *
     *
     * @memberof ComponentState
     */
    handleClearClick = () => {
        clearInterval(this.timer);
        this.setState({lapse : 0, running: false})
    }
    /**
     *
     *
     * @returns
     * @memberof ComponentState
     */
    render(){
        const {lapse, running} = this.state;
        return (
            <div>
                <div className="flow-text">{lapse}ms</div>
                <button onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </div>
        );
    }

}

export default ComponentState;
