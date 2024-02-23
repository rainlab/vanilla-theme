Vanilla Theme
==========

![Screenshot](https://raw.githubusercontent.com/rainlab/vanilla-theme/master/assets/images/theme-preview.png)

A plain starter template that contains pre-configured pages for account management, a blog and community forum. This theme is forked from the standard demo theme that ships with all copies of October.

## Requirements

Make sure you have the following plugins installed at their compatible version.

Package | Version Required
------- | -------
October CMS | 3.6 or above
`RainLab.User` | 3.0 or above
`RainLab.Forum` | 1.2 or above

To install the Blog blueprints, navigate to **Settings → Frontend Theme → Manage → Seed Content**. This will install the blueprint files to the **app/blueprints** directory.

## Installation Instructions

Run the following to install this theme:

```bash
php artisan theme:install RainLab.Vanilla
```

### Removal Instructions

To uninstall this theme, run the following command:

```bash
php artisan theme:remove RainLab.Vanilla
```

Next, delete the blueprints from **app/blueprints/rainlab-vanilla**.
