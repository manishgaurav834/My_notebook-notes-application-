const express= require('express');
const router=express.Router();
fetchuser= require('../middleware/fetchuser');
const Notes= require('../modules/Notes');
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes',fetchuser,async (req,res)=>{

    const notes =await Notes.find({user:req.user.id});
    res.json(notes)

    

})

router.post('/addnotes',fetchuser,[
    body('title').isLength({min:3}),
    body('description').isLength({min:5})
],async (req,res)=>{

    try {
        const{title,description,tag}= req.body;
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const note = new Notes({
            title , description , tag , user : req.user.id
    
    
        })
    
        const savednote = await note.save()
    
        res.json(savednote)
    
        
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
    
   
    

    

})

router.delete('/deletenote/:id',fetchuser,async (req,res)=>{


    try {
        let note = await Notes.findById(req.params.id)

        if(!note){res.status(400).send("not found")}
    
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("not allowed")
        }
    
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", note:note})
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
   

})

router.put('/updatenotes/:id',fetchuser,async (req,res)=>{

    try {
        const {title,description,tag} = req.body;

        const newnote ={};
        if(title)(newnote.title=title);
        if(description)(newnote.description=description);
        if(tag)(newnote.tag=tag);
    
        let note = await Notes.findById(req.params.id)
    
        if(!note){res.status(400).send("not found")}
    
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("not allowed")
        }
    
        note = await Notes.findByIdAndUpdate(req.params.id,{$set : newnote}, {new:true})
        res.json({note})
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
   

})





module.exports=router;