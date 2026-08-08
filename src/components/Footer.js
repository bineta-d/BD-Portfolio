import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import { Button, Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col className="d-flex justify-content-center align-items-center flex-col">
              <p className="text-xl font-medium m-0">Bineta Diatta &copy; {new Date().getFullYear()}</p>
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
          right: '60px',
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
        <FaArrowUp size={30} color="#FFE4E1" />
      </Button>
    </>
  );
};

export default Footer;
