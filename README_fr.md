# Luckysheet pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/luckysheet.svg)](https://dash.yunohost.org/appci/app/luckysheet) ![](https://ci-apps.yunohost.org/ci/badges/luckysheet.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/luckysheet.maintain.svg)  
[![Installer Luckysheet avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=luckysheet)

*[Read this readme in english.](./README.md)* 

> *Ce package vous permet d'installer Luckysheet rapidement et simplement sur un serveur YunoHost.  
Si vous n'avez pas YunoHost, consultez [le guide](https://yunohost.org/#/install) pour apprendre comment l'installer.*

## Vue d'ensemble
Luckysheet est une feuille de calcul en ligne, puissante, simple à configurer et complètement open source.

**Version incluse :** 2.1.12

## Captures d'écran

![](https://raw.githubusercontent.com/mengshukeji/Luckysheet/master/docs/.vuepress/public/img/LuckysheetDemo.gif)

## Démo

* [Démo officielle](https://mengshukeji.github.io/LuckysheetDemo/)

## Configuration


## Documentation

 * Documentation officielle : https://mengshukeji.github.io/LuckysheetDocs/guide/
 * Documentation YunoHost : 

## Caractéristiques spécifiques YunoHost

#### Support multi-utilisateur

* L'authentification LDAP est-elle prise en charge ? 
* L'application peut-elle être utilisée par plusieurs utilisateurs ? 

#### Architectures supportées

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/luckysheet%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/luckysheet/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/luckysheet%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/luckysheet/)

## Liens

 * Signaler un bug : https://github.com/YunoHost-Apps/luckysheet_ynh/issues
 * Dépôt de l'application principale : https://github.com/mengshukeji/Luckysheet
 * Site web YunoHost : https://yunohost.org/

---

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing --debug
ou
sudo yunohost app upgrade luckysheet -u https://github.com/YunoHost-Apps/luckysheet_ynh/tree/testing --debug
```
