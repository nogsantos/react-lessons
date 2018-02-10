import React from 'react';
import { Row, Button, Input, CardPanel } from 'react-materialize';
/**
 *
 *
 * @class BasicForms
 * @extends {React.Component}
 */
class BasicForms extends React.Component {
    /**
     * Creates an instance of BasicForms.
     * @param {any} props
     * @memberof BasicForms
     */
    constructor(props){
        super(props);

        this.state = {
            error: this.getErrorMessage('')
        };
    }
    /**
     *
     *
     * @memberof BasicForms
     */
    handleSubmit = event => {
        event.preventDefault();
        const value = event.target.elements.password.value;
        this.setState({
            error: this.getErrorMessage(value)
        })
        if (this.state.error) {
            alert(`error: ${this.state.error}`)
        } else {
            alert(`success: ${value}`)
        }
    }
    /**
     *
     *
     * @memberof BasicForms
     */
    handleChange = event => {
        const {value} = event.target;
        this.setState({
            error: this.getErrorMessage(value)
        });
    }
    /**
     *
     *
     * @memberof BasicForms
     */
    Form = () => {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <Row>
                    <span className="flow-text">The passsssword</span>
                </Row>
                <Row>
                    <Input label="Place here" type="password" onChange={this.handleChange} s={12} name="password" />
                </Row>
                <Row>
                        {
                            this.state.error ? (
                                <CardPanel className="red lighten-4 red-text">
                                    {this.state.error}
                                </CardPanel>
                            ) : null
                        }
                </Row>
                <Row>
                    <Button disabled={Boolean(this.state.error)} type="submit">Submit</Button>
                </Row>
            </form>
        );
    }
    /**
     *
     *
     * @memberof BasicForms
     */
    getErrorMessage = value => {
        if (value.length < 3) {
            return `Value must be at least 3 characters, but is only ${value.length}`
        }
        if (!/[A-Z]/.test(value)) {
            return `Value does not include an Upper Letter but it should!`
        }
        if (!/[0-9]/.test(value)) {
            return `Value does not include a number but it should!`
        }
        return null
    }
    /**
     *
     *
     * @returns
     * @memberof BasicForms
     */
    render() {
        return (
            <this.Form />
        )
    }
}

export default BasicForms;
