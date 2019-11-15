import styled from 'styled-components';
// import AuthSideBarImg from 'images/authsidebar.svg';
import AuthSideBarImg from 'images/online-doctor.png';
import AuthLeftSideBarImg from 'images/loginLeft.png';

export const AuthWrapper = styled.div`
    background: #EFEFEF;
    display: flex;
    flex-direction: row;
    height: 100vh;
    .align-items-center {
        align-items: center;
    }
    .justify-content-center {
        justify-content: center;
    }
    .card-deck{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
        .card {
            margin-left: 0px;
            margin-right: 0px;            
            border: 0;
            border-radius: 0;

            .form-control {
                border-top: 0;
                border-left: 0;
                border-right: 0;
                border-bottom: 1px solid #c4c4c4;
                padding-left: 0;
                border-radius: 0;
                font-family: 'Hind', sans-serif;
                font-size: 18px;
                background: transparent;
                &:focus,
                &:hover {
                    box-shadow: none;
                }
            }

            .forgot-link {
                color: #0772BA;
                font-size: 13px;
                font-family: 'Hind', sans-serif;
                margin-bottom: 10px;
                font-weight: 500;
                &:hover,
                &:focus {
                    text-decoration: none;
                }
            }

            .outline-dark-btn {
                margin-top: 20px;
            }
            .signUpLink {
                margin-top: 45px;
                color: #cfcfcf;
                margin-bottom: 0;

                a {
                    font-family: 'Hind', sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 24px;
                    text-transform: uppercase;
                    color: #0772BA;

                    &:focus,
                    &:hover {
                        text-decoration: none;
                    }
                }
            }
        }
        .loginLeft {            
            background-image: url("${AuthLeftSideBarImg}");
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;

            &:after {
                content: "";
                background: rgba(255,255,255,0.96);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .card-body {
            padding: 40px;
            z-index: 100;
            position: relative;
        }
        h1 {
            font-size: 30px;
            color: #0772BA;
            font-family: 'Hind', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
            margin-top: 40px;
        }
    } 
    .auth-sidebar {
        background-image: url("${AuthSideBarImg}");
        background-position: right center;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #e7f3ff;
    }
    .forgot.signUpLink {
        margin-top: 20px !important; 
    }
    @media screen and (min-width: 320px) and (max-width: 768px) {
        .auth-sidebar {
            display: none;
        }
        .card-deck .card {
            margin-bottom:0
        }
        .card-deck h1 {
            font-size: 24px;
        }
    }
`;