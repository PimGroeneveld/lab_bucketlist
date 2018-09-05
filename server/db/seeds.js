use bucketListItems;
db.dropDatabase();

db.listItems.insertMany([
  {
    name: "Graduate CodeClan",
    completed: "No"
  },
  {
    name: "Hold a world record",
    completed: "No"
  },
  {
    name: "Marry Leo DiCaprio",
    completed: "Yes"
  }
]);
