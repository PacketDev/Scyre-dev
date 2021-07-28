module.exports = (express) => {
express.get("/account/api/public/account/:accountId", async (req, res) => {
	res.json(
	{
		"id": req.params.accountId,
		"displayName": req.params.accountId,
		"name": "Scyre",
		"email": req.params.accountId + "@scyre.com",
		"failedLoginAttempts": 0,
		"lastLogin": new Date().toISOString(),
		"numberOfDisplayNameChanges": 0,
		"ageGroup": "UNKNOWN",
		"headless": false,
		"country": "US",
		"lastName": "Server",
		"preferredLanguage": "en",
		"canUpdateDisplayName": false,
		"tfaEnabled": false,
		"emailVerified": true,
		"minorVerified": false,
		"minorExpected": false,
		"minorStatus": "UNKNOWN"
	}
)
	res.status(200);
	res.end();
	console.log("Scyre User logged in")
})
express.get('/account/api/public/account/:accountId', async (req, res) => {
	res.json({
			"accountId": req.params.accountId,
			"optOutOfPublicLeaderboards": false
		})
	res.status(200);
	res.end();
	console.log('Scyre User logged in');
});

}