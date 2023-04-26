const CharacterAI = require('node_characterai');
const readline = require('readline');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjQ0NTIwN2ZjN2YwZWM1NTE3OTE1YWYxIiwiYXVkIjpbImh0dHBzOi8vYXV0aDAuY2hhcmFjdGVyLmFpLyIsImh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODIyNTE5NDMsImV4cCI6MTY4NDg0Mzk0MywiYXpwIjoiZHlEM2dFMjgxTXFnSVNHN0Z1SVhZaEwyV0VrbnFaenYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.Va5ovKA1mvUJGdMmO9Mzg_RiY06z2PD101WF0EeJfILGc1lQk0c0NZU5-DyCvykDyKO-CJq5VQuWWDsM4wl3OHhJRVG5iO7CsJ1KzW1LQA8Vvr99wwWbYpZbdnO2pnNhxacihVSQUR2xMLA8ZeWyEfTHs0YQpMpsfQ4zfoubM0vUECvQNYQYzHbX8s_rbHPm3E_dKU9kQcc147wzL-UFMBYkPzAgL7xHCYnBBc4s50lKfSumU4GU0vh_6p4Zq4zjl9asXZsrh65WqyuYt1gMOKiWk3VHEVqFvTomOQzLBTdklb6eL6OPYf3eqwVjeUAJD-um2IlyNjvn5_lcCruNeQ");

    const characterId = "iV5qb8ttzD7Ytl69U_-ONcW2tW_lrFrOVKExyKJHlJM"; // Discord moderator

    const chat = await characterAI.createOrContinueChat(characterId);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('You: ');
    rl.prompt();

    rl.on('line', async (input) => {
        const response = await chat.sendAndAwaitResponse(input, true);
        console.log('Bot:', response.text);
        rl.prompt();
    });

    rl.on('close', () => {
        console.log('Exiting...');
        process.exit(0);
    });
})();
