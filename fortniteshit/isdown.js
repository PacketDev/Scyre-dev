module.exports = (express) => {
express.get('/lightswitch/api/service/bulk/status', async (req, res) => {
	const serviceId = req.query.serviceId ? req.query.serviceId.toLowerCase() : "fortnite";
		res.json([{
			"serviceInstanceId": serviceId,
			"status": "UP",
			"message": "Project Scyre is down ",
			"maintenanceUri": null,
			"allowedActions": ["PLAY", "DOWNLOAD"],
			"banned": false
		}]);
});
}