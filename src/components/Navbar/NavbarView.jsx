import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors/colors";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  background: ${colors.black};
  border-bottom: 2px solid ${colors.blue};
  height: 100vh;
  width: 80px;
  z-index: 1000;

  @media (max-width: 767px) {
    height: 80px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.lightBlack};
  text-decoration: none;
`;

const ListItem = styled(StyledLink)`
  cursor: pointer;
  font-size: 20px;
  padding: 20px 10px;
  transition: 0.5s;
  &:hover {
    border: 0;
    color: ${colors.blue};
  }
`;

const ATagLink = styled.a`
  color: ${colors.lightBlack};
  cursor: pointer;
  font-size: 20px;
  padding: 20px 10px;
  transition: 0.5s;
  text-decoration: none;
  &:hover {
    border: 0;
    color: ${colors.blue};
  }
`;

const ActiveListItem = styled(ListItem)`
  color: ${colors.blue};
  text-decoration: none;
`;

const NavbarView = props => {
  console.log(props);
  return (
    <Navbar className="navigation-container">
      <List className="navigation-menu">
        {props.icons.map((icon, i) => {
          if (icon.id < 3) {
            return icon.active ? (
              <ActiveListItem
                data-toggle="tooltip"
                data-placement="top"
                title={icon.name}
                to={icon.link}
                key={icon.id}
                id={icon.id}
                className="navigation-item"
              >
                {icon.component}
              </ActiveListItem>
            ) : (
              <ListItem
                data-toggle="tooltip"
                data-placement="top"
                title={icon.name}
                onClick={props.setCurrentPage}
                to={icon.link}
                key={icon.id}
                id={icon.id}
                className="navigation-item"
              >
                {icon.component}
              </ListItem>
            );
          } else {
            return (
              <ATagLink
                data-toggle="tooltip"
                data-placement="top"
                title={icon.name}
                key={i}
                target="_blank"
                href={icon.link}
              >
                {icon.component}
              </ATagLink>
            );
          }
        })}
      </List>
    </Navbar>
  );
};

export default NavbarView;
