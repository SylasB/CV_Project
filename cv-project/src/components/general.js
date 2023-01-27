import React, { Component } from "react";
import '../index.css'


class General extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form className="genInfo">
                    <div>
                        <label htmlFor="fname">First Name:</label>
                    <input type='text' title='fname'></input>
                    </div>
                    <div>
                            <label htmlFor="lname">Last Name:</label>
                        <input type='text' title='lname'></input>
                    </div>
                    <div>
                            <label htmlFor="email">Email:</label>
                        <input type='email' title='email'></input>
                    </div>
                    <div>
                            <label htmlFor="phoneNum">Phone Number:</label>
                        <input type='tel' title='phoneNum'></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default General;