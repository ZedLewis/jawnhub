import * as fromPurchases from "./purchase.reducer"

export interface AppState {
  purchases: fromPurchases.state;
}
