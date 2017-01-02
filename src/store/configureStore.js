if(process.env.NODE_ENV === 'production') {
    module.expoerts = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
