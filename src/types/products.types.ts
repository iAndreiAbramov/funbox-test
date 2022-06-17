export interface IProduct {
    id: number;
    title: string;
    subtitle: string;
    amount: number;
    description: string;
    weight: number;
    bonusValue?: number;
    bonusText?: string;
    extraText?: string;
}
