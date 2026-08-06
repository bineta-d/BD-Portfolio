import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import { Button, Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-8 relative mb-60 text-center">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium m-0">Bineta Diatta &copy; {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-black border-none p-4 rounded-full cursor-pointer text-2xl shadow-lg d-flex align-items-center justify-content-center"
        style={{ zIndex: 100 }}
      >
        <FaArrowUp size={30} color="#FFE4E1" />
      </Button>
    </>
  );
};

export default Footer;
