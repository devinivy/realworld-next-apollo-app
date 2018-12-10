'use strict';

require('dotenv').config();

module.exports = {
    serverRuntimeConfig: {},
    publicRuntimeConfig: {
        apiBase: process.env.API
    }
};
