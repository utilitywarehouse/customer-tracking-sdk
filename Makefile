.PHONY: build
build:
	make generate_types -C go
	make install -C js
	make protos -C js/packages/types
	make build -C js
