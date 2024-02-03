//-----interTypes (Implicit types)

// let userName='Adarsh';
// let toatal=30_0000;
// toatal='100';


//-----INTERFACE

interface Detail {
    name: string;
    age: number;
    salary: number;
    getName: () => void;
}

let userDetail: Detail = {
    name: 'Adarsh',
    age: 23,
    salary: 98_000,
    getName() {
        console.log(this.name);

    },

};
let adminDetail: Detail = {
    name: 'Adarsh shanu',
    age: 25,
    salary: 2_00_000,
    getName() {
        console.log(this.name);
    },
};



//-------TYPE

// type Details = {
//     name: string;
//     age: number;
//     salary: number;
//     getName: () => void;
// }
// let userDetails: Details = {
//     name: 'Adarsh',
//     age: 23,
//     salary: 98_000,
//     getName() {
//         console.log(this.name);
//     },
// };