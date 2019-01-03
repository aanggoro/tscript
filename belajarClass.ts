//declare interface LabelledValue
interface LabelledValue {
    label: String;
}

//function printLabel use interface LabelledValue
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

//assign object
let myObj = {size: 10, label:"Size 10 object"};

//print object to console
printLabel(myObj);