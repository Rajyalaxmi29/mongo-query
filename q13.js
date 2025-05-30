//creating table of orders with empid,iteams,....

db.orders.insertMany([
  {
    empId: ObjectId('68395b2c8d5c4261e66c4bd0'),
    items: { "2": 1, "4": 5 },
    orderValue: 780,
    status: "Completed"
  },
  {
    empId: ObjectId('68395b2c8d5c4261e66c4bd1'),
    items: { "3": 2 },
    orderValue: 260,
    status: "Pending"
  },
  {
    empId: ObjectId('683983858d5c4261e66c4bd5'),
    items: { "1": 1, "5": 2 },
    orderValue: 510,
    status: "Shipped"
  }
])
//displaying all orders placed by employees
db.orders.aggregate([
  {
    $lookup: {
      from: "employees",
      localField: "empId",
      foreignField: "_id",
      as: "employeeDetails"
    }
  }
])
