// Must have at least one test file in this directory or Mocha will throw an error.
import React, {Component} from 'react';
class MyCheckbox extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <input className="myInput" type="checkbox" value="off" />
                <p>my p</p>
            </div>
        );
    }
}

export default MyCheckbox;
