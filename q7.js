//display top 3 highest paid employees-

db.employees.aggregate([{$sort:{salary:-1}},{$limit:3}])

//display annual salary of each employee
db.employees.aggregate([{$project: {name: 1, annualSalary: {$multiply: ["$salary", 12]}}}])
//if age>40 then display "band a" else "band b"
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      band: {
        $cond: { if: { $gt: ["$age", 40] }, then: "Band A", else: "Band B" }
      }
    }
  }
])

