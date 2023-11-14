const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://rahulraj6263707:Pradeep123@studentlms.jr2y1tc.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
module.exports.mongoose=mongoose;