const realtorRouter = require('express').Router()
import realtorService from '../../db/service/realtorService'

realtorRouter.get('/', async (req,res)=>{
  try{
    const data = await realtorService.findAllRealtor()
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})
realtorRouter.get('/:id', async (req,res)=>{
  try{
    const data = await realtorService.findRealtor(req.params.id)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

realtorRouter.post('/:id',async (req,res)=>{
  try{

    console.log(req.params.id)
    const data = await realtorService.editRealtor(req.params.id,req.body)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

realtorRouter.post('',async (req,res)=>{
  try{
    const data = await realtorService.createRealtor(req.body)
    res.status(200).send({data: data})
  }catch (e) {
    console.error(e)
    res.status(400).send({error: e.message})
  }
})

realtorRouter.post('/delete/:id',async (req,res)=>{
  try{
    const data = await realtorService.deleteRealtor(req.params.id)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})

export default realtorRouter;

