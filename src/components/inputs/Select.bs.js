// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Colors$ReactHooksTemplate = require("../theme/Colors.bs.js");
var TextInput$ReactHooksTemplate = require("./TextInput.bs.js");
var ContextLayer$ReactHooksTemplate = require("../layer/ContextLayer.bs.js");

var layer = Css.style(/* :: */[
      Css.border(/* `px */[
            25096,
            1
          ], /* solid */12956715, /* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary450
          ]),
      /* [] */0
    ]);

var option = Css.style(/* :: */[
      Css.backgroundColor(/* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary500
          ]),
      /* :: */[
        Css.borderBottom(/* `px */[
              25096,
              1
            ], /* solid */12956715, /* `hex */[
              5194459,
              Colors$ReactHooksTemplate.primary450
            ]),
        /* :: */[
          Css.padding2(/* `px */[
                25096,
                8
              ], /* `px */[
                25096,
                16
              ]),
          /* :: */[
            Css.lastChild(/* :: */[
                  Css.borderBottomStyle(/* none */-922086728),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var optionSelected = Css.style(/* :: */[
      Css.backgroundColor(/* `hex */[
            5194459,
            Colors$ReactHooksTemplate.primary490
          ]),
      /* [] */0
    ]);

var optionFocused = Css.style(/* :: */[
      Css.textDecoration(/* underline */131142924),
      /* [] */0
    ]);

var Styles = /* module */[
  /* layer */layer,
  /* option */option,
  /* optionSelected */optionSelected,
  /* optionFocused */optionFocused
];

function Select$SelectOption(Props) {
  var option$1 = Props.option;
  var onClick = Props.onClick;
  var isSelected = Props.isSelected;
  var isFocused = Props.isFocused;
  return React.createElement("div", {
              className: Cn.make(/* :: */[
                    option,
                    /* :: */[
                      Cn.ifTrue(optionSelected, isSelected),
                      /* :: */[
                        Cn.ifTrue(optionFocused, isFocused),
                        /* [] */0
                      ]
                    ]
                  ]),
              tabIndex: 0,
              onClick: onClick
            }, option$1[/* label */0]);
}

var SelectOption = /* module */[/* make */Select$SelectOption];

function Select$SelectOptions(Props) {
  var options = Props.options;
  var selectedOption = Props.selectedOption;
  var onSelect = Props.onSelect;
  var onMouseDown = Props.onMouseDown;
  var contextRef = Props.contextRef;
  var match = React.useState((function () {
          return -1;
        }));
  var setFocusedIndex = match[1];
  var focusedIndex = match[0];
  var onKeyPress = function (e) {
    var numOptions = options.length;
    var match = e.key;
    switch (match) {
      case "ArrowDown" : 
          Curry._1(setFocusedIndex, (function (i) {
                  return Caml_int32.mod_(i + 1 | 0, numOptions);
                }));
          e.preventDefault();
          return /* () */0;
      case "ArrowUp" : 
          Curry._1(setFocusedIndex, (function (i) {
                  return Caml_int32.mod_((i - 1 | 0) + numOptions | 0, numOptions);
                }));
          e.preventDefault();
          return /* () */0;
      case "Enter" : 
          return Curry._1(onSelect, Belt_Array.get(options, focusedIndex));
      case "Esc" : 
      case "Escape" : 
          return Curry._1(onSelect, undefined);
      default:
        return /* () */0;
    }
  };
  return React.createElement(ContextLayer$ReactHooksTemplate.make, {
              contextRef: contextRef,
              position: /* Bottom */1,
              children: (function (param) {
                  var inputElement = Belt_Option.getExn(Caml_option.nullable_to_opt(contextRef.current));
                  var style = {
                    width: String(inputElement.clientWidth) + "px"
                  };
                  return React.createElement("div", {
                              className: layer,
                              style: style,
                              onMouseDown: onMouseDown
                            }, options.map((function (option, i) {
                                    var isSelected = selectedOption !== undefined ? selectedOption === option : false;
                                    var isFocused = focusedIndex === i;
                                    return React.createElement(Select$SelectOption, {
                                                option: option,
                                                onClick: (function (param) {
                                                    return Curry._1(onSelect, option);
                                                  }),
                                                isSelected: isSelected,
                                                isFocused: isFocused,
                                                key: String(i)
                                              });
                                  })));
                }),
              onKeyPress: onKeyPress
            });
}

var SelectOptions = /* module */[/* make */Select$SelectOptions];

function Select(Props) {
  var getOptions = Props.getOptions;
  var selectedOption = Props.selectedOption;
  var onChange = Props.onChange;
  var label = Props.label;
  var placeholder = Props.placeholder;
  var match = Props.forceOption;
  var forceOption = match !== undefined ? match : false;
  var inputRef = React.useRef(null);
  var match$1 = React.useState((function () {
          return "";
        }));
  var setTextValue = match$1[1];
  var textValue = match$1[0];
  var match$2 = React.useState((function () {
          return false;
        }));
  var setShowOptions = match$2[1];
  React.useEffect((function () {
          if (selectedOption !== undefined) {
            var selectedOption$1 = selectedOption;
            Curry._1(setTextValue, (function (param) {
                    return selectedOption$1[/* label */0];
                  }));
          } else {
            Curry._1(setTextValue, (function (param) {
                    return "";
                  }));
          }
          return undefined;
        }), /* array */[selectedOption]);
  var hasSelectedOption = Belt_Option.isNone(selectedOption);
  var onInputChange = React.useCallback((function (e) {
          var value = e.currentTarget.value;
          Curry._1(setTextValue, (function (param) {
                  return value;
                }));
          Curry._1(setShowOptions, (function (param) {
                  return true;
                }));
          if (!forceOption && hasSelectedOption && onChange !== undefined) {
            return Curry._1(onChange, undefined);
          } else {
            return 0;
          }
        }), /* tuple */[
        forceOption,
        hasSelectedOption,
        onChange
      ]);
  var blurTimeout = React.useRef(undefined);
  var onBlur = React.useCallback((function (param) {
          blurTimeout.current = Caml_option.some(setTimeout((function (param) {
                      if (selectedOption !== undefined) {
                        var selectedOption$1 = selectedOption;
                        Curry._1(setTextValue, (function (param) {
                                return selectedOption$1[/* label */0];
                              }));
                      }
                      return Curry._1(setShowOptions, (function (param) {
                                    return false;
                                  }));
                    }), 100));
          return /* () */0;
        }), /* array */[selectedOption]);
  var onFocus = function (param) {
    var match = blurTimeout.current;
    if (match !== undefined) {
      clearTimeout(Caml_option.valFromOption(match));
      blurTimeout.current = undefined;
    }
    return Curry._1(setShowOptions, (function (param) {
                  return true;
                }));
  };
  var onMouseDown = React.useCallback(onFocus, ([]));
  var onSelect = function (option) {
    Curry._1(setShowOptions, (function (param) {
            return false;
          }));
    if (onChange !== undefined) {
      var onChange$1 = onChange;
      if (option !== undefined) {
        return Curry._1(onChange$1, option);
      } else if (forceOption) {
        return 0;
      } else {
        return Curry._1(onChange$1, undefined);
      }
    } else {
      return /* () */0;
    }
  };
  var options = Curry._1(getOptions, textValue);
  React.useEffect((function (param) {
          if (forceOption && Belt_Option.isNone(selectedOption)) {
            var match = Belt_Array.get(options, 0);
            if (match !== undefined) {
              if (onChange !== undefined) {
                Curry._1(onChange, match);
              }
              
            }
            
          }
          return undefined;
        }), /* tuple */[
        forceOption,
        hasSelectedOption,
        onChange
      ]);
  var tmp = {
    value: textValue,
    onChange: onInputChange,
    ref: inputRef
  };
  if (label !== undefined) {
    tmp.label = Caml_option.valFromOption(label);
  }
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  var tmp$1;
  if (match$2[0]) {
    var match$3 = options.length !== 0;
    tmp$1 = match$3 ? React.createElement(Select$SelectOptions, {
            options: options,
            selectedOption: selectedOption,
            onSelect: onSelect,
            onMouseDown: onMouseDown,
            contextRef: inputRef
          }) : null;
  } else {
    tmp$1 = null;
  }
  return React.createElement("div", {
              onFocus: React.useCallback(onFocus, ([])),
              onBlur: onBlur
            }, React.createElement(TextInput$ReactHooksTemplate.make, tmp), tmp$1);
}

var make = Select;

exports.Styles = Styles;
exports.SelectOption = SelectOption;
exports.SelectOptions = SelectOptions;
exports.make = make;
/* layer Not a pure module */
