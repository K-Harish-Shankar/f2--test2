/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
  const developers = arr.filter(employee => employee.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
    
  }
  
  function addData() {
    //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);

  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
  const  employees = arr.filter(employee => employee.profession !== "admin");
  console.log(employees);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "Harish", age: "25", profession: "manager" },
        { id: 6, name: "Trilok", age: "25", profession: "developer" },
        { id: 7, name: "Gautam", age: "18", profession: "designer" }
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }