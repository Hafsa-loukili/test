import React from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";

const MyLogo = styled.div`
    color: #f5f5dc;
    background-color: #9caf88;
    font-family: 'Poppins', serif;
    font-size: 1.3rem;
    padding: 1rem;
    border-bottom: 3px solid #b76e79 ;
`;

const Icon = styled.i`
    color: #f5f5dc;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    vertical-align: middle;
`;

const StyledNavLink = styled(Link)`
    color: #f5f5dc !important;
    &:hover {
        color: #b76e79 !important; 
    }
`;

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <MyLogo className="container-fluid">
                <StyledNavLink className="navbar-brand" to="/">SHOP-NELLY</StyledNavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <StyledNavLink className="nav-link active" aria-current="page" to="/">Home</StyledNavLink>
                        </li>
                        <li className="nav-item">
                            <StyledNavLink className="nav-link" to="/contact">To-Do Liste</StyledNavLink>
                        </li>
                        <li className="nav-item">
                            <StyledNavLink className="nav-link" to="/about">Liste des tâches</StyledNavLink>
                        </li>
                    </ul>
                    <Icon className="bi bi-cart"></Icon>
                </div>
            </MyLogo>
        </nav>
    );
}

export default Nav;
