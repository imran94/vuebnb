import Vue from 'vue';
import sample from './data';

var app = new Vue({ 
	e1: '#app',
	data: {
		title: sample.title,
		address: sample.address,
		about: sample.about,
		amenities: sample.amenities,
		prices: sample.prices,
		contracted: true,
		modalOpen: false
	},
	methods: {
		escapeKeyListener(evt) {
			if (evt.keyCode === 27 && this.modalOpen) {
				this.modalOpen = false;
			}
		}
	},
	watch: {
		modalOpen() {
			var className = 'modal-open';
			if (this.modalOpen) {
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		}
	},
	headerImageStyle: {
		'background-image': 'url(/images/header.jpg)'
	},
	created() {
		document.addEventListener('keyup', this.escapeKeyListener);
	},
	destroyed() {
		document.removeEventListener('keyup', this.escapeKeyListener);
	},
});