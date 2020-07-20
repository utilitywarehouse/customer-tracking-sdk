mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(patsubst %/,%,$(dir $(mkfile_path))))

protos:
	rm -rf $(current_dir)ts/src/generated
	mkdir -p $(current_dir)ts/src/generated
	./node_modules/.bin/grpc_tools_node_protoc \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--proto_path=$(current_dir) \
		--ts_proto_out=env=node,outputEncodeMethods=false,outputJsonMethods=true,outputClientImpl=false,useOptionals=true:$(current_dir)ts/src/generated \
		$(current_dir)*.proto

test:
	npm test

lint:
	npm run lint

build-browser:
	npm run build:browser

build:
	npx tsc

build-all: protos build build-browser

rm-dist:
	rm -rf dist dist-browser

all: rm-dist lint test build-all