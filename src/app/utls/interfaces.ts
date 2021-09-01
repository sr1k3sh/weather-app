export interface SearchResults {
    total: number;
    timezone: string;
    summary: string;
    hourly: object;
    results: Array<object>;
    currently:object;
}

export interface CurrentResults {
    uvIndex:number;
}