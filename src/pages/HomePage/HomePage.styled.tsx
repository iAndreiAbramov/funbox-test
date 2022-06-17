import { BreakPoint, FontFamily } from 'constants/style-variables';
import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    min-width: ${BreakPoint.MobileLow};

    font-family: ${FontFamily.Trebuchet};
    font-weight: 400;

    background-image: url('/img/bg/pattern.png');
    background-size: 1280px auto;

    @media (min-resolution: 2dppx) {
        background-image: url('/img/bg/pattern@2x.png');
        background-size: 1280px auto;
    }
`;
