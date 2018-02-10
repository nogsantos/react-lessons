import React from 'react';
import axios from 'axios';
import { Collection, CollectionItem, ProgressBar } from 'react-materialize';
/**
 *
 *
 * @class User
 * @extends {React.Component}
 */
class User extends React.Component {
    /**
     * Creates an instance of User.
     * @param {any} props
     * @memberof User
     */
    constructor(props){
        super(props);

        this.state = {
            id: undefined,
            databaseId: undefined,
            bio: undefined,
            loaded: false
        };
    }
    /**
     *
     *
     * @memberof User
     */
    fetch = () => {
        axios({
            url: 'https://api.github.com/graphql',
            method: 'post',
            data: {
                query: `{
                            user(login: "${this.props.username}") {
                                id,
                                databaseId,
                                bio
                            }
                        }`,
            },
            headers: {
                Authorization: `bearer [TOKEN]`,
            },
        }).then(response => {
            if(response.data.data.user){
                this.setState({
                    loaded: true,
                    id: response.data.data.user.id,
                    databaseId: response.data.data.user.databaseId,
                    bio: response.data.data.user.bio
                });
            }
        }, error => {
            this.setState({
                error,
                loaded: true,
            });
        });
    }
    /**
     *
     *
     * @memberof User
     */
    componentDidMount() {
        this.fetch();
    }
    /**
     *
     *
     * @param {any} prevProps
     * @memberof User
     */
    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            this.fetch();
        }
    }
    /**
     *
     *
     * @returns
     * @memberof User
     */
    render() {
        return (
            <div>
                {
                    !this.state.loaded ?
                        <ProgressBar />
                    :
                        <Collection>
                            <CollectionItem><b>ID:</b> {this.state.databaseId} </CollectionItem>
                            <CollectionItem><b>COD:</b> {this.state.id} </CollectionItem>
                            <CollectionItem><b>BIO:</b> {this.state.bio} </CollectionItem>
                        </Collection>
                }
            </div>
        );
    }
}

export default User;
