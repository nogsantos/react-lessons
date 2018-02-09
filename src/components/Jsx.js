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
            <div { ...props} />
        );
    }
}

export default Jsx;
