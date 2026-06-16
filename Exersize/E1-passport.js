// passport details
class Employee{
  // class consturctor
  constructor(passportNo=0, name="not defined", dateOfBirth=0, placeOfBirth="not defined", placeOfIssue="not defined",dateOfIssue=0, dataOfExpiry=0, nationality="not defined"){

    this.passportNo = passportNo;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.placeOfIssue = placeOfIssue;
    this.dateOfIssue = dateOfIssue;
    this.dataOfExpiry = dataOfExpiry;
    this.nationality = nationality;

  }

  // class function
  showDetails(){

    console.log("----------------------------------------");

    console.log(`passportNo": ${this.passportNo}`);
    console.log(`name": ${this.name}`);
    console.log(`dateOfBirth": ${this.dateOfBirth}`);
    console.log(`placeOfBirth": ${this.placeOfBirth}`);
    console.log(`placeOfIssue": ${this.placeOfIssue}`);
    console.log(`dateOfIssue": ${this.dateOfIssue}`);
    console.log(`dataOfExpiry": ${this.dataOfExpiry}`);
    console.log(`nationality": ${this.nationality}`);
  }
};

// object creation
let obj0 = new Employee();
obj0.showDetails();

let obj1 = new Employee("A8846794", "Ram sharma", "01-02-1990", "indore mp", "bhopal", "01-04-2010", "01-04-2020", "INDIAN");
obj1.showDetails();

let obj2 = new Employee("B7754321", "Priya Verma", "15-08-1992", "Bhopal MP", "Delhi", "12-06-2012", "12-06-2022", "INDIAN");
obj2.showDetails();

let obj3 = new Employee("C9987123", "Amit Singh", "22-11-1988", "Jabalpur MP", "Mumbai", "05-09-2011", "05-09-2021", "INDIAN");
obj3.showDetails();

let obj4 = new Employee("D4567890", "Neha Gupta", "10-05-1995", "Gwalior MP", "Pune", "18-03-2015", "18-03-2025", "INDIAN");
obj4.showDetails();

let obj5 = new Employee("E3216547", "Rohit Mishra", "28-12-1991", "Ujjain MP", "Hyderabad", "25-07-2013", "25-07-2023", "INDIAN");
obj5.showDetails();

// copy obj1 in obj6
let obj6 = new Employee(obj1.passportNo, obj1.name, obj1.dateOfBirth, obj1.placeOfBirth, obj1.placeOfIssue, obj1.dateOfIssue, obj1.dataOfExpiry, obj1.nationality);
obj6.showDetails();
