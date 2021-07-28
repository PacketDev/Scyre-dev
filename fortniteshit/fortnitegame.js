module.exports = (express) => {
express.get('/content/api/pages/fortnite-game', function (req, res) {
		res.json(require('../ui/fortnite.js')).status(200).end();
	});
}