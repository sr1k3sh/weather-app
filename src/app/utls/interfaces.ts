export interface SearchResults {
    total: number;
    timezone: string;
    summary: string;
    hourly: object;
    results: Array<object>;
    currently:object;
    daily:Array<object>;
}

export interface CurrentResults {
    uvIndex:number;
}

export interface OpenResults{
    name:string;
}

export interface ExpandObj {
    expand?: false;
    index?: 0;
    data?:any;
}