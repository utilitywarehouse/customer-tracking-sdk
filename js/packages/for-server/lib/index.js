"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_tracking_core_1 = require("@utilitywarehouse/customer-tracking-core");
Object.defineProperty(exports, "Tracker", { enumerable: true, get: function () { return customer_tracking_core_1.Tracker; } });
__exportStar(require("@utilitywarehouse/customer-tracking-types"), exports);
var mixpanel_backend_1 = require("./src/mixpanel_backend");
Object.defineProperty(exports, "MixpanelBackend", { enumerable: true, get: function () { return mixpanel_backend_1.MixpanelBackend; } });
