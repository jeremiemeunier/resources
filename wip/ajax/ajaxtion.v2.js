function Ajaxtion(initalize = '') {
  var els = document.querySelectorAll('[data-ajaxtion]');
  for(var i = 0; i < els.length; i++) {
    var el = els[i];

    ajaxtion(el);
  }

  function ajaxtionAdder(tag) {
    var el = document.querySelector(tag);
    ajaxtionSender(el, null);
  }

  function ajaxtion(el) {

    el.addEventListener('click', function(e) { ajaxtionSender(el, e) })
  }

  function ajaxtionSender(el, e) {
    var ajaxtionXHR = new XMLHttpRequest();
    var data = el.getAttribute('data-ajaxtion'); // Get datas
        data = JSON.parse(data);
    var url = data.url; // Define the url to call
    var res_type = data.responseType; // Define the response type
    var res_content = data.responseContent; // Define the content of the response
    if(data.afterAction) {
      var after = data.afterAction;
      // Define the action after the success of ajaxtion call
    }

    if(!data.noPrevent) {
      if(typeof(e) === undefined && typeof(e) === null) { e.preventDefault(); }
    }

    ajaxtionXHR.onreadystatechange = function() {
      el.classList.add('ajaxtion--pending'); // Add the ajaxtion--pending class at the element

      if(ajaxtionXHR.readyState === 4) {

        if(ajaxtionXHR.status === 200) {

          // All as ready
          el.classList.remove('ajaxtion--pending');
          el.classList.add('ajaxtion--success');

          if(res_type === 'addClass') {
            if(data.reponseContainer) {
              let container = document.querySelectorAll(data.responseContainer);
                  container.classList.add(res_content);
            }
            else { el.classList.remove(res_content); }
          }
          else if(res_type === 'removeClass') {
            if(data.reponseContainer) {
              let container = document.querySelectorAll(data.responseContainer);
                  container.classList.remove(res_content);
            }
            else { el.classList.remove(res_content); }
          }
          else if(res_type === 'changeText') {
            if(data.reponseContainer) {
              let container = document.querySelectorAll(data.responseContainer);
                  container.innerText = res_content;
            }
            else { el.innerText = res_content; }
          }
          else if(res_type === 'changeHTML') {
            if(data.reponseContainer) {
              let container = document.querySelectorAll(data.responseContainer);
                  container.innerHTML = res_content;
            }
            else { el.innerHTML = res_content; }
          }
          else if(res_type === 'flashMsg') {
            var body = document.querySelector('body');
            var flash = document.createElement('div');
                flash.classList.add('flash');
                flash.classList.add('infos');
            var text = document.createElement('p');
                text.innerHTML = res_content;

                flash.appendChild(text);
                body.appendChild(flash);
          }

          if(after) {
            if(after === 'redirect') {
              var redirect = data.afterDetails;

              window.setTimeout(function() { window.location = redirect }, 1000);
            }
          }
        } else {

          // An error
          el.classList.remove('ajaxtion--pending');
          el.classList.add('ajaxtion--failure');
        }
      }
    }
    
    ajaxtionXHR.open('POST', url, true);
    if(initalize !== null || initalize !== '') { ajaxtionXHR.setRequestHeader('X-PooksUser-Key', initalize); }
    ajaxtionXHR.send();

  }
}