'use strict';

var q = require('q');
var request = require('request');
var cheerio = require('cheerio');
var jsonfile = require('jsonfile')
var util = require('util')
// var nameLink = 'https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D1%85_%D1%87%D0%BE%D0%BB%D0%BE%D0%B2%D1%96%D1%87%D0%B8%D1%85_%D1%96%D0%BC%D0%B5%D0%BD';
var nameLink = 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5_%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0';
var names = require('../names-rus.json');
function isName(word){
  if(word === 'Нисан'){
    return true;
  }
  console.log('check ', word);
  return names.indexOf(word) !== -1;
}

function detectName(sentence){
  var words = sentence.split(' ');
  var wordMarks = new Array(words.length).map(function(){ return 0; });
  words.forEach(function(value, idx){
    if(isName(value)){
      wordMarks[idx] = 1;
    }else{
      wordMarks[idx] = 0;
    }

  });

  console.log(wordMarks);
}

function load(nameLink){
  var def = q.defer();
  request(nameLink, function (error, response, html) {
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html, {
              normalizeWhitespace: true
            });
            var names = [];
            var ulWithNames = $('#mw-content-text');
            ulWithNames.find('ul').first().remove().end().last().remove();
            ulWithNames.find('ul').find('li').each(function(i, elem) {
              names[i] = $(this).text().split(' ')[0];
            });
            def.resolve(names);
          }else{
            def.reject({error: 'unable to load names from wikipedia ...'});
          }
  });

  return def.promise;
}

var Names = {
  saveNames: function(){
    var saveNameToFileFn = function(names){
      var writeFile = q.nbind(jsonfile.writeFile);
      return writeFile('names-rus.json', names);
    };
    return load(nameLink).then(saveNameToFileFn);
  },
  isName: isName,
  detectName: detectName
};

module.exports = Names;
