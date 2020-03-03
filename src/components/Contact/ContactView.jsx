import React from "react";
import {
    Container,
    Header,
    SubHeader,
    Input,
    Form,
    TextArea,
    Button
} from "../../styles/styles";

const ContactView = props => {
    return (
        <Container>
            <div className="d-flex justify-content-around">
                <div>
                    <Header>Contact</Header>
                    <SubHeader>
                        If you have any questions, feel free to send me an
                        email.
                    </SubHeader>
                </div>
                <Form action="">
                    <div>
                        <Input placeholder="Name" type="text" />
                        <Input placeholder="Email" type="text" />
                    </div>
                    <div className="d-flex flex-column">
                        <Input placeholder="Subject" type="text" />
                        <TextArea
                            placeholder="Message"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></TextArea>
                    </div>
                    <Button>Send</Button>
                </Form>
            </div>
        </Container>
    );
};

export default ContactView;
