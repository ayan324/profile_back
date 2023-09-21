const Profile = require('../models/profile_model')

const createProfile = async(req,res)=>{
    try{
        const profile = await Profile.create(req.body)
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getProfiles = async(req,res)=>{
    try{
        const profiles = await Profile.find({});
        res.status(200).json(profiles);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findById(id);
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const upProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findByIdAndUpdate(id,req.body);
        if(!profile){
            return res.status(404).json({message: 'could not find profile'})
        }
        const up_profile = await Profile.findById(id);
        res.status(200).json(up_profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const delProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findByIdAndDelete(id);
        if(!profile){
            return res.status(404).json({message: 'could not find profile'})
        }
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createProfile,
    getProfiles,
    getProfile,
    upProfile,
    delProfile
}

