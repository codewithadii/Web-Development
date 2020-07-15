show dbs
use Adityacart
show collections

db.items.find({price: 30000})

// deleting files from mongodb
// deleteOne will delete the first matching entry in a multimatch
db.items.deleteOne({price: 30000})

// deletemany will delete all the document
db.items.deleteMany({price: 50000})

