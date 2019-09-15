import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import NotMatch from '@comps/not-match';
import BasicLayout from '@comps/basic-layout';
import routes from './config/routes';


class App extends Component{

    render() {
        return (
            <Router>
                <BasicLayout>

                    <Switch>
                        {
                            routes.map((route,index)=>{
                                return <Route {...route} key={index} />
                            })
                        }
                        <Route component={NotMatch} />
                    </Switch>

                </BasicLayout>

            </Router>

        );
    }

  }

export default App;