"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MixpanelBackend = void 0;
var mixpanel = require("mixpanel");
var MixpanelBackend = /** @class */ (function () {
    function MixpanelBackend(apiKey, config) {
        this.mixpanel = mixpanel.init(apiKey, __assign({ host: "api-eu.mixpanel.com" }, config));
    }
    MixpanelBackend.prototype.alias = function (from, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mixpanel.alias(from, to, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    MixpanelBackend.prototype.track = function (eventName, distinctId, eventAttributes) {
        var _this = this;
        var filteredAttributes = {};
        for (var key in eventAttributes) {
            if (eventAttributes[key]) {
                filteredAttributes[key] = eventAttributes[key];
            }
        }
        if (distinctId) {
            filteredAttributes['distinct_id'] = distinctId;
        }
        return new Promise(function (resolve, reject) {
            _this.mixpanel.track(eventName, filteredAttributes, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return MixpanelBackend;
}());
exports.MixpanelBackend = MixpanelBackend;
