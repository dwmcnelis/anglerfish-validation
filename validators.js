angular.module('wizehive.validators', [])
  .directive('alphaNumeric', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					if (viewValue === "" || regex.ALPHA_NUMERIC.test(viewValue)) {
						ctrl.$setValidity('alphaNumeric', true);
						return viewValue;
					} else {
						ctrl.$setValidity('alphaNumeric', false);
						return;
					}
				});
			}
		};
	}])
	.directive('currency', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				//if currency attribute exists
				if (attrs.currency) {

					//fetch currency value
					var currency = attrs.currency;

					ctrl.$parsers.unshift(function (viewValue) {

						var regexToMatch = '';

						//set regexToMatch variable based
						switch (currency) {

							case 'dollar':
								regexToMatch = 'CURRENCY_DOLLARS';
								break;
							default:
						}

						//regex to match is not empty and match the regex pattern
						if (regexToMatch && !viewValue || regex[regexToMatch].test(viewValue)) {

							ctrl.$setValidity('currency', true);
							return viewValue;
						} else {
							ctrl.$setValidity('currency', false);
							return;
						}
					});
				}
				else {
					ctrl.$setValidity('currency', false);
					return;
				}
			}
		};
	}])
	.directive('date', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					//check if value is empty or match the regex pattern
					if (viewValue === "" || regex.DATE.test(viewValue)) {
						ctrl.$setValidity('url', true);
						return viewValue;
					} else {
						ctrl.$setValidity('url', false);
						return;
					}
				});
			}
		};
	}])
	.directive('dateUs', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					//check if value is empty or match the regex pattern
					if (viewValue === "" || regex.DATE_US.test(viewValue)) {
						ctrl.$setValidity('dateUs', true);
						return viewValue;
					} else {
						ctrl.$setValidity('dateUs', false);
						return;
					}
				});
			}
		};
	}])
	.directive('password', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					if (viewValue === "" || regex.PASSWORD.test(viewValue)) {
						ctrl.$setValidity('password', true);
						return viewValue;
					} else {
						ctrl.$setValidity('password', false);
						return;
					}
				});
			}
		};
	}])
	.directive('url', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					//check if value is empty or match the regex pattern
					if (viewValue === "" || regex.URL.test(viewValue)) {
						ctrl.$setValidity('url', true);
						return viewValue;
					} else {
						ctrl.$setValidity('url', false);
						return;
					}
				});
			}
		};
	}])
	.directive('zipcode', ['regex', function (regex) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				ctrl.$parsers.unshift(function (viewValue) {
					//check if value is empty or match the regex pattern
					if (viewValue === "" || regex.ZIPCODE.test(viewValue)) {
						ctrl.$setValidity('zipcode', true);
						return viewValue;
					} else {
						ctrl.$setValidity('zipcode', false);
						return;
					}
				});
			}
		};
	}]);
