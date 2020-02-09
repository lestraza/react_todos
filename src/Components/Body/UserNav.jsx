import React, { Component } from 'react';

export default class UserNav extends Component {
    state = {
        userId: -1
    }

    users = {
        1: "Alex",
        2: "Mordehai",
        3: "Jane",
        4: "Sova"
    }

    

    renderUsers = () => {
        return Object.keys(this.users).map(key => {
            return <div className="user_name" onClick={()=> this.props.filterByUserId(parseInt(key))} key={key} >{this.users[key]}</div>
        })
    }
    render() {
        const { userId } = this.state;
        return (
            <div className='user_nav'>
                {this.renderUsers()}
            </div>
        )
    }
}
