# Luckysheet for YunoHost

[![Integration level](https://dash.yunohost.org/integration/hedgedoc.svg)](https://dash.yunohost.org/appci/app/hedgedoc) ![](https://ci-apps.yunohost.org/ci/badges/hedgedoc.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/hedgedoc.maintain.svg)  
[![Install Luckysheet with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=hedgedoc)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install Luckysheet quickly and simply on a YunoHost server.  
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview
Luckysheet is an online spreadsheet that is powerful, simple to configure, and completely open source.

**Shipped version:** 2.0.0

## Screenshot

![](https://raw.githubusercontent.com/mengshukeji/Luckysheet/master/docs/.vuepress/public/img/LuckysheetDemo.gif)

## Demo

* [Official demo](https://mengshukeji.github.io/LuckysheetDemo/)

## Configuration

## Documentation

 * Official documentation: https://mengshukeji.github.io/LuckysheetDocs/
 * YunoHost documentation: 

## YunoHost specific features

#### Multi-user support

* Is LDAP supported? 
* Can the app be used by multiple users? 

#### Supported architectures

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/luckysheet%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/luckysheet/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/luckysheet%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/luckysheet/)

## Links

 * Report a bug: https://github.com/YunoHost-Apps/luckysheet_ynh/issues
 * Upstream app repository: https://github.com/mengshukeji/Luckysheet
 * YunoHost website: https://yunohost.org/

---

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing --debug
or
sudo yunohost app upgrade luckysheet -u https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing --debug
```
