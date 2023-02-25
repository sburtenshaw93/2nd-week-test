////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE

class Employee {
    constructor(name, shifts){
        this.name = name
        this.shifts = shifts
    }
    getSchedule(){
        console.log(`${name} works on ${shifts}`)
    }
}

/*
Create a new instance of your class.
Save it to a variable called `empOne`.

You can use this sample data or make
up your own:
name: Jess
shifts: weekday mornings, weekday afternoons
*/

//CODE HERE

const employee1= new Employee("Jasmin Smith", "9:15 am - 5:00 pm Monday - Friday")
const employee2 = new Employee("Ron Weasley", "7:00 pm - 12:00 am Monday, Wednesday, Friday")
console.log(employee1)
console.log(employee2)
/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
// employee1.getSchedule()

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE

const empTwo = {...employee1}
console.log(empTwo)

//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE
class Manager extends Employee {
    constructor(name, shifts, employees) {
        super(name, shifts)
        this.employees = employees;
    }

    getEmployees() {
        return this.employees;
    }

    addEmployee(newEmployee) {
        this.employees.push(newEmployee);
    }
}


/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE

const manager1 = new Manager ("Coach", "8:45 am - 5:00 pm Monday - Friday", ["Jessica Day" , "Nick Miller"])
const manager2 = new Manager ("Winston Schmidt", "5:00 pm - 12:00 am Monday, Wednesday, Friday", ["Winston Bisop" , "Cece Parekh"])
console.log(manager1)
console.log(manager2)
/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE

/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 
manager1.addEmployee("Aly Nelson")
/*
Call the `getEmployees` method on the
`manager` object again to confirm 
that an employee was added.
*/

//CODE HERE
const manager1Employees = manager1.getEmployees();
console.log(manager1Employees)