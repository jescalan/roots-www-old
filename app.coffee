# ----------------------------------------
# Project Configuration
# ----------------------------------------

# Files in this list will not be compiled - minimatch supported
exports.ignore_files = ['_*', 'readme*','.gitignore', '.DS_Store', 'package.json', 'server.js']
exports.ignore_folders = ['_*', '.git', 'modules']

# Layout file config
exports.layouts =
  default: 'layout.jade'

# Locals
exports.locals =
  title: 'roots | where it all begins'