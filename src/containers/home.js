import React from "react";
import FormCon from "./form-container.js"
import ImageCon from './image-container.js';
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ImageCon></ImageCon>
                    <FormCon></FormCon>
                </div>
            </div>
        );
    }
}

export default Home;