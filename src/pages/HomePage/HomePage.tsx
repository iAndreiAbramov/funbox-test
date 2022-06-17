import React from 'react';

import { ProductsList } from 'components/ProductsList';

import * as S from './HomePage.styled';

export const HomePage: React.FC = () => {
    return (
        <S.Main>
            <ProductsList />
        </S.Main>
    );
};
