import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #F5A623;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #F5A623;
    text-decoration: underline;
  }
`;

const LandingPage = () => {
    return (
        <StyledHeader>
            <h1>Saif's Corner</h1>
            <StyledNav>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </StyledNav>
        </StyledHeader>
    );
};

export default LandingPage;