// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Colors$ReactHooksTemplate = require("./theme/Colors.bs.js");

var card = Css.style(/* :: */[
      Css.border(/* `px */[
            25096,
            1
          ], /* solid */12956715, /* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary450
          ]),
      /* :: */[
        Css.borderRadius(/* `px */[
              25096,
              4
            ]),
        /* :: */[
          Css.padding(/* `px */[
                25096,
                16
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[/* card */card];

function Card(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: card
            }, children);
}

var make = Card;

exports.Styles = Styles;
exports.make = make;
/* card Not a pure module */