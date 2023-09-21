const Profile = require('../models/profile_model')
const express = require('express')
const {createProfile,getProfiles,getProfile,upProfile,delProfile} = require('../controllers/profile_controller')

const router = express.Router();

//insert into db
router.post('/', createProfile);

//fetch all from db
router.get('/', getProfiles);

//fetch by product id
router.get('/:id', getProfile);

//update by id
router.put('/:id', upProfile);

//removal by id 
router.delete('/:id', delProfile);

module.exports = router;