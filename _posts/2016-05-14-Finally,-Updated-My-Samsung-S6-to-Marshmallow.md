---
layout: post
title: "Finally, Updated My Samsung S6 to Android 6.0.1 Marshmallow"
date: 2016-05-14
category: Android
tags: [marshmallow, samsungS6]
---

I had been waiting for Marshmallow to come to my s6 for a long long time. This update doesn't have a lot of changes on the interface like the previous Lollipop version, which I still enjoy its new designing rules, Material Design. Actually, any updates to the Android system are exciting news for me. I love to learn those new funtionalities and use them to make life more convenient.

Other than updating the phone to the new Marshmallow firmware, I also rooted my phone, flash a custom recovery TWRP, a custom ROM, Google Apps and Xposed Framework.

There are two ways to update the firmware. The easy way is using Smart Switch, which can be downloaded from Samsung's website. The harder way is downloading the firmware and flash it to the phone using Odin.

## How to update firmware

### Update firmware using Smart Switch (SS)
0. Download SS from Samsung website
1. Open SS on the computer
2. Connect phone to computer
3. SS recognizes phone and prompts for an update
4. Follow the prompts and wait for the update to download (about 3GB) and install

### Here's the harder way
0. Install Odin and the latest Samsung USB driver
1. Launch Odin and load all the necessary files to it
2. Go to Download mode (vol down + power + home) on the phone, connect phone to computer
3. Log tab shows “added" indicate successful connection with phone
4. Press start (DON’T tick re-partition if no .pit file provided)
    - If fails, try different cables, restarting phone and computer, use a desktop computer (strong and stable current) or use Windows XP

## How to root Samsung s6 SM-G9200 (China version)
0. Go to [CF-Auto-Root Repository](https://autoroot.chainfire.eu/#odin) and download the root file for SM-G9200
1. Launch Odin and load the root file to AP slot
2. Connect phone and press start

## How to flash custom Recovery
0. Download TWRP for G9200
1. Launch Odin and load recovery file to AP slot
2. Connect phone and press start

After updating the firmware, now I can flash any marshmallow custom ROM.

## Flash custom ROM, GApps, Xposed Framework
Download custom ROM, [Open GApps](http://opengapps.org/) and [Xposed for Samsung](http://forum.xda-developers.com/xposed/unofficial-xposed-samsung-lollipop-t3180960)

Boot into recovery mode (vol up + power + home) and flash these zip files.

### Fixing force close problem
For me there is force close issue after installing GApps because these GApps don't have any permissions. Go into the settings and give these GApps all the permissions they need. This should fix force close.

Booting after flashing GApps, the setup wizard also force closes and prevents launcher to load. In order to run any apps after fixing GApps permissions, here are the steps I took from the begining:

1. Flash custom ROM first
2. Reboot and install Swiftopen (for running apps w/o a launcher) and Titanium Backup (for uninstalling setup wizard)
3. Add Titanium Backup and a launcher shortcut to Swiftopen
4. Flash gapps through a custom recovery
5. Reboot and wait
6. Setup wizard force close
7. Use swiftopen to run Titanium Backup, uninstall setup wizard
8. Go to Setting -> Application manager, give gapps all permissions
10. Swiftopen a launcher
11. No more force close!

### Fixing Google Contacts not syncing
1. Go to Settings -> Applicaiton -> Application manager, tap "More" and select "Show system apps"
2. Give Google contact sync all permissions

