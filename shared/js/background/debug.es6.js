/**
 * This exposes some modules we use for testing via the background page console.
 * NOTE this is not added to the release version of the extension
 */
const settings = require('./settings.es6')
const abp = require('abp-filter-parser')
const tabManager = require('./tab-manager.es6')
const load = require('./load.es6')

window.dbg = {
    settings,
    abp,
    tabManager
}

// mark this as a dev build
// when we request certain resources, this flag will prevent any
// metrics from being thrown off
load.setDevMode()
