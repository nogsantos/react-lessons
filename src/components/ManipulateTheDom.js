import React from 'react';
import VanillaTilt from 'vanilla-tilt';
/**
 *
 *
 * @class ManipulateTheDom
 * @extends {React.Component}
 */
class ManipulateTheDom extends React.Component {
    /**
     *
     *
     * @memberof ManipulateTheDom
     */
    componentDidMount(){
        VanillaTilt.init(this.rootNode, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': .5,
        });
    }
    /**
     *
     *
     * @memberof ManipulateTheDom
     */
    Tilt = () => {
        return(
            <div
                ref={node => this.rootNode = node}
                className="tilt-root">
                <div className="tilt-child">
                    <div className="totally-centered">
                        <div className="totally-centered">
                            vanilla-tilt.js
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /**
     *
     *
     * @returns
     * @memberof ManipulateTheDom
     */
    render() {
        return (
            <div>
                <this.Tilt />
            </div>
        );
    }
}

export default ManipulateTheDom;
