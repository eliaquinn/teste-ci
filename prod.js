const { production } = require('./src/app');

function index() {
    production()
}

index();