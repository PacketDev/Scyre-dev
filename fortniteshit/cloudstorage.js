const path = require('path');
const crypto = require("crypto");
const fs = require('fs');

const hotfixPath = path.join(__dirname, '../fixes/');
module.exports = (express) => {
console.log("[GET] CloudStorge")
// i need to change code i think

express.get('/fortnite/api/cloudstorage/system', async (req, res) => {

		const output = [];
		const dir = await fs.promises.opendir(hotfixPath);
		for await (const dirent of dir) {
			const fileName = dirent.name;
			const filePath = hotfixPath + fileName;
			const fileData = fs.readFileSync(filePath);

			output.push({
				"uniqueFilename": fileName,
				"filename": fileName,
				"hash": crypto.createHash("sha1").update(fileData).digest("hex"),
				"hash256": crypto.createHash("sha256").update(fileData).digest("hex"),
				"length": fileData.length,
				"contentType": "text/plain",
				"uploaded": fs.statSync(filePath).mtime,
				"storageType": "S3",
				"doNotCache": false
			});
		}

		res.json(output);
	});

// turned off bc testing new fix
/*
express.get('/fortnite/api/cloudstorage/system', async (req, res) => {
	// patch 9.40
	if (req.headers['user-agent'].includes('7315705')) {
		return res.status(404).json();
	}
	// patch 9.41
	if (req.headers['user-agent'].includes('7463579')) {
		return res.status(404).json();
	}
	// patch 9.41 (2)
	if (req.headers['user-agent'].includes('7609292')) {
		return res.status(404).json();
	}
	res.json([]);
	res.status(200);
	res.end();
});
*/
express.get('/fortnite/api/cloudstorage/system/:filename', (req, res) => {
		const fileName = req.params.filename;
		const filePath = hotfixPath + fileName;

		if (fs.existsSync(filePath)) {
			res.sendFile(filePath);
			return;
		} else {
			res.status(404).end();
			return;
		}
	});
/*
	express.get("/fortnite/api/cloudstorage/system/DefaultGame.ini", (req, res) => {
		console.log("GOT DefaultGame.ini")
	});

	express.get("/fortnite/api/cloudstorage/system/DefaultEngine.ini", (req, res) => {
			console.log("GOT DefaultEngine.ini")
	});

	express.get("/fortnite/api/cloudstorage/system/DefaultRuntimeOptions.ini", (req, res) => {
	console.log("GOT DefaultRuntimeOptions.ini")
	}); */
express.get('/fortnite/api/cloudstorage/user/*', async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
});

express.get('/fortnite/api/cloudstorage/user/*/*', async (req, res) => {
	res.json([]);
	res.status(204);
	res.end();
});
express.put('/fortnite/api/cloudstorage/user/*/*', async (req, res) => {
	res.status(204);
	res.end();
});
}