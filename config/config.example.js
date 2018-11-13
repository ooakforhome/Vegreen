
// module.exports = {
//   db: 'mongodb://exampleUser:changeThisInfo@localhost:27017/my_db_name',
// db_dev: 'mongodb://exampleUser:changeThisInfo@localhost:27017/my_db_name'
// };



// mongoimport -d vegreendb -c uploads.chunks --type json --file mongouploadschunks.json
// mongoimport -d vegreendb -c uploads.files --type json --file mongouploadsfiles.json
//
// mongoexport -d vegreendb --collection regulars --type csv --fields category,spicy,garlic,nuts,dishId,name,nameCH,price,description --out regular.csv
// mongoexport -d vegreendb --collection regulars --type json --out regular.json
//
// mongoimport -d vegreendb -c regulars --type csv --file C:\Users\David\Desktop\RegularDishesa.csv --headerline

mongoimport -d vegreendb --collection regulars --type json --file regular.json
