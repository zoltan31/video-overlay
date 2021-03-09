# Newcomer's Guide

This guide will walk you through the installation and setup of the video overlay application development environment.

Here at the video overlay team we value diversity and flexibility, so this guide will cover various operating systems to which the development environment can be installed. If you have an operating system not covered in this guide, feel free to extend this document.

The development environment consists of the following software:

* Frontend: Angular
* Backend: NodeJS
* Database: MongoDB
* VCS: Git/GitHub
* CI: GitHub Pipes
* Editor: VSCode

## Windows 10

* Install the LTS version of NodeJS from the [NodeJS website](https://nodejs.org/en/). Note that the installation requires administrator privileges. After the installation you will be able to run the NodeJS shell (`node`) and the Node Package Manager (`npm`) from the Windows command-line interface.

* Install Angular from the Node Package Manager. For this you will need to open the Windows command-line interface and run the following command below.

    `npm install -g @angular/cli`

* Install MongoDB from [this link](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.4-signed.msi) provided by the MondoDB website. For the _Setup Type_ choose _Complete_. For the _Service Configuration_ check the _Install MongoD as a Service_ box and select _Run Service as Network Service User_. Agree to install MongoDB Compass for a more user friendly experience with MongoDB. Note that the installation requires administrator privileges.

* Install VSCode from the [VSCode website](https://code.visualstudio.com/). VSCode as a default editor will be assumed throughout this guide.

* Install Git from the [git website](https://git-scm.com/). When asked about choosing the default editor choose _Use Visual Studio Code as Git's default editor_. For the initial branch name override the default branch name and choose _main_. For the remaining parts of the installation choose the default options. For a more user friendly experience install the GitHub Desktop application from the [GitHub Desktop website](https://desktop.github.com/).

* Clone the Video Overlay repository by opening the Windows command-line interface and running the following command below.

    `git clone https://github.com/zoltan31/video-overlay.git`

* TODO: build and run the application

## TODO: Ubuntu 20.04 LTS

## TODO: Windows 10 with Ubuntu 20.04 LTS WSL
