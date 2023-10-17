import model from '../models/model.js'

const service = model.service

export const createService = async (name) => {
  try {
    return await service.create({
      name: name.toLowerCase()
    })
  } catch (err) {
    throw err
  }
}

export const listservice = async () => {
  return await service.findAll()
}

export const getService = async (name) => {
  return await service.findOne({
    where: {
      name: name
    }
  })
}

export const updateService = async (id, status) => {
  const data = await service.findOne({
    where: {
      id:id
    }
  })
  if(!data) throw new Error("Data service not found")

  await data.update({
    is_ready: status
  })
  return await data.save()
}