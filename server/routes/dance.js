let express = require("express");
let danceRouter = express.Router();



//import model 

let Dance = require("../model/dance.js");

danceRouter.use((req,res,next)=>{
    for(let key in req.query){
        if(typeof req.query[key]==="string"){
            req.query[key]=req.query[key].toLowerCase();
        }
    } 
    next();
});

// GET ALL

danceRouter.get("/", (req,res)=>{
    Dance.find(req.query, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within the server", err});
        } else{
            res.status(200).send({"message": "Success here is your data", data});
        }
    });
});

// GET BY ID

danceRouter.get("/:_id", (req,res)=>{
    Dance.findOne({"/:_id": req.params._id}, (err, data)=>{
        if(err){
            res.status(500).send({"message": "Error within server", err});
        } else{
            res.status(200).send({"message": "Success here is your data", data})
        
        }
    });
});

//CREATE
danceRouter.post("/", (req,res)=>{
    let newDance= new Dance(req.body);
    newDance.save((err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within the server", err});
        } else{
            res.status(200).send({"message": "Success here is your data", data})
        }

    });
});

//UPDATE

danceRouter.put("/:_id", (req,res)=>{
    Dance.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err,data)=>{
        if(err){
            res.status(500).send({"message":" Error within server", err});
        } else if(data===null){
            res.status(404).send({"message": "Not found"});
        } else{
            res.status(200).send({"message": "Success you made an update!"});
        }
    });
});

//DELETE
danceRouter.delete("/:_id", (req,res)=>{
    Dance.findByIdAndRemove(req.params._id, (err,data)=>{
       if(err){
           res.status(500).send({"message": "Error within server", err});
       } else if(data===null){
           res.status(404).send({"message": "Not Found"});
       } else{
           res.status(200).send({"message": "Success your data has been deleted"});
       }
   });
});

//return Danceability outcomes
// danceRouter.put("/danceable/:_id", (req,res)=>{
//     Dance.findOne({"_id": req.params._id}, (err,data)=>{
//         if(err){
//             res.status(500).send({"message": "Error on server", err});
//         } else if(data===null){
//             res.status(404).send({"message": `Item with id of ${req.params._id} was not found`})
//         } else{
//             data.upvotes +=1;
//             data.save((err, data)=>{
//                 if(err){
//                     res.status(500).send({"message": "Error on server", err});
//                 } else{
//                     res.status(200).send({"message": "Success your data has been updated", data});

//                 }
//             });

//         }
//     })

// });



module.exports = danceRouter;


