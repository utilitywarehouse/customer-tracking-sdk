mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(mkfile_path))
project_dir := $(abspath $(current_dir)/../../../)

test:
	npm test

lint:
	npm run lint