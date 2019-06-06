/*
 * index.js
 * Taken from https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing
 * We need to redirect all things to index.html so the react-router things will wowk.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6th 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(9000);
