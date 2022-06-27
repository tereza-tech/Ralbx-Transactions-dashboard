export interface Transaction {
    id: number;
    name: string;
    from: string;
    to: string;
    amount: number;
    date: string;
    note?: string;
}