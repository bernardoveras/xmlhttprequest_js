axios('pessoas.json')
.then(response => loadElements(response.data));

function loadElements(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = `${pessoa.idade} anos`;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = `Salário: ${pessoa.salario} reais`;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector('.result');
  result.appendChild(table);
}