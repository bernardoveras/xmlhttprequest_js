document.addEventListener('click', e => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    loadPage(element);
  }
});

async function loadPage(element) {
  try {
    const href = element.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('ERRO 404!');

    const html = await response.text();
  
    loadResult(html);
  } catch (error) {
    handleError(error);
  }
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}

function handleError(error){
  const result = document.querySelector('.result');
  result.innerHTML = error;
}