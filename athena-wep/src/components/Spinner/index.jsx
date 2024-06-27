import React from 'react';
import * as Styled from './styles'; // Importe os estilos específicos do Spinner, ajuste o caminho conforme necessário
import P from 'prop-types';
export const  Spinner = ({colorDark = true}) => {
  return (
      <Styled.LoadingSpinner colorDark = {colorDark}/>   
  );
};
Spinner.propTypes = { 
  colorDark: P.bool,
};
