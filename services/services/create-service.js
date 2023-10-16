import { createService } from "../../repositories/service.js"

export default async (name) => {
  try {
    return await createService(name)
  } catch (err) {
    if(err.name === "SequelizeUniqueConstraintError") {
      err = new Error(err.errors[0].message)
    }
    throw err
  }
}