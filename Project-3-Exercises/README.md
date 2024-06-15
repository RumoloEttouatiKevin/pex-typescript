# Projet 3 - Exercices

## Exercice 1

- Créer une variable "names" qui n'accepte qu'un type String.
- Créer une variable "speed" qui n'accepte que les numbers et l'initialiser avec la valeur 25.
- Créer une variable "isLoading" qui n'accepte que les types booleans.
- Créer une variable "age" qui n'accepte que les types number ou string.

```typescript
let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: number | string;
```

## Exercice 2

- Créer une variable "colors" qui est un Array de strings, ensuite, effectuer un push de la valeur "red" + `console.log` de la variable "colors".
- Créer une variable "infos" qui ne peut accepter qu'un Array de strings ou numbers ou booleans. Ensuite, faire un push du string "dupont" + true + 10.

```typescript
let colors: string[] = [];
colors.push("red");
console.log(colors);

let infos: (string | number | boolean)[] = [];
infos.push("dupont", true, 40);
```

## Exercice 3

- Créer une variable "member" qui ne peut être qu'un objet.
- Via l'indicateur de valeur "object", sans définir le contenu de l'objet, ensuite avec les propriétés `firstName: "Dupont", age: 20, isLoading: true`.
- Afficher la valeur de age via console.log.

```typescript
let member: object = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(member.age); // La valeur n'est pas connue de TypeScript et n'est donc pas affichable
```

## Exercice 4

- Créer une variable "member2" qui ne peut être qu'un objet.
- Préciser le type objet via attribution (assignation) tout en indiquant les propriétés `firstName: "Dupont", age: 20, isLoading: true`.
- Afficher la valeur de age via console.log.

```typescript
let member2: {
  firstName: string;
  age: number;
  isLoading: boolean;
} = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(member2.age);
```

## Exercice 5

- Créer une variable "member3" qui ne peut être qu'un objet.
- Laisser TypeScript définir le type objet via inférence tout en indiquant les propriétés `firstName: "Dupont", age: 20, isLoading: true`.
- Afficher la valeur de age via console.log.

```typescript
let member2: {
  firstName: string;
  age: number;
  isLoading: boolean;
} = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
console.log(member2.age);
```

## Exercice 6

- Assigner une valeur "[]" à un objet ayant été défini en TypeScript en tant que tel.

```typescript
let member4: object = {
  firstName: "Dupont",
  age: 20,
  isLoading: true,
};
member4 = [];
```

## Exercice 7

- Créer une variable "infos" qui ne peut être qu'un Tuple de seulement 2 valeurs, strings et number dans cet ordre-là.

```typescript
let infos2: [string, number];
```
