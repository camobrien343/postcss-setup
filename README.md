# postcss-setup

Postcss will clean up your code files and minimize your css file. After postcss runs, your code file will be compressed and on one line. The second command in this tutorial "npm run perfect" will make your file readable again and alphabetize your properties.

Installation guide for PostCSS and test files

:roller_coaster: :roller_coaster: :roller_coaster:

### Getting Started

#### 1. Installing Node.js and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and installing Node and NPM on your system. The whole process (after you have XCode and Homebrew installed) should only take you a few minutes. 

### Open the Terminal and paste in
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
-This will install Homebrew on your Mac. To check the version type the following command:
```
$ brew -v
```
### Install Node via Homebrew
In the terminal type the following command to install Node:
```
$ brew install node
```
-If everything installed successfully then you can type in the following command in the terminal to check the Node and NPM version:
```
$ node -v
v7.7.2
```

#### 2. Download and in terminal type

-In Terminal cd~ (change directories) to your project's root folder
-

```
$ npm install
```

#### 2. From your home directory in terminal type

```
$ npm run styles
```
##### [Note] This will create a css file that is copied from you styles.css file and put it into a new folder called "build" inside of your css directory. 

##### [Note] This will apply PostCSS, CSSNano, autoprefixes, and other plugins

#### 2. From your home directory in terminal type

```
$ npm run perfect
```
##### [Note] This will make your new styles.min.css file readable and back to normal, but clean and without as many repeating styles while adding in vendor prefixes.
