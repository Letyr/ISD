export interface ITransfer {
    id: number;

    amount: number;

    commentary?: string;

    createdAt: Date;

    updatedAt: Date;

    accountId: number;

    categoryId: number;
}