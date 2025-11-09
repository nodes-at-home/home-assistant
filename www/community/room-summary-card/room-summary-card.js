
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * Room Summary Card Registration Module
 *
 * This module handles the registration of the Room Summary Card custom element
 * with the browser and Home Assistant's custom card registry. It makes the
 * component available for use in Home Assistant dashboards.
 */ /**
 * Room Summary Card Component
 *
 * A custom element that displays a summary of room information in Home Assistant.
 * This card shows room state, climate information, and various entity states in a
 * grid layout with interactive elements.
 *
 * @version See package.json
 */ /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = h.fromAttribute(s, t.type) ?? this._$Ej?.get(e) ?? null, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.0");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.0");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.0");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}




const $3c415b3c31c5fc9a$export$4bb1c5099bd99a57 = (mold, config)=>{
    const moldThreshold = config.thresholds?.mold;
    // If no threshold is set, always show the mold indicator
    if (moldThreshold === undefined) return true;
    // Parse the mold state value as a number
    const moldValue = Number(mold.state);
    // If the value is not a valid number, don't show the indicator
    if (isNaN(moldValue)) return false;
    // Show the indicator only if the mold value is at or above the threshold
    return moldValue >= moldThreshold;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_active.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/literal-includes.ts#L6
 */ /**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */ const $2dcc326b5e422db7$export$2fff862a498eed4d = (array)=>(searchElement, fromIndex)=>array.includes(searchElement, fromIndex);


const $fa460070836bbf6d$export$f2d101b977a134fd = 'unavailable';
const $fa460070836bbf6d$export$78244dbb77cfa6b6 = 'unknown';
const $fa460070836bbf6d$export$8a4b4288adcd729e = 'on';
const $fa460070836bbf6d$export$173de64b5ad0d5b4 = 'off';
const $fa460070836bbf6d$export$565a86226f245f0b = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6
];
const $fa460070836bbf6d$export$8ccd97e727a09c65 = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6,
    $fa460070836bbf6d$export$173de64b5ad0d5b4
];
const $fa460070836bbf6d$export$dea4173a348a2153 = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$565a86226f245f0b);
const $fa460070836bbf6d$export$3473ff6928139ced = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$8ccd97e727a09c65);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_domain.ts
 */ const $e7dc90bb09bfe22d$export$2044bdc9670769ab = (entityId)=>entityId.substring(0, entityId.indexOf('.'));


function $043ab5348dd51237$export$c0e85c3982a3daa6(stateObj, state) {
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id);
    const compareState = state !== undefined ? state : stateObj?.state;
    if ([
        'button',
        'event',
        'input_button',
        'scene'
    ].includes(domain)) return compareState !== (0, $fa460070836bbf6d$export$f2d101b977a134fd);
    if ((0, $fa460070836bbf6d$export$dea4173a348a2153)(compareState)) return false;
    // The "off" check is relevant for most domains, but there are exceptions
    // such as "alert" where "off" is still a somewhat active state and
    // therefore gets a custom color and "idle" is instead the state that
    // matches what most other domains consider inactive.
    if (compareState === (0, $fa460070836bbf6d$export$173de64b5ad0d5b4) && domain !== 'alert') return false;
    // Custom cases
    switch(domain){
        case 'alarm_control_panel':
            return compareState !== 'disarmed';
        case 'alert':
            // "on" and "off" are active, as "off" just means alert was acknowledged but is still active
            return compareState !== 'idle';
        case 'cover':
            return compareState !== 'closed';
        case 'device_tracker':
        case 'person':
            return compareState !== 'not_home';
        case 'lawn_mower':
            return [
                'mowing',
                'error'
            ].includes(compareState);
        case 'lock':
            return compareState !== 'locked';
        case 'media_player':
            return compareState !== 'standby';
        case 'vacuum':
            return ![
                'idle',
                'docked',
                'paused'
            ].includes(compareState);
        case 'valve':
            return compareState !== 'closed';
        case 'plant':
            return compareState === 'problem';
        case 'group':
            return [
                'on',
                'home',
                'open',
                'locked',
                'problem'
            ].includes(compareState);
        case 'timer':
            return compareState === 'active';
        case 'camera':
            return compareState === 'streaming';
    }
    return true;
}




const $1ed74ce23f0ef067$export$c18c768bbe3223b7 = (hass, entity, className = '')=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<state-display
    .hass=${hass}
    .stateObj=${entity}
    class=${className}
  ></state-display>`;


const $aae26e2a62e46297$export$8093665c9ba8ead9 = (hass, config, sensors)=>{
    const { problemSensors: problemSensors } = sensors;
    const problemExists = problemSensors.some((sensor)=>(0, $043ab5348dd51237$export$c0e85c3982a3daa6)(sensor));
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="problems">
    ${problemSensors.length > 0 ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon
          .icon=${`mdi:numeric-${problemSensors.length}`}
          class="status-entities"
          ?has-problems=${problemExists}
        ></ha-icon>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
    ${sensors.mold && (0, $3c415b3c31c5fc9a$export$4bb1c5099bd99a57)(sensors.mold, config) ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="mold-indicator">
          <ha-state-icon
            .hass=${hass}
            .stateObj=${sensors.mold}
          ></ha-state-icon>
          <span class="mold-text">${(0, $1ed74ce23f0ef067$export$c18c768bbe3223b7)(hass, sensors.mold)}</span>
        </div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
  </div>`;
};
const $aae26e2a62e46297$export$6697a659ce63852 = (hass, entity, config, isMainRoomEntity = false, isActive, hasImage, occupied)=>{
    const { state: state } = entity;
    if (!state) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    /*
   * Order of properties is important for logic checks
   * Set config and hass last
   */ return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<room-state-icon
    .isMainRoomEntity=${isMainRoomEntity}
    .isActive=${isActive}
    .image=${hasImage}
    .occupied=${occupied}
    .entity=${entity}
    .config=${config}
    .hass=${hass}
  ></room-state-icon>`;
};



/**
 * Checks if an occupancy sensor entity is currently detecting motion/presence
 * @param hass Home Assistant instance
 * @param entityId Entity ID of the occupancy sensor
 * @returns True if occupancy is detected, false otherwise
 */ const $7cf9926046a85a8c$var$isOccupancyDetected = (hass, entityId)=>{
    const entity = hass.states[entityId];
    if (!entity) return false;
    return (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(entity);
};
const $7cf9926046a85a8c$export$9df2091f323033b9 = (hass, config)=>{
    if (!config) return false;
    // Check if any of the entities detect occupancy
    const isOccupied = config.entities.some((entityId)=>$7cf9926046a85a8c$var$isOccupancyDetected(hass, entityId));
    return isOccupied;
};
const $7cf9926046a85a8c$export$a44444e2ac55f0e7 = (isOccupied, config)=>{
    if (!config) return {};
    const vars = {};
    if (!isOccupied) return vars;
    // Set card border variable (3px solid) unless disabled
    const isCardBorderDisabled = config.options?.includes('disabled_card_styles');
    if (!isCardBorderDisabled) {
        const borderColor = config.card_border_color ?? 'var(--success-color)';
        vars['--occupancy-card-border'] = `3px solid ${borderColor}`;
        vars['--occupancy-card-border-color'] = borderColor;
        // Set animation unless disabled
        const isAnimationDisabled = config.options?.includes('disabled_card_styles_animation');
        if (!isAnimationDisabled) vars['--occupancy-card-animation'] = 'occupancy-pulse 2s ease-in-out infinite alternate';
    }
    // Icon color styling
    const isIconColorDisabled = config.options?.includes('disable_icon_styles');
    if (!isIconColorDisabled) {
        const iconColor = config.icon_color ?? 'var(--success-color)';
        vars['--occupancy-icon-color'] = iconColor;
        // Set animation unless disabled
        const isIconAnimationDisabled = config.options?.includes('disable_icon_animation');
        if (!isIconAnimationDisabled) vars['--occupancy-icon-animation'] = 'icon-breathe 3s ease-in-out infinite alternate';
    }
    return vars;
};


var $c106d6426411ff6f$var$safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function $c106d6426411ff6f$var$isEqual(first, second) {
    if (first === second) return true;
    if ($c106d6426411ff6f$var$safeIsNaN(first) && $c106d6426411ff6f$var$safeIsNaN(second)) return true;
    return false;
}
function $c106d6426411ff6f$var$areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!$c106d6426411ff6f$var$isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function $c106d6426411ff6f$export$2e2bcd8739ae039(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = $c106d6426411ff6f$var$areInputsEqual;
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}


const $a64cd1666b27644b$export$805ddaeeece0413e = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((config, feature)=>!config || config.features?.includes(feature) || false);
const $a64cd1666b27644b$export$47f3d980c4d9b226 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((entity, feature)=>!entity || entity.config.features?.includes(feature) || false);



/**
 * Gets sensor value - from specific entity in individual sensors, or averaged sensor
 */ const $11094511f464dead$var$getSensorValue = (sensorData, deviceClass, entityId)=>{
    // If entityId is specified, look for it in individual sensors first
    if (entityId) {
        const individualSensor = sensorData.individual.find((s)=>s.entity_id === entityId);
        if (individualSensor && individualSensor.attributes.device_class === deviceClass) return Number(individualSensor.state);
    }
    // Look in averaged sensors
    const averagedSensor = sensorData.averaged.find((s)=>s.device_class === deviceClass);
    if (!averagedSensor) return null;
    // If entityId is specified, look for it in the averaged sensor's states
    if (entityId) {
        const entity = averagedSensor.states.find((state)=>state.entity_id === entityId);
        return entity ? Number(entity.state) : null;
    }
    return averagedSensor.average;
};
/**
 * Checks if a numeric value meets a threshold condition using the specified operator
 *
 * @param value - The numeric value to test
 * @param threshold - The threshold value to compare against
 * @param operator - The comparison operator to use
 * @returns true if the condition is met
 */ const $11094511f464dead$var$meetsThreshold = (value, threshold, operator)=>{
    switch(operator){
        case 'gt':
            return value > threshold;
        case 'gte':
            return value >= threshold;
        case 'lt':
            return value < threshold;
        case 'lte':
            return value <= threshold;
        case 'eq':
            return value === threshold;
        default:
            return value > threshold; // Default to 'gt' for backward compatibility
    }
};
const $11094511f464dead$export$c1ca802e67721a4 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((config, sensorData)=>{
    if ((0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'skip_climate_styles')) return {
        hot: false,
        humid: false
    };
    const temp = $11094511f464dead$var$getSensorValue(sensorData, 'temperature', config.thresholds?.temperature_entity);
    const humidity = $11094511f464dead$var$getSensorValue(sensorData, 'humidity', config.thresholds?.humidity_entity);
    const tempThreshold = config.thresholds?.temperature ?? 80;
    const humidThreshold = config.thresholds?.humidity ?? 60;
    const tempOperator = config.thresholds?.temperature_operator ?? 'gt';
    const humidOperator = config.thresholds?.humidity_operator ?? 'gt';
    return {
        hot: temp ? $11094511f464dead$var$meetsThreshold(temp, tempThreshold, tempOperator) : false,
        humid: humidity ? $11094511f464dead$var$meetsThreshold(humidity, humidThreshold, humidOperator) : false
    };
});



const $4a21e93a38591807$export$520c40045967cb15 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((areas, areaId)=>areas[areaId]);






const $e24dedcf9e480b2d$export$50fdfeece43146fd = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((states, entityId, fakeState = false)=>{
    if (!entityId) return undefined;
    const state = states[entityId] ?? (fakeState ? {
        entity_id: entityId,
        state: 'off',
        attributes: {}
    } : undefined);
    if (!state) return undefined;
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(state.entity_id);
    return {
        state: state.state,
        attributes: state.attributes,
        entity_id: state.entity_id,
        domain: domain
    };
});


const $2225304aebc9ab19$export$9dd734c640ccb658 = (hass, config)=>{
    const disableImage = config.background?.options?.includes('disable');
    if (disableImage) return undefined;
    // Check entity picture first
    if (config.background?.image_entity) {
        const entityState = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, config.background.image_entity);
        if (entityState?.attributes?.entity_picture) return entityState.attributes.entity_picture;
    }
    // Check config image
    if (config.background?.image) return config.background.image;
    // Fallback to area picture
    const area = (0, $4a21e93a38591807$export$520c40045967cb15)(hass.areas, config.area);
    return area?.picture;
};




/**
 * Checks if a string is a URL (starts with http:// or https://)
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a URL
 */ const $7c537aae45a64b57$var$isUrl = (str)=>{
    return str.startsWith('http://') || str.startsWith('https://');
};
const $7c537aae45a64b57$export$25fedbc2fd674160 = (hass, config)=>{
    const roomEntityId = `light.${config.area}_light`;
    // Determine the navigation target
    const navigationTarget = config.navigate ?? config.area.replace('_', '-');
    // Create appropriate action based on whether the target is a URL or path
    const tapAction = $7c537aae45a64b57$var$isUrl(navigationTarget) ? {
        action: 'url',
        url_path: navigationTarget
    } : {
        action: 'navigate',
        navigation_path: navigationTarget
    };
    const actionConfig = {
        tap_action: tapAction,
        hold_action: {
            action: 'more-info'
        },
        double_tap_action: {
            action: 'none'
        }
    };
    // Handle different entity configuration formats
    if (config.entity) {
        if (typeof config.entity === 'string') // String format
        return {
            config: {
                entity_id: config.entity,
                ...actionConfig
            },
            state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, config.entity)
        };
        else // Object format
        return {
            config: {
                ...actionConfig,
                ...config.entity
            },
            state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, config.entity.entity_id)
        };
    }
    // Default room light configuration
    return {
        config: {
            entity_id: roomEntityId,
            icon: (0, $4a21e93a38591807$export$520c40045967cb15)(hass.areas, config.area)?.icon,
            ...actionConfig
        },
        state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, roomEntityId, true)
    };
};




const $5bd3a7e1f19a6de3$export$30c823bc834d6ab4 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((devices, deviceId)=>devices[deviceId]);



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/number/format_number.ts
 */ const $155ab9b902a30933$export$88bfc1035e667f37 = (stateObj)=>$155ab9b902a30933$export$b6c45d0299750e7c(stateObj.attributes);
const $155ab9b902a30933$export$b6c45d0299750e7c = (attributes, numericDeviceClasses)=>!!attributes.unit_of_measurement || !!attributes.state_class || (numericDeviceClasses || []).includes(attributes.device_class ?? '');


/**
 * Filters entities by device class and ensures they are numeric
 */ const $c53bd255d5b5e82c$var$getNumericEntitiesByClass = (entities, deviceClass)=>{
    return entities.filter((entity)=>entity.attributes.device_class === deviceClass && (0, $155ab9b902a30933$export$88bfc1035e667f37)(entity) && entity.state.trim() !== '' && !isNaN(Number(entity.state)));
};
/**
 * Groups entities by their unit of measurement
 */ const $c53bd255d5b5e82c$var$groupEntitiesByUom = (entities)=>{
    const uomGroups = new Map();
    for (const entity of entities){
        const uom = entity.attributes.unit_of_measurement ?? '';
        if (!uomGroups.has(uom)) uomGroups.set(uom, []);
        uomGroups.get(uom).push(entity);
    }
    return uomGroups;
};
/**
 * Calculates average for a group of entities
 */ const $c53bd255d5b5e82c$var$calculateGroupAverage = (groupEntities, uom, deviceClass)=>{
    const sum = groupEntities.reduce((total, entity)=>total + Number(entity.state), 0);
    const average = sum / groupEntities.length;
    return {
        states: groupEntities,
        uom: uom,
        average: average,
        device_class: deviceClass,
        domain: 'sensor'
    };
};
/**
 * Processes a single device class and returns averages
 */ const $c53bd255d5b5e82c$var$processDeviceClass = (entities, deviceClass)=>{
    const classEntities = $c53bd255d5b5e82c$var$getNumericEntitiesByClass(entities, deviceClass);
    if (classEntities.length === 0) return [];
    const uomGroups = $c53bd255d5b5e82c$var$groupEntitiesByUom(classEntities);
    const averages = [];
    for (const [uom, groupEntities] of uomGroups)if (groupEntities.length > 0) averages.push($c53bd255d5b5e82c$var$calculateGroupAverage(groupEntities, uom, deviceClass));
    return averages;
};
const $c53bd255d5b5e82c$export$499e7395a53e0376 = (entities, deviceClasses)=>{
    return deviceClasses.flatMap((deviceClass)=>$c53bd255d5b5e82c$var$processDeviceClass(entities, deviceClass));
};


const $ae9c02fde6a0af97$export$d4cef0abb1b35d6f = (hass, config)=>{
    const skipDefaultEntities = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'exclude_default_entities');
    const multiLightEnabled = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'multi_light_background');
    // Default sensor classes if not specified
    const sensorClasses = config.sensor_classes || [
        'temperature',
        'humidity',
        'illuminance'
    ];
    // Arrays to hold different categories
    const configOrderedSensors = [];
    const classSensors = [];
    const problemSensors = [];
    const lightEntities = [];
    let mold = undefined;
    // Get configured light entity IDs if multi-light feature is enabled
    let configuredLightIds = [];
    if (multiLightEnabled && config.lights && config.lights.length > 0) configuredLightIds = config.lights;
    // Process all entities in the area
    Object.values(hass.entities).forEach((entity)=>{
        // Check if this sensor is explicitly configured
        const isConfigSensor = config.sensors?.includes(entity.entity_id);
        const device = (0, $5bd3a7e1f19a6de3$export$30c823bc834d6ab4)(hass.devices, entity.device_id);
        const isInArea = [
            entity.area_id,
            device?.area_id
        ].includes(config.area);
        // Check if this is a configured light entity (always process these)
        const isConfiguredLight = configuredLightIds.includes(entity.entity_id);
        // If it's not a config sensor, not in the area, and not a configured light, skip it
        // If it's a config sensor or configured light, always include it since the user has explicitly included it
        if (!isConfigSensor && !isInArea && !isConfiguredLight) return;
        const state = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        if (!state) return;
        // Collect light entities for multi-light background feature
        if (multiLightEnabled) {
            if (isConfiguredLight) // Always include explicitly configured lights
            lightEntities.push(state);
            else if (!config.lights?.length && isInArea && entity.entity_id.startsWith('light.')) // Auto-discover lights in area only if no lights are manually configured
            lightEntities.push(state);
        }
        if (entity?.labels?.includes('problem')) problemSensors.push(state);
        if (entity?.platform === 'mold_indicator') mold = state;
        // If it's a config sensor, always include it in individual sensors
        if (isConfigSensor) {
            configOrderedSensors.push(state);
            return;
        }
        // If we're skipping default entities, don't process further
        if (skipDefaultEntities) return;
        // Check if this is a sensor with a device class we care about
        const deviceClass = state.attributes?.device_class;
        if (state.domain === 'sensor' && deviceClass && sensorClasses.includes(deviceClass)) classSensors.push(state);
    });
    // Sort config sensors by their order in the config array
    configOrderedSensors.sort((a, b)=>{
        const indexA = config.sensors?.indexOf(a.entity_id) ?? -1;
        const indexB = config.sensors?.indexOf(b.entity_id) ?? -1;
        return indexA - indexB;
    });
    // Calculate averages for class-based sensors
    const averaged = (0, $c53bd255d5b5e82c$export$499e7395a53e0376)(classSensors, sensorClasses);
    return {
        individual: configOrderedSensors,
        averaged: averaged,
        problemSensors: problemSensors,
        mold: mold,
        lightEntities: lightEntities
    };
};


const $77c10d542be06a8f$export$df764ae7d62abece = (hass, config)=>{
    const roomInfo = {
        area_name: config.area_name ?? (0, $4a21e93a38591807$export$520c40045967cb15)(hass.areas, config.area)?.name ?? config.area
    };
    const roomEntity = (0, $7c537aae45a64b57$export$25fedbc2fd674160)(hass, config);
    const sensors = (0, $ae9c02fde6a0af97$export$d4cef0abb1b35d6f)(hass, config);
    const thresholds = (0, $11094511f464dead$export$c1ca802e67721a4)(config, sensors);
    const image = (0, $2225304aebc9ab19$export$9dd734c640ccb658)(hass, config);
    const occupied = (0, $7cf9926046a85a8c$export$9df2091f323033b9)(hass, config.occupancy);
    // Calculate if room is active - either room entity is active or any light is active
    const isActive = roomEntity.state && (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(roomEntity.state) || sensors.lightEntities.some((entityState)=>(0, $043ab5348dd51237$export$c0e85c3982a3daa6)(entityState));
    return {
        roomInfo: roomInfo,
        roomEntity: roomEntity,
        sensors: sensors,
        image: image,
        isActive: isActive,
        flags: {
            occupied: occupied,
            dark: hass.themes.darkMode,
            ...thresholds
        }
    };
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/dom/fire_event.ts
 */ // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
const $9c83ab07519e6203$export$43835e9acf248a15 = (node, type, detail, options)=>{
    options = options || {};
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/common/directives/action-handler-directive.ts
 */ 
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




const $69fb27e443983086$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector('action-handler')) return body.querySelector('action-handler');
    const actionhandler = document.createElement('action-handler');
    body.appendChild(actionhandler);
    return actionhandler;
};
const $69fb27e443983086$export$520aee61eb0a2770 = (element, options)=>{
    const actionhandler = $69fb27e443983086$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
const $69fb27e443983086$export$8a44987212de21b = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    update(part, [options]) {
        $69fb27e443983086$export$520aee61eb0a2770(part.element, options);
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(_options) {}
});


const $57febad8376708f1$export$8a44987212de21b = (entity)=>{
    const isActionEnabled = (actionConfig)=>actionConfig?.action !== 'none' && actionConfig?.action !== undefined;
    return (0, $69fb27e443983086$export$8a44987212de21b)({
        hasDoubleClick: isActionEnabled(entity.config?.double_tap_action),
        hasHold: isActionEnabled(entity.config?.hold_action)
    });
};
const $57febad8376708f1$export$3d3654ce4577c53d = (element, entity)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            // Extract action from event detail
            const action = ev.detail?.action;
            if (!action) return;
            // Create configuration object for the action
            const config = {
                entity: entity.config.entity_id,
                ...entity.config
            };
            // @ts-ignore
            (0, $9c83ab07519e6203$export$43835e9acf248a15)(element, 'hass-action', {
                config: config,
                action: action
            });
        }
    };
};






/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_color.ts
 * This file is modified to allow for light entities to be included in the state color calculation
 * so that the multi-light background feature can work
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/color/battery_color.ts
 */ const $4c0890ccf6fed540$export$8b81ac7267f802e2 = (state)=>{
    const value = Number(state);
    if (isNaN(value)) return undefined;
    if (value >= 70) return '--state-sensor-battery-high-color';
    if (value >= 30) return '--state-sensor-battery-medium-color';
    return '--state-sensor-battery-low-color';
};




/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/string/slugify.ts
 */ // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const $91f9efeb0d03df29$export$c383cdd2a518017a = (value, delimiter = '_')=>{
    const a = "\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010D\u0111\u010F\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xee\xef\xed\u012B\u012F\xec\u0131\u0130\u0142\u1E3F\xf1\u0144\u01F9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014D\xf5\u0151\u1E55\u0155\u0159\xdf\u015B\u0161\u015F\u0219\u0165\u021B\xfb\xfc\xf9\xfa\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xff\xfd\u017E\u017A\u017C\xb7";
    const b = `aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}`;
    const p = new RegExp(a.split('').join('|'), 'g');
    let slugified;
    if (value === '') slugified = '';
    else {
        slugified = value.toString().toLowerCase().replace(p, (c)=>b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/(\d),(?=\d)/g, '$1') // Remove Commas between numbers
        .replace(/[^a-z0-9]+/g, delimiter) // Replace all non-word characters
        .replace(new RegExp(`(${delimiter})\\1+`, 'g'), '$1') // Replace multiple delimiters with single delimiter
        .replace(new RegExp(`^${delimiter}+`), '') // Trim delimiter from start of text
        .replace(new RegExp(`${delimiter}+$`), ''); // Trim delimiter from end of text
        if (slugified === '') slugified = 'unknown';
    }
    return slugified;
};



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/group.ts
 */ 
const $2166d16660be7ac9$export$995df2070398c848 = (stateObj)=>{
    const entityIds = stateObj.attributes.entity_id || [];
    const uniqueDomains = [
        ...new Set(entityIds.map((entityId)=>(0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(entityId)))
    ];
    return uniqueDomains.length === 1 ? uniqueDomains[0] : undefined;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/resources/css-variables.ts
 */ function $b128ea01d7ae7b8f$export$32531bbdc9316392(props) {
    if (Array.isArray(props)) return props.reverse().reduce((str, variable)=>`var(${variable}${str ? `, ${str}` : ''})`, undefined);
    return `var(${props})`;
}


const $964034295ca0500a$var$STATE_COLORED_DOMAIN = new Set([
    'alarm_control_panel',
    'alert',
    'automation',
    'binary_sensor',
    'calendar',
    'camera',
    'climate',
    'cover',
    'device_tracker',
    'fan',
    'group',
    'humidifier',
    'input_boolean',
    'lawn_mower',
    'light',
    'lock',
    'media_player',
    'person',
    'plant',
    'remote',
    'schedule',
    'script',
    'siren',
    'sun',
    'switch',
    'timer',
    'update',
    'vacuum',
    'valve',
    'water_heater'
]);
const $964034295ca0500a$export$b2779b0e0d1bdfa9 = (stateObj, scope, active, state)=>{
    const compareState = state ?? stateObj?.state;
    if (compareState === (0, $fa460070836bbf6d$export$f2d101b977a134fd)) return `var(--state-unavailable-color)`;
    const properties = $964034295ca0500a$export$e4e5839282fc5156(stateObj, scope, active, state);
    if (properties) return (0, $b128ea01d7ae7b8f$export$32531bbdc9316392)(properties);
    return undefined;
};
const $964034295ca0500a$export$2b7fdd1a076d6214 = (domain, stateObj, scope, active, state)=>{
    const compareState = state ?? stateObj.state;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active ?? (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(stateObj, state);
    // allow for theme override
    const properties = [
        `--state-color-${scope}-theme`
    ];
    const stateKey = (0, $91f9efeb0d03df29$export$c383cdd2a518017a)(compareState, '_');
    const activeKey = isActive ? 'active' : 'inactive';
    const dc = stateObj.attributes.device_class;
    if (dc) properties.push(`--state-${domain}-${dc}-${stateKey}-color`);
    properties.push(`--state-${domain}-${stateKey}-color`, `--state-${domain}-${activeKey}-color`, `--state-${activeKey}-color`);
    return properties;
};
const $964034295ca0500a$export$e4e5839282fc5156 = (stateObj, scope, active, state)=>{
    const compareState = state ?? stateObj?.state;
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id);
    const dc = stateObj.attributes.device_class;
    // Special rules for battery coloring
    if (domain === 'sensor' && dc === 'battery') {
        const property = (0, $4c0890ccf6fed540$export$8b81ac7267f802e2)(compareState);
        if (property) return [
            `--state-color-${scope}-theme`,
            property
        ];
    }
    // Special rules for group coloring
    if (domain === 'group') {
        const groupDomain = (0, $2166d16660be7ac9$export$995df2070398c848)(stateObj);
        if (groupDomain && $964034295ca0500a$var$STATE_COLORED_DOMAIN.has(groupDomain)) return $964034295ca0500a$export$2b7fdd1a076d6214(groupDomain, stateObj, scope, active, state);
    }
    if ($964034295ca0500a$var$STATE_COLORED_DOMAIN.has(domain)) return $964034295ca0500a$export$2b7fdd1a076d6214(domain, stateObj, scope, active, state);
    return undefined;
};
const $964034295ca0500a$export$65bcdaf7f2807be8 = (stateObj)=>{
    if (stateObj.attributes.brightness && (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id) !== 'plant') {
        // lowest brightness will be around 50% (that's pretty dark)
        const brightness = stateObj.attributes.brightness;
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    return '';
};


/**
 * Maps Home Assistant domains to their conventional active state colors
 * Returns a color name from the standard HA_COLORS list
 *
 * @param domain - The Home Assistant domain (e.g., 'light', 'switch', 'cover')
 * @returns Color name from HA_COLORS (e.g., 'amber', 'blue')
 */ const $fe1dc9a21bba1bac$export$426ed50d9b9daf3a = (domain)=>{
    switch(domain){
        // Lighting
        case 'light':
        case 'switch_as_x':
            return 'yellow';
        // Switches & Electric
        case 'switch':
        case 'input_boolean':
        case 'automation':
        case 'script':
            return 'blue';
        // Climate & Environment
        case 'climate':
        case 'fan':
            return 'teal';
        // Security & Safety
        case 'alarm_control_panel':
        case 'lock':
            return 'red';
        // Covers & Doors
        case 'cover':
        case 'garage_door':
        case 'door':
            return 'green';
        // Media
        case 'media_player':
            return 'indigo';
        // Sensors & Binary Sensors
        case 'binary_sensor':
        case 'sensor':
            return 'cyan';
        // Person & Presence
        case 'person':
        case 'device_tracker':
            return 'purple';
        // Weather & Update
        case 'weather':
        case 'update':
            return 'orange';
        // Vacuum
        case 'vacuum':
            return 'deep-purple';
        // Timer & Schedule
        case 'timer':
        case 'schedule':
            return 'pink';
        // Default for unknown domains
        default:
            return 'yellow';
    }
};


/**
 * @file color-definitions.js
 * @description Defines RGB color variables for use in Home Assistant themes and components
 */ 
const $6914dc426cdafe87$export$33537d9e76cd536a = [
    'primary',
    'accent',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'light-grey',
    'grey',
    'dark-grey',
    'blue-grey',
    'black',
    'white',
    'disabled'
];
const $6914dc426cdafe87$export$30317f76025d8bf5 = [
    'red',
    'green',
    'yellow',
    'blue',
    'purple',
    'grey',
    'pink',
    'theme'
];
const $6914dc426cdafe87$export$dec94ffc2d530e03 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --theme-color-minimalist: rgb(var(--color-theme));
`;
const $6914dc426cdafe87$export$4aa0a1b480cdb1b6 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --theme-background-color-card: var(
    --ha-card-background,
    var(--card-background-color, white)
  );
  --theme-background-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );
  --theme-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );

  --opacity-icon-active: 1;
  --opacity-icon-inactive: 0.2;
`;
const $6914dc426cdafe87$export$38d2ecc76f0c2959 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --opacity-background-active: 1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.1;
`;
const $6914dc426cdafe87$export$eae85ad18a22ab6c = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.05;
`;


const $b4e23e6524dce55f$export$2757cc6eb9fa350d = (iconColor, onColor, offColor, domain, active)=>{
    if (iconColor && (0, $6914dc426cdafe87$export$30317f76025d8bf5).includes(iconColor)) return `rgb(var(--color-${iconColor}))`;
    const color = active ? onColor ?? (0, $fe1dc9a21bba1bac$export$426ed50d9b9daf3a)(domain) : offColor;
    if (color && (0, $6914dc426cdafe87$export$30317f76025d8bf5).includes(color)) return `rgb(var(--color-${color}))`;
    return undefined;
};
const $b4e23e6524dce55f$export$de247ce18e8ed95f = (iconColor, onColor, offColor, active)=>{
    if (iconColor && (0, $6914dc426cdafe87$export$33537d9e76cd536a).includes(iconColor)) return `var(--${iconColor}-color)`;
    if (active && onColor && (0, $6914dc426cdafe87$export$33537d9e76cd536a).includes(onColor)) return `var(--${onColor}-color)`;
    if (!active && offColor && (0, $6914dc426cdafe87$export$33537d9e76cd536a).includes(offColor)) return `var(--${offColor}-color)`;
    return undefined;
};


const $b7804c2a9cb078fc$export$ce6920689b32408c = (state, onColor, offColor, active)=>{
    const rgbColor = state.attributes.rgb_color;
    // This conditional block checks whether the `rgbColor` attribute of the entity state
    // should be used to generate an RGB color string. The conditions ensure:
    // 1. The entity is not active with an `onColor` defined (`!(active && onColor)`).
    // 2. The entity is not inactive with an `offColor` defined (`!(!active && offColor)`).
    // 3. The `rgbColor` attribute exists, is an array, and contains exactly three elements.
    // If all these conditions are met, the function returns an RGB string in the format
    // `rgb(r, g, b)` using the values from the `rgbColor` array.
    if (!(active && onColor) && !(!active && offColor) && rgbColor && Array.isArray(rgbColor) && rgbColor.length === 3) return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    return undefined;
};


const $2cc9f817abd21598$export$76969a794fd1f893 = (entity)=>{
    const { config: config, state: state } = entity;
    if (!state) return undefined;
    // Check state-based result configuration first
    const stateResult = $2cc9f817abd21598$export$a459976b71c8081f(entity);
    if (stateResult) return stateResult;
    // Fallback to threshold-based configuration
    if (!config.thresholds) return undefined;
    // Sort thresholds by value in descending order to check highest first
    const sortedThresholds = [
        ...config.thresholds
    ].sort((a, b)=>b.threshold - a.threshold);
    for (const threshold of sortedThresholds){
        // Determine what value to compare against
        const valueToCompare = threshold.attribute ? state.attributes?.[threshold.attribute] : state.state;
        const numericValue = Number.parseFloat(String(valueToCompare ?? ''));
        // Skip if value is not a valid number
        if (Number.isNaN(numericValue)) continue;
        if ($2cc9f817abd21598$var$meetsThreshold(numericValue, threshold)) return {
            color: threshold.icon_color,
            icon: threshold.icon,
            styles: threshold.styles
        };
    }
    return undefined;
};
const $2cc9f817abd21598$export$552fb6eec3a2ca5d = (entity)=>{
    return $2cc9f817abd21598$export$76969a794fd1f893(entity)?.color;
};
const $2cc9f817abd21598$export$a459976b71c8081f = (entity)=>{
    const { config: config, state: state } = entity;
    if (!config.states || !state) return undefined;
    for (const stateConfig of config.states){
        // Determine what value to compare against
        const valueToMatch = stateConfig.attribute ? String(state.attributes?.[stateConfig.attribute] ?? '') : state.state;
        if (stateConfig.state === valueToMatch) return {
            color: stateConfig.icon_color,
            icon: stateConfig.icon,
            styles: stateConfig.styles
        };
    }
    return undefined;
};
const $2cc9f817abd21598$export$3d43351ca2ab732f = (entity)=>{
    return $2cc9f817abd21598$export$a459976b71c8081f(entity)?.color;
};
/**
 * Checks if a numeric value meets a threshold condition
 *
 * @param value - The numeric value to test
 * @param threshold - The threshold configuration
 * @returns true if the condition is met
 */ const $2cc9f817abd21598$var$meetsThreshold = (value, threshold)=>{
    const operator = threshold.operator || 'gte';
    switch(operator){
        case 'gt':
            return value > threshold.threshold;
        case 'gte':
            return value >= threshold.threshold;
        case 'lt':
            return value < threshold.threshold;
        case 'lte':
            return value <= threshold.threshold;
        case 'eq':
            return value === threshold.threshold;
        default:
            return value >= threshold.threshold;
    }
};


const $81b7b9da9d23fa76$export$de96a622725f4284 = (hass, entity, active)=>{
    const { state: state } = entity;
    if (!state) return undefined;
    // threshold-based colors have the highest priority
    const thresholdColor = (0, $2cc9f817abd21598$export$552fb6eec3a2ca5d)(entity);
    if (thresholdColor) return thresholdColor;
    // icon color is the second priority - hex colors
    const iconColor = state.attributes.icon_color;
    if (iconColor?.startsWith('#')) return iconColor;
    const onColor = entity.config.on_color ?? state.attributes.on_color;
    const offColor = entity.config.off_color ?? state?.attributes?.off_color;
    const rgbColor = (0, $b7804c2a9cb078fc$export$ce6920689b32408c)(state, onColor, offColor, active);
    // If the state has a specific RGB color, return it directly
    if (rgbColor) return rgbColor;
    // Try minimalist colors first if minimalist theme
    if (hass.themes.theme?.startsWith('minimalist-')) {
        const minimalistResult = (0, $b4e23e6524dce55f$export$2757cc6eb9fa350d)(iconColor, onColor, offColor, state.domain, active);
        if (minimalistResult) return minimalistResult;
    }
    // Fallback to Home Assistant colors
    return (0, $b4e23e6524dce55f$export$de247ce18e8ed95f)(iconColor, onColor, offColor, active);
};


const $5ee8d7c3f2d31d78$export$de2836153ec9a0b1 = (hass, scope, entity, active)=>{
    const { state: state } = entity;
    if (!state) return null;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active ?? (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(state);
    const activeClass = isActive ? 'active' : 'inactive';
    const themeOverride = (0, $81b7b9da9d23fa76$export$de96a622725f4284)(hass, entity, isActive);
    const cssColor = (0, $964034295ca0500a$export$b2779b0e0d1bdfa9)(state, scope, isActive) ?? (themeOverride ? `var(--state-color-${scope}-theme)` : undefined);
    return {
        active: isActive,
        cssColor: cssColor,
        themeOverride: themeOverride,
        activeClass: activeClass
    };
};


const $4b770d6c5f20ba80$export$43aa80132b9e21fa = (hass, config, entity, isActive)=>{
    const skipStyles = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    if (skipStyles) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const styleData = (0, $5ee8d7c3f2d31d78$export$de2836153ec9a0b1)(hass, 'text', entity, isActive);
    if (!styleData) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return styleData.active ? (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        '--text-color': styleData.cssColor,
        '--state-color-text-theme': styleData.themeOverride,
        ...config.styles?.title
    }) : (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        ...config.styles?.title
    });
};






const $e6782818bfcf779d$export$fcf7c33d7fd02301 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((entities, entityId)=>entities[entityId]);





const $6fcbc68239868959$export$3703ea65b0ac4726 = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    // Separate keyframes from regular styles
    const keyframesEntries = [];
    const regularStyles = [];
    for (const [key, value] of Object.entries(styles))if (key === 'keyframes') // Handle keyframes specially
    keyframesEntries.push(`@keyframes ${value}`);
    else // Regular CSS property
    regularStyles.push(`${key}: ${value};`);
    const cssString = regularStyles.join(' ');
    const keyframesString = keyframesEntries.join('\n');
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <style>
        ${keyframesString}
        :host {
          ${cssString}
        }
      </style>
    `;
});
const $6fcbc68239868959$export$94e56d1d743c1f9b = (0, $c106d6426411ff6f$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)(styles);
});



const $df7d0568312b5557$export$91d43c07a591098e = (hass, config)=>{
    if (!hass || (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'hide_area_stats')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const devices = Object.keys(hass.devices).filter((k)=>(0, $5bd3a7e1f19a6de3$export$30c823bc834d6ab4)(hass.devices, k).area_id === config.area);
    const entities = Object.keys(hass.entities).filter((k)=>{
        const entity = (0, $e6782818bfcf779d$export$fcf7c33d7fd02301)(hass.entities, k);
        return entity.area_id === config.area || devices.includes(entity.device_id);
    });
    const e = [
        [
            devices.length,
            'devices'
        ],
        [
            entities.length,
            'entities'
        ]
    ].filter((count)=>count.length > 0).map(([count, type])=>`${count} ${type}`).join(' ');
    const s = (0, $6fcbc68239868959$export$94e56d1d743c1f9b)(config.styles?.stats);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<span style="${s}" class="stats text">${e}</span>`;
};


const $fd7591fa76c4f063$export$a80b3bd66acc52ff = (element, hass, roomInformation, roomEntity, config, sensors, isActive)=>{
    const textStyle = (0, $4b770d6c5f20ba80$export$43aa80132b9e21fa)(hass, config, roomEntity, isActive);
    const stats = (0, $df7d0568312b5557$export$91d43c07a591098e)(hass, config);
    const handler = (0, $57febad8376708f1$export$8a44987212de21b)(roomEntity);
    const action = (0, $57febad8376708f1$export$3d3654ce4577c53d)(element, roomEntity);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="info">
    <div class="text" @action=${action} .actionHandler=${handler}>
      <div class="name text" style=${textStyle}>
        ${roomInformation.area_name}
      </div>
      ${stats}
    </div>
    <sensor-collection
      .config=${config}
      .sensors=${sensors}
      .hass=${hass}
    ></sensor-collection>
  </div>`;
};







const $2d4b3d1e878a5c64$export$abc50289182506e4 = (config, active)=>{
    const skipStyles = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    const opacity = config.background?.opacity ? config.background.opacity / 100 : undefined;
    return {
        '--opacity-theme': opacity,
        '--background-opacity-card': `var(--opacity-background-${active && !skipStyles ? 'active' : 'inactive'})`
    };
};



const $2a931dbd84666c62$export$6675fe814017d7b1 = (hass, config, entity, isOccupied, image, isActive)=>{
    const { state: state } = entity;
    const active = hass.themes.darkMode && (isActive ?? false);
    const themeOverride = (0, $81b7b9da9d23fa76$export$de96a622725f4284)(hass, entity, active);
    const skipStyles = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'skip_entity_styles');
    const opacity = (0, $2d4b3d1e878a5c64$export$abc50289182506e4)(config, active);
    const occupancy = (0, $7cf9926046a85a8c$export$a44444e2ac55f0e7)(isOccupied, config.occupancy);
    const cssColor = hass.themes.darkMode ? (0, $964034295ca0500a$export$b2779b0e0d1bdfa9)(state, 'card', active) : undefined;
    let backgroundColorCard;
    if (skipStyles) backgroundColorCard = undefined;
    else backgroundColorCard = active ? cssColor : undefined;
    // Return complete style map
    return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        '--background-color-card': backgroundColorCard,
        '--state-color-card-theme': themeOverride,
        '--background-image': image ? `url(${image})` : undefined,
        ...opacity,
        ...occupancy,
        ...config.styles?.card
    });
};


/**
 * Room Summary Card Styles Module
 *
 * Handles all styling logic and CSS definitions for the Room Summary Card.
 * Includes functions for generating dynamic styles based on state and
 * configuration, as well as static CSS styles for the card layout.
 */ 

const $11405a6d664b459c$export$e8f30ede68e93366 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Mold indicator container styling */
  .mold-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
    animation: mold-pulse 2s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }

  /* Mold indicator icon styling */
  .mold-indicator ha-state-icon {
    color: white;
    --mdc-icon-size: 20px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    animation: mold-icon-bounce 1.5s ease-in-out infinite;
  }

  /* Mold indicator text styling */
  .mold-indicator .mold-text {
    color: white;
    font-size: 0.8em;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    animation: mold-text-glow 2s ease-in-out infinite alternate;
  }

  /* Glowing effect behind the indicator */
  .mold-indicator::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a52, #ff6b6b);
    border-radius: 14px;
    z-index: -1;
    animation: mold-glow 3s ease-in-out infinite;
    opacity: 0.6;
  }

  /* Warning triangle effect */
  .mold-indicator::after {
    content: '⚠';
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 12px;
    color: #ffeb3b;
    text-shadow: 0 0 4px rgba(255, 235, 59, 0.8);
    animation: mold-warning-flash 1s ease-in-out infinite;
  }

  /* Animation keyframes */
  @keyframes mold-pulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 4px 16px rgba(255, 107, 107, 0.5);
    }
  }

  @keyframes mold-icon-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }

  @keyframes mold-text-glow {
    0% {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.3),
        0 0 8px rgba(255, 255, 255, 0.6);
    }
  }

  @keyframes mold-glow {
    0%,
    100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @keyframes mold-warning-flash {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }

  /* Hover effects */
  .mold-indicator:hover {
    animation: mold-pulse 0.5s ease-in-out infinite;
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }

  .mold-indicator:hover::before {
    animation: mold-glow 1s ease-in-out infinite;
  }

  /* Dark theme adjustments */
  :host([dark]) .mold-indicator {
    background: linear-gradient(135deg, #d32f2f, #c62828);
    box-shadow: 0 2px 8px rgba(211, 47, 47, 0.4);
  }

  :host([dark]) .mold-indicator::before {
    background: linear-gradient(45deg, #d32f2f, #c62828, #d32f2f);
  }
`;



const $8b8d054bbcd343d6$export$e417a58d8f305947 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Card border styling when occupied */
  :host([occupied]) ha-card {
    animation: var(--occupancy-card-animation, none);
    border: var(--occupancy-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Animation keyframes */
  @keyframes occupancy-pulse {
    0% {
      box-shadow: 0 0 5px
        var(--occupancy-card-border-color, var(--success-color));
    }
    100% {
      box-shadow: 0 0 20px
        var(--occupancy-card-border-color, var(--success-color));
    }
  }
`;



/**
 * Base theme and color definitions
 */ const $f2817cae210645dc$var$hostThemeStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Card Themes and Colors */
  :host {
    ${(0, $6914dc426cdafe87$export$dec94ffc2d530e03)}
    ${(0, $6914dc426cdafe87$export$4aa0a1b480cdb1b6)}
    ${(0, $6914dc426cdafe87$export$38d2ecc76f0c2959)}
  }

  :host([dark]) {
    ${(0, $6914dc426cdafe87$export$eae85ad18a22ab6c)}
  }

  :host {
    --text-color: var(--primary-text-color);
    --background-color-card: var(--theme-background-color-card);
    --background-opacity-card: var(--opacity-background-inactive);
    --icon-color: var(--theme-color-icon);
    --background-color-icon: var(--theme-background-color-icon);
    --background-opacity-icon: var(--opacity-icon-fill-inactive);
    --background-image: none;
  }
`;
/**
 * Base theme and color definitions
 */ const $f2817cae210645dc$var$haCardThemeStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host([hot]) ha-card {
    border-left: 3px solid var(--error-color) !important;
    border-top: 3px solid var(--error-color) !important;
    border-right: 3px solid var(--error-color);
    border-bottom: 3px solid var(--error-color);
  }

  :host([humid]) ha-card {
    border-left: 3px solid var(--info-color);
    border-top: 3px solid var(--info-color);
    border-right: 3px solid var(--info-color) !important;
    border-bottom: 3px solid var(--info-color) !important;
  }

  :host([image]) ha-card {
    --opacity-theme: 0.3;
    --text-opacity-theme: 0.8;
    --opacity-icon-fill-inactive: 0.2;
  }
`;
/**
 * Card container and background styling
 */ const $f2817cae210645dc$var$cardContainerStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  ha-card {
    line-height: normal;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  :host([image]) ha-card::before {
    background-image:
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      var(--background-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  :host([image][icon-bg]) ha-card::before {
    background-image: none;
  }

  ha-card::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--background-color-card);

    opacity: var(--opacity-theme, var(--background-opacity-card));
  }
`;
/**
 * Grid layout and positioning
 */ const $f2817cae210645dc$var$gridLayoutStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  .grid {
    display: grid;
    grid-template-areas:
      'i i i e'
      'i i i e'
      'r r . e'
      'r r . e';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    aspect-ratio: 1/1;
    height: 100%;
    width: 100%;
    position: relative; /* For absolute positioning of clickable area */
  }

  .text {
    cursor: pointer;
  }

  .info {
    grid-area: i;
    width: 100%;
    margin: 5% 0px 0px 10%;
    container-type: inline-size;
  }

  entity-collection {
    grid-area: e;
  }

  /* Room area styling - Large square shape */
  room-state-icon[room] {
    grid-area: r;
    width: var(--user-room-icon-size, 150%);
    aspect-ratio: 1 / 1;
    align-self: center;
  }

  room-state-icon[room].hidden {
    opacity: 0;
  }
`;
/**
 * Entity and component area styles
 */ const $f2817cae210645dc$var$entityAreaStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Statistics text */
  .stats {
    font-size: 0.8em;
    opacity: var(--text-opacity-theme, 0.4);
  }

  /* Common text styles */
  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content; /* don't cover other elements plz */
  }
`;
/**
 * Icon and visual indicator styles
 */ const $f2817cae210645dc$var$iconStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Icon container styling */
  .icon {
    cursor: pointer;
    align-self: center;
    position: relative;
    display: flex;
    justify-content: center;
    aspect-ratio: 1 / 1;
  }

  .icon::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color-icon);
    opacity: var(--background-opacity-icon);
  }

  /* State icon styling */
  .icon ha-state-icon {
    width: 50%;
    color: var(--icon-color);
    opacity: var(--icon-opacity);
    --mdc-icon-size: 100%;
  }
`;
/**
 * Status entity indicator
 */ const $f2817cae210645dc$var$statusEntityStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  .problems {
    grid-area: 4 / 1 / 4 / 1;
    align-self: end;
    justify-self: start;
    margin-left: 10%;
    margin-bottom: 10%;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  /* Status entities indicator */
  .status-entities {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    color: var(--black-color);
    position: relative;
    z-index: 1;
  }

  .status-entities::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: var(--success-color);
    opacity: 0.6;
    z-index: -1;
  }

  /* Problem state styling */
  .status-entities[has-problems]::before {
    background-color: var(--error-color);
    opacity: 0.8;
    animation: problem-pulse 2s ease-in-out infinite;
  }

  /* Problem pulse animation */
  @keyframes problem-pulse {
    0%,
    100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;
/**
 * Sensor and label display styles
 */ const $f2817cae210645dc$var$sensorLabelStyles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Room name styling */
  .name {
    font-size: clamp(1.2rem, 6cqw, 2rem);
    font-weight: 500;
    color: var(--text-color);
  }
`;
const $f2817cae210645dc$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  ${$f2817cae210645dc$var$hostThemeStyles}
  ${$f2817cae210645dc$var$haCardThemeStyles}
  ${$f2817cae210645dc$var$cardContainerStyles}
  ${$f2817cae210645dc$var$gridLayoutStyles}
  ${$f2817cae210645dc$var$entityAreaStyles}
  ${$f2817cae210645dc$var$iconStyles}
  ${$f2817cae210645dc$var$sensorLabelStyles}
  ${$f2817cae210645dc$var$statusEntityStyles}
  ${(0, $8b8d054bbcd343d6$export$e417a58d8f305947)}
  ${(0, $11405a6d664b459c$export$e8f30ede68e93366)}
`;



const $05178f191e044eb1$export$4368d992c4eafac0 = (config, ...args)=>{
    if ((0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'debug')) console.debug(...args);
};


var $30856da572fd852b$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
$30856da572fd852b$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


class $e4f1b26747081709$export$90a7a1e0555e0bc9 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $f2817cae210645dc$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        if (!$30856da572fd852b$exports(config, this._config)) {
            this.iconBackground = config.background?.options?.includes('icon_background') ?? false;
            this._config = config;
        }
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this._config, 'room-summary-card', 'set hass');
        const { roomInfo: roomInfo, roomEntity: roomEntity, sensors: sensors, image: image, isActive: isActive, flags: { occupied: occupied, dark: dark, hot: hot, humid: humid } } = (0, $77c10d542be06a8f$export$df764ae7d62abece)(hass, this._config);
        this.occupied = occupied;
        this.dark = dark;
        this.hot = hot;
        this.humid = humid;
        this.image = !!image;
        this._image = image;
        this._isActive = isActive;
        // Update states only if they've changed
        let shouldRender = false;
        if (!$30856da572fd852b$exports(roomInfo, this._roomInformation)) {
            this._roomInformation = roomInfo;
            shouldRender = true;
        }
        if (!$30856da572fd852b$exports(roomEntity, this._roomEntity)) {
            this._roomEntity = roomEntity;
            shouldRender = true;
        }
        if (!$30856da572fd852b$exports(sensors, this._sensors)) {
            this._sensors = sensors;
            shouldRender = true;
        }
        if (shouldRender || hass.formatEntityState !== this._hass?.formatEntityState) // normally we wouldn't need to update the hass object this way,
        // but since state-display is using the formatEntityState function
        // we need to ensure it is updated when the new function is available
        // this is a workaround and prevents the need to re-render the card many times
        // https://github.com/home-assistant/frontend/issues/25648
        this._hass = hass;
        else // update children who are subscribed
        (0, $9c83ab07519e6203$export$43835e9acf248a15)(this, 'hass-update', {
            hass: hass
        });
    }
    // card configuration
    static getConfigElement() {
        return document.createElement('room-summary-card-editor');
    }
    static async getStubConfig(hass) {
        // Get all area IDs and their friendly names
        const areas = Object.entries(hass.areas);
        // Find the first area that has matching entities
        const matchingArea = areas.find(([areaId, area])=>{
            const areaName = area.area_id.toLowerCase().replace(/\s+/g, '_');
            // Check if either entity exists for this area
            const hasLight = `light.${areaName}_light` in hass.entities;
            const hasFan = `switch.${areaName}_fan` in hass.entities;
            // Return true if either entity exists
            return hasLight || hasFan;
        });
        // Return the matching area ID or empty string if none found
        return {
            area: matchingArea ? matchingArea[0] : ''
        };
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this._config, 'room-summary-card', 'render');
        if (!this._hass) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const roomEntity = (0, $aae26e2a62e46297$export$6697a659ce63852)(this._hass, this._roomEntity, this._config, true, this._isActive, this.image, this.occupied);
        const cardStyle = (0, $2a931dbd84666c62$export$6675fe814017d7b1)(this._hass, this._config, this._roomEntity, this.occupied, this._image, this._isActive);
        const problems = (0, $aae26e2a62e46297$export$8093665c9ba8ead9)(this._hass, this._config, this._sensors);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-card style="${cardStyle}">
        <div class="grid">
          ${(0, $fd7591fa76c4f063$export$a80b3bd66acc52ff)(this, this._hass, this._roomInformation, this._roomEntity, this._config, this._sensors, this._isActive)}

          <!-- Room Icon -->
          ${roomEntity}

          <!-- Entities Container -->
          <entity-collection
            .config=${this._config}
            .hass=${this._hass}
          ></entity-collection>

          <!-- Problem Indicator -->
          ${problems}
        </div>
      </ha-card>
    `;
    }
    constructor(...args){
        super(...args), /**
   * Whether the room is considered active (for styling)
   */ this._isActive = false;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_roomInformation", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_roomEntity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_sensors", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_isActive", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "dark", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "hot", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "humid", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "image", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "occupied", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'icon-bg'
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "iconBackground", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_hass", void 0);






const $216640a6cb8d8606$export$19efda5681568302 = (superClass)=>{
    class HassUpdateClass extends superClass {
        connectedCallback() {
            super.connectedCallback();
            window.addEventListener('hass-update', this._boundHassUpdateHandler);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            window.removeEventListener('hass-update', this._boundHassUpdateHandler);
        }
        _handleHassUpdate(event) {
            const { detail: { hass: hass } } = event;
            this.hass = hass;
        }
        constructor(...args){
            super(...args), this._boundHassUpdateHandler = this._handleHassUpdate.bind(this);
        }
    }
    (0, $24c52f343453d62d$export$29e00dfd3077644b)([
        (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
            attribute: false
        })
    ], HassUpdateClass.prototype, "hass", void 0);
    return HassUpdateClass;
};




const $7a9f070414cbf86a$var$climateIcons = {
    auto: 'mdi:autorenew',
    cool: 'mdi:snowflake',
    heat: 'mdi:fire',
    dry: 'mdi:water',
    heat_cool: 'mdi:sun-snowflake',
    fan_only: 'mdi:fan',
    off: 'mdi:snowflake-off'
};
const $7a9f070414cbf86a$export$a2d3d3a06f345f20 = (hass, config)=>{
    // Define base entities for the area
    const baseEntities = [
        `light.${config.area}_light`,
        `switch.${config.area}_fan`
    ];
    const configEntities = config.entities || [];
    // Combine base and config entities unless fan is removed
    const entities = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'exclude_default_entities') ? configEntities : baseEntities.concat(configEntities);
    // Process and transform entities
    const states = entities.map((entity)=>{
        // Transform string format to entity config for convenience
        if (typeof entity === 'string') entity = {
            entity_id: entity
        };
        const state = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        if (!state) return undefined;
        const useClimateIcons = !(0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'skip_climate_styles') && state.domain === 'climate';
        // Create entity information with defaults and climate handling
        return {
            config: {
                tap_action: {
                    action: 'toggle'
                },
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                },
                ...entity
            },
            state: {
                ...state,
                attributes: {
                    icon: useClimateIcons ? $7a9f070414cbf86a$var$climateIcons[state.state] : undefined,
                    ...state.attributes
                }
            }
        };
    }).filter((entity)=>entity !== undefined);
    return states;
};







const $71b3bd8f3b21e0f2$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    aspect-ratio: 0.23 / 1;
    padding: 5px 5px 5px 0;
  }
`;



class $0fcae27d7768d7c7$export$b15c5e7ddecda86e extends (0, $216640a6cb8d8606$export$19efda5681568302)((0, $ab210b2da7b39b9d$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $71b3bd8f3b21e0f2$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'entity-collection', 'set hass');
        const states = (0, $7a9f070414cbf86a$export$a2d3d3a06f345f20)(hass, this.config);
        // Update entities only if they've changed
        if (!$30856da572fd852b$exports(states, this._entities)) this._entities = states;
        this._hass = hass;
    }
    render() {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'entity-collection', 'render');
        if (!this._hass || !this._entities) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const stateIcons = this._entities.map((entity)=>(0, $aae26e2a62e46297$export$6697a659ce63852)(this._hass, entity, this.config));
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      ${(0, $6fcbc68239868959$export$3703ea65b0ac4726)(this.config.styles?.entities)} ${stateIcons}
    `;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $0fcae27d7768d7c7$export$b15c5e7ddecda86e.prototype, "config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $0fcae27d7768d7c7$export$b15c5e7ddecda86e.prototype, "_entities", void 0);






/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_entity_name.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_device_name.ts
 */ const $b2fbeeb343141754$export$7cd00372ca4db95e = (device)=>(device.name_by_user ?? device.name)?.trim();


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_state_name.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_object_id.ts
 */ const $33487d6e848c1b8c$export$1f42443b32ee681a = (entityId)=>entityId.substring(entityId.indexOf('.') + 1);


const $b9ec87d71b7ef9b4$export$9a5b24b7a75b993d = (entityId, attributes)=>attributes.friendly_name === undefined ? (0, $33487d6e848c1b8c$export$1f42443b32ee681a)(entityId).replace(/_/g, ' ') : (attributes.friendly_name ?? '').toString();
const $b9ec87d71b7ef9b4$export$9616006ead40a64 = (stateObj)=>$b9ec87d71b7ef9b4$export$9a5b24b7a75b993d(stateObj.entity_id, stateObj.attributes);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/strip_prefix_from_entity_name.ts
 */ const $a1f5fb1c6f109766$var$SUFFIXES = [
    ' ',
    ': ',
    ' - '
];
const $a1f5fb1c6f109766$export$525f917b212a890 = (entityName, prefix)=>{
    const lowerCasedEntityName = entityName.toLowerCase();
    const lowerCasedPrefix = prefix.toLowerCase();
    for (const suffix of $a1f5fb1c6f109766$var$SUFFIXES){
        const lowerCasedPrefixWithSuffix = `${lowerCasedPrefix}${suffix}`;
        if (lowerCasedEntityName.startsWith(lowerCasedPrefixWithSuffix)) {
            const newName = entityName.substring(lowerCasedPrefixWithSuffix.length);
            if (newName.length) // If first word already has an upper case letter (e.g. from brand name)
            // leave as-is, otherwise capitalize the first word.
            return $a1f5fb1c6f109766$var$hasUpperCase(newName.substr(0, newName.indexOf(' '))) ? newName : newName[0]?.toUpperCase() + newName.slice(1);
        }
    }
    return undefined;
};
const $a1f5fb1c6f109766$var$hasUpperCase = (str)=>str.toLowerCase() !== str;


const $ef9a76e14f463d69$export$9daa015aff969d71 = (stateObj, hass)=>{
    const entry = hass.entities[stateObj.entity_id];
    if (!entry) // Fall back to state name if not in the entity registry (friendly name)
    return (0, $b9ec87d71b7ef9b4$export$9616006ead40a64)(stateObj);
    return $ef9a76e14f463d69$export$8c1ece05882a2b32(entry, hass);
};
const $ef9a76e14f463d69$export$8c1ece05882a2b32 = (entry, hass)=>{
    const name = entry.name || ('original_name' in entry ? entry.original_name : undefined);
    const device = entry.device_id ? hass.devices[entry.device_id] : undefined;
    if (!device) {
        if (name) return name;
        const stateObj = hass.states[entry.entity_id];
        if (stateObj) return (0, $b9ec87d71b7ef9b4$export$9616006ead40a64)(stateObj);
        return undefined;
    }
    const deviceName = (0, $b2fbeeb343141754$export$7cd00372ca4db95e)(device);
    // If the device name is the same as the entity name, consider empty entity name
    // this causes blank labels, not sure why HAS does this
    // if (deviceName === name) {
    //   return undefined;
    // }
    // Remove the device name from the entity name if it starts with it
    if (deviceName && name) return (0, $a1f5fb1c6f109766$export$525f917b212a890)(name, deviceName) ?? name;
    // slight fix - not the same in HAS
    return name ?? deviceName;
};





const $5b9da589bbdb01f3$export$5edf3a158822b217 = (hass, entity, isActive, image)=>{
    const styleData = (0, $5ee8d7c3f2d31d78$export$de2836153ec9a0b1)(hass, 'icon', entity, isActive);
    if (!styleData) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        '--icon-color': styleData.cssColor,
        '--icon-opacity': `var(--opacity-icon-${styleData.activeClass})`,
        '--background-color-icon': styleData.cssColor,
        '--background-opacity-icon': image ? '1' : `var(--opacity-icon-fill-${styleData.activeClass})`,
        '--state-color-icon-theme': styleData.themeOverride,
        '--background-image': image ? `url(${image})` : undefined
    });
};








const $d44c82e46d36dac5$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    width: var(--user-entity-icon-size, 100%);
  }

  /* Icon container styling */
  .icon {
    cursor: pointer;
    align-self: center;
    position: relative;
    display: flex;
    justify-content: center;
    aspect-ratio: 1 / 1;
  }

  .icon::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color-icon);
    opacity: var(--background-opacity-icon);
  }

  /* Icon background image styling */
  :host([image][icon-bg]) .icon::before {
    background-image:
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      var(--background-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  /* State icon styling */
  .icon ha-state-icon {
    width: 50%;
    color: var(--icon-color);
    opacity: var(--icon-opacity);
    --mdc-icon-size: 100%;
  }

  /* Entity label styling */
  .entity-label {
    position: absolute;
    font-size: 0.7em;
    text-align: center;
    overflow: hidden;
    margin-top: 75%;
  }

  .box {
    cursor: pointer;
    align-self: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* Occupancy styling - applies when the room is occupied */
  :host([room][occupied]) .icon::before {
    animation: var(--occupancy-icon-animation);
    background-color: var(--occupancy-icon-color, var(--background-color-icon));
    transition: all 0.3s ease;
  }

  /* Animation keyframes for occupancy indicator */
  @keyframes icon-breathe {
    0% {
      transform: scale(1);
      opacity: 0.1;
    }
    100% {
      transform: scale(1.1);
      opacity: 0.4;
    }
  }
`;



class $6a98a39b7895ac2a$export$8063c4212d705050 extends (0, $216640a6cb8d8606$export$19efda5681568302)((0, $ab210b2da7b39b9d$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $d44c82e46d36dac5$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ set config(config) {
        if (!$30856da572fd852b$exports(config, this._config)) {
            this.iconBackground = config.background?.options?.includes('icon_background') ?? false;
            this._showLabels = config.features?.includes('show_entity_labels') ?? false;
            // Calculate hiding logic for main room entity
            if (this.isMainRoomEntity) {
                this._hideRoomIcon = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'hide_room_icon');
                this._hideIconContent = config.background?.options?.includes('hide_icon_only') || false;
            }
            this._config = config;
        }
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        this._image = (0, $a64cd1666b27644b$export$47f3d980c4d9b226)(this.entity, 'use_entity_icon') ? undefined : this.entity?.state?.attributes?.entity_picture;
        if (this._image) {
            (0, $05178f191e044eb1$export$4368d992c4eafac0)(this._config, 'room-state-icon - image', this._image);
            this.image = true;
            this.iconBackground = true;
            this._hideIconContent = true;
        }
        this._hass = hass;
    }
    render() {
        const { state: state } = this.entity;
        if (!state) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        // If the icon should be completely hidden, return nothing
        if (this._hideRoomIcon) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div
        class="box"
        @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(this, this.entity)}
        .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(this.entity)}
      ></div>`;
        const thresholdResult = (0, $2cc9f817abd21598$export$76969a794fd1f893)(this.entity);
        const iconStyle = (0, $5b9da589bbdb01f3$export$5edf3a158822b217)(this._hass, this.entity, this.isActive, this._image);
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this._config, 'room-state-icon - iconStyle', iconStyle);
        const iconStyles = {
            ...this._config?.styles?.entity_icon,
            ...thresholdResult?.styles
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      ${(0, $6fcbc68239868959$export$3703ea65b0ac4726)(iconStyles)}
      <div
        class="icon"
        style=${iconStyle}
        @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(this, this.entity)}
        .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(this.entity)}
      >
        ${this._hideIconContent ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-state-icon
              .hass=${this._hass}
              .stateObj=${state}
              .icon=${thresholdResult?.icon || this.entity.config.icon}
            ></ha-state-icon>`}
        ${this._showLabels ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="entity-label">
              ${(0, $ef9a76e14f463d69$export$9daa015aff969d71)(state, this._hass)}
            </div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
      </div>
    `;
    }
    constructor(...args){
        super(...args), /**
   * Whether this is the main room entity (for applying room-specific hiding logic)
   */ this.isMainRoomEntity = false;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "_hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "_config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "_showLabels", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "_hideRoomIcon", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "_hideIconContent", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "entity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'room'
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "isMainRoomEntity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "image", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true,
        attribute: 'icon-bg'
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "iconBackground", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "isActive", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $6a98a39b7895ac2a$export$8063c4212d705050.prototype, "occupied", void 0);






var $577f798ca6e25a3f$exports = {};
'use strict';

const $577f798ca6e25a3f$var$memoizeOne = (fn, isEqual = $30856da572fd852b$exports, { cachePromiseRejection: cachePromiseRejection = false } = {})=>{
    if (!fn) throw new TypeError('You have to provide a `fn` function.');
    let calledOnce = false;
    let oldArgs;
    let lastResult;
    return async (...newArgs)=>{
        if (calledOnce && isEqual(newArgs, oldArgs)) return lastResult;
        lastResult = fn(...newArgs);
        if (!cachePromiseRejection && lastResult.catch) lastResult.catch(()=>calledOnce = false);
        calledOnce = true;
        oldArgs = newArgs;
        return lastResult;
    };
};
$577f798ca6e25a3f$exports = $577f798ca6e25a3f$var$memoizeOne;


const $39062278d691bfa3$export$306d3b376c79075a = (0, (/*@__PURE__*/$parcel$interopDefault($577f798ca6e25a3f$exports)))((hass)=>hass.callWS({
        type: 'frontend/get_icons',
        category: 'entity_component'
    }), ()=>true);


/**
 * Formats a number with appropriate decimal places
 */ const $aaed684be42fb62e$var$formatNumber = (value, maxDecimals = 1)=>{
    return value.toFixed(maxDecimals).replace(/\.?0+$/, '');
};
/**
 * Adds appropriate spacing before unit if needed
 */ const $aaed684be42fb62e$var$blankBeforeUnit = (unit)=>{
    // Units that don't need a space (like % or °)
    const noSpaceUnits = [
        '%',
        "\xb0C",
        "\xb0F"
    ];
    return noSpaceUnits.some((u)=>unit.includes(u)) ? '' : ' ';
};
const $aaed684be42fb62e$export$6b5316c1eb8ef7e7 = (averagedSensor)=>`${$aaed684be42fb62e$var$formatNumber(averagedSensor.average)}${$aaed684be42fb62e$var$blankBeforeUnit(averagedSensor.uom)}${averagedSensor.uom}`;


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/icon.ts
 */ const $167f96613e7c28a7$export$733ca6fe4b07869c = {
    air_quality: 'mdi:air-filter',
    alert: 'mdi:alert',
    automation: 'mdi:robot',
    calendar: 'mdi:calendar',
    climate: 'mdi:thermostat',
    configurator: 'mdi:cog',
    conversation: 'mdi:forum-outline',
    counter: 'mdi:counter',
    date: 'mdi:calendar',
    datetime: 'mdi:calendar-clock',
    demo: 'mdi:home-assistant',
    device_tracker: 'mdi:account',
    google_assistant: 'mdi:google-assistant',
    group: 'mdi:google-circles-communities',
    homeassistant: 'mdi:home-assistant',
    homekit: 'mdi:home-automation',
    image_processing: 'mdi:image-filter-frames',
    image: 'mdi:image',
    input_boolean: 'mdi:toggle-switch',
    input_button: 'mdi:button-pointer',
    input_datetime: 'mdi:calendar-clock',
    input_number: 'mdi:ray-vertex',
    input_select: 'mdi:format-list-bulleted',
    input_text: 'mdi:form-textbox',
    lawn_mower: 'mdi:robot-mower',
    light: 'mdi:lightbulb',
    notify: 'mdi:comment-alert',
    number: 'mdi:ray-vertex',
    persistent_notification: 'mdi:bell',
    person: 'mdi:account',
    plant: 'mdi:flower',
    proximity: 'mdi:apple-safari',
    remote: 'mdi:remote',
    scene: 'mdi:palette',
    schedule: 'mdi:calendar-clock',
    script: 'mdi:script-text',
    select: 'mdi:format-list-bulleted',
    sensor: 'mdi:eye',
    simple_alarm: 'mdi:bell',
    siren: 'mdi:bullhorn',
    stt: 'mdi:microphone-message',
    sun: 'mdi:white-balance-sunny',
    text: 'mdi:form-textbox',
    time: 'mdi:clock',
    timer: 'mdi:timer-outline',
    todo: 'mdi:clipboard-list',
    tts: 'mdi:speaker-message',
    vacuum: 'mdi:robot-vacuum',
    wake_word: 'mdi:chat-sleep',
    weather: 'mdi:weather-partly-cloudy',
    zone: 'mdi:map-marker-radius'
};









/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $311430566e21b48b$var$t } = (0, $f58f44579a4747ac$export$8613d1ca9052b22e), $311430566e21b48b$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $311430566e21b48b$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $311430566e21b48b$export$6b6d145ec2a44ca9 = (o, t)=>void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, $311430566e21b48b$export$6a0e8de894d2fcca = (o)=>null != o?._$litType$?.h, $311430566e21b48b$export$2f448fec17d50a3e = (o)=>void 0 !== o?._$litDirective$, $311430566e21b48b$export$f28e31de6a6eaf32 = (o)=>o?._$litDirective$, $311430566e21b48b$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $311430566e21b48b$var$s = ()=>document.createComment(""), $311430566e21b48b$export$291b2338ad9b0b30 = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore($311430566e21b48b$var$s(), l), c = e.insertBefore($311430566e21b48b$var$s(), l);
        n = new $311430566e21b48b$var$t(i, c, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, c = i !== o;
        if (c) {
            let t;
            n._$AQ?.(o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
        }
        if (t !== l || c) {
            let o = n._$AA;
            for(; o !== t;){
                const t = o.nextSibling;
                e.insertBefore(o, l), o = t;
            }
        }
    }
    return n;
}, $311430566e21b48b$export$cb8bf9562088e9f4 = (o, t, i = o)=>(o._$AI(t, i), o), $311430566e21b48b$var$u = {}, $311430566e21b48b$export$ea70d9dd5965b1c8 = (o, t = $311430566e21b48b$var$u)=>o._$AH = t, $311430566e21b48b$export$59e9bce518cde500 = (o)=>o._$AH, $311430566e21b48b$export$3133b3144bbba267 = (o)=>{
    o._$AP?.(!1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o = t.nextSibling;
        t.remove(), t = o;
    }
}, $311430566e21b48b$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1e333afec87b6405$var$s = (i, t)=>{
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)i._$AO?.(t, !1), $1e333afec87b6405$var$s(i, t);
    return !0;
}, $1e333afec87b6405$var$o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === e?.size);
}, $1e333afec87b6405$var$r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), $1e333afec87b6405$var$c(t);
    }
};
function $1e333afec87b6405$var$h(i) {
    void 0 !== this._$AN ? ($1e333afec87b6405$var$o(this), this._$AM = i, $1e333afec87b6405$var$r(this)) : this._$AM = i;
}
function $1e333afec87b6405$var$n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)$1e333afec87b6405$var$s(r[i], !1), $1e333afec87b6405$var$o(r[i]);
            else null != r && ($1e333afec87b6405$var$s(r, !1), $1e333afec87b6405$var$o(r));
        } else $1e333afec87b6405$var$s(this, i);
    }
}
const $1e333afec87b6405$var$c = (i)=>{
    i.type == (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD && (i._$AP ??= $1e333afec87b6405$var$n, i._$AQ ??= $1e333afec87b6405$var$h);
};
class $1e333afec87b6405$export$7d025501802325e extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), $1e333afec87b6405$var$r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && ($1e333afec87b6405$var$s(this, i), $1e333afec87b6405$var$o(this));
    }
    setValue(t) {
        if ((0, $311430566e21b48b$export$7f431ad0fff82fd9)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}


/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $489699fe18200827$export$74673a32c6041f3e = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class $489699fe18200827$export$71341b9b69479007 {
    constructor(t){
        this.G = t;
    }
    disconnect() {
        this.G = void 0;
    }
    reconnect(t) {
        this.G = t;
    }
    deref() {
        return this.G;
    }
}
class $489699fe18200827$export$193ea5a420bb5c41 {
    constructor(){
        this.Y = void 0, this.Z = void 0;
    }
    get() {
        return this.Y;
    }
    pause() {
        this.Y ??= new Promise((t)=>this.Z = t);
    }
    resume() {
        this.Z?.(), this.Y = this.Z = void 0;
    }
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $946b345e72533d5d$var$n = (t)=>!(0, $311430566e21b48b$export$c3825b437cbdea5c)(t) && "function" == typeof t.then, $946b345e72533d5d$var$h = 1073741823;
class $946b345e72533d5d$export$51c6edf8ee19b71a extends (0, $1e333afec87b6405$export$7d025501802325e) {
    constructor(){
        super(...arguments), this._$Cwt = $946b345e72533d5d$var$h, this._$Cbt = [], this._$CK = new (0, $489699fe18200827$export$71341b9b69479007)(this), this._$CX = new (0, $489699fe18200827$export$193ea5a420bb5c41);
    }
    render(...s) {
        return s.find((t)=>!$946b345e72533d5d$var$n(t)) ?? (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8);
    }
    update(s, i) {
        const e = this._$Cbt;
        let r = e.length;
        this._$Cbt = i;
        const o = this._$CK, c = this._$CX;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$Cwt); t++){
            const s = i[t];
            if (!$946b345e72533d5d$var$n(s)) return this._$Cwt = t, s;
            t < r && s === e[t] || (this._$Cwt = $946b345e72533d5d$var$h, r = 0, Promise.resolve(s).then(async (t)=>{
                for(; c.get();)await c.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const e = i._$Cbt.indexOf(s);
                    e > -1 && e < i._$Cwt && (i._$Cwt = e, i.setValue(t));
                }
            }));
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
}
const $946b345e72533d5d$export$a40009bd2c363351 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($946b345e72533d5d$export$51c6edf8ee19b71a);





const $947fe16f0fc04af7$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    opacity: var(--text-opacity-theme, 0.4);
    margin-left: -2%;
    margin-top: 1%;
    position: relative;
    z-index: 2; /* Ensure sensor collection appears above room entity */
    width: fit-content; /* don't cover other elements plz */
  }

  :host([hide-icons]) {
    column-gap: 8px;
    margin-left: 0px;
  }

  :host([layout='stacked']) {
    flex-direction: column;
  }

  :host([layout='bottom']) {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }

  .sensor {
    display: flex;
    align-items: center;
    gap: 4px;
    --mdc-icon-size: var(--user-sensor-icon-size, 20px);
    cursor: pointer;
    position: relative;
    z-index: 1; /* Ensure sensors are above room entity and create stacking context for ::before */
    border-radius: 6px;
    transition:
      transform 150ms ease,
      background-color 150ms ease,
      box-shadow 150ms ease,
      opacity 150ms ease;
  }

  /* Soft background hover using theme icon background color */
  .sensor::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: var(--background-color-icon);
    opacity: 0;
    transform: scale(0.96);
    transition: inherit;
    z-index: -1;
  }

  .sensor:hover {
    transform: translateY(-1px);
  }

  .sensor:hover::before {
    opacity: 0.15;
    transform: scale(1);
  }

  .sensor ha-state-icon,
  .sensor ha-icon {
    flex-shrink: 0;
    transition:
      transform 150ms ease,
      filter 150ms ease,
      opacity 150ms ease;
  }

  .sensor:hover ha-state-icon,
  .sensor:hover ha-icon {
    transform: scale(1.2);
  }
`;


class $caca5106d54ff8e3$export$265e5e10b1eff6c6 extends (0, $216640a6cb8d8606$export$19efda5681568302)((0, $ab210b2da7b39b9d$export$3f2f9f5909897157)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $947fe16f0fc04af7$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ // @ts-ignore
    set hass(hass) {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'set hass');
        this._hass = hass;
        this.hide = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(this.config, 'hide_sensor_icons');
        this._hideLabels = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(this.config, 'hide_sensor_labels');
        this.layout = this.config.sensor_layout ?? 'default';
    }
    render() {
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'render');
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'config', this.config);
        (0, $05178f191e044eb1$export$4368d992c4eafac0)(this.config, 'sensor-collection', 'sensors', this.sensors);
        if (!this._hass || (0, $a64cd1666b27644b$export$805ddaeeece0413e)(this.config, 'hide_climate_label')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      ${(0, $6fcbc68239868959$export$3703ea65b0ac4726)(this.config.styles?.sensors)}
      ${this.sensors.averaged.map((sensor)=>this.renderSensor(sensor, true))}
      ${this.sensors.individual.map((sensor)=>this.renderSensor(sensor, false))}
    `;
    }
    renderSensor(sensor, isAveraged) {
        if (isAveraged) {
            const s = sensor;
            const isMultiple = s.states.length > 1;
            if (isMultiple) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
          <div class="sensor">
            ${this.renderMultiIcon(s)}
            ${this._hideLabels ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : (0, $aaed684be42fb62e$export$6b5316c1eb8ef7e7)(s)}
          </div>
        `;
            // Use the first state from averaged sensor
            const state = s.states[0];
            return this.renderSingleSensor(state);
        }
        // Use the sensor directly as EntityState
        return this.renderSingleSensor(sensor);
    }
    renderSingleSensor(state) {
        const info = {
            config: {
                entity_id: state.entity_id,
                tap_action: {
                    action: 'more-info'
                }
            },
            state: state
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div
        class="sensor"
        @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(this, info)}
        .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(info)}
      >
        ${this.renderStateIcon(state)}
        ${this._hideLabels ? (0, $f58f44579a4747ac$export$45b790e32b2810ee) : (0, $1ed74ce23f0ef067$export$c18c768bbe3223b7)(this._hass, state)}
      </div>
    `;
    }
    renderMultiIcon(sensor) {
        if (this.hide) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const iconPromise = (0, $39062278d691bfa3$export$306d3b376c79075a)(this._hass).then((icons)=>{
            const icon = icons.resources?.[sensor.domain]?.[sensor.device_class]?.default;
            if (icon) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon .icon=${icon}></ha-icon>`;
            const fallback = (0, $167f96613e7c28a7$export$733ca6fe4b07869c)[sensor.domain];
            return fallback ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon .icon=${fallback}></ha-icon>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee);
        });
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${(0, $946b345e72533d5d$export$a40009bd2c363351)(iconPromise)}`;
    }
    renderStateIcon(state) {
        if (this.hide || !state) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-state-icon
      .hass=${this._hass}
      .stateObj=${state}
    ></ha-state-icon>`;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $caca5106d54ff8e3$export$265e5e10b1eff6c6.prototype, "config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $caca5106d54ff8e3$export$265e5e10b1eff6c6.prototype, "sensors", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $caca5106d54ff8e3$export$265e5e10b1eff6c6.prototype, "hide", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: String,
        reflect: true
    })
], $caca5106d54ff8e3$export$265e5e10b1eff6c6.prototype, "layout", void 0);




/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/sensor.ts
 */ let $2777c354bcb8374f$var$sensorNumericDeviceClassesCache;
const $2777c354bcb8374f$export$932b0589381997d6 = async (hass)=>{
    if ($2777c354bcb8374f$var$sensorNumericDeviceClassesCache) return $2777c354bcb8374f$var$sensorNumericDeviceClassesCache;
    $2777c354bcb8374f$var$sensorNumericDeviceClassesCache = hass.callWS({
        type: 'sensor/numeric_device_classes'
    });
    return $2777c354bcb8374f$var$sensorNumericDeviceClassesCache;
};


const $ad31ef27732cde8d$export$2d8180803f50fc5 = {
    name: 'area',
    label: 'Area',
    required: true,
    selector: {
        area: {}
    }
};
const $ad31ef27732cde8d$export$d1213e82613ff4df = {
    name: 'content',
    label: 'Content',
    type: 'expandable',
    flatten: true,
    icon: 'mdi:text-short',
    schema: [
        {
            name: 'area_name',
            label: 'Area name',
            required: false,
            selector: {
                text: {}
            }
        }
    ]
};
const $ad31ef27732cde8d$export$d6a5c11f04f75862 = {
    name: 'features',
    label: 'Features',
    type: 'expandable',
    flatten: true,
    icon: 'mdi:list-box',
    schema: [
        {
            name: 'features',
            label: 'Features',
            required: false,
            selector: {
                select: {
                    multiple: true,
                    mode: 'list',
                    options: [
                        {
                            label: 'Hide Area Stats',
                            value: 'hide_area_stats'
                        },
                        {
                            label: 'Hide Sensors',
                            value: 'hide_climate_label'
                        },
                        {
                            label: 'Hide Room Icon',
                            value: 'hide_room_icon'
                        },
                        {
                            label: 'Hide Sensor icons',
                            value: 'hide_sensor_icons'
                        },
                        {
                            label: 'Hide Sensor labels',
                            value: 'hide_sensor_labels'
                        },
                        {
                            label: 'Exclude Default Entities',
                            value: 'exclude_default_entities'
                        },
                        {
                            label: 'Skip Climate Styles',
                            value: 'skip_climate_styles'
                        },
                        {
                            label: 'Skip Card Background Styles',
                            value: 'skip_entity_styles'
                        },
                        {
                            label: 'Show Entity Labels',
                            value: 'show_entity_labels'
                        },
                        {
                            label: 'Multi-Light Background',
                            value: 'multi_light_background'
                        }
                    ]
                }
            }
        }
    ]
};
const $ad31ef27732cde8d$export$76fcdb2ea14db822 = {
    name: 'interactions',
    label: 'Interactions',
    type: 'expandable',
    flatten: true,
    icon: 'mdi:gesture-tap',
    schema: [
        {
            name: 'navigate',
            label: 'Navigate path when card tapped',
            required: false,
            selector: {
                navigation: {}
            }
        }
    ]
};
const $ad31ef27732cde8d$export$f7d3053946bae238 = {
    name: 'occupancy',
    label: 'Occupancy & Presence Detection',
    type: 'expandable',
    icon: 'mdi:motion-sensor',
    schema: [
        {
            name: 'entities',
            label: 'Motion/Occupancy/Presence Sensors',
            required: true,
            selector: {
                entity: {
                    multiple: true,
                    filter: {
                        domain: [
                            'binary_sensor'
                        ],
                        device_class: [
                            'motion',
                            'occupancy',
                            'presence'
                        ]
                    }
                }
            }
        },
        {
            name: 'card_border_color',
            label: 'Card Border Color (Occupied)',
            required: false,
            selector: {
                text: {
                    type: 'color'
                }
            }
        },
        {
            name: 'icon_color',
            label: 'Icon Background Color (Occupied)',
            required: false,
            selector: {
                text: {
                    type: 'color'
                }
            }
        },
        {
            name: 'options',
            label: 'Options',
            required: false,
            selector: {
                select: {
                    multiple: true,
                    mode: 'list',
                    options: [
                        {
                            label: 'Disable Card Border',
                            value: 'disabled_card_styles'
                        },
                        {
                            label: 'Disable Card Border Animations',
                            value: 'disabled_card_styles_animation'
                        },
                        {
                            label: 'Disable Icon Color',
                            value: 'disable_icon_styles'
                        },
                        {
                            label: 'Disable Icon Animations',
                            value: 'disable_icon_animation'
                        }
                    ]
                }
            }
        }
    ]
};


const $30a2f8c2b7ac40e2$var$areaEntities = (hass, area)=>{
    return Object.values(hass.entities).filter((entity)=>{
        return entity.area_id === area || entity.device_id && hass.devices[entity.device_id]?.area_id === area;
    }).map((entity)=>entity.entity_id);
};
const $30a2f8c2b7ac40e2$var$deviceClasses = async (hass, area)=>{
    const entities = Object.values(hass.entities).filter((entity)=>{
        const entityDomain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(entity.entity_id);
        return entityDomain === 'sensor' && (entity.area_id === area || entity.device_id && hass.devices[entity.device_id]?.area_id === area);
    });
    const numericDeviceClasses = await (0, $2777c354bcb8374f$export$932b0589381997d6)(hass);
    const classes = entities.map((entity)=>hass.states[entity.entity_id]?.attributes.device_class ?? '').filter((c)=>c && numericDeviceClasses.numeric_device_classes.includes(c));
    return [
        ...new Set(classes)
    ];
};
const $30a2f8c2b7ac40e2$var$schemeStyles = (entities)=>{
    return {
        name: 'styles',
        label: 'Styles',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:brush-variant',
        schema: [
            {
                name: 'sensor_layout',
                label: 'Sensor Layout',
                required: false,
                selector: {
                    select: {
                        mode: 'dropdown',
                        options: [
                            {
                                label: 'Default (in label area)',
                                value: 'default'
                            },
                            {
                                label: 'Bottom',
                                value: 'bottom'
                            },
                            {
                                label: 'Vertical Stack',
                                value: 'stacked'
                            }
                        ]
                    }
                }
            },
            {
                name: 'background',
                label: 'Background',
                type: 'expandable',
                icon: 'mdi:format-paint',
                schema: [
                    {
                        name: 'image',
                        label: 'Background Image',
                        selector: {
                            image: {}
                        }
                    },
                    {
                        name: 'image_entity',
                        label: 'Background Image Entity',
                        selector: {
                            entity: {
                                filter: {
                                    domain: [
                                        'image',
                                        'person'
                                    ]
                                }
                            }
                        }
                    },
                    {
                        name: 'opacity',
                        label: 'Background Opacity',
                        required: false,
                        selector: {
                            number: {
                                mode: 'slider',
                                unit_of_measurement: '%',
                                min: 0,
                                max: 100
                            }
                        }
                    },
                    {
                        name: 'options',
                        label: 'Options',
                        selector: {
                            select: {
                                multiple: true,
                                mode: 'list',
                                options: [
                                    {
                                        label: 'Disable Background Image',
                                        value: 'disable'
                                    },
                                    {
                                        label: 'Icon Background',
                                        value: 'icon_background'
                                    },
                                    {
                                        label: 'Hide Icon Only',
                                        value: 'hide_icon_only'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'thresholds',
                label: 'Thresholds',
                type: 'expandable',
                icon: 'mdi:thermometer-alert',
                schema: [
                    {
                        name: 'temperature',
                        label: 'Temperature threshold',
                        required: false,
                        selector: {
                            number: {
                                mode: 'box',
                                unit_of_measurement: "\xb0"
                            }
                        }
                    },
                    {
                        name: 'humidity',
                        label: 'Humidity threshold',
                        required: false,
                        selector: {
                            number: {
                                mode: 'slider',
                                unit_of_measurement: '%',
                                min: 0,
                                max: 100
                            }
                        }
                    },
                    {
                        name: 'mold',
                        label: 'Mold threshold',
                        required: false,
                        selector: {
                            number: {
                                mode: 'slider',
                                unit_of_measurement: '%',
                                min: 0,
                                max: 100
                            }
                        }
                    },
                    {
                        name: 'temperature_entity',
                        label: 'Temperature Entity',
                        required: false,
                        selector: {
                            entity: {
                                multiple: false,
                                include_entities: entities,
                                filter: {
                                    device_class: 'temperature'
                                }
                            }
                        }
                    },
                    {
                        name: 'temperature_operator',
                        label: 'Temperature Operator',
                        required: false,
                        selector: {
                            select: {
                                mode: 'dropdown',
                                options: [
                                    {
                                        value: 'gt',
                                        label: 'Greater than (>)'
                                    },
                                    {
                                        value: 'gte',
                                        label: "Greater than or equal (\u2265)"
                                    },
                                    {
                                        value: 'lt',
                                        label: 'Less than (<)'
                                    },
                                    {
                                        value: 'lte',
                                        label: "Less than or equal (\u2264)"
                                    },
                                    {
                                        value: 'eq',
                                        label: 'Equal (=)'
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: 'humidity_entity',
                        label: 'Humidity Entity',
                        required: false,
                        selector: {
                            entity: {
                                multiple: false,
                                include_entities: entities,
                                filter: {
                                    device_class: 'humidity'
                                }
                            }
                        }
                    },
                    {
                        name: 'humidity_operator',
                        label: 'Humidity Operator',
                        required: false,
                        selector: {
                            select: {
                                mode: 'dropdown',
                                options: [
                                    {
                                        value: 'gt',
                                        label: 'Greater than (>)'
                                    },
                                    {
                                        value: 'gte',
                                        label: "Greater than or equal (\u2265)"
                                    },
                                    {
                                        value: 'lt',
                                        label: 'Less than (<)'
                                    },
                                    {
                                        value: 'lte',
                                        label: "Less than or equal (\u2264)"
                                    },
                                    {
                                        value: 'eq',
                                        label: 'Equal (=)'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'styles',
                label: 'Your CSS Styles',
                type: 'expandable',
                icon: 'mdi:spray',
                schema: [
                    {
                        name: 'card',
                        label: 'Card Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'entities',
                        label: 'Entities Container Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'entity_icon',
                        label: 'Entity Icon Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'sensors',
                        label: 'Sensor Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'stats',
                        label: 'Stats Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'title',
                        label: 'Title Styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    }
                ]
            }
        ]
    };
};
const $30a2f8c2b7ac40e2$export$19a621270f26273c = async (hass, area)=>{
    const sensorClasses = await $30a2f8c2b7ac40e2$var$deviceClasses(hass, area);
    const entities = $30a2f8c2b7ac40e2$var$areaEntities(hass, area);
    return [
        (0, $ad31ef27732cde8d$export$2d8180803f50fc5),
        (0, $ad31ef27732cde8d$export$d1213e82613ff4df),
        {
            name: 'entities',
            label: 'Entities',
            type: 'expandable',
            flatten: true,
            icon: 'mdi:devices',
            schema: [
                {
                    name: 'entity',
                    label: 'Main room entity',
                    required: false,
                    selector: {
                        entity: {
                            multiple: false,
                            include_entities: entities
                        }
                    }
                },
                {
                    name: 'entities',
                    label: 'Area side entities',
                    required: false,
                    selector: {
                        entity: {
                            multiple: true,
                            include_entities: entities
                        }
                    }
                },
                {
                    name: 'sensors',
                    label: 'Individual sensor entities',
                    required: false,
                    selector: {
                        entity: {
                            multiple: true
                        }
                    }
                },
                {
                    name: 'sensor_classes',
                    label: 'Sensor classes',
                    selector: {
                        select: {
                            reorder: true,
                            multiple: true,
                            custom_value: true,
                            options: sensorClasses
                        }
                    }
                },
                {
                    name: 'lights',
                    label: 'Light entities (optional for multi-light background)',
                    required: false,
                    selector: {
                        entity: {
                            multiple: true,
                            include_entities: entities,
                            filter: {
                                domain: [
                                    'light',
                                    'switch'
                                ]
                            }
                        }
                    }
                }
            ]
        },
        (0, $ad31ef27732cde8d$export$f7d3053946bae238),
        (0, $ad31ef27732cde8d$export$d6a5c11f04f75862),
        $30a2f8c2b7ac40e2$var$schemeStyles(entities),
        (0, $ad31ef27732cde8d$export$76fcdb2ea14db822)
    ];
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1dfff43fc77cdecb$export$61db76a97f26b7e1 = {
    INITIAL: 0,
    PENDING: 1,
    COMPLETE: 2,
    ERROR: 3
}, $1dfff43fc77cdecb$export$d4c72bab9d6cc13a = Symbol();
class $1dfff43fc77cdecb$export$2dea7024bcdd7731 {
    get taskComplete() {
        return this.t || (1 === this.i ? this.t = new Promise((t, s)=>{
            this.o = t, this.h = s;
        }) : 3 === this.i ? this.t = Promise.reject(this.l) : this.t = Promise.resolve(this.u)), this.t;
    }
    constructor(t, s, i){
        this.p = 0, this.i = 0, (this._ = t).addController(this);
        const h = "object" == typeof s ? s : {
            task: s,
            args: i
        };
        this.v = h.task, this.j = h.args, this.m = h.argsEqual ?? $1dfff43fc77cdecb$export$41b40a0c6412e2a2, this.k = h.onComplete, this.A = h.onError, this.autoRun = h.autoRun ?? !0, "initialValue" in h && (this.u = h.initialValue, this.i = 2, this.O = this.T?.());
    }
    hostUpdate() {
        !0 === this.autoRun && this.S();
    }
    hostUpdated() {
        "afterUpdate" === this.autoRun && this.S();
    }
    T() {
        if (void 0 === this.j) return;
        const t = this.j();
        if (!Array.isArray(t)) throw Error("The args function must return an array");
        return t;
    }
    async S() {
        const t = this.T(), s = this.O;
        this.O = t, t === s || void 0 === t || void 0 !== s && this.m(s, t) || await this.run(t);
    }
    async run(t) {
        let s, h;
        t ??= this.T(), this.O = t, 1 === this.i ? this.q?.abort() : (this.t = void 0, this.o = void 0, this.h = void 0), this.i = 1, "afterUpdate" === this.autoRun ? queueMicrotask(()=>this._.requestUpdate()) : this._.requestUpdate();
        const r = ++this.p;
        this.q = new AbortController;
        let e = !1;
        try {
            s = await this.v(t, {
                signal: this.q.signal
            });
        } catch (t) {
            e = !0, h = t;
        }
        if (this.p === r) {
            if (s === $1dfff43fc77cdecb$export$d4c72bab9d6cc13a) this.i = 0;
            else {
                if (!1 === e) {
                    try {
                        this.k?.(s);
                    } catch  {}
                    this.i = 2, this.o?.(s);
                } else {
                    try {
                        this.A?.(h);
                    } catch  {}
                    this.i = 3, this.h?.(h);
                }
                this.u = s, this.l = h;
            }
            this._.requestUpdate();
        }
    }
    abort(t) {
        1 === this.i && this.q?.abort(t);
    }
    get value() {
        return this.u;
    }
    get error() {
        return this.l;
    }
    get status() {
        return this.i;
    }
    render(t) {
        switch(this.i){
            case 0:
                return t.initial?.();
            case 1:
                return t.pending?.();
            case 2:
                return t.complete?.(this.value);
            case 3:
                return t.error?.(this.error);
            default:
                throw Error("Unexpected status: " + this.i);
        }
    }
}
const $1dfff43fc77cdecb$export$41b40a0c6412e2a2 = (s, i)=>s === i || s.length === i.length && s.every((s, h)=>!(0, $19fe8e3abedf4df0$export$53a6892c50694894)(s, i[h]));






class $b642db848cc622aa$export$be1ca41262ce011e extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    /**
   * renders the lit element card
   * @returns The rendered HTML template
   */ render() {
        if (!this.hass || !this._config) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return this._getEntitiesTask.render({
            initial: ()=>(0, $f58f44579a4747ac$export$45b790e32b2810ee),
            pending: ()=>(0, $f58f44579a4747ac$export$45b790e32b2810ee),
            complete: (value)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${value}
          .computeLabel=${(s)=>s.label}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `,
            error: (error)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${error}`
        });
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        const config = ev.detail.value;
        // Clean default values
        if (config.sensor_layout === 'default') delete config.sensor_layout;
        // Clean up empty arrays
        this._cleanEmptyArrays(config, 'features');
        this._cleanEmptyArrays(config, 'entities');
        this._cleanEmptyArrays(config, 'problem_entities');
        this._cleanEmptyArrays(config, 'sensor_classes');
        // Clean nested objects
        this._cleanEmptyProps(config, 'background');
        this._cleanEmptyProps(config, 'thresholds');
        this._cleanEmptyProps(config, 'occupancy');
        // @ts-ignore
        (0, $9c83ab07519e6203$export$43835e9acf248a15)(this, 'config-changed', {
            config: config
        });
    }
    _cleanEmptyArrays(config, key) {
        const arr = config[key];
        if (Array.isArray(arr) && !arr.length) delete config[key];
    }
    _cleanEmptyProps(config, key) {
        const obj = config[key];
        if (!obj || typeof obj !== 'object') return;
        for (const k of Object.keys(obj)){
            !obj[k] && delete obj[k];
            this._cleanEmptyArrays(obj, k);
        }
        if (!Object.keys(obj).length) delete config[key];
    }
    constructor(...args){
        super(...args), /**
   * Task that fetches the entities asynchronously
   * Uses the Home Assistant web sockets Promise
   */ this._getEntitiesTask = new (0, $1dfff43fc77cdecb$export$2dea7024bcdd7731)(this, {
            task: async ([area])=>await (0, $30a2f8c2b7ac40e2$export$19a621270f26273c)(this.hass, area),
            args: ()=>[
                    this._config?.area
                ]
        });
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $b642db848cc622aa$export$be1ca41262ce011e.prototype, "_config", void 0);


var $b06602ab53bd58a3$exports = {};
$b06602ab53bd58a3$exports = JSON.parse("{\"name\":\"room-summary-card\",\"version\":\"0.42.0\",\"author\":\"Patrick Masters\",\"license\":\"ISC\",\"description\":\"Custom card Home Assistant which can show a summary of room entities.\",\"source\":\"src/index.ts\",\"module\":\"dist/room-summary-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\",\"format\":\"prettier --write .\",\"test\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha\",\"test:coverage\":\"nyc npm run test\",\"test:watch\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha --watch\",\"update\":\"npx npm-check-updates -u && yarn install\"},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@open-wc/testing\":\"^4.0.0\",\"@parcel/transformer-inline-string\":\"^2.16.0\",\"@testing-library/dom\":\"^10.4.1\",\"@trivago/prettier-plugin-sort-imports\":\"^5.2.2\",\"@types/chai\":\"^5.2.3\",\"@types/jsdom\":\"^27.0.0\",\"@types/mocha\":\"^10.0.10\",\"@types/sinon\":\"^17.0.4\",\"chai\":\"^6.2.0\",\"jsdom\":\"^27.0.1\",\"mocha\":\"^11.7.4\",\"nyc\":\"^17.1.0\",\"parcel\":\"^2.16.0\",\"prettier\":\"3.6.2\",\"prettier-plugin-organize-imports\":\"^4.3.0\",\"proxyquire\":\"^2.1.3\",\"sinon\":\"^21.0.0\",\"ts-node\":\"^10.9.2\",\"tsconfig-paths\":\"^4.2.0\",\"typescript\":\"^5.9.3\"},\"dependencies\":{\"@lit/task\":\"^1.0.3\",\"async-memoize-one\":\"^1.1.9\",\"fast-deep-equal\":\"^3.1.3\",\"lit\":\"^3.3.1\",\"memoize-one\":\"^6.0.0\"}}");


// Register the custom element with the browser
customElements.define('room-summary-card', (0, $e4f1b26747081709$export$90a7a1e0555e0bc9));
customElements.define('room-summary-card-editor', (0, $b642db848cc622aa$export$be1ca41262ce011e));
customElements.define('sensor-collection', (0, $caca5106d54ff8e3$export$265e5e10b1eff6c6));
customElements.define('entity-collection', (0, $0fcae27d7768d7c7$export$b15c5e7ddecda86e));
customElements.define('room-state-icon', (0, $6a98a39b7895ac2a$export$8063c4212d705050));
// Ensure the customCards array exists on the window object
window.customCards = window.customCards || [];
// Register the card with Home Assistant's custom card registry
window.customCards.push({
    // Unique identifier for the card type
    type: 'room-summary-card',
    // Display name in the UI
    name: 'Room Summary',
    // Card description for the UI
    description: 'A card to summarize the status of a room, including temperature, humidity, and any problem entities.',
    // Show a preview of the card in the UI
    preview: true,
    // URL for the card's documentation
    documentationURL: 'https://github.com/homeassistant-extras/room-summary-card'
});
console.info(`%c\u{1F431} Poat's Tools: room-summary-card - ${(0, $b06602ab53bd58a3$exports.version)}`, 'color: #CFC493;');


//# sourceMappingURL=room-summary-card.js.map
