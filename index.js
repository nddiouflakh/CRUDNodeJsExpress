import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import userRoutes from './routes/users.js'

const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

//Route GET pour l'URL racine
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('BONJOUR LE MONDE');
})
// Route POST pour l'URL racine
app.post('/', (req, res) => {
     const user = req.body;
     console.log('[POST ROUTE]', user);
     res.send(`L'utilisateur ${user.name} a bien ete enregistré`);
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));