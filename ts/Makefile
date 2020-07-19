mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(patsubst %/,%,$(dir $(mkfile_path))))

protos:
	rm -rf $(current_dir)ts/generated
	mkdir -p $(current_dir)ts/generated
	./node_modules/.bin/grpc_tools_node_protoc \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--proto_path=$(current_dir) \
		--ts_proto_out=env=node,outputEncodeMethods=false,outputJsonMethods=true,outputClientImpl=false,useOptionals=true:$(current_dir)ts/generated \
		$(current_dir)*.proto

test:
	npm test

lint:
	npm run lint

build:browser:
	npm run build:browser