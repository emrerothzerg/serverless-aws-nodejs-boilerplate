import Responses from '../../common/Responses'

const websiteName = process.env.NAME
const hello = async (event) => {
  return Responses._200({ message: `Hello from EMRE! ${websiteName}!!` })
}

export const handler = hello
