// ---UNION / OPTIONAL

type Detailss = {
    name: string;
    age: number | String;
    salary?: number;
    getName?: () => void;
}
let userDetailsss: Detailss = {
    name: 'Adarsh',
    age: '23',
};

let skillss: (string | number)[] = ['javascript', 'css', 'html', 34, 566, 775, 9000];