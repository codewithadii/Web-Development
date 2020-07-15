// searching for data in mongo db
use Adityacart

// this query will return all the object with rating: 3.5
db.items.find({rating: 4.4})
// this query will return all the object which is greater than(gt) or equal(gte) to with rating: 3.5
db.items.find({rating: {$gte: 3.5}})
// And operator
db.items.find({rating: {$gte: 3.5}, price: {$lte:30000}})
// or operator
db.items.find({$or: [{rating: {$lte: 4.4}}, {price: {$gte: 15000}}]})

