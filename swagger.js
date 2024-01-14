const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/suppliers.js', './routes/users.js', './routes/index.js']

swaggerAutogen(outputFile, endpointsFiles)