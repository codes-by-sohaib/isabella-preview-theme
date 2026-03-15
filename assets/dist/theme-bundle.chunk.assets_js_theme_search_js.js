"use strict";
(self["webpackChunkepic_superstore"] = self["webpackChunkepic_superstore"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js"
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).trigger('focus').trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.trigger('focus');
    }, 100);
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDZ0I7QUFDa0I7QUFDZDtBQUNSO0FBQzFCO0FBQ2dDO0FBQ3RDO0FBQ2U7QUFFL0IsSUFBTVMsWUFBWSxHQUFHLEVBQUU7QUFDdkIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7QUFBQyxJQUVKQyxNQUFNLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsT0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixNQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3ZCRSwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNmUixRQUFRLENBQUNRLFFBQVEsR0FBRyxFQUFFO01BQ3RCVixJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztRQUNqQ1YsUUFBUSxDQUFDUSxRQUFRLENBQUNH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Y0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUM4RSxRQUFRLEVBQUU7SUFDckIsSUFBSSxJQUFJLENBQUNoRixTQUFTLEVBQUU7TUFDaEIsSUFBSSxDQUFDQSxTQUFTLENBQUNpRixHQUFHLENBQUM7UUFDZkMsUUFBUSxFQUFFRixRQUFRO1FBQ2xCRyxRQUFRLEVBQUUsVUFBVTtRQUNwQkMsWUFBWSxFQUFFSixRQUFRLENBQUN0SixJQUFJLENBQUMsY0FBYztNQUM5QyxDQUFDLENBQUM7SUFDTjtJQUVBLE9BQU8sSUFBSTtFQUNmLENBQUM7RUFBQVAsTUFBQSxDQUVEc0YsS0FBSyxHQUFMLFNBQUFBLEtBQUtBLENBQUEsRUFBRztJQUNKLElBQUksSUFBSSxDQUFDVCxTQUFTLEVBQUU7TUFDaEIsSUFBSSxDQUFDQSxTQUFTLENBQUNxRixZQUFZLENBQUMsQ0FBQztNQUM3QixPQUFPLElBQUksQ0FBQ3JGLFNBQVMsQ0FBQ3NGLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDekM7SUFFQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBLE9BQUF4SyxNQUFBO0FBQUEsRUFsVitCVixnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2VwaWMtc3VwZXJzdG9yZS8uL2Fzc2V0cy9qcy90aGVtZS9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuXG5jb25zdCBsZWZ0QXJyb3dLZXkgPSAzNztcbmNvbnN0IHJpZ2h0QXJyb3dLZXkgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKSk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZVRhYigkdGFiVG9BY3RpdmF0ZSkge1xuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgJHRhYnNDb2xsZWN0aW9uLmVhY2goKGlkeCwgdGFiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0YWIpO1xuXG4gICAgICAgICAgICBpZiAoJHRhYi5pcygkdGFiVG9BY3RpdmF0ZSkpIHtcbiAgICAgICAgICAgICAgICAkdGFiLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkdGFiLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFiQ2hhbmdlV2l0aEFycm93cyhldmVudCkge1xuICAgICAgICBjb25zdCBldmVudEtleSA9IGV2ZW50LndoaWNoO1xuICAgICAgICBjb25zdCBpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duID0gZXZlbnRLZXkgPT09IGxlZnRBcnJvd0tleVxuICAgICAgICAgICAgfHwgZXZlbnRLZXkgPT09IHJpZ2h0QXJyb3dLZXk7XG4gICAgICAgIGlmICghaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93bikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcblxuICAgICAgICBjb25zdCBpc0FjdGl2ZUVsZW1lbnROb3RUYWIgPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgPT09IC0xO1xuICAgICAgICBpZiAoaXNBY3RpdmVFbGVtZW50Tm90VGFiKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoYCMke2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWR9YCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkYWN0aXZlVGFiKTtcbiAgICAgICAgY29uc3QgbGFzdFRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgICAgIGxldCBuZXh0VGFiSWR4O1xuICAgICAgICBzd2l0Y2ggKGV2ZW50S2V5KSB7XG4gICAgICAgIGNhc2UgbGVmdEFycm93S2V5OlxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gMCA/IGxhc3RUYWJJZHggOiBhY3RpdmVUYWJJZHggLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcmlnaHRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IGxhc3RUYWJJZHggPyAwIDogYWN0aXZlVGFiSWR4ICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJHRhYnNDb2xsZWN0aW9uLmdldChuZXh0VGFiSWR4KSkudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLm9uKCdrZXl1cCcsIHRoaXMub25UYWJDaGFuZ2VXaXRoQXJyb3dzKTtcblxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaFJlc3VsdHNNZXNzYWdlID0gJChgPHBcbiAgICAgICAgICAgIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgICAgICAgPiR7dGhpcy5jb250ZXh0LnNlYXJjaFJlc3VsdHNDb3VudH08L3A+YClcbiAgICAgICAgICAgIC5wcmVwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICRzZWFyY2hSZXN1bHRzTWVzc2FnZS50cmlnZ2VyKCdmb2N1cycpLCAxMDApO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwibGVmdEFycm93S2V5IiwicmlnaHRBcnJvd0tleSIsIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwiYWN0aXZhdGVUYWIiLCJzZWFyY2hEYXRhIiwidXJsIiwiY291bnQiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50IiwiZXZlbnRLZXkiLCJ3aGljaCIsImlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24iLCJpc0FjdGl2ZUVsZW1lbnROb3RUYWIiLCJpbmRleCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRhY3RpdmVUYWIiLCJhY3RpdmVUYWJJZHgiLCJsYXN0VGFiSWR4IiwibGVuZ3RoIiwibmV4dFRhYklkeCIsImdldCIsInRyaWdnZXIiLCJvblJlYWR5IiwiX3RoaXMyIiwiY29udGV4dCIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0cmVlRGF0YSIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCIkc2VhcmNoUmVzdWx0c01lc3NhZ2UiLCJzZWFyY2hSZXN1bHRzQ291bnQiLCJwcmVwZW5kVG8iLCJzZXRUaW1lb3V0IiwibG9hZFRyZWVOb2RlcyIsImNiIiwiX3RoaXMzIiwiYWpheCIsInNlbGVjdGVkQ2F0ZWdvcnlJZCIsInByZWZpeCIsImhlYWRlcnMiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsIl90aGlzNCIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCJfdGhpczUiLCJfdGhpcyRjb250ZXh0Iiwib25NaW5QcmljZUVycm9yIiwib25NYXhQcmljZUVycm9yIiwibWluUHJpY2VOb3RFbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJjb250ZW50TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29udGVudENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiJGZvcm0iLCJzdWJtaXQiLCJ0YXAiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==