//inferTypes (Implicit types)
// let userName='Adarsh';
// let toatal=30_0000;
// toatal='100';


//Defining type (explicit types)
// let userName: string = 'Adarsh'
// let subscriber: number = 30_000;
// let subscribed: boolean = true;
// let skills: string[] = ['javascript', 'node', 'expless', 'mongodb', 'postgresSQL', 'html and css', 'bootstrap', 'typeScript', 'git'];
// let mark:number[]=[23,56,342,5];
// let userDetails:{name:string,age:number,salary:number}={
//     name:'Adarsh',
//     age:23,
//     salary:96000
// };

//INTERFACE

interface Details {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

let userDetails: Details = {
    name: 'Adarsh',
    age: 23,
    salary: 98_000,
    getName() {
        console.log(this.name);

    },

};
let adminDetails: Details = {
    name: 'Adarsh shanu',
    age: 25,
    salary: 2_00_000,
    getName() {
        console.log(this.name);
    },
};