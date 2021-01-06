"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CheckboxElements = require("./CheckboxElements");

var _theming = require("../../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState(false);
 *
 *   return (
 *     <Checkbox
 *       status={checked ? 'checked' : 'unchecked'}
 *       onPress={() => {
 *         setChecked(!checked);
 *       }}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Checkbox = props => _reactNative.Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(_CheckboxElements.CheckboxIOS, props) : /*#__PURE__*/React.createElement(_CheckboxElements.CheckboxAndroid, props); // @component ./CheckboxItem.tsx


Checkbox.Item = _CheckboxElements.CheckboxItem; // @component ./CheckboxAndroid.tsx

Checkbox.Android = _CheckboxElements.CheckboxAndroid; // @component ./CheckboxIOS.tsx

Checkbox.IOS = _CheckboxElements.CheckboxIOS;

var _default = (0, _theming.withTheme)(Checkbox); // @component-docs ignore-next-line


exports.default = _default;
const CheckboxWithTheme = (0, _theming.withTheme)(Checkbox); // @component-docs ignore-next-line

exports.Checkbox = CheckboxWithTheme;
//# sourceMappingURL=Checkbox.js.map