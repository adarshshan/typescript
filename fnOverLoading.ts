// bad way
function add(num1: number | string, num2: number | string) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return num1 + num2;
}

add(23, 53);
add('23', '53');



//using any
function addd(num1:number,num2:number):number;
function addd(num1:string,num2:string):string;
function addd(num1:boolean,num2:boolean):boolean;//this is called function overloading;

function addd(num1:any,num2:any):any{
    return num1+num2;
}