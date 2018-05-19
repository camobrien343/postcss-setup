# postcss-setup
Installation guide for PostCSS and test files

:roller_coaster: :roller_coaster: :roller_coaster:

### Getting Started

#### 1. Installing Node.js and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and installing Node and NPM on your system. The whole process (after you have XCode and Homebrew installed) should only take you a few minutes. 

Open the Terminal app and type


```
$ brew install node
```

#### 2. Download and in terminal type

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
