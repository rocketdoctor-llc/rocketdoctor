import styled from 'styled-components';
import SlideView from '../../images/hometop.png';
import TrustedBackground from '../../images/trustedBackground.svg';
import { Container } from 'react-bootstrap';

export const FirstDivSection = styled.div`  
  background-image: url("${SlideView}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 511px;
  position: relative;
  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.62);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
  }
  .removeMargin {
    margin: 0;
  }
  .searchForm {
    background: #fff;
    margin-top: 80px;
    max-width: 400px;
    padding: 30px;
    width: 100%;
    float: right;
    margin-right: 50px;
    
    .form-control {
      border: 1px solid #E5E5E5;
      border-radius: 0;
      height: 48px;
      font-family: 'Hind', sans-serif;
      font-size: 18px;
    }
    .btn-section {
      margin-top: 35px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    height: auto;
    .removeMargin {
      h2 {
        font-size: 20px;
      }
    }
  }
`;

export const SecondDivSection = styled.div`  
  .work-bottom {
    .text-center {
      img {
        height: 110px;
        margin-bottom: 30px;
      }
      p {
        font-family: 'Hind', sans-serif;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;

export const InnerDiv = styled.div`
  padding: 10px 0px 20px 40px;
  margin-top: 98px;
  // margin-left: 150px;
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
    font-family: 'Poppins', sans-serif;
  }
  @media screen and (min-width:320px) and (max-width: 767px) {
    padding: 20px;
    h2 {
      width: auto;
    }
    p {
      width: auto;
    }
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
    @media screen and (min-width: 320px) and (max-width: 767px) {
      background-size: cover;
      background-repeat: no-repeat;
    }
`;
export const FifthDivSection = styled(Container)`
  background: #F9F9F9;
  padding-bottom: 45px;
  .text-heading {
    margin-bottom: 30px;
  }
  .faq-home-box {
    background: #fff;
    padding: 26px;
    min-height: 370px;
    max-height: 370px;
    cursor: pointer;
    &:hover,
    &:focus {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h4 {
      font-family: 'Hind', sans-serif;
      font-weight: 500;
      margin-bottom: 30px;
    }
    p {
      font-family: 'Hind', sans-serif;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 30px;
    }
    a {
      font-size: 24px;
      color: #0772BA;
      font-family: 'Hind', sans-serif;
      font-weight: 500;
      &:hover,
      &:focus {
        text-decoration: none;
        opacity: 0.7;
      }
    }
  }
`;

export const SixDivSection = styled.div`
  background: #FFFFFF;  
  padding-top: 75px;
  padding-bottom: 80px;  
    .app-download {
      text-align: center;
        h2 {
          font-family: 'Hind', sans-serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 45px;
          margin-bottom: 30px;
        }
        p {
          font-family: 'Hind', sans-serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 30px;
        }
        .btnGroup {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 50px;
          .store-btn {
            border: 4px solid #0772BA;
            background: transparent;
            display: flex;
            color: #000;
            flex-direction: row;
            padding: 10px 15px;
            margin-bottom: 45px;
            font-family: 'Exo', sans-serif;

              &:hover,
              &:focus {
                background: #0772BA;
                color: #fff;
                 p {
                   span {
                    color: #fff;
                   }
                   small {
                     color: #fff;
                   }
                 }
              }
              p {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin-bottom: 0;
                text-align: left;
                margin-left: 18px;
                  span {
                    text-transform: uppercase;
                    font-size: 25px;
                    color: #0772BA;
                    font-weight: 800;
                    font-family: 'Exo', sans-serif;
                  }
                  small {
                    font-size: 20px;
                    line-height: 27px;
                    font-weight: 300;
                    color: #000000;
                    font-family: 'Exo', sans-serif;
                  }
              }
          }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 767px) {
      .mobilePhone {
        width: 100%;
      }
    }
`;