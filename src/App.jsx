import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
class App extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            address: ''
        }
        this.changeName = this.changeName.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    changePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    changeAddress(event) {
        this.setState({
            address: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        this.setState({
            name: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            address: ''
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                placeholder='Name'
                                onChange={this.changeName}
                                value={this.state.name}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='Phone'
                                onChange={this.changePhone}
                                value={this.state.phone}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='Username'
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className='form-control form-group'
                            />
                            <input type='password'
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='Address'
                                onChange={this.changeAddress}
                                value={this.state.address}
                                className='form-control form-group'
                            />
                            <input type='submit' className='btn btn-danger btn-block' value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

