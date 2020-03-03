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
import Typical from "react-typical";

const ContactView = props => {
    return (
        <Container>
            <div className="d-flex justify-content-around">
                <div>
                    <Header>
                        <Typical
                            steps={["", 1000, "Contact.", 5000]}
                            loop={Infinity}
                        />
                    </Header>
                    <SubHeader>
                        If you have any questions, feel free to send me an
                        email.
                    </SubHeader>
                </div>
                <Form action="">
                    <div className="d-flex">
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
