'use strict';

var q = require('q');
var request = require('request');
var cheerio = require('cheerio');
var link = 'http://argumentua.com/stati/azbuka-vorovskogo-mira-ukrainy-lidery-opg-ot-do-ya-v-nachale-1990-kh-prodolzhenie-b';
var first = true;

function cleanUpParagraphs(idx, paragraph){
  var $ = cheerio;
  var attrs = $(paragraph).get(0).attribs;
  var hasAttributes = Object.keys(attrs).length > 0;

  if(hasAttributes){
    return true;
  }

  var firstSpan = $(paragraph).children('span').first();
  var hasFirstSpan = firstSpan !== undefined;

  if(!hasFirstSpan){
    return true;
  }

  return false;
}

function clearContentCriminals($block){
  $block.children('div, noscript, span, ul, blockquote, iframe, frame').remove();
  $block.children('p').filter(cleanUpParagraphs).remove();
}

function tryToParseData(paragraph){
  var $ = cheerio;
  console.log('try to parse data from paragraph ', paragraph);
  var def = q.defer();
  return def.promise;
}


function load(link){
  var def = q.defer();

  var CONTENT_CLASS = '.content.clear-block';

  request(link, function (error, response, html) {
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html, {
              normalizeWhitespace: true
            });
            clearContentCriminals($(CONTENT_CLASS));
            var data = [];
            var successParseFn = function(criminal){
              data.push(criminal)
            };

            var errorParseFn = function(error){
              data.push(error);
            };

            $(CONTENT_CLASS).children('p').each(function(index, p){
              tryToParseData(p).done(successParseFn, errorParseFn);
            });
            def.resolve($(CONTENT_CLASS).html());
            // def.resolve(data);
          }else{
            def.reject({error: 'something went wrong with loading data ...'});
          }
  });
  return def.promise;
}

var ArgumentGrabber = {
  loadData: function(){
    return load(link);
  }
};



module.exports = ArgumentGrabber;
