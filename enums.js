//ENUMS
// type statusTyp='pending'|'completed'|'failed';
var statusTyp;
(function (statusTyp) {
    statusTyp[statusTyp["PENDING"] = 1] = "PENDING";
    statusTyp[statusTyp["COMPLETED"] = 2] = "COMPLETED";
    statusTyp[statusTyp["FAILED"] = 3] = "FAILED";
})(statusTyp || (statusTyp = {}));
function getStatus(orderId, status) {
    console.log(orderId, '==', status);
}
getStatus('1234', statusTyp.COMPLETED);
