module.exports = (express) => {
express.get('/purchase', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.post('/fortnite/api/feedback/Bug', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});
express.get('/fortnite/api/statsv2/account/*', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/fortnite/api/game/v2/enabled_features', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/api/v1/events/Fortnite/download/*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});
// not weird but imma just put this here
express.get('/fortnite/api/game/v2/world/info', (req, res) => res.json({}))
}