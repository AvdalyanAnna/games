module.exports = {
    apps: [
        {
            name: 'Dev Noproblem',
            port: '10001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
