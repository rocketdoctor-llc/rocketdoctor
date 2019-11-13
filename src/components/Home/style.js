import styled from 'styled-components';
import SlideView from '../../images/slideView.svg';
import TrustedBackground from '../../images/trustedBackground.svg';
import { Container } from 'react-bootstrap';

export const FirstDivSection = styled.div`  
  background-image: url("${SlideView}");
  height: 511px;
`;

export const InnerDiv = styled.div`
  padding: 10px 0px 20px 20px;
  margin-top: 109px;
  margin-left: 150px;
  font-family: 'Hind';
  font-style: normal;
  color: #000000;  
  h2 {    
    font-weight: 600;
    font-size: 48px;
    line-height: 124%;   
    width: 417px;
  }
  p {
    width: 417px;
  }
`;
export const ThirdDivSection = styled(Container)`
  background-image: url("${TrustedBackground}");
  position: relative;
    ::before {
      content: "";
      position: absolute;
      background: rgba(245, 245, 245, 0.86);
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      opacity: 0.9;
    }
`;