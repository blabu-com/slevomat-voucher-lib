import superagent from 'superagent'
import { Result } from './types'
import * as Logger from 'bunyan'

const BASE_URL = 'https://www.slevomat.cz/api'

export default class SlevomatClient {
  private token: string
  private logger: Logger

  constructor (token: string, logger) {
    this.token = token
    this.logger = logger
  }

  public async voucherApply (code: string): Promise<Result> {
    let result
    try {
      result = await superagent
        .get(`${BASE_URL}/voucherapply`)
        .query({ code, token: this.token })
    } catch (err) {
      this.logger.info({ err }, 'failed to apply voucher')
    }
    return result.body
  }

  public async voucherCheck (code: string): Promise<Result> {
    let result
    try {
      result = await superagent
        .get(`${BASE_URL}/vouchercheck`)
        .query({ code, token: this.token })
    } catch (err) {
      this.logger.info({ err }, 'failed to check voucher')
    }
    return result.body
  }
}
