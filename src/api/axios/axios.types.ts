import { DefaultError, UseMutationOptions } from '@tanstack/react-query'
import '@tanstack/react-query'
import { AxiosError } from 'axios'

export type CustomHookMutationOptions<
  TData = unknown,
  TVariables = void,
  TError = DefaultError,
  TContext = unknown,
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>

export interface PaginationRequest {
  page?: number
  count?: number
  query?: string
}

export interface PaginationResponse<
  D,
  T extends number | object | null = number,
> {
  data: D[]
  total: T
}

export interface ErrorResponse {
  message: string
  error: string
  statusCode: number
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<ErrorResponse>
  }
}
