// enum statusTyp{
//     PENDING=1,
//     COMPLETED,
//     FAILED, 
// }
function getStatus(orderId, status) {
    console.log(orderId, '==', status);
}
getStatus('1234', 2 /* statusTyp.COMPLETED */);
// getStatus('1234','');we dont have suggession for this (union has). solution given below.
var statusTyps = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
};
function getStat(orderId, status) {
    statusTyps.COMPLETED = 'hello';
    console.log(orderId + '==' + statusTyps[status]); //value will be displayed.
    console.log(orderId + '==' + status); //key will be displayed
}
getStat('1234', 'COMPLETED'); //suggession will be available.
