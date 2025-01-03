import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SearchOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent !important;
  color: ${({ theme }) => theme.text};
  flex: 1;
  outline: none;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent !important;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
          />
          <SearchOutlined
            style={{ cursor: "pointer" }}
            onClick={handleSearchClick}
          />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon />
            Sign in
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
