export enum CardIntroText {
    Regular = 'Сказочное заморское яство',
    Selected = 'Котэ не одобряет?',
}

export interface IProduct {
    id: number;
    isAvailable: boolean;
    title: string;
    subtitle: string;
    amount: number;
    description: string;
    weight: number;
    bonusValue?: number;
    bonusText?: string;
    extraText?: string;
    outroTextSelected: string;
}
