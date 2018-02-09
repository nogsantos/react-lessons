import React from 'react';
/**
 *
 *
 * @class ReRendering
 * @extends {React.Component}
 */
class ReRendering extends React.Component {
    /**
     * Creates an instance of ReRendering.
     * @param {any} props
     * @memberof ReRendering
     */
    constructor(props){
        super(props);
        this.state = {
            timer: new Date().toLocaleTimeString()
        };
    }
    /**
     *
     *
     * @memberof ReRendering
     */
    componentDidMount() {
        this.timer =  setInterval(this.setTime);
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
     * @memberof ReRendering
     */
    setTime = () => {
        this.setState({
            timer: new Date().toLocaleTimeString()
        });
    }
    /**
     *
     *
     * @memberof ReRendering
     */
    Clock = delay => {
        return (
            <div className="text-large">
                {this.state.timer}
            </div>
        );
    }
    /**
     *
     *
     * @returns
     * @memberof ReRendering
     */
    render() {
        return (
            <div>
                <p>It's</p>
                <this.Clock />
            </div>
        );
    }
}

export default ReRendering;
