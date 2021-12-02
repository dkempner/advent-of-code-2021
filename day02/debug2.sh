#!/bin/bash
cat input | node -r ts-node/register/transpile-only --inspect-brk 2.ts