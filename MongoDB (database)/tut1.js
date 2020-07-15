// Inserting data in mongodb
use Adityacart
// inserting one row
db.item.insertOne({Name:'Samsung 10s', Price: 30000, rating: 4.5, Quantity: 342, Sold : 69})

// inserting many row
db.item.insertMany([{Name:'Samsung 10s', Price: 30000, rating: 4.5, Quantity: 342, Sold : 69}, {Name:'oppo', Price: 20000, rating: 2.5, Quantity: 232, Sold : 93}, {Name:'apple', Price: 70000, rating: 3.5, Quantity: 452, Sold : 33} ])
