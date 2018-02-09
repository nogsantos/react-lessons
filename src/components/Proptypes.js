import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 *
 * @class SayHello
 * @extends {React.Component}
 */
class SayHello extends React.Component {

    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    };

    render() {
        const {firstName, lastName} = this.props;
        return (
            <div>
                Hello {firstName} {lastName}!
            </div>
        );
    }
}
/**
 *
 *
 * @class PropTypesExample
 * @extends {React.Component}
 */
class PropTypesExample extends React.Component {
    /**
     * Must return this:
     *
     * Warning: Failed prop type: Invalid prop `lastName` of type `boolean` supplied to `SayHello`, expected `string`.
     */
    render(){
        return (
            <div>
                <SayHello firstName="Lis" lastName={false} />
                <div>
                    <xmp>
                        &lt;SayHello firstName="Lis" lastName={false} /&gt;
                    </xmp>
                </div>
                <div>
                    <xmp>
                        Warning: Failed prop type: Invalid prop `lastName` of type `boolean` supplied to `SayHello`, expected `string`.
                    </xmp>
                </div>
            </div>
        );
    }
}

export default PropTypesExample;
