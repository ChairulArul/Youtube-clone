import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

// Styled components for the layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
`;

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #606060;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #606060;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  color: #606060;
  margin-bottom: 20px;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  border: 1px solid #d3d3d3;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #155bb5;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${({ success }) => (success ? "green" : "red")};
`;

const SignUpLink = styled.div`
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  &:hover {
    text-decoration: none;
  }
`;

// Popup Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalButton = styled.button`
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #155bb5;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      setMessage(response.data.message); // Tampilkan pesan sukses
      if (response.data.message === "Login berhasil") {
        setShowModal(true); // Tampilkan popup jika login berhasil
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message); // Tampilkan pesan error dari backend
      } else {
        setMessage("Terjadi kesalahan pada server.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
          <LogoText>YouTube</LogoText>
        </LogoContainer>
        <Title>Sign In</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Next</Button>
        {message && (
          <Message success={message === "Login berhasil"}>{message}</Message>
        )}
        <SignUpLink>
          <Link to="/signup ">Create account</Link>
        </SignUpLink>
      </Wrapper>

      {showModal && (
        <ModalOverlay>
          <Modal>
            <h2>Login Berhasil!</h2>
            <p>Selamat datang di YouTube</p>
            <ModalButton onClick={handleCloseModal}>OK</ModalButton>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default SignIn;
