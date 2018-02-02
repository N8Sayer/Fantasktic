export interface ActionResult<TPayload> {
  type: string;
  payload: TPayload;
}

export type ActionCreator<TPayload> = (...args: any[]) => ActionResult<TPayload>;
