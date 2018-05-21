export namespace Enums {
    export enum A {
        a,
        b,
        c
    }

    export enum B {
        a,
        b,
        c
    }

    export const D = A.a;

    export enum E {
        a = 'a',
        b = 'b',
        c = 'c'
    }

    export enum F {
        a = <any>'a',
        b = <any>'b',
        c = <any>'c'
    }

}


export enum C {
    a,
    b,
    c
}
