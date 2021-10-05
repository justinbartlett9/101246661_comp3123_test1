var add = require('./add')
var remove = require('./remove')

//wait for removal to finish, then add new logs
async function main () {
    await remove.removeLogs()
    add.addLogs()
}

main()