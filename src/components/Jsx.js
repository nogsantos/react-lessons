import React from 'react';
/**
 *
 *
 * @class Jsx
 * @extends {React.Component}
 */
class Jsx extends React.Component {
    /**
     *
     *
     * @returns
     * @memberof Jsx
     */
    render() {
        const props = {
            className: 'container',
            children: 'hello world'
        };
        return (
            <span className="flow-text" { ...props} />
        );
    }
}

export default Jsx;
