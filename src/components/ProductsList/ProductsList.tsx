import React from 'react';
import { products } from 'constants/products';

import { ProductCard } from 'components/ProductCard';

import * as S from './ProductsList.styled';

export const ProductsList: React.FC = () => {
    return (
        <S.ListWrapper>
            <S.HiddenTitle className="visually-hidden">
                Продукты для котиков
            </S.HiddenTitle>
            <S.VisibleTitle>Ты сегодня покормил кота?</S.VisibleTitle>
            <S.ListContentWrapper>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </S.ListContentWrapper>
        </S.ListWrapper>
    );
};
