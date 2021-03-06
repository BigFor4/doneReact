import { Component } from 'react';
import './Login.css'
import api from "../../services/api";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            boolCheck: false,
            checkLogin: true
        }
        this.handleUserName1 = this.handleUserName.bind(this);
        this.handlePassword1 = this.handlePassword.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    
    login() {
        const params = {
            userName: this.state.userName,
            password: this.state.password,
        };
        var count = 0;
        api.create().login(params)
        .then(response => {
            for (var i=0; i < response.data.user.length; i++) {
                if(this.state.userName === response.data.user[i].username && this.state.password === response.data.user[i].userpass){
                    window.location.replace('/manager');
                }
                else{
                    count++;
                }
            } 
            if (count === response.data.user.length) {
                this.setState({
                    checkLogin: false
                })
            }
        })
        .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
        });
    }
    onChangeInput(event){
        var target = event.target;
        var name = target.name;
        var value = target.type ==='checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    getUserInfo() {
        api.create().getUserInfo(16)
        .then(response => {
            console.log('response = ', response);
            return response
        })
        .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
        });
    }
    
    
    handleUserName(event) {
        this.setState({ userName: event.target.value, checkLogin: true})
        
    }
    
    handlePassword(event) {
        this.setState({ password: event.target.value , checkLogin: true})
    }
    render(){
        var {boolCheck,checkLogin} = this.state;
        return (
            <div className="wraper">
                <div className="wraper_box">
                    <h1 className='wraper_box-login'>????ng Nh???p</h1>
                    <div className="row wraper_box-input">
                        <div className="wraper_box--user">
                            <p>T??i Kho???n</p>
                            <input placeholder="Ex. bigfor4" className="inputpadding" type="text" name="username"   
                                value={this.state.userName}
                                onChange={this.handleUserName1}
                            />
                        </div>
                        <div className="wraper_box--pass">
                            <p>M???t Kh???u</p>
                            <input placeholder="******" className="inputpadding" type={boolCheck === false ? 'password' : 'text'} name="password"  
                                value={this.state.password}
                                onChange={this.handlePassword1}
                            />
                            {checkLogin === true ?'' : <p style={{color: 'red'}}>*????ng Nh???p Th???t b???i</p>}
                        </div>
                        <div className="wraper_box--check">
                            <p><input type="checkbox" 
                            name='boolCheck'
                            value={true}
                            checked={this.state.boolCheck}
                            onChange={this.onChangeInput} /><span className='ml-5'>Hi???n Th??? M???t Kh???u</span></p>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary mb-50" 
                        onClick={() => this.login()}
                    >????ng Nh???p</button>
                </div>
            </div>
        );
    }
}

export default Login;
