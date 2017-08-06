import React from "react";

class Form extends React.Component{

 
    render(){
        return(
<div>
    <h1 >dance-ify</h1>
    <input  value={this.props.input.track} onChange={(event)=>{this.props.handleChange("track",event)}} className="input-lg" placeholder="ex. Here Comes the Sun"/>
     <button onClick={()=> this.props.handleTrack(this.props.input.track, this.props.accessToken)} className="btn-lg btn-custom">Search</button>
  
</div>
        );
    }
}

export default Form;