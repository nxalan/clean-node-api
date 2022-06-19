import { HttpResponse } from '@/presentation/protocols'

export interface Middleware {
  handle: (httpRequest: any) => Promise<HttpResponse>
}
