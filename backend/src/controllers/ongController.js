
const connection = require('./database/connection')
const crypto = require('crypto')

module.exports={
  async create(req,res){
    const {name, email,whatsapp,city,uf} = request.body
  const id = crypto.randomBytes(4).toString('HEX')
  await connection('ongs').insert({
    id,name,whatsapp,city,uf
  })
  res.json({id})
  },
  async index(req,res){
    const ongs = await connection('ongs').select('*')
    res.json(ongs)
  }
}