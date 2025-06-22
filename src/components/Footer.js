import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import { Button, Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '2rem',
        position: 'relative',
        marginBottom: '60px', 
      }}>
        <Container fluid >
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col className="d-flex justify-content-center align-items-center">
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginRight: '10px',
              }}>
            
              </div>
              <p style={{ fontSize: '1.2rem', color: 'white' }}>Bineta Diatta &copy; {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'black',
          border: 'none',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          zIndex: 100,
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <FaArrowUp size={30} />
      </Button>
    </>
  );
};

export default Footer;
