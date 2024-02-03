












//FUNCTION

type Details = {
    name: string;
    age: number | String;
    salary?: number;
    getName?: () => void;
}
let userDetails: Details = {
    name: 'Adarsh',
    age: '23',
};
let adminDetails: Details = {
    name: 'Adarsh shanu',
    age: 25,
    salary: 2_00_000,
    getName() {
        console.log(this.name);
    },
};

function getUserName(userDetails: Details, adminDetails: Details) {
    return userDetails.age //suggession will be available here
}//OR
function getname({ name, age }: { name: String; age: number | String }) {//inline
    return name
}

function getAge(userDetails: Details):string{
    return userDetails.name;
}
//if there is no return 
// function getAge(userDetails:Details):void{
//     console.log(userDetails.name);
// }
// getUserName(userDetails, adminDetails)
let newValue = getAge(userDetails);
newValue.length;
