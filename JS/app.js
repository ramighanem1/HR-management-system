function Employee(EmployeeId, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeId = EmployeeId;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
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

Employee.prototype.render = function () {
    document.write(`*) Employee Name : ${this.FullName}  *)  Salary : ${this.Salary} <br>`);
};

let  employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "image1.jpg", 0);
let  employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./Data/image2.jpg", 0);
let  employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./Data/image3.jpg", 0);
let  employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./Data/image4.jpg", 0);
let  employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./Data/image5.jpg", 0);
let  employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "./Data/image6.jpg", 0);
let  employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./Data/image7.jpg", 0);

employee1.calculateSalary();
employee2.calculateSalary();
employee3.calculateSalary();
employee4.calculateSalary();
employee5.calculateSalary();
employee6.calculateSalary();
employee7.calculateSalary();

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();