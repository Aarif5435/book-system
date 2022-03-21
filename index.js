const express = require("express");
const { default: mongoose } = require("mongoose");

const mogoose = require("mongoose");
const { serializeInteger } = require("whatwg-url");

const app = express();

const connect = ()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/practice");
} 

const userSchema = mogoose.Schema({
    firstName : {type: String, required: true,minLength:3,maxLength:30},
    lastName  : {type: String, required: false,minLength:3,maxLength:30},
    age       : {type:integer , required: true,},
    email     : {type:String, required:true, uniqe:true},
    profileImagese: [{required:true}],
    timestamps:{type:String,required:true}
    
});

const userModel = mogoose.model("user", userSchema);

const bookSchema = mogoose.Schema({
    likes:{type : integer, default:0},
    coverImage : {type:String,required:true},
    content : {type : String,required:true},
    timestamps:{type:String,required:true},
    publicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "publication",
        required: true,
      },
});

const bookModel = mogoose.model("book", userSchema);

const PublicationSchema = mogoose.Schema({
    name:{type:String},
    timestamps:{type:String,required:true}
});

const Publicationmodel = mongoose.model("publication",PublicationSchema);

const commentSchema = mogoose.Schema({
    body : {type:String,required:true},

    timestamps:{type:String,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
});

const commmentmodel = mogoose.model("comment",commentSchema);

app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.send( user ); 
    } catch (err) {
      return res.send(err);
    }
  });


app.listen(5000, ()=>{
    console.log("listening at 5000");
})