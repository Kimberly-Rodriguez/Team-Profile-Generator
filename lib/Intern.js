const Employee = require("./Employee");

class Intern extends Employee {
  constructor( name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }
  getRole(){
    if (this.role !== "Employee") {
      return "Intern";
    }
  }
  getSchool(){
    return this.school
  }

}

module.exports = Intern; 