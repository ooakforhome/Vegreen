// module.exports = {
//   db: 'mongodb://vegreen:12345@localhost:27017/Vegreen',
//   db_dev: 'mongodb://vegreen:12345@localhost:27017/Vegreen',
// };
//
//
// module.exports = {
//   db: 'mongodb://exampleUser:changeThisInfo@localhost:27017/my_db_name',
// db_dev: 'mongodb://exampleUser:changeThisInfo@localhost:27017/my_db_name'
// };
//
//
// module.exports = {
//   db: 'mongodb://localhost:27017/Vegreen',
//   db_dev: 'mongodb://localhost:27017/Vegreen',
// };



// mongoimport -d Vegreen -c uploads.chunks --type json --file C:\Users\David\Desktop\EHF-Product_CSV\windowhardware.json
// mongoimport -d Vegreen -c uploads.files --type json --file C:\Users\David\Desktop\EHF-Product_CSV\windowhardware.json

// mongoexport --host localhost:27017 --db Vegreen --collection regulars --type csv --out regular.csv

mongoexport -d Vegreen --collection regulars --type csv --fields category,spicy,garlic,nuts,dishId,name,nameCH,price,description --out regular.csv
