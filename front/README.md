1- npx husky install (ra raiz do projeto)
2- git add --chmod=+x .husky/pre-commit
3- git config core.hooksPath .husky
4- git config --get core.hooksPath   # deve imprimir ".husky"
5-