'use strict';
let EmployeeArr = [];
function getEmployee() {
    let jsonArr = localStorage.getItem("allEmployee");
    EmployeeArr = JSON.parse(jsonArr);
}

function render() {

    getEmployee();
    if (EmployeeArr == null) {
        EmployeeArr = [];
    }

    const departments = [];
    const employeeCountByDepartment = {};
    const averageSalaryByDepartment = {};
    const totalSalaryByDepartment = {};
    let totalEmployees;
    let overallTotalSalary = 0;
    let overallAverageSalary = 0;

    totalEmployees = EmployeeArr.length;

    for (let i = 0; i < EmployeeArr.length; i++) {
        overallTotalSalary += EmployeeArr[i].Salary;
    }
    overallTotalSalary = Math.round(overallTotalSalary);
    if (totalEmployees != 0) {
        overallAverageSalary = Math.round(overallTotalSalary / totalEmployees);
    }


    for (let i = 0; i < EmployeeArr.length; i++) {
        const department = EmployeeArr[i].Department;
        if (!departments.includes(department)) {
            departments.push(department);
        }
    }

    for (let i = 0; i < departments.length; i++) {
        const department = departments[i];
        let countByDepartment = 0;
        let totalSalary = 0;
        for (let j = 0; j < EmployeeArr.length; j++) {
            if (EmployeeArr[j].Department === department) {
                countByDepartment++;
                totalSalary += EmployeeArr[j].Salary;
            }
        }
        employeeCountByDepartment[department] = countByDepartment;
        totalSalaryByDepartment[department] = Math.round(totalSalary);
        averageSalaryByDepartment[department] = Math.round(totalSalary / countByDepartment);
    }



    let divStile = document.getElementById('employee-table');


    for (let i = 0; i < departments.length; i++) {

        const row = document.createElement('tr');
        const departmentCell = document.createElement('td');
        const numOfEmpleesCell = document.createElement('td');
        const averageSalaryCell = document.createElement('td');
        const totalSalaryCell = document.createElement('td');

        departmentCell.textContent = departments[i];
        numOfEmpleesCell.textContent = employeeCountByDepartment[departments[i]];
        averageSalaryCell.textContent = averageSalaryByDepartment[departments[i]];
        totalSalaryCell.textContent = totalSalaryByDepartment[departments[i]];

        row.appendChild(departmentCell);
        row.appendChild(numOfEmpleesCell);
        row.appendChild(averageSalaryCell);
        row.appendChild(totalSalaryCell);


        divStile.querySelector('tbody').appendChild(row);
    }


    const tfoot = document.createElement('tfoot');

    // Total number of employees
    const tr1 = document.createElement('tr');
    const tr1td1 = document.createElement('td');
    const tr1td2 = document.createElement('td');
    const tr1td3 = document.createElement('td');
    const tr1td4 = document.createElement('td');
    tr1td1.textContent = 'Total number of employees';
    tr1td2.textContent = totalEmployees;
    tr1.appendChild(tr1td1);
    tr1.appendChild(tr1td2);
    tr1.appendChild(tr1td3);
    tr1.appendChild(tr1td4);

    // Average salary for all departments
    const tr2 = document.createElement('tr');
    const tr2td1 = document.createElement('td');
    const tr2td2 = document.createElement('td');
    const tr2td3 = document.createElement('td');
    const tr2td4 = document.createElement('td');
    tr2td1.textContent = 'Average salary for all departments';
    tr2td3.textContent = overallAverageSalary;
    tr2.appendChild(tr2td1);
    tr2.appendChild(tr2td2);
    tr2.appendChild(tr2td3);
    tr2.appendChild(tr2td4);


    // Total salary for all departments
    const tr3 = document.createElement('tr');
    const tr3td1 = document.createElement('td');
    const tr3td2 = document.createElement('td');
    const tr3td3 = document.createElement('td');
    const tr3td4 = document.createElement('td');
    tr3td1.textContent = 'Total salary for all departments';
    tr3td4.textContent = overallTotalSalary;
    tr3.appendChild(tr3td1);
    tr3.appendChild(tr3td2);
    tr3.appendChild(tr3td3);
    tr3.appendChild(tr3td4);

    tfoot.appendChild(tr1);
    tfoot.appendChild(tr2);
    tfoot.appendChild(tr3);
    divStile.appendChild(tfoot);

};





getEmployee();
render();

