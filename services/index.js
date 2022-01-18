require('module-alias/register');
const http = require('http'),
    PlateAPI = require('@PlateAPI'),
    PlateServer = http.Server(PlateAPI),
    PlatePORT = process.env.PORT || 3001,
    LOCAL = '0.0.0.0';
PlateServer.listen(PlatePORT, LOCAL, () => console.log(`PlateAPI running on ${PlatePORT}`));