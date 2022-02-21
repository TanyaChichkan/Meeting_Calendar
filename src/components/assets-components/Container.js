import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: 90%;
  padding: 0 15px;
  margin: 0 auto;
  display: ${(props) => (props.parent ? 'flex' : 'block')};
  justify-content: ${(props) => props.parent && 'space-between'};
  align-items: ${(props) => props.parent && 'center'};
`;

const Container = ({ children, isFromHeader }) => {
  return <ContainerStyled parent={isFromHeader}>{children}</ContainerStyled>;
};

export default Container;
