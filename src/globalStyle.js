import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   .outline-btn {
        border: 2px solid #0772BA;
        box-sizing: border-box;
        background: #ffffff;
        font-family: Exo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #0772BA;
        margin-right:9px;
    }
    .outline-dark-btn {
        border: 2px solid #0772BA;
        box-sizing: border-box;
        background: #0772BA;
        font-family: Exo;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .text-head-home {
        padding: 65px 0 0;
        margin-left: 0!important;
        margin-right: 0!important;
    }
    .work-bottom {
        margin-top: 60px;
        padding-bottom: 80px;
    }
    .text-heading {
        margin-bottom: 0px;
    }
    .partner-bottom {
        margin-top: 60px;
        padding-bottom: 80px;
    }
    .why-bottom {
        margin-top: 60px;
        padding-bottom: 80px;
    }
    .stop-box {
        width: 312px;
        height: 200px;
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }  
`;

export default GlobalStyle;