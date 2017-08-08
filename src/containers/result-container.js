import React from "react";
import Form from "../components/form.js";
import * as actionCreators from "../actions/";
import { connect } from "react-redux";
import Result from "../components/result.js";
class ResultCon extends React.Component {
   
    
    render() {
        return (
            <div className="col-md-6 col-md-offset-6 col-sm-12 col-sm-offset-0">
                <div className="results">
                    <Result handleId={this.props.getId} danceLevel={this.props.danceLevel} ></Result>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }



export default connect(mapStateToProps, actionCreators)(ResultCon);