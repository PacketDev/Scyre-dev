module.exports = (express) => {
express.delete('/account/api/oauth/sessions/kill', async (req, res) => {
	res.status(204);
	res.end();
});

express.delete('/account/api/oauth/sessions/kill/*', async (req, res) => {
	res.status(204);
	res.end();
  console.log("Scyre user logged out!!")
});
}
// hey has whats up lol
