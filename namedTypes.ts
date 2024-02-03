//NAMED TYPES
type statusType = 'pending' | 'completed' | 'failed'|'';
type ToggleSwitch='off'|'on';

let currentStatus: statusType = '';
let toggleSwitch:ToggleSwitch='off';


toggleSwitch='off';



const response:string = 'pending';

if (response === 'completed') {
    currentStatus = "pending"
}