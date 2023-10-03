import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function trackchair() {
  return (
    <Container className="min-h-screen flex ">
      <Row>
        <ul className="custom-list ">
          <li>
            <b className="text-purple-color texl-xl">Track Chairs</b>
          </li>

          <Col lg="6" md="6">
            P Krishna Reddy, <i>IIIT-Hyderabad</i>
            <br />
            Priya Chandran, <i>NIT Calicut</i>
            <br />G R Gangadharan, <i>NIT Trichy</i>
            <br />
            Byungho Kim, <i>Kyungsung University, S. Korea</i>
            <br />
            Joshy George,{" "}
            <i>Jackson Lab for Genomic Medicine Connecticut, USA</i>
            <br />
            Atul Negi, <i>University of Hyderabad</i>
            <br />
            Lakshmi N Theagarajan, <i>IIT Palakkad</i>
            <br />
            Albert Sunny, <i>IIT Palakkad</i>
            <br />
            Sumam David, <i>NITK</i>
            <br />
            P. S. Sathidevi, <i>NIT Calicut</i>
            <br />
          </Col>
          <Col lg="6" md="6">
            C.K. Aanandan, <i>CUSAT</i>
            <br />
            S. Raghavan, <i>NIT Trichy</i>
            <br />
            Deleep R. Nair, <i>IIT Madras</i>
            <br />
            Seena V, <i>IIST Trivandrum</i>
            <br />
            Rijil Ramchand, <i>NIT Calicut</i>
            <br />
            Siva Kumar K, <i>IIT Hyderabad</i>
            <br />
            Jeevamma Jacob, <i>NIT Calicut</i>
            <br />
            Soumya Ranjan Sahoo, <i>IIT Kanpur</i>
            <br />
            Sadasivan Puthusserypady, <i>Technical University of Denmark</i>
            <br />
            U. Rajendra Acharya, <i>Ngee Ann Polytechnic Singapore</i>
            <br />
          </Col>
        </ul>
      </Row>
    </Container>
  );
}

export default trackchair;
