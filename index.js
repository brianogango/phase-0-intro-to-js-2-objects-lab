// Write your solution in this file!
const employee = {
name: "Sam",
streetAddress: "11 Broadway",
};

function destructivelyDeleteFromEmployeeByKey(employee, key) { 
delete employee[key]; 
return employee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key){
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}
function updateEmployeeWithKeyAndValue(employee, key, val ) {
   const newObj = {...employee};
   newObj[key] = val;
   return newObj;
}
