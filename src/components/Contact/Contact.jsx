import React, { Component } from "react";
import ContactView from "./ContactView";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nothing: ""
        };
    }

    render() {
        return (
            <div>
                <ContactView />
            </div>
        );
    }
}

export default Contact;
