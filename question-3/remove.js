var fs = require('fs')

async function removeLogs ()
{
    //if the Logs directory exists
    if (fs.existsSync('./Logs'))
    {
        let files = fs.readdir('./Logs', async (err, files) => {
            if (err)
            {
                throw err
            }

            //output the name of each file in Log directory with delete message
            files.forEach(async function(file) {
                console.log('delete files...' + file)
            })
            
        })
    }

    //remove Logs directory
    await fs.promises.rmdir('./Logs', {recursive: true, force: true})
}

module.exports = {removeLogs}