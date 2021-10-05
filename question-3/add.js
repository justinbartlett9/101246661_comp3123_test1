var fs = require('fs')

async function addLogs()
{
    //create Logs directory
    if (!fs.existsSync('./Logs')) {
        await fs.promises.mkdir('./Logs', (err) => {
            if (err)
                throw err
        })
    }

    //change process to Logs directory
    process.chdir('./Logs')

    //create 10 log files with some content and output file names to console
    for (i = 0; i < 10; i++) {
        let file = `log${i}.txt`
        fs.writeFile(file, `this is log file ${i}`, err => {
            if (err) {
                throw err
            }
        })
        console.log(file)
    }
}

module.exports = {addLogs}