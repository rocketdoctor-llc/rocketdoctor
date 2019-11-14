import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const NavBarComp = styled(Nav)`
    align-self: flex-end;
    .nav-link {
        font-family: 'Exo', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #000000!important;
    }
`;

export const OuterHeader = styled.div`
    height: 76px;
    .navbar {
        height: 76px;
    }   
    .navbar-brand {
        margin-right: 30px;
        padding-top: 0;
    }
    .outline-dark-btn {
        padding: 6px 25px;
    }
    .outline-btn {
        &:hover,
        &:focus {
            background: #0772BA;
            border-color: #0772BA;
        }
    }
`;