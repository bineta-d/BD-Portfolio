import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-800 text-white py-8 relative text-center">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col className="d-flex justify-content-center align-items-center flex-col">
              <p className="text-xl font-medium m-0">Bineta Diatta &copy; {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bg-black border-none p-4 rounded-full cursor-pointer shadow-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
        style={{
          bottom: '20px',
          right: '20px',
          width: '56px',
          height: '56px',
          zIndex: 100,
        }}
        aria-label="Back to top"
      >
        <FaArrowUp size={24} color="#FFE4E1" />
      </button>
    </>
  );
};

export default Footer;
