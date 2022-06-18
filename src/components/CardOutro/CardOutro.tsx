import React from 'react';

import * as S from './CardOutro.styled';

interface ICardOutroProps {
    isAvailable: boolean;
    isPainted: boolean;
    outroTextSelected: string;
    subtitle: string;
}

export const CardOutro: React.FC<ICardOutroProps> = ({
    isPainted,
    isAvailable,
    outroTextSelected,
    subtitle,
}) => {
    return (
        <S.Outro>
            {!isAvailable ? (
                <S.OutroText
                    isAvailable={isAvailable}
                >{`Печалька, ${subtitle} закончился.`}</S.OutroText>
            ) : (
                <>
                    {isPainted ? (
                        <S.OutroText isAvailable={isAvailable}>
                            {outroTextSelected}
                        </S.OutroText>
                    ) : (
                        <>
                            <S.OutroText isAvailable={isAvailable}>
                                Чего сидишь? Порадуй котэ,&nbsp;
                            </S.OutroText>
                            <S.OutroLink>купи.</S.OutroLink>
                        </>
                    )}
                </>
            )}
        </S.Outro>
    );
};
