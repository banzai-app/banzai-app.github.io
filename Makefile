install:
	npm install

build:
	npm run build

dev:
	npm run dev

publish: build
	git checkout public --
	git rm $$(git ls-files -- ':!.gitignore')
	cp -R out/* ./
	# Garante que arquivos sensíveis em .well-known sejam publicados
	# mesmo que o Next não copie pastas iniciadas com ponto.
	if [ -d public/.well-known ]; then \
		mkdir -p .well-known; \
		cp -R public/.well-known/* .well-known/; \
	fi
	echo "" > .nojekyll
	echo "banzai.money" >> CNAME
	git add .
	@echo "Ready to commit and push"
