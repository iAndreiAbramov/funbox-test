import { BreakPoint, FontColor, FontFamily } from 'constants/style-variables';
import styled from 'styled-components';

export const ListWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 36px;
    padding-bottom: 67px;
`;

export const ListContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: ${BreakPoint.DesktopLow}) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }
`;

export const HiddenTitle = styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0 none;
    clip-path: inset(100%);
`;

export const VisibleTitle = styled.span`
    margin-bottom: 24px;

    font-family: ${FontFamily.Exo};
    font-size: 36px;
    font-weight: 100;
    line-height: 1.22;
    text-align: center;
    color: ${FontColor.Light};
    text-shadow: 0 1px 1px #000000;
`;
