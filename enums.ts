//ENUMS
// type statusTyp='pending'|'completed'|'failed';
const enum statusTyp{
    PENDING=1,
    COMPLETED,
    FAILED,
}

function getStatus(orderId:string,status:statusTyp){
    console.log(orderId,'==',status);
}
getStatus('1234',statusTyp.COMPLETED)