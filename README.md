# NativeGap.js

![NPM Version](https://img.shields.io/npm/v/nativegap.svg)
<img src="https://travis-ci.org/NativeGap/nativegap.js.svg?branch=master" />

Build native apps for all major platforms with NativeGap.

#### Platforms

* Android
* iOS
* Universal Windows Platform (Windows 10)
* Chrome (Extension)

#### How it works ...

1. Create and customize your apps from the [NativeGap dashboard](https://nativegap.com).
2. Add NativeGap.js to your app in order to track currently used apps and to add some custom styling.

#### Extensions

* [Ruby on Rails](https://github.com/jonhue/nativegap-rails)

---

## Table of Contents

* [Setup](#setup)
* [Usage](#usage)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Setup

While this package assists you in creating a true cross-platform app, [NativeGap](https://nativegap.com) is still needed to create the actual native code. That's not too big of a deal though, NativeApp can be used entirely for free ([learn more](https://nativegap.com/pricing)) and it has an extensive [documentation](https://nativegap.com/guide).

Getting started with NativeGap:

1. Create a new NativeGap app.
2. Wait until the platforms processed successfully.

That's it!

## Usage

Create a new instance of the `NativeGap` class whenever a page loads:

```javascript
import NativeGap from 'nativegap';
document.addEventListener( 'ready', () => let nativegap = new NativeGap );

// Get the users platform
nativegap.platform;
```

### Options

You can pass an options hash when creating a new instance of the `NativeGap` class:

```javascript
let nativegap = new NativeGap({ path: 'nativegap' });
```

#### Global

Global options can be set by passing the options name as a hash key of the options hash.

* `android` Hash of platform specific options for your Android app. Defaults to `{ scale: 1.125 }`.
* `ios` Hash of platform specific options for your iOS app. Defaults to `{ scale: 1.125 }`.
* `windows` Hash of platform specific options for your Universal Windows Platform (Windows 10) app. Defaults to `{ scale: 1 }`.
* `chrome` Hash of platform specific options for your Chrome extension. Defaults to `{ scale: 1 }`.

#### Platform

Platform options can be set by passing the options name as a hash key of a platform hash.

* `scale` Sets the `font-size` of the HTML page to the product of `16` and the value of this option. Takes a float or an integer.

---

## To Do

[Here](https://github.com/NativeGap/nativegap.js/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/NativeGap/nativegap.js/issues/new).

---

## Contributing

We hope that you will consider contributing to NativeGap.js. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/NativeGap/nativegap.js/graphs/contributors

### Semantic Versioning

NativeGap.js follows Semantic Versioning 2.0 as defined at http://semver.org.

## License

MIT License

Copyright (c) 2018 Jonas Hübotter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
