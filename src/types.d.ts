import Decimal from "decimal.js";

export interface LinkData {
    title: string,
    value: string,
}

export interface DevTechnology {
    name: string,
    description?: string,
    logo?: string,
    officialSite?: string,
}

export interface Operation {
    symbol: string,
    name: string,
    perform: (a: number, b: number) => number,
};

type ColStartTailwindProperty = `col-start-${number}`;
type ColEndTailwindProperty = `col-end-${number}`;