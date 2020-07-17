mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(patsubst %/,%,$(dir $(mkfile_path))))

protos:
	echo $(current_dir)
	rm -rf ./ts/generated
	mkdir -p ./ts/generated
	./node_modules/.bin/grpc_tools_node_protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--proto_path=$(current_dir) \
		--js_out=import_style=commonjs,binary:./ts/generated \
		--ts_out=./ts/generated \
		$(current_dir)*.proto

