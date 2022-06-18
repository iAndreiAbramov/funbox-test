import { FontColor } from 'constants/style-variables';
import styled from 'styled-components';

export const Outro = styled.div`
    margin-top: 14px;

    font-size: 13px;
    line-height: 15px;
    text-align: center;
`;

export const OutroText = styled.span<{ isAvailable: boolean }>`
    font-weight: 400;
    color: ${({ isAvailable }) =>
        isAvailable ? FontColor.Light : FontColor.CardOutroUnavailable};
`;

export const OutroLink = styled.a.attrs({ href: '#' })`
    font-weight: 700;
    color: ${FontColor.Link};

    cursor: pointer;
    text-decoration: underline;
    text-decoration-style: dashed;
`;
