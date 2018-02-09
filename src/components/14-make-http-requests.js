// import React from 'react';
// import axios from 'axios';

// export default = class User extends React.Component {
//     state = {
//         id: undefined,
//         databaseId: undefined,
//         bio: undefined,
//         loaded: false
//     };
//     /*
//      *
//      */
//     fetch = () => {
//         axios({
//             url: 'https://api.github.com/graphql',
//             method: 'post',
//             data: {
//                 query: `{
//                             user(login: "${this.props.username}") {
//                                 id,
//                                 databaseId,
//                                 bio
//                             }
//                         }`,
//             },
//             headers: {
//                 Authorization: `bearer [TOKEN]`,
//             },
//         }).then(response => {
//             this.setState({
//                 loaded: true,
//                 id: response.data.data.user.id,
//                 databaseId: response.data.data.user.databaseId,
//                 bio: response.data.data.user.bio
//             });
//         }, error => {
//             this.setState({
//                 error,
//                 loaded: true,
//             });
//         });
//     }
//     /*
//      *
//      */
//     componentDidMount() {
//         this.fetch();
//     }
//     /*
//      *
//      */
//     componentDidUpdate(prevProps) {
//         if (prevProps.username !== this.props.username) {
//             this.fetch();
//         }
//     }
//     /*
//      *
//      */
//     render() {
//         console.log(this.state)
//         return ( <
//             div >
//             <
//             label > ID: {
//                 this.state.databaseId
//             } < /label> <
//             label > COD: {
//                 this.state.id
//             } < /label> <
//             label > BIO: {
//                 this.state.bio
//             } < /label> < /
//             div >
//         );
//     }
// }
// class App extends React.Component {
//         state = {
//             username: undefined
//         };
//         handleSubmit = e => {
//             e.preventDefault();
//             this.setState({
//                 username: this.inputNode.value,
//             });
//         }
//         /*
//          *
//          */
//         render() {
//             const {
//                 username
//             } = this.state;
//             return ( <
//                 div >
//                 <
//                 form onSubmit = {
//                     this.handleSubmit
//                 } >
//                 <
//                 input type = "text"
//                 ref = {
//                     node => (this.inputNode = node)
//                 }
//                 /> < /
//                 form > {
//                     username ? ( < User username = {
//                             username
//                         }
//                         />) : null
//                     } <
//                     /div>
//                 );
//             }
//         }
//         // ReactDOM.render( < App / > , document.getElementById('root'));
