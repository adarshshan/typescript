//ENUMS
// type statusTyp='pending'|'completed'|'failed';
const enum statusTyp {
    PENDING = 1,
    COMPLETED,
    FAILED,
}
// enum statusTyp{
//     PENDING=1,
//     COMPLETED,
//     FAILED, 
// }

function getStatus(orderId: string, status: statusTyp) {
    console.log(orderId, '==', status);
}
getStatus('1234', statusTyp.COMPLETED);
// getStatus('1234','');we dont have suggession for this (union has). solution given below.

const statusTyps = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
}as const;//it will make this object as readonly

function getStat(orderId: string, status: keyof typeof statusTyps) {
    // statusTyps.COMPLETED='hello';
console.log(orderId+'=='+statusTyps[status]);//value will be displayed.
console.log(orderId+'=='+status);//key will be displayed
}
getStat('1234','COMPLETED')//suggession will be available.