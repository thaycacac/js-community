import React, { Component } from 'react';
import { login } from '../../reducers/login/actions';
import { connect } from 'react-redux';

// import FacebookLogin from 'react-facebook-login';
import logoFB from '../images/iconFB.png';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './login.css';
import Cookies from 'js-cookie';

class Facebook extends Component {
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
            email: response.email,
            picture: response.picture.data.url
        });
        console.log('this state',this.state)
        Cookies.set('account', this.state);
        this.props.login(this.state.email, this.state.picture, this.state.name);
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            browserHistory.push("/home");               
        } else {
            fbContent = (<FacebookLogin
                appId="1075153362660059"
                autoLoad={false}
                fields="name,email,picture"
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

const mapDispatchToProps = {
    login: login
}

export default connect(null, mapDispatchToProps)(Facebook);