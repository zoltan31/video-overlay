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

## Ubuntu 20.04 LTS

If you choose to use a virtual machine as your development environment, you can download a ready-made VM from [this link](https://bmeedu-my.sharepoint.com/:f:/g/personal/remenyig_edu_bme_hu/EqM2hmeNDgNNnlxb6IMMf7kBadY-U7l-IO-ln2SqY4TP1w?e=bajS3I). Note that this VM can only be imported by Hyper-V Manager. The password for the _user_ profile is _admin_.

Follow the steps below if you choose to set up the development environment by yourself.

* Install the latest LTS NodeJS snap package with the following command:

  `sudo snap install node --stable --classic`

* Install Angular from the Node Package Manager with the following command:

  `sudo npm install -g @angular/cli --scripts-prepend-node-path`

* Install MongoDB by running the commands below. For additional resources refer to the [MongoDB installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

  ```
  wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  sudo systemctl start mongod
  sudo systemctl enable mongod
  ```

* Install VSCode by running the following command:

  `sudo snap install vscode --classic`

* Install git by running:

  ```
  sudo apt update
  sudo apt install git
  ```

* Clone the Video Overlay repository by running the following command:

    `git clone https://github.com/zoltan31/video-overlay.git`

* TODO: build and run the application.

## TODO: Windows 10 with Ubuntu 20.04 LTS WSL

MongoDB does not support WSL ([source](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)). This is probably due to the fact that MongoDB needs to run a service, which is currently unavailable in WSL 1 and 2.
