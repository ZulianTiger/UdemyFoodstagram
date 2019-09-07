"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigatorPanelPosition = getNavigatorPanelPosition;
exports.getAddonPanelPosition = getAddonPanelPosition;
exports.getPreviewPosition = getPreviewPosition;
exports.getPreviewScale = getPreviewScale;

var _consts = require("./navigation/consts");

var PREVIEW_SCALE = 0.3;

var panelWidth = function panelWidth(width) {
  return width * (1 - PREVIEW_SCALE - 0.05);
};

function getNavigatorPanelPosition(animatedValue, previewWidth) {
  return [{
    transform: [{
      translateX: animatedValue.interpolate({
        inputRange: [_consts.NAVIGATOR, _consts.PREVIEW],
        outputRange: [0, -panelWidth(previewWidth) - 1]
      })
    }],
    width: panelWidth(previewWidth)
  }];
}

function getAddonPanelPosition(animatedValue, previewWidth) {
  return [{
    transform: [{
      translateX: animatedValue.interpolate({
        inputRange: [_consts.PREVIEW, _consts.ADDONS],
        outputRange: [previewWidth, previewWidth - panelWidth(previewWidth)]
      })
    }],
    width: panelWidth(previewWidth)
  }];
}

function getPreviewPosition(animatedValue, previewWidth, previewHeight, slideBetweenAnimation) {
  var translateX = previewWidth / 2 - previewWidth * PREVIEW_SCALE / 2 - 6;
  var translateY = -(previewHeight / 2 - previewHeight * PREVIEW_SCALE / 2 - 12);
  return {
    transform: [{
      translateX: animatedValue.interpolate({
        inputRange: [_consts.NAVIGATOR, _consts.PREVIEW, _consts.ADDONS],
        outputRange: [translateX, 0, -translateX]
      })
    }, {
      translateY: animatedValue.interpolate({
        inputRange: [_consts.NAVIGATOR, _consts.PREVIEW, _consts.ADDONS],
        outputRange: [translateY, slideBetweenAnimation ? translateY : 0, translateY]
      })
    }]
  };
}

function getPreviewScale(animatedValue, slideBetweenAnimation) {
  return {
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [_consts.NAVIGATOR, _consts.PREVIEW, _consts.ADDONS],
        outputRange: [PREVIEW_SCALE, slideBetweenAnimation ? PREVIEW_SCALE : 1, PREVIEW_SCALE]
      })
    }]
  };
}