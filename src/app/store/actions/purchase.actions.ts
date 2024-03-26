import {createAction, props} from "@ngrx/store";
import {PurchaseRequest} from "../../models/purchase-request.model";

export const CreatePurchase = createAction(
  "[Purchases] Create Purchase Record",
  props<{ payload: PurchaseRequest }>()
);

export const DeletePurchase = createAction(
  "[Purchases] Delete Purchase Record",
  props<{ payload: PurchaseRequest }>()
)
