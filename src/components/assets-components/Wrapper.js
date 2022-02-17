import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: ${(props) => (props.from === 'input' ? '40%' : '100%')};
  display: flex;
  //   justify-content: ${(props) =>
    props.from === 'div' ? 'center' : 'space-between'};
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = ({ children, from }) => {
  return <WrapperStyled from={from}>{children}</WrapperStyled>;
};

export default Wrapper;
