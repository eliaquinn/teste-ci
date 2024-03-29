const { development, production } = require('./src/app');

function indexDev() {
    development()
}

function indexProd() {
    production()
}

module.exports = {
    indexDev,
    indexProd
}