# Projet 2 - Types de base

## Type array

On peut définir un tableau ne comportant que des valeurs d'un type défini.

```typescript
let colors: string[] = ["red", "blue", "green", "orange"];
let numbers: number[] = [1, 5, 7.5, 0];

// Generic array type `Array<elemType>`
let colors2: Array<string> = ["red", "blue", "green", "orange"];
let numbers: Array<number> = [1, 5, 7.5, 0];
```

On peut définir un tableau avec des valeurs de différents types.

```typescript
let values: any[] = [
  1,
  true,
  "Bonjour",
  {
    id: 285328,
    number: true,
    hobbies: ["hello"]
  }
];
```

On peut définir que différents types sont acceptés dans un tableau.

```typescript
let strNumArray: (string | number)[] = ["red", 9];
```

## Type tuple

Les types tuple, permet de définir de manière précise les types de valeurs et leurs positions que l'on veut dans un tableau.

```typescript
let x: [string, number];
x = ['Hello', 20];

// Erreur de positionnement des valeurs
x = [20, "Hello"];

// Impossible d'ajouter plus de valeurs que celles défini
x = ["Hello", 20, "Bonjour"];

// La méthode push() permet tout de même d'ajouter une valeur parmi celles définies
x.push("Bonjour");

// Il n'est pas possible d'accéder à un index qui n'est pas défini (donc le contournement avec la méthode push n'est pas recommandé)
x[2] = "Bienvenue";
```

On peut également venir attribuer un tuple à un tableau présent dans un objet.

```typescript
const member: {
  level: [string, number];
} = {
  level: ["admin", 1],
};

member.level[0] = "moderator";
```

## Type object

Le type object, nous permet de définir le type des propriétés que contient un objet.

```typescript
let car: {
  color: string;
  date: number;
  speed: number;
} = {
  color: "red",
  date: 2020,
  speed: 500,
};
```

On peut spécifier une valeur comme étant de manière générale un objet, mais TypeScript et l'IntelliSense n'auront pas accès aux propriétés de l'objet.

```typescript
let car2: object = {
  color: "red",
  date: 2020,
  speed: 500,
};

// Accès impossible
car2.color = "orange";
```
