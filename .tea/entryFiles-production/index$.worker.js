
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../node_modules/dd-charts/es/f2/index');
require('../../pages/index/index');
require('../../pages/charts/stack-area/index');
require('../../pages/charts/area/index');
require('../../pages/charts/line/index');
require('../../pages/charts/column/index');
require('../../pages/charts/bar/index');
require('../../pages/charts/dodge/index');
require('../../pages/charts/stack-bar/index');
require('../../pages/charts/ring/index');
require('../../pages/charts/pie/index');
require('../../pages/charts/rose/index');
require('../../pages/charts/radar/index');
require('../../pages/charts/gauge/index');
require('../../pages/charts/double-axis/index');
require('../../pages/charts/k/index');
require('../../pages/charts/multiCharts/index');
require('../../pages/charts/radial-bar/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
