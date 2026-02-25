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
	# mesmo que o padrão out/* não copie entradas iniciadas com ponto.
	if [ -d out/.well-known ]; then \
		mkdir -p .well-known; \
		cp -R out/.well-known/* .well-known/; \
	fi
	echo "" > .nojekyll
	echo "banzai.money" >> CNAME
	git add .
	@echo "Ready to commit and push"
