class Emplyee{
  // class consturctor
  constructor(id=0, name="not defined", salary=0){
    this.uid = id;
    this.empname = name;
    this.empsalary = salary;
  }

  // class function
  showDetails(){
    console.log("----base class----");
    console.log(`EmpId": ${this.uid}`);
    console.log(`EmpName": ${this.empname}`);
    console.log(`EmpSalary": ${this.empsalary}`);
  }
};

class salaryDetails extends Emplyee{

  constructor(id=0, name="not defined", salary=0, overTime=0, PfAmount=0){
    super(id, name, salary);
    this.overTime = overTime;
    this.PfAmount = PfAmount;
  }

  showSalarySlip(){
    console.log("----dirived class----");
    this.showDetails();
    console.log(`EmpoverTime": ${this.overTime}`);
    console.log(`EmpPfAmount": ${this.PfAmount}`);
  }
}
// object creation
let obj0 = new Emplyee();
obj0.showDetails();

let obj1 = new Emplyee(1002, "Ram sharma", 50000);
obj1.showDetails();

let obj2 = new Emplyee(obj1.uid, obj1.empname, obj1.empsalary);
obj2.showDetails();

// create object of dirived(child) class
let cObj = new salaryDetails(1003, "samay sharma", 50000, 2500, 1600);
cObj.showSalarySlip();