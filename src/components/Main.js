import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Jsx from './Jsx';
import Components from './Components';
import PropTypesExample from './Proptypes';
import ReRendering from './ReRendering';
import StyleComponents from './StyleComponents';
import EventHandlers from './EventHandlers';
import ComponentState from './ComponentState';
import ClassComponents from './ClassComponents';
import ManipulateTheDom from './ManipulateTheDom';
import BasicForms from './BasicForms';
import ControllingFormValues from './ControllingFormValues';
import RenderingLists from './RenderingLists';
import MakeHttpRequests from './MakeHttpRequests';
/**
 * The Main component renders one of the three provided
 * Routes (provided that one matches). Both the /roster
 * and /schedule routes will match any pathname that starts
 * with /roster or /schedule. The / route will only match
 * when the pathname is exactly the string "/"
 *
 * @class Main
 * @extends {React.Component}
 */
class Main extends React.Component {
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/jsx' component={Jsx}/>
                    <Route path='/components' component={Components}/>
                    <Route path='/proptypes' component={PropTypesExample}/>
                    <Route path='/re-rendering' component={ReRendering}/>
                    <Route path='/style-components' component={StyleComponents}/>
                    <Route path='/event-handlers' component={EventHandlers}/>
                    <Route path='/component-state' component={ComponentState}/>
                    <Route path='/class-components' component={ClassComponents}/>
                    <Route path='/manipulate-the-dom' component={ManipulateTheDom}/>
                    <Route path='/basic-forms' component={BasicForms}/>
                    <Route path='/controlling-form-values' component={ControllingFormValues}/>
                    <Route path='/rendering-lists' component={RenderingLists}/>
                    <Route path='/make-http-requests' component={MakeHttpRequests}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
