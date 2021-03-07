const RealtorRouter = require('express').Router()
import userService from '../../db/service/userService'

RealtorRouter.get('/', async (req,res)=>{
  try{
    const data = await userService.findAllUser()
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})
RealtorRouter.get('/:id', async (req,res)=>{
  try{
    const data = await userService.findUser(req.params.id)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

RealtorRouter.post('/:id',async (req,res)=>{
  try{
    const data = await userService.editUser(req.params.id,req.body)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

RealtorRouter.post('',async (req,res)=>{
  try{
    const data = await userService.createUser(req.body)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

RealtorRouter.post('/delete/:id',async (req,res)=>{
  try{
    console.log()
    const data = await userService.deleteUser(req.params.id)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

export default RealtorRouter;

