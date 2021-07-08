# Bearded theme for jetbrains

This is an adaptation of the [one-dark theme](https://github.com/one-dark/jetbrains-one-dark-theme) templates for 
jetbrains IDE with the [bearded color palette](https://github.com/BeardedBear/bearded-theme).

## Install

Download from releases.

Install the zip from intelliJ, from the plugins section.

## Build instructions

Checkout with git submodules (bearded-theme repo is used to get the theme variations).

(Optional) Tweak the templates in `templates/`, you can use handlebar syntax to inject
colors provided by the bearded themes (ex: `{{colors.yellow}}` or `{{ui.primary}}`).

(Optional) Edit `templates/main.ts` to generate the theme variation you want (default is bearded-arc).

Run `gradlew buildPlugin` this will generate a zip in `build/distributions/`

Install it in Intellij.

## Iterate on the theme

Change the templates.

Run `gradlew generateTemplates`.

Open `resources/bearded-arc.theme.json` in intelliJ and click the preview theme button 
on the top left.

TIP: install the [Color Highlighter plugin](https://plugins.jetbrains.com/plugin/13309-color-highlighter)

[Jetbrains theme documentation](https://plugins.jetbrains.com/docs/intellij/themes-intro.html)

## In construction

This is a very early build.

Some colors might look weird.

Only bearded-arc (the theme I use) is included by default.

It is also not meant to be a perfect adaptation of the vscode theme.

## Help me tweak it

Your help is welcome. The main task right now is to identify weird editor colors and
editing `templates/one-dark.template.xml` to fix.

## TODO

- Tweak values in templates
- Check the references for variations, missing properties:
  - [HighContrast.theme.json](https://upsource.jetbrains.com/idea-ce/file/idea-ce-17812b1102973a61b8b73ee7fdbea12cf8036cd6/platform/platform-resources/src/themes/HighContrast.theme.json)
  - [highContrastScheme.xml](https://upsource.jetbrains.com/idea-ce/file/idea-ce-17812b1102973a61b8b73ee7fdbea12cf8036cd6/platform/platform-resources/src/themes/highContrastScheme.xml)
- Generate all the variations of themes
- Publish :)