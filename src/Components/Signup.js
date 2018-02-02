import React,{Component} from 'react';
import {  Link } from 'react-router-dom';
import './style.css'; 

class Signup extends Component{
      state={
        name:null,
        email:null,
        password:null,
        confirm:null,
        state:null,
        city:null
      }
    handleName=(e)=>{
      if((this.state.name!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          name:e.target.value
        });      
      }    

    }

    handleEmail=(e)=>{
      if((this.state.email!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          email:e.target.value
        });  
      }

    }

    handlePassword=(e)=>{
      if((this.state.password!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          password:e.target.value
        });
      }

    }

    handleConfirm=(e)=>{
      if((this.state.confirm!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          confirm:e.target.value
        });
      if((this.state.password!==e.target.value)){
        alert("password not maching....");
      }
      }
    

    }

    handleCity=(e)=>{
      if((this.state.city!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          city:e.target.value
        });        
      }
      
    }
    
    handleState=(e)=>{
      if((this.state.state!==e.target.value)&&(e.target.value!==null)){
        this.setState({
          state:e.target.value
        });
      }

    }

    handleClick=(e)=>{
             //handling after submiting the form
    }
    
    render(){
        return(
            <form onSubmit={this.handleClick}>
              <label > Name: </label>
              <br></br>
              <input className="commonLabel"  placeholder="Name" type="text" onBlur={this.handleName}/>
              <label >E-mail: </label>
              <br></br>
              <input className="commonLabel"  placeholder="email id" type="email" onBlur={this.handleEmail}/>
                <br></br>
              <label >Password:</label>
                <br></br>
              <input className="commonLabel"  placeholder="Password" type="password" onBlur={this.handlePassword}/>
                <br></br>
              <input className="commonLabel"  placeholder="confirm password" type="password" onBlur={this.handleConfirm}/>
                <br></br>
              <label>State:</label>
              <input className="commonLabel"  placeholder="State" type="text" onBlur={this.handleState}/>
                <br></br>
              <label>City</label>
              <input className="commonLabel"  placeholder="City" type="text" onBlur={this.handleCity}/>
                <br></br>
              <input className="button" type="submit" value="Signup"/>
              <hr/>

             <Link className="link" to={'/Login'}>Already have an account?</Link>
            </form>
        );
    }
}


export default Signup;
