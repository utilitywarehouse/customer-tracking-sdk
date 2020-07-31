proto_target:=./types
proto_src_root:=../contract

types-dir:
	mkdir -p $(proto_target)

clean-types:
	rm -rf $(proto_target)

generate_types: clean-types types-dir
	@echo "Generating types"
	@protoc -I$(proto_src_root) \
		--go_out=$(gogo_type_overrides):$(proto_target)/ \
		tracking.proto

### LINTING
LINTER_VERSION ?= 1.23.6
LINTER_EXE := golangci-lint
LINTER_FOLDER := ./bin
LINTER ?= $(LINTER_FOLDER)/$(LINTER_EXE)
LINT_CONFIG_PATH := ./.golangci.yml

install-linter:
	@if [ "`$(LINTER) --version | awk '{print $$4}'`" != $(LINTER_VERSION) ]; then \
		curl -sfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(LINTER_FOLDER) v$(LINTER_VERSION); fi

.PHONY: lint
lint: install-linter
	$(LINTER) run --deadline=2m --config=$(LINT_CONFIG_PATH) ./...

