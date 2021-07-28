module.exports = (express) => {
  express.post(
	'/fortnite/api/game/v2/profile/*/client/SetAffiliateName',
	async (req, res) => {
		if (req.headers['user-agent'].includes('Mozilla')) {
			return res.status(405).json({
				errorCode: 'errors.com.epicgames.common.method_not_allowed',
				errorMessage:
					'Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.',
				numericErrorCode: 1009,
				originatingService: 'fortnite',
				intent: 'prod-live'
			});
		}
		const profile = require(`../profiles/${req.query.profileId ||
			'common_core'}.json`);
		if (profile.profileId == 'athena') {
		}
		if (
			req.body.affiliateName.toLowerCase() == 'flow' &&
			profile.profileId == 'common_core'
		) {
			profile.stats.attributes.mtx_affiliate_set_time = new Date().toISOString();
			profile.stats.attributes.mtx_affiliate = req.body.affiliateName || '';
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'common_core'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'common_core',
			profileChangesBaseRevision: profile.rvn || 1,
			profileChanges: [
				{
					changeType: 'fullProfileUpdate',
					profile: profile
				}
			],
			profileCommandRevision: profile.commandRevision || 0,
			serverTime: new Date().toISOString(),
			responseVersion: 1
		});
		res.status(200);
		res.end();
	}
);
}