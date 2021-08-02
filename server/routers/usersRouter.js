const express = require('express');
const userBL = require('../models/userBL');

const router = express.Router();

router.route('/').get(async function(req, resp)
{
    let data = await userBL.getAllUsers();
    return resp.json(data);
});

router.route('/:id').get(async function(req, resp)
{
    let userId = req.params.id;
    let data = await userBL.getUser(userId);
    return resp.json(data);
});

router.route('/').post( function(req, resp)
{
    let obj = req.body;
    userBL.addUser(obj).then(status => 
        {
            return resp.json(status);
        })
});

router.route('/:id').put(async function(req, resp)
{
    let obj = req.body;
    let id = req.params.id;

    userBL.updateUser(id,obj).then(status => 
        {
            return resp.json(status);
        })
});

router.route('/:id').delete(async function(req,resp)
    {
        let id = req.params.id;

        userBL.deleteUser(id).then(status => 
            {
                return resp.json(status);
            })
    });

module.exports = router;