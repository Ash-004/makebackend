const CharacterAI = require('node_characterai');
const express = require('express');
const bodyParser = require('body-parser');
const characterAI = new CharacterAI();

const app = express();
const port = 3000;

(async () => {
  await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjQ0NTIwN2ZjN2YwZWM1NTE3OTE1YWYxIiwiYXVkIjpbImh0dHBzOi8vYXV0aDAuY2hhcmFjdGVyLmFpLyIsImh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODIyNTE5NDMsImV4cCI6MTY4NDg0Mzk0MywiYXpwIjoiZHlEM2dFMjgxTXFnSVNHN0Z1SVhZaEwyV0VrbnFaenYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.Va5ovKA1mvUJGdMmO9Mzg_RiY06z2PD101WF0EeJfILGc1lQk0c0NZU5-DyCvykDyKO-CJq5VQuWWDsM4wl3OHhJRVG5iO7CsJ1KzW1LQA8Vvr99wwWbYpZbdnO2pnNhxacihVSQUR2xMLA8ZeWyEfTHs0YQpMpsfQ4zfoubM0vUECvQNYQYzHbX8s_rbHPm3E_dKU9kQcc147wzL-UFMBYkPzAgL7xHCYnBBc4s50lKfSumU4GU0vh_6p4Zq4zjl9asXZsrh65WqyuYt1gMOKiWk3VHEVqFvTomOQzLBTdklb6eL6OPYf3eqwVjeUAJD-um2IlyNjvn5_lcCruNeQ");

  const characterId = "Hpk0GozjACb3mtHeAaAMb0r9pcJGbzF317I_Ux_ALOA"; // psychologist
  const chat = await characterAI.createOrContinueChat(characterId);

  app.use(bodyParser.json());
  
  app.post('/chat', async (req, res) => {
    const input = req.body.text;
    console.log('user-'+input)
    const response = await chat.sendAndAwaitResponse(input, true);
    console.log('bot-'+response.text)
    res.send({"text": response.text});
  });

  app.get('/active', async (req, res) => {
    res.status(200).send({ "active": "true" });
  });

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
})();
