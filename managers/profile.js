module.exports = (express) => {
  const fs = require('fs');
  express.post(
	'/fortnite/api/game/v2/profile/*/client/SetHomebaseBanner',
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
			'profile0'}.json`);
		if (profile.profileId == 'athena') {
		}
		if (req.query.profileId == 'profile0') {
			profile.stats.attributes.homebase.bannerIconId =
				req.body.homebaseBannerIconId || '';
			profile.stats.attributes.homebase.bannerColorId =
				req.body.homebaseBannerColorId || '';
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'profile0'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.query.profileId == 'common_public') {
			profile.stats.attributes.banner_icon =
				req.body.homebaseBannerIconId || '';
			profile.stats.attributes.banner_color =
				req.body.homebaseBannerColorId || '';
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'profile0'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error: gayyy', err);
					}
				}
			);
		}
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'profile0',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/PurchaseHomebaseNode',
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
		function makeid(length) {
			var result = '';
			var characters = '0123456789abcdefghiklmnopqrstuvwxyz';
			var charactersLength = characters.length;
			for (var i = 0; i < length; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * charactersLength)
				);
			}
			return result;
		}
		const profile = require(`../profiles/${req.query.profileId ||
			'profile0'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.items[
			makeid(5) + '-' + makeid(4) + '-' + makeid(6) + '-' + makeid(4)
		] = {
			templateId: `HomebaseNode:${req.body.nodeId || 'no'}`,
			attributes: { item_seen: true },
			quantity: 1
		};
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'profile0'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'profile0',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/SetPinnedQuests',
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
			'campaign'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.stats.attributes.client_settings.pinnedQuestInstances =
			req.body.pinnedQuestIds || [];
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'campaign'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'campaign',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/ClaimLoginReward',
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
			'campaign'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.stats.attributes.daily_rewards.nextDefaultReward += 1;
		profile.stats.attributes.daily_rewards.totalDaysLoggedIn += 1;
		profile.stats.attributes.daily_rewards.lastClaimDate = new Date().toISOString();
		profile.stats.attributes.daily_rewards.additionalSchedules.founderspackdailyrewardtoken.rewardsClaimed += 1;
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'campaign'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'campaign',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/AssignTeamPerkToLoadout',
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
			'campaign'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.items[req.body.loadoutId].attributes.team_perk =
			req.body.teamPerkId || '';
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'campaign'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'campaign',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/AssignGadgetToLoadout',
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
			'campaign'}.json`);
		if (profile.profileId == 'athena') {
		}
		if (req.body.slotIndex == 0) {
			profile.items[req.body.loadoutId].attributes.gadgets = [
				{ gadget: req.body.gadgetId || '', slot_index: 0 },
				profile.items[req.body.loadoutId].attributes.gadgets[1]
			];
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'campaign'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.slotIndex == 1) {
			profile.items[req.body.loadoutId].attributes.gadgets = [
				profile.items[req.body.loadoutId].attributes.gadgets[0],
				{ gadget: req.body.gadgetId || '', slot_index: 1 }
			];
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'campaign'}.json`,
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
			profileId: req.query.profileId || 'campaign',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/AssignWorkerToSquad',
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
			'profile0'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.items[req.body.characterId].attributes.squad_id =
			req.body.squadId || '';
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'profile0'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'profile0',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/ClaimQuestReward',
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
			'campaign'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.items[req.body.questId].attributes.quest_state = 'Claimed';
		profile.items[
			req.body.questId
		].attributes.last_state_change_time = new Date().toISOString();
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'campaign'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'campaign',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/EquipBattleRoyaleCustomization',
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
		if (req.query.profileId != 'athena') {
			return res.status(403).json({
				errorCode: 'errors.com.epicgames.common.wrong_profile',
				errorMessage: 'Sorry, this endpoint requires the athena profile.',
				numericErrorCode: 1009,
				originatingService: 'fortnite',
				intent: 'prod-live'
			});
		}
		const profile = require(`../profiles/${req.query.profileId ||
			'athena'}.json`);
		if (profile.profileId == 'athena') {
		}
		if (req.body.slotName == 'Character') {
			profile.stats.attributes.favorite_character = req.body.itemToSlot || '';
			console.log(`Character changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenacharacter:cid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Test');
					}
				}
			);
		}
		if (req.body.slotName == 'Backpack') {
			profile.stats.attributes.favorite_backpack = req.body.itemToSlot || '';
			console.log(`Backpack changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenabackpack:bid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Backpack error');
					}
				}
			);
		}
		if (req.body.slotName == 'Pickaxe') {
			profile.stats.attributes.favorite_pickaxe = req.body.itemToSlot || '';
			console.log(`Pickaxe changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenapickaxe:pickaxe_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Pickaxe Error');
					}
				}
			);
		}
		if (req.body.slotName == 'Glider') {
			profile.stats.attributes.favorite_glider = req.body.itemToSlot || '';
			console.log(`Glider changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaglider:glider_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Glider errror');
					}
				}
			);
		}
		if (req.body.slotName == 'SkyDiveContrail') {
			profile.stats.attributes.favorite_skydivecontrail =
				req.body.itemToSlot || '';
			console.log(`SkyDiveContrail changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() !=
						'athenaskydivecontrail:trails_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Sky Dive Contrail error');
					}
				}
			);
		}
		if (req.body.slotName == 'MusicPack') {
			profile.stats.attributes.favorite_musicpack = req.body.itemToSlot || '';
			console.log(`MusicPack changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() !=
						'athenamusicpack:musicpack_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('music error');
					}
				}
			);
		}
		if (req.body.slotName == 'LoadingScreen') {
			profile.stats.attributes.favorite_loadingscreen =
				req.body.itemToSlot || '';
			console.log(`LoadingScreen changed to: ${req.body.itemToSlot || ''}`);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaloadingscreen:lsid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Loading Screen Error');
					}
				}
			);
		}
		if (req.body.slotName == 'Dance') {
			var indexwithinslot = req.body.indexWithinSlot || 0;

			if (indexwithinslot == 0) {
				profile.stats.attributes.favorite_dance[0] = req.body.itemToSlot || '';
			}
			if (indexwithinslot == 1) {
				profile.stats.attributes.favorite_dance[1] = req.body.itemToSlot || '';
			}
			if (indexwithinslot == 2) {
				profile.stats.attributes.favorite_dance[2] = req.body.itemToSlot || '';
			}
			if (indexwithinslot == 3) {
				profile.stats.attributes.favorite_dance[3] = req.body.itemToSlot || '';
			}
			if (indexwithinslot == 4) {
				profile.stats.attributes.favorite_dance[4] = req.body.itemToSlot || '';
			}
			if (indexwithinslot == 5) {
				profile.stats.attributes.favorite_dance[5] = req.body.itemToSlot || '';
			}

			console.log(
				`Dance slot ${indexwithinslot} changed to: ${req.body.itemToSlot || ''}`
			);
			if (req.body.variantUpdates) {
				if (req.body.itemToSlot != '') {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Dance Error');
					}
				}
			);
		}
		if (req.body.slotName == 'ItemWrap') {
			var indexwithinslot = req.body.indexWithinSlot || 0;

			if (indexwithinslot == 0) {
				profile.stats.attributes.favorite_itemwraps[0] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 1) {
				profile.stats.attributes.favorite_itemwraps[1] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 2) {
				profile.stats.attributes.favorite_itemwraps[2] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 3) {
				profile.stats.attributes.favorite_itemwraps[3] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 4) {
				profile.stats.attributes.favorite_itemwraps[4] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 5) {
				profile.stats.attributes.favorite_itemwraps[5] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 6) {
				profile.stats.attributes.favorite_itemwraps[6] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == -1) {
				profile.stats.attributes.favorite_itemwraps[0] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[1] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[2] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[3] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[4] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[5] =
					req.body.itemToSlot || '';
				profile.stats.attributes.favorite_itemwraps[6] =
					req.body.itemToSlot || '';
			}

			var poggers = `ItemWrap slot ${indexwithinslot} changed to: ${req.body
				.itemToSlot || ''}`;
			if (indexwithinslot == -1) {
				poggers = `All ItemWrap slots changed to: ${req.body.itemToSlot || ''}`;
			}
			console.log(poggers);
			if (req.body.variantUpdates) {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaitemwrap:wrap_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('Wrap error Yum lol');
					}
				}
			);
		}
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'athena',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/SetBattleRoyaleBanner',
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
		if (req.query.profileId != 'athena') {
			return res.status(403).json({
				errorCode: 'errors.com.epicgames.common.wrong_profile',
				errorMessage: 'Sorry, this endpoint requires the athena profile.',
				numericErrorCode: 1009,
				originatingService: 'fortnite',
				intent: 'prod-live'
			});
		}
		const profile = require(`./profiles/${req.query.profileId ||
			'athena'}.json`);
		if (profile.profileId == 'athena') {
		}
		profile.stats.attributes.banner_icon =
			req.body.homebaseBannerIconId || 'BRSeason01';
		profile.stats.attributes.banner_color =
			req.body.homebaseBannerColorId || 'DefaultColor1';
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(
			`../profiles/${req.query.profileId || 'athena'}.json`,
			JSON.stringify(profile, null, 2),
			function(err) {
				if (err) {
					console.log('error:', err);
				}
			}
		);
		res.json({
			profileRevision: profile.rvn || 1,
			profileId: req.query.profileId || 'athena',
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

express.post(
	'/fortnite/api/game/v2/profile/*/client/SetCosmeticLockerSlot',
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
			'athena'}.json`);
		if (profile.profileId == 'athena') {
		}
		if (req.body.category == 'Character') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.Character.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenacharacter:cid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'Backpack') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.Backpack.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenabackpack:bid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'Pickaxe') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.Pickaxe.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenapickaxe:pickaxe_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'Glider') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.Glider.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaglider:glider_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'SkyDiveContrail') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.SkyDiveContrail.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() !=
						'athenaskydivecontrail:trails_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'MusicPack') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.MusicPack.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() !=
						'athenamusicpack:musicpack_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'LoadingScreen') {
			profile.items[
				req.body.lockerItem
			].attributes.locker_slots_data.slots.LoadingScreen.items = [
				req.body.itemToSlot || ''
			];
			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaloadingscreen:lsid_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'Dance') {
			var indexwithinslot = req.body.slotIndex || 0;

			if (indexwithinslot == 0) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[0] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 1) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[1] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 2) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[2] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 3) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[3] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 4) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[4] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 5) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.Dance.items[5] =
					req.body.itemToSlot || '';
			}

			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (req.body.itemToSlot != '') {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}

			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
				JSON.stringify(profile, null, 2),
				function(err) {
					if (err) {
						console.log('error:', err);
					}
				}
			);
		}
		if (req.body.category == 'ItemWrap') {
			var indexwithinslot = req.body.slotIndex || 0;

			if (indexwithinslot == 0) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[0] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 1) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[1] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 2) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[2] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 3) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[3] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 4) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[4] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 5) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[5] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == 6) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[6] =
					req.body.itemToSlot || '';
			}
			if (indexwithinslot == -1) {
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[0] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[1] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[2] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[3] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[4] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[5] =
					req.body.itemToSlot || '';
				profile.items[
					req.body.lockerItem
				].attributes.locker_slots_data.slots.ItemWrap.items[6] =
					req.body.itemToSlot || '';
			}

			if (req.body.variantUpdates && profile.profileId != 'campaign') {
				if (
					req.body.itemToSlot != '' &&
					req.body.itemToSlot.toLowerCase() != 'athenaitemwrap:wrap_random'
				) {
					profile.items[req.body.itemToSlot].attributes.variants =
						req.body.variantUpdates || [];
				}
			}

			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(
				`../profiles/${req.query.profileId || 'athena'}.json`,
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
			profileId: req.query.profileId || 'athena',
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

express.post('/fortnite/api/game/v2/profile/*/client/*', async (req, res) => {
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
	const profile = require(`../profiles/${req.query.profileId || 'athena'}.json`);
	if (profile.profileId == 'athena') {
	}
	if (req.headers['user-agent'].includes('3724489')) {
		if (req.query.profileId == 'profile0') {
			return res.status(200).json({});
		}
	}
	res.json({
		profileRevision: profile.rvn || 1,
		profileId: req.query.profileId || 'athena',
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
	});
}