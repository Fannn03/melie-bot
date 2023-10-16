import { listservice } from "../../repositories/service.js"

export default async () => {
  const services = await listservice()

  let message = ''

  const capitalizedString = (value) => {
    return value[0].toUpperCase() + value.slice(1)
  }

  services.map(data => {
    const status = (data.dataValues.is_ready) ? 'Open' : "Close"

    message += `\`\`\`\n`
    message += `Id     : ${data.dataValues.id}\n`
    message += `Name   : Melie ${capitalizedString(data.dataValues.name)}\n`
    message += `Status : ${status}\n`
    message += `\`\`\``

  })

  return message

}