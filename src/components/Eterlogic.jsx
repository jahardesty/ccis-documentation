import React from 'react'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

const Eterlogic = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/InstallDashboard');
    }
  return (
     <Container className="mt-5">
      <h1 className="mb-4">Eterlogic Port Splitter</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>
               {data.eterlogic.map((note, index) => (
                  <p key={index}>{note}</p>
               ))}           
              </Card.Text>
             <Button variant='secondary' onClick={handleButtonClick}>Back to Install Directory</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Eterlogic