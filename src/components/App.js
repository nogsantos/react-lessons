import React from 'react';
import Header from './Header';
import Main from './Main';
import {Row, Col} from 'react-materialize';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  whidth: 100%;
`;
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
            <Wrapper>
                <Row>
                    <Col s={12} m={12} l={6}>
                        <Header />
                    </Col>
                    <Col s={12} m={12} l={6}>
                        <Main />
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}

export default App;
