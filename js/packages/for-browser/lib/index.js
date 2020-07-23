(function () {
	'use strict';

	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = require("tslib");
	var customer_tracking_core_1 = require("@utilitywarehouse/customer-tracking-core");
	Object.defineProperty(exports, "Tracker", { enumerable: true, get: function () { return customer_tracking_core_1.UITracker; } });
	tslib_1.__exportStar(require("@utilitywarehouse/customer-tracking-types"), exports);
	var mixpanel_backend_1 = require("./src/mixpanel_backend");
	Object.defineProperty(exports, "MixpanelBackend", { enumerable: true, get: function () { return mixpanel_backend_1.MixpanelBackend; } });

    window.tracking =exports

}(window, document));
