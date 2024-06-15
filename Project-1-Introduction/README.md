# Projet 1 - Introduction

TypeScript est principalement là pour nous forcer à typer notre code JavaScript, on va pouvoir faire du type strict en JS et éviter tout problème qui peut survenir quand nous ne maîtrisons pas la connaissance du type des données que nous manipulons.

## Installation

Il nous faut node et npm pour pouvoir installer TypeScript, perso, j'utilise nvm pour gérer les différentes versions de node. Ici, on installe TypeScript de manière globale sur notre hôte.

```shell
npm install -g typescript
```

Pour connaître la version du compilateur TypeScript.

```shell
tsc -v
```

## Notre premier typage

Nous avons l'habitude de manipuler des fichier `.js` quand nous développons en JavaScript, ici nous allons manipuler des fichier `.ts`.

```typescript
const form = document.getElementById("signupForm");
// "as HTMLInputElement" défini que l'élément est de ce type et nous évite d'avoir l'erreur que ".value" n'existe pas
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;

// "number" défini que la valeur de âge doit être de ce type, l'appel de cette fonction impose que le paramètre "age" passé doit être de type number
function gift(age: number) {
  return +age + 3;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (+age.value < 18) {
    console.log("Inscription refusée !");
  } else {
    console.log(
      `Bienvenue ${firstName.value}.\nVous avez ${age.value}.\nVous aurez droit à un cadeau quand vous aurez ${gift(+age.value)} ans.`
    );
  }
});
```

## Compiler notre code

Le TypeScript n'étant pas pris en charge par les navigateurs, il faut compiler le code en JavaScript.

```shell
tsc script.ts
```

On peut entrer en mode auto-compile.

```shell
tsc script.ts -w
```

## Le type inférence

On utilise TypeScript pour pouvoir typer de manière stricte nos valeurs, mais nous pouvons aussi laisser TypeScript le définir lors de l'initialisation de la variable, on laisse TypeScript définir par inférence le typage de la valeur.

```typescript
// Any
let firstName;
firstName = true;
firstName = "red";
firstName = 10;

// String
let lastName = "Dupont";
// Number
let age = 20;
// Boolean
let isLogging = true;

// Modification possible avec des valeurs de même type
lastName = "Dura";
age = 25;
isLogging = false;

// Modification impossible, car les nouvelles valeurs ne sont pas de même type
lastName = 20;
age = true;
isLogging = "Dura";
```

## L'attribution du type

On rencontrera plus couramment le fait d'attribuer le type manuellement.

```typescript
// String
let alien: string = "Roger";
// Impossible de modifier le type de valeur
alien = true;

// Number
let width: number;
width = 20;
// Impossible de modifier le type de valeur
width = "hello";
```

## Typage des fonctions

Dans la même logique, il est possible de typer les valeurs des fonctions, avant l'utilisation de TypeScript, nous devions vérifier dynamiquement les valeurs pour s'assurer du type.

```typescript
// Sans typescript
const sum = (val1, val2) => {
  if ("number" === typeof val1 && "number" === typeof val2) {
    return val1 + val2;
  } else {
    throw new Error("Impossible d'effectuer le calcul.");
  }
};
sum("toto", 15);

// Avec typescript
const sum = (val1: number, val2: number) => {
  return val1 + val2;
};
sum(20, 15);
```

## Utilisation d'IntelliSense avec VSCode

IntelliSense est devenu un outil du quotidien dans nos EDI, l'utilisation du typage avec TypeScript nous permet d'avoir facilement accès aux méthodes utilisables sur le type de valeur. Rappel, le raccourci par défaut pour avoir accès à l'autocomplétion d'IntelliSense est (ctrl + espace).

```typescript
let pseudo: string = "Superman";
let total: number = 200;
let isLoading: boolean = false;

console.log(pseudo.length);
console.log(total.toString);
console.log(isLoading.valueOf);
```
