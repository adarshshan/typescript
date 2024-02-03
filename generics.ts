//GENERICS

function getAge<T>(age: T): T {
    return age;
}

getAge(23)//act as infer
getAge('23');//act as infer

getAge<string>('23')
getAge<number>(23)




////
type Usertype = {
    name: string;
    age: number;
}
type Admintype = {
    firstName: string;
    role: number;
}
const userData: Usertype = {
    name: 'Debug Media',
    age: 20,
}
const adminData: Admintype = {
    firstName: 'Debug Media',
    role: 20,
}
function getDetail<T>(detail: T): T {
    return detail
}

const userValue = getDetail<Usertype>(userData);
const adminValue = getDetail<Admintype>(adminData);


// CAN USE UNION
// function getDetail(detail:Usertype|Admintype):Usertype|Admintype {
//     return detail.
// }
//CAN USE FUNCTION OVERLOADING
// function getDetail(detail:Usertype):Usertype;
// function getDetail(detail:Admintype):Admintype;
// function getDetail(detail:any):any {
//     return detail
// }


//IN THE CASE OF DUPLICATION OF DATA INSIDE OF THE OBJECT
// type User={
//     name:string;
//     age:number;
// }
// type Admin={
//     name:string;
//     age:number;
//     role:number;
// }//OR

type User = {
    name: string;
    age: number;
}
type Admin = User & {
    role: number;
}





const user: User = {
    name: 'Debug Media',
    age: 20,
}
const admin: Admin = {
    name: 'Adarsh',
    age: 23,
    role: 20,
}

//IN THE CASE OF INTERfACE

interface Userr {
    name: string;
    age: number;
}
interface Adminn extends Userr {
    role: number;
}
// if in the case of there is no extra data in Userr
interface Adminn extends Userr {};


const userr: Userr = {
    name: 'Debug Media',
    age: 20,
}
const adminn: Adminn = {
    name: 'Adarsh',
    age: 23,
    role: 20,
}