import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Base de Données Fictive
let users = [
    {
        id:'1',
        first_name: 'Binette',
        last_name: 'Diouf',
        email: 'bd@example.com',
    },
    {
        id:'2',
        first_name: 'Bassirou',
        last_name: 'Lakh',
        email: 'bl@example.com',
    },
];

//Afficher un utilisateur via son id
router.post('/', (req, res) => {
     const user = req.body;

     users.push({ ...user, id: uuidv4() });

     res.send(`${user.first_name} vient d'être ajouter dans la base de donnée!`);
})

//Récupérer un utilisateur via son id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});

//Supprimer un utilisateur via son id
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`L'utilisateur avec l'id ${id} bien ete supprimer de la base`)
});

// Afficher la liste des utilisateurs de la base de données
router.get('/', (req, res) => {
      res.send(users);
})

//Modifier un ou plusieurs éléments d'un utilisateur en utilisant l'id
router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { first_name, last_name, email} = req.body;

    const user = users.find((user) => user.id === id)

    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;

    res.send(`utilisateur avec l' ${id} a bien été modifié`)

})

export default router