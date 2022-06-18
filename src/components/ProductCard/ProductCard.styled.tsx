import {
    BgColor,
    Border,
    BreakPoint,
    FontColor,
} from 'constants/style-variables';
import styled, { css } from 'styled-components';

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

export const CardInnerWrapper = styled.div<{
    isPainted: boolean;
    isAvailable: boolean;
    isInternetExplorer: boolean;
}>`
    position: relative;

    min-height: 510px;
    padding: 21px 48px 0;
    background-color: #f2f2f2;
    border: ${({ isPainted, isAvailable }) =>
        !isAvailable
            ? Border.CardUnavailable
            : isPainted
            ? Border.CardSelected
            : Border.CardRegular};
    border-radius: 12px;
    clip-path: polygon(44px 0, 100% 0%, 100% 100%, 0 100%, 0 44px);

    cursor: ${({ isAvailable }) => (isAvailable ? 'pointer' : 'auto')};

    ${({ isInternetExplorer, isPainted, isAvailable }) => {
        if (!isInternetExplorer) {
            return css`
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 2;
                    top: -34px;
                    left: -32px;

                    width: 60px;
                    height: 60px;
                    border-bottom: ${() =>
                        !isAvailable
                            ? Border.CardUnavailable
                            : isPainted
                            ? Border.CardSelected
                            : Border.CardRegular};

                    transform: rotate(-45deg);
                }
            `;
        }
    }}
`;

export const CardIntro = styled.span<{
    isPainted: boolean;
    isAvailable: boolean;
}>`
    display: block;
    margin-bottom: 6px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: ${({ isPainted, isAvailable }) =>
        !isAvailable
            ? FontColor.CardTextUnavailable
            : isPainted
            ? FontColor.CardIntroSelected
            : FontColor.Grey};

    opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
`;

export const CardTitle = styled.h3<{ isAvailable: boolean }>`
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;

    font-weight: 700;
    font-size: 48px;
    line-height: 1.17;
    color: ${({ isAvailable }) =>
        isAvailable ? FontColor.Black : FontColor.CardTextUnavailable};

    opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
`;

export const CardSubtitle = styled.span<{ isAvailable: boolean }>`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.17;
    color: ${({ isAvailable }) =>
        isAvailable ? FontColor.Black : FontColor.CardTextUnavailable};

    opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
`;

export const CardInfo = styled.div<{ isAvailable: boolean }>`
    display: flex;
    flex-direction: column;

    color: ${({ isAvailable }) =>
        isAvailable ? FontColor.Black : FontColor.CardTextUnavailable};
    opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
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

export const ImageWrapper = styled.div<{ isAvailable: boolean }>`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;

    width: 100%;
    height: auto;

    opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
`;

export const Label = styled.div<{ isPainted: boolean; isAvailable: boolean }>`
    position: absolute;
    bottom: 16px;
    right: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    background-color: ${({ isPainted, isAvailable }) =>
        !isAvailable
            ? BgColor.LabelUnavailable
            : isPainted
            ? BgColor.LabelSelected
            : BgColor.LabelRegular};
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
