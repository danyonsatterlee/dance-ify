import React from "react";

class Form extends React.Component{
    render(){
        return(
<div>
    <h1 >dance-ify</h1>
    <input className="input-lg" placeholder="ex. Here Comes the Sun"/> <button className="btn-lg btn-custom">Search</button>
</div>
        );
    }
}

export default Form;