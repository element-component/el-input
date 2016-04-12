clean:
	rm -rf dist

build: clean
	cooking build -c cooking.compo.js

dev:
	cooking watch -c cooking.demo.js

build-demo:
	cooking build -c cooking.demo.js

test: build

deploy-demo: build-demo
	npm deploy-demo