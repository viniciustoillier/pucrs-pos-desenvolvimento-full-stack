// MAP - historico do navegador
var novoMapa = new Map();
class HistoryMap {
}

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'titulo do site', url: 'url 1'});
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'titulo do site', url: 'url 2'});
novoMapa.set('11/11/2011 - 23:31 - URL', {title: 'titulo do site', url: 'url'});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado);
