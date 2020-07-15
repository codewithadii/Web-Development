// updating data in mongo db
// for updating one item use updateOne
db.items.updateOne({price: 25000}, {$set: {price: 17000}}

// for updating Many items use updateMany
db.items.updateMany({price: 25000}, {$set: {price: 17000}}
