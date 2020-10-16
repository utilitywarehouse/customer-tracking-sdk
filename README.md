[Check examples to get going](examples)

# Release procedure

## Releasing contract changes

Any new contract changes should be backwards compatible, unless a new major version is being released. Both the Go and JavaScript packages will need to be released.

--- __Go build__ ---

Dependencies:

* [github.com/gogo/protobuf](https://github.com/gogo/protobuf)

```shell
cd go/
make generate_types
```

--- __JavaScript build__ ---

```shell
cd js/
npm ci
make install
make build
```

--- __Publish changes__ ---

1. Commit all changes
1.  ```shell
    cd js/
    make publish # Select appropriate version, lerna will auto commit vXX.XX.XX
    ```
