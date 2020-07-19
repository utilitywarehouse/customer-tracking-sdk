/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Account = (function() {

    /**
     * Properties of an Account.
     * @exports IAccount
     * @interface IAccount
     * @property {string|null} [id] Account id
     * @property {string|null} [number] Account number
     */

    /**
     * Constructs a new Account.
     * @exports Account
     * @classdesc Represents an Account.
     * @implements IAccount
     * @constructor
     * @param {IAccount=} [properties] Properties to set
     */
    function Account(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Account id.
     * @member {string} id
     * @memberof Account
     * @instance
     */
    Account.prototype.id = "";

    /**
     * Account number.
     * @member {string} number
     * @memberof Account
     * @instance
     */
    Account.prototype.number = "";

    /**
     * Creates a new Account instance using the specified properties.
     * @function create
     * @memberof Account
     * @static
     * @param {IAccount=} [properties] Properties to set
     * @returns {Account} Account instance
     */
    Account.create = function create(properties) {
        return new Account(properties);
    };

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @function encode
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.number);
        return writer;
    };

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @function decode
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.number = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Account message.
     * @function verify
     * @memberof Account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.number != null && message.hasOwnProperty("number"))
            if (!$util.isString(message.number))
                return "number: string expected";
        return null;
    };

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Account} Account
     */
    Account.fromObject = function fromObject(object) {
        if (object instanceof $root.Account)
            return object;
        var message = new $root.Account();
        if (object.id != null)
            message.id = String(object.id);
        if (object.number != null)
            message.number = String(object.number);
        return message;
    };

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Account
     * @static
     * @param {Account} message Account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Account.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.number = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.number != null && message.hasOwnProperty("number"))
            object.number = message.number;
        return object;
    };

    /**
     * Converts this Account to JSON.
     * @function toJSON
     * @memberof Account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Account;
})();

$root.Application = (function() {

    /**
     * Properties of an Application.
     * @exports IApplication
     * @interface IApplication
     * @property {string|null} [id] Application id
     */

    /**
     * Constructs a new Application.
     * @exports Application
     * @classdesc Represents an Application.
     * @implements IApplication
     * @constructor
     * @param {IApplication=} [properties] Properties to set
     */
    function Application(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Application id.
     * @member {string} id
     * @memberof Application
     * @instance
     */
    Application.prototype.id = "";

    /**
     * Creates a new Application instance using the specified properties.
     * @function create
     * @memberof Application
     * @static
     * @param {IApplication=} [properties] Properties to set
     * @returns {Application} Application instance
     */
    Application.create = function create(properties) {
        return new Application(properties);
    };

    /**
     * Encodes the specified Application message. Does not implicitly {@link Application.verify|verify} messages.
     * @function encode
     * @memberof Application
     * @static
     * @param {IApplication} message Application message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Application.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified Application message, length delimited. Does not implicitly {@link Application.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Application
     * @static
     * @param {IApplication} message Application message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Application.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Application message from the specified reader or buffer.
     * @function decode
     * @memberof Application
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Application} Application
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Application.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Application();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Application message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Application
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Application} Application
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Application.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Application message.
     * @function verify
     * @memberof Application
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Application.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates an Application message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Application
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Application} Application
     */
    Application.fromObject = function fromObject(object) {
        if (object instanceof $root.Application)
            return object;
        var message = new $root.Application();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from an Application message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Application
     * @static
     * @param {Application} message Application
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Application.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this Application to JSON.
     * @function toJSON
     * @memberof Application
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Application.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Application;
})();

$root.Person = (function() {

    /**
     * Properties of a Person.
     * @exports IPerson
     * @interface IPerson
     */

    /**
     * Constructs a new Person.
     * @exports Person
     * @classdesc Represents a Person.
     * @implements IPerson
     * @constructor
     * @param {IPerson=} [properties] Properties to set
     */
    function Person(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Person instance using the specified properties.
     * @function create
     * @memberof Person
     * @static
     * @param {IPerson=} [properties] Properties to set
     * @returns {Person} Person instance
     */
    Person.create = function create(properties) {
        return new Person(properties);
    };

    /**
     * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
     * @function encode
     * @memberof Person
     * @static
     * @param {IPerson} message Person message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Person.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Person message, length delimited. Does not implicitly {@link Person.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Person
     * @static
     * @param {IPerson} message Person message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Person.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Person message from the specified reader or buffer.
     * @function decode
     * @memberof Person
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Person} Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Person.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Person();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Person message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Person
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Person} Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Person.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Person message.
     * @function verify
     * @memberof Person
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Person.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Person message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Person
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Person} Person
     */
    Person.fromObject = function fromObject(object) {
        if (object instanceof $root.Person)
            return object;
        return new $root.Person();
    };

    /**
     * Creates a plain object from a Person message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Person
     * @static
     * @param {Person} message Person
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Person.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Person to JSON.
     * @function toJSON
     * @memberof Person
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Person.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Person;
})();

$root.StageEvent = (function() {

    /**
     * Properties of a StageEvent.
     * @exports IStageEvent
     * @interface IStageEvent
     * @property {IAccount|null} [account] StageEvent account
     * @property {IApplication|null} [application] StageEvent application
     * @property {Subject|null} [subject] StageEvent subject
     * @property {Intent|null} [intent] StageEvent intent
     * @property {Stage|null} [stage] StageEvent stage
     * @property {Object.<string,string>|null} [attributes] StageEvent attributes
     */

    /**
     * Constructs a new StageEvent.
     * @exports StageEvent
     * @classdesc Represents a StageEvent.
     * @implements IStageEvent
     * @constructor
     * @param {IStageEvent=} [properties] Properties to set
     */
    function StageEvent(properties) {
        this.attributes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StageEvent account.
     * @member {IAccount|null|undefined} account
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.account = null;

    /**
     * StageEvent application.
     * @member {IApplication|null|undefined} application
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.application = null;

    /**
     * StageEvent subject.
     * @member {Subject} subject
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.subject = 0;

    /**
     * StageEvent intent.
     * @member {Intent} intent
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.intent = 0;

    /**
     * StageEvent stage.
     * @member {Stage} stage
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.stage = 0;

    /**
     * StageEvent attributes.
     * @member {Object.<string,string>} attributes
     * @memberof StageEvent
     * @instance
     */
    StageEvent.prototype.attributes = $util.emptyObject;

    /**
     * Creates a new StageEvent instance using the specified properties.
     * @function create
     * @memberof StageEvent
     * @static
     * @param {IStageEvent=} [properties] Properties to set
     * @returns {StageEvent} StageEvent instance
     */
    StageEvent.create = function create(properties) {
        return new StageEvent(properties);
    };

    /**
     * Encodes the specified StageEvent message. Does not implicitly {@link StageEvent.verify|verify} messages.
     * @function encode
     * @memberof StageEvent
     * @static
     * @param {IStageEvent} message StageEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StageEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            $root.Account.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.application != null && Object.hasOwnProperty.call(message, "application"))
            $root.Application.encode(message.application, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.subject);
        if (message.intent != null && Object.hasOwnProperty.call(message, "intent"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.intent);
        if (message.stage != null && Object.hasOwnProperty.call(message, "stage"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.stage);
        if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attributes[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StageEvent message, length delimited. Does not implicitly {@link StageEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StageEvent
     * @static
     * @param {IStageEvent} message StageEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StageEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StageEvent message from the specified reader or buffer.
     * @function decode
     * @memberof StageEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StageEvent} StageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StageEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StageEvent(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = $root.Account.decode(reader, reader.uint32());
                break;
            case 2:
                message.application = $root.Application.decode(reader, reader.uint32());
                break;
            case 3:
                message.subject = reader.int32();
                break;
            case 4:
                message.intent = reader.int32();
                break;
            case 5:
                message.stage = reader.int32();
                break;
            case 6:
                if (message.attributes === $util.emptyObject)
                    message.attributes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.attributes[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StageEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StageEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StageEvent} StageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StageEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StageEvent message.
     * @function verify
     * @memberof StageEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StageEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account")) {
            var error = $root.Account.verify(message.account);
            if (error)
                return "account." + error;
        }
        if (message.application != null && message.hasOwnProperty("application")) {
            var error = $root.Application.verify(message.application);
            if (error)
                return "application." + error;
        }
        if (message.subject != null && message.hasOwnProperty("subject"))
            switch (message.subject) {
            default:
                return "subject: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.intent != null && message.hasOwnProperty("intent"))
            switch (message.intent) {
            default:
                return "intent: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.stage != null && message.hasOwnProperty("stage"))
            switch (message.stage) {
            default:
                return "stage: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.attributes != null && message.hasOwnProperty("attributes")) {
            if (!$util.isObject(message.attributes))
                return "attributes: object expected";
            var key = Object.keys(message.attributes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.attributes[key[i]]))
                    return "attributes: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a StageEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StageEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StageEvent} StageEvent
     */
    StageEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.StageEvent)
            return object;
        var message = new $root.StageEvent();
        if (object.account != null) {
            if (typeof object.account !== "object")
                throw TypeError(".StageEvent.account: object expected");
            message.account = $root.Account.fromObject(object.account);
        }
        if (object.application != null) {
            if (typeof object.application !== "object")
                throw TypeError(".StageEvent.application: object expected");
            message.application = $root.Application.fromObject(object.application);
        }
        switch (object.subject) {
        case "SUBJECT_NONE":
        case 0:
            message.subject = 0;
            break;
        case "SUBJECT_METER_READING":
        case 1:
            message.subject = 1;
            break;
        }
        switch (object.intent) {
        case "INTENT_NONE":
        case 0:
            message.intent = 0;
            break;
        case "INTENT_METER_READING_SUBMIT":
        case 1:
            message.intent = 1;
            break;
        }
        switch (object.stage) {
        case "STAGE_NONE":
        case 0:
            message.stage = 0;
            break;
        case "STAGE_SUBMITTED":
        case 1:
            message.stage = 1;
            break;
        case "STAGE_RECEIVED_REQUEST_FOR_AMEND":
        case 2:
            message.stage = 2;
            break;
        case "STAGE_COMPLETED":
        case 3:
            message.stage = 3;
            break;
        case "STAGE_REJECTED":
        case 4:
            message.stage = 4;
            break;
        case "STAGE_ENTERED":
        case 5:
            message.stage = 5;
            break;
        case "STAGE_STARTED":
        case 6:
            message.stage = 6;
            break;
        case "STAGE_FAILED":
        case 7:
            message.stage = 7;
            break;
        }
        if (object.attributes) {
            if (typeof object.attributes !== "object")
                throw TypeError(".StageEvent.attributes: object expected");
            message.attributes = {};
            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i)
                message.attributes[keys[i]] = String(object.attributes[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a StageEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StageEvent
     * @static
     * @param {StageEvent} message StageEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StageEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.attributes = {};
        if (options.defaults) {
            object.account = null;
            object.application = null;
            object.subject = options.enums === String ? "SUBJECT_NONE" : 0;
            object.intent = options.enums === String ? "INTENT_NONE" : 0;
            object.stage = options.enums === String ? "STAGE_NONE" : 0;
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = $root.Account.toObject(message.account, options);
        if (message.application != null && message.hasOwnProperty("application"))
            object.application = $root.Application.toObject(message.application, options);
        if (message.subject != null && message.hasOwnProperty("subject"))
            object.subject = options.enums === String ? $root.Subject[message.subject] : message.subject;
        if (message.intent != null && message.hasOwnProperty("intent"))
            object.intent = options.enums === String ? $root.Intent[message.intent] : message.intent;
        if (message.stage != null && message.hasOwnProperty("stage"))
            object.stage = options.enums === String ? $root.Stage[message.stage] : message.stage;
        var keys2;
        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
            object.attributes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.attributes[keys2[j]] = message.attributes[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this StageEvent to JSON.
     * @function toJSON
     * @memberof StageEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StageEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StageEvent;
})();

$root.InteractionEvent = (function() {

    /**
     * Properties of an InteractionEvent.
     * @exports IInteractionEvent
     * @interface IInteractionEvent
     * @property {IAccount|null} [account] InteractionEvent account
     * @property {IApplication|null} [application] InteractionEvent application
     * @property {Subject|null} [subject] InteractionEvent subject
     * @property {Intent|null} [intent] InteractionEvent intent
     * @property {Interaction|null} [interaction] InteractionEvent interaction
     * @property {InteractionChannel|null} [channel] InteractionEvent channel
     * @property {Object.<string,string>|null} [attributes] InteractionEvent attributes
     */

    /**
     * Constructs a new InteractionEvent.
     * @exports InteractionEvent
     * @classdesc Represents an InteractionEvent.
     * @implements IInteractionEvent
     * @constructor
     * @param {IInteractionEvent=} [properties] Properties to set
     */
    function InteractionEvent(properties) {
        this.attributes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InteractionEvent account.
     * @member {IAccount|null|undefined} account
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.account = null;

    /**
     * InteractionEvent application.
     * @member {IApplication|null|undefined} application
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.application = null;

    /**
     * InteractionEvent subject.
     * @member {Subject} subject
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.subject = 0;

    /**
     * InteractionEvent intent.
     * @member {Intent} intent
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.intent = 0;

    /**
     * InteractionEvent interaction.
     * @member {Interaction} interaction
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.interaction = 0;

    /**
     * InteractionEvent channel.
     * @member {InteractionChannel} channel
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.channel = 0;

    /**
     * InteractionEvent attributes.
     * @member {Object.<string,string>} attributes
     * @memberof InteractionEvent
     * @instance
     */
    InteractionEvent.prototype.attributes = $util.emptyObject;

    /**
     * Creates a new InteractionEvent instance using the specified properties.
     * @function create
     * @memberof InteractionEvent
     * @static
     * @param {IInteractionEvent=} [properties] Properties to set
     * @returns {InteractionEvent} InteractionEvent instance
     */
    InteractionEvent.create = function create(properties) {
        return new InteractionEvent(properties);
    };

    /**
     * Encodes the specified InteractionEvent message. Does not implicitly {@link InteractionEvent.verify|verify} messages.
     * @function encode
     * @memberof InteractionEvent
     * @static
     * @param {IInteractionEvent} message InteractionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InteractionEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            $root.Account.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.application != null && Object.hasOwnProperty.call(message, "application"))
            $root.Application.encode(message.application, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.subject);
        if (message.intent != null && Object.hasOwnProperty.call(message, "intent"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.intent);
        if (message.interaction != null && Object.hasOwnProperty.call(message, "interaction"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.interaction);
        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.channel);
        if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attributes[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified InteractionEvent message, length delimited. Does not implicitly {@link InteractionEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InteractionEvent
     * @static
     * @param {IInteractionEvent} message InteractionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InteractionEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InteractionEvent message from the specified reader or buffer.
     * @function decode
     * @memberof InteractionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InteractionEvent} InteractionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InteractionEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InteractionEvent(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = $root.Account.decode(reader, reader.uint32());
                break;
            case 2:
                message.application = $root.Application.decode(reader, reader.uint32());
                break;
            case 3:
                message.subject = reader.int32();
                break;
            case 4:
                message.intent = reader.int32();
                break;
            case 5:
                message.interaction = reader.int32();
                break;
            case 6:
                message.channel = reader.int32();
                break;
            case 7:
                if (message.attributes === $util.emptyObject)
                    message.attributes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.attributes[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InteractionEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InteractionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InteractionEvent} InteractionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InteractionEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InteractionEvent message.
     * @function verify
     * @memberof InteractionEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InteractionEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account")) {
            var error = $root.Account.verify(message.account);
            if (error)
                return "account." + error;
        }
        if (message.application != null && message.hasOwnProperty("application")) {
            var error = $root.Application.verify(message.application);
            if (error)
                return "application." + error;
        }
        if (message.subject != null && message.hasOwnProperty("subject"))
            switch (message.subject) {
            default:
                return "subject: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.intent != null && message.hasOwnProperty("intent"))
            switch (message.intent) {
            default:
                return "intent: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.interaction != null && message.hasOwnProperty("interaction"))
            switch (message.interaction) {
            default:
                return "interaction: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.channel != null && message.hasOwnProperty("channel"))
            switch (message.channel) {
            default:
                return "channel: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.attributes != null && message.hasOwnProperty("attributes")) {
            if (!$util.isObject(message.attributes))
                return "attributes: object expected";
            var key = Object.keys(message.attributes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.attributes[key[i]]))
                    return "attributes: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates an InteractionEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InteractionEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InteractionEvent} InteractionEvent
     */
    InteractionEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.InteractionEvent)
            return object;
        var message = new $root.InteractionEvent();
        if (object.account != null) {
            if (typeof object.account !== "object")
                throw TypeError(".InteractionEvent.account: object expected");
            message.account = $root.Account.fromObject(object.account);
        }
        if (object.application != null) {
            if (typeof object.application !== "object")
                throw TypeError(".InteractionEvent.application: object expected");
            message.application = $root.Application.fromObject(object.application);
        }
        switch (object.subject) {
        case "SUBJECT_NONE":
        case 0:
            message.subject = 0;
            break;
        case "SUBJECT_METER_READING":
        case 1:
            message.subject = 1;
            break;
        }
        switch (object.intent) {
        case "INTENT_NONE":
        case 0:
            message.intent = 0;
            break;
        case "INTENT_METER_READING_SUBMIT":
        case 1:
            message.intent = 1;
            break;
        }
        switch (object.interaction) {
        case "INTERACTION_NONE":
        case 0:
            message.interaction = 0;
            break;
        case "INTERACTION_CLICKED":
        case 1:
            message.interaction = 1;
            break;
        case "INTERACTION_VIEWED":
        case 2:
            message.interaction = 2;
            break;
        }
        switch (object.channel) {
        case "INTERACTION_CHANNEL_NONE":
        case 0:
            message.channel = 0;
            break;
        case "INTERACTION_CHANNEL_EMAIL":
        case 1:
            message.channel = 1;
            break;
        case "INTERACTION_CHANNEL_WILLIAM":
        case 2:
            message.channel = 2;
            break;
        }
        if (object.attributes) {
            if (typeof object.attributes !== "object")
                throw TypeError(".InteractionEvent.attributes: object expected");
            message.attributes = {};
            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i)
                message.attributes[keys[i]] = String(object.attributes[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from an InteractionEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InteractionEvent
     * @static
     * @param {InteractionEvent} message InteractionEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InteractionEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.attributes = {};
        if (options.defaults) {
            object.account = null;
            object.application = null;
            object.subject = options.enums === String ? "SUBJECT_NONE" : 0;
            object.intent = options.enums === String ? "INTENT_NONE" : 0;
            object.interaction = options.enums === String ? "INTERACTION_NONE" : 0;
            object.channel = options.enums === String ? "INTERACTION_CHANNEL_NONE" : 0;
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = $root.Account.toObject(message.account, options);
        if (message.application != null && message.hasOwnProperty("application"))
            object.application = $root.Application.toObject(message.application, options);
        if (message.subject != null && message.hasOwnProperty("subject"))
            object.subject = options.enums === String ? $root.Subject[message.subject] : message.subject;
        if (message.intent != null && message.hasOwnProperty("intent"))
            object.intent = options.enums === String ? $root.Intent[message.intent] : message.intent;
        if (message.interaction != null && message.hasOwnProperty("interaction"))
            object.interaction = options.enums === String ? $root.Interaction[message.interaction] : message.interaction;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = options.enums === String ? $root.InteractionChannel[message.channel] : message.channel;
        var keys2;
        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
            object.attributes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.attributes[keys2[j]] = message.attributes[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this InteractionEvent to JSON.
     * @function toJSON
     * @memberof InteractionEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InteractionEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InteractionEvent;
})();

$root.VisitEvent = (function() {

    /**
     * Properties of a VisitEvent.
     * @exports IVisitEvent
     * @interface IVisitEvent
     * @property {IAccount|null} [account] VisitEvent account
     * @property {IApplication|null} [application] VisitEvent application
     * @property {string|null} [location] VisitEvent location
     * @property {Object.<string,string>|null} [attributes] VisitEvent attributes
     */

    /**
     * Constructs a new VisitEvent.
     * @exports VisitEvent
     * @classdesc Represents a VisitEvent.
     * @implements IVisitEvent
     * @constructor
     * @param {IVisitEvent=} [properties] Properties to set
     */
    function VisitEvent(properties) {
        this.attributes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VisitEvent account.
     * @member {IAccount|null|undefined} account
     * @memberof VisitEvent
     * @instance
     */
    VisitEvent.prototype.account = null;

    /**
     * VisitEvent application.
     * @member {IApplication|null|undefined} application
     * @memberof VisitEvent
     * @instance
     */
    VisitEvent.prototype.application = null;

    /**
     * VisitEvent location.
     * @member {string} location
     * @memberof VisitEvent
     * @instance
     */
    VisitEvent.prototype.location = "";

    /**
     * VisitEvent attributes.
     * @member {Object.<string,string>} attributes
     * @memberof VisitEvent
     * @instance
     */
    VisitEvent.prototype.attributes = $util.emptyObject;

    /**
     * Creates a new VisitEvent instance using the specified properties.
     * @function create
     * @memberof VisitEvent
     * @static
     * @param {IVisitEvent=} [properties] Properties to set
     * @returns {VisitEvent} VisitEvent instance
     */
    VisitEvent.create = function create(properties) {
        return new VisitEvent(properties);
    };

    /**
     * Encodes the specified VisitEvent message. Does not implicitly {@link VisitEvent.verify|verify} messages.
     * @function encode
     * @memberof VisitEvent
     * @static
     * @param {IVisitEvent} message VisitEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VisitEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            $root.Account.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.application != null && Object.hasOwnProperty.call(message, "application"))
            $root.Application.encode(message.application, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.location);
        if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attributes[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified VisitEvent message, length delimited. Does not implicitly {@link VisitEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VisitEvent
     * @static
     * @param {IVisitEvent} message VisitEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VisitEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VisitEvent message from the specified reader or buffer.
     * @function decode
     * @memberof VisitEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VisitEvent} VisitEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VisitEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VisitEvent(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = $root.Account.decode(reader, reader.uint32());
                break;
            case 2:
                message.application = $root.Application.decode(reader, reader.uint32());
                break;
            case 3:
                message.location = reader.string();
                break;
            case 4:
                if (message.attributes === $util.emptyObject)
                    message.attributes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.attributes[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VisitEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VisitEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VisitEvent} VisitEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VisitEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VisitEvent message.
     * @function verify
     * @memberof VisitEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VisitEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account")) {
            var error = $root.Account.verify(message.account);
            if (error)
                return "account." + error;
        }
        if (message.application != null && message.hasOwnProperty("application")) {
            var error = $root.Application.verify(message.application);
            if (error)
                return "application." + error;
        }
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.attributes != null && message.hasOwnProperty("attributes")) {
            if (!$util.isObject(message.attributes))
                return "attributes: object expected";
            var key = Object.keys(message.attributes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.attributes[key[i]]))
                    return "attributes: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a VisitEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VisitEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VisitEvent} VisitEvent
     */
    VisitEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.VisitEvent)
            return object;
        var message = new $root.VisitEvent();
        if (object.account != null) {
            if (typeof object.account !== "object")
                throw TypeError(".VisitEvent.account: object expected");
            message.account = $root.Account.fromObject(object.account);
        }
        if (object.application != null) {
            if (typeof object.application !== "object")
                throw TypeError(".VisitEvent.application: object expected");
            message.application = $root.Application.fromObject(object.application);
        }
        if (object.location != null)
            message.location = String(object.location);
        if (object.attributes) {
            if (typeof object.attributes !== "object")
                throw TypeError(".VisitEvent.attributes: object expected");
            message.attributes = {};
            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i)
                message.attributes[keys[i]] = String(object.attributes[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a VisitEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VisitEvent
     * @static
     * @param {VisitEvent} message VisitEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VisitEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.attributes = {};
        if (options.defaults) {
            object.account = null;
            object.application = null;
            object.location = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = $root.Account.toObject(message.account, options);
        if (message.application != null && message.hasOwnProperty("application"))
            object.application = $root.Application.toObject(message.application, options);
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        var keys2;
        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
            object.attributes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.attributes[keys2[j]] = message.attributes[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this VisitEvent to JSON.
     * @function toJSON
     * @memberof VisitEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VisitEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VisitEvent;
})();

$root.ClickEvent = (function() {

    /**
     * Properties of a ClickEvent.
     * @exports IClickEvent
     * @interface IClickEvent
     * @property {IAccount|null} [account] ClickEvent account
     * @property {IApplication|null} [application] ClickEvent application
     * @property {string|null} [target] ClickEvent target
     * @property {Object.<string,string>|null} [attributes] ClickEvent attributes
     */

    /**
     * Constructs a new ClickEvent.
     * @exports ClickEvent
     * @classdesc Represents a ClickEvent.
     * @implements IClickEvent
     * @constructor
     * @param {IClickEvent=} [properties] Properties to set
     */
    function ClickEvent(properties) {
        this.attributes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClickEvent account.
     * @member {IAccount|null|undefined} account
     * @memberof ClickEvent
     * @instance
     */
    ClickEvent.prototype.account = null;

    /**
     * ClickEvent application.
     * @member {IApplication|null|undefined} application
     * @memberof ClickEvent
     * @instance
     */
    ClickEvent.prototype.application = null;

    /**
     * ClickEvent target.
     * @member {string} target
     * @memberof ClickEvent
     * @instance
     */
    ClickEvent.prototype.target = "";

    /**
     * ClickEvent attributes.
     * @member {Object.<string,string>} attributes
     * @memberof ClickEvent
     * @instance
     */
    ClickEvent.prototype.attributes = $util.emptyObject;

    /**
     * Creates a new ClickEvent instance using the specified properties.
     * @function create
     * @memberof ClickEvent
     * @static
     * @param {IClickEvent=} [properties] Properties to set
     * @returns {ClickEvent} ClickEvent instance
     */
    ClickEvent.create = function create(properties) {
        return new ClickEvent(properties);
    };

    /**
     * Encodes the specified ClickEvent message. Does not implicitly {@link ClickEvent.verify|verify} messages.
     * @function encode
     * @memberof ClickEvent
     * @static
     * @param {IClickEvent} message ClickEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            $root.Account.encode(message.account, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.application != null && Object.hasOwnProperty.call(message, "application"))
            $root.Application.encode(message.application, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.target != null && Object.hasOwnProperty.call(message, "target"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.target);
        if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attributes[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClickEvent message, length delimited. Does not implicitly {@link ClickEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClickEvent
     * @static
     * @param {IClickEvent} message ClickEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClickEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClickEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ClickEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClickEvent} ClickEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClickEvent(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = $root.Account.decode(reader, reader.uint32());
                break;
            case 2:
                message.application = $root.Application.decode(reader, reader.uint32());
                break;
            case 3:
                message.target = reader.string();
                break;
            case 4:
                if (message.attributes === $util.emptyObject)
                    message.attributes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.attributes[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClickEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClickEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClickEvent} ClickEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClickEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClickEvent message.
     * @function verify
     * @memberof ClickEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClickEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account")) {
            var error = $root.Account.verify(message.account);
            if (error)
                return "account." + error;
        }
        if (message.application != null && message.hasOwnProperty("application")) {
            var error = $root.Application.verify(message.application);
            if (error)
                return "application." + error;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            if (!$util.isString(message.target))
                return "target: string expected";
        if (message.attributes != null && message.hasOwnProperty("attributes")) {
            if (!$util.isObject(message.attributes))
                return "attributes: object expected";
            var key = Object.keys(message.attributes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.attributes[key[i]]))
                    return "attributes: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a ClickEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClickEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClickEvent} ClickEvent
     */
    ClickEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ClickEvent)
            return object;
        var message = new $root.ClickEvent();
        if (object.account != null) {
            if (typeof object.account !== "object")
                throw TypeError(".ClickEvent.account: object expected");
            message.account = $root.Account.fromObject(object.account);
        }
        if (object.application != null) {
            if (typeof object.application !== "object")
                throw TypeError(".ClickEvent.application: object expected");
            message.application = $root.Application.fromObject(object.application);
        }
        if (object.target != null)
            message.target = String(object.target);
        if (object.attributes) {
            if (typeof object.attributes !== "object")
                throw TypeError(".ClickEvent.attributes: object expected");
            message.attributes = {};
            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i)
                message.attributes[keys[i]] = String(object.attributes[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClickEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClickEvent
     * @static
     * @param {ClickEvent} message ClickEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClickEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.attributes = {};
        if (options.defaults) {
            object.account = null;
            object.application = null;
            object.target = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = $root.Account.toObject(message.account, options);
        if (message.application != null && message.hasOwnProperty("application"))
            object.application = $root.Application.toObject(message.application, options);
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = message.target;
        var keys2;
        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
            object.attributes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.attributes[keys2[j]] = message.attributes[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ClickEvent to JSON.
     * @function toJSON
     * @memberof ClickEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClickEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClickEvent;
})();

/**
 * Subject enum.
 * @exports Subject
 * @enum {number}
 * @property {number} SUBJECT_NONE=0 SUBJECT_NONE value
 * @property {number} SUBJECT_METER_READING=1 SUBJECT_METER_READING value
 */
$root.Subject = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SUBJECT_NONE"] = 0;
    values[valuesById[1] = "SUBJECT_METER_READING"] = 1;
    return values;
})();

/**
 * Intent enum.
 * @exports Intent
 * @enum {number}
 * @property {number} INTENT_NONE=0 INTENT_NONE value
 * @property {number} INTENT_METER_READING_SUBMIT=1 INTENT_METER_READING_SUBMIT value
 */
$root.Intent = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "INTENT_NONE"] = 0;
    values[valuesById[1] = "INTENT_METER_READING_SUBMIT"] = 1;
    return values;
})();

/**
 * Stage enum.
 * @exports Stage
 * @enum {number}
 * @property {number} STAGE_NONE=0 STAGE_NONE value
 * @property {number} STAGE_SUBMITTED=1 STAGE_SUBMITTED value
 * @property {number} STAGE_RECEIVED_REQUEST_FOR_AMEND=2 STAGE_RECEIVED_REQUEST_FOR_AMEND value
 * @property {number} STAGE_COMPLETED=3 STAGE_COMPLETED value
 * @property {number} STAGE_REJECTED=4 STAGE_REJECTED value
 * @property {number} STAGE_ENTERED=5 STAGE_ENTERED value
 * @property {number} STAGE_STARTED=6 STAGE_STARTED value
 * @property {number} STAGE_FAILED=7 STAGE_FAILED value
 */
$root.Stage = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STAGE_NONE"] = 0;
    values[valuesById[1] = "STAGE_SUBMITTED"] = 1;
    values[valuesById[2] = "STAGE_RECEIVED_REQUEST_FOR_AMEND"] = 2;
    values[valuesById[3] = "STAGE_COMPLETED"] = 3;
    values[valuesById[4] = "STAGE_REJECTED"] = 4;
    values[valuesById[5] = "STAGE_ENTERED"] = 5;
    values[valuesById[6] = "STAGE_STARTED"] = 6;
    values[valuesById[7] = "STAGE_FAILED"] = 7;
    return values;
})();

/**
 * Interaction enum.
 * @exports Interaction
 * @enum {number}
 * @property {number} INTERACTION_NONE=0 INTERACTION_NONE value
 * @property {number} INTERACTION_CLICKED=1 INTERACTION_CLICKED value
 * @property {number} INTERACTION_VIEWED=2 INTERACTION_VIEWED value
 */
$root.Interaction = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "INTERACTION_NONE"] = 0;
    values[valuesById[1] = "INTERACTION_CLICKED"] = 1;
    values[valuesById[2] = "INTERACTION_VIEWED"] = 2;
    return values;
})();

/**
 * InteractionChannel enum.
 * @exports InteractionChannel
 * @enum {number}
 * @property {number} INTERACTION_CHANNEL_NONE=0 INTERACTION_CHANNEL_NONE value
 * @property {number} INTERACTION_CHANNEL_EMAIL=1 INTERACTION_CHANNEL_EMAIL value
 * @property {number} INTERACTION_CHANNEL_WILLIAM=2 INTERACTION_CHANNEL_WILLIAM value
 */
$root.InteractionChannel = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "INTERACTION_CHANNEL_NONE"] = 0;
    values[valuesById[1] = "INTERACTION_CHANNEL_EMAIL"] = 1;
    values[valuesById[2] = "INTERACTION_CHANNEL_WILLIAM"] = 2;
    return values;
})();

module.exports = $root;
