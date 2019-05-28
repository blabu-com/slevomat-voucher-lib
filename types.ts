export interface Result {
  result: Boolean
  data: Data
  error: Error
}

interface Data {
  token: string
  code: string
  voucherData: VoucherData
}
interface VoucherData {
  id: number
  orderId: number
  title: string
  ordered: Date
  paidDate: Date
  validFrom: Date
  validTo: Date
  key: string
  code: string
  product: number
  productName: string
  variant: number
  variantName: string
  imageUrl: string
  smallImageUrl: string
  productUrl: string
}

interface Error {
  code: number
  message: string
}
