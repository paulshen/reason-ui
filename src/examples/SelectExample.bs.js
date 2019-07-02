// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Select$ReactHooksTemplate = require("../components/inputs/Select.bs.js");

var options = /* array */[
  /* record */[/* label */"FB"],
  /* record */[/* label */"GOOGL"]
];

function SelectExample(Props) {
  var getOptions = function (value) {
    var lowercaseValue = value.toLowerCase();
    return options.filter((function (option) {
                  return option[/* label */0].toLowerCase().startsWith(lowercaseValue);
                }));
  };
  var match = React.useState((function () {
          return undefined;
        }));
  var setSelectedOption = match[1];
  return React.createElement(Select$ReactHooksTemplate.make, {
              getOptions: getOptions,
              selectedOption: match[0],
              onChange: (function (option) {
                  return Curry._1(setSelectedOption, (function (param) {
                                return option;
                              }));
                })
            });
}

var make = SelectExample;

exports.options = options;
exports.make = make;
/* react Not a pure module */
