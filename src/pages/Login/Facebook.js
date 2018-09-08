import React, { Component } from 'react';
import { login } from '../../reducers/login/actions';
import { connect } from 'react-redux';
import toastr from 'toastr';
// import FacebookLogin from 'react-facebook-login';
import logoFB from '../images/iconFB.png';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './login.css';
class Facebook extends Component {
    state = {
        name: '',
        email: '',
        picture : ''
    }

    responseFacebook = (response) => {
        console.log(response);
        const {name, email, picture} = response;
        if (picture && picture.data && picture.data.url) {
            this.props.login(email, picture.data.url, name).then(() => {
                this.setState({
                    name,
                    email,
                    picture : picture.data.url
                });
                browserHistory.push("/home");
            }).catch(() => toastr.error("Đăng nhập thất bại hoặc bạn không có quyền vào trang này"))
        } else {
            toastr.error("Đăng nhập thất bại hoặc bạn không có quyền vào trang này")
        }
        
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
                        <img src={logoFB} width="24px" alt="logo FB"/>
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