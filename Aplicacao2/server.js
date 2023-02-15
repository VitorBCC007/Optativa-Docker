const express = require('express');
const redis = require('redis');
const app = express();

const redisClient = redis.createClient({
    host: 'test-redis',
    port: 6379
});

app.get('/', function (req, res) {
    redisClient.get('numVisits', function (err, numVisits) {
        let numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
        res.send('Aplicacao-2: Número de visitantes é: ' + numVisitsToDisplay);
        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});

app.listen(5000, function () {
    console.log('Aplicacao-2 está escutando porta 5000');
});
