mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(patsubst %/,%,$(dir $(mkfile_path))))

protos:
	rm -rf $(current_dir)ts-browser/generated
	mkdir -p $(current_dir)ts-browser/generated
	./node_modules/.bin/pbjs -t static-module -w commonjs \
		-o $(current_dir)ts-browser/generated/tracking.js \
		$(current_dir)/tracking.proto
	./node_modules/.bin/pbts -o $(current_dir)ts-browser/generated/tracking.d.ts $(current_dir)ts-browser/generated/tracking.js
