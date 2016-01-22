all: build
	npm run live-server	

.PHONY:
build: build.js build.sfx.js

node_modules:
	npm install 

jspm_packages: node_modules
	`npm bin`/jspm install

build.sfx.js: jspm_packages
	npm run bundle-sfx

build.js: jspm_packages
	npm run bundle

clean:
	`npm bin`/jspm unbundle
	rm -rf node_modules jspm_packages build.sfx.js* build.js*
