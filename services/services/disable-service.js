import { updateService } from "../../repositories/service.js"

export default async (id) => {
  try {
    return await updateService(id, 0)
  } catch(err) {
    throw err
  }
}