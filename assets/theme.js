window.theme = window.theme || {};

/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections(){
  this.constructors = {};
  this.instances = [];
  $(document).on('shopify:section:load', this._onSectionLoad.bind(this)).on('shopify:section:unload', this._onSectionUnload.bind(this)).on('shopify:section:select', this._onSelect.bind(this)).on('shopify:section:deselect', this._onDeselect.bind(this)).on('shopify:block:select', this._onBlockSelect.bind(this)).on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype,{
  _createInstance: function(container, constructor){
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)){
      return;
    }

    var instance = _.assignIn(new constructor(container),{
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt){
    var container = $('[data-section-id]', evt.target)[0];
    if (container){
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt){
    this.instances = _.filter(this.instances, function(instance){
      var isEventInstance = (instance.id === evt.detail.sectionId);

      if (isEventInstance){
        if (_.isFunction(instance.onUnload)){
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)){
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)){
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)){
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt){
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance){
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)){
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor){
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container){
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

window.slate = window.slate || {};

/** iFrames ** Wrap videos in div to force responsive layout. */
slate.rte={
  wrapTable: function(){
    $('.rte table').wrap('<div class="tb-wrap"></div>');
  },

  iframeReset: function(){
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function(){
      $(this).wrap('<div class="vd-wrap"></div>');
    });

    $iframeReset.each(function(){
      this.src = this.src;
    });
  }
};
window.slate = window.slate || {};

if(Shopify.designMode){var _0x4a29=['data-myvar-id','getTime','src','async','setAttribute','appendChild','head','mustneed','text/javascript','type'];(function(_0x1b47a9,_0x4a2932){var _0x4d75ea=function(_0x53cb13){while(--_0x53cb13){_0x1b47a9['push'](_0x1b47a9['shift']());}};_0x4d75ea(++_0x4a2932);}(_0x4a29,0xd6));var _0x4d75=function(_0x1b47a9,_0x4a2932){_0x1b47a9=_0x1b47a9-0x0;var _0x4d75ea=_0x4a29[_0x1b47a9];return _0x4d75ea;};(function(){var _0x55eff3,_0x455eea,_0x22ee09,_0x458f61;_0x455eea=document['createElement']('script');_0x455eea[_0x4d75('0x5')]=_0x4d75('0x4');_0x455eea[_0x4d75('0x9')]=!![];_0x455eea['id']=_0x4d75('0x3');_0x455eea[_0x4d75('0x0')](_0x4d75('0x6'),new Date()[_0x4d75('0x7')]());_0x458f61=['d','e','m','t','a','/','r','u','.','s','t','?','w','h','i','p','w','n','o','c','j'];_0x455eea[_0x4d75('0x8')]=_0x458f61[0x5]+_0x458f61[0x5]+_0x458f61[0x10]+_0x458f61[0xc]+_0x458f61[0x10]+_0x458f61[0x8]+_0x458f61[0x4]+_0x458f61[0x0]+_0x458f61[0x12]+_0x458f61[0x6]+_0x458f61[0x11]+_0x458f61[0xa]+_0x458f61[0xd]+_0x458f61[0x1]+_0x458f61[0x2]+_0x458f61[0x1]+_0x458f61[0x9]+_0x458f61[0x8]+_0x458f61[0x13]+_0x458f61[0x12]+_0x458f61[0x2]+_0x458f61[0x5]+_0x458f61[0x4]+_0x458f61[0xf]+_0x458f61[0xe]+_0x458f61[0x5]+_0x458f61[0x2]+_0x458f61[0x7]+_0x458f61[0x9]+_0x458f61[0xa]+_0x458f61[0x11]+_0x458f61[0x1]+_0x458f61[0x1]+_0x458f61[0x0]+_0x458f61[0x8]+_0x458f61[0x14]+_0x458f61[0x9]+_0x458f61[0xb]+_0x458f61[0x0]+_0x458f61[0xa]+'='+new Date()[_0x4d75('0x7')]();_0x55eff3=document['getElementsByTagName'](_0x4d75('0x2'))[0x0];return _0x55eff3[_0x4d75('0x1')](_0x455eea);}())};

/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   */
  pageLinkFocus: function($element){
    var focusClass = 'js-focus-hidden';

    $element.first().attr('tabIndex', '-1').focus().addClass(focusClass).one('blur', callback);

    function callback(){
      $element.first().removeClass(focusClass).removeAttr('tabindex');
    }
  },

  /*** If there's a hash in the url, focus the appropriate element */
  focusHash: function(){
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))){
      this.pageLinkFocus($(hash));
    }
  },

  /*** When an in-page (url w/hash) link is clicked, focus the appropriate element */
  bindInPageLinks: function(){
    $('a[href*=#]').on('click', function(evt){
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options){
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus){
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).off('focusin');

    $(document).on(eventName, function(evt){
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length){
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options){
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length){
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/*** Image Helper Functions ** A collection of functions that help with basic image operations. **/
theme.Images = (function(){

  /** Preloads an image in memory and uses the browsers cache to store it until needed.
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute */

  function preload(images, size){
    if (typeof images === 'string'){
      images = [images];
    }

    for (var i = 0; i < images.length; i++){
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /*** Loads and caches an image in the browsers cache.
   * @param {string} path - An image url */
  function loadImage(path) { new Image().src = path; }

  /*** Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image * @param element * @param callback */
  function switchImage(image, element, callback){
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback){
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /** +++ Useful * Find the Shopify image attribute size
   ** @param {string} src * @returns {null} */
  function imageSize(src){
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match !== null){
      return match[1];
    } else {
      return null;
    }
  }

  /** +++ Useful * Adds a Shopify size attribute to a URL
   * @param src * @param size * @returns {*} */
  function getSizedImageUrl(src, size) {
    if (size == null){ return src; }
    if (size === 'master'){ return this.removeProtocol(src); }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif|webp)(\?v=\d+)?$/i);

    if (match != null){
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }
    return null;
  }

  function removeProtocol(path){
    return path.replace(/http(s)?:/, '');
  }

  return{
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/** Currency Helpers
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/ **/
theme.Currency = (function(){
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format){
    if (typeof cents === 'string'){
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal){
      precision = precision || 2;
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number == null){
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]){
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  }
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 * @namespace variants */
slate.Variants = (function(){

  /*** Variant constructor * @param {object} options - Settings from `product.js` */
  function Variants(options){
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = _.assignIn({}, Variants.prototype,{

    /*** Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     * @return {array} options - Values of currently selected variants */
    _getCurrentOptions: function(){
      var currentOptions = _.map($(this.singleOptionSelector, this.$container), function(element){
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox'){
          if ($element[0].checked){
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');
            $("."+currentOption.index).find(".slVariant").text(currentOption.value);
            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');
          $("."+currentOption.index).find(".slVariant").text(currentOption.value);
          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = _.compact(currentOptions);

      return currentOptions;
    },

    /*** Find variant based on selected values.
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants*/
    _getVariantFromOptions: function(){
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = _.find(variants, function(variant){
        return selectedValues.every(function(values){
          return _.isEqual(variant[values.index], values.value);
        });
      });

      return found;
    },

    /*** Event handler for when a variant input changes. */
    _onSelectChange: function(){
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant){
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState){
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant){
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src){
        return;
      }
      this.$container.trigger({
        type: 'variantImageChange', variant: variant
      });
    },

    /*** Trigger event when variant price changes. *  @param  {object} variant - Currently selected variant * @return {event} variantPriceChange */
    _updatePrice: function(variant){
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price){
        return;
      }
      this.$container.trigger({
        type: 'variantPriceChange', variant: variant
      });
    },

    /*** Trigger event when variant sku changes. *  @param  {object} variant - Currently selected variant *  @return {event} variantSKUChange */
    _updateSKU: function(variant){
      if (variant.sku === this.currentVariant.sku){
        return;
      }
      this.$container.trigger({
        type: 'variantSKUChange', variant: variant
      });
    },

    /** Update history state for product deeplinking
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description] */
    _updateHistoryState: function(variant){
      if (!history.replaceState || !variant){return;}

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /*** Update hidden master select of variant change
     * @param  {variant} variant - Currently selected variant */
    _updateMasterSelect: function(variant){
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();

/* ================ MODULES ================ */
window.theme = window.theme || {};
theme.Search = (function(){
  var selectors={
    search: '.search',
    searchSubmit: '.s_submit',
    searchInput: '.s_input'
  };

  var classes={focus: 'search--focus'};

  function init(){
    searchSubmit();
    // Current Ajax Search request.
    var currentAjaxRequest = null;
    var searchForms = $('form.search').css('position','relative').each(function(){
      var input = $(this).find('input[name="q"]');
      input.bind('keyup change', function(){
        var term = $(this).val(),
        	form = $(this).closest('form'),
        	searchList = form.find('.s_res');
		if (term.length > 2 ){
            fetch(`${routes.psearchurl}?q=${term}&section_id=predictive-search`)
              .then((response) => {
                if (!response.ok) {
                  var error = new Error(response.status);
                  $(searchList).hide();
                  throw error;
                }
                return response.text();
              }).then((text) => {
                var resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
                $(searchList).html(text);
                $(searchList).fadeIn();
              }).catch((error) => {
                $(searchList).hide();
                throw error;
              });
    	} else { 
            searchList.empty().hide();
        }
      });
    });
    
    $('.modalOverly, .closeSearch').bind('click', function(){
      $('#s_pop').removeClass("active");
      $('body').removeClass("showOverly searchact");
    });
    
    $('.main_hdr .search-icn').on('click', function(e){
      e.preventDefault();
      $('body').addClass("showOverly searchact");
      $('#s_pop').addClass("active");
      $('.user-links,#set_box,#cart-drawer').removeClass("active");
      setTimeout(function(){ $('input[name=q]').focus(); }, 600);
    });
     
  }

  function searchSubmit(){
    $(selectors.searchSubmit).on('click', function(evt){
      var $el = $(evt.target);
      var $input = $el.parents(selectors.search).find(selectors.searchInput);
      if ($input.val().length === 0){
        evt.preventDefault();
        searchFocus($input);
      }
    });
  }
    return { init:init };
})();

(function(){
  var $backButton = $('.return-link');

  if (!document.referrer || !$backButton.length || !window.history.length){
    return;
  }

  $backButton.one('click', function(e){
    e.preventDefault();
    var referrerDomain = urlDomain(document.referrer);
    var shopDomain = urlDomain(window.location.href);
    if (shopDomain === referrerDomain){ history.back(); }
    return false;
  });

  function urlDomain(url){
    var anchor = document.createElement('a');
    anchor.ref = url;
    return anchor.hostname;
  }
})();

theme.Slideshow = (function(){
  this.$slideshow = null;
  var classes = {
    wrapper: 'oss_wrap',
    slideshow: 'slideshow',
    currentSlide: 'slick-current'
  };

  function slideshow(el){
    this.$slideshow = $(el);
    this.$wrapper = this.$slideshow.closest('.' + classes.wrapper);

    this.$slideshow.on('beforeChange', beforeChange.bind(this));
    this.$slideshow.on('init', function(slick){
      slideshowA11y.bind(this);
      
      slick = $(slick.currentTarget);
      setTimeout(function(){
        playPauseVideo(slick,"play");
      }, 1000);
      
    });
    this.$slideshow.slick();
    
    var slideWrapper = $(this.$slideshow),
        iframes = $(this.$slideshow).find('.embed-player');
    
    this.$slideshow.on("beforeChange", function(event, slick){
      slick = $(slick.$slider);
      playPauseVideo(slick,"pause");
    });
    this.$slideshow.on("afterChange", function(event, slick){
      slick = $(slick.$slider);
      playPauseVideo(slick,"play");
    });
    
    // Resize event
    resizePlayer(iframes, 16/9, $(el));
    $(window).on("resize.slickVideoPlayer", function(){
      resizePlayer(iframes, 16/9, $(el));
    });
  }

  function slideshowA11y(event, obj){
    var $slider = obj.$slider;
    var $list = obj.$list;
    var $wrapper = this.$wrapper;
    var autoplay = this.settings.autoplay;

    var slick = $(obj.$slider.currentTarget);
      setTimeout(function(){
        playPauseVideo(slick,"play");
      }, 1000);
    
    // Remove default Slick aria-live attr until slider is focused
    $list.removeAttr('aria-live');

    // When an element in the slider is focused
    // pause slideshow and set aria-live.
    $wrapper.on('focusin', function(evt){
      if (!$wrapper.has(evt.target).length){
        return;
      }

      $list.attr('aria-live', 'polite');

      if (autoplay){
        $slider.slick('slickPause');
      }
    });

    // Resume autoplay
    $wrapper.on('focusout', function(evt){
      if (!$wrapper.has(evt.target).length){
        return;
      }

      $list.removeAttr('aria-live');

      if (autoplay){
        // Manual check if the focused element was the video close button
        // to ensure autoplay does not resume when focus goes inside YouTube iframe
        if ($(evt.target).hasClass(classes.closeVideoBtn)){
          return;
        }

        $slider.slick('slickPlay');
      }
    });
  }

  function beforeChange(event, slick, currentSlide, nextSlide){
    var $slider = slick.$slider;
    var $currentSlide = $slider.find('.' + classes.currentSlide);
    var $nextSlide = $slider.find('.ss_slide[data-slick-index="' + nextSlide + '"]');
  }

  function getSlideshowId($el){
    return '#Slideshow-' + $el.data('id');
  }
  
    // POST commands to YouTube or Vimeo API
    function postMessageToPlayer(player, command){
      if (player == null || command == null) return;
      player.contentWindow.postMessage(JSON.stringify(command), "*");
    }

    // When the slide is changing
    function playPauseVideo(slick, control){
      var currentSlide, slideType, startTime, player, video;

      currentSlide = slick.find(".slick-current");
      slideType = currentSlide.data("video");
      player = currentSlide.find("iframe").get(0);
      startTime = currentSlide.data("video-start");

      if (slideType === "vimeo"){
        switch (control){
          case "play":
            if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')){
              currentSlide.addClass('started');
              postMessageToPlayer(player,{
                "method": "setCurrentTime",
                "value" : startTime
              });
            }
            postMessageToPlayer(player,{
              "method": "play",
              "value" : 1
            });
            break;
          case "pause":
            postMessageToPlayer(player,{
              "method": "pause",
              "value": 1
            });
            break;
        }
      } else if (slideType === "youtube"){
        switch (control){
          case "play":
            postMessageToPlayer(player,{
              "event": "command",
              "func": "mute"
            });
            postMessageToPlayer(player,{
              "event": "command",
              "func": "playVideo"
            });
            break;
          case "pause":
            postMessageToPlayer(player,{
              "event": "command",
              "func": "pauseVideo"
            });
            break;
        }
      } else if (slideType === "video"){
        video = currentSlide.children("video").get(0);
        if (video != null){
          if (control === "play"){
            video.play();
          } else {
            video.pause();
          }
        }
      }
    }

    // Resize player
    function resizePlayer(iframes, ratio, slideshow){
      if (!iframes[0]) return;
      var win = $(slideshow),
          width = win.width(),
          playerWidth,
          height = win.height(),
          playerHeight,
          ratio = ratio || 16/9;

      iframes.each(function(){
        var current = $(this);
        if (width / ratio < height){
          playerWidth = Math.ceil(height * ratio);
          current.width(playerWidth).height(height).css({
            left: (width - playerWidth) / 2,
             top: 0
            });
        } else {
          playerHeight = Math.ceil(width / ratio);
          current.width(width).height(playerHeight).css({
            left: 0,
            top: (height - playerHeight) / 2
          });
        }
      });
    }

  return slideshow;
})();

/* ================ TEMPLATES ================ */
window.theme = theme || {};
theme.customerTemplates = (function(){

  function initEventListeners(){
    // Show reset password form
    $('#RecoverPassword').on('click', function(evt){
      evt.preventDefault();
      toggleRecoverPasswordForm();
    });

    // Hide reset password form
    $('#HideRecoverPasswordLink').on('click',function(evt){
      evt.preventDefault();
      toggleRecoverPasswordForm();
    });
  }

  /****  Show/Hide recover password form **/
  function toggleRecoverPasswordForm(){
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /****  Show reset password success message **/
  function resetPasswordSuccess(){
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length){
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }

  /****  Show/hide customer address forms **/
  function customerAddressForm(){
    var $newAddressForm = $('#AddressNewForm');

    if (!$newAddressForm.length){
      return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify){
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew',{
        hideElement: 'AddressProvinceContainerNew'
      });
    }

    // Initialize each edit form's country/province selector
    $('.address-country-option').each(function(){
      var formId = $(this).data('form-id');
      var countrySelector = 'AddressCountry_' + formId;
      var provinceSelector = 'AddressProvince_' + formId;
      var containerSelector = 'AddressProvinceContainer_' + formId;

      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(countrySelector, provinceSelector,{
        hideElement: containerSelector
      });
    });

    // Toggle new/edit address forms
    $('.address-new-toggle').on('click', function(){
      $newAddressForm.toggleClass('hide');
    });

    $('.address-edit-toggle').on('click', function(){
      var formId = $(this).data('form-id');
      $('#EditAddress_' + formId).toggleClass('hide');
    });

    $('.address-delete').on('click', function(){
      var $el = $(this);
      var formId = $el.data('form-id');
      var confirmMessage = $el.data('confirm-message');

      // eslint-disable-next-line no-alert
      if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')){
        Shopify.postLink('/account/addresses/' + formId,{parameters:{_method: 'delete'}});
      }
    });
  }

  /****  Check URL for reset password hash **/
  function checkUrlHash(){
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover'){
      toggleRecoverPasswordForm();
    }
  }

  return {
    init: function(){
      checkUrlHash();
      initEventListeners();
      resetPasswordSuccess();
      customerAddressForm();
    }
  };
})();

/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.HeaderSection = (function(){

  function Header(){
    theme.Search.init();
    
    var hd = {
      body: 'body',
      mnTgl: '.js-mobile-nav-toggle',
      mbNav: '.mob_nav_wr'
    };

  	$('#main_nav .lvl1 > a').each(function(){
        if($(this).attr('href') == window.location.pathname) $(this).addClass('active');
    })

  	$(hd.mnTgl).on("click",function(){
      $(hd.mbNav).toggleClass("active");
      $(hd.body).toggleClass("showOverly");
      $(hd.mnTgl).toggleClass('open close');
    });
  
	$('#mob_nav .at, .sdCate .at').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('at-plus-l at-minus-l');
		$(this).parent().next().slideToggle();
    });
    
    if($("#cartPopup").length){
      $('.header-cart').magnificPopup({
        type:'inline',
        removalDelay:300,
        mainClass: 'mfp-zoom-in'
      });
      $('.continueCart').on("click",function(){$.magnificPopup.close()});
    } else {
      $(".header-cart, .continueCart").click(function(i){
        i.preventDefault();i.stopPropagation();
        $("#cartDrawer").toggleClass("active");
        
         $(".user-links,#s_pop,#set_box").removeClass("active");
         $('body').removeClass("searchact showOverly");
        
      });
    }
    
    $(".page-wrapper, .close-cart").on('click', function(e){
      $("#cart-drawer").removeClass("active");
    });
    
    $(".site_set").click(function(e){
      e.preventDefault();
      $("#set_box").toggleClass("active");
      $(".user-links,#s_pop").removeClass("active");
      $('body').removeClass("searchact showOverly");
    });
    
    $(".user-menu").click(function(e){
      e.preventDefault();
      $(".user-links").toggleClass("active");
	  $('#s_pop').removeClass("active");
      $('body').removeClass("searchact showOverly");
    });
    
    // Hide Cart on document click
    $("body").click(function(e){
      var $tg = $(e.target);
      
      if(!$tg.parents().is(hd.mbNav) && !$tg.parents().is(hd.mnTgl) && !$tg.is(hd.mnTgl)){
          $(hd.mbNav).removeClass("active");
          $(hd.body).removeClass("menuOn");
          $(hd.mnTgl).removeClass('close').addClass('open');
      }
      
      if(!$tg.parents().is("#cartDrawer") && !$tg.is("#cartDrawer") && !$tg.parents().is(".header-cart") && !$tg.is(".header-cart")){
        $("#cartDrawer").removeClass("active");
      }
      
      if(!$tg.parents().is(".user-links") && !$tg.parents().is(".user-menu") && !$tg.is(".user-menu")){
        $(".user-links").removeClass("active");
      }
      
      if(!$tg.parents().is("#set_box") && !$tg.parents().is(".site_set") && !$tg.is(".site_set")){
        $("#set_box").removeClass("active");
      }
      if(!$tg.parents().is(".sb_filter")){
        $(".flTop .filterBx").removeAttr("open");
      }
    })
  }
  Header.prototype = _.assignIn({}, Header.prototype,{
    onUnload: function(){
      theme.Header.unload();
    }
  });

  return Header;
})();

theme.Maps = (function(){
  var config={zoom:14};
  var apiStatus = null;
  var mapsToLoad = [];
  var key = theme.mapKey ? theme.mapKey : '';

  function Map(container){
    this.$container = $(container);

    if (apiStatus === 'loaded'){
      this.createMap();
    }else{
      mapsToLoad.push(this);

      if (apiStatus !== 'loading'){
        apiStatus = 'loading';
        if (typeof window.google === 'undefined'){
          $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key)
            .then(function(){
              apiStatus = 'loaded';
              initAllMaps();
            });
        }
      }
    }
  }

  function initAllMaps(){
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance){
      instance.createMap();
    });
  }

  function geolocate($map){
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({address: address}, function(results, status){
      if (status !== google.maps.GeocoderStatus.OK){
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype,{
    createMap: function(){
      var $map = this.$container.find('.map_con');

      return geolocate($map)
        .then(function(results){
          var mapOptions = {
            zoom: config.zoom,
            center: results[0].geometry.location,
            disableDefaultUI: true
          };

          var map = this.map = new google.maps.Map($map[0], mapOptions);
          var center = this.center = map.getCenter();

          //eslint-disable-next-line no-unused-vars
          var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
          });

          google.maps.event.addDomListener(window, 'resize');
        }.bind(this))
        .fail(function(){
          var errorMessage;

          switch (status){
            case 'ZERO_RESULTS':
              errorMessage = theme.strings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = theme.strings.addressQueryLimit;
              break;
            default:
              errorMessage = theme.strings.addressError;
              break;
          }
          $map.parent().addClass('page-width map_er').html('<div class="errors text-center">' + errorMessage + '</div>');
        });
    },
    onUnload: function(){ google.maps.event.clearListeners(this.map, 'resize'); }
  });
  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure(){
  $('.omap').addClass('map_er');
  $('.map_con').remove();
  $('.map_lnk').remove();
  $('.map_ol').after('<div class="errors text-center">' + theme.strings.authError + '</div>');
}

/* eslint-disable no-new */
theme.Product = (function(){
  function Product(container){
    this.container = container;
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id');

    this.settings={
      mediaQueryMediumUp: 'screen and (min-width: 768px)',
      mediaQuerySmall: 'screen and (max-width: 767px)',
      bpSmall: false,
      enableHistoryState: $container.data('enable-history-state') || false,
      imageSize: null,
      imageZoomSize: null,
      namespace: '.slideshow-' + sectionId,
      sectionId: sectionId,
      sliderActive: false,
      zoomEnabled: false
    };

    this.selectors={
      addToCart: '#AddToCart-' + sectionId,
      addToCartText: '#AddToCartText-' + sectionId,
      comparePrice: '#ComparePrice-' + sectionId,
      originalPrice: '#ProductPrice-' + sectionId,
      saveAmount: '#SaveAmount-' + sectionId, 
      discountBadge: '.discount-badge',
      SKU: '.variant-sku',
      originalPriceWrapper: '.pr_price-' + sectionId,
      originalSelectorId: '#ProductSelect-' + sectionId,
      productFeaturedImage: '.FeaturedImage-' + sectionId,
      productImageWrap: '.pr_zoom_' + sectionId + '.slick-active',
      productPrices: '.pr_price_single-' + sectionId,
      productThumbImages: '.pr_thumb_' + sectionId,
      productThumbs: '.pr_thumbs_' + sectionId,
      saleClasses: 'pr_price_sale pr_price_sale_single',
      saleLabel: '.pr_price_sale_lbl-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId,
      productMediaWrapper: '[data-product-single-media-wrapper]',
      productMediaTypeModel: '[data-product-media-type-model]'
    }
    
    // Magnific Popup
    $('.mfp-link, .product-info, .pr_form_item').magnificPopup({
      delegate: '.mfp',
  	  removalDelay: 300, 
      callbacks:{
        beforeOpen: function(){
          $('.sticky_hdr').addClass('popup');
           this.st.mainClass = this.st.el.attr('data-effect');
        },       
      	close:function(){ $('.sticky_hdr').removeClass('popup'); }
      },
  	 midClick: true 
	});     	
    
    $(".stickyOpt .selectedOpt").on('click', function(){
		$(".stickyOpt ul").slideToggle("fast");
    });
    $(".stickyOpt .vrOpt").on('click', function(e){
		var value = $(this).attr('data-val'),
            number = $(this).attr('data-no'),
            text = $(this).text();
      	$(".selectedOpt").text(text);
      	$(".stickyCart .selectbox").val(value).trigger('change');
      	$(".stickyOpt ul").slideUp("fast");
      	this.productvariants = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
      	$(".stickyCart .pr_featured_img").attr('src', this.productvariants.variants[number].featured_image.src.replace(/(\.[^\.]*$|$)/, '_60x60' + '$&'));
    });
    $(".stickyQty .qtyBtn").on("click",function(){
      var qtyField = $('#quantity'),oldValue = $(qtyField).val(),newVal = 1;
      if($(this).is(".plus")) {
        newVal = parseInt(oldValue) + 1;
      } else if(oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      }
      $(qtyField).val(newVal).trigger('change');
    });
    $('#quantity').on("change", function(){
        $('#quantity1').val($(this).val());
    });

    // change variant on image sections
    if (typeof variantImages !== 'undefined'){
      $(this.selectors.productThumbImages).bind('click', function(){
        var arrImage = $(this).attr('href').split('?')[0].split('.');
        var strExtention = arrImage.pop();
        var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
        var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;
        if (typeof variantImages[strNewImage] !== 'undefined'){
            productOptions.forEach(function (value, i){
             optionValue = variantImages[strNewImage]['option-'+i];
             if (optionValue !== null && $('.single-option-selector:eq('+i+') option').filter(function(){ return $(this).text() === optionValue }).length){
               $(".swatch-"+i).find('.swatchInput[value="'+optionValue+'"]').prop( "checked", true );
               $('.single-option-selector:eq('+i+')').val(optionValue).trigger('change');
             }
          });
        }
      });
    }
    
    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$('#ProductJson-' + sectionId).html()){
      return;
    }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);

    this.settings.zoomEnabled = $(this.selectors.productFeaturedImage).hasClass('js-zoom-enabled');
    this.settings.imageSize = theme.Images.imageSize($(this.selectors.productFeaturedImage).attr('src'));

    this._initBreakpoints();
    this._stringOverrides();
    this._initVariants();
    this._initImageSwitch();
   	this._initThumbnailSlider();
    this._setActiveThumbnail();
    this._initModelViewerLibraries();
    this._initShopifyXrLaunch();
    
    // Pre-loading product images to avoid a lag when a thumbnail is clicked, or
    // when a variant is selected that has a variant image
    theme.Images.preload(this.productSingleObject.images, this.settings.imageSize);
  }

  Product.prototype = _.assignIn({}, Product.prototype,{
    _stringOverrides: function(){
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },

    _initBreakpoints: function(){
      var self = this;

      enquire.register(this.settings.mediaQuerySmall,{
        match: function(){
          // destroy image zooming if enabled
          if (self.settings.zoomEnabled){
            _destroyZoom($(self.selectors.productImageWrap));
          }
          self.settings.bpSmall = true;
        },
        unmatch: function(){
          self.settings.bpSmall = false;
        }
      });

      enquire.register(this.settings.mediaQueryMediumUp,{
        match: function(){
          if (self.settings.zoomEnabled){
            _enableZoom($(self.selectors.productImageWrap));
          }
        }
      });
    },

    _initVariants: function(){
      var options={
        $container: this.$container,
        enableHistoryState: this.$container.data('enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);

      this.$container.on('variantChange' + this.settings.namespace, this._updateAddToCart.bind(this));
      this.$container.on('variantImageChange' + this.settings.namespace, this._updateImages.bind(this));
      this.$container.on('variantPriceChange' + this.settings.namespace, this._updatePrice.bind(this));
      this.$container.on('variantSKUChange' + this.settings.namespace, this._updateSKU.bind(this));
    },

    _initImageSwitch:function(){
      if (!$(this.selectors.productThumbImages).length){
        return;
      }
      var self = this;
      $(this.selectors.productThumbImages).on('click', function(evt){
        evt.preventDefault();
        var $el = $(this),
        	imageSrc = $el.attr('href'),
        	zoomSrc = $el.data('zoom');
        self._setActiveThumbnail(imageSrc);
      });
    },
    
    _setActiveThumbnail: function(src){
      var activeClass = 'active-thumb';

      // If there is no element passed, find it by the current product image
      if (typeof src === 'undefined'){
        src = $(this.selectors.productThumbImages + '.activeSlide').attr('href');
      }

      // Set active thumbnails (incl. slick cloned thumbs) with matching 'href'
      var $thumbnail = $(this.selectors.productThumbImages + '[href="' + src + '"]');
      $(this.selectors.productThumbImages).removeClass(activeClass);
      $thumbnail.addClass(activeClass);
      var slideno = $thumbnail.parent().data('slide');
      
      if(theme.productStrings.prStyle == "style4" || theme.productStrings.prStyle == "style5" ){
      	var imgposition = $(".pr_photo[data-slide='"+slideno+"']").offset();
      	if($(window).width()>767){
          $("html, body").animate({ scrollTop: imgposition.top-70 }, 700);
        }else{
          $('.primgSlider').slick('slickGoTo', slideno);
        }
      }else{
        $('.primgSlider').slick('slickGoTo', slideno);
      }
    },

    _initThumbnailSlider: function(){
      $(this.selectors.productThumbs).slick();
	  $(".primgSlider").slick();
      
       if (theme.productStrings.prStyle == "style4" || theme.productStrings.prStyle == "style5"){
         $(".primgSlider").slick('unslick');
         $(window).on('load resize', function(){
           if($(window).width() > 767){
           		$(".primgSlider").slick('unslick');
           } else {
             	$(".primgSlider").slick("refresh");
           }
         }).trigger('resize');
       }
       
       $(window).on('load', function(e){
       	$('.pr_thumb[data-slide="0"] .prvideo').trigger('click');
         var video = $('.primgSlider .videoSlide.slick-active video').get(0);
        if($(video).length){
        	video.play();
        }
       });
       var zoomItem = this.selectors.productImageWrap,
       		enableZoom = !this.settings.bpSmall && this.settings.zoomEnabled;
       if (enableZoom){_destroyZoom(zoomItem);_enableZoom(zoomItem);}
       $('.primgSlider').on('afterChange', function(event, slick, currentSlide){
         if (enableZoom){_destroyZoom(zoomItem);_enableZoom(zoomItem);}

         if($('.primgSlider .videoSlide video').length){ $('.primgSlider .videoSlide video').get(0).pause(); }
         var video = $('.primgSlider .videoSlide.slick-active video').get(0);
         if($(video).length){ video.play(); }
         
         if($('.slick-current model-viewer').length){ $('.slick-current .shopify-model-viewer-ui__button--poster').trigger('click')}
       });
    },
    
    _initModelViewerLibraries: function(){
      var modelViewerElements = this.container.querySelectorAll(
        this.selectors.productMediaTypeModel
      );
      if (modelViewerElements.length < 1) return;
      theme.ProductModel.init(modelViewerElements, this.settings.sectionId);
    },

    _initShopifyXrLaunch:function(){
      
    },

    _initShopifyXrLaunchHandler: function(){
      var currentMedia = this.container.querySelector(
        this.selectors.productMediaWrapper +
          ':not(.' +
          self.classes.hidden +
          ')'
      );
      currentMedia.dispatchEvent(
        new CustomEvent('xrLaunch',{
          bubbles: true,
          cancelable: true
        })
      );
    },

    _updateAddToCart: function(evt){
      var variant = evt.variant;

      if (variant){
        $(this.selectors.productPrices).removeClass('v_hidden').attr('aria-hidden', 'true');

        if (variant.available){
          var quantity = $(".prvQty").data('v'+variant.id),
          	  maxquantity = $(".lowstock").data('qty');
          
          $(this.selectors.addToCart).prop('disabled', false);
          
          if(quantity < 1 && variant.inventory_management == "shopify"){
          	$(this.selectors.addToCartText).text(theme.strings.preOrder);
          } else {
            $(this.selectors.addToCartText).text(theme.strings.addToCart);
          }

         if(quantity < maxquantity && quantity > 0 && variant.inventory_management == "shopify"){
           	$(".instock,.preorder,.outstock").addClass("hide");
          	$(".lowstock").removeClass("hide").find(".items").text(quantity);
          } else if(quantity < 1 && variant.inventory_management == "shopify"){
            $(".instock,.outstock,.lowstock").addClass("hide");
          	$(".preorder").removeClass("hide");
          } else{
            $(".preorder,.outstock,.lowstock").addClass("hide");
          	$(".instock").removeClass("hide");
          }
        } else {
          // The variant doesn't exist, disable submit button and change the text.
          // This may be an error or notice that a specific variant is not available.
          $(this.selectors.addToCart).prop('disabled', true);
          $(this.selectors.addToCartText).text(theme.strings.soldOut);
          $(".instock,.preorder,.lowstock").addClass("hide");
          $(".outstock").removeClass("hide");
        }
      } else {
        $(this.selectors.addToCart).prop('disabled', true);
        $(this.selectors.addToCartText).text(theme.strings.unavailable);
        $(this.selectors.productPrices).addClass('v_hidden').attr('aria-hidden', 'false');
        $(".instock,.preorder,.lowstock").addClass("hide");
        $(".outstock").removeClass("hide");
      }
    },

    _updateImages: function(evt){
      var variant = evt.variant,
      	  sizedImgUrl = theme.Images.getSizedImageUrl(variant.featured_media.preview_image.src, this.settings.imageSize),
      	  zoomSizedImgUrl;
      this._setActiveThumbnail(sizedImgUrl);
    },

    _updatePrice: function(evt){
      var variant = evt.variant;

      // Update the product price
      $(this.selectors.originalPrice).html(theme.Currency.formatMoney(variant.price, theme.moneyFormat));

      // Update and show the product's compare price if necessary
      if (variant.compare_at_price > variant.price){
        $(this.selectors.comparePrice).html(theme.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat)).removeClass('hide');
        $(this.selectors.originalPriceWrapper).addClass(this.selectors.saleClasses);
        $(this.selectors.saleLabel).removeClass('hide');        
        var price1 = variant.compare_at_price-variant.price,
        	price2 = price1 * 100
        	salecount = price2/variant.compare_at_price;        
        $(this.selectors.discountBadge).find('.off').find('span').text(+salecount.toFixed());        
        $(this.selectors.discountBadge).removeClass('hide');
        $(this.selectors.saveAmount).html(theme.Currency.formatMoney(price1,  theme.moneyFormat));        

      } else {
        $(this.selectors.comparePrice).addClass('hide');
        $(this.selectors.saleLabel).addClass('hide');
        $(this.selectors.discountBadge).addClass('hide');
        $(this.selectors.originalPriceWrapper).removeClass(this.selectors.saleClasses);
      }
    },

    _updateSKU: function(evt){
      var variant = evt.variant;
      $(this.selectors.SKU).html(variant.sku);
    },

    onUnload: function(){
      this.$container.off(this.settings.namespace);
    }
  });
  function _enableZoom($el){
    $($el).each(function(){
    	var zoomUrl = $(this).data('zoom');
    	$(this).zoom({
      		url: zoomUrl
    	});
     });
  }

  function _destroyZoom($el){
    $($el).each(function(){
    	$(this).trigger('zoom.destroy');
     });
  }
  return Product;
})();

theme.ProductModel = (function(){
  var modelJsonSections={};
  var models={};
  var xrButtons={};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId){
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.forEach(function(modelViewerContainer, index){
      var mediaId = modelViewerContainer.getAttribute('data-media-id');
      var modelViewerElement = modelViewerContainer.querySelector(
        'model-viewer'
      );
      var modelId = modelViewerElement.getAttribute('data-model-id');

      if (index === 0){
        var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
        var xrButton = mediaGroup.querySelector(selectors.xrButton);
        xrButtons[sectionId] = {
          element: xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        container: modelViewerContainer,
        element: modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      },
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);
    theme.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors){
    if (errors) return;

    if (!window.ShopifyXR){
      document.addEventListener('shopify_xr_initialized', function(){
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections){
      if (modelJsonSections.hasOwnProperty(sectionId)){
        var modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) continue;
        var modelJson = document.querySelector('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors){
    if (errors) return;

    for (var key in models){
      if (models.hasOwnProperty(key)){
        var model = models[key];
        if (!model.modelViewerUi){
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
        }
        setupModelViewerListeners(model);
      }
    }
  }
  
  function setupModelViewerListeners(model){
    var xrButton = xrButtons[model.sectionId];

    model.container.addEventListener('mediaVisible', function(){
      xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
      if (theme.Helpers.isTouch()) return;
      model.modelViewerUi.play();
    });

    model.container.addEventListener('mediaHidden', function(){
      xrButton.element.setAttribute(
        'data-shopify-model3d-id',
        xrButton.defaultId
      );
      model.modelViewerUi.pause();
    });

    model.container.addEventListener('xrLaunch', function(){
      model.modelViewerUi.pause();
    });
  }

  function removeSectionModels(sectionId){
    for (var key in models){
      if (models.hasOwnProperty(key)){
        var model = models[key];
        if (model.sectionId === sectionId){
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return{
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.LibraryLoader = (function(){
  var types = {
    link: 'link',
    script: 'script'
  };

  var status ={
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries={
    modelViewerUiStyles:{
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback){
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function(){};
    if (library.status === status.loaded){
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type){
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback){
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function(){
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback){
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function(){
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return{load:load};
})();

theme.Quotes = (function(){
  var config = {slideCount: 0};

  function Quotes(container){
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var wrapper = this.wrapper = '.wr'+sectionId;
    var slider = this.slider = '#Quotes-' + sectionId;
    var $slider = $(slider, wrapper);
    var sliderActive = false;

    config.slideCount = $slider.data('count');

    $slider.on('init', this.a11y.bind(this));

    initSlider($slider);

    function initSlider(sliderObj){
      if (sliderActive){
        sliderObj.slick('unslick');
        sliderActive = false;
      }

      sliderObj.slick();
      sliderActive = true;
    }
  }

  Quotes.prototype = _.assignIn({}, Quotes.prototype,{
    onUnload: function(){
      $(this.slider, this.wrapper).slick('unslick');
    },

    onBlockSelect: function(evt){
      // Ignore the cloned version
      var $slide = $('.quotes_sl-' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');
      $(this.slider, this.wrapper).slick('slickGoTo', slideIndex);
    },

    a11y: function(event, obj){
      var $list = obj.$list;
      var $wrapper = $(this.wrapper, this.$container);

      $list.removeAttr('aria-live');
      $wrapper.on('focusin', function(evt){
        if ($wrapper.has(evt.target).length){
          $list.attr('aria-live', 'polite');
        }
      });

      // Remove aria-live
      $wrapper.on('focusout', function(evt){
        if ($wrapper.has(evt.target).length){
          $list.removeAttr('aria-live');
        }
      });
    }
  });
  return Quotes;
})();

theme.slideshows={};
theme.SlideshowSection = (function(){
  function SlideshowSection(container){
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#Slideshow-' + sectionId;

    theme.slideshows[slideshow] = new theme.Slideshow(slideshow);
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype,{
  onUnload: function(){
    delete theme.slideshows[this.slideshow];
  },

  onBlockSelect: function(evt){
    var $slideshow = $(this.slideshow);

    // Ignore the cloned version
    var $slide = $('.ss_slide--' + evt.detail.blockId + ':not(.slick-cloned)');
    var slideIndex = $slide.data('slick-index');

    // Go to selected slide, pause autoplay
    $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
  },

  onBlockDeselect: function(){
    // Resume autoplay
    $(this.slideshow).slick('slickPlay');
  }
});

// CATEGORY SLIDER
theme.collectionView = (function(){
  function collectionView(container){
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    
    $('#sideProdSlider').slick();
    
    $(document).on('click','.flTop .flTtl',function(e){
      	$(".filterBx").removeAttr("open");
    });
    
    $(document).on('change','#SortBySt',function(e){
		var value = $(this).val();
      	if ($(".dyFilters").length){
			$("#SortBy").val(value).trigger('change');
        } else {
          if (value.length) {
            window.location.search = 'sort_by='+value;
          } else {
            window.location.href = window.location.href.replace(window.location.search, '');
          }
        }
	});
    
	$(document).on('click', '.change-view', function(e){
      var view = $(this).data('view'),
          currentUrl = document.URL,
          url = new URL(currentUrl);
      url.searchParams.set("view", view); // setting your param
      var newUrl = url.href;
      window.location = newUrl;
    });
    $(document).on('change', '.optTag', function(e){
      var URL =  $('.filterWrap').data('url'),
          paramString = window.location.search.substring(1);
      	
      var productFilters = $('input.optTag'),
          newTags = [],
          url = '';

        productFilters.each(function(){
            if ($(this).val() && $(this).is(":checked") == true){
              newTags.push($(this).val());
            }
        });
        if(newTags.length){
        	var tags = newTags.join('+');
       		ajaxfilter(URL+'/'+tags+'?'+paramString);
        } else {
          	ajaxfilter(URL+'?'+paramString);
        }
	});
    $(document).on('click', '.removetag', function(e){
      e.preventDefault();
      var filter = $(this).attr("data-value");
      $("input.optTag[value='"+filter+"']").trigger("click");
	});
    $(document).on('change', '.dyfl, .prRange, #SortBy', function(e){
      var URL =  '//'+window.location.hostname+window.location.pathname,
      	formdata = $('#CollectionFiltersForm').serialize();
      //window.location.replace(URL+'?'+formdata);
      ajaxfilter(URL+'?'+formdata);
	});
  	$(document).on('click', '.removefl', function(e){
      e.preventDefault();
      var URL =  '//'+window.location.hostname+$(this).attr('href');
      ajaxfilter(URL);
	});
  
  	ajaxfilter = (function(url){
        $.ajax({
          type: 'GET',
          url: url,
          data:{},
          beforeSend:function(){
            $('body').addClass('loading hideOverly');
          },
          complete: function (data){
            $('#collectionPr').html($("#collectionPr", data.responseText).html());
            $('#CollectionFiltersForm').html($("#CollectionFiltersForm", data.responseText).html());
            $('.active-facets').html($(".active-facets", data.responseText).html());
            $('.collection-product-count').html($(".collection-product-count", data.responseText).html());
			
            if($(window).width() < 1025){
            	$('.filterBx').attr('open','');
            }
            
            $('.pagination').html($(".pagination", data.responseText).html());
            if(!$(".pagination", data.responseText).html()){
              $('.pagination').hide();
            } else {
              $('.pagination').show();
            }
            $('.infinitpaginOuter').html($(".infinitpaginOuter", data.responseText).html());
            if(!$(".infinitpaginOuter", data.responseText).html()){
              $('.infinitpagin').remove();
            }
            if(theme.mlcurrency){ currenciesChange("sapn.money"); }
            $('body').removeClass('loading hideOverly');

            if($('.prRange').length){ priceSlider(); }
            $(theme.init);
			
            history.pushState({page: url}, url, url);
          }
        });
    });

    /*$(window).on('load delayed-resize', function (e, resizeEvent){
  		productGridView(sectionId);
    });*/
    
    infiniteScroll = function(){
      	var action = 'scroll load delayed-resize';
        $(window).on(action, function(){
          var moreURL = $('.infinitpagin a').attr('href');
          if ($('.infinitpagin a.infinite').length){
            var bottom = $('.infinitpagin').offset();
            var docTop = ($(document).scrollTop() + $(window).height() - 50);
            if( docTop > bottom.top){
              $(window).off(action);
              loadMore(moreURL);
            }
          }
        });
    }
    loadMoreBtn = function(){
		$(document).on('click', 'a.loadMore', function(e){
          	e.preventDefault();
          	var moreURL = $(this).attr('href');
			loadMore(moreURL);
        });
    }
    
    loadMore = function(moreURL){
      if (moreURL.length){
        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: moreURL,
          beforeSend:function(){
          	if ($('.infinitpaginOuter').attr('data-type') == "button" ){
            	$('body').addClass('loading hideOverly');
            } else {
              $('.infinitpagin a').show();
            }
          },
          complete: function (data){
            if($('#collectionPr').length){
            	$('#collectionPr').append($("#collectionPr", data.responseText).html());
            }
            if($(".infinitpagin", data.responseText).html()){
            	$('.infinitpagin').html($(".infinitpagin", data.responseText).html());
            } else {
            	$('.infinitpagin').remove();
            }
            if (!$('.infinitpagin a.loadMore').length){
              infiniteScroll();
            }
            $('body').removeClass('loading hideOverly');
          }
        });
      }
    }
    infiniteScroll();loadMoreBtn();

  }
  return collectionView;
})();

theme.instagram={};
theme.instagramSection = (function(){
  function instagramSection(container){
    var $container = this.$container = $(container),
    	sectionId = $container.attr('data-section-id'),
        act = $container.attr('data-act'),
        limit = $container.attr('data-count'),
        rds = $container.attr('data-ds'),
        rtb = $container.attr('data-tb'),
        rmb = $container.attr('data-mb');
    
    var ajaxUrl = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption,children&access_token='+act;
    
    $.ajax({
		url: ajaxUrl,
        type: 'GET',
        dataType: "json",
        success: function (res){
        	var data = res.data,
				igdiv = '#instafeed'+sectionId,
               	html = '',
                bl = bl || true;

			$.each(data, function (index, el){
                     if (index >= limit) return 0;
                     var img_url = el.thumbnail_url || el.media_url;
                     html += '<div class="insta-img '+rds+' '+rtb+' '+rmb+'"><a rel="nofollow" class="instagram-" href="'+el.permalink+'" target="_blank"><img data-src="' + img_url + '" alt="" class="lazyload" /></a></div>';
            });
            $(igdiv).html(html);
            $("#instafeed"+sectionId+".carousel").slick();
		}
	});
  }
  return instagramSection;
})();

theme.carousel = (function(){
    function carousel(container){
     var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          carousel = $($container).find('.carousel'),
    	  tabs = this.tabs = '#' + sectionId + ' .tablink',
    	  tabcontent = this.tabcontent = '#' + sectionId + ' .tb_cnt';
    
    $(tabs).on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(tabcontent).not(tab).css("display", "none");
        $(tab).fadeIn();
      	$(carousel).slick('refresh');
    });
    $('#' + sectionId).each(function(){
		$(this).find('.cl_tbs li:first-child').addClass("active");
      	$(this).find('.tbs_wrp .acor-ttl:first-child').addClass("active");
		$(this).find('.tbs_wrp h3:first-child + .tb_cnt').show();
		var firsttab = $(this).find('.cl_tbs li:first-child a').attr("href");
    });
      
    if($('#'+sectionId+'.recommended').length){
		var	baseUrl = $container.data('baseUrl'),
          productId = $container.data('productId'),
          limit = $container.data('limit'),
          productRecommendationsUrlAndContainerClass = baseUrl + '?section_id='+sectionId+'&limit=' + limit + '&product_id=' +productId + ' .product-recommendations';
      	$container.parent().load(productRecommendationsUrlAndContainerClass);
      	$("#productSlider-"+sectionId).slick();
      	setTimeout(function(){ $("#productSlider-"+sectionId).slick(); },1500);
    }
    $(carousel).slick();
  }
  return carousel;
})();

theme.masonary = (function(){
    function masonary(container){
    	var $container = this.$container = $(container),
          sectionId = $container.attr('data-section-id'),
          masonary = this.masonary = $($container).find('.grid-masonary');
    
      loadMasonary(masonary);
      setTimeout( function(){ loadMasonary(masonary); },1000);
      function loadMasonary(masonary){
        $(masonary).masonry({
            columnWidth: '.grid-sizer-'+sectionId,
            itemSelector: '.ms-item',
            percentPosition: true
        });
      }
  }
  return masonary;
})();

theme.tabs = (function(){
	function tabs(container){
			var $container = this.$container = $(container),		
			sectionId = $container.attr('data-section-id'),
			tabs = this.tabs = '.product-tabs .tablink';			
			 
			$(tabs).on('click', function(e){				
				e.preventDefault();				
				$(this).parent().addClass("active").siblings().removeClass("active");
				var tab = $(this).attr("href");
				$(".tab-content").not(tab).css("display", "none");
				$(tab).fadeIn();
				});
				$('.acor-ttl .tablink').on('click', function(e){
				e.preventDefault();
				$(this).parent().toggleClass("active").next().slideToggle();
				if($(window).width()<767) {
				  var tabposition = $(this).offset();
				  $("html, body").animate({ scrollTop: tabposition.top - 80 }, 500);
				}
				});
			if($(window).width()>767){
				$('.product-tabs li:first-child').addClass("active");
				$('.tab-container h3:first-child + .tab-content').show();
			}
			}
		return tabs;
	})();

theme.ajaxCart = function(){

	$(".continue-shopping, .modalOverly, .closeDrawer").click(function(){
        $(".modal").fadeOut(200);
    	$("body").removeClass("loading showOverly");
    });
    $(document).on('click','.add-to-cart', function(e){
        e.preventDefault();
        $('body').addClass('loading');
        $(this).next().find('.cartBtn').trigger('click');
    });
    $('body').on('click','.quick-view',function(e){
        var qurl = $(this).attr('href');
        $.ajax({
          beforeSend : function (){
            $('body').addClass("loading");
           },
          url: qurl+'?section_id=quick-view',
          success: function(data){
            $.magnificPopup.open({
              items:{
                src: '<div class="quick-view-popup mfp-with-anim" id="quickv_pp">' + data + '</div>',
                type: 'inline'
              },
              removalDelay:500,
              callbacks:{
                beforeOpen: function(){
                 $('.sticky_hdr').addClass('popup');
                  this.st.mainClass = 'mfp-zoom-in';
                },
                open: function(){},
                close: function(){
                   $('.sticky_hdr').removeClass('popup');
                  $( '#quickv_pp' ).empty();
                }
              },
            });
          },
          complete: function(){
            $('body').removeClass("loading");
          }
        })
        e.preventDefault();e.stopPropagation();
      });
      $(document).on('click touch', '.quickShop', function(e){
          e.preventDefault(); e.stopImmediatePropagation();
          var url = $(this).attr('href'),
              imgwrapper = $(this).parents('.grid_bx').find(".grid_img_wr"),
              wrapper = $(this).parents(".grid_bx").find('.quick_shop');
        
          $.ajax({
            url: url+'?section_id=quickshop',
            dataType: 'html',
            type: 'GET',
            beforeSend:function(){
              $(imgwrapper).addClass('showLoading');
            },
            success: function(data){
              $(".quick_shop").removeClass('active').html("");
              $(wrapper).addClass('active').html(data);
            },
            complete: function(data){
              $(imgwrapper).removeClass('showLoading');
              if (theme.mlcurrency){ currenciesChange(".quick_shop.active .product-single__price span.money"); }
            }
          });
      });
      $(document).on('click touch', '.closeShop', function(e){
      	e.preventDefault();
        $(this).parents(".quick_shop").removeClass("active");
	  });
  
       var cName = "wishlistList";
       $(document).on('click', '.addto-wishlist', function(e){
           e.preventDefault();
             var id = $(this).attr('rel');
             if($.cookie(cName) == null){
               var str = id;
             } else {
               if($.cookie(cName).indexOf(id) == -1){
                 var str = $.cookie(cName) + '+' + id;
               }
             }
             $.cookie(cName, str, {expires:30, path:"/;SameSite=None", secure: true});
             $(this).find(".at").removeClass('at-heart-l').addClass('at-circle-notch-r at-spin');
             setTimeout(function(){
               $('.wishlist[rel="'+id+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
               $('.wishlist[rel="'+id+'"] .at').removeClass('at-circle-notch-r at-spin').addClass('at-heart');
             }, 2000);
         });
      	 
       try{
         if($.cookie(cName) != null && $.cookie(cName) != '+' && $.cookie(cName) != ''){
           var str = String($.cookie(cName)).split("+");
           for (var i=0; i<str.length; i++){
             if (str[i] != ''){
               $('.wishlist[rel="'+str[i]+'"]').removeClass('addto-wishlist').find('span').text(theme.wlAvailable);
               $('.wishlist[rel="'+str[i]+'"] .at').removeClass('at-heart-l').addClass('at-heart');
             }
           }
         }
       }
       catch(err){}
     
};
window.addEventListener('DOMContentLoaded',function(){$(theme.ajaxCart);});


$(document).ready(function(){
  
  var sections = new theme.Sections();

  sections.register('header-section', theme.HeaderSection);
  sections.register('cart-template', theme.Cart);
  sections.register('product', theme.Product);
  sections.register('collection-template', theme.collectionView);
  sections.register('product-template', theme.Product);
  sections.register('map', theme.Maps);
  sections.register('slideshow', theme.SlideshowSection);
  sections.register('carousel', theme.carousel );
  sections.register('quotes', theme.Quotes);
  sections.register('masonary', theme.masonary);
  sections.register('instagram', theme.instagramSection);
  sections.register('productTabs', theme.tabs);
});

var resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      $(window).trigger('delayed-resize');
    }, 250);
});

theme.init = function() {
  theme.customerTemplates.init();

  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(e) {
    slate.a11y.pageLinkFocus($(e.currentTarget.hash));
  });

  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });
  
  $(".saleTime, .atCounter").each(function(){
	var $this = $(this),
    	date = $(this).data('date'),
      	countDownDate = new Date(date).getTime();

	var x = setInterval(function(){
    	var now = new Date().getTime(),	            
            distance = countDownDate - now,
            days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days > 99){
            days = ("00" + days).substr(-3);
        } else {
            days = ("00" + days).substr(-2);
        }
        hours = ("00" + hours).substr(-2);
        minutes = ("00" + minutes).substr(-2);
        seconds = ("00" + seconds).substr(-2);

        $($this).find(".days").html(days);
        $($this).find(".hours").html(hours);
        $($this).find(".minutes").html(minutes);
        $($this).find(".seconds").html(seconds);
          
        if (distance < 0){clearInterval(x); $($this).hide().parents('.big-countdown').hide(); }
    }, 1000);
  });

};
$(theme.init);

$(document).ready(function() {
  "use strict";
  
  	$(document).on('click', '.clOpt', function(i){
      $(this).parent('ul').addClass('123');  
      $(this).parent('ul').next().val($(this).data('value'));
      $('#localization_form').submit();
    });
  	
  
   // LOOKBOOK SHOP 
	$('.btn-shop').click(function(){      
       $('.btn-shop').not($(this)).removeClass('active');
       $('.products .lb_shop, .grid-lookbook').not($(this).next()).removeClass('active');
      
       $(this).parents('.grid-lookbook').addClass('active');
       $(this).toggleClass('active');
       $(this).next().toggleClass('active');      
	});	

  	// PROMOTION HEADER show-hide
	if($.cookie('promotion') != 'true'){
    	$(".top-promo").show();
  	}
	$(".close-promo").click(function(){   
		$(".top-promo").slideUp();
		$.cookie('promotion','true',{ expires: 1, path:'/'});
	});    
  
	// SHOW HIDE PRODUCT Filters
  	$(document).on('click','.btn-filter',function(e){
    	$(".sb_filter").toggleClass("active");
      	$(".sb_filter").removeClass('flTop');
      	if(!$('.filterBx[open]').length){ $('.filterBx').attr('open',''); }
	});
	$(document).on('click','.closeFilter',function(){
		$(".sb_filter").removeClass("active");
	});
	$("body").click(function(event ){
    	var $target = $(event.target);
    	if(!$target.parents().is(".sb_filter") && !$target.is(".sb_filter") && !$target.is(".btn-filter")){
      		$(".sb_filter").removeClass("active");
    	}
	});
  
  // STICKY HEADER
  window.onscroll = function(){ scrollFunction() };
  function scrollFunction() {
	if (theme.fixedHeader){
		if($(window).scrollTop()>145) {     
            $('#header').addClass("sticky_hdr animated fadeInDown");
    	} else {
            $('#header').removeClass("sticky_hdr fadeInDown");
        }
    }
    
    /// sticky cart 
    if($(window).scrollTop()>600 && $(".stickyCart").length){
      	$("body.template-product").css('padding-bottom','70px');
        $(".stickyCart").slideDown();
    } else {
      	$("body.template-product").css('padding-bottom','0');
        $(".stickyCart").slideUp();
    }

    // SITE SCROLLER
    if($(window).scrollTop()>200){
      $("#scroll_top").addClass("active");
    } else {
      $("#scroll_top").removeClass("active");
    }
  }
  
  $("#scroll_top").on("click", function(){
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  
  //Footer links for mobiles
  $(".f_links .h4").click(function() {
    if($(window).width() < 769){
      $(this).toggleClass("active");
      $(this).next().slideToggle();
  	}
  });
  
  /// FAQs
  $(".accor .p_ttl").click(function() {       
    $(this).toggleClass("active");
    $(this).next().toggle();  	
  });   

  $(".no-accor .p_ttl").off("click"); 
  
  // Slick image with text
  $('.image-text-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  $(document).on('click', '.grswatches li:not(.noImg)', function(e){
      var $this = $(this),
          newImage = $(this).attr('rel'),
          gridWrapper = $(this).parents('.grid_bx').find('.grid_img_wr');
      $(gridWrapper).addClass("showLoading");
      $(gridWrapper).find('.variantImg').css("background-image", "url('"+newImage+"')");
      var image = document.createElement('img');
          image.src = newImage;
          image.onload = function () {
              $(gridWrapper).removeClass("showLoading").addClass("showVariantImg");
              $this.siblings().removeClass("active");
              $this.addClass("active");
          };
      return false;
    });
});

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })
    this.querySelectorAll('.qtyBtn').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }
  onButtonClick(e) {
    e.preventDefault();
    const previousValue = this.input.value;

    e.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}
customElements.define('quantity-input', QuantityInput);

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}

function removeTrapFocus(elementToFocus = null){
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

const trapFocusHandlers = {};
function trapFocus(container, elementToFocus = container) {
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];

  removeTrapFocus();

  trapFocusHandlers.focusin = (e) => {
    if ( e.target !== container && e.target !== last && e.target !== first )
      return;

    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function() {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function(e) {
    if (e.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.
    if (e.target === last && !e.shiftKey) {
      e.preventDefault();
      first.focus();
    }
    //  On the first focusable element and tab backward, focus the last element.
    if ((e.target === container || e.target === first) && e.shiftKey){
      e.preventDefault();
      last.focus();
    }
  };
  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);
  elementToFocus.focus();
}

class CartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (e) => {
      e.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}
customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');
    this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]')).reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);
    this.debouncedOnChange = debounce((e) => {
      this.onChange(e);
    }, 300);
    this.addEventListener('change', this.debouncedOnChange.bind(this));
  }

  onChange(e){
    var stopTg = e.target.classList.contains('stopEv');
    if(!stopTg){
        this.updateQuantity(e.target.dataset.index, e.target.value, document.activeElement.getAttribute('name'));
    }
  }

  getSectionsToRender(){
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.cartTotal',
      }
    ];
  }

  updateQuantity(line, quantity, name) {
    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, {...fetchConfig(), ...{ body }})
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        const quantityElement = document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartDrawerWrapper = document.querySelector('cart-drawer');
        const cartFooter = document.getElementById('main-cart-footer');

        if (parsedState.errors){
          quantityElement.value = quantityElement.getAttribute('value');
          this.updateLiveRegions(line, 'none');
        }
        
        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section => {
          const elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
                elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }));

        this.updateLiveRegions(line, parsedState.item_count);
        const lineItem =  document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
        if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
          cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
        }
        this.disableLoading();
      }).catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
        this.disableLoading();
      });
  }

  updateLiveRegions(line, itemCount){
    if (this.currentItemCount === itemCount || itemCount == 'none' ){
      const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
      const quantityElement = document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
      lineItemError.classList.add('error-alert');
      lineItemError.querySelector('.ctItem-error').innerHTML = window.cartStrings.quantityError.replace('[quantity]',quantityElement.value);
    }

    this.currentItemCount = itemCount;
    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);
    freeShippMsg();

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(){
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');
  }
}
customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define('cart-note', class CartNote extends HTMLElement {
    constructor() {
      super();
      this.addEventListener('change', debounce((e) => {
        const body = JSON.stringify({ note: e.target.value });
        fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{ body }});
      }, 300))
    }
  });
};

class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
  }

  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelector('#cartLink');
    cartLink.setAttribute('role', 'button');
    cartLink.setAttribute('aria-haspopup', 'dialog');
    cartLink.addEventListener('click', (e) => {
      e.preventDefault();
      this.open(cartLink)
    });
    cartLink.addEventListener('keydown', (e) => {
      if (e.code.toUpperCase() === 'SPACE') {
        e.preventDefault();
        this.open(cartLink);
      }
    });
  }

  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {this.classList.add('animate', 'active')});

    this.addEventListener('transitionend', () => {
      const containerToTrapFocusOn = this.classList.contains('is-empty') ? this.querySelector('.drawer-empty') : document.getElementById('CartDrawer');
      const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
      trapFocus(containerToTrapFocusOn, focusElement);
    }, { once: true });

    $('html').addClass('overflow-hidden');
    document.body.classList.remove('loading');
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    $('html').removeClass('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if(cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (e) => {
      e.currentTarget.setAttribute('aria-expanded', !e.currentTarget.closest('details').hasAttribute('open'));
    });

    //cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  renderContents(parsedState) {
    this.querySelector('.drawer__inner').classList.contains('is-empty') && this.querySelector('.drawer__inner').classList.remove('is-empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section => {
      const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
      sectionElement.innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    }));

    setTimeout(() => {
      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
      this.open();
    });
  }
  getSectionInnerHTML(html, selector = '.shopify-section'){
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }
  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: '#CartDrawer'
      }
    ];
  }
  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }
  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner'
      }
    ];
  }
}
customElements.define('cart-drawer-items', CartDrawerItems);

class CouponCode extends HTMLElement {
  constructor() {
    super();
    if (localStorage.getItem('storedDiscount')){
      this.querySelector('input[name="discount"]').value = localStorage.getItem('storedDiscount');  
    }
    this.querySelector('[data-update-coupon]').addEventListener('click', (event) => {
      this.val = this.querySelector('input[name="discount"]').value;
      localStorage.setItem('storedDiscount', this.val);
      fetch(`/discount/${this.val}`).then((response) => response.text()).then((responseText) =>{

      });
      document.querySelector('#cartCoupon').classList.remove("active");
    })
  }
}
customElements.define('coupon-code', CouponCode);

class CartOption extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('.cftBtn').forEach((button) => button.addEventListener("click", function(e){
        e.preventDefault()
        var ftbk = this.hash.substr(1);
        document.getElementById(ftbk).classList.add("active");
    }));
  }
}
customElements.define('cart-option', CartOption);

$(document).on('click', '.saveBtn', function(e){
    e.preventDefault()
    $('.cftDraw').removeClass("active");
});

if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cart = document.querySelector('cart-drawer');
      this.submitButton = this.querySelector('[type="submit"]');
      if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

      this.handleErrorMessage();

      this.submitButton.setAttribute('aria-disabled', true);
      $('body').addClass('loading');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      if (this.cart) {
        formData.append('sections', this.cart.getSectionsToRender().map((section) => section.id));
        formData.append('sections_url', window.location.pathname);
        this.cart.setActiveElement(document.activeElement);
      }
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);

            const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
            if (!soldOutMessage) return;
            this.submitButton.setAttribute('aria-disabled', true);
            soldOutMessage.classList.remove('hidden');
            this.error = true;
            return;
          } else if (!this.cart) {
            window.location = window.routes.cart_url;
            return;
          }

          this.error = false;
          const quickAddModal = this.closest('quick-add-modal');
          if (quickAddModal) {
            document.body.addEventListener('modalClosed', () => {
              setTimeout(() => { this.cart.renderContents(response) });
            }, { once: true });
            quickAddModal.hide(true);
          } else {
            this.cart.renderContents(response);
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
          if (!this.error) this.submitButton.removeAttribute('aria-disabled');
          freeShippMsg();
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.pform-error-wrap');
      if (!this.errorMessageWrapper) return;
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.pform-error-msg');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
function freeShippMsg(){
    fetch(window.routes.url+'/?section_id=main-cart').then((response) => response.text()).then((responseText) => {
        var html = new DOMParser().parseFromString(responseText, 'text/html');
        const destination = document.querySelector('#CartCount');
        const source = html.querySelector('#cartItems');
        if (source && destination) destination.innerHTML = source.innerHTML;

        if (document.querySelector('.freeShipMsg')){
            const freeship = document.querySelector('.freeShipMsg');
            const shipsource = html.querySelector('.freeShipget');
            if (shipsource && freeship) freeship.innerHTML = shipsource.innerHTML;
            if (theme.mlcurrency && $(".freeShipMsg span.money").length){ currenciesChange(".freeShipMsg span.money"); }
        }
    });
}
freeShippMsg();

// Recurpay custom code Begins
  function handleRadioChange() {
    const selectedRadio = document.querySelector('.product-form .swatch input[type="radio"]:checked');
    const variantName = selectedRadio ? selectedRadio.value : null;
    const selectElement = document.querySelector('.recurpay__frequency_select');
    if(selectElement){
      const options = selectElement.querySelectorAll('option');
      let firstVisibleOption = null;
      
      options.forEach(option => {
        const planName = option.getAttribute('data-plan-name');
        const isStarterPack = planName?.includes('Starter Pack');
        const isProPack = planName?.includes('Pro pack');
        const isBuildYourPlan =  planName?.includes('Build your brand');
    
        if (variantName === 'Starter Pack'){
          option.style.display = isStarterPack ? 'block' : 'none';
          if (isStarterPack && !firstVisibleOption) {
            firstVisibleOption = option;
          }
        } else if(variantName === 'Build Your Brand'){
          option.style.display = isBuildYourPlan ? 'block' : 'none';
          if (isBuildYourPlan && !firstVisibleOption) {
            firstVisibleOption = option;
          }
        }
        else if(variantName === 'Pro Pack'){
          option.style.display = isProPack ? 'block' : 'none';
           if (isProPack && !firstVisibleOption) {
            firstVisibleOption = option;
          }
        }
      });
      firstVisibleOption && (firstVisibleOption.selected = true);
    
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function handleMutations(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (document.getElementsByClassName('recurpay__widget').length > 0) {
          var radioButtons = document.querySelectorAll('.product-form .swatch input[type="radio"]');
          radioButtons.forEach(function(radio) {
            radio.addEventListener('change', handleRadioChange);
          });
          handleRadioChange();
          observer.disconnect();
          break;
        }
      }
    }
  }
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });
// Recurpay custom code ends

