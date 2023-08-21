"use strict";

const cds = require("@sap/cds");
const proxy = require("@cap-js-community/odata-v2-adapter");

cds.on("bootstrap", (app) => {
  app.use(
    proxy({ target: "auto", fixDraftRequests: true, continueOnError: true })
  );
});

module.exports = cds.server;
