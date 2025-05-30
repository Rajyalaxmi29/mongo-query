db.employees.updateOne(
  { email: "john@gmail.com" },
  { $set: { email: "john@outlook.com" } }
);


db.employees.find().sort({ salary: -1 }).limit(3);


db.employees.updateMany(
  {},
  { $inc: { salary: 1000 } }
);

db.employees.insertOne({
    name: "Christy",
    email: "christy@gmail.com",
    department: "admin",
    salary: 2556,
    location: ["AZ", "TX"],
    date: Date(),
})

db.employees.deleteMany({ department: "admin" });