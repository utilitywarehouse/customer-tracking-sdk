mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(patsubst %/,%,$(dir $(mkfile_path))))

protos:
	rm -rf $(current_dir)ts/generated
	mkdir -p $(current_dir)ts/generated
	./node_modules/.bin/grpc_tools_node_protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--proto_path=$(current_dir) \
		--js_out=import_style=commonjs,binary:$(current_dir)ts/generated \
		--ts_out=$(current_dir)ts/generated \
		$(current_dir)*.proto

