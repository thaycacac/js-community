import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import { browserHistory } from 'react-router';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn : true,
            userID : response.userID,
            name : response.name,
            email : response.email,
            picture: response.picture.data.url 
        });
    }

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            browserHistory.push("/home");               
        } else {
            fbContent = (<FacebookLogin
                appId="1075153362660059"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />);
        }

        return(
            <div>
            {fbContent}
            </div>
        )
    }
}