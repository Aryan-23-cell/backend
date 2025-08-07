require('dotenv').config()
const express = require('express')

const path = require('path')

const app = express()

const port = 4000

const IceandFire = {
	"url": "https://anapioficeandfire.com/api/characters/583",
	"name": "Jon Snow",
	"gender": "Male",
	"culture": "Northmen",
	"born": "In 283 AC",
	"died": "",
	"titles": [
		"Lord Commander of the Night's Watch"
	],
	"aliases": [
		"Lord Snow",
		"Ned Stark's Bastard",
		"The Snow of Winterfell",
		"The Crow-Come-Over",
		"The 998th Lord Commander of the Night's Watch",
		"The Bastard of Winterfell",
		"The Black Bastard of the Wall",
		"Lord Crow"
	],
	"father": "",
	"mother": "",
	"spouse": "",
	"allegiances": [
		"https://anapioficeandfire.com/api/houses/362"
	],
	"books": [
		"https://anapioficeandfire.com/api/books/5"
	],
	"povBooks": [
		"https://anapioficeandfire.com/api/books/1",
		"https://anapioficeandfire.com/api/books/2",
		"https://anapioficeandfire.com/api/books/3",
		"https://anapioficeandfire.com/api/books/8"
	],
	"tvSeries": [
		"Season 1",
		"Season 2",
		"Season 3",
		"Season 4",
		"Season 5",
		"Season 6"
	],
	"playedBy": [
		"Kit Harington"
	]
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('aryandotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Aryan Suryawanshi Web Page</h1> <iframe src="https://example.com/login" title="Login Frame" allowfullscreen></iframe>')
})

app.get('/youtube', (req, res) => {
	res.sendFile('youtube.html', { root: path.join(__dirname, 'public') }, (err) => {
		if(err) {
			console.error('Error sending file:', err);
			res.status(500).send('Internal Server Error');
		}
	});
})

app.get('/p_tube', (req, res) => {
	res.sendFile('p_tube.html', { root: path.join(__dirname, 'public') }, (err) => {
		if(err) {
			console.error('Error sending file:', err);
			res.status(500).send('Internal Server Error');
		}
	});
})

app.get('/iceandfire', (req, res) => {
    res.json({IceandFire});
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})