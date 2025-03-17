function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

const serializeForm = form => {
  const obj = {};
  const formData = new FormData(form);
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
};

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}

/*
 * Shopify Common JS
 *
 */
if ((typeof window.Shopify) == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function(fn, scope) {
  return function() {
    return fn.apply(scope, arguments);
  }
};

Shopify.setSelectorByValue = function(selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function(target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on'+eventName, callback);
};

Shopify.postLink = function(path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for(var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

// Recurpay custom code Begins
  function handleRadioChange() {
    debugger;
    const selectedRadio = document.querySelector('.product-form .swatch input[type="radio"]:checked');
    const variantName = selectedRadio ? selectedRadio.value : null;
    const selectElement = document.querySelector('.recurpay__frequency_select');
    if(selectElement){
      const options = selectElement.querySelectorAll('option');
      // let firstVisibleOption = null;
      
      options.forEach(option => {
        const planName = option.getAttribute('data-plan-name');
        const isStarterPack = planName?.includes('Starter Pack');
        const isProPack = planName?.includes('Pro pack');
        const isBuildYourPlan =  planName?.includes('Build your plan');
    
        if (variantName === 'Starter Pack'){
          option.style.display = isStarterPack ? 'block' : 'none';
          // if (isThreeJar && !firstVisibleOption) {
          //   firstVisibleOption = option;
          // }
        } else if(variantName === 'Build Your Brand'){
          option.style.display = isBuildYourPlan ? 'block' : 'none';
          // if (isTwoJar && !firstVisibleOption) {
          //   firstVisibleOption = option;
          // }
        }
        else if(variantName === 'Pro Pack'){
          option.style.display = isProPack ? 'block' : 'none';
        }
      });
      // firstVisibleOption && (firstVisibleOption.selected = true);
    
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



