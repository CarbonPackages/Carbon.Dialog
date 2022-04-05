[![Latest Stable Version](https://poser.pugx.org/carbon/dialog/v/stable)](https://packagist.org/packages/carbon/dialog)
[![Total Downloads](https://poser.pugx.org/carbon/dialog/downloads)](https://packagist.org/packages/carbon/dialog)
[![License](https://poser.pugx.org/carbon/dialog/license)](https://packagist.org/packages/carbon/dialog)
[![GitHub forks](https://img.shields.io/github/forks/CarbonPackages/Carbon.Dialog.svg?style=social&label=Fork)](https://github.com/CarbonPackages/Carbon.Dialog/fork)
[![GitHub stars](https://img.shields.io/github/stars/CarbonPackages/Carbon.Dialog.svg?style=social&label=Stars)](https://github.com/CarbonPackages/Carbon.Dialog/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/CarbonPackages/Carbon.Dialog.svg?style=social&label=Watch)](https://github.com/CarbonPackages/Carbon.Dialog/subscription)

# Carbon.Dialog Package for Neos CMS

This package provides a tiny fusion helper for dialogues.

## [Carbon.Dialog:Dialog](Resources/Private/Fusion/Dialog.fusion)

## [Carbon.Dialog:Button](Resources/Private/Fusion/Button.fusion)

## Installation

Most of the time you have to make small adjustments to a package (e.g.
configuration in `Settings.yaml`). Because of that, it is important to add the
corresponding package to the composer from your theme package. Mostly this is
the site packages located under `Packages/Sites/`. To install it correctly go to
your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require carbon/dialog --no-update
```

The `--no-update` command prevent the automatic update of the dependencies.
After the package was added to your theme `composer.json`, go back to the root
of the Neos installation and run `composer update`. Et voilà! Your desired
package is now installed correctly.
