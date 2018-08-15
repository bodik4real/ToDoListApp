export class ResponseModel  {
    public isSuccessful: boolean;
    public errorMessage: string;
}

export class ResponseModeExtended<T> extends ResponseModel {
    public result: T;
}