export interface IOption extends RequestInit {
    auth?: string;
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
    handleErrors?: (errors: { message: string }[], data: any) => void;
}
export default class {
    constructor(endpoint: string, refresh?: () => void);
    send<T = unknown>(
        rawQuery: string,
        variables: { [index: string]: any },
        operationName: string
    ): Promise<T>;
}
