import Decimal from "decimal.js";

export interface ExternalLink {
    name: string,
    value: string,
}

export interface DevTechnology {
    name: string,
    description?: string,
    logo?: string,
}

export interface Operation {
    symbol: string;
    name: string;
    perform: (a: number, b: number) => number;
};