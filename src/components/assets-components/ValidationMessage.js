import { memo } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const SpanStyled = styled.span`
  display: ${(props) => (props.value === '' ? 'none' : 'block')};
  font-family: 'Open Sans';
  font-size: 12px;
  color: red;
`;

const ValidationMessage = memo((validationError) => {
  const validationErrorValues = Object.values(validationError);
  const validationErrorKeys = Object.keys(validationError);
  const checkEmptyFields = validationErrorValues.some((item) => item !== '');

  return (
    <Wrapper from='div'>
      {checkEmptyFields &&
        validationErrorKeys.map((error, index) => (
          <SpanStyled value={validationErrorValues[index]} key={error}>
            {validationErrorValues[index]}
          </SpanStyled>
        ))}
    </Wrapper>
  );
});

export default ValidationMessage;
