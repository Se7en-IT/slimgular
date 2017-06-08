// css
require('./node_modules/bootstrap/dist/css/bootstrap.css')
require('./node_modules/angular-block-ui/dist/angular-block-ui.css')
require('./node_modules/ng-table/bundles/ng-table.css')

// js
require('script!jquery')
require('./node_modules/bootstrap/dist/js/bootstrap.js')

// app files
require('./src/app/config.js')
require('./utils').requireAll(require.context('./src/app', true, /.*(js|css)$/))
