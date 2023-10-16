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