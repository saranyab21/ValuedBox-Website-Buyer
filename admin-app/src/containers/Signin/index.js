import React from 'react'
import Layout from "../../components/Layout"
import {Container, Form, FormControl, Row, Col, Button} from "react-bootstrap"
import Input from '../../components/UI/Input'

const Signin = (props) => {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{marginTop: '50px'}}>
                        <Col md={{span:6, offset:3}}>
                            <Form>
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value=""
                                    type="email"
                                    onChange={() => {}} />

                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={() => {}} />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signin
