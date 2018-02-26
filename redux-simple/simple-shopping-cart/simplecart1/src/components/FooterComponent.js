import React from 'react'
import { Container, Row, Col } from 'reactstrap'


const FooterComponent = (props) => {
    return <Container>
        <Row>
          <Col s="12" l="6">
            <h3>Shop all the things</h3>
          </Col>
        </Row>
        <Row>
          <Col>&copy; Never</Col>
        </Row>
      </Container>;
}

export default FooterComponent