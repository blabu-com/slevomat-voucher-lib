import superagent from 'superagent'
import { Result } from './types'

const BASE_URL = 'https://www.slevomat.cz/api'

export default class SlevomatClient {
  private readonly token: string

  constructor (token: string) {
    this.token = token
  }

  public async voucherApply (code: string): Promise<Result> {
    const result = await superagent
      .get(`${BASE_URL}/voucherapply`)
      .query({ code, token: this.token })
    return result.body
  }

  public async voucherCheck (code: string): Promise<Result> {
    const result = await superagent
      .get(`${BASE_URL}/vouchercheck`)
      .query({ code, token: this.token })
    return result.body
  }
}
