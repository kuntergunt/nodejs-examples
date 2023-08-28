


export interface Test1 {
    public name: string;
    private age: number;
}

export interface Test2 extends Test1 {
    //public constructor(name: string, age: number);

    public setName(newName: string): void;

    public getName(): string;

    private incrementAge(years: number): void;
}


declare var testMe: Test;