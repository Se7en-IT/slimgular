// css
require('bootstrap/dist/css/bootstrap.css')

// app files
require('./utils').requireAll(require.context('./src/app', true, /.*(js|css)$/))
require('./src/config.js')
