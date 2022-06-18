import React, { useCallback, useState } from 'react';
import { useIsInternetExplorer } from 'hooks/useIsInternetExplorer';
import { CardIntroText, IProduct } from 'types/products.types';

import { CardOutro } from 'components/CardOutro';

import * as S from './ProductCard.styled';

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
    const {
        title,
        subtitle,
        amount,
        description,
        bonusValue,
        bonusText,
        extraText,
        weight,
        outroTextSelected,
        isAvailable,
    } = product;
    const [isSelected, setIsSelected] = useState(false);
    const [isPainted, setIsPainted] = useState(false);
    const [introText, setIntroText] = useState(CardIntroText.Regular);

    const isInternetExplorer = useIsInternetExplorer();

    const handleCardClick = useCallback(() => {
        if (!isAvailable) {
            return;
        }
        setIsSelected((current) => !current);
    }, [isAvailable]);

    const handleCardMouseLeave = useCallback(() => {
        if (!isAvailable) {
            return;
        }
        if (introText === CardIntroText.Selected) {
            setIntroText(CardIntroText.Regular);
        }
        if (isSelected) {
            setIsPainted(true);
        } else {
            setIsPainted(false);
        }
    }, [isSelected, introText, isAvailable]);

    const handleCardMouseEnter = useCallback(() => {
        if (!isAvailable) {
            return;
        }
        if (isPainted) {
            setIntroText(CardIntroText.Selected);
        }
    }, [isPainted, isAvailable]);

    return (
        <S.CardOuterWrapper>
            <S.CardInnerWrapper
                onClick={handleCardClick}
                onMouseLeave={handleCardMouseLeave}
                onMouseEnter={handleCardMouseEnter}
                isPainted={isPainted}
                isAvailable={isAvailable}
                isInternetExplorer={isInternetExplorer}
            >
                <S.CardIntro
                    isPainted={introText === CardIntroText.Selected}
                    isAvailable={isAvailable}
                >
                    {introText}
                </S.CardIntro>
                <S.CardTitle isAvailable={isAvailable}>
                    {title}
                    <S.CardSubtitle isAvailable={isAvailable}>
                        {subtitle}
                    </S.CardSubtitle>
                </S.CardTitle>
                <S.CardInfo isAvailable={isAvailable}>
                    <S.CardDescription>
                        <S.DescriptionItem>
                            <S.Value>{amount}</S.Value>
                            <S.Description>{description}</S.Description>
                        </S.DescriptionItem>
                        <S.DescriptionItem>
                            <S.Value>
                                {bonusValue && bonusValue > 1 ? bonusValue : ''}
                            </S.Value>
                            <S.Description>{bonusText}</S.Description>
                        </S.DescriptionItem>
                        <S.DescriptionItem>
                            <S.Description>{extraText}</S.Description>
                        </S.DescriptionItem>
                    </S.CardDescription>
                </S.CardInfo>
                <S.ImageWrapper isAvailable={isAvailable}>
                    <img
                        src="/img/content/photo.png"
                        width="320"
                        height="272"
                        alt="Поторопись, заказчик ждет!"
                        srcSet="/img/content/photo.png 1x, /img/content/photo@2x.png 2x"
                    />
                </S.ImageWrapper>
                <S.Label isPainted={isPainted} isAvailable={isAvailable}>
                    <S.LabelValue>
                        {String(weight).replace(/\./, ',')}
                    </S.LabelValue>
                    <S.LabelUnit>кг</S.LabelUnit>
                </S.Label>
            </S.CardInnerWrapper>
            <CardOutro
                isAvailable={isAvailable}
                isPainted={isPainted}
                outroTextSelected={outroTextSelected}
                subtitle={subtitle}
            />
        </S.CardOuterWrapper>
    );
};
