export enum VoucherAction {
  VoucherCheck = 'vouchercheck',
  VoucherApply = 'voucherapply'
}

export enum ErrorCodes {
  BadRequest = 1201,
  WrongToken = 1202,
  NoSuchVoucher = 1203,
  NotPaid = 1204,
  AlreadyRedeemed = 1205,
  AlreadyRefunded = 1206,
  WasCanceled = 1207,
  PromotionFinished = 1208,
  PromotionNotStarted = 1209,
  ServerError = 1211
}
