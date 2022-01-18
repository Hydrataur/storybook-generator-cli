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