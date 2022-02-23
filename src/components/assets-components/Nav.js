import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.parent === 'authMenu' ? '20%' : '13%')};
`;

const Nav = ({ children, parent }) => {
  return <NavStyled parent={parent}>{children}</NavStyled>;
};

export default Nav;
