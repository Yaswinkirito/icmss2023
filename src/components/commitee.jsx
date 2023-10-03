import Container from "react-bootstrap/Container";
import { collegeObjects, collegeObjects2 } from "./constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const commitee = () => {
  return (
    <div>
       <Container className="min-h-screen">
        <br />
        <Row className="mx-0">
          <h2 className="text-left mx-4">
            International Advisory Committee Members
          </h2>
          <Col lg="6" md="6">
            <ul style={{ listStyle: "none" }}>
              {collegeObjects.map((items, index) => (
                <li key={index}>
                  {items.name}
                  <i>{items.college}</i>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="6" md="6">
            <ul style={{ listStyle: "none" }}>
              {collegeObjects2.map((items, index) => (
                <li key={index}>
                  {items.name}
                  <i>{items.college}</i>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default commitee
