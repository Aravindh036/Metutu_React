import React from 'react';
// import ReactDom from 'react-dom';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            user:"aravindh"
        });
    }

    render(){
        return(
            <div> 
                Welcome {this.user}
            </div>
        );
    }

}

export default Home;