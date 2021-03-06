export interface APIResponse {
  data: [Transaction];
}

export interface Transaction {
  amount: number;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;
}
