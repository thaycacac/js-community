import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

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

    componentClicked = () => console.log("clicked");

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture}/>
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
            // fbContent = null;
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