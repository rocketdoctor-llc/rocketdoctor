import styled from 'styled-components';
// import SlideView from '../../images/slideView.svg';
// import TrustedBackground from '../../images/trustedBackground.svg';
import { Container } from 'react-bootstrap';

export const FooterDivSection = styled(Container)`
    background: #f5f5f5;
    padding-top: 60px;
    .sub-title {
        font-size: 14px;
        font-family: 'Hind', sans-serif;
        line-height: 22px;
        max-width: 768px;
        margin: 32px auto;    
    }
    .footer-link-list {
        padding: 0;
        list-style: none;
        display: inline-block;
        width: 100%;
        text-align: center;
        margin: 40px 0 25px;

        li {
            font-size: 15px;
            line-height: 20px;
            display: inline-block;
            padding: 0 15px;
                a {                        
                    color: #000;
                    font-family: 'Exo', sans-serif;
                    font-weight: 700;
                    &:hover,
                    &:focus {
                        text-decoration: none;
                    }
                }
        }
    }
    .subscribe-form {
        max-width: 510px;
        margin: 0 auto;
        width: 100%;
        height: 47px;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;

        .outline-dark-btn {
            max-width: 175px;
            width: 100%;
            font-size: 15px;
            font-weight: 600;
            text-transform: initial;
            padding: 8px 0;
            height: 47px;
        }
        .form-group {
            margin-bottom: 0;
            width: calc(100% - 175px) !important;                
            label.force_mb-5.form-label {
                display: none;
            }
            .form-control {
                height: 47px;
                border-radius: 0;
                border: 0;
                font-size: 15px;
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color: #c4c4c4;
                    }
                    &::-moz-placeholder { /* Firefox 19+ */
                        color: #c4c4c4;
                    }
                    &:-ms-input-placeholder { /* IE 10+ */
                        color: #c4c4c4;
                    }
                    &:-moz-placeholder { /* Firefox 18- */
                        color: #c4c4c4;
                    }
            }
        }
    }
    .copyright-section {
        height: 55px;
        display: flex;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
    
        p {
            margin: 0;
            font-weight: 300;
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            font-family: 'Exo', sans-serif;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 767px) {
        .footerLogo {
            max-width: 100%;
        }
    }
`;