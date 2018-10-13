# Rapid-plop

Plop generators for apps scaffolded with @simplej/rapid-cli.

## Install

```
npm install @simplej/rapid-plop
```

## Usage

Inside your `plopfile.js`:

```
const rapidPlop = require('@simplej/rapid-plop');

module.exports = plop => {
  rapidPlop(plop);

  // your generators go here
};
```

## Generators

* model - An Objection model class
* action - An action function
* route - An Koa API endpoint
* router - A Koa Router instance
* seed - A database seed function
* hook - A rapid lifecycle hook listener
* table - A database migration for creating a table
* migration - A blank database migration
