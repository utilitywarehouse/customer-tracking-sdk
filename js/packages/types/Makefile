mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(mkfile_path))
project_dir := $(abspath $(current_dir)/../../../)
proto_dir := $(abspath $(project_dir)/contract/)

protos:
	./node_modules/.bin/grpc_tools_node_protoc \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--proto_path=$(proto_dir) \
		--ts_proto_out=env=node,outputEncodeMethods=false,outputJsonMethods=true,outputClientImpl=false,useOptionals=false:$(current_dir)src \
		$(proto_dir)/*.proto

test:
	npm test

lint:
	npm run lint