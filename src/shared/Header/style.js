import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const NavBarComp = styled(Nav)`
    align-self: flex-end;
    .nav-link {
        font-family: Exo;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #000000!important;
    }
`;

export const OuterHeader = styled.div`
    height: 82px;
`;