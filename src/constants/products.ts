import { IProduct } from 'types/products.types';

export const products: IProduct[] = [
    {
        id: 1,
        title: 'Нямушка',
        subtitle: 'с фуа-гра',
        amount: 10,
        description: 'порций',
        bonusValue: 1,
        bonusText: 'мышь в подарок',
        weight: 0.5,
    },
    {
        id: 2,
        title: 'Нямушка',
        subtitle: 'с рыбой',
        amount: 40,
        description: 'порций',
        bonusValue: 2,
        bonusText: 'мыши в подарок',
        weight: 2,
    },
    {
        id: 3,
        title: 'Нямушка',
        subtitle: 'с курой',
        amount: 100,
        description: 'порций',
        bonusValue: 5,
        bonusText: 'мышей в подарок',
        extraText: 'заказчик доволен',
        weight: 5,
    },
];
