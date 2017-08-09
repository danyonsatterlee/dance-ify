import React from "react";
import Form from "../components/form.js";
import * as actionCreators from "../actions/";
import { connect } from "react-redux";
import autoBind from "react-autobind";


class FormCon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: ""

        }
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value})
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-5 col-md-offset-7">
                <div className="search">
                    <Form input={this.state} handleId={this.props.getId} handleChange={this.handleChange} accessToken={this.props.accessToken} ></Form>
                 </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }



export default connect(mapStateToProps, actionCreators)(FormCon);