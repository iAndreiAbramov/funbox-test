import React from 'react';
import { products } from 'constants/products';
import { useIsInternetExplorer } from 'hooks/useIsInternetExplorer';

import { ProductCard } from 'components/ProductCard';

import * as S from './ProductsList.styled';

export const ProductsList: React.FC = () => {
    const isInternetExplorer = useIsInternetExplorer();

    return (
        <S.ListWrapper isInternetExplorer={isInternetExplorer}>
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
