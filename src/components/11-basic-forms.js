
        // class NameForm extends React.Component {
        //     state = {error: this.props.getErrorMessage('')};
        //     handleSubmit = event => {
        //         event.preventDefault();
        //         const value = event.target.elements.password.value;
        //         const error = this.props.getErrorMessage(value);
        //         if (error) {
        //             alert(`error: ${error}`)
        //         } else {
        //             alert(`success: ${value}`)
        //         }
        //     }
        //     handleChange = event => {
        //         const {value} = event.target;
        //         this.setState({
        //             error: this.props.getErrorMessage(value)
        //         });
        //     }
        //     render() {
        //         const {error} = this.state;
        //         return (
        //             <form autocomplete="off" onSubmit={this.handleSubmit}>
        //                 <label>The passsssword
        //                     <input
        //                         type="password"
        //                         onChange={this.handleChange}
        //                         name="password"
        //                     />
        //                 </label>
        //                 {error ? (<div style={{color: 'red'}}>{error}</div>) : null}
        //                 <button
        //                     disabled={Boolean(error)}
        //                     type="submit">
        //                     Submit
        //                 </button>
        //             </form>
        //         )
        //     }
        // }
        // ReactDOM.render(
        //     <NameForm
        //       getErrorMessage={value => {
        //         if (value.length < 3) {
        //           return `Value must be at least 3 characters, but is only ${value.length}`
        //         }
        //         if (!/[A-Z]/.test(value)) {
        //           return `Value does not include an Upper Letter but it should!`
        //         }
        //         if (!/[0-9]/.test(value)) {
        //           return `Value does not include a number but it should!`
        //         }
        //         return null
        //       }}/>,
        //     document.getElementById('root'),
        //   )
