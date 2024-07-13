import React from 'react';
import { ButtonStyled } from './StyledButton';

const Button = ({ buttonProps, btntype, fb, text ,sb , tb, db , cb,eb , onClick}) => {
  return (
    <ButtonStyled
      {...buttonProps}
      btntype={btntype}
      fb={fb}
      sb={sb}
      tb={tb}
      db={db}
      cb={cb}
      eb={eb}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
