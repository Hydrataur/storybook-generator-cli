import { strings } from '@angular-devkit/core';
import { apply, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

export function storybookGenerator(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {        
		const templateSource = apply(
			url('./files'), [
				template({..._options, ...strings}),
				move("./src/app"),
			],
		);
        
		return chain([
			externalSchematic('@schematics/angular', 'component', _options),
			mergeWith(templateSource, MergeStrategy.Overwrite),
		]);
	};
}

export function createAppShell(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'app-shell', _options);
	}
}

export function createApplication(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'application', _options);
	}
}

export function createClass(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'class', _options);
	}
}

export function createDirective(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'directive', _options);
	}
}

export function createEnum(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'enum', _options);
	}
}

export function createGuard(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'guard', _options);
	}
}

export function createInterface(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'interface', _options);
	}
}

export function createLibrary(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'library', _options);
	}
}

export function createModule(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'module', _options);
	}
}

export function createPipe(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'pipe', _options);
	}
}

export function createResolver(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'resolver', _options);
	}
}

export function createService(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'service', _options);
	}
}

export function createServiceWorker(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'service-worker', _options);
	}
}

export function createWebWorker(_options: any): Rule {
	return (_tree: Tree, _context: SchematicContext) => {
		return externalSchematic('@schematics/angular', 'web-worker', _options);
	}
}
