## DomainGistry - A Domain Name Generation CLI

DomainGistry is a domain name generation package and CLI.

It's still in the early stages, so we're very interested in bug reports, contributions and the like.


#### Requirements
+ nodejs
+ commander.js
+ chalk.js


#### Installation


#### Method 1

+ Using NPM
```bash
npm install domaingistry
```


#### Method 2
+ Download repository on github
+ Change into repository
+ Type the following to install
```bash
npm install 
```

### Usage As A CLI

#### Local Usage As A CLI
```js
nodejs domaingistry.js --help
```

#### Global Usage As A CLI
```js
domaingistry --help
```

#### Generating Domain Names
+ Generate the domain name, shows you the common domain name generated, saves to a json file
```js
domaingistry generate yourdomainname
```
or

```js
domaingistry generate "yourdomainname"
```

##### Screenshot
![](images/image.png)

#### Generating Domain Names By Category 
+ [Common | Extra | New | Prefixed | Suffixed]
+ Generate the domain name per category and show it on the console

#### Get Common Domain Names[.com,.org]
```bash
domaingistry get-common "yourdomain name"

```
#### Get New Domain Names[.ai,.io]
```bash
domaingistry get-new "yourdomain name"

```

#### Get Extra Domain Names[.tv,.media]
```bash
domaingistry get-extra "yourdomain name"

```
#### Get Prefixed Domain Names[myexample.com,theexample.com]
```bash
domaingistry get-prefix "yourdomain name"

```

#### Get Suffixed Domain Names[exampleworld.com,examplify.com]
```bash
domaingistry get-suffix "yourdomain name"

```

#### Get All Domain Names
```bash
domaingistry get-all "yourdomain name"

```

### Usage As A Package
##### Example 1
```javascript

const Domain = require('domaingistry');

var domain1 = new Domain('yourdomainname','common')

console.log(domain1.generate())
```

##### Example 2
```javascript

const Domain = require('domaingistry');

var domain2 = new Domain();

domain2.name = 'example';

domain2.category = 'extra';

console.log(domain2.generate())
````

### Generating Domain Names By Categories[common,new,extra,prefix,suffix]
```javascript

console.log(domain1.getCommon());

console.log(domain1.getNew());

console.log(domain1.getExtra());

console.log(domain1.getPrefix());

console.log(domain1.getSuffix());


````


#### Saving All Results of Categories to JSON
+ This creates a file with all the various categories of domain names generated in a json file

```javascript

var Domain = require('domaingistry');

var domain = new Domain("example");

domain.to_json()

````

#### Author
+ Jesse E.Agbe(JCharis)
+ Jesus Saves@JCharisTech