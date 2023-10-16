import model from '../models/model.js'

const service = model.service

export const createService = async (name) => {
  try {
    return await service.create({
      name: name
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