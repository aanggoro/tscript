//function printLabel use interface LabelledValue
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
//assign object
var myObj = { size: 10, label: "Size 10 object" };
//print object to console
printLabel(myObj);
