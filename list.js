'use strict';

$(document).ready(function() {

const playList = [
	{
	author: "LED ZEPPELIN",
	song:"STAIRWAY TO HEAVEN"
	},{
	author: "QUEEN",
	song:"BOHEMIAN RHAPSODY"
	},{
	author: "LYNYRD SKYNYRD",
	song:"FREE BIRD"
	},{
	author: "DEEP PURPLE",
	song:"SMOKE ON THE WATER"
	},{
	author: "JIMI HENDRIX",
	song:"ALL ALONG THE WATCHTOWER"
	},{
	author: "AC/DC",
	song:"BACK IN BLACK"
	},{
	author: "QUEEN",
	song:"WE WILL ROCK YOU"
	},{
	author: "METALLICA",
	song:"ENTER SANDMAN"
	}];
	
	
	$('body').append('<ol class="tracks"></ol>')


  (function renderList(playList) {
		for(let listItem of playList) {
		let $listItem = $(`<li class="track">${listItem.author} - ${listItem.song} 
		<button class="open-modal">Прослушать</button></li>`)
		$('.tracks').append($listItem)
		let $openModalBtn = $listItem.find('.open-modal')
		$openModalBtn.click(function() { openModal(listItem.author, listItem.song, $listItem)})
		}
	}(playList))
	
  function openModal(autor, song, listItem) {
		$('body').append(`<div class="modal-window"><h1>${autor} - ${song}</h1><button class="close">Закрыть</button></div>`)
		let $closeBtn = $('.close')
		$closeBtn.click(function() {closeModal(listItem)})
		
	}

  function closeModal(listItem) {
		$('.modal-window').remove()
		listItem.append('<hr/>')
  }
  
	})

