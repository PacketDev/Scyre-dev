module.exports = (express) => {
      
express.post(
	'/fortnite/api/game/v2/chat/*/recommendGeneralChatRooms/pc',
	async (req, res) => {
		res.json({});
		res.status(200);
		res.end();
	}
);

express.get('/friends/api/v1/*/settings', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.get('/friends/api/v1/*/blocklist', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/presence/api/v1/_/*/last-online', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});
express.get('/fortnite/api/game/v2/leaderboards/cohort/*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.get(
	'/friends/api/public/list/fortnite/*/recentPlayers',
	async (req, res) => {
		res.json([]);
		res.status(200);
		res.end();
	}
);
express.get('/account/api/oauth/verify', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.post('/datarouter/api/v1/public/data', async (req, res) => {
	res.json();
	res.status(204);
	res.end();
});
}