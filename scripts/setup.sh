#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 10.15.3
nvm alias default 10.15.3
nvm use 10.15.3
