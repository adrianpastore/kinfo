table1 = document.querySelector('td');
table1.addEventListener('click', function(evento){
  var celula = evento.target;
  console.log(celula);
});
