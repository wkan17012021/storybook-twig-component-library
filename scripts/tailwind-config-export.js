import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import writeYamlFile from 'write-yaml-file';
import tailwindConfig from '../tailwind.config.js';


const ThemeBreakpoints = () => {
  // Ignore any screens that have the "raw" property.
  tailwindConfig.theme.screens = _.pickBy(tailwindConfig.theme.screens, function (screen) {
    return !_.has(screen, 'raw');
  });

  const BreakpointsYmlPath = path.join(
    process.cwd(),
    'mytheme.breakpoints.yml',
  );

  const BreakpointsYmlExport = {
    'mytheme.minimum': {
      label: 'minimum',
      mediaQuery: '',
      weight: 0,
      multipliers: ['1x', '2x'],
    },
  };

  _.forEach(tailwindConfig.theme.screens, (value, key) => {
    BreakpointsYmlExport[`mytheme.${key}`] = {
      label: key,
      mediaQuery: `all and (min-width:${value})`,
      weight: 0,
      multipliers: ['1x', '2x'],
    };
  });

  writeYamlFile.sync(BreakpointsYmlPath, BreakpointsYmlExport);
}

const CssVariables = () => {
  // Destination.
  const sassOutputPath = path.join(
    process.cwd(),
    'components/_tailwind-variables.scss',
  );

  // If the file exists, delete it.
  fs.unlink(sassOutputPath, err => {
    if (err && err.code !== 'ENOENT') return console.error(err);
    fs.appendFileSync(sassOutputPath, '/** Automatically generated from tailwind.config.js — please do not edit. */');
  });

  // The Tailwind config that we want exporting, which will either be CSS or SASS variables.
  const config = {
    sass: {
      colours: {
        name: 'color',
        config: tailwindConfig.theme.extend.colors,
      },
      screens: {
        name: 'screen',
        config: tailwindConfig.theme.screens,
      }
    },
  };

  // Write CSS variables to root.
  if (config.css) {
    fs.appendFileSync(sassOutputPath, ':root {\n');

    for (let type in config.css) {
      // Write a CSS variable for each config item.
      Object.keys(config.css[type].config).forEach(key => {
        const variableName = `--${config.css[type].name}-${key}`;
        const variableValue = `${config.css[type].config[key]}`;
        const line = `${variableName.replace(
          /[./]/gim,
          '\\/',
        )}: ${variableValue};\n`;

        fs.appendFileSync(sassOutputPath, line, err => {
          if (err) return console.error(err);
        });
      });
    }

    // Close root.
    fs.appendFileSync(sassOutputPath, '}\n');
  }

  // Write SASS variables.
  if (config.sass) {
    for (let type in config.sass) {
      // Write a SASS variable for each config item.
      Object.keys(config.sass[type].config).forEach(key => {
        const variableName = `$${config.sass[type].name}-${key}`;
        const variableValue = `${config.sass[type].config[key]}`;
        const line = `${variableName.replace(
          /[./]/gim,
          '\\/',
        )}: ${variableValue};\n`;

        fs.appendFileSync(sassOutputPath, line, err => {
          if (err) return console.error(err);
        });
      });
    }
  }
}

ThemeBreakpoints();
CssVariables();
