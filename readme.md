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

## In construction

This is a very early build.

Some colors might look weird.

Only bearded-arc (the theme I use) is included by default.

It is also not meant to be a perfect adaptation of the vscode theme.

## Help me tweak it

Your help is welcome. The main task right now is to identify weird editor colors and
editing `templates/one-dark.template.xml` to fix.