const newLambdaName = process.argv[2]
const chalk = require('chalk')
const sh = require('shelljs')
const fs = require('fs')

sh.echo(chalk.yellow(`🔄 Creating the lambda ${newLambdaName}`))

const folder = `./lambdas/${newLambdaName}`
const functionFile = `${folder}/function.js`
const functionYML = `${folder}/function.yml`
const IAMFile = `${folder}/IAM.yml`
const functionListItem =
  '  ' + newLambdaName + ': ${file(lambdas/' + newLambdaName + '/function.yml):index}'

sh.exec(`mkdir ${folder}`)
sh.exec(`touch ${functionFile}`)
sh.exec(`touch ${functionYML}`)
sh.exec(`touch ${IAMFile}`)

const functionFileText = `import Responses from '../../common/Responses'

const ${newLambdaName} = async (event) => {
  return Responses._200({ message: 'It works!' })
}

export const handler = ${newLambdaName}`

const functionYMLText = `index:
    handler: lambdas/${newLambdaName}/function.handler
    events:
        - http:
            method: GET
            path: /${newLambdaName}`

const IAMFileText = ``

sh.exec(`echo "${functionFileText}" >> ${functionFile}`)
sh.exec(`echo "${functionYMLText}" >> ${functionYML}`)
sh.exec(`echo "${IAMFileText}" >> ${IAMFile}`)

fs.appendFile('./config/functions.yml', functionListItem, function (err) {
  if (err) {
    console.log(err)
  } else {
    // done
  }
})

sh.echo(chalk.green(`✅ Lambda ${newLambdaName} created`))
