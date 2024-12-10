function calculAsync(callback) {
    window.setTimeout(function() {
        const randInt = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        if (randInt % 5 === 0) {
            callback(-1);
        } else {
            callback(randInt);
        }
    }, 5000);
}

let totalCalculsAsyncs = 0;

/*
Bases à mettre en place :
- Au click sur "bouton-calcul", on attends la fin du comportement, 
on ajoute le résultat à "totalCalculsAsyncs", et on affiche la nouvelle
valeur dans div-total-calculs

Objectif : 
Créer une nouvelle fonction "calculPromise" qui encapsule calculAsync et retourne une promise
Quand calculPromise est rejetée, je ne met pas à jour le total et j'affiche l'erreur dans la console.
Qu'il y ai une erreur ou non, j'affiche dans la console que le comportement est terminé.
Si tout s'est bien passé, je met à jour le total (variable et html)
*/
