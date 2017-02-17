webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IndexPage = __webpack_require__(179);

	var _IndexPage2 = _interopRequireDefault(_IndexPage);

	var _ProgressionsPanel = __webpack_require__(183);

	var _ProgressionsPanel2 = _interopRequireDefault(_ProgressionsPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var snapshot = __webpack_require__(186);

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this.state = {
				progressions: [
					// { id: 0, name: 'Successful Login',  actionSets: []},
					// { id: 1, name: 'Unsuccessful Login: invalid username', actionSets: [] },
					// { id: 2, name: 'Unsuccessful Login: no info provided', actionSets: [] }
				],
				appState: {}
			};

			_this.addProgression = _this.addProgression.bind(_this);
			_this.addSnapActionSet = _this.addSnapActionSet.bind(_this);
			_this.addSnapAction = _this.addSnapAction.bind(_this);
			_this.sampleSnap = _this.sampleSnap.bind(_this);
			_this.console = _this.console.bind(_this);
			return _this;
		}

		_createClass(App, [{
			key: 'addProgression',
			value: function addProgression(name) {
				var progressions = this.state.progressions.slice();
				var duplicateName = false;
				for (var progression in progressions) {
					if (progressions[progression].name === name) {
						duplicateName = true;
					}
				}

				if (!duplicateName) {
					progressions.push({ id: progressions.length, name: name, actionSets: [] });
					this.setState({ progressions: progressions });
				}
			}
		}, {
			key: 'console',
			value: function (_console) {
				function console(_x) {
					return _console.apply(this, arguments);
				}

				console.toString = function () {
					return _console.toString();
				};

				return console;
			}(function (str) {
				console.log(str);
			})
		}, {
			key: 'serverSnap',
			value: function serverSnap() {}
		}, {
			key: 'addSnapActionSet',
			value: function addSnapActionSet(id, name) {
				var progressions = this.state.progressions.slice();
				var progressionFound = false;
				for (var progression in progressions) {
					if (progressions[progression].id === id) {
						progressionFound = true;
						progressions[progression].actionSets.push({ id: progressions[progression].actionSets.length, name: name, actions: [] });
						break;
					}
				}

				if (progressionFound) {
					this.setState({ progressions: progressions });
				}
			}
		}, {
			key: 'addSnapAction',
			value: function addSnapAction(id, actionSetId, name, element, key, type, value) {
				var progressions = this.state.progressions.slice();
				var progressionFound = false;
				for (var progression in progressions) {
					if (progressions[progression].id === id) {
						progressionFound = true;
						progressions[progression].actionSets[actionSetId].actions.push({ name: name, element: element, key: key, type: type, value: value });
						break;
					}
				}

				if (progressionFound) {
					this.setState({ progressions: progressions });
				}
			}
		}, {
			key: 'sampleSnap',
			value: function sampleSnap() {
				var progressions = this.state.progressions;
				//iterate through each progression
				Object.keys(progressions).forEach(function (progression) {
					var appState = {};
					//reset the appState to start from initial point for this progression

					this.setState({ appState: appState });
					//iterate through each action of a given progressions actionSets
					Object.keys(progressions[progression].actionSets).forEach(function (actionSet) {
						//and set the appState associated with each action for this actionSet
						Object.keys(progressions[progression].actionSets[actionSet].actions).forEach(function (action) {
							var currentAction = progressions[progression].actionSets[actionSet].actions[action];
							appState[currentAction.key] = currentAction.value;
							this.setState({ appState: appState });
						}.bind(this));

						console.log("State 'Snap Shot' for progression panel : " + progressions[progression].actionSets[actionSet].name, appState);

						//
						//
						//
						//Add visual/code/commit and other associated snapshotting here
						//
						//
						//
					}.bind(this));
				}.bind(this));
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'app' },
					_react2.default.createElement(
						'div',
						{ id: 'snap1' },
						'Eagle Eye - Let\'s do this!',
						_react2.default.createElement(
							'button',
							{ onclick: 'console.log(\'hi\')' },
							' hi '
						)
					),
					_react2.default.createElement(_IndexPage2.default, null),
					_react2.default.createElement(_ProgressionsPanel2.default, { progressions: this.state.progressions, addProgression: this.addProgression, addSnapActionSet: this.addSnapActionSet, addSnapAction: this.addSnapAction, sampleSnap: this.sampleSnap })
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ }

})