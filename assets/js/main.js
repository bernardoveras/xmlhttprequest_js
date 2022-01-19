const request = obj => {
  const xhr = new XMLHttpRequest();

  xhr.open(obj.method, obj.url, true);
  xhr.send();
  
  xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener('click', e => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    loadPage(element);
  }
});

function loadPage(element) {
  const href = element.getAttribute('href');
  console.log(href);

  request({
    method: 'GET',
    url: href,
    success(response) {
      loadResult(response);
    },
    error(errorText) {
      console.log(errorText);
    }
  });
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}