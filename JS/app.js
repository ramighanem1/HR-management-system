'use strict';
let EmployeeArr = [];
function Employee(EmployeeId, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeId = EmployeeId;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
    EmployeeArr.push(this);
}

Employee.prototype.calculateSalary = function () {
    if (this.Level == "Senior") {
        this.Salary = Math.floor(Math.random() * 500 + 1500);
        this.Salary = this.Salary - (this.Salary * 0.075);

    }
    else if (this.Level == "Mid-Senior") {
        this.Salary = Math.floor(Math.random() * 500 + 1000);
        this.Salary = this.Salary - (this.Salary * 0.075);
    }
    else if (this.Level == "Junior") {
        this.Salary = Math.floor(Math.random() * 500 + 500);
        this.Salary = this.Salary - (this.Salary * 0.075);
    }
};

function render() {

    let divStile = document.getElementById('employee-container');
    divStile.innerHTML = '';

    getEmployee();

    if (EmployeeArr == null) {
        EmployeeArr = [];
    }
    for (let i = 0; i < EmployeeArr.length; i++) {

        const divEl = document.createElement('div');
        divEl.setAttribute('class', "employee-card");
        divStile.appendChild(divEl);


        //display the Employee img
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', EmployeeArr[i].ImageURL);
        imgEl.setAttribute('alt', "Employee Image");

        //display Name and Id 
        const nameIdEl = document.createElement('p');
        divEl.appendChild(nameIdEl);
        nameIdEl.textContent = `Name: ${EmployeeArr[i].FullName}`;

        const nameIdE2 = document.createElement('p');
        divEl.appendChild(nameIdE2);
        nameIdE2.textContent = `Id: ${EmployeeArr[i].EmployeeId}`;

        //display Department and Level
        const pEl = document.createElement('p');
        divEl.append(pEl);
        pEl.textContent = `Department: ${EmployeeArr[i].Department}`;

        const pE2 = document.createElement('p');
        divEl.append(pE2);
        pE2.textContent = `Level: ${EmployeeArr[i].Level}`;

        const pE3 = document.createElement('p');
        divEl.append(pE3);
        pE3.textContent = `Salary: ${EmployeeArr[i].Salary}`;



    }
};


var EmployeesIdes = new Array();

function generateEmployeeId(existingEmployees) {
    const id = Math.floor(Math.random() * 9000) + 1000;
    if (existingEmployees.includes(id)) { // If the number is already in use, generate a new one
        return generateEmployeeId(existingEmployees);
    }
    EmployeesIdes.push(id);
    return id;
}

//Events

let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEmployeeFormHandler);

function addNewEmployeeFormHandler(event) {

    event.preventDefault();

    const employeeFullName = event.target.fullName.value;
    const department = document.getElementById("department");
    const departmentValue = department.value;
    const level = document.getElementById("level");
    const levelValue = level.value;
    const employeeImageURL = event.target.imageURL.value;
    const generatedEmployeeId = generateEmployeeId(EmployeesIdes);

    let newEmployee = new Employee(generatedEmployeeId, employeeFullName, departmentValue, levelValue, employeeImageURL, 0);
    newEmployee.calculateSalary();

    let jsonArr = JSON.stringify(EmployeeArr);
    localStorage.setItem("allEmployee", jsonArr);

    render();

    document.getElementById("employeeForm").reset();
}

function getEmployee() {
    let jsonArr = localStorage.getItem("allEmployee");
    EmployeeArr = JSON.parse(jsonArr);
}

getEmployee();
render();



