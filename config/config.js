require('dotenv').config()
module.exports = {
    port: process.env.PORT || 8085,
    listen: function (server) {
        server.listen(this.port);
    },
    secret: process.env.Secret,
    collection: 'recipe'
}