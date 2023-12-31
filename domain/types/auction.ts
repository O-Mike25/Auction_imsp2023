import { Item } from "./items";

export enum StatusAuction {
  OPEN = "open",
  CLOSE = "close",
}
export type Auction = {
  id: string;
  sellerId: string;
  startDate: any;
  endDate: any;
  item: Item;
  itemId: string;
  winner: string;
  status: StatusAuction;
};
