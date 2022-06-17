import { BreakPoint, FontColor } from 'constants/style-variables';
import styled from 'styled-components';

export const CardOuterWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-width: 290px;
    max-width: 320px;

    &:not(&:first-of-type) {
        margin-top: 80px;
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        &:not(&:first-of-type) {
            margin-top: 0;
        }

        &:nth-child(2n) {
            margin-left: 80px;
        }

        &&:nth-child(n + 3) {
            margin-top: 80px;
        }
    }

    @media (min-width: ${BreakPoint.DesktopLow}) {
        &:not(&:first-of-type) {
            margin-top: 0;
        }

        &:nth-child(n + 2) {
            margin-left: 80px;
        }
    }
`;

export const CardInnerWrapper = styled.div`
    position: relative;

    min-height: 510px;
    padding: 21px 48px 0;
    background-color: #f2f2f2;
    border: 4px solid #1698d9;
    border-radius: 12px;

    clip-path: polygon(44px 0, 100% 0%, 100% 100%, 0 100%, 0 44px);

    &::after {
        content: '';
        position: absolute;
        z-index: 2;
        top: -34px;
        left: -32px;

        width: 60px;
        height: 60px;
        border-bottom: 4px solid #1698d9;

        transform: rotate(-45deg);
    }
`;

export const CardIntro = styled.span`
    display: block;
    margin-bottom: 6px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: ${FontColor.Grey};
`;

export const CardTitle = styled.h3`
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;

    font-weight: 700;
    font-size: 48px;
    line-height: 1.17;
    color: ${FontColor.Black};
`;

export const CardSubtitle = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.17;
    color: ${FontColor.Black};
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardDescription = styled.div`
    font-size: 14px;
    line-height: 1.14;
    font-style: normal;
`;

export const DescriptionItem = styled.div`
    &:not(&:last-of-type) {
        margin-bottom: 0.15em;
    }
`;

export const Value = styled.span`
    font-weight: 700;
    margin-right: 0.25em;
`;

export const Description = styled.span`
    font-weight: 400;
`;

export const ImageWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;

    width: 100%;
    height: auto;
`;

export const Label = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    background-color: #2ea8e6;
    border-radius: 50%;

    color: ${FontColor.Light};
    font-weight: 400;
`;

export const LabelValue = styled.span`
    font-size: 42px;
    text-align: center;
`;

export const LabelUnit = styled.span`
    font-size: 21px;
`;

export const Outro = styled.div`
    margin-top: 14px;

    font-size: 13px;
    line-height: 15px;
    text-align: center;

    color: ${FontColor.Light};
`;

export const OutroText = styled.span`
    font-weight: 400;
`;

export const OutroLink = styled.a.attrs({ href: '#' })`
    font-weight: 700;
    color: ${FontColor.Link};

    cursor: pointer;
    text-decoration: underline;
    text-decoration-style: dashed;
`;
