import React, { Component } from 'react';

// import FacebookLogin from 'react-facebook-login';
import logoFB from '../images/iconFB.png';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './login.css';
import Cookies from 'js-cookie';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: ''
    }

    responseFacebook = response => {
        console.log('response', response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email
        });
        console.log('this state',this.state)
        Cookies.set('account', this.state);
        // const a = Cookies.get('account');
        // console.log('this Cookie', a); 
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            browserHistory.push("/home");               
        } else {
            fbContent = (<FacebookLogin
                appId="1075153362660059"
                autoLoad={false}
                fields="name,email"
                callback={this.responseFacebook}
                render={renderProps => (
                    <div onClick={renderProps.onClick} className="link-sign-in btn-sign-in">
                        <img src={logoFB} width="24px"/>
                        <span>Login with Facebook</span>
                    </div>
                )}
            />);
        }

        return (
            <div >
                {fbContent}
            </div>
        )
    }
}