const app = require('./app');

const PORT = process.env.APIPORT || 3001;

app.listen(PORT, ()=> {
    console.log(`Up and running on port ${PORT}`);
})


