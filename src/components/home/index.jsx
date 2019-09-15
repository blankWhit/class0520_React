import React,{Component} from 'react';
import withCheckLogin from '@conts/with-check-login';

import BasicLayout from '../basic-layout';

@withCheckLogin
class Home extends Component{

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}


export default Home;