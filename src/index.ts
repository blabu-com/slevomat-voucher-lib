import superagent from 'superagent'
import { Result } from './types'
import * as Logger from 'bunyan'
import { VoucherAction, ErrorCodes } from './enums'

const BASE_URL = 'https://www.slevomat.cz/api'

export { Result, ErrorCodes }
export default class SlevomatClient {
  private token: string
  private logger: Logger

  constructor (token: string, logger) {
    this.token = token
    this.logger = logger
  }

  public async voucherApply (code: string): Promise<Result> {
    return this.voucherAction(code, VoucherAction.VoucherApply)
  }

  public async voucherCheck (code: string): Promise<Result> {
    return this.voucherAction(code, VoucherAction.VoucherCheck)
  }

  private async voucherAction (code: string, action: VoucherAction): Promise<Result> {
    let result
    try {
      result = await superagent
        .get(`${BASE_URL}/${action}`)
        .query({ code, token: this.token })
    } catch (err) {
      this.logger.error({ err }, `${action} failed`)
      result = err.response
    }
    return result.body
  }
}
