#!/bin/bash
PRIVATE_CONFIG=qdata/tm1.ipc geth --exec "loadScript(\"$1\")" attach ipc:qdata/dd4/geth.ipc
