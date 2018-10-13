const path = require('path');
const templatePath = p => path.join(__dirname, 'plop-templates', p);

module.exports = plop => {
  plop.setGenerator('model', {
		description: 'Create a model',
		prompts: [
      {
        type: 'input',
        name: 'singularName',
        message: 'Singular name'
      },
      {
        type: 'input',
        name: 'pluralName',
        message: 'Plural name'
      }
    ],
		actions: [{
			type: 'add',
			path: 'models/{{properCase singularName}}.model.js',
			templateFile: templatePath('model.hbs'),
		}],
	});
	
	plop.setGenerator('action', {
		description: 'Create an action',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'action name'
		}],
		actions: [{
			type: 'add',
			path: 'actions/{{camelCase name}}.action.js',
			templateFile: templatePath('action.hbs'),
		}],
	});

  plop.setGenerator('route', {
		description: 'Create a route',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'route name'
		},
		{
			type: 'input',
			name: 'path',
			message: 'route path'
		}],
		actions: [{
			type: 'add',
			path: 'routes/{{camelCase name}}.route.js',
			templateFile: templatePath('route.hbs'),
		}],
  });

  plop.setGenerator('router', {
		description: 'Create a router',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'router name'
		}],
		actions: [{
			type: 'add',
			path: 'routes/{{camelCase name}}.router.js',
			templateFile: templatePath('router.hbs'),
		}],
  });

  plop.setGenerator('seed', {
		description: 'Create a seed',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'seed name'
		}],
		actions: [{
			type: 'add',
			path: 'seeds/{{camelCase name}}.seed.js',
			templateFile: templatePath('seed.hbs'),
		}],
  });

  plop.setGenerator('hook', {
		description: 'Create a hook',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'hook name'
		}],
		actions: [{
			type: 'add',
			path: 'hooks/{{camelCase name}}.hook.js',
			templateFile: templatePath('hook.hbs'),
		}],
	});

  plop.setGenerator('table', {
		description: 'Create a table',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'table name'
		}],
		actions: [{
			type: 'add',
			path: 'migrations/{{> timestamp}}_create_{{snakeCase name}}_table.js',
			templateFile: templatePath('table.hbs'),
		}],
	});

  plop.setGenerator('migration', {
		description: 'Create a migration',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'migration name'
		}],
		actions: [{
			type: 'add',
			path: 'migrations/{{> timestamp}}_{{snakeCase name}}.js',
			templateFile: templatePath('migration.hbs'),
		}],
	});

	// Used to create timestamp based migration file names
	const now = new Date();
	plop.setPartial(
		'timestamp',
		now.getFullYear().toString()
			+ zeroPad(now.getMonth() + 1, 2)
			+ zeroPad(now.getDate(), 2)
			+ zeroPad(now.getHours(), 2)
			+ zeroPad(now.getMinutes(), 2)
			+ zeroPad(now.getSeconds(), 2)
	);
};

function zeroPad(number, length) {
	number = ''+number;
	while(number.length < length) number = '0' + number;
	return number;
};
