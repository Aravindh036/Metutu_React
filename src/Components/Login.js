import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  './style.css'; 


class Login extends Component{
      state={
        email:null,
        password:null,
      };
    handleEmail=(e)=>{
          this.setState({
            email:e.target.value
          });
      }
  
      handlePassword=(e)=>{
        this.setState({
          password:e.target.value
        });
      }

      handleClick=(e)=>{
       //handling after submiting the form
      }

    render(){
        return(
            <form onSubmit={this.handleClick}>
              <label >E-mail </label>
              <br></br>
              <input className="email"  placeholder="email id" type="email" />
                <br></br>
              <label >Password:</label>
                <br></br>
              <input className="password"  placeholder="Password" type="password"/>
                <br></br>
                <input className="button" type="submit" value="Login"/>
                <hr/>
                <Link className="link" to={'/'}>Create a new Account!</Link>
            </form>
        );
    }
}

export default Login;
