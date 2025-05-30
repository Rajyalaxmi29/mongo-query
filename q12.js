db.address.insertMany([
  {
    empId: ObjectId("68395b2c8d5c4261e66c4bd0"),
    residence: {
      doorNum: "A-135",
      street: "Verdin Ct",
      city: "Columbus",
      state: "OH",
    },
  },
  {
    empId: ObjectId("68395b2c8d5c4261e66c4bd1"),
    residence: {
      doorNum: "AH-320",
      street: "Bay Meadows",
      city: "Jacksonville",
      state: "FL",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
  { $match: { email: "brian@gmail.com" } },
  { $unwind: "$addr" },
  { $project: { name: 1, "addr.residence.city": 1 } },
]);