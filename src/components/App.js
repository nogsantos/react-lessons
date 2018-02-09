import React from 'react';
import Header from './Header';
import Main from './Main';
/**
 * App default
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    /**
     * Render
     *
     * @returns
     * @memberof App
     */
    render() {
        return(
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
