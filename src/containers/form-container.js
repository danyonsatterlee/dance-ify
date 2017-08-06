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
            <div className="col-md-6">
                <div className="results">
                    <Form input={this.state} handleTrack={this.props.getTrack} handleChange={this.handleChange} accessToken={this.props.accessToken}></Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }



export default connect(mapStateToProps, actionCreators)(FormCon);