import {PurchaseRequest} from "../../models/purchase-request.model";
import {createReducer, on} from "@ngrx/store";
import {CreatePurchase} from "../actions/purchase.actions";

export interface state {
  savedPurchases: PurchaseRequest[]
}

export const initialState: state = {
  savedPurchases: []
}

export const purchaseReducer = createReducer(
  initialState,
  on(CreatePurchase, (state, { payload }) => ({
    ...state,
    savedPurchases: [...state.savedPurchases, payload]
  }))
);
