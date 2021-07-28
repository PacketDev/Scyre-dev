module.exports = (express) => {
  
express.get('/fortnite/api/v2/versioncheck/*', async (req, res) => {
	res.json({
		type: 'NO_UPDATE'
	});
	res.status(200);
	res.end();
});

express.get('/fortnite/api/v2/versioncheck*', async (req, res) => {
	res.json({
		type: 'NO_UPDATE'
	});
	res.status(200);
	res.end();
});

express.get('/fortnite/api/versioncheck*', async (req, res) => {
	res.json({
		type: 'NO_UPDATE'
	});
	res.status(200);
	res.end();
});

express.get('/eulatracking/api/shared/agreements/fn*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.get('/fortnite/api/game/v2/friendcodes/*/epic', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/account/api/epicdomains/ssodomains', async (req, res) => {
	res.json({});
	res.status(204);
	res.end();
});

express.get('/account/api/public/account/*/externalAuths', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/fortnite/api/game/v2/twitch/*', async (req, res) => {
	res.json();
	res.status(200);
	res.end();
});

express.get(
	'/fortnite/api/stats/accountId/*/bulk/window/alltime',
	async (req, res) => {
		res.json([]);
		res.status(200);
		res.end();
	}
);

express.delete('/account/api/oauth/sessions/kill', async (req, res) => {
	res.status(204);
	res.end();
});

express.delete('/account/api/oauth/sessions/kill/*', async (req, res) => {
	res.status(204);
	res.end();
});
express.get('/party/api/v1/Fortnite/user/*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.post('/party/api/v1/Fortnite/user/*/pings/*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});

express.get(
	'/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient',
	async (req, res) => {
		res.json({});
		res.status(200);
		res.end();
	}
);

express.get('/catalog/api/shared/bulk/offers', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});
express.get('/waitingroom/api/waitingroom', async (req, res) => {
	res.status(204);
	res.end();
});
express.post('/fortnite/api/game/v2/grant_access/*', async (req, res) => {
	res.json({});
	res.status(204);
	res.end();
});

express.post('/api/v1/user/setting', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/socialban/api/public/v1/*', async (req, res) => {
	res.json({
		bans: [], // your banned jk
		warnings: []
	});
	res.status(200);
	res.end();
});

express.post(
	'/fortnite/api/game/v2/tryPlayOnPlatform/account/*',
	async (req, res) => {
		res.setHeader('Content-Type', 'text/plain');
		res.send(true);
		res.end();
	}
);
}