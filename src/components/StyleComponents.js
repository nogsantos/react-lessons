import React from 'react';
/**
 *
 *
 * @class StyleComponents
 * @extends {React.Component}
 */
class StyleComponents extends React.Component {
    /**
     *
     *
     * @memberof StyleComponents
     */
    Box = ({
        style,
        size,
        className = '',
        ...rest
    }) => {
        const sizeClassName = size ? `${size}` : '';
        return (
            <div
                className={`box ${className} ${sizeClassName}`}
                style={{paddingLeft: 20, ...style}}
                {...rest}
            />
        );
    }
    /**
     *
     *
     * @returns
     * @memberof StyleComponents
     */
    render(){
        return(
            <div>
                <this.Box size="small" style={{backgroundColor: 'red'}}>Small Box</this.Box>
                <this.Box size="medium" style={{backgroundColor: 'green'}}>Medium Box</this.Box>
                <this.Box size="large" style={{backgroundColor: 'blue'}}>Large Box</this.Box>
            </div>
        );
    }
}

export default StyleComponents;

