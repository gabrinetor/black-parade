import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado por 
        {' '}
        <a href="https://gabrinetor.github.io/portfolio/">
          Gabriela Neto
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;