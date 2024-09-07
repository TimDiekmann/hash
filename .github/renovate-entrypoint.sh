#!/bin/bash

chown -r ubuntu:ubuntu /home/ubuntu/.cargo
export PATH="/home/ubuntu/.cargo/bin:$PATH"

runuser -u ubuntu cargo --version

runuser -u ubuntu renovate
