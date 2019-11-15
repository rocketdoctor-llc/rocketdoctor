import styled from 'styled-components';
import AuthSideBarImg from 'images/authsidebar.svg';

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
    .card-deck .card {
        margin-left: 0px;
        margin-right: 0px;
    }
    .auth-sidebar {
        background-image: url("${AuthSideBarImg}");
        background-position: center;
        background-size: cover;
    }
`;