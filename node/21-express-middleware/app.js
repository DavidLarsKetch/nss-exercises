#!/usr/bin/env node

"use strict";

const express = require('express');
const app = express();
require('dotenv').config();

app.use('/home', );
app.use('/see-our-chickens', );
app.use('/see-our-eggs', );

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
