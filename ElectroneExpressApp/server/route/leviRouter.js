const leviRouter = require('express').Router()
import liveService from '../../db/service/leviService'

leviRouter.post('/:max', async (req,res)=>{
  try{
    const data = await liveService.getLiveLessThen(req.params.max,req.body)
    res.status(200).send({data: data})
  }catch (e) {
    res.status(400).send({error: e.message})
  }
})
export default leviRouter;

