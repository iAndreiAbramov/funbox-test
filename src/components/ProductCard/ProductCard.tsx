import React from 'react';
import { IProduct } from 'types/products.types';

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
    } = product;
    return (
        <S.CardOuterWrapper>
            <S.CardInnerWrapper>
                <S.CardIntro>Сказочное заморское яство</S.CardIntro>
                <S.CardTitle>
                    {title}
                    <S.CardSubtitle>{subtitle}</S.CardSubtitle>
                </S.CardTitle>
                <S.CardInfo>
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
                <S.ImageWrapper>
                    <img
                        src="/img/content/photo.png"
                        width="320"
                        height="272"
                        alt="Поторопись, заказчик ждет!"
                        srcSet="/img/content/photo.png 1x, /img/content/photo@2x.png 2x"
                    />
                </S.ImageWrapper>
                <S.Label>
                    <S.LabelValue>
                        {String(weight).replace(/\./, ',')}
                    </S.LabelValue>
                    <S.LabelUnit>кг</S.LabelUnit>
                </S.Label>
            </S.CardInnerWrapper>
            <S.Outro>
                <S.OutroText>Чего сидишь? Порадуй котэ, &nbsp;</S.OutroText>
                <S.OutroLink>купи.</S.OutroLink>
            </S.Outro>
        </S.CardOuterWrapper>
    );
};
