// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

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
  return React.createElement(Select$ReactHooksTemplate.make, {
              getOptions: getOptions,
              selectedOption: undefined,
              onChange: (function (param) {
                  return /* () */0;
                })
            });
}

var make = SelectExample;

exports.options = options;
exports.make = make;
/* react Not a pure module */
