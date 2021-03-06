oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ancestry-census-scraper-cli
$ ancestry-census-scraper-cli COMMAND
running command...
$ ancestry-census-scraper-cli (--version)
ancestry-census-scraper-cli/0.0.0 darwin-x64 node-v14.18.3
$ ancestry-census-scraper-cli --help [COMMAND]
USAGE
  $ ancestry-census-scraper-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ancestry-census-scraper-cli hello PERSON`](#ancestry-census-scraper-cli-hello-person)
* [`ancestry-census-scraper-cli hello world`](#ancestry-census-scraper-cli-hello-world)
* [`ancestry-census-scraper-cli help [COMMAND]`](#ancestry-census-scraper-cli-help-command)
* [`ancestry-census-scraper-cli plugins`](#ancestry-census-scraper-cli-plugins)
* [`ancestry-census-scraper-cli plugins:inspect PLUGIN...`](#ancestry-census-scraper-cli-pluginsinspect-plugin)
* [`ancestry-census-scraper-cli plugins:install PLUGIN...`](#ancestry-census-scraper-cli-pluginsinstall-plugin)
* [`ancestry-census-scraper-cli plugins:link PLUGIN`](#ancestry-census-scraper-cli-pluginslink-plugin)
* [`ancestry-census-scraper-cli plugins:uninstall PLUGIN...`](#ancestry-census-scraper-cli-pluginsuninstall-plugin)
* [`ancestry-census-scraper-cli plugins update`](#ancestry-census-scraper-cli-plugins-update)

## `ancestry-census-scraper-cli hello PERSON`

Say hello

```
USAGE
  $ ancestry-census-scraper-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/znetstar/ancestry-census-scraper-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ancestry-census-scraper-cli hello world`

Say hello world

```
USAGE
  $ ancestry-census-scraper-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ancestry-census-scraper-cli help [COMMAND]`

Display help for ancestry-census-scraper-cli.

```
USAGE
  $ ancestry-census-scraper-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ancestry-census-scraper-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `ancestry-census-scraper-cli plugins`

List installed plugins.

```
USAGE
  $ ancestry-census-scraper-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ancestry-census-scraper-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `ancestry-census-scraper-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ancestry-census-scraper-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ancestry-census-scraper-cli plugins:inspect myplugin
```

## `ancestry-census-scraper-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ancestry-census-scraper-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ancestry-census-scraper-cli plugins add

EXAMPLES
  $ ancestry-census-scraper-cli plugins:install myplugin 

  $ ancestry-census-scraper-cli plugins:install https://github.com/someuser/someplugin

  $ ancestry-census-scraper-cli plugins:install someuser/someplugin
```

## `ancestry-census-scraper-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ancestry-census-scraper-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ancestry-census-scraper-cli plugins:link myplugin
```

## `ancestry-census-scraper-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ancestry-census-scraper-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ancestry-census-scraper-cli plugins unlink
  $ ancestry-census-scraper-cli plugins remove
```

## `ancestry-census-scraper-cli plugins update`

Update installed plugins.

```
USAGE
  $ ancestry-census-scraper-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
