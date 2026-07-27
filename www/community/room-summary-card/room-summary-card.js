
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire01aa"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire01aa"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("2QgUB", function(module, exports) {

$parcel$export(module.exports, "__decorate", function () { return $5278c494edee6226$export$29e00dfd3077644b; });
/******************************************************************************
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $5278c494edee6226$var$extendStatics = function(d, b) {
    $5278c494edee6226$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $5278c494edee6226$var$extendStatics(d, b);
};
function $5278c494edee6226$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $5278c494edee6226$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $5278c494edee6226$export$18ce0697a983be9b = function() {
    $5278c494edee6226$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $5278c494edee6226$export$18ce0697a983be9b.apply(this, arguments);
};
function $5278c494edee6226$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $5278c494edee6226$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $5278c494edee6226$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $5278c494edee6226$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
function $5278c494edee6226$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $5278c494edee6226$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $5278c494edee6226$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $5278c494edee6226$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $5278c494edee6226$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
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
function $5278c494edee6226$export$67ebef60e6f28a6(thisArg, body) {
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
var $5278c494edee6226$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
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
function $5278c494edee6226$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $5278c494edee6226$export$45d3717a4c69092e(o, m, p);
}
function $5278c494edee6226$export$19a8beecd37a4c45(o) {
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
function $5278c494edee6226$export$8d051b38c9118094(o, n) {
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
function $5278c494edee6226$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($5278c494edee6226$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $5278c494edee6226$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $5278c494edee6226$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $5278c494edee6226$export$10c90e4f7922046c(v) {
    return this instanceof $5278c494edee6226$export$10c90e4f7922046c ? (this.v = v, this) : new $5278c494edee6226$export$10c90e4f7922046c(v);
}
function $5278c494edee6226$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
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
        r.value instanceof $5278c494edee6226$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
function $5278c494edee6226$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $5278c494edee6226$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $5278c494edee6226$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $5278c494edee6226$export$19a8beecd37a4c45 === "function" ? $5278c494edee6226$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
function $5278c494edee6226$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $5278c494edee6226$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $5278c494edee6226$var$ownKeys = function(o) {
    $5278c494edee6226$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $5278c494edee6226$var$ownKeys(o);
};
function $5278c494edee6226$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $5278c494edee6226$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $5278c494edee6226$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $5278c494edee6226$var$__setModuleDefault(result, mod);
    return result;
}
function $5278c494edee6226$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $5278c494edee6226$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $5278c494edee6226$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $5278c494edee6226$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $5278c494edee6226$export$88ac25d8e944e405(env, value, async) {
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
var $5278c494edee6226$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $5278c494edee6226$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $5278c494edee6226$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
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
function $5278c494edee6226$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $5278c494edee6226$export$2e2bcd8739ae039 = {
    __extends: $5278c494edee6226$export$a8ba968b8961cb8a,
    __assign: $5278c494edee6226$export$18ce0697a983be9b,
    __rest: $5278c494edee6226$export$3c9a16f847548506,
    __decorate: $5278c494edee6226$export$29e00dfd3077644b,
    __param: $5278c494edee6226$export$d5ad3fd78186038f,
    __esDecorate: $5278c494edee6226$export$3a84e1ae4e97e9b0,
    __runInitializers: $5278c494edee6226$export$d831c04e792af3d,
    __propKey: $5278c494edee6226$export$6a2a36740a146cb8,
    __setFunctionName: $5278c494edee6226$export$d1a06452d3489bc7,
    __metadata: $5278c494edee6226$export$f1db080c865becb9,
    __awaiter: $5278c494edee6226$export$1050f835b63b671e,
    __generator: $5278c494edee6226$export$67ebef60e6f28a6,
    __createBinding: $5278c494edee6226$export$45d3717a4c69092e,
    __exportStar: $5278c494edee6226$export$f33643c0debef087,
    __values: $5278c494edee6226$export$19a8beecd37a4c45,
    __read: $5278c494edee6226$export$8d051b38c9118094,
    __spread: $5278c494edee6226$export$afc72e2116322959,
    __spreadArrays: $5278c494edee6226$export$6388937ca91ccae8,
    __spreadArray: $5278c494edee6226$export$1216008129fb82ed,
    __await: $5278c494edee6226$export$10c90e4f7922046c,
    __asyncGenerator: $5278c494edee6226$export$e427f37a30a4de9b,
    __asyncDelegator: $5278c494edee6226$export$bbd80228419bb833,
    __asyncValues: $5278c494edee6226$export$e3b29a3d6162315f,
    __makeTemplateObject: $5278c494edee6226$export$4fb47efe1390b86f,
    __importStar: $5278c494edee6226$export$c21735bcef00d192,
    __importDefault: $5278c494edee6226$export$da59b14a69baef04,
    __classPrivateFieldGet: $5278c494edee6226$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $5278c494edee6226$export$d40a35129aaff81f,
    __classPrivateFieldIn: $5278c494edee6226$export$81fdc39f203e4e04,
    __addDisposableResource: $5278c494edee6226$export$88ac25d8e944e405,
    __disposeResources: $5278c494edee6226$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $5278c494edee6226$export$889dfb5d17574b0b
};

});

parcelRegister("fPVm8", function(module, exports) {
$parcel$export(module.exports, "css", function () { return (parcelRequire("2SS2a")).css; });
$parcel$export(module.exports, "html", function () { return (parcelRequire("ci0wX")).html; });
$parcel$export(module.exports, "LitElement", function () { return (parcelRequire("2r9I1")).LitElement; });
$parcel$export(module.exports, "noChange", function () { return (parcelRequire("ci0wX")).noChange; });
$parcel$export(module.exports, "nothing", function () { return (parcelRequire("ci0wX")).nothing; });
parcelRequire("1k7sd");
parcelRequire("ci0wX");
parcelRequire("2r9I1");
parcelRequire("lgg8R");

});
parcelRegister("1k7sd", function(module, exports) {

$parcel$export(module.exports, "defaultConverter", function () { return $0f6d70ec1686f84d$export$7312b35fbf521afb; });
$parcel$export(module.exports, "notEqual", function () { return $0f6d70ec1686f84d$export$53a6892c50694894; });
$parcel$export(module.exports, "ReactiveElement", function () { return $0f6d70ec1686f84d$export$c7c07a37856565d; });
$parcel$export(module.exports, "css", function () { return (parcelRequire("2SS2a")).css; });

var $2SS2a = parcelRequire("2SS2a");
var $0f6d70ec1686f84d$var$_Symbol, $0f6d70ec1686f84d$var$_a, $0f6d70ec1686f84d$var$_a1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $0f6d70ec1686f84d$var$i, defineProperty: $0f6d70ec1686f84d$var$e, getOwnPropertyDescriptor: $0f6d70ec1686f84d$var$h, getOwnPropertyNames: $0f6d70ec1686f84d$var$r, getOwnPropertySymbols: $0f6d70ec1686f84d$var$o, getPrototypeOf: $0f6d70ec1686f84d$var$n } = Object, $0f6d70ec1686f84d$var$a = globalThis, $0f6d70ec1686f84d$var$c = $0f6d70ec1686f84d$var$a.trustedTypes, $0f6d70ec1686f84d$var$l = $0f6d70ec1686f84d$var$c ? $0f6d70ec1686f84d$var$c.emptyScript : "", $0f6d70ec1686f84d$var$p = $0f6d70ec1686f84d$var$a.reactiveElementPolyfillSupport, $0f6d70ec1686f84d$var$d = (t, s)=>t, $0f6d70ec1686f84d$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $0f6d70ec1686f84d$var$l : null;
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
}, $0f6d70ec1686f84d$export$53a6892c50694894 = (t, s)=>!$0f6d70ec1686f84d$var$i(t, s), $0f6d70ec1686f84d$var$b = {
    attribute: !0,
    type: String,
    converter: $0f6d70ec1686f84d$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $0f6d70ec1686f84d$export$53a6892c50694894
};
var $0f6d70ec1686f84d$var$_metadata, $0f6d70ec1686f84d$var$_litPropertyMetadata;
($0f6d70ec1686f84d$var$_metadata = ($0f6d70ec1686f84d$var$_Symbol = Symbol).metadata) !== null && $0f6d70ec1686f84d$var$_metadata !== void 0 ? $0f6d70ec1686f84d$var$_metadata : $0f6d70ec1686f84d$var$_Symbol.metadata = Symbol("metadata"), ($0f6d70ec1686f84d$var$_litPropertyMetadata = ($0f6d70ec1686f84d$var$_a = $0f6d70ec1686f84d$var$a).litPropertyMetadata) !== null && $0f6d70ec1686f84d$var$_litPropertyMetadata !== void 0 ? $0f6d70ec1686f84d$var$_litPropertyMetadata : $0f6d70ec1686f84d$var$_a.litPropertyMetadata = new WeakMap;
class $0f6d70ec1686f84d$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        var _this_l;
        this._$Ei(), ((_this_l = this.l) !== null && _this_l !== void 0 ? _this_l : this.l = []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $0f6d70ec1686f84d$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $0f6d70ec1686f84d$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        var _h;
        const { get: e, set: r } = (_h = $0f6d70ec1686f84d$var$h(this.prototype, t)) !== null && _h !== void 0 ? _h : {
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
                const h = e === null || e === void 0 ? void 0 : e.call(this);
                r === null || r === void 0 ? void 0 : r.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        var _this_elementProperties_get;
        return (_this_elementProperties_get = this.elementProperties.get(t)) !== null && _this_elementProperties_get !== void 0 ? _this_elementProperties_get : $0f6d70ec1686f84d$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($0f6d70ec1686f84d$var$d("elementProperties"))) return;
        const t = $0f6d70ec1686f84d$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($0f6d70ec1686f84d$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($0f6d70ec1686f84d$var$d("properties"))) {
            const t = this.properties, s = [
                ...$0f6d70ec1686f84d$var$r(t),
                ...$0f6d70ec1686f84d$var$o(t)
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
            for (const s of e)i.unshift((0, $2SS2a.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, $2SS2a.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Ev() {
        var _this_constructor_l;
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), (_this_constructor_l = this.constructor.l) === null || _this_constructor_l === void 0 ? void 0 : _this_constructor_l.forEach((t)=>t(this));
    }
    addController(t) {
        var _t_hostConnected;
        var _this__$EO;
        ((_this__$EO = this._$EO) !== null && _this__$EO !== void 0 ? _this__$EO : this._$EO = new Set).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t));
    }
    removeController(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        var _this_shadowRoot;
        const t = (_this_shadowRoot = this.shadowRoot) !== null && _this_shadowRoot !== void 0 ? _this_shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $2SS2a.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        var _this__$EO;
        var _this_renderRoot;
        (_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(!0), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostConnected;
            return (_t_hostConnected = t.hostConnected) === null || _t_hostConnected === void 0 ? void 0 : _t_hostConnected.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostDisconnected;
            return (_t_hostDisconnected = t.hostDisconnected) === null || _t_hostDisconnected === void 0 ? void 0 : _t_hostDisconnected.call(t);
        });
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            var _i_converter;
            const h = (void 0 !== ((_i_converter = i.converter) === null || _i_converter === void 0 ? void 0 : _i_converter.toAttribute) ? i.converter : $0f6d70ec1686f84d$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            var _t_converter, _this__$Ej;
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== ((_t_converter = t.converter) === null || _t_converter === void 0 ? void 0 : _t_converter.fromAttribute) ? t.converter : $0f6d70ec1686f84d$export$7312b35fbf521afb;
            var _h_fromAttribute, _ref;
            this._$Em = e, this[e] = (_ref = (_h_fromAttribute = h.fromAttribute(s, t.type)) !== null && _h_fromAttribute !== void 0 ? _h_fromAttribute : (_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(e)) !== null && _ref !== void 0 ? _ref : null, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            var _this__$Ej;
            const e = this.constructor, h = this[t];
            var _i_hasChanged;
            if (i !== null && i !== void 0 ? i : i = e.getPropertyOptions(t), !(((_i_hasChanged = i.hasChanged) !== null && _i_hasChanged !== void 0 ? _i_hasChanged : $0f6d70ec1686f84d$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === ((_this__$Ej = this._$Ej) === null || _this__$Ej === void 0 ? void 0 : _this__$Ej.get(t)) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        var _this__$Ej, _ref, _this__$Eq;
        i && !((_this__$Ej = this._$Ej) !== null && _this__$Ej !== void 0 ? _this__$Ej : this._$Ej = new Map).has(t) && (this._$Ej.set(t, (_ref = r !== null && r !== void 0 ? r : s) !== null && _ref !== void 0 ? _ref : this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && ((_this__$Eq = this._$Eq) !== null && _this__$Eq !== void 0 ? _this__$Eq : this._$Eq = new Set).add(t));
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
            var _this_renderRoot;
            if ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : this.renderRoot = this.createRenderRoot(), this._$Ep) {
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
            var _this__$EO;
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
                var _t_hostUpdate;
                return (_t_hostUpdate = t.hostUpdate) === null || _t_hostUpdate === void 0 ? void 0 : _t_hostUpdate.call(t);
            }), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var _this__$EO;
        (_this__$EO = this._$EO) === null || _this__$EO === void 0 ? void 0 : _this__$EO.forEach((t)=>{
            var _t_hostUpdated;
            return (_t_hostUpdated = t.hostUpdated) === null || _t_hostUpdated === void 0 ? void 0 : _t_hostUpdated.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
        this._$Eq && (this._$Eq = this._$Eq.forEach((t)=>this._$ET(t, this[t]))), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
}
var $0f6d70ec1686f84d$var$_reactiveElementVersions;
$0f6d70ec1686f84d$export$c7c07a37856565d.elementStyles = [], $0f6d70ec1686f84d$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $0f6d70ec1686f84d$export$c7c07a37856565d[$0f6d70ec1686f84d$var$d("elementProperties")] = new Map, $0f6d70ec1686f84d$export$c7c07a37856565d[$0f6d70ec1686f84d$var$d("finalized")] = new Map, $0f6d70ec1686f84d$var$p === null || $0f6d70ec1686f84d$var$p === void 0 ? void 0 : $0f6d70ec1686f84d$var$p({
    ReactiveElement: $0f6d70ec1686f84d$export$c7c07a37856565d
}), (($0f6d70ec1686f84d$var$_reactiveElementVersions = ($0f6d70ec1686f84d$var$_a1 = $0f6d70ec1686f84d$var$a).reactiveElementVersions) !== null && $0f6d70ec1686f84d$var$_reactiveElementVersions !== void 0 ? $0f6d70ec1686f84d$var$_reactiveElementVersions : $0f6d70ec1686f84d$var$_a1.reactiveElementVersions = []).push("2.1.0");

});
parcelRegister("2SS2a", function(module, exports) {

$parcel$export(module.exports, "css", function () { return $219a89f05d06a34f$export$dbf350e5966cf602; });
$parcel$export(module.exports, "adoptStyles", function () { return $219a89f05d06a34f$export$2ca4a66ec4cecb90; });
$parcel$export(module.exports, "getCompatibleStyle", function () { return $219a89f05d06a34f$export$ee69dfd951e24778; });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $219a89f05d06a34f$var$t = globalThis, $219a89f05d06a34f$export$b4d10f6001c083c2 = $219a89f05d06a34f$var$t.ShadowRoot && (void 0 === $219a89f05d06a34f$var$t.ShadyCSS || $219a89f05d06a34f$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $219a89f05d06a34f$var$s = Symbol(), $219a89f05d06a34f$var$o = new WeakMap;
class $219a89f05d06a34f$export$505d1e8739bad805 {
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($219a89f05d06a34f$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $219a89f05d06a34f$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $219a89f05d06a34f$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $219a89f05d06a34f$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
}
const $219a89f05d06a34f$export$8d80f9cac07cdb3 = (t)=>new $219a89f05d06a34f$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $219a89f05d06a34f$var$s), $219a89f05d06a34f$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $219a89f05d06a34f$export$505d1e8739bad805(o, t, $219a89f05d06a34f$var$s);
}, $219a89f05d06a34f$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($219a89f05d06a34f$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $219a89f05d06a34f$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $219a89f05d06a34f$export$ee69dfd951e24778 = $219a89f05d06a34f$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $219a89f05d06a34f$export$8d80f9cac07cdb3(e);
    })(t) : t;

});


parcelRegister("ci0wX", function(module, exports) {

$parcel$export(module.exports, "html", function () { return $8f2793d8325bb031$export$c0bb0b647f701bb5; });
$parcel$export(module.exports, "noChange", function () { return $8f2793d8325bb031$export$9c068ae9cc5db4e8; });
$parcel$export(module.exports, "nothing", function () { return $8f2793d8325bb031$export$45b790e32b2810ee; });
$parcel$export(module.exports, "_$LH", function () { return $8f2793d8325bb031$export$8613d1ca9052b22e; });
$parcel$export(module.exports, "render", function () { return $8f2793d8325bb031$export$b3890eb0ae9dca99; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $8f2793d8325bb031$var$_t;
const $8f2793d8325bb031$var$t = globalThis, $8f2793d8325bb031$var$i = $8f2793d8325bb031$var$t.trustedTypes, $8f2793d8325bb031$var$s = $8f2793d8325bb031$var$i ? $8f2793d8325bb031$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $8f2793d8325bb031$var$e = "$lit$", $8f2793d8325bb031$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $8f2793d8325bb031$var$o = "?" + $8f2793d8325bb031$var$h, $8f2793d8325bb031$var$n = `<${$8f2793d8325bb031$var$o}>`, $8f2793d8325bb031$var$r = document, $8f2793d8325bb031$var$l = ()=>$8f2793d8325bb031$var$r.createComment(""), $8f2793d8325bb031$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $8f2793d8325bb031$var$a = Array.isArray, $8f2793d8325bb031$var$u = (t)=>$8f2793d8325bb031$var$a(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]), $8f2793d8325bb031$var$d = "[ \t\n\f\r]", $8f2793d8325bb031$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $8f2793d8325bb031$var$v = /-->/g, $8f2793d8325bb031$var$_ = />/g, $8f2793d8325bb031$var$m = RegExp(`>|${$8f2793d8325bb031$var$d}(?:([^\\s"'>=/]+)(${$8f2793d8325bb031$var$d}*=${$8f2793d8325bb031$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $8f2793d8325bb031$var$p = /'/g, $8f2793d8325bb031$var$g = /"/g, $8f2793d8325bb031$var$$ = /^(?:script|style|textarea|title)$/i, $8f2793d8325bb031$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $8f2793d8325bb031$export$c0bb0b647f701bb5 = $8f2793d8325bb031$var$y(1), $8f2793d8325bb031$export$7ed1367e7fa1ad68 = $8f2793d8325bb031$var$y(2), $8f2793d8325bb031$export$47d5b44d225be5b4 = $8f2793d8325bb031$var$y(3), $8f2793d8325bb031$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $8f2793d8325bb031$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $8f2793d8325bb031$var$A = new WeakMap, $8f2793d8325bb031$var$C = $8f2793d8325bb031$var$r.createTreeWalker($8f2793d8325bb031$var$r, 129);
function $8f2793d8325bb031$var$P(t, i) {
    if (!$8f2793d8325bb031$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $8f2793d8325bb031$var$s ? $8f2793d8325bb031$var$s.createHTML(i) : i;
}
const $8f2793d8325bb031$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $8f2793d8325bb031$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $8f2793d8325bb031$var$f ? "!--" === u[1] ? c = $8f2793d8325bb031$var$v : void 0 !== u[1] ? c = $8f2793d8325bb031$var$_ : void 0 !== u[2] ? ($8f2793d8325bb031$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $8f2793d8325bb031$var$m) : void 0 !== u[3] && (c = $8f2793d8325bb031$var$m) : c === $8f2793d8325bb031$var$m ? ">" === u[0] ? (c = r !== null && r !== void 0 ? r : $8f2793d8325bb031$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $8f2793d8325bb031$var$m : '"' === u[3] ? $8f2793d8325bb031$var$g : $8f2793d8325bb031$var$p) : c === $8f2793d8325bb031$var$g || c === $8f2793d8325bb031$var$p ? c = $8f2793d8325bb031$var$m : c === $8f2793d8325bb031$var$v || c === $8f2793d8325bb031$var$_ ? c = $8f2793d8325bb031$var$f : (c = $8f2793d8325bb031$var$m, r = void 0);
        const x = c === $8f2793d8325bb031$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $8f2793d8325bb031$var$f ? s + $8f2793d8325bb031$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $8f2793d8325bb031$var$e + s.slice(d) + $8f2793d8325bb031$var$h + x) : s + $8f2793d8325bb031$var$h + (-2 === d ? i : x);
    }
    return [
        $8f2793d8325bb031$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $8f2793d8325bb031$var$N {
    static createElement(t, i) {
        const s = $8f2793d8325bb031$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $8f2793d8325bb031$var$V(t, s);
        if (this.el = $8f2793d8325bb031$var$N.createElement(f, n), $8f2793d8325bb031$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $8f2793d8325bb031$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($8f2793d8325bb031$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($8f2793d8325bb031$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $8f2793d8325bb031$var$H : "?" === e[1] ? $8f2793d8325bb031$var$I : "@" === e[1] ? $8f2793d8325bb031$var$L : $8f2793d8325bb031$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($8f2793d8325bb031$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($8f2793d8325bb031$var$$.test(r.tagName)) {
                    const t = r.textContent.split($8f2793d8325bb031$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $8f2793d8325bb031$var$i ? $8f2793d8325bb031$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $8f2793d8325bb031$var$l()), $8f2793d8325bb031$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $8f2793d8325bb031$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $8f2793d8325bb031$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($8f2793d8325bb031$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $8f2793d8325bb031$var$h.length - 1;
                }
            }
            c++;
        }
    }
}
function $8f2793d8325bb031$var$S(t, i, s = t, e) {
    var _s__$Co, _h__$AO;
    var _s;
    if (i === $8f2793d8325bb031$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? (_s__$Co = s._$Co) === null || _s__$Co === void 0 ? void 0 : _s__$Co[e] : s._$Cl;
    const o = $8f2793d8325bb031$var$c(i) ? void 0 : i._$litDirective$;
    var __$Co;
    return (h === null || h === void 0 ? void 0 : h.constructor) !== o && (h === null || h === void 0 ? void 0 : (_h__$AO = h._$AO) === null || _h__$AO === void 0 ? void 0 : _h__$AO.call(h, !1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((__$Co = (_s = s)._$Co) !== null && __$Co !== void 0 ? __$Co : _s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = $8f2793d8325bb031$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $8f2793d8325bb031$var$M {
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var _t_creationScope;
        const { el: { content: i }, parts: s } = this._$AD, e = ((_t_creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t_creationScope !== void 0 ? _t_creationScope : $8f2793d8325bb031$var$r).importNode(i, !0);
        $8f2793d8325bb031$var$C.currentNode = e;
        let h = $8f2793d8325bb031$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $8f2793d8325bb031$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $8f2793d8325bb031$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== (l === null || l === void 0 ? void 0 : l.index) && (h = $8f2793d8325bb031$var$C.nextNode(), o++);
        }
        return $8f2793d8325bb031$var$C.currentNode = $8f2793d8325bb031$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
}
class $8f2793d8325bb031$var$R {
    get _$AU() {
        var _this__$AM;
        var _this__$AM__$AU;
        return (_this__$AM__$AU = (_this__$AM = this._$AM) === null || _this__$AM === void 0 ? void 0 : _this__$AM._$AU) !== null && _this__$AM__$AU !== void 0 ? _this__$AM__$AU : this._$Cv;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (t === null || t === void 0 ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $8f2793d8325bb031$var$S(this, t, i), $8f2793d8325bb031$var$c(t) ? t === $8f2793d8325bb031$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $8f2793d8325bb031$export$45b790e32b2810ee && this._$AR(), this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee) : t !== this._$AH && t !== $8f2793d8325bb031$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $8f2793d8325bb031$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $8f2793d8325bb031$export$45b790e32b2810ee && $8f2793d8325bb031$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($8f2793d8325bb031$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var _this__$AH;
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $8f2793d8325bb031$var$N.createElement($8f2793d8325bb031$var$P(s.h, s.h[0]), this.options)), s);
        if (((_this__$AH = this._$AH) === null || _this__$AH === void 0 ? void 0 : _this__$AH._$AD) === e) this._$AH.p(i);
        else {
            const t = new $8f2793d8325bb031$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $8f2793d8325bb031$var$A.get(t.strings);
        return void 0 === i && $8f2793d8325bb031$var$A.set(t.strings, i = new $8f2793d8325bb031$var$N(t)), i;
    }
    k(t) {
        $8f2793d8325bb031$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $8f2793d8325bb031$var$R(this.O($8f2793d8325bb031$var$l()), this.O($8f2793d8325bb031$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var _this__$AP, _this;
        for((_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var _this__$AP, _this;
        void 0 === this._$AM && (this._$Cv = t, (_this__$AP = (_this = this)._$AP) === null || _this__$AP === void 0 ? void 0 : _this__$AP.call(_this, t));
    }
    constructor(t, i, s, e){
        var _e_isConnected;
        this.type = 2, this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e_isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e_isConnected !== void 0 ? _e_isConnected : !0;
    }
}
class $8f2793d8325bb031$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $8f2793d8325bb031$var$S(this, t, i, 0), o = !$8f2793d8325bb031$var$c(t) || t !== this._$AH && t !== $8f2793d8325bb031$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $8f2793d8325bb031$var$S(this, e[s + n], i, n), r === $8f2793d8325bb031$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o || (o = !$8f2793d8325bb031$var$c(r) || r !== this._$AH[n]), r === $8f2793d8325bb031$export$45b790e32b2810ee ? t = $8f2793d8325bb031$export$45b790e32b2810ee : t !== $8f2793d8325bb031$export$45b790e32b2810ee && (t += (r !== null && r !== void 0 ? r : "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $8f2793d8325bb031$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $8f2793d8325bb031$export$45b790e32b2810ee;
    }
}
class $8f2793d8325bb031$var$H extends $8f2793d8325bb031$var$k {
    j(t) {
        this.element[this.name] = t === $8f2793d8325bb031$export$45b790e32b2810ee ? void 0 : t;
    }
    constructor(){
        super(...arguments), this.type = 3;
    }
}
class $8f2793d8325bb031$var$I extends $8f2793d8325bb031$var$k {
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $8f2793d8325bb031$export$45b790e32b2810ee);
    }
    constructor(){
        super(...arguments), this.type = 4;
    }
}
class $8f2793d8325bb031$var$L extends $8f2793d8325bb031$var$k {
    _$AI(t, i = this) {
        var _S;
        if ((t = (_S = $8f2793d8325bb031$var$S(this, t, i, 0)) !== null && _S !== void 0 ? _S : $8f2793d8325bb031$export$45b790e32b2810ee) === $8f2793d8325bb031$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $8f2793d8325bb031$export$45b790e32b2810ee && s !== $8f2793d8325bb031$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $8f2793d8325bb031$export$45b790e32b2810ee && (s === $8f2793d8325bb031$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var _this_options;
        var _this_options_host;
        "function" == typeof this._$AH ? this._$AH.call((_this_options_host = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.host) !== null && _this_options_host !== void 0 ? _this_options_host : this.element, t) : this._$AH.handleEvent(t);
    }
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
}
class $8f2793d8325bb031$var$z {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $8f2793d8325bb031$var$S(this, t);
    }
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
}
const $8f2793d8325bb031$export$8613d1ca9052b22e = {
    M: $8f2793d8325bb031$var$e,
    P: $8f2793d8325bb031$var$h,
    A: $8f2793d8325bb031$var$o,
    C: 1,
    L: $8f2793d8325bb031$var$V,
    R: $8f2793d8325bb031$var$M,
    D: $8f2793d8325bb031$var$u,
    V: $8f2793d8325bb031$var$S,
    I: $8f2793d8325bb031$var$R,
    H: $8f2793d8325bb031$var$k,
    N: $8f2793d8325bb031$var$I,
    U: $8f2793d8325bb031$var$L,
    B: $8f2793d8325bb031$var$H,
    F: $8f2793d8325bb031$var$z
}, $8f2793d8325bb031$var$j = $8f2793d8325bb031$var$t.litHtmlPolyfillSupport;
var $8f2793d8325bb031$var$_litHtmlVersions;
$8f2793d8325bb031$var$j === null || $8f2793d8325bb031$var$j === void 0 ? void 0 : $8f2793d8325bb031$var$j($8f2793d8325bb031$var$N, $8f2793d8325bb031$var$R), (($8f2793d8325bb031$var$_litHtmlVersions = ($8f2793d8325bb031$var$_t = $8f2793d8325bb031$var$t).litHtmlVersions) !== null && $8f2793d8325bb031$var$_litHtmlVersions !== void 0 ? $8f2793d8325bb031$var$_litHtmlVersions : $8f2793d8325bb031$var$_t.litHtmlVersions = []).push("3.3.0");
const $8f2793d8325bb031$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var _s_renderBefore;
    const e = (_s_renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore !== void 0 ? _s_renderBefore : i;
    let h = e._$litPart$;
    if (void 0 === h) {
        var _s_renderBefore1;
        const t = (_s_renderBefore1 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s_renderBefore1 !== void 0 ? _s_renderBefore1 : null;
        e._$litPart$ = h = new $8f2793d8325bb031$var$R(i.insertBefore($8f2793d8325bb031$var$l(), t), t, void 0, s !== null && s !== void 0 ? s : {});
    }
    return h._$AI(t), h;
};

});

parcelRegister("2r9I1", function(module, exports) {
$parcel$export(module.exports, "css", function () { return (parcelRequire("2SS2a")).css; });
$parcel$export(module.exports, "ReactiveElement", function () { return (parcelRequire("1k7sd")).ReactiveElement; });
$parcel$export(module.exports, "html", function () { return (parcelRequire("ci0wX")).html; });
$parcel$export(module.exports, "noChange", function () { return (parcelRequire("ci0wX")).noChange; });
$parcel$export(module.exports, "nothing", function () { return (parcelRequire("ci0wX")).nothing; });
$parcel$export(module.exports, "render", function () { return (parcelRequire("ci0wX")).render; });

$parcel$export(module.exports, "LitElement", function () { return $1c65a264a7b7a28b$export$3f2f9f5909897157; });

var $1k7sd = parcelRequire("1k7sd");

var $ci0wX = parcelRequire("ci0wX");
var $1c65a264a7b7a28b$var$_s_litElementHydrateSupport;
var $1c65a264a7b7a28b$var$_s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1c65a264a7b7a28b$var$s = globalThis;
class $1c65a264a7b7a28b$export$3f2f9f5909897157 extends (0, $1k7sd.ReactiveElement) {
    createRenderRoot() {
        var _this_renderOptions;
        const t = super.createRenderRoot();
        var _renderBefore;
        return (_renderBefore = (_this_renderOptions = this.renderOptions).renderBefore) !== null && _renderBefore !== void 0 ? _renderBefore : _this_renderOptions.renderBefore = t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $ci0wX.render)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var _this__$Do;
        super.connectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!0);
    }
    disconnectedCallback() {
        var _this__$Do;
        super.disconnectedCallback(), (_this__$Do = this._$Do) === null || _this__$Do === void 0 ? void 0 : _this__$Do.setConnected(!1);
    }
    render() {
        return 0, $ci0wX.noChange;
    }
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
}
$1c65a264a7b7a28b$export$3f2f9f5909897157._$litElement$ = !0, $1c65a264a7b7a28b$export$3f2f9f5909897157["finalized"] = !0, ($1c65a264a7b7a28b$var$_s_litElementHydrateSupport = $1c65a264a7b7a28b$var$s.litElementHydrateSupport) === null || $1c65a264a7b7a28b$var$_s_litElementHydrateSupport === void 0 ? void 0 : $1c65a264a7b7a28b$var$_s_litElementHydrateSupport.call($1c65a264a7b7a28b$var$s, {
    LitElement: $1c65a264a7b7a28b$export$3f2f9f5909897157
});
const $1c65a264a7b7a28b$var$o = $1c65a264a7b7a28b$var$s.litElementPolyfillSupport;
$1c65a264a7b7a28b$var$o === null || $1c65a264a7b7a28b$var$o === void 0 ? void 0 : $1c65a264a7b7a28b$var$o({
    LitElement: $1c65a264a7b7a28b$export$3f2f9f5909897157
});
const $1c65a264a7b7a28b$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
var $1c65a264a7b7a28b$var$_litElementVersions;
(($1c65a264a7b7a28b$var$_litElementVersions = ($1c65a264a7b7a28b$var$_s = $1c65a264a7b7a28b$var$s).litElementVersions) !== null && $1c65a264a7b7a28b$var$_litElementVersions !== void 0 ? $1c65a264a7b7a28b$var$_litElementVersions : $1c65a264a7b7a28b$var$_s.litElementVersions = []).push("4.2.0");

});

parcelRegister("lgg8R", function(module, exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f7a79d06361b41af$export$6acf61af03e62db = !1;

});


parcelRegister("jcMWt", function(module, exports) {
$parcel$export(module.exports, "customElement", function () { return (parcelRequire("yv2EM")).customElement; });
$parcel$export(module.exports, "property", function () { return (parcelRequire("aaQtJ")).property; });
$parcel$export(module.exports, "state", function () { return (parcelRequire("lYE5o")).state; });
parcelRequire("yv2EM");
parcelRequire("aaQtJ");
parcelRequire("lYE5o");
parcelRequire("gYQU6");
parcelRequire("gbhdF");
parcelRequire("jrk3L");
parcelRequire("8THnI");
parcelRequire("er6yS");
parcelRequire("4kgur");

});
parcelRegister("yv2EM", function(module, exports) {

$parcel$export(module.exports, "customElement", function () { return $067b415b06ab5dd2$export$da64fc29f17f9d0e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $067b415b06ab5dd2$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };

});

parcelRegister("aaQtJ", function(module, exports) {

$parcel$export(module.exports, "property", function () { return $76838bb15bd8102a$export$d541bacb2bda4494; });

var $1k7sd = parcelRequire("1k7sd");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $76838bb15bd8102a$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $1k7sd.defaultConverter),
    reflect: !1,
    hasChanged: (0, $1k7sd.notEqual)
}, $76838bb15bd8102a$export$8d623b1670eb40f4 = (t = $76838bb15bd8102a$var$o, e, r)=>{
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
function $76838bb15bd8102a$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $76838bb15bd8102a$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}

});

parcelRegister("lYE5o", function(module, exports) {

$parcel$export(module.exports, "state", function () { return $fffe4bd641112b8c$export$ca000e230c0caa3e; });

var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");

var $aaQtJ = parcelRequire("aaQtJ");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $fffe4bd641112b8c$export$ca000e230c0caa3e(r) {
    return (0, $aaQtJ.property)((0, $1izJ2._)((0, $kJycS._)({}, r), {
        state: !0,
        attribute: !1
    }));
}

});
parcelRegister("kJycS", function(module, exports) {

$parcel$export(module.exports, "_", function () { return $f1828b5e61c0cb65$export$71511d61b312f219; });

var $xyHtw = parcelRequire("xyHtw");
function $f1828b5e61c0cb65$export$71511d61b312f219(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $xyHtw._)(target, key, source[key]);
        });
    }
    return target;
}

});
parcelRegister("xyHtw", function(module, exports) {

$parcel$export(module.exports, "_", function () { return $064dffebce997de0$export$71511d61b312f219; });
function $064dffebce997de0$export$71511d61b312f219(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

});


parcelRegister("1izJ2", function(module, exports) {

$parcel$export(module.exports, "_", function () { return $0f232f35f40fe68f$export$71511d61b312f219; });
function $0f232f35f40fe68f$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $0f232f35f40fe68f$export$71511d61b312f219(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $0f232f35f40fe68f$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

});


parcelRegister("gYQU6", function(module, exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $c5cb498dc60cbd6e$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}

});

parcelRegister("gbhdF", function(module, exports) {

var $dFoGf = parcelRequire("dFoGf");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $bc7b07d92f0bc114$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>{
            var _t_renderRoot;
            var _t_renderRoot_querySelector;
            return (_t_renderRoot_querySelector = (_t_renderRoot = t.renderRoot) === null || _t_renderRoot === void 0 ? void 0 : _t_renderRoot.querySelector(e)) !== null && _t_renderRoot_querySelector !== void 0 ? _t_renderRoot_querySelector : null;
        };
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i !== null && i !== void 0 ? i : (()=>{
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
            return (0, $dFoGf.desc)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $dFoGf.desc)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}

});
parcelRegister("dFoGf", function(module, exports) {

$parcel$export(module.exports, "desc", function () { return $9f323fba3a87cf79$export$51987bb50e1f6752; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9f323fba3a87cf79$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);

});


parcelRegister("jrk3L", function(module, exports) {

var $dFoGf = parcelRequire("dFoGf");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $e27019667994fd79$var$e;
function $e27019667994fd79$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $dFoGf.desc)(n, o, {
            get () {
                var _this_renderRoot;
                return ((_this_renderRoot = this.renderRoot) !== null && _this_renderRoot !== void 0 ? _this_renderRoot : $e27019667994fd79$var$e !== null && $e27019667994fd79$var$e !== void 0 ? $e27019667994fd79$var$e : $e27019667994fd79$var$e = document.createDocumentFragment()).querySelectorAll(r);
            }
        });
}

});

parcelRegister("8THnI", function(module, exports) {

var $dFoGf = parcelRequire("dFoGf");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $67a51c73e9c8ca3b$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $dFoGf.desc)(n, e, {
            async get () {
                var _this_renderRoot;
                var _this_renderRoot_querySelector;
                return await this.updateComplete, (_this_renderRoot_querySelector = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(r)) !== null && _this_renderRoot_querySelector !== void 0 ? _this_renderRoot_querySelector : null;
            }
        });
}

});

parcelRegister("er6yS", function(module, exports) {

var $dFoGf = parcelRequire("dFoGf");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $a828ad47ddfe7d02$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o !== null && o !== void 0 ? o : {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $dFoGf.desc)(e, n, {
            get () {
                var _this_renderRoot;
                var _t_assignedElements;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(c), e = (_t_assignedElements = t === null || t === void 0 ? void 0 : t.assignedElements(o)) !== null && _t_assignedElements !== void 0 ? _t_assignedElements : [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}

});

parcelRegister("4kgur", function(module, exports) {

var $dFoGf = parcelRequire("dFoGf");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $3265d23ab6c16a70$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n !== null && n !== void 0 ? n : {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $dFoGf.desc)(o, r, {
            get () {
                var _this_renderRoot;
                const t = (_this_renderRoot = this.renderRoot) === null || _this_renderRoot === void 0 ? void 0 : _this_renderRoot.querySelector(s);
                var _t_assignedNodes;
                return (_t_assignedNodes = t === null || t === void 0 ? void 0 : t.assignedNodes(n)) !== null && _t_assignedNodes !== void 0 ? _t_assignedNodes : [];
            }
        });
    };
}

});


parcelRegister("5R2d0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.fireEvent = void 0;
parcelRequire("7zDNa");
/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param {{ bubbles: (boolean|undefined),
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */ const $44339d9693669cbe$var$fireEvent = (node, type, detail, options)=>{
    options = options || {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- upstream HA
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- upstream HA Event detail
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};
module.exports.fireEvent = $44339d9693669cbe$var$fireEvent;

});
parcelRegister("7zDNa", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

});


parcelRegister("6c3D1", function(module, exports) {
module.exports = import("./problem-dialog.386b9567.js").then(()=>parcelRequire('gIkwD'));

});

parcelRegister("gp9lG", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_active.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.stateActive = $bf163b97d55f035c$var$stateActive;

var $7zhir = parcelRequire("7zhir");

var $h7W3o = parcelRequire("h7W3o");
function $bf163b97d55f035c$var$stateActive(stateObj, state) {
    const domain = (0, $h7W3o.computeDomain)(stateObj.entity_id);
    const compareState = state !== null && state !== void 0 ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    if ([
        'button',
        'event',
        'infrared',
        'input_button',
        'radio_frequency',
        'scene'
    ].includes(domain)) return compareState !== $7zhir.UNAVAILABLE;
    if (compareState === $7zhir.UNAVAILABLE || compareState === $7zhir.UNKNOWN) return false;
    // The "off" check is relevant for most domains, but there are exceptions
    // such as "alert" where "off" is still a somewhat active state and
    // therefore gets a custom color and "idle" is instead the state that
    // matches what most other domains consider inactive.
    if (compareState === $7zhir.OFF && domain !== 'alert') return false;
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
            return ![
                'docked',
                'paused'
            ].includes(compareState);
        case 'lock':
            return compareState !== 'locked';
        case 'media_player':
            // Upstream treats paused as active; cards treat paused like standby (inactive).
            return ![
                'standby',
                'paused'
            ].includes(compareState);
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

});
parcelRegister("7zhir", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity/entity.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isOffState = module.exports.isUnavailableState = module.exports.OFF_STATES = module.exports.UNAVAILABLE_STATES = module.exports.OFF = module.exports.ON = module.exports.UNKNOWN = module.exports.UNAVAILABLE = void 0;

var $8bx5C = parcelRequire("8bx5C");
module.exports.UNAVAILABLE = 'unavailable';
module.exports.UNKNOWN = 'unknown';
module.exports.ON = 'on';
module.exports.OFF = 'off';
module.exports.UNAVAILABLE_STATES = [
    module.exports.UNAVAILABLE,
    module.exports.UNKNOWN
];
module.exports.OFF_STATES = [
    module.exports.UNAVAILABLE,
    module.exports.UNKNOWN,
    module.exports.OFF
];
module.exports.isUnavailableState = (0, $8bx5C.arrayLiteralIncludes)(module.exports.UNAVAILABLE_STATES);
module.exports.isOffState = (0, $8bx5C.arrayLiteralIncludes)(module.exports.OFF_STATES);

});
parcelRegister("8bx5C", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/literal-includes.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.arrayLiteralIncludes = void 0;
/**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */ const $5f5904b359c2f306$var$arrayLiteralIncludes = (array)=>(searchElement, fromIndex)=>array.includes(searchElement, fromIndex);
module.exports.arrayLiteralIncludes = $5f5904b359c2f306$var$arrayLiteralIncludes;

});


parcelRegister("h7W3o", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_domain.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.computeDomain = void 0;
const $c7801f5d251c198a$var$computeDomain = (entityId)=>entityId.substring(0, entityId.indexOf('.'));
module.exports.computeDomain = $c7801f5d251c198a$var$computeDomain;

});


parcelRegister("8jUVR", function(module, exports) {

$parcel$export(module.exports, "stateDisplay", function () { return $a6dfaa78520799c6$export$c18c768bbe3223b7; });
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $a6dfaa78520799c6$var$_ = (t)=>t, $a6dfaa78520799c6$var$t;
const $a6dfaa78520799c6$export$c18c768bbe3223b7 = (hass, entity, content)=>(0, $ci0wX.html)($a6dfaa78520799c6$var$t || ($a6dfaa78520799c6$var$t = $a6dfaa78520799c6$var$_`<state-display
    .hass=${0}
    .stateObj=${0}
    .content=${0}
  ></state-display>`), hass, entity, content);

});

parcelRegister("g28NR", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HassConfigMixin = void 0;
/**
 * Provides non-decorated `hass` and `config` fields.
 *
 * These are intentionally NOT `@property()` to avoid Lit reactive property
 * plumbing/attribute semantics.
 */ const $bac3a96534ef5b24$var$HassConfigMixin = (superClass)=>{
    class HassConfigClass extends superClass {
    }
    return HassConfigClass;
};
module.exports.HassConfigMixin = $bac3a96534ef5b24$var$HassConfigMixin;

});

parcelRegister("jc0SV", function(module, exports) {

var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");
"use strict";
var $df8fd303fc05ef66$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.SubscribeEntityStateMixin = void 0;
parcelRequire("jcMWt");
var $lYE5o = parcelRequire("lYE5o");

var $fAhtX = parcelRequire("fAhtX");
/**
 * Mixin that subscribes to entity state changes via subscribe_entities.
 * Only notifies on meaningful changes (state/attributes), not context/last_updated.
 *
 * Set `entities` to the list of entity_ids to watch; read `states[entityId]`
 * for the current state of each (undefined when not yet received). For the
 * common single-entity case, set `entity` and read `state` instead — e.g.
 * `<foo-element entity="light.bedroom">`.
 *
 * The underlying manager consolidates every entity into a single
 * subscribe_entities call per connection, so subscribing to N entities here is
 * cheap — it just registers N listeners.
 */ const $df8fd303fc05ef66$var$SubscribeEntityStateMixin = (superClass)=>{
    class SubscribeEntityStateClass extends superClass {
        /**
         * Convenience accessor for the single-entity case. Derived from the
         * reactive `states` map, so it updates and re-renders automatically.
         */ get state() {
            return this.entity ? this.states[this.entity] : undefined;
        }
        /**
         * Setup the entity subscriptions.
         */ connectedCallback() {
            super.connectedCallback();
            this._setupEntitySubscriptions();
        }
        /**
         * Teardown all entity subscriptions.
         */ disconnectedCallback() {
            this._teardownEntitySubscriptions();
            super.disconnectedCallback();
        }
        /**
         * Unsubscribe from everything and reset state. Used on disconnect and when
         * there is nothing valid to subscribe to.
         */ _teardownEntitySubscriptions() {
            for (const unsubscribe of this._unsubscribes.values())unsubscribe();
            this._unsubscribes.clear();
            this.states = {};
        }
        /**
         * Reconcile active subscriptions against the desired `entities` list:
         * unsubscribe from entities that were dropped, subscribe to new ones, and
         * leave already-subscribed entities untouched (no churn).
         */ _setupEntitySubscriptions() {
            const hass = this.hass;
            var _this_entities;
            // Combine the single-entity convenience with the array, de-duping so a
            // repeated id doesn't subscribe twice.
            const desired = new Set([
                ...this.entity ? [
                    this.entity
                ] : [],
                ...(_this_entities = this.entities) !== null && _this_entities !== void 0 ? _this_entities : []
            ]);
            // Nothing to subscribe to — tear everything down.
            if (!hass || desired.size === 0) {
                this._teardownEntitySubscriptions();
                return;
            }
            // Remove subscriptions no longer desired, dropping their state keys.
            for (const [entityId, unsubscribe] of this._unsubscribes)if (!desired.has(entityId)) {
                unsubscribe();
                this._unsubscribes.delete(entityId);
                // Reassign without the removed key so Lit picks up the change.
                const next = (0, $kJycS._)({}, this.states);
                delete next[entityId];
                this.states = next;
            }
            // Add subscriptions for newly desired entities.
            const manager = (0, $fAhtX.getEntitySubscriptionManager)(hass);
            for (const entityId of desired){
                if (this._unsubscribes.has(entityId)) continue;
                const unsubscribe = manager.subscribe(entityId, (state)=>this._onState(entityId, state));
                this._unsubscribes.set(entityId, unsubscribe);
            }
        }
        /**
         * Handle a state update for a single entity. Reassign `states` with a new
         * object reference so Lit detects the change and re-renders.
         */ _onState(entityId, state) {
            this.states = (0, $1izJ2._)((0, $kJycS._)({}, this.states), {
                [entityId]: state
            });
        }
        constructor(){
            super(...arguments);
            /**
             * Active subscriptions, keyed by entity_id. The keys of this map are the
             * set of entities we are currently subscribed to.
             */ this._unsubscribes = new Map();
            /**
             * The current state of each subscribed entity, keyed by entity_id.
             * Reactive: reassigned (never mutated in place) so Lit re-renders.
             */ this.states = {};
        }
    }
    $df8fd303fc05ef66$var$__decorate([
        (0, $lYE5o.state)()
    ], SubscribeEntityStateClass.prototype, "states", void 0);
    return SubscribeEntityStateClass;
};
module.exports.SubscribeEntityStateMixin = $df8fd303fc05ef66$var$SubscribeEntityStateMixin;

});
parcelRegister("fAhtX", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.StatesEventHandler = module.exports.ResubscribeScheduler = module.exports.getEntitySubscriptionManager = module.exports.EntitySubscriptionManager = void 0;

var $cMOUV = parcelRequire("cMOUV");
Object.defineProperty(module.exports, "EntitySubscriptionManager", {
    enumerable: true,
    get: function() {
        return $cMOUV.EntitySubscriptionManager;
    }
});
Object.defineProperty(module.exports, "getEntitySubscriptionManager", {
    enumerable: true,
    get: function() {
        return $cMOUV.getEntitySubscriptionManager;
    }
});

var $gmnsX = parcelRequire("gmnsX");
Object.defineProperty(module.exports, "ResubscribeScheduler", {
    enumerable: true,
    get: function() {
        return $gmnsX.ResubscribeScheduler;
    }
});

var $l8KlY = parcelRequire("l8KlY");
Object.defineProperty(module.exports, "StatesEventHandler", {
    enumerable: true,
    get: function() {
        return $l8KlY.StatesEventHandler;
    }
});

});
parcelRegister("cMOUV", function(module, exports) {
"use strict";
/**
 * Per-connection singleton that consolidates entity subscriptions.
 * Multiple elements across cards share one subscribe_entities call.
 *
 * @see https://developers.home-assistant.io/docs/api/websocket#subscribe_entities
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.EntitySubscriptionManager = void 0;
module.exports.getEntitySubscriptionManager = $94f176d58d02dce8$var$getEntitySubscriptionManager;

var $hKCRN = parcelRequire("hKCRN");

var $gmnsX = parcelRequire("gmnsX");

var $l8KlY = parcelRequire("l8KlY");
const $94f176d58d02dce8$var$managers = new Map();
function $94f176d58d02dce8$var$getEntitySubscriptionManager(hass) {
    const conn = hass.connection;
    let manager = $94f176d58d02dce8$var$managers.get(conn);
    if (!manager) {
        manager = new $94f176d58d02dce8$var$EntitySubscriptionManager(hass);
        $94f176d58d02dce8$var$managers.set(conn, manager);
    }
    return manager;
}
/** One manager per connection; tracks listeners per entity and maintains a single subscribe_entities call. */ class $94f176d58d02dce8$var$EntitySubscriptionManager {
    /** Subscribe to entity; returns unsubscribe fn. Batches resubscribe when entity set changes. */ subscribe(entityId, onChange) {
        let set = this._listeners.get(entityId);
        if (!set) {
            set = new Set();
            this._listeners.set(entityId, set);
        }
        set.add(onChange);
        const entityWasNew = set.size === 1;
        if (entityWasNew) this._scheduleResubscribe();
        this._deliverInitialState(entityId, onChange);
        return ()=>{
            const s = this._listeners.get(entityId);
            if (!s) return;
            s.delete(onChange);
            if (s.size === 0) {
                this._listeners.delete(entityId);
                this._state.delete(entityId);
                this._scheduleResubscribe();
            }
        };
    }
    _scheduleResubscribe() {
        this._scheduler.schedule(()=>this._resubscribe());
    }
    _resubscribe() {
        if (this._unsubscribe) {
            this._unsubscribe();
            this._unsubscribe = undefined;
        }
        const entityIds = [
            ...this._listeners.keys()
        ];
        if (entityIds.length === 0) return;
        const connection = this._hass.connection;
        if (!(connection === null || connection === void 0 ? void 0 : connection.subscribeMessage)) return;
        const version = ++this._resubscribeVersion;
        connection.subscribeMessage((ev)=>this._handleEvent(ev), {
            type: 'subscribe_entities',
            entity_ids: entityIds
        }).then((unsub)=>{
            if (version !== this._resubscribeVersion) {
                unsub();
                return;
            }
            this._unsubscribe = unsub;
        });
    }
    _handleEvent(ev) {
        this._eventHandler.handle(ev);
    }
    /**
     * Push current known state to a listener immediately. Required when multiple
     * elements subscribe to the same entity: only the first subscription
     * triggers subscribe_entities, so later listeners would otherwise stay empty
     * until the next websocket change. Falls back to the `hass.states` snapshot
     * so even the first listener gets a value without waiting for the debounced
     * resubscribe round-trip.
     */ _deliverInitialState(entityId, onChange) {
        let state = this._state.get(entityId);
        if (!state) {
            state = (0, $hKCRN.getState)(this._hass, entityId);
            if (state) this._state.set(entityId, state);
        }
        onChange(state);
    }
    constructor(hass){
        this._listeners = new Map();
        this._state = new Map();
        this._scheduler = new $gmnsX.ResubscribeScheduler();
        this._resubscribeVersion = 0;
        this._hass = hass;
        this._eventHandler = new $l8KlY.StatesEventHandler(this._listeners, this._state, this._hass);
    }
}
module.exports.EntitySubscriptionManager = $94f176d58d02dce8$var$EntitySubscriptionManager;

});
parcelRegister("hKCRN", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getState = void 0;
/**
 * Retrieves the state of an entity from `hass.states`.
 */ const $cec4e1aa10b6ed35$var$getState = (hass, entityId)=>{
    if (!entityId) return undefined;
    const state = hass.states[entityId];
    if (!state) return undefined;
    return {
        entity_id: state.entity_id,
        state: state.state,
        attributes: state.attributes,
        last_changed: state.last_changed,
        last_updated: state.last_updated
    };
};
module.exports.getState = $cec4e1aa10b6ed35$var$getState;

});

parcelRegister("gmnsX", function(module, exports) {
"use strict";
/**
 * Debounces resubscribe to batch rapid entity add/remove during dashboard load.
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ResubscribeScheduler = void 0;
const $be90e74af7706a71$var$RESUBSCRIBE_DEBOUNCE_MS = 50;
/** Debounces a callback; call schedule() to run fn after a short delay, reset on each call. */ class $be90e74af7706a71$var$ResubscribeScheduler {
    /** Run fn after debounce delay; resets timer if called again before firing. */ schedule(fn) {
        if (this._timer) clearTimeout(this._timer);
        this._timer = setTimeout(()=>{
            this._timer = undefined;
            fn();
        }, $be90e74af7706a71$var$RESUBSCRIBE_DEBOUNCE_MS);
    }
    /** Cancel any pending scheduled run. */ cancel() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    }
}
module.exports.ResubscribeScheduler = $be90e74af7706a71$var$ResubscribeScheduler;

});

parcelRegister("l8KlY", function(module, exports) {
"use strict";
/**
 * Handles subscribe_entities WebSocket events (add, remove, change).
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.StatesEventHandler = void 0;

var $hKCRN = parcelRequire("hKCRN");

var $16Z9S = parcelRequire("16Z9S");
/** Processes ev.a (add), ev.r (remove), ev.c (change) from subscribe_entities; updates state map and notifies listeners. */ class $f63e4d233b51a6c9$var$StatesEventHandler {
    /** Process one WebSocket event; only notifies entities we're subscribed to. */ handle(ev) {
        if (ev.a) this._handleAdd(ev.a);
        if (ev.r) this._handleRemove(ev.r);
        if (ev.c) this._handleChange(ev.c);
    }
    _handleAdd(added) {
        for (const [entityId, comp] of Object.entries(added)){
            if (!this._listeners.has(entityId)) continue;
            const state = (0, $16Z9S.compressedToEntityState)(entityId, comp);
            this._state.set(entityId, state);
            this._notify(entityId, state);
        }
    }
    _handleRemove(removed) {
        for (const entityId of removed){
            if (!this._listeners.has(entityId)) continue;
            this._state.delete(entityId);
            this._notify(entityId, undefined);
        }
    }
    _handleChange(changes) {
        for (const [entityId, diff] of Object.entries(changes)){
            if (!this._listeners.has(entityId)) continue;
            if (!(0, $16Z9S.isMeaningfulChange)(diff)) continue;
            var _this__state_get;
            const base = (_this__state_get = this._state.get(entityId)) !== null && _this__state_get !== void 0 ? _this__state_get : (0, $hKCRN.getState)(this._hass, entityId);
            if (!base) continue;
            const state = (0, $16Z9S.applyDiff)(base, entityId, diff);
            this._state.set(entityId, state);
            this._notify(entityId, state);
        }
    }
    _notify(entityId, state) {
        const set = this._listeners.get(entityId);
        if (!set) return;
        for (const fn of set)fn(state);
    }
    constructor(_listeners, _state, _hass){
        this._listeners = _listeners;
        this._state = _state;
        this._hass = _hass;
    }
}
module.exports.StatesEventHandler = $f63e4d233b51a6c9$var$StatesEventHandler;

});
parcelRegister("16Z9S", function(module, exports) {

var $kJycS = parcelRequire("kJycS");
"use strict";
/**
 * Shared helpers for processing subscribe_entities state diff format.
 * Used by entity-subscription-manager.
 *
 * @see https://developers.home-assistant.io/docs/api/websocket#subscribe_entities
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.compressedToEntityState = $0cf5cac5f0fe3383$var$compressedToEntityState;
module.exports.isMeaningfulChange = $0cf5cac5f0fe3383$var$isMeaningfulChange;
module.exports.applyDiff = $0cf5cac5f0fe3383$var$applyDiff;
const $0cf5cac5f0fe3383$var$COMPRESSED_STATE = 's';
const $0cf5cac5f0fe3383$var$COMPRESSED_ATTRIBUTES = 'a';
function $0cf5cac5f0fe3383$var$compressedToEntityState(entityId, comp) {
    const last_changed = new Date(comp.lc * 1000).toISOString();
    var _comp_a;
    return {
        entity_id: entityId,
        state: comp.s,
        attributes: (_comp_a = comp.a) !== null && _comp_a !== void 0 ? _comp_a : {},
        last_changed: last_changed,
        last_updated: comp.lu ? new Date(comp.lu * 1000).toISOString() : last_changed
    };
}
function $0cf5cac5f0fe3383$var$isMeaningfulChange(diff) {
    var _remove_a;
    const add = diff['+'];
    const remove = diff['-'];
    return (add === null || add === void 0 ? void 0 : add[$0cf5cac5f0fe3383$var$COMPRESSED_STATE]) !== undefined || (add === null || add === void 0 ? void 0 : add[$0cf5cac5f0fe3383$var$COMPRESSED_ATTRIBUTES]) !== undefined || (remove === null || remove === void 0 ? void 0 : (_remove_a = remove.a) === null || _remove_a === void 0 ? void 0 : _remove_a.length) !== undefined && remove.a.length > 0;
}
function $0cf5cac5f0fe3383$var$applyDiff(current, entityId, diff) {
    const add = diff['+'];
    const remove = diff['-'];
    let state = current.state;
    let last_changed = current.last_changed;
    let last_updated = current.last_updated;
    const attributes = (0, $kJycS._)({}, current.attributes);
    if (add) {
        if (add.s !== undefined) state = add.s;
        if (add.a) Object.assign(attributes, add.a);
        if (add.lc) last_changed = new Date(add.lc * 1000).toISOString();
        if (add.lu) last_updated = new Date(add.lu * 1000).toISOString();
    }
    if (remove === null || remove === void 0 ? void 0 : remove.a) for (const key of remove.a)delete attributes[key];
    return {
        entity_id: entityId,
        state: state,
        attributes: attributes,
        last_changed: last_changed,
        last_updated: last_updated
    };
}

});





parcelRegister("dTmXl", function(module, exports) {

$parcel$export(module.exports, "d", function () { return $86dc711946e77b66$export$4368d992c4eafac0; });
const $86dc711946e77b66$export$4368d992c4eafac0 = (config, component, category, ...args)=>{
    if (!(config === null || config === void 0 ? void 0 : config.debug)) return;
    const { scope: scope, categories: categories } = config.debug;
    if ((scope === null || scope === void 0 ? void 0 : scope.length) && !scope.includes(component)) return;
    if ((categories === null || categories === void 0 ? void 0 : categories.length) && !categories.includes(category)) return;
    // eslint-disable-next-line no-console -- intentional debug logging
    console.debug(`[${component}] ${category}`, ...args);
};

});

parcelRegister("htQni", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HassUpdateMixin = void 0;
/**
 * Mixin that keeps `hass` in sync with a scoped `hass-update` event.
 *
 * Stacks on `HassConfigMixin`, so the superclass already provides the `hass`
 * and `config` fields; this mixin just reassigns `hass` whenever a
 * `hass-update` event is fired on its scope. Use it on children whose parent
 * skips full Lit updates, so they can react to `hass` changes themselves.
 *
 * The listener is attached to the element's own root node (the parent card's
 * shadow tree) rather than `globalThis`, so each card's events stay isolated
 * from sibling cards on the same dashboard. The owning card should dispatch
 * `hass-update` on its own `shadowRoot`. A `_host` escape hatch handles
 * portalled descendants (e.g. dialogs HA's dialog manager moves out of the
 * tree).
 *
 * @param superClass - The base class to mixin
 */ const $cb9dc5a371e35fc4$var$HassUpdateMixin = (superClass)=>{
    class HassUpdateClass extends superClass {
        connectedCallback() {
            super.connectedCallback();
            this._bindHassUpdateListener();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._unbindHassUpdateListener();
        }
        /**
         * Attaches the listener to the closest scope: an explicit `_host`'s
         * shadow root if set (for portalled descendants), otherwise the
         * component's own root node (the parent shadow tree). Each card has a
         * distinct shadow root, so this naturally isolates events per card.
         *
         * Exposed so portalled descendants can re-bind after `_host` is supplied,
         * since their `connectedCallback` runs before the property is set.
         */ _bindHassUpdateListener() {
            if (this._listenerTarget) return;
            const target = this._resolveListenerTarget();
            if (target) {
                this._listenerTarget = target;
                target.addEventListener('hass-update', this._boundHassUpdateHandler);
            }
        }
        _unbindHassUpdateListener() {
            if (this._listenerTarget) {
                this._listenerTarget.removeEventListener('hass-update', this._boundHassUpdateHandler);
                this._listenerTarget = undefined;
            }
        }
        _resolveListenerTarget() {
            var _this__host;
            if ((_this__host = this._host) === null || _this__host === void 0 ? void 0 : _this__host.shadowRoot) return this._host.shadowRoot;
            const getRootNode = this.getRootNode;
            if (typeof getRootNode !== 'function') return undefined;
            const root = getRootNode.call(this);
            return root && root !== this ? root : undefined;
        }
        _handleHassUpdate(event) {
            const { detail: { hass: hass } } = event;
            this.hass = hass;
        }
        constructor(){
            super(...arguments);
            this._boundHassUpdateHandler = this._handleHassUpdate.bind(this);
        }
    }
    return HassUpdateClass;
};
module.exports.HassUpdateMixin = $cb9dc5a371e35fc4$var$HassUpdateMixin;

});

parcelRegister("cfP8R", function(module, exports) {

$parcel$export(module.exports, "localize", function () { return $026d47447e611f6a$export$b3bd0bc58e36cd63; });

var $gt41x = parcelRequire("gt41x");

var $1MmPK = parcelRequire("1MmPK");
const $026d47447e611f6a$export$b3bd0bc58e36cd63 = (0, $gt41x.createLocalize)({
    en: $1MmPK
});

});
parcelRegister("gt41x", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createLocalize = $bfd279ce4e52902e$var$createLocalize;
/**
 * Create a localize function bound to a card's translation files.
 * It will first check if the string exists in the user's language.
 * If not, it will fall back to the fallback language (default: English).
 */ function $bfd279ce4e52902e$var$createLocalize(languages, fallbackLanguage = 'en') {
    const fallback = languages[fallbackLanguage];
    return (hass, key, search = '', replace = '')=>{
        var _getNestedTranslation, _ref;
        let translated = (_ref = (_getNestedTranslation = $bfd279ce4e52902e$var$getNestedTranslation(languages[hass.language], key)) !== null && _getNestedTranslation !== void 0 ? _getNestedTranslation : $bfd279ce4e52902e$var$getNestedTranslation(fallback, key)) !== null && _ref !== void 0 ? _ref : key;
        if (search !== '' && replace !== '') translated = translated.replace(search, replace);
        return translated;
    };
}
function $bfd279ce4e52902e$var$getNestedTranslation(obj, path) {
    if (!obj) return undefined;
    const keys = path.split('.');
    let result = obj;
    for (const key of keys){
        if (result === undefined || result === null || typeof result !== 'object') return undefined;
        result = result[key];
    }
    return typeof result === 'string' ? result : undefined;
}

});

parcelRegister("1MmPK", function(module, exports) {
module.exports = JSON.parse('{"card":{"component":{"problem":{"dialog_title":"Problem Entities","no_problems":"No problem entities found","active":"Active","inactive":"Inactive"}}},"editor":{"area":{"area":"Area","area_name":"Area name","area_side_entities":"Area side entities","room_entity":"Room entity"},"background":{"background":"Background","background_image":"Background Image","background_image_entity":"Background Image Entity","background_opacity":"Background Opacity","disable_background_image":"Disable Background Image","hide_gradient":"Hide Background Gradient","multi_light_background":"Multi-Light Background","light_entities":"Light Entities","multi_light_background_info":"Configure which light entities should be tracked for the multi-light background feature. When enabled, the card background and room icon will light up when any of these lights are on. The card automatically discovers all lights in the area if no entities are specified."},"entity":{"entity_id":"Entity","entity_label":"Label","entity_attribute":"Attribute","entity_icon":"Icon","entity_on_color":"On Color","entity_off_color":"Off Color","ignore_entity":"Ignore Entity","show_entity_labels":"Show Entity Labels","use_entity_icon":"Use Entity Icon","show_state":"Show State","hide_zero_attribute_domains":"Hide State for Zero Attribute Domains","styles":"Styles","states":"States","add_state":"Add State","thresholds":"Thresholds","add_threshold":"Add Threshold","state":{"state":"State","operator":"Operator","icon_color":"Icon Color","title_color":"Title Color","icon":"Icon","label":"Label","attribute":"Attribute","styles":"Styles"},"threshold":{"threshold":"Threshold","icon_color":"Icon Color","title_color":"Title Color","icon":"Icon","label":"Label","attribute":"Attribute","styles":"Styles","operator":"Operator"},"badges":"Badges","add_badge":"Add Badge","slider":"Slider","slider_style":"Slider Style","slider_style_bar":"Bar (full-width strip)","slider_style_ha":"Standard HA Slider","slider_hide_icon":"Hide Icon (entity is shown only as the slider)"},"badge":{"position":{"top_right":"Top Right","top_left":"Top Left","bottom_right":"Bottom Right","bottom_left":"Bottom Left"},"position_label":"Position","mode":{"show_always":"Show Always","if_match":"If Match","homeassistant":"Home Assistant"},"mode_label":"Mode","label":"Badge Text","max_badges":"Maximum 4 badges allowed"},"entities":{"entities_info":"These options are for setting up the right side entities."},"icon":{"disable_icon_animations":"Disable Icon Animations","disable_icon_color":"Disable Icon Color","icon_background":"Icon Background","icon_background_color_occupied":"Icon Background Color (Occupied)","icon_background_color_smoke":"Icon Background Color (Smoke Detected)","icon_background_color_gas":"Icon Background Color (Gas Detected)","icon_background_color_water":"Icon Background Color (Water Detected)","hide_icon_only":"Hide Icon Only","hide_room_icon":"Hide Room Icon"},"card":{"card_border_color_occupied":"Card Border Color (Occupied)","card_border_color_smoke":"Card Border Color (Smoke Detected)","card_border_color_gas":"Card Border Color (Gas Detected)","card_border_color_water":"Card Border Color (Water Detected)","disable_card_border":"Disable Card Border","disable_card_border_animations":"Disable Card Border Animations","skip_card_background_styles":"Skip Card Background Styles"},"sensor":{"sensor_classes":"Sensor classes","hide_sensor_icons":"Hide Sensor icons","hide_sensor_labels":"Hide Sensor labels","hide_sensors":"Hide Sensors","individual_sensor_entities":"Individual sensor entities","sensors_info":"Sensors appear on the top row below the card title. They can be clicked for more info.","features_info":"Configure sensor display features:","hide_sensors_desc":"Hide the climate/sensor information","hide_sensor_icons_desc":"Hide the icons next to sensor values","hide_sensor_labels_desc":"Hide the labels next to sensor icons"},"threshold":{"thresholds":"Thresholds","temperature_threshold":"Temperature threshold","temperature_thresholds":"Temperature Thresholds","add_temperature_threshold":"Add Temperature Threshold","temperature_operator":"Temperature Operator","temperature_entity":"Temperature Entity","temperature_color":"Temperature Border Color","humidity_threshold":"Humidity threshold","humidity_thresholds":"Humidity Thresholds","add_humidity_threshold":"Add Humidity Threshold","humidity_operator":"Humidity Operator","humidity_entity":"Humidity Entity","humidity_color":"Humidity Border Color","mold_threshold":"Mold threshold","operator":{"equal":"Equal (=)","greater_than":"Greater than (>)","greater_than_or_equal":"Greater than or equal (\u2265)","less_than":"Less than (<)","less_than_or_equal":"Less than or equal (\u2264)","not_equal":"Not equal (\u2260)"}},"interactions":{"interactions":"Interactions","tap_action":"Tap Action","double_tap_action":"Double Tap Action","hold_action":"Hold Action"},"occupancy":{"occupancy_presence_detection":"Occupancy & Presence Detection","motion_occupancy_presence_sensors":"Motion/Occupancy/Presence Sensors","occupancy_options":"Options","occupancy_info":"Configure motion, occupancy, and presence detection sensors. When any sensor detects activity, the card border and room icon can change color to indicate the room is occupied."},"alarm":{"alarm_info":"Configure alarm detection sensors. Occupancy sensors detect motion/presence, smoke detectors detect smoke, gas sensors detect gas, and water sensors detect water. Priority: Smoke > Gas > Water > Occupancy.","occupancy_detection":"Occupancy Detection","smoke_detection":"Smoke Detection","gas_detection":"Gas Detection","water_detection":"Water Detection","motion_occupancy_presence_sensors":"Motion/Occupancy/Presence Sensors","smoke_detectors":"Smoke Detectors","gas_sensors":"Gas Sensors","water_sensors":"Water Sensors","alarm_options":"Options"},"problem":{"problem":"Problem Indicator","problem_display":"Display","problem_display_always":"Always","problem_display_active_only":"Active Problems Only","problem_display_never":"Never"},"styles":{"styles":"Styles","css_styles":"Your CSS Styles","card_styles":"Card Styles","entities_container_styles":"Entities Container Styles","entity_icon_styles":"Entity Icon Styles","room_entity_icon_styles":"Main Room Entity Icon Styles","sensor_styles":"Sensor Styles","stats_styles":"Stats Styles","title_styles":"Title Styles","skip_climate_styles":"Skip Climate Styles","skip_mold_styles":"Skip Mold Styles","icon_opacity_preset":"Icon Opacity Preset","icon_opacity_default":"Default","icon_opacity_medium":"Medium","icon_opacity_high_visibility":"High Visibility"},"layout":{"content":"Content","sensor_layout":"Sensor Layout","default_in_label_area":"Default (in label area)","bottom":"Bottom","vertical_stack":"Vertical Stack"},"stats":{"hide_area_stats":"Hide Area Stats"},"slider":{"slider_style":"Slider Style","minimalist":"Minimalist","track":"Track","line":"Line","filled":"Filled/Progress","gradient":"Gradient","dual_rail":"Dual Rail","dots":"Dots/Ticks","notched":"Notched","grid":"Grid","glow":"Glow","shadow_trail":"Shadow Trail","outlined":"Outlined Track","bar":"Bar (No Icon)","bar_filled":"Bar Filled (Proportional)"},"features":{"features":"Features","exclude_default_entities":"Exclude Default Entities","sticky_entities":"Sticky Entities","slider":"Slider","full_card_actions":"Full Card Actions","hide_hidden_entities":"Hide Hidden Entities","sticky_entities_info":"Keep entity positions stable even when their state is unavailable. This prevents UI layout shifts and makes it easier to tap entities on touch dashboards.","features_info":"Configure global features that affect how entities are displayed and handled:","show_entity_labels_desc":"Show entity labels under each entity icon","exclude_default_entities_desc":"Don\'t include default light/fan entities","ignore_entity_desc":"Ignore the entity property in the configuration","sticky_entities_desc":"Keep entity positions even when state is unavailable","slider_desc":"Display a single entity in a slider layout instead of the entity collection","full_card_actions_desc":"Make the entire card clickable using the room entity\'s tap/hold/double-tap actions","hide_hidden_entities_desc":"Skip entities that are marked as hidden in Home Assistant","options":"Options"},"light":{"type":"Type","ambient":"Ambient"}}}');

});


parcelRegister("aAO52", function(module, exports) {
$parcel$export(module.exports, "repeat", function () { return (parcelRequire("bvVEG")).repeat; });
parcelRequire("bvVEG");

});
parcelRegister("bvVEG", function(module, exports) {

$parcel$export(module.exports, "repeat", function () { return $861f50142b1ef3e8$export$76d90c956114f2c2; });

var $ci0wX = parcelRequire("ci0wX");

var $lnb0z = parcelRequire("lnb0z");

var $lV8FJ = parcelRequire("lV8FJ");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $861f50142b1ef3e8$var$u = (e, s, t)=>{
    const r = new Map;
    for(let l = s; l <= t; l++)r.set(e[l], l);
    return r;
}, $861f50142b1ef3e8$export$76d90c956114f2c2 = (0, $lnb0z.directive)(class extends (0, $lnb0z.Directive) {
    dt(e, s, t) {
        let r;
        void 0 === t ? t = s : void 0 !== s && (r = s);
        const l = [], o = [];
        let i = 0;
        for (const s of e)l[i] = r ? r(s, i) : i, o[i] = t(s, i), i++;
        return {
            values: o,
            keys: l
        };
    }
    render(e, s, t) {
        return this.dt(e, s, t).values;
    }
    update(s, [t, r, c]) {
        const d = (0, $lV8FJ.getCommittedValue)(s), { values: p, keys: a } = this.dt(t, r, c);
        if (!Array.isArray(d)) return this.ut = a, p;
        var _this_ut;
        const h = (_this_ut = this.ut) !== null && _this_ut !== void 0 ? _this_ut : this.ut = [], v = [];
        let m, y, x = 0, j = d.length - 1, k = 0, w = p.length - 1;
        for(; x <= j && k <= w;)if (null === d[x]) x++;
        else if (null === d[j]) j--;
        else if (h[x] === a[k]) v[k] = (0, $lV8FJ.setChildPartValue)(d[x], p[k]), x++, k++;
        else if (h[j] === a[w]) v[w] = (0, $lV8FJ.setChildPartValue)(d[j], p[w]), j--, w--;
        else if (h[x] === a[w]) v[w] = (0, $lV8FJ.setChildPartValue)(d[x], p[w]), (0, $lV8FJ.insertPart)(s, v[w + 1], d[x]), x++, w--;
        else if (h[j] === a[k]) v[k] = (0, $lV8FJ.setChildPartValue)(d[j], p[k]), (0, $lV8FJ.insertPart)(s, d[x], d[j]), j--, k++;
        else if (void 0 === m && (m = $861f50142b1ef3e8$var$u(a, k, w), y = $861f50142b1ef3e8$var$u(h, x, j)), m.has(h[x])) {
            if (m.has(h[j])) {
                const e = y.get(a[k]), t = void 0 !== e ? d[e] : null;
                if (null === t) {
                    const e = (0, $lV8FJ.insertPart)(s, d[x]);
                    (0, $lV8FJ.setChildPartValue)(e, p[k]), v[k] = e;
                } else v[k] = (0, $lV8FJ.setChildPartValue)(t, p[k]), (0, $lV8FJ.insertPart)(s, d[x], t), d[e] = null;
                k++;
            } else (0, $lV8FJ.removePart)(d[j]), j--;
        } else (0, $lV8FJ.removePart)(d[x]), x++;
        for(; k <= w;){
            const e = (0, $lV8FJ.insertPart)(s, v[w + 1]);
            (0, $lV8FJ.setChildPartValue)(e, p[k]), v[k++] = e;
        }
        for(; x <= j;){
            const e = d[x++];
            null !== e && (0, $lV8FJ.removePart)(e);
        }
        return this.ut = a, (0, $lV8FJ.setCommittedValue)(s, v), $ci0wX.noChange;
    }
    constructor(e){
        if (super(e), e.type !== (0, $lnb0z.PartType).CHILD) throw Error("repeat() can only be used in text expressions");
    }
});

});
parcelRegister("lnb0z", function(module, exports) {

$parcel$export(module.exports, "PartType", function () { return $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa; });
$parcel$export(module.exports, "directive", function () { return $f8f448f4cc7b38fe$export$99b43ad1ed32e735; });
$parcel$export(module.exports, "Directive", function () { return $f8f448f4cc7b38fe$export$befdefbdce210f91; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f8f448f4cc7b38fe$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $f8f448f4cc7b38fe$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $f8f448f4cc7b38fe$export$befdefbdce210f91 {
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
    constructor(t){}
}

});

parcelRegister("lV8FJ", function(module, exports) {

$parcel$export(module.exports, "isPrimitive", function () { return $ff55a5f0dbea74c9$export$c3825b437cbdea5c; });
$parcel$export(module.exports, "isSingleExpression", function () { return $ff55a5f0dbea74c9$export$7f431ad0fff82fd9; });
$parcel$export(module.exports, "insertPart", function () { return $ff55a5f0dbea74c9$export$291b2338ad9b0b30; });
$parcel$export(module.exports, "setChildPartValue", function () { return $ff55a5f0dbea74c9$export$cb8bf9562088e9f4; });
$parcel$export(module.exports, "setCommittedValue", function () { return $ff55a5f0dbea74c9$export$ea70d9dd5965b1c8; });
$parcel$export(module.exports, "getCommittedValue", function () { return $ff55a5f0dbea74c9$export$59e9bce518cde500; });
$parcel$export(module.exports, "removePart", function () { return $ff55a5f0dbea74c9$export$3133b3144bbba267; });

var $ci0wX = parcelRequire("ci0wX");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: $ff55a5f0dbea74c9$var$t } = (0, $ci0wX._$LH), $ff55a5f0dbea74c9$export$c3825b437cbdea5c = (o)=>null === o || "object" != typeof o && "function" != typeof o, $ff55a5f0dbea74c9$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $ff55a5f0dbea74c9$export$6b6d145ec2a44ca9 = (o, t)=>void 0 === t ? void 0 !== (o === null || o === void 0 ? void 0 : o._$litType$) : (o === null || o === void 0 ? void 0 : o._$litType$) === t, $ff55a5f0dbea74c9$export$6a0e8de894d2fcca = (o)=>{
    var _o__$litType$;
    return null != (o === null || o === void 0 ? void 0 : (_o__$litType$ = o._$litType$) === null || _o__$litType$ === void 0 ? void 0 : _o__$litType$.h);
}, $ff55a5f0dbea74c9$export$2f448fec17d50a3e = (o)=>void 0 !== (o === null || o === void 0 ? void 0 : o._$litDirective$), $ff55a5f0dbea74c9$export$f28e31de6a6eaf32 = (o)=>o === null || o === void 0 ? void 0 : o._$litDirective$, $ff55a5f0dbea74c9$export$7f431ad0fff82fd9 = (o)=>void 0 === o.strings, $ff55a5f0dbea74c9$var$s = ()=>document.createComment(""), $ff55a5f0dbea74c9$export$291b2338ad9b0b30 = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore($ff55a5f0dbea74c9$var$s(), l), c = e.insertBefore($ff55a5f0dbea74c9$var$s(), l);
        n = new $ff55a5f0dbea74c9$var$t(i, c, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, c = i !== o;
        if (c) {
            var _n__$AQ;
            let t;
            (_n__$AQ = n._$AQ) === null || _n__$AQ === void 0 ? void 0 : _n__$AQ.call(n, o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
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
}, $ff55a5f0dbea74c9$export$cb8bf9562088e9f4 = (o, t, i = o)=>(o._$AI(t, i), o), $ff55a5f0dbea74c9$var$u = {}, $ff55a5f0dbea74c9$export$ea70d9dd5965b1c8 = (o, t = $ff55a5f0dbea74c9$var$u)=>o._$AH = t, $ff55a5f0dbea74c9$export$59e9bce518cde500 = (o)=>o._$AH, $ff55a5f0dbea74c9$export$3133b3144bbba267 = (o)=>{
    var _o__$AP;
    (_o__$AP = o._$AP) === null || _o__$AP === void 0 ? void 0 : _o__$AP.call(o, !1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o = t.nextSibling;
        t.remove(), t = o;
    }
}, $ff55a5f0dbea74c9$export$7f600b8138c094dc = (o)=>{
    o._$AR();
};

});



parcelRegister("12mnG", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_entity_name.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.computeEntityEntryName = module.exports.computeEntityName = void 0;

var $cQY3S = parcelRequire("cQY3S");

var $972pa = parcelRequire("972pa");

var $9ncFf = parcelRequire("9ncFf");
const $0c1756bef8b4eca2$var$computeEntityName = (stateObj, hass)=>{
    const entry = hass.entities[stateObj.entity_id];
    if (!entry) // Fall back to state name if not in the entity registry (friendly name)
    return (0, $972pa.computeStateName)(stateObj);
    return (0, module.exports.computeEntityEntryName)(entry, hass);
};
module.exports.computeEntityName = $0c1756bef8b4eca2$var$computeEntityName;
const $0c1756bef8b4eca2$var$computeEntityEntryName = (entry, hass)=>{
    const name = entry.name || ('original_name' in entry ? entry.original_name : undefined);
    const device = entry.device_id ? hass.devices[entry.device_id] : undefined;
    if (!device) {
        if (name) return name;
        const stateObj = hass.states[entry.entity_id];
        if (stateObj) return (0, $972pa.computeStateName)(stateObj);
        return undefined;
    }
    const deviceName = (0, $cQY3S.computeDeviceName)(device);
    var _ref;
    // If the device name is the same as the entity name, consider empty entity name
    // this causes blank labels, not sure why HAS does this
    // if (deviceName === name) {
    //   return undefined;
    // }
    // Remove the device name from the entity name if it starts with it
    if (deviceName && name) return (_ref = (0, $9ncFf.stripPrefixFromEntityName)(name, deviceName)) !== null && _ref !== void 0 ? _ref : name;
    // slight fix - not the same in HAS
    return name !== null && name !== void 0 ? name : deviceName;
};
module.exports.computeEntityEntryName = $0c1756bef8b4eca2$var$computeEntityEntryName;

});
parcelRegister("cQY3S", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_device_name.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.computeDeviceName = void 0;
const $95b8ee58d630739a$var$computeDeviceName = (device)=>{
    var _this;
    var _device_name_by_user;
    return (_this = (_device_name_by_user = device.name_by_user) !== null && _device_name_by_user !== void 0 ? _device_name_by_user : device.name) === null || _this === void 0 ? void 0 : _this.trim();
};
module.exports.computeDeviceName = $95b8ee58d630739a$var$computeDeviceName;

});

parcelRegister("972pa", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_state_name.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.computeStateName = module.exports.computeStateNameFromEntityAttributes = void 0;

var $3L8ue = parcelRequire("3L8ue");
const $6a26a210b7f6da0f$var$computeStateNameFromEntityAttributes = (entityId, attributes)=>{
    var _attributes_friendly_name;
    return attributes.friendly_name === undefined ? (0, $3L8ue.computeObjectId)(entityId).replace(/_/g, ' ') : ((_attributes_friendly_name = attributes.friendly_name) !== null && _attributes_friendly_name !== void 0 ? _attributes_friendly_name : '').toString();
};
module.exports.computeStateNameFromEntityAttributes = $6a26a210b7f6da0f$var$computeStateNameFromEntityAttributes;
const $6a26a210b7f6da0f$var$computeStateName = (stateObj)=>(0, module.exports.computeStateNameFromEntityAttributes)(stateObj.entity_id, stateObj.attributes);
module.exports.computeStateName = $6a26a210b7f6da0f$var$computeStateName;

});
parcelRegister("3L8ue", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_object_id.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.computeObjectId = void 0;
/** Compute the object ID of a state. */ const $2bcc5829f060ae4a$var$computeObjectId = (entityId)=>entityId.slice(entityId.indexOf('.') + 1);
module.exports.computeObjectId = $2bcc5829f060ae4a$var$computeObjectId;

});


parcelRegister("9ncFf", function(module, exports) {
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/strip_prefix_from_entity_name.ts
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.stripPrefixFromEntityName = void 0;
const $6d3015ea6fcf30dd$var$SUFFIXES = [
    ' ',
    ': ',
    ' - '
];
/**
 * Strips a device name from an entity name.
 * @param entityName the entity name
 * @param prefix the prefix to strip
 * @returns
 */ const $6d3015ea6fcf30dd$var$stripPrefixFromEntityName = (entityName, prefix)=>{
    const lowerCasedEntityName = entityName.toLowerCase();
    const lowerCasedPrefix = prefix.toLowerCase();
    for (const suffix of $6d3015ea6fcf30dd$var$SUFFIXES){
        const lowerCasedPrefixWithSuffix = `${lowerCasedPrefix}${suffix}`;
        if (lowerCasedEntityName.startsWith(lowerCasedPrefixWithSuffix)) {
            const newName = entityName.substring(lowerCasedPrefixWithSuffix.length);
            if (newName.length) {
                var _newName_;
                // If first word already has an upper case letter (e.g. from brand name)
                // leave as-is, otherwise capitalize the first word.
                // Replicate substr(0, indexOf(' ')) behavior: when no space, indexOf returns -1,
                // and substr(0, -1) returns an empty string.
                const spaceIndex = newName.indexOf(' ');
                const firstWord = spaceIndex === -1 ? '' : newName.substring(0, spaceIndex);
                return $6d3015ea6fcf30dd$var$hasUpperCase(firstWord) ? newName : ((_newName_ = newName[0]) === null || _newName_ === void 0 ? void 0 : _newName_.toUpperCase()) + newName.slice(1);
            }
        }
    }
    return undefined;
};
module.exports.stripPrefixFromEntityName = $6d3015ea6fcf30dd$var$stripPrefixFromEntityName;
const $6d3015ea6fcf30dd$var$hasUpperCase = (str)=>str.toLowerCase() !== str;

});


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
 */ 
var $2QgUB = parcelRequire("2QgUB");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");

var $5R2d0 = parcelRequire("5R2d0");

const $7d7b3d36776b9b07$export$ae70458d21ee9b55 = ()=>// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Parcel dynamic chunk
    // @ts-ignore
    (parcelRequire("6c3D1"));
const $7d7b3d36776b9b07$export$dcf8bd1e24f4d8e9 = (element, params)=>{
    if (!(params === null || params === void 0 ? void 0 : params.entities) || params.entities.length === 0) return;
    (0, $5R2d0.fireEvent)(element, 'show-dialog', {
        dialogTag: 'problem-dialog',
        dialogImport: $7d7b3d36776b9b07$export$ae70458d21ee9b55,
        dialogParams: params
    });
};


const $93ab8e068532bba3$export$4bb1c5099bd99a57 = (mold, config)=>{
    var _config_thresholds;
    const moldThreshold = (_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.mold;
    // If no threshold is set, always show the mold indicator
    if (moldThreshold === undefined) return true;
    // Parse the mold state value as a number
    const moldValue = Number(mold.state);
    // If the value is not a valid number, don't show the indicator
    if (Number.isNaN(moldValue)) return false;
    // Show the indicator only if the mold value is at or above the threshold
    return moldValue >= moldThreshold;
};



var $gp9lG = parcelRequire("gp9lG");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");

var $8jUVR = parcelRequire("8jUVR");
let $d71beedfb309b5b1$var$_ = (t)=>t, $d71beedfb309b5b1$var$t, $d71beedfb309b5b1$var$t1, $d71beedfb309b5b1$var$t2, $d71beedfb309b5b1$var$t3, $d71beedfb309b5b1$var$t4;
const $d71beedfb309b5b1$export$8093665c9ba8ead9 = (hass, config, sensors, element)=>{
    var _config_problem;
    const { problemSensors: problemSensors } = sensors;
    const ids = problemSensors.map((sensor)=>sensor.entity_id);
    const problemExists = problemSensors.some((sensor)=>(0, $gp9lG.stateActive)(sensor));
    var _config_problem_display;
    const problemDisplay = (_config_problem_display = (_config_problem = config.problem) === null || _config_problem === void 0 ? void 0 : _config_problem.display) !== null && _config_problem_display !== void 0 ? _config_problem_display : 'always';
    // Determine if we should show the problem indicator
    let shouldShowIndicator = false;
    if (problemDisplay === 'always') shouldShowIndicator = problemSensors.length > 0;
    else if (problemDisplay === 'active_only') shouldShowIndicator = problemSensors.length > 0 && problemExists;
    return (0, $ci0wX.html)($d71beedfb309b5b1$var$t2 || ($d71beedfb309b5b1$var$t2 = $d71beedfb309b5b1$var$_`<div class="problems">
    ${0}
    ${0}
  </div>`), shouldShowIndicator ? (0, $ci0wX.html)($d71beedfb309b5b1$var$t || ($d71beedfb309b5b1$var$t = $d71beedfb309b5b1$var$_`<span
          class="status-entities"
          ?has-problems=${0}
          @click=${0}
          >${0}</span
        >`), problemExists, ()=>(0, $7d7b3d36776b9b07$export$dcf8bd1e24f4d8e9)(element, {
            entities: ids,
            config: config,
            ownerHost: element
        }), problemSensors.length) : (0, $ci0wX.nothing), sensors.mold && (0, $93ab8e068532bba3$export$4bb1c5099bd99a57)(sensors.mold, config) ? (0, $ci0wX.html)($d71beedfb309b5b1$var$t1 || ($d71beedfb309b5b1$var$t1 = $d71beedfb309b5b1$var$_`<div class="mold-indicator">
          <ha-state-icon
            .hass=${0}
            .stateObj=${0}
          ></ha-state-icon>
          <span class="mold-text">${0}</span>
        </div>`), hass, sensors.mold, (0, $8jUVR.stateDisplay)(hass, sensors.mold)) : (0, $ci0wX.nothing));
};
const $d71beedfb309b5b1$export$6697a659ce63852 = (hass, entity, config, options = {})=>{
    var _config_features;
    const { state: state } = entity;
    const stickyEntitiesEnabled = (_config_features = config.features) === null || _config_features === void 0 ? void 0 : _config_features.includes('sticky_entities');
    const { isMainRoomEntity: isMainRoomEntity = false, isActive: isActive, alarm: alarm } = options;
    // If state is undefined and sticky entities is not enabled, return nothing
    if (!state && !stickyEntitiesEnabled) return 0, $ci0wX.nothing;
    if (!state && stickyEntitiesEnabled) return (0, $ci0wX.html)($d71beedfb309b5b1$var$t3 || ($d71beedfb309b5b1$var$t3 = $d71beedfb309b5b1$var$_`<div class="sticky-entity"></div>`));
    /*
   * Order of properties is important for logic checks
   * Set config and hass last
   */ return (0, $ci0wX.html)($d71beedfb309b5b1$var$t4 || ($d71beedfb309b5b1$var$t4 = $d71beedfb309b5b1$var$_`<room-state-icon
    .isMainRoomEntity=${0}
    .isActive=${0}
    .alarm=${0}
    .entity=${0}
    .config=${0}
    .hass=${0}
  ></room-state-icon>`), isMainRoomEntity, isActive, alarm, entity, config, hass);
};



var $2QgUB = parcelRequire("2QgUB");

var $g28NR = parcelRequire("g28NR");

var $jc0SV = parcelRequire("jc0SV");
var $1e40c00d469c9d00$exports = {};
"use strict";
Object.defineProperty($1e40c00d469c9d00$exports, "__esModule", {
    value: true
});
$1e40c00d469c9d00$exports.hasFeature = void 0;
/**
 * Determines if a specified feature is enabled in the provided configuration.
 *
 * @param config - The configuration object containing feature flags
 * @param feature - The specific feature to check for
 * @returns True if the feature is enabled, false otherwise
 */ const $1e40c00d469c9d00$var$hasFeature = (config, feature)=>{
    var _config_features;
    return !config || ((_config_features = config.features) === null || _config_features === void 0 ? void 0 : _config_features.includes(feature)) || false;
};
$1e40c00d469c9d00$exports.hasFeature = $1e40c00d469c9d00$var$hasFeature;


const $8f71a348c8e54f2c$export$abc50289182506e4 = (config, active, state)=>{
    var _config_background;
    const skipStyles = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_entity_styles');
    const raw = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : _config_background.opacity;
    let opacity;
    if (typeof raw === 'number' && raw) opacity = raw / 100;
    else if (typeof raw === 'string' && state) {
        const parsed = Number.parseFloat(state.state);
        if (Number.isFinite(parsed)) {
            const isPercent = state.attributes.unit_of_measurement === '%' || parsed > 1;
            opacity = Math.max(0, Math.min(1, isPercent ? parsed / 100 : parsed));
        }
    }
    return {
        '--user-opacity': opacity,
        '--background-opacity-card': `var(--opacity-background-${active && !skipStyles ? 'active' : 'inactive'})`
    };
};


var $f554b0d97be25fc9$var$safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function $f554b0d97be25fc9$var$isEqual(first, second) {
    if (first === second) return true;
    if ($f554b0d97be25fc9$var$safeIsNaN(first) && $f554b0d97be25fc9$var$safeIsNaN(second)) return true;
    return false;
}
function $f554b0d97be25fc9$var$areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!$f554b0d97be25fc9$var$isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function $f554b0d97be25fc9$export$2e2bcd8739ae039(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = $f554b0d97be25fc9$var$areInputsEqual;
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


const $b02f37b9ae80224f$export$47f3d980c4d9b226 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity, feature)=>{
    var _entity_config_features;
    return !entity || ((_entity_config_features = entity.config.features) === null || _entity_config_features === void 0 ? void 0 : _entity_config_features.includes(feature)) || false;
});



const $7806862517a8ec93$export$520c40045967cb15 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((areas, areaId)=>areas[areaId]);



var $h7W3o = parcelRequire("h7W3o");

const $6d9b59681496f671$export$50fdfeece43146fd = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((states, entityId, fakeState = false)=>{
    if (!entityId) return undefined;
    var _states_entityId;
    const state = (_states_entityId = states[entityId]) !== null && _states_entityId !== void 0 ? _states_entityId : fakeState ? {
        entity_id: entityId,
        state: 'off',
        attributes: {
            friendly_name: ''
        },
        last_changed: '',
        last_updated: ''
    } : undefined;
    if (!state) return undefined;
    const domain = (0, $h7W3o.computeDomain)(state.entity_id);
    return {
        state: state.state,
        attributes: state.attributes,
        entity_id: state.entity_id,
        last_changed: state.last_changed,
        last_updated: state.last_updated,
        domain: domain
    };
});



var $h7W3o = parcelRequire("h7W3o");
const $be1aa69a1c2a424c$export$b372a12fd687417 = (entity)=>{
    var _entity_state_attributes, _entity_state;
    if (!entity || (0, $b02f37b9ae80224f$export$47f3d980c4d9b226)(entity, 'use_entity_icon')) return undefined;
    const picture = (_entity_state = entity.state) === null || _entity_state === void 0 ? void 0 : (_entity_state_attributes = _entity_state.attributes) === null || _entity_state_attributes === void 0 ? void 0 : _entity_state_attributes.entity_picture;
    return typeof picture === 'string' ? picture : undefined;
};
const $be1aa69a1c2a424c$export$5bff4624c0a6c79a = (entity)=>{
    var _entity_state, _entity_state1;
    // Gate on the picture so `use_entity_icon` and picture-less entities opt
    // out here exactly as they do everywhere else that reads this.
    const picture = $be1aa69a1c2a424c$export$b372a12fd687417(entity);
    if (!picture) return undefined;
    const entityId = entity === null || entity === void 0 ? void 0 : (_entity_state = entity.state) === null || _entity_state === void 0 ? void 0 : _entity_state.entity_id;
    if (entityId && (entity === null || entity === void 0 ? void 0 : (_entity_state1 = entity.state) === null || _entity_state1 === void 0 ? void 0 : _entity_state1.domain) === 'camera') return {
        camera_image: entityId,
        camera_view: 'auto'
    };
    return {
        image: picture
    };
};
const $be1aa69a1c2a424c$export$3474b6a6793aedb2 = (config, entity, isMainRoomEntity)=>{
    var _config_background_options, _config_background;
    if ($be1aa69a1c2a424c$export$b372a12fd687417(entity)) return true;
    var _config_background_options_includes;
    return isMainRoomEntity && ((_config_background_options_includes = config === null || config === void 0 ? void 0 : (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('hide_icon_only')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false);
};
const $be1aa69a1c2a424c$export$1c5d878426377725 = (hass, config)=>{
    var _config_background_options, _config_background, _config_background1, _config_background2, _getArea;
    if ((_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('disable')) return undefined;
    const entityId = (_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : _config_background1.image_entity;
    if (entityId) {
        var _getState_attributes, _getState;
        if ((0, $h7W3o.computeDomain)(entityId) === 'camera') return {
            camera_image: entityId,
            camera_view: 'auto'
        };
        // image.* / person.* / anything with an entity picture
        const picture = (_getState = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, entityId)) === null || _getState === void 0 ? void 0 : (_getState_attributes = _getState.attributes) === null || _getState_attributes === void 0 ? void 0 : _getState_attributes.entity_picture;
        if (typeof picture === 'string') return {
            image: picture
        };
    }
    const image = (_config_background2 = config.background) === null || _config_background2 === void 0 ? void 0 : _config_background2.image;
    if (image) return {
        image: typeof image === 'string' ? image : image.media_content_id
    };
    const areaPicture = (_getArea = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area)) === null || _getArea === void 0 ? void 0 : _getArea.picture;
    return areaPicture ? {
        image: areaPicture
    } : undefined;
};


var $ee3d06fe83a6a770$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
$ee3d06fe83a6a770$exports = function equal(a, b) {
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


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $44af7b24ffdbb901$var$_ = (t)=>t, $44af7b24ffdbb901$var$t;
const $44af7b24ffdbb901$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($44af7b24ffdbb901$var$t || ($44af7b24ffdbb901$var$t = $44af7b24ffdbb901$var$_`
  :host {
    --default-overlay: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }

  :host([icon]) {
    --default-overlay: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }

  .color {
    position: absolute;
    inset: 0;
    background-color: var(--background-color-card);
    opacity: var(
      --user-opacity,
      var(--opacity-theme, var(--background-opacity-card))
    );
    filter: var(--background-filter, none);
  }

  /* The image covers the box (object-fit: cover), so it fully occludes the
     color underneath — exactly as the old single ha-card::before did, where
     background-image painted over background-color. Keeping both visible
     would composite the state color through the image as a tint. */
  :host([image]) .color {
    display: none;
  }

  /* icon_background mode: the user-configured opacity belongs to the
     icon's background (room-state-icon routes it there), so the card
     color layer falls back to the theme opacity chain. */
  :host([icon-bg]:not([icon])) .color {
    opacity: var(--opacity-theme, var(--background-opacity-card));
  }

  /* Image layer: hui-image fills the box (object-fit: cover inside),
     with the user gradient composited on top via ::after. Opacity and
     filter apply to the wrapper so image + gradient fade as one, matching
     the old single-declaration CSS background. */
  .image {
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: var(
      --user-opacity,
      var(--opacity-theme, var(--background-opacity-card))
    );
    filter: var(--background-filter, none);
  }

  /* Backgrounds are decoration: never let the <img> become the event
     target (or a native drag source) for the card / icon action handlers. */
  .color,
  .image {
    pointer-events: none;
  }

  .image hui-image {
    display: block;
    width: 100%;
    height: 100%;
  }

  .image::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(
      --user-background-image-overlay,
      var(--default-overlay)
    );
  }

  /* 'hide_gradient' option — show the image with no darkening overlay. */
  :host([hide-gradient]) .image::after {
    display: none;
  }

  /* Icon placement: the fill circle. Alarm state is routed in by
     room-state-icon via the --icon-alarm-* variables.

     The layers round themselves (as the old .icon::before did) rather than
     room-state-icon clipping its whole host — the host box also holds
     badges (offset -5% outside the circle) and the state label below it,
     which a host-level circular clip would cut off. */
  :host([icon]) .color {
    border-radius: 50%;
    background-color: var(--icon-alarm-color, var(--background-color-icon));
    opacity: var(--icon-color-opacity, var(--background-opacity-icon));
    filter: var(--icon-filter, none);
    animation: var(--icon-alarm-animation, none);
    transition: var(--icon-alarm-transition, none);
  }

  :host([icon]) .image {
    border-radius: 50%;
    opacity: var(--icon-color-opacity, var(--background-opacity-icon));
    filter: var(--icon-filter, none);
    animation: var(--icon-alarm-animation, none);
    transition: var(--icon-alarm-transition, none);
  }

  /* Same keyframes as room-state-icon; animation names don't resolve
     across shadow trees, so the color layer needs its own copy. */
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
`));


let $2ae3348658708615$var$_ = (t)=>t, $2ae3348658708615$var$t, $2ae3348658708615$var$t1;
class $2ae3348658708615$export$babe2268d47cd6 extends (0, $jc0SV.SubscribeEntityStateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement))) {
    set config(config) {
        var _config_background_options, _config_background, _config_background_options1, _config_background1, _config_background2;
        this._config = config;
        var _config_background_options_includes;
        this._iconBackground = (_config_background_options_includes = (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('icon_background')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false;
        var _config_background_options_includes1;
        this._hideGradient = (_config_background_options_includes1 = (_config_background1 = config.background) === null || _config_background1 === void 0 ? void 0 : (_config_background_options1 = _config_background1.options) === null || _config_background_options1 === void 0 ? void 0 : _config_background_options1.includes('hide_gradient')) !== null && _config_background_options_includes1 !== void 0 ? _config_background_options_includes1 : false;
        const mapped = (0, $be1aa69a1c2a424c$export$1c5d878426377725)(this.hass, this._config);
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(mapped, this._huiConfig)) this._huiConfig = mapped;
        // Subscribe to config.background.opacity when it names an entity_id, so
        // getBackgroundOpacity picks up its state (see SubscribeEntityStateMixin).
        // Only the instance that actually consumes --user-opacity subscribes: a
        // card renders one background layer per entity icon plus one for itself,
        // and subscribing from all of them would register N duplicate watchers
        // for the same entity.
        const opacity = (_config_background2 = config.background) === null || _config_background2 === void 0 ? void 0 : _config_background2.opacity;
        const wanted = this._ownsUserOpacity && typeof opacity === 'string' ? [
            opacity
        ] : [];
        // Reassign only on a real change — `config` is re-set on every parent
        // render, and a fresh array each time would schedule a wasted update.
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(wanted, this.entities)) this.entities = wanted;
    }
    /**
   * Whether this layer is the one the user-configured `background.opacity`
   * applies to. The card owns it normally; in `icon_background` mode it
   * moves to the main room icon (see the routing rule in
   * room-state-icon's styles). Every other layer ignores it, so they
   * neither subscribe to nor emit `--user-opacity`.
   */ get _ownsUserOpacity() {
        return this.icon ? this.room && this._iconBackground : !this._iconBackground;
    }
    /**
   * State of the entity referenced by `background.opacity`, when
   * configured as an entity_id (see `getBackgroundOpacity`).
   */ get _opacityState() {
        var _this__config_background, _this__config;
        const opacity = (_this__config = this._config) === null || _this__config === void 0 ? void 0 : (_this__config_background = _this__config.background) === null || _this__config_background === void 0 ? void 0 : _this__config_background.opacity;
        return typeof opacity === 'string' ? this.states[opacity] : undefined;
    }
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $44af7b24ffdbb901$export$9dd6ff9ea0189349;
    }
    /**
   * The entity's own image, used only in icon placement. Cameras map to
   * `camera_image` so the icon refreshes; everything else to its
   * `entity_picture` (see `getEntityHuiImageConfig`).
   */ get _entityHuiConfig() {
        return this.icon ? (0, $be1aa69a1c2a424c$export$5bff4624c0a6c79a)(this.roomEntity) : undefined;
    }
    /**
   * Whether the image layer renders in this placement, derived entirely
   * from config and the entity. Card placement: image configured and not
   * delegated to the icon. Icon placement: the entity's own picture, or
   * the mapped background when the main icon owns it (`icon_background`).
   */ get _showImage() {
        if (this.icon) // this is rendered in a room-state-icon
        return !!this._entityHuiConfig || this.room && this._iconBackground && !!this._huiConfig;
        // this is rendered in a room-summary-card
        return !!this._huiConfig && !this._iconBackground;
    }
    /**
   * Reflects `image` so outside CSS (e.g. the card's dimming vars) can
   * key off whether an image is actually rendered here, and `icon-bg` —
   * on the card layer so its color ignores the user opacity, and on the
   * main icon's layer so room-state-icon routes that opacity to the
   * icon fill instead.
   */ willUpdate() {
        this.toggleAttribute('image', this._showImage);
        this.toggleAttribute('icon-bg', this._iconBackground && (!this.icon || this.room));
        this.toggleAttribute('hide-gradient', this._hideGradient);
        this._applyOpacity();
    }
    /**
   * Sets the background opacity vars on the host, where both this
   * component's layers and outside routing rules (room-state-icon's
   * icon fill) resolve them.
   */ _applyOpacity() {
        if (!this._config) return;
        const vars = (0, $8f71a348c8e54f2c$export$abc50289182506e4)(this._config, this.isActive, this._opacityState);
        // Layers that don't own the user opacity leave the var unset so their
        // fill falls through to the theme chain.
        if (!this._ownsUserOpacity) vars['--user-opacity'] = undefined;
        for (const [name, value] of Object.entries(vars))if (value === undefined) this.style.removeProperty(name);
        else this.style.setProperty(name, String(value));
    }
    /**
   * renders the lit element card
   * @returns The rendered HTML template
   */ render() {
        var _this__entityHuiConfig;
        // The icon's own entity wins over the mapped background config.
        const hui = (_this__entityHuiConfig = this._entityHuiConfig) !== null && _this__entityHuiConfig !== void 0 ? _this__entityHuiConfig : this._huiConfig;
        return (0, $ci0wX.html)($2ae3348658708615$var$t1 || ($2ae3348658708615$var$t1 = $2ae3348658708615$var$_`
      <div class="color"></div>
      ${0}
    `), this._showImage && hui ? (0, $ci0wX.html)($2ae3348658708615$var$t || ($2ae3348658708615$var$t = $2ae3348658708615$var$_`
            <div class="image">
              <hui-image
                .hass=${0}
                .image=${0}
                .cameraImage=${0}
                .cameraView=${0}
                .fitMode=${0}
              ></hui-image>
            </div>
          `), this.hass, hui.image, hui.camera_image, hui.camera_view, 'cover') : (0, $ci0wX.nothing));
    }
    constructor(...args){
        super(...args), /**
   * Render as an icon-circle background instead of the card body
   */ this.icon = false, /**
   * Icon placement only: whether this icon is the main room entity.
   * Only the main icon may take over the card background in
   * `icon_background` mode; other icons show only their own
   * `entity_picture`.
   */ this.room = false, /**
   * Whether the room is considered active — selects the active/inactive
   * theme opacity for the color layer. Fed by the card's delegates
   * (ambient-light-aware room activity is business logic that belongs
   * there, not in this component).
   */ this.isActive = false, /**
   * Whether the background is delegated to the main icon
   * (`icon_background` option). Tracked as state so toggling the option
   * re-renders even when the mapped image config is unchanged.
   */ this._iconBackground = false, /**
   * Whether the user gradient overlay is suppressed (`hide_gradient`).
   */ this._hideGradient = false;
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true
    })
], $2ae3348658708615$export$babe2268d47cd6.prototype, "icon", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $2ae3348658708615$export$babe2268d47cd6.prototype, "room", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false,
        hasChanged: (newVal, oldVal)=>!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(newVal, oldVal)
    })
], $2ae3348658708615$export$babe2268d47cd6.prototype, "roomEntity", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $2ae3348658708615$export$babe2268d47cd6.prototype, "isActive", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $2ae3348658708615$export$babe2268d47cd6.prototype, "_huiConfig", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $2ae3348658708615$export$babe2268d47cd6.prototype, "_iconBackground", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $2ae3348658708615$export$babe2268d47cd6.prototype, "_hideGradient", void 0);
$2ae3348658708615$export$babe2268d47cd6 = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('room-background-image')
], $2ae3348658708615$export$babe2268d47cd6);



var $kJycS = parcelRequire("kJycS");

var $5R2d0 = parcelRequire("5R2d0");
var $aa262bffb44e26da$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/common/directives/action-handler-directive.ts
 */ Object.defineProperty($aa262bffb44e26da$exports, "__esModule", {
    value: true
});
$aa262bffb44e26da$exports.actionHandler = $aa262bffb44e26da$exports.actionHandlerBind = void 0;
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
parcelRequire("lnb0z");


var $lnb0z = parcelRequire("lnb0z");
const $aa262bffb44e26da$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector('action-handler')) return body.querySelector('action-handler');
    const actionhandler = document.createElement('action-handler');
    body.appendChild(actionhandler);
    return actionhandler;
};
const $aa262bffb44e26da$var$actionHandlerBind = (element, options)=>{
    const actionhandler = $aa262bffb44e26da$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
$aa262bffb44e26da$exports.actionHandlerBind = $aa262bffb44e26da$var$actionHandlerBind;
$aa262bffb44e26da$exports.actionHandler = (0, $lnb0z.directive)(class extends $lnb0z.Directive {
    update(part, [options]) {
        (0, $aa262bffb44e26da$exports.actionHandlerBind)(part.element, options);
        return $ci0wX.noChange;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(_options) {}
});


const $b96673d7637fba33$export$8a44987212de21b = (entity)=>{
    var _entity_config, _entity_config1;
    const isActionEnabled = (actionConfig)=>(actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.action) !== 'none' && (actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.action) !== undefined;
    return (0, $aa262bffb44e26da$exports.actionHandler)({
        hasDoubleClick: isActionEnabled((_entity_config = entity.config) === null || _entity_config === void 0 ? void 0 : _entity_config.double_tap_action),
        hasHold: isActionEnabled((_entity_config1 = entity.config) === null || _entity_config1 === void 0 ? void 0 : _entity_config1.hold_action)
    });
};
const $b96673d7637fba33$export$3d3654ce4577c53d = (element, entity)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            var _ev_detail;
            // Extract action from event detail
            const action = (_ev_detail = ev.detail) === null || _ev_detail === void 0 ? void 0 : _ev_detail.action;
            if (!action) return;
            // Create configuration object for the action
            const config = (0, $kJycS._)({
                entity: entity.config.entity_id
            }, entity.config);
            (0, $5R2d0.fireEvent)(element, 'hass-action', {
                config: config,
                action: action
            });
        }
    };
};



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");
const $69eb2992476f80e8$export$f4c1e7ce0a330ff4 = (entity, config)=>(0, $1izJ2._)((0, $kJycS._)({}, entity), {
        config: (0, $kJycS._)({}, entity.config, config.actions)
    });



var $gp9lG = parcelRequire("gp9lG");
/**
 * Maps Home Assistant domains to their conventional active state colors
 * Returns a color name from the standard HA_COLORS list
 *
 * @param domain - The Home Assistant domain (e.g., 'light', 'switch', 'cover')
 * @returns Color name from HA_COLORS (e.g., 'amber', 'blue')
 */ const $4b849e6973597846$export$426ed50d9b9daf3a = (domain)=>{
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
 */ parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $caf1696fa639ec30$var$_ = (t)=>t, $caf1696fa639ec30$var$t, $caf1696fa639ec30$var$t1, $caf1696fa639ec30$var$t2, $caf1696fa639ec30$var$t3, $caf1696fa639ec30$var$t4, $caf1696fa639ec30$var$t5;
const $caf1696fa639ec30$export$33537d9e76cd536a = [
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
const $caf1696fa639ec30$export$30317f76025d8bf5 = [
    'red',
    'green',
    'yellow',
    'blue',
    'purple',
    'grey',
    'pink',
    'theme'
];
const $caf1696fa639ec30$export$dec94ffc2d530e03 = (0, $2SS2a.css)($caf1696fa639ec30$var$t || ($caf1696fa639ec30$var$t = $caf1696fa639ec30$var$_`
  --theme-color-minimalist: rgb(var(--color-theme));
`));
const $caf1696fa639ec30$export$7ec899f7a316957e = (0, $2SS2a.css)($caf1696fa639ec30$var$t1 || ($caf1696fa639ec30$var$t1 = $caf1696fa639ec30$var$_`
  /* Glass effect - uses standard HA card variables set by the theme */
  --theme-box-shadow-frosted: var(
    --ha-card-box-shadow,
    0 12px 20px rgba(0, 0, 0, 0.15)
  );
  --theme-border-color-frosted: var(
    --ha-card-border-color,
    rgba(255, 255, 255, 0.3)
  );
  --theme-border-width-frosted: var(--ha-card-border-width, 0.5px);
  --theme-border-radius-frosted: var(--ha-card-border-radius, 18px);

  /* Frosted Glass sets backdrop-filter via card-mod, but we can pick it up if available */
  --theme-backdrop-filter-frosted: var(
    --ha-card-backdrop-filter,
    var(--app-header-backdrop-filter, blur(8px) saturate(1.2))
  );

  /* Tint + sheen (these are used as var() knobs in Frosted Glass' card-mod styles) */
  --theme-glass-tint-frosted: var(
    --ha-card-glass-tint,
    rgba(255, 255, 255, 0.08)
  );
  --theme-glass-inset-shadow-frosted: var(
    --ha-card-glass-inset-shadow,
    3px 3px 0.5px -3.5px rgba(255, 255, 255, 0.3) inset,
    -2px -2px 0.5px -2px rgba(255, 255, 255, 0.3) inset,
    0 0 8px 1px rgba(255, 255, 255, 0.1) inset,
    0 0 2px 0 rgba(0, 0, 0, 0.1)
  );
`));
const $caf1696fa639ec30$export$9462d50bf972df13 = (0, $2SS2a.css)($caf1696fa639ec30$var$t2 || ($caf1696fa639ec30$var$t2 = $caf1696fa639ec30$var$_`
  --theme-box-shadow-frosted: var(
    --ha-card-box-shadow,
    0 12px 20px rgba(0, 0, 0, 0.28)
  );
  --theme-border-color-frosted: var(
    --ha-card-border-color,
    rgba(234, 235, 238, 0.1)
  );
  --theme-backdrop-filter-frosted: var(
    --ha-card-backdrop-filter,
    var(--app-header-backdrop-filter, blur(10px) saturate(1.2))
  );
  --theme-glass-tint-frosted: var(--ha-card-glass-tint, rgba(28, 29, 33, 0.18));
  --theme-glass-inset-shadow-frosted: var(
    --ha-card-glass-inset-shadow,
    3px 3px 0.5px -3.5px rgba(255, 255, 255, 0.15) inset,
    -2px -2px 0.5px -2px rgba(255, 255, 255, 0.1) inset,
    0 0 8px 1px rgba(255, 255, 255, 0.06) inset,
    0 0 2px 0 rgba(0, 0, 0, 0.18)
  );
`));
const $caf1696fa639ec30$export$4aa0a1b480cdb1b6 = (0, $2SS2a.css)($caf1696fa639ec30$var$t3 || ($caf1696fa639ec30$var$t3 = $caf1696fa639ec30$var$_`
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
`));
const $caf1696fa639ec30$export$38d2ecc76f0c2959 = (0, $2SS2a.css)($caf1696fa639ec30$var$t4 || ($caf1696fa639ec30$var$t4 = $caf1696fa639ec30$var$_`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.2;
`));
const $caf1696fa639ec30$export$eae85ad18a22ab6c = (0, $2SS2a.css)($caf1696fa639ec30$var$t5 || ($caf1696fa639ec30$var$t5 = $caf1696fa639ec30$var$_`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.05;
`));


const $2acaa25b6d047245$export$2757cc6eb9fa350d = (iconColor, onColor, offColor, domain, active)=>{
    if (iconColor && (0, $caf1696fa639ec30$export$30317f76025d8bf5).includes(iconColor)) return `rgb(var(--color-${iconColor}))`;
    const color = active ? onColor !== null && onColor !== void 0 ? onColor : (0, $4b849e6973597846$export$426ed50d9b9daf3a)(domain) : offColor;
    if (color && (0, $caf1696fa639ec30$export$30317f76025d8bf5).includes(color)) return `rgb(var(--color-${color}))`;
    return undefined;
};
const $2acaa25b6d047245$export$de247ce18e8ed95f = (iconColor, onColor = '', offColor = '', active = false)=>{
    if (iconColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(iconColor)) return `var(--${iconColor}-color)`;
    if (active && onColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(onColor)) return `var(--${onColor}-color)`;
    if (!active && offColor && (0, $caf1696fa639ec30$export$33537d9e76cd536a).includes(offColor)) return `var(--${offColor}-color)`;
    return iconColor;
};


/**
 * Checks if an entity is currently detecting an alarm condition
 * @param hass Home Assistant instance
 * @param entityId Entity ID of the sensor
 * @returns True if condition is detected, false otherwise
 */ const $82ec124af523e08e$var$isEntityDetected = (hass, entityId)=>{
    const entity = hass.states[entityId];
    if (!entity) return false;
    return (0, $gp9lG.stateActive)(entity);
};
/**
 * Gets the current alarm state for a configured alarm sensor
 * @param hass Home Assistant instance
 * @param config Alarm configuration
 * @returns True if condition is detected, false otherwise
 */ const $82ec124af523e08e$var$getAlarmState = (hass, config)=>{
    if (!config) return false;
    // Check if any of the entities detect the condition
    return config.entities.some((entityId)=>$82ec124af523e08e$var$isEntityDetected(hass, entityId));
};
/**
 * Gets CSS variables for alarm styling based on current state
 * @param isDetected Current detection state
 * @param config Alarm configuration
 * @param prefix CSS variable prefix (e.g., 'occupancy' or 'smoke')
 * @param defaultColor Default color to use (e.g., 'var(--success-color)' or 'var(--error-color)')
 * @param animationName Animation name (e.g., 'occupancy-pulse' or 'smoke-pulse')
 * @returns Object with CSS variable names and values
 */ const $82ec124af523e08e$var$getAlarmCssVars = (isDetected, config, prefix = 'alarm', defaultColor = 'var(--primary-color)', animationName = 'alarm-pulse')=>{
    var _config_options, _config_options1;
    if (!config) return {};
    const vars = {};
    if (!isDetected) return vars;
    // Set card border variable (3px solid) unless disabled
    const isCardBorderDisabled = (_config_options = config.options) === null || _config_options === void 0 ? void 0 : _config_options.includes('disabled_card_styles');
    if (!isCardBorderDisabled) {
        var _config_options2;
        var _processHomeAssistantColors;
        const borderColor = (_processHomeAssistantColors = (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(config.card_border_color)) !== null && _processHomeAssistantColors !== void 0 ? _processHomeAssistantColors : defaultColor;
        vars[`--${prefix}-card-border`] = `3px solid ${borderColor}`;
        vars[`--${prefix}-card-border-color`] = borderColor;
        // Set animation unless disabled
        const isAnimationDisabled = (_config_options2 = config.options) === null || _config_options2 === void 0 ? void 0 : _config_options2.includes('disabled_card_styles_animation');
        if (!isAnimationDisabled) vars[`--${prefix}-card-animation`] = `${animationName} 2s ease-in-out infinite alternate`;
    }
    // Icon color styling
    const isIconColorDisabled = (_config_options1 = config.options) === null || _config_options1 === void 0 ? void 0 : _config_options1.includes('disable_icon_styles');
    if (!isIconColorDisabled) {
        var _config_options3;
        var _processHomeAssistantColors1;
        const iconColor = (_processHomeAssistantColors1 = (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(config.icon_color)) !== null && _processHomeAssistantColors1 !== void 0 ? _processHomeAssistantColors1 : defaultColor;
        vars[`--${prefix}-icon-color`] = iconColor;
        // Set animation unless disabled
        const isIconAnimationDisabled = (_config_options3 = config.options) === null || _config_options3 === void 0 ? void 0 : _config_options3.includes('disable_icon_animation');
        if (!isIconAnimationDisabled) vars[`--${prefix}-icon-animation`] = 'icon-breathe 3s ease-in-out infinite alternate';
    }
    return vars;
};
const $82ec124af523e08e$export$9df2091f323033b9 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$a44444e2ac55f0e7 = (isOccupied, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isOccupied, config, 'occupancy', 'var(--success-color)', 'occupancy-pulse');
};
const $82ec124af523e08e$export$9e738e3e7dcdd507 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$2b84bc3470ef94ef = (isSmokeDetected, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isSmokeDetected, config, 'smoke', 'var(--error-color)', 'smoke-pulse');
};
const $82ec124af523e08e$export$69e97fbcf1121841 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$651c11ff3b9ded13 = (isGasDetected, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isGasDetected, config, 'gas', '#FF9800', 'gas-pulse');
};
const $82ec124af523e08e$export$fad91fa3c977dc7 = (hass, config)=>{
    return $82ec124af523e08e$var$getAlarmState(hass, config);
};
const $82ec124af523e08e$export$e9bc110247b1ae0d = (isWaterDetected, config)=>{
    return $82ec124af523e08e$var$getAlarmCssVars(isWaterDetected, config, 'water', '#2196F3', 'water-pulse');
};




/**
 * Gets sensor value - from specific entity in individual sensors, or averaged sensor
 */ const $b45c3666c29a512e$var$getSensorValue = (sensorData, deviceClass, entityId)=>{
    // If entityId is specified, look for it in individual sensors first
    if (entityId) {
        const individualSensor = sensorData.individual.find((s)=>s.entity_id === entityId);
        if ((individualSensor === null || individualSensor === void 0 ? void 0 : individualSensor.attributes.device_class) === deviceClass) return Number(individualSensor.state);
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
 * Gets threshold value - from specific entity in thresholdSensors sensors, or number configuration
 */ const $b45c3666c29a512e$var$getThresholdSensorValue = (sensors, defaultValue, config)=>{
    if (!config) return defaultValue;
    if (typeof config === 'number') return config;
    const sensor = sensors.find((s)=>s.entity_id === config);
    if (sensor) return Number(sensor.state);
    return defaultValue;
};
/**
 * Checks if any threshold entry in an array matches the sensor data
 *
 * @param thresholdEntries - Array of threshold configurations
 * @param sensorData - Sensor data containing individual and averaged sensors
 * @param deviceClass - Device class to filter sensors ('temperature' or 'humidity')
 * @returns Object with triggered flag and color if threshold is met
 */ const $b45c3666c29a512e$var$checkThresholdEntries = (thresholdEntries, sensorData, deviceClass)=>{
    // coalesce to [{}] so that we always have at least one entry to iterate for default values
    for (const entry of thresholdEntries || [
        {}
    ]){
        const sensorValue = $b45c3666c29a512e$var$getSensorValue(sensorData, deviceClass, entry.entity_id);
        if (sensorValue === null) continue;
        // Get threshold value - can be a number or entity ID string
        const thresholdValue = $b45c3666c29a512e$var$getThresholdSensorValue(sensorData.thresholdSensors, deviceClass === 'temperature' ? 80 : 60, entry.value);
        var _entry_operator;
        const operator = (_entry_operator = entry.operator) !== null && _entry_operator !== void 0 ? _entry_operator : 'gt';
        if ($b45c3666c29a512e$var$meetsThreshold(sensorValue, thresholdValue, operator)) return {
            triggered: true,
            color: entry.color
        };
    }
    return {
        triggered: false
    };
};
/**
 * Checks if a numeric value meets a threshold condition using the specified operator
 *
 * @param value - The numeric value to test
 * @param threshold - The threshold value to compare against
 * @param operator - The comparison operator to use
 * @returns true if the condition is met
 */ const $b45c3666c29a512e$var$meetsThreshold = (value, threshold, operator)=>{
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
const $b45c3666c29a512e$export$c1ca802e67721a4 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((config, sensorData)=>{
    if ((0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_climate_styles')) return {
        hot: false,
        humid: false,
        hotColor: undefined,
        humidColor: undefined
    };
    const thresholds = config.thresholds;
    const hotResult = $b45c3666c29a512e$var$checkThresholdEntries(thresholds === null || thresholds === void 0 ? void 0 : thresholds.temperature, sensorData, 'temperature');
    const humidResult = $b45c3666c29a512e$var$checkThresholdEntries(thresholds === null || thresholds === void 0 ? void 0 : thresholds.humidity, sensorData, 'humidity');
    return {
        hot: hotResult.triggered,
        humid: humidResult.triggered,
        hotColor: hotResult.color,
        humidColor: humidResult.color
    };
});




var $gp9lG = parcelRequire("gp9lG");
/**
 * Module-level cache mapping a calling element to its resolved
 * `hui-view-container`. Keyed weakly so entries vanish when cards are GC'd.
 * On a stale entry (container detached), we fall back to a fresh walk.
 */ const $7a9953f15579a0c2$var$containerCache = new WeakMap();
/**
 * Walks one step up the DOM, crossing shadow root boundaries via `host`.
 */ const $7a9953f15579a0c2$var$stepUp = (element)=>{
    if (element.parentElement) return element.parentElement;
    if (typeof element.getRootNode === 'function' && typeof ShadowRoot !== 'undefined') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root.host : null;
    }
    return null;
};
/**
 * Walks up from `element` until a `hui-view-container` is found, or the walk
 * runs off the top of the document.
 */ const $7a9953f15579a0c2$var$findViewContainer = (element)=>{
    let current = element;
    while(current && current !== document.body){
        if (current.tagName === 'HUI-VIEW-CONTAINER') return current;
        current = $7a9953f15579a0c2$var$stepUp(current);
    }
    return null;
};
const $7a9953f15579a0c2$export$f3dc7c019524f0e9 = (element, hass)=>{
    var _hass_themes, _hass_themes1, _hass_themes2;
    if (!element) return (_hass_themes = hass.themes) === null || _hass_themes === void 0 ? void 0 : _hass_themes.theme;
    let container = $7a9953f15579a0c2$var$containerCache.get(element);
    if (!(container === null || container === void 0 ? void 0 : container.isConnected)) {
        var _findViewContainer;
        container = (_findViewContainer = $7a9953f15579a0c2$var$findViewContainer(element)) !== null && _findViewContainer !== void 0 ? _findViewContainer : undefined;
        if (container) $7a9953f15579a0c2$var$containerCache.set(element, container);
        else $7a9953f15579a0c2$var$containerCache.delete(element);
    }
    if (!container) return (_hass_themes1 = hass.themes) === null || _hass_themes1 === void 0 ? void 0 : _hass_themes1.theme;
    return container.theme || ((_hass_themes2 = hass.themes) === null || _hass_themes2 === void 0 ? void 0 : _hass_themes2.theme);
};



var $kJycS = parcelRequire("kJycS");



/**
 * Checks if a string is a URL (starts with http:// or https://)
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a URL
 */ const $d9cd925d0860ec58$var$isUrl = (str)=>{
    return str.startsWith('http://') || str.startsWith('https://');
};
const $d9cd925d0860ec58$export$25fedbc2fd674160 = (hass, config)=>{
    var _getArea;
    const roomEntityId = `light.${config.area}_light`;
    var _config_navigate;
    // Determine the navigation target
    const navigationTarget = (_config_navigate = config.navigate) !== null && _config_navigate !== void 0 ? _config_navigate : config.area.replace('_', '-');
    // Create appropriate action based on whether the target is a URL or path
    const tapAction = $d9cd925d0860ec58$var$isUrl(navigationTarget) ? {
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
    if (config.entity && !(0, $1e40c00d469c9d00$exports.hasFeature)(config, 'ignore_entity')) {
        if (typeof config.entity === 'string') // String format
        return {
            config: (0, $kJycS._)({
                entity_id: config.entity
            }, actionConfig),
            state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, config.entity)
        };
        else // Object format
        return {
            config: (0, $kJycS._)({}, actionConfig, config.entity),
            state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, config.entity.entity_id)
        };
    }
    // Default room light configuration
    return {
        config: (0, $kJycS._)({
            entity_id: roomEntityId,
            icon: (_getArea = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area)) === null || _getArea === void 0 ? void 0 : _getArea.icon
        }, actionConfig),
        state: (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, roomEntityId, true)
    };
};




const $62a596c6a9bc2e04$export$30c823bc834d6ab4 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((devices, deviceId)=>devices[deviceId]);




var $ec08780371c7cdf9$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/number/format_number.ts
 */ Object.defineProperty($ec08780371c7cdf9$exports, "__esModule", {
    value: true
});
$ec08780371c7cdf9$exports.isNumericFromAttributes = $ec08780371c7cdf9$exports.isNumericState = void 0;
/**
 * Returns true if the entity is considered numeric based on the attributes it has
 * @param stateObj The entity state object
 */ const $ec08780371c7cdf9$var$isNumericState = (stateObj)=>(0, $ec08780371c7cdf9$exports.isNumericFromAttributes)(stateObj.attributes);
$ec08780371c7cdf9$exports.isNumericState = $ec08780371c7cdf9$var$isNumericState;
const $ec08780371c7cdf9$var$isNumericFromAttributes = (attributes, numericDeviceClasses)=>{
    var _attributes_device_class;
    return !!attributes.unit_of_measurement || !!attributes.state_class || (numericDeviceClasses || []).includes((_attributes_device_class = attributes.device_class) !== null && _attributes_device_class !== void 0 ? _attributes_device_class : '');
};
$ec08780371c7cdf9$exports.isNumericFromAttributes = $ec08780371c7cdf9$var$isNumericFromAttributes;


/**
 * Filters entities by device class and ensures they are numeric
 */ const $0b0bca794600042c$var$getNumericEntitiesByClass = (entities, deviceClass)=>{
    return entities.filter((entity)=>{
        const entityDeviceClass = entity.attributes.device_class;
        return typeof entityDeviceClass === 'string' && entityDeviceClass === deviceClass && (0, $ec08780371c7cdf9$exports.isNumericState)(entity) && entity.state.trim() !== '' && !Number.isNaN(Number(entity.state));
    });
};
/**
 * Groups entities by their unit of measurement
 */ const $0b0bca794600042c$var$groupEntitiesByUom = (entities)=>{
    const uomGroups = new Map();
    for (const entity of entities){
        const uomAttr = entity.attributes.unit_of_measurement;
        const uom = typeof uomAttr === 'string' ? uomAttr : '';
        if (!uomGroups.has(uom)) uomGroups.set(uom, []);
        uomGroups.get(uom).push(entity);
    }
    return uomGroups;
};
/**
 * Calculates average for a group of entities
 */ const $0b0bca794600042c$var$calculateGroupAverage = (groupEntities, uom, deviceClass)=>{
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
 */ const $0b0bca794600042c$var$processDeviceClass = (entities, deviceClass)=>{
    const classEntities = $0b0bca794600042c$var$getNumericEntitiesByClass(entities, deviceClass);
    if (classEntities.length === 0) return [];
    const uomGroups = $0b0bca794600042c$var$groupEntitiesByUom(classEntities);
    const averages = [];
    for (const [uom, groupEntities] of uomGroups)if (groupEntities.length > 0) averages.push($0b0bca794600042c$var$calculateGroupAverage(groupEntities, uom, deviceClass));
    return averages;
};
const $0b0bca794600042c$export$499e7395a53e0376 = (entities, deviceClasses)=>{
    return deviceClasses.flatMap((deviceClass)=>$0b0bca794600042c$var$processDeviceClass(entities, deviceClass));
};



const $400a6578b3135d12$export$f554a0f6d643a046 = (state, config, area, sensorClasses)=>{
    var _state_attributes;
    if ((0, $1e40c00d469c9d00$exports.hasFeature)(config, 'exclude_default_entities')) return false;
    const deviceClass = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.device_class;
    if (state.domain !== 'sensor' || typeof deviceClass !== 'string' || !sensorClasses.includes(deviceClass)) return false;
    const areaHasTemp = !!(area === null || area === void 0 ? void 0 : area.temperature_entity_id);
    const areaHasHumidity = !!(area === null || area === void 0 ? void 0 : area.humidity_entity_id);
    const isAreaDefaultTemp = areaHasTemp && state.entity_id === (area === null || area === void 0 ? void 0 : area.temperature_entity_id);
    const isAreaDefaultHumidity = areaHasHumidity && state.entity_id === (area === null || area === void 0 ? void 0 : area.humidity_entity_id);
    // Area default sensors are always included
    if (isAreaDefaultTemp || isAreaDefaultHumidity) return true;
    // Skip non-default temp/humidity sensors when area has configured defaults
    if (deviceClass === 'temperature' && areaHasTemp || deviceClass === 'humidity' && areaHasHumidity) return false;
    return true;
};


/**
 * Helper function to extract entity_id from LightConfig
 */ const $e186e7c110487ed3$var$getLightEntityId = (light)=>{
    return typeof light === 'string' ? light : light.entity_id;
};
/**
 * Helper function to check if a light config is ambient type
 */ const $e186e7c110487ed3$var$isAmbientLight = (light)=>{
    return typeof light !== 'string' && light.type === 'ambient';
};
const $e186e7c110487ed3$export$d4cef0abb1b35d6f = (hass, config)=>{
    var _config_sensors, _config_thresholds, _config_thresholds1;
    const multiLightEnabled = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'multi_light_background');
    const hideHiddenEntities = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'hide_hidden_entities');
    // Get area information to check for configured temperature/humidity sensors
    const area = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area);
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
    const ambientLightEntities = [];
    const thresholdSensors = [];
    let mold = undefined;
    // Get configured light entity IDs and their types if multi-light feature is enabled
    // Build a map of entity_id -> isAmbient for quick lookup
    const configuredLightIds = [];
    const ambientLightIds = new Set();
    if (multiLightEnabled && config.lights && config.lights.length > 0) config.lights.forEach((light)=>{
        const entityId = $e186e7c110487ed3$var$getLightEntityId(light);
        configuredLightIds.push(entityId);
        if ($e186e7c110487ed3$var$isAmbientLight(light)) ambientLightIds.add(entityId);
    });
    // Helper function to extract entity_id from string or SensorConfig
    const getSensorEntityId = (sensor)=>{
        return typeof sensor === 'string' ? sensor : sensor.entity_id;
    };
    // Get array of entity IDs from config.sensors for quick lookup
    const configSensorIds = ((_config_sensors = config.sensors) === null || _config_sensors === void 0 ? void 0 : _config_sensors.map(getSensorEntityId)) || [];
    // Extract threshold entity IDs from threshold entries' value properties
    const thresholdSensorIds = new Set();
    if ((_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.temperature) config.thresholds.temperature.forEach((entry)=>{
        if (typeof entry.value === 'string') thresholdSensorIds.add(entry.value);
    });
    if ((_config_thresholds1 = config.thresholds) === null || _config_thresholds1 === void 0 ? void 0 : _config_thresholds1.humidity) config.thresholds.humidity.forEach((entry)=>{
        if (typeof entry.value === 'string') thresholdSensorIds.add(entry.value);
    });
    // Helper function to check if entity should be processed
    const shouldProcessEntity = (isConfigSensor, isInArea, isConfiguredLight, isThresholdEntity)=>{
        return isConfigSensor || isInArea || isConfiguredLight || isThresholdEntity;
    };
    // Helper function to collect configured light entities
    const collectConfiguredLightEntity = (state, entityId)=>{
        if (ambientLightIds.has(entityId)) ambientLightEntities.push(state);
        else lightEntities.push(state);
    };
    // Helper function to collect area light entities (when no configured lights exist)
    const collectAreaLightEntity = (state, entityId, isInArea)=>{
        var _config_lights;
        if (!((_config_lights = config.lights) === null || _config_lights === void 0 ? void 0 : _config_lights.length) && isInArea && entityId.startsWith('light.')) lightEntities.push(state);
    };
    // Process all entities in the area
    Object.values(hass.entities).forEach((entity)=>{
        var _entity_labels, _state_attributes;
        // Skip hidden entities if the feature is enabled
        if (hideHiddenEntities && entity.hidden) return;
        // Check if this sensor is explicitly configured
        const isConfigSensor = configSensorIds.includes(entity.entity_id);
        const device = entity.device_id ? (0, $62a596c6a9bc2e04$export$30c823bc834d6ab4)(hass.devices, entity.device_id) : undefined;
        const isInArea = [
            entity.area_id,
            device === null || device === void 0 ? void 0 : device.area_id
        ].includes(config.area);
        // Check if this is a configured light entity (always process these)
        const isConfiguredLight = configuredLightIds.includes(entity.entity_id);
        // Check if this is a configured threshold entity (always process these)
        const isThresholdEntity = thresholdSensorIds.has(entity.entity_id);
        // If it's not a config sensor, not in the area, and not a configured light, skip it
        // If it's a config sensor or configured light, always include it since the user has explicitly included it
        if (!shouldProcessEntity(isConfigSensor, isInArea, isConfiguredLight, isThresholdEntity)) return;
        const state = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        if (!state) return;
        // Collect light entities for multi-light background feature
        if (multiLightEnabled) {
            if (isConfiguredLight) collectConfiguredLightEntity(state, entity.entity_id);
            else collectAreaLightEntity(state, entity.entity_id, isInArea);
        }
        if ((entity === null || entity === void 0 ? void 0 : (_entity_labels = entity.labels) === null || _entity_labels === void 0 ? void 0 : _entity_labels.includes('problem')) || ((_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.device_class) === 'problem') problemSensors.push(state);
        if ((entity === null || entity === void 0 ? void 0 : entity.platform) === 'mold_indicator') mold = state;
        // If it's a config sensor, always include it in individual sensors
        if (isConfigSensor) {
            configOrderedSensors.push(state);
            return;
        }
        if (isThresholdEntity) {
            thresholdSensors.push(state);
            return;
        }
        // Check if this entity qualifies as a class-based sensor for averaging
        if ((0, $400a6578b3135d12$export$f554a0f6d643a046)(state, config, area, sensorClasses)) classSensors.push(state);
    });
    // Sort config sensors by their order in the config array
    configOrderedSensors.sort((a, b)=>{
        var _configSensorIds_indexOf;
        const indexA = (_configSensorIds_indexOf = configSensorIds === null || configSensorIds === void 0 ? void 0 : configSensorIds.indexOf(a.entity_id)) !== null && _configSensorIds_indexOf !== void 0 ? _configSensorIds_indexOf : -1;
        var _configSensorIds_indexOf1;
        const indexB = (_configSensorIds_indexOf1 = configSensorIds === null || configSensorIds === void 0 ? void 0 : configSensorIds.indexOf(b.entity_id)) !== null && _configSensorIds_indexOf1 !== void 0 ? _configSensorIds_indexOf1 : -1;
        return indexA - indexB;
    });
    // Calculate averages for class-based sensors
    const averaged = (0, $0b0bca794600042c$export$499e7395a53e0376)(classSensors, sensorClasses);
    return {
        individual: configOrderedSensors,
        averaged: averaged,
        problemSensors: problemSensors,
        mold: mold,
        lightEntities: lightEntities,
        ambientLightEntities: ambientLightEntities,
        thresholdSensors: thresholdSensors
    };
};


const $c4ab0a640e168730$export$df764ae7d62abece = (hass, config, element)=>{
    var _getArea;
    var _config_area_name, _ref;
    const roomInfo = {
        area_name: (_ref = (_config_area_name = config.area_name) !== null && _config_area_name !== void 0 ? _config_area_name : (_getArea = (0, $7806862517a8ec93$export$520c40045967cb15)(hass.areas, config.area)) === null || _getArea === void 0 ? void 0 : _getArea.name) !== null && _ref !== void 0 ? _ref : config.area
    };
    const roomEntity = (0, $d9cd925d0860ec58$export$25fedbc2fd674160)(hass, config);
    const sensors = (0, $e186e7c110487ed3$export$d4cef0abb1b35d6f)(hass, config);
    const thresholds = (0, $b45c3666c29a512e$export$c1ca802e67721a4)(config, sensors);
    const smokeDetected = (0, $82ec124af523e08e$export$9e738e3e7dcdd507)(hass, config.smoke);
    const gasDetected = (0, $82ec124af523e08e$export$69e97fbcf1121841)(hass, config.gas);
    const waterDetected = (0, $82ec124af523e08e$export$fad91fa3c977dc7)(hass, config.water);
    const occupied = (0, $82ec124af523e08e$export$9df2091f323033b9)(hass, config.occupancy);
    // Calculate if room entity is active
    const roomEntityActive = roomEntity.state && (0, $gp9lG.stateActive)(roomEntity.state);
    // Calculate if any regular (non-ambient) light is active
    const regularLightActive = sensors.lightEntities.some((entityState)=>(0, $gp9lG.stateActive)(entityState));
    // Calculate if any ambient light is active
    const ambientLightActive = sensors.ambientLightEntities.some((entityState)=>(0, $gp9lG.stateActive)(entityState));
    // isActive: room entity OR any light (regular or ambient) - used for card background
    const isActive = roomEntityActive || regularLightActive || ambientLightActive;
    // isIconActive: room entity OR any regular light (NOT ambient) - used for icon styling
    const isIconActive = roomEntityActive || regularLightActive;
    // Determine alarm state with priority: Smoke > Gas > Water > Occupancy
    let alarm;
    if (smokeDetected) alarm = 'smoke';
    else if (gasDetected) alarm = 'gas';
    else if (waterDetected) alarm = 'water';
    else if (occupied) alarm = 'occupied';
    // Get the view theme (falls back to global theme if not set)
    const viewTheme = (0, $7a9953f15579a0c2$export$f3dc7c019524f0e9)(element, hass);
    var _viewTheme_startsWith;
    // Detect Frosted Glass themes (e.g. "Frosted Glass", "Frosted Glass Lite").
    const frostedGlass = (_viewTheme_startsWith = viewTheme === null || viewTheme === void 0 ? void 0 : viewTheme.startsWith('Frosted Glass')) !== null && _viewTheme_startsWith !== void 0 ? _viewTheme_startsWith : false;
    return {
        roomInfo: roomInfo,
        roomEntity: roomEntity,
        sensors: sensors,
        isActive: isActive,
        isIconActive: isIconActive,
        thresholds: thresholds,
        flags: {
            alarm: alarm,
            dark: hass.themes.darkMode,
            frostedGlass: frostedGlass
        }
    };
};




var $g28NR = parcelRequire("g28NR");

var $2QgUB = parcelRequire("2QgUB");


const $370eb512b0573832$export$fcf7c33d7fd02301 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entities, entityId)=>entities[entityId]);




var $g28NR = parcelRequire("g28NR");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");

var $ci0wX = parcelRequire("ci0wX");

var $lnb0z = parcelRequire("lnb0z");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $709101fc184637c4$var$n = "important", $709101fc184637c4$var$i = " !" + $709101fc184637c4$var$n, $709101fc184637c4$export$1e5b4ce2fa884e6a = (0, $lnb0z.directive)(class extends (0, $lnb0z.Directive) {
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
                const r = "string" == typeof e && e.endsWith($709101fc184637c4$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $709101fc184637c4$var$n : "") : s[t] = e;
            }
        }
        return 0, $ci0wX.noChange;
    }
    constructor(t){
        var _t_strings;
        if (super(t), t.type !== (0, $lnb0z.PartType).ATTRIBUTE || "style" !== t.name || ((_t_strings = t.strings) === null || _t_strings === void 0 ? void 0 : _t_strings.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
});





let $6f5f72559a4d178c$var$_ = (t)=>t, $6f5f72559a4d178c$var$t;
const $6f5f72559a4d178c$export$3703ea65b0ac4726 = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $ci0wX.nothing;
    // Separate keyframes from regular styles
    const keyframesEntries = [];
    const regularStyles = [];
    for (const [key, value] of Object.entries(styles))if (key === 'keyframes') // Handle keyframes specially
    keyframesEntries.push(`@keyframes ${value}`);
    else // Regular CSS property
    regularStyles.push(`${key}: ${value};`);
    const cssString = regularStyles.join(' ');
    const keyframesString = keyframesEntries.join('\n');
    return (0, $ci0wX.html)($6f5f72559a4d178c$var$t || ($6f5f72559a4d178c$var$t = $6f5f72559a4d178c$var$_`
      <style>
        ${0}
        :host {
          ${0}
        }
      </style>
    `), keyframesString, cssString);
});
const $6f5f72559a4d178c$export$94e56d1d743c1f9b = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((styles)=>{
    if (!styles || Object.keys(styles).length === 0) return 0, $ci0wX.nothing;
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)(styles);
});



var $dTmXl = parcelRequire("dTmXl");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $e595363dd98d321d$var$_ = (t)=>t, $e595363dd98d321d$var$t;
const $e595363dd98d321d$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($e595363dd98d321d$var$t || ($e595363dd98d321d$var$t = $e595363dd98d321d$var$_`
  :host {
    display: contents;
  }

  .stats {
    font-size: 0.8em;
    opacity: var(--text-opacity-theme, 0.4);
  }

  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }
`));


let $2146d91279a85b43$var$_ = (t)=>t, $2146d91279a85b43$var$t;
class $2146d91279a85b43$export$fad092f8692706c7 extends (0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $e595363dd98d321d$export$9dd6ff9ea0189349;
    }
    /**
   * Render the badge
   */ render() {
        var _config_styles;
        const hass = this.hass;
        const config = this.config;
        (0, $dTmXl.d)(config, 'area-statistics', 'render');
        if (!hass || !config || (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'hide_area_stats')) return 0, $ci0wX.nothing;
        const devices = Object.keys(hass.devices).filter((k)=>(0, $62a596c6a9bc2e04$export$30c823bc834d6ab4)(hass.devices, k).area_id === config.area);
        const entities = Object.keys(hass.entities).filter((k)=>{
            const entity = (0, $370eb512b0573832$export$fcf7c33d7fd02301)(hass.entities, k);
            return entity.area_id === config.area || entity.device_id != null && devices.includes(entity.device_id);
        });
        const rows = [
            [
                devices.length,
                'devices'
            ],
            [
                entities.length,
                'entities'
            ]
        ];
        const summary = rows.filter(([n])=>n > 0).map(([count, type])=>`${count} ${type}`).join(' ');
        const style = (0, $6f5f72559a4d178c$export$94e56d1d743c1f9b)((_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.stats);
        return (0, $ci0wX.html)($2146d91279a85b43$var$t || ($2146d91279a85b43$var$t = $2146d91279a85b43$var$_`<span style="${0}" class="stats text">${0}</span>`), style, summary);
    }
}
$2146d91279a85b43$export$fad092f8692706c7 = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('area-statistics')
], $2146d91279a85b43$export$fad092f8692706c7);




var $kJycS = parcelRequire("kJycS");


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");


var $gp9lG = parcelRequire("gp9lG");
var $138ab67ea0f87e5c$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_color.ts
 * This file is modified to allow for light entities to be included in the state color calculation
 * so that the multi-light background feature can work
 */ Object.defineProperty($138ab67ea0f87e5c$exports, "__esModule", {
    value: true
});
$138ab67ea0f87e5c$exports.stateColorBrightness = $138ab67ea0f87e5c$exports.stateColorProperties = $138ab67ea0f87e5c$exports.domainStateColorProperties = $138ab67ea0f87e5c$exports.stateColorCss = void 0;
var $c216464f2b025d6e$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity.ts
 */ var $c216464f2b025d6e$var$__createBinding = $c216464f2b025d6e$exports && $c216464f2b025d6e$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
});
var $c216464f2b025d6e$var$__exportStar = $c216464f2b025d6e$exports && $c216464f2b025d6e$exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $c216464f2b025d6e$var$__createBinding(exports1, m, p);
};
Object.defineProperty($c216464f2b025d6e$exports, "__esModule", {
    value: true
});

$c216464f2b025d6e$var$__exportStar((parcelRequire("7zhir")), $c216464f2b025d6e$exports);


var $f1ff20376307e226$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/group.ts
 */ Object.defineProperty($f1ff20376307e226$exports, "__esModule", {
    value: true
});
$f1ff20376307e226$exports.computeGroupDomain = void 0;

var $h7W3o = parcelRequire("h7W3o");
const $f1ff20376307e226$var$computeGroupDomain = (stateObj)=>{
    const entityIds = stateObj.attributes.entity_id || [];
    const uniqueDomains = [
        ...new Set(entityIds.map((entityId)=>(0, $h7W3o.computeDomain)(entityId)))
    ];
    return uniqueDomains.length === 1 ? uniqueDomains[0] : undefined;
};
$f1ff20376307e226$exports.computeGroupDomain = $f1ff20376307e226$var$computeGroupDomain;


var $07b9c57e5fc7188f$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/resources/css-variables.ts
 */ Object.defineProperty($07b9c57e5fc7188f$exports, "__esModule", {
    value: true
});
$07b9c57e5fc7188f$exports.computeCssVariable = $07b9c57e5fc7188f$var$computeCssVariable;
function $07b9c57e5fc7188f$var$computeCssVariable(props) {
    if (Array.isArray(props)) return props.reverse().reduce((str, variable)=>`var(${variable}${str ? `, ${str}` : ''})`, undefined);
    return `var(${props})`;
}


var $8a89387630819b81$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/string/slugify.ts
 */ Object.defineProperty($8a89387630819b81$exports, "__esModule", {
    value: true
});
$8a89387630819b81$exports.slugify = void 0;
// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const $8a89387630819b81$var$slugify = (value, delimiter = '_')=>{
    const a = "\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010D\u0111\u010F\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xee\xef\xed\u012B\u012F\xec\u0131\u0130\u0142\u1E3F\xf1\u0144\u01F9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014D\xf5\u0151\u1E55\u0155\u0159\xdf\u015B\u0161\u015F\u0219\u0165\u021B\xfb\xfc\xf9\xfa\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xff\xfd\u017E\u017A\u017C\xb7";
    const b = `aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}`;
    const p = new RegExp(a.split('').join('|'), 'g');
    let slugified;
    if (value === '') slugified = '';
    else {
        slugified = value.toString().toLowerCase().replace(p, (c)=>b.charAt(a.indexOf(c))) // Replace special characters
        .replaceAll(/(\d),(?=\d)/g, '$1') // Remove Commas between numbers
        .replaceAll(/[^a-z0-9]+/g, delimiter) // Replace all non-word characters
        .replaceAll(new RegExp(`(${delimiter})\\1+`, 'g'), '$1') // Replace multiple delimiters with single delimiter
        .replace(new RegExp(`^${delimiter}+`), '') // Trim delimiter from start of text
        .replace(new RegExp(`${delimiter}+$`), ''); // Trim delimiter from end of text
        if (slugified === '') slugified = 'unknown';
    }
    return slugified;
};
$8a89387630819b81$exports.slugify = $8a89387630819b81$var$slugify;


var $c7ade02d3577bd73$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/color/battery_color.ts
 */ Object.defineProperty($c7ade02d3577bd73$exports, "__esModule", {
    value: true
});
$c7ade02d3577bd73$exports.batteryStateColorProperty = void 0;
const $c7ade02d3577bd73$var$batteryStateColorProperty = (state)=>{
    const value = Number(state);
    if (Number.isNaN(value)) return undefined;
    if (value >= 70) return '--state-sensor-battery-high-color';
    if (value >= 30) return '--state-sensor-battery-medium-color';
    return '--state-sensor-battery-low-color';
};
$c7ade02d3577bd73$exports.batteryStateColorProperty = $c7ade02d3577bd73$var$batteryStateColorProperty;



var $h7W3o = parcelRequire("h7W3o");

var $gp9lG = parcelRequire("gp9lG");
const $138ab67ea0f87e5c$var$STATE_COLORED_DOMAIN = new Set([
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
// slightly modified from frontend/src/common/entity/state_color.ts
const $138ab67ea0f87e5c$var$stateColorCss = (stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    if (compareState === $c216464f2b025d6e$exports.UNAVAILABLE && !active) return `var(--state-unavailable-color)`;
    const properties = (0, $138ab67ea0f87e5c$exports.stateColorProperties)(stateObj, scope, active, state);
    if (properties) return (0, $07b9c57e5fc7188f$exports.computeCssVariable)(properties);
    return undefined;
};
$138ab67ea0f87e5c$exports.stateColorCss = $138ab67ea0f87e5c$var$stateColorCss;
/**
 * This method has been modified slightly to account for other themes.
 */ const $138ab67ea0f87e5c$var$domainStateColorProperties = (domain, stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj.state;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active !== null && active !== void 0 ? active : (0, $gp9lG.stateActive)(stateObj, state);
    // allow for theme override
    const properties = [
        `--state-color-${scope}-theme`
    ];
    const stateKey = (0, $8a89387630819b81$exports.slugify)(compareState, '_');
    const activeKey = isActive ? 'active' : 'inactive';
    const dc = stateObj.attributes.device_class;
    if (dc) properties.push(`--state-${domain}-${dc}-${stateKey}-color`);
    properties.push(`--state-${domain}-${stateKey}-color`, `--state-${domain}-${activeKey}-color`, `--state-${activeKey}-color`);
    return properties;
};
$138ab67ea0f87e5c$exports.domainStateColorProperties = $138ab67ea0f87e5c$var$domainStateColorProperties;
// slightly modified from frontend/src/common/entity/state_color.ts
const $138ab67ea0f87e5c$var$stateColorProperties = (stateObj, scope, active, state)=>{
    const compareState = state !== null && state !== void 0 ? state : stateObj === null || stateObj === void 0 ? void 0 : stateObj.state;
    const domain = (0, $h7W3o.computeDomain)(stateObj.entity_id);
    const dc = stateObj.attributes.device_class;
    // Special rules for battery coloring
    if (domain === 'sensor' && dc === 'battery') {
        const property = (0, $c7ade02d3577bd73$exports.batteryStateColorProperty)(compareState);
        if (property) return [
            `--state-color-${scope}-theme`,
            property
        ];
    }
    // Special rules for group coloring
    if (domain === 'group') {
        const groupDomain = (0, $f1ff20376307e226$exports.computeGroupDomain)(stateObj);
        if (groupDomain && $138ab67ea0f87e5c$var$STATE_COLORED_DOMAIN.has(groupDomain)) return (0, $138ab67ea0f87e5c$exports.domainStateColorProperties)(groupDomain, stateObj, scope, active, state);
    }
    if ($138ab67ea0f87e5c$var$STATE_COLORED_DOMAIN.has(domain)) return (0, $138ab67ea0f87e5c$exports.domainStateColorProperties)(domain, stateObj, scope, active, state);
    return undefined;
};
$138ab67ea0f87e5c$exports.stateColorProperties = $138ab67ea0f87e5c$var$stateColorProperties;
const $138ab67ea0f87e5c$var$stateColorBrightness = (stateObj)=>{
    if (stateObj.attributes.brightness && (0, $h7W3o.computeDomain)(stateObj.entity_id) !== 'plant') {
        // lowest brightness will be around 50% (that's pretty dark)
        const brightness = Number(stateObj.attributes.brightness);
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    return '';
};
$138ab67ea0f87e5c$exports.stateColorBrightness = $138ab67ea0f87e5c$var$stateColorBrightness;



const $78d5b7f684c6d2c0$export$ce6920689b32408c = (state, onColor, offColor, active)=>{
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



const $273edb1bb8e481ef$export$de96a622725f4284 = (hass, entity, thresholdResult, active)=>{
    var _state_attributes, _state_attributes1, _state_attributes2;
    const { state: state } = entity;
    if (!state) return undefined;
    // threshold-based colors have the highest priority
    if (thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.color) return (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(thresholdResult.color);
    // icon color is the second priority - hex colors
    const iconColor = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.icon_color;
    if (typeof iconColor === 'string' && iconColor.startsWith('#')) return iconColor;
    const onColorAttr = (_state_attributes1 = state.attributes) === null || _state_attributes1 === void 0 ? void 0 : _state_attributes1.on_color;
    const offColorAttr = (_state_attributes2 = state.attributes) === null || _state_attributes2 === void 0 ? void 0 : _state_attributes2.off_color;
    var _entity_config_on_color;
    const onColor = (_entity_config_on_color = entity.config.on_color) !== null && _entity_config_on_color !== void 0 ? _entity_config_on_color : typeof onColorAttr === 'string' ? onColorAttr : undefined;
    var _entity_config_off_color;
    const offColor = (_entity_config_off_color = entity.config.off_color) !== null && _entity_config_off_color !== void 0 ? _entity_config_off_color : typeof offColorAttr === 'string' ? offColorAttr : undefined;
    const rgbColor = (0, $78d5b7f684c6d2c0$export$ce6920689b32408c)(state, onColor !== null && onColor !== void 0 ? onColor : '', offColor !== null && offColor !== void 0 ? offColor : '', active);
    // If the state has a specific RGB color, return it directly
    if (rgbColor) return rgbColor;
    // Try minimalist colors first if minimalist theme
    const theme = (0, $7a9953f15579a0c2$export$f3dc7c019524f0e9)(null, hass);
    const resolvedIconColor = typeof iconColor === 'string' ? iconColor : '';
    if (theme === null || theme === void 0 ? void 0 : theme.startsWith('minimalist-')) {
        const minimalistResult = (0, $2acaa25b6d047245$export$2757cc6eb9fa350d)(resolvedIconColor, onColor, offColor, state.domain, active);
        if (minimalistResult) return minimalistResult;
    }
    // Fallback to Home Assistant colors
    return (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(typeof iconColor === 'string' ? iconColor : undefined, onColor !== null && onColor !== void 0 ? onColor : '', offColor !== null && offColor !== void 0 ? offColor : '', active !== null && active !== void 0 ? active : false);
};


const $44b62a71bbe065b9$export$8003fd10bb85e3f6 = (value, stateValue, operator)=>{
    switch(operator){
        case 'eq':
            return value === stateValue;
        case 'ne':
            return value !== stateValue;
        default:
            // Default to eq for backward compatibility
            return value === stateValue;
    }
};
const $44b62a71bbe065b9$export$87107a367d41bf56 = (value, threshold)=>{
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


const $3eeea5b8a350985f$export$76969a794fd1f893 = (entity)=>{
    const { config: config, state: state } = entity;
    if (!state) return undefined;
    // Check state-based result configuration first
    const stateResult = $3eeea5b8a350985f$export$a459976b71c8081f(entity);
    if (stateResult) return stateResult;
    // Fallback to threshold-based configuration
    if (!config.thresholds) return undefined;
    // Sort thresholds by value in descending order to check highest first
    const sortedThresholds = [
        ...config.thresholds
    ].sort((a, b)=>b.threshold - a.threshold);
    for (const threshold of sortedThresholds){
        var _state_attributes;
        // Determine what value to compare against
        const valueToCompare = threshold.attribute ? (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes[threshold.attribute] : state.state;
        const numericValue = Number.parseFloat(String(valueToCompare !== null && valueToCompare !== void 0 ? valueToCompare : ''));
        // Skip if value is not a valid number
        if (Number.isNaN(numericValue)) continue;
        if ((0, $44b62a71bbe065b9$export$87107a367d41bf56)(numericValue, threshold)) return {
            color: threshold.icon_color,
            titleColor: threshold.title_color,
            icon: threshold.icon,
            label: threshold.label,
            styles: threshold.styles
        };
    }
    return undefined;
};
const $3eeea5b8a350985f$export$a459976b71c8081f = (entity)=>{
    const { config: config, state: state } = entity;
    if (!config.states || !state) return undefined;
    for (const stateConfig of config.states){
        var _state_attributes;
        var _state_attributes_stateConfig_attribute;
        // Determine what value to compare against
        const valueToMatch = stateConfig.attribute ? String((_state_attributes_stateConfig_attribute = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes[stateConfig.attribute]) !== null && _state_attributes_stateConfig_attribute !== void 0 ? _state_attributes_stateConfig_attribute : '') : state.state;
        const operator = stateConfig.operator || 'eq';
        if ((0, $44b62a71bbe065b9$export$8003fd10bb85e3f6)(valueToMatch, stateConfig.state, operator)) return {
            color: stateConfig.icon_color,
            titleColor: stateConfig.title_color,
            icon: stateConfig.icon,
            label: stateConfig.label,
            styles: stateConfig.styles
        };
    }
    return undefined;
};
const $3eeea5b8a350985f$export$3d43351ca2ab732f = (entity)=>{
    var _getStateResult;
    return (_getStateResult = $3eeea5b8a350985f$export$a459976b71c8081f(entity)) === null || _getStateResult === void 0 ? void 0 : _getStateResult.color;
};
const $3eeea5b8a350985f$export$9d7fd66a8622e6b5 = (entity, result)=>{
    // First priority: label from state/threshold result
    if (result === null || result === void 0 ? void 0 : result.label) return result.label;
    // Second priority: label from config
    return entity.config.label;
};


const $07e9954134d2b2af$export$de2836153ec9a0b1 = (hass, scope, entity, active)=>{
    const { state: state } = entity;
    if (!state) return null;
    // active is only passed in for the main room entity
    // so if it's not passed in, we use the stateActive function to determine if the entity is active
    // we don't care about the theme in this context
    const isActive = active !== null && active !== void 0 ? active : (0, $gp9lG.stateActive)(state);
    const activeClass = isActive ? 'active' : 'inactive';
    const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(entity);
    const themeOverride = (0, $273edb1bb8e481ef$export$de96a622725f4284)(hass, entity, thresholdResult, isActive);
    var _stateColorCss;
    const cssColor = (_stateColorCss = (0, $138ab67ea0f87e5c$exports.stateColorCss)(state, scope, isActive)) !== null && _stateColorCss !== void 0 ? _stateColorCss : themeOverride ? `var(--state-color-${scope}-theme)` : undefined;
    return {
        active: isActive,
        cssColor: cssColor,
        themeOverride: themeOverride,
        activeClass: activeClass,
        thresholdResult: thresholdResult
    };
};


const $58c246fbddf82f4c$export$43aa80132b9e21fa = (hass, config, entity, isActive)=>{
    var _styleData_thresholdResult, _config_styles, _config_styles1;
    const skipStyles = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_entity_styles');
    if (skipStyles) return 0, $ci0wX.nothing;
    const styleData = (0, $07e9954134d2b2af$export$de2836153ec9a0b1)(hass, 'text', entity, isActive);
    if (!styleData) return 0, $ci0wX.nothing;
    // Check if titleColor is specified in threshold/state result
    const titleColor = ((_styleData_thresholdResult = styleData.thresholdResult) === null || _styleData_thresholdResult === void 0 ? void 0 : _styleData_thresholdResult.titleColor) ? (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(styleData.thresholdResult.titleColor) : styleData.cssColor;
    return styleData.active ? (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $kJycS._)({
        '--text-color': titleColor,
        '--state-color-text-theme': styleData.themeOverride
    }, (_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.title)) : (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $kJycS._)({
        '--text-color': titleColor
    }, (_config_styles1 = config.styles) === null || _config_styles1 === void 0 ? void 0 : _config_styles1.title));
};


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $52a5e6cbabf7b8e2$var$_ = (t)=>t, $52a5e6cbabf7b8e2$var$t;
const $52a5e6cbabf7b8e2$export$a80b3bd66acc52ff = (element, hass, roomInformation, roomEntity, config, sensors, isActive)=>{
    const textStyle = (0, $58c246fbddf82f4c$export$43aa80132b9e21fa)(hass, config, roomEntity, isActive);
    // The caller passes the room entity with `config.actions` already merged
    const handler = (0, $b96673d7637fba33$export$8a44987212de21b)(roomEntity);
    const action = (0, $b96673d7637fba33$export$3d3654ce4577c53d)(element, roomEntity);
    return (0, $ci0wX.html)($52a5e6cbabf7b8e2$var$t || ($52a5e6cbabf7b8e2$var$t = $52a5e6cbabf7b8e2$var$_`<div class="info">
    <div class="text" @action=${0} .actionHandler=${0}>
      <div class="name text" style=${0}>
        ${0}
      </div>
      <area-statistics .hass=${0} .config=${0}></area-statistics>
    </div>
    <sensor-collection
      .config=${0}
      .sensors=${0}
      .hass=${0}
    ></sensor-collection>
  </div>`), action, handler, textStyle, roomInformation.area_name, hass, config, config, sensors, hass);
};


/**
 * Horizontal Slider Component
 *
 * Renders a horizontal slider strip flush with the bottom edge of the
 * room-summary-card. The component decides on its own whether to render:
 * if no entity in the card config has a `slider` config block, it renders
 * `nothing`, so the parent card can unconditionally place it in its
 * template.
 *
 * Always renders Home Assistant's <ha-slider>. The visual variant is
 * controlled per-entity via `entity.slider.style`:
 *  - `'ha'`           : the standard HA slider look (thin track + thumb).
 *  - `'bar'` (default): ha-slider re-styled as a chunky full-height bar.
 *
 * Entity wiring
 * -------------
 * Extends `SubscribeEntityStateMixin(HassUpdateMixin(LitElement))`, so
 * `hass`, `config`, and the live `state` of the slider entity are managed
 * by the mixins. The bound entity is the first one (scanning `entity`
 * then `entities`) with a `slider` config block. `min` / `max` / `step`
 * are read from `state.attributes` and the current `value` from
 * `state.state` —
 * same pattern used by `hui-input-number-entity-row` /
 * `hui-number-entity-row` upstream (`setValue`).
 *
 * Domain specials:
 *  - `media_player` : slider exposes 0–100; reads `volume_level` (0–1)
 *                     and writes via `setMediaPlayerVolume`.
 *  - `light`        : slider exposes 0–255; reads `brightness` and
 *                     writes via `setBrightness` (which itself turns
 *                     the light off when value is 0).
 *
 * @see https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts
 *
 * @version See package.json
 */ 
var $2QgUB = parcelRequire("2QgUB");
const $d3a1c41917263588$export$bfd42fd87279097a = async (hass, entityId, brightness)=>{
    if (!entityId) return;
    // Ensure brightness is within valid range
    const clampedBrightness = Math.max(0, Math.min(255, Math.round(brightness)));
    // If brightness is 0, turn off the light
    if (clampedBrightness === 0) {
        await hass.callService('light', 'turn_off', {
            entity_id: entityId
        });
        return;
    }
    // Otherwise, turn on the light with the specified brightness
    await hass.callService('light', 'turn_on', {
        entity_id: entityId,
        brightness: clampedBrightness
    });
};



var $h7W3o = parcelRequire("h7W3o");
var $035fd41573d923e4$exports = {};
"use strict";
/**
 * Ported from Home Assistant frontend (`setValue` only).
 *
 * @see https://github.com/home-assistant/frontend/blob/dev/src/data/input_text.ts
 */ Object.defineProperty($035fd41573d923e4$exports, "__esModule", {
    value: true
});
$035fd41573d923e4$exports.setValue = void 0;
const $035fd41573d923e4$var$setValue = (hass, entity, value)=>{
    var _entity_split_;
    return hass.callService((_entity_split_ = entity.split('.', 1)[0]) !== null && _entity_split_ !== void 0 ? _entity_split_ : '', 'set_value', {
        value: value,
        entity_id: entity
    });
};
$035fd41573d923e4$exports.setValue = $035fd41573d923e4$var$setValue;


var $715b9f06f948c475$exports = {};
"use strict";
/**
 * Ported from Home Assistant frontend (`setMediaPlayerVolume` only).
 *
 * @see https://github.com/home-assistant/frontend/blob/dev/src/data/media-player.ts
 */ Object.defineProperty($715b9f06f948c475$exports, "__esModule", {
    value: true
});
$715b9f06f948c475$exports.setMediaPlayerVolume = void 0;
/**
 * Set volume of a media player entity.
 * @param hass Home Assistant object
 * @param entity_id entity ID of media player
 * @param volume_level number between 0..1
 */ const $715b9f06f948c475$var$setMediaPlayerVolume = (hass, entity_id, volume_level)=>hass.callService('media_player', 'volume_set', {
        entity_id: entity_id,
        volume_level: volume_level
    });
$715b9f06f948c475$exports.setMediaPlayerVolume = $715b9f06f948c475$var$setMediaPlayerVolume;



var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");

var $jc0SV = parcelRequire("jc0SV");

var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
var $aaQtJ = parcelRequire("aaQtJ");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $a106693bf2929cda$var$_ = (t)=>t, $a106693bf2929cda$var$t;
const $a106693bf2929cda$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($a106693bf2929cda$var$t || ($a106693bf2929cda$var$t = $a106693bf2929cda$var$_`
  :host {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ha-slider {
    width: 100%;

    /* Active fill is exposed cleanly by ha-slider — no specificity
       fight. See
       https://github.com/home-assistant/frontend/blob/dev/src/components/ha-slider.ts */
    --ha-slider-indicator-color: var(
      --user-slider-bar-color,
      var(--primary-color)
    );
  }

  ha-slider::part(track),
  ha-slider::part(indicator) {
    border-radius: 0;
  }

  /* The inactive track paints from \`#track { background: var(--wa-color-neutral-fill-normal) }\`
     inside the slider's shadow DOM. The id selector beats ::part() on
     specificity, so we need !important to win — but only on background,
     scoped to ha-slider's track, which keeps the override from leaking
     into other webawesome components. */
  ha-slider::part(track) {
    background: var(
      --user-slider-track-color,
      var(--disabled-color)
    ) !important;
  }

  /* ---------------------------------------------------------------------
     'bar' style — re-style ha-slider so it visually IS the bottom strip.
     Track is forced tall enough to fill the host, thumb is hidden, and
     the indicator becomes the moving fill.
     --------------------------------------------------------------------- */
  :host([variant='bar']) ha-slider {
    --ha-slider-track-size: var(--user-slider-height, 25px);
    --ha-slider-thumb-color: transparent;
  }

  /* ---------------------------------------------------------------------
     'ha' style — the standard HA slider, slightly thickened and themed.
     --------------------------------------------------------------------- */
  :host([variant='ha']) {
    height: var(--user-slider-height, 3.5%);
  }
`));


let $9d1851378e34030f$var$_ = (t)=>t, $9d1851378e34030f$var$t;
class $9d1851378e34030f$export$226f91755c79436a extends (0, $jc0SV.SubscribeEntityStateMixin)((0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $a106693bf2929cda$export$9dd6ff9ea0189349;
    }
    set slider(value) {
        var _value_slider;
        if ((0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(value, this.slider)) return;
        this._slider = value;
        this.entity = value === null || value === void 0 ? void 0 : value.entity_id;
        var _value_slider_style;
        // only set style if slider is defined as to not affect other components
        this._style = value ? (_value_slider_style = (_value_slider = value.slider) === null || _value_slider === void 0 ? void 0 : _value_slider.style) !== null && _value_slider_style !== void 0 ? _value_slider_style : 'bar' : undefined;
    }
    render() {
        (0, $dTmXl.d)(this.config, 'horizontal-slider', 'render');
        const s = this.state;
        if (!s) return 0, $ci0wX.nothing;
        const domain = (0, $h7W3o.computeDomain)(s.entity_id);
        const rawValue = s ? Number(s.state) : Number.NaN;
        let value = 0;
        var _s_attributes_min;
        let min = Number((_s_attributes_min = s === null || s === void 0 ? void 0 : s.attributes.min) !== null && _s_attributes_min !== void 0 ? _s_attributes_min : 0);
        var _s_attributes_max;
        let max = Number((_s_attributes_max = s === null || s === void 0 ? void 0 : s.attributes.max) !== null && _s_attributes_max !== void 0 ? _s_attributes_max : 100);
        var _s_attributes_step;
        let step = Number((_s_attributes_step = s === null || s === void 0 ? void 0 : s.attributes.step) !== null && _s_attributes_step !== void 0 ? _s_attributes_step : 1);
        if (domain === 'media_player') {
            const vol = s.attributes.volume_level;
            value = vol == null ? 0 : Math.max(0, Math.min(100, Math.round(Number(vol) * 100)));
        } else if (domain === 'light') {
            var _s_attributes_brightness;
            // Slider operates on raw brightness (0–255); attributes.brightness
            // is null when the light is off.
            value = Number((_s_attributes_brightness = s.attributes.brightness) !== null && _s_attributes_brightness !== void 0 ? _s_attributes_brightness : 0);
            min = 0;
            max = 255;
            step = 1;
        } else if (Number.isFinite(rawValue)) value = rawValue;
        return (0, $ci0wX.html)($9d1851378e34030f$var$t || ($9d1851378e34030f$var$t = $9d1851378e34030f$var$_`
      <ha-slider
        labeled
        .min=${0}
        .max=${0}
        .step=${0}
        .value=${0}
        .disabled=${0}
        @change=${0}
      ></ha-slider>
    `), min, max, step, value, !s, this._handleChange);
    }
    constructor(...args){
        super(...args), /**
   * `media_player` → `volume_set`, `light` → `setBrightness`,
   * everything else → `{domain}.set_value`.
   */ this._handleChange = (ev)=>{
            const hass = this.hass;
            const state = this.state;
            if (!hass || !state) return;
            const target = ev.target;
            const domain = (0, $h7W3o.computeDomain)(state.entity_id);
            if (domain === 'media_player') {
                (0, $715b9f06f948c475$exports.setMediaPlayerVolume)(hass, state.entity_id, Number(target.value) / 100);
                return;
            }
            if (domain === 'light') {
                (0, $d3a1c41917263588$export$bfd42fd87279097a)(hass, state.entity_id, Number(target.value));
                return;
            }
            (0, $035fd41573d923e4$exports.setValue)(hass, state.entity_id, target.value);
        };
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true,
        attribute: 'variant'
    })
], $9d1851378e34030f$export$226f91755c79436a.prototype, "_style", void 0);
$9d1851378e34030f$export$226f91755c79436a = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('horizontal-slider')
], $9d1851378e34030f$export$226f91755c79436a);


/**
 * @file Slider entity discovery
 * @description Finds the first config entity that declares a `slider`
 * config block. Scans the main `entity` first, then `entities` in order.
 * Plain string entries are skipped (no metadata to inspect).
 *
 * Returns the full `EntityConfig` (rather than just the id) so callers
 * can read both `entity_id` and the per-entity `slider` block.
 */ const $c37a9757c368f9bd$export$3719c033b804f0ea = (config)=>{
    if (!config) return undefined;
    var _config_entities;
    const candidates = [
        config.entity,
        ...(_config_entities = config.entities) !== null && _config_entities !== void 0 ? _config_entities : []
    ];
    for (const c of candidates){
        if (c && typeof c === 'object' && c.slider !== undefined) return c;
    }
    return undefined;
};


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $558a5ff0fe4616cd$var$_ = (t)=>t, $558a5ff0fe4616cd$var$t;
function $558a5ff0fe4616cd$export$cd0a0c83f075ecc7(hass, config) {
    const slider = (0, $c37a9757c368f9bd$export$3719c033b804f0ea)(config);
    if (!slider) return 0, $ci0wX.nothing;
    return (0, $ci0wX.html)($558a5ff0fe4616cd$var$t || ($558a5ff0fe4616cd$var$t = $558a5ff0fe4616cd$var$_`<horizontal-slider
    .hass=${0}
    .config=${0}
    .slider=${0}
  ></horizontal-slider>`), hass, config, slider);
}



var $kJycS = parcelRequire("kJycS");




var $gp9lG = parcelRequire("gp9lG");




const $5e4701340181d3da$export$6675fe814017d7b1 = (hass, config, entity, alarm, isActive = false, thresholds, ambientLightEntities)=>{
    var _config_styles;
    const { state: state } = entity;
    const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(entity);
    // Find the first active ambient light for background color
    const activeAmbientLight = ambientLightEntities === null || ambientLightEntities === void 0 ? void 0 : ambientLightEntities.find((light)=>(0, $gp9lG.stateActive)(light));
    // Get theme override - use ambient light's color if active, otherwise use entity's color
    let themeOverride;
    if (activeAmbientLight) // Extract RGB color from the active ambient light
    themeOverride = (0, $78d5b7f684c6d2c0$export$ce6920689b32408c)(activeAmbientLight, '', '', true);
    // Fall back to entity's theme color if no ambient light color
    if (!themeOverride) themeOverride = (0, $273edb1bb8e481ef$export$de96a622725f4284)(hass, entity, thresholdResult, isActive);
    const skipStyles = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_entity_styles');
    // Get alarm CSS vars based on current alarm state
    let alarmVars = {};
    if (alarm === 'smoke') alarmVars = (0, $82ec124af523e08e$export$2b84bc3470ef94ef)(true, config.smoke);
    else if (alarm === 'gas') alarmVars = (0, $82ec124af523e08e$export$651c11ff3b9ded13)(true, config.gas);
    else if (alarm === 'water') alarmVars = (0, $82ec124af523e08e$export$e9bc110247b1ae0d)(true, config.water);
    else if (alarm === 'occupied') alarmVars = (0, $82ec124af523e08e$export$a44444e2ac55f0e7)(true, config.occupancy);
    // Use ambient light's state for color if active, otherwise use entity's state
    const stateForColor = activeAmbientLight || state;
    const cssColor = (0, $138ab67ea0f87e5c$exports.stateColorCss)(stateForColor, 'card', isActive);
    const filter = (0, $138ab67ea0f87e5c$exports.stateColorBrightness)(stateForColor);
    let backgroundColorCard;
    if (skipStyles) backgroundColorCard = undefined;
    else backgroundColorCard = isActive ? cssColor : undefined;
    // Generate threshold CSS variables
    const thresholdVars = {};
    if (thresholds) {
        if (thresholds.hot && thresholds.hotColor) thresholdVars['--threshold-hot-color'] = thresholds.hotColor;
        if (thresholds.humid && thresholds.humidColor) thresholdVars['--threshold-humid-color'] = thresholds.humidColor;
    }
    // Return complete style map
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $kJycS._)({
        '--background-color-card': backgroundColorCard,
        '--state-color-card-theme': themeOverride,
        '--background-filter': filter
    }, alarmVars, thresholdVars, (_config_styles = config.styles) === null || _config_styles === void 0 ? void 0 : _config_styles.card));
};


/**
 * Room Summary Card Styles Module
 *
 * Handles all styling logic and CSS definitions for the Room Summary Card.
 * Includes functions for generating dynamic styles based on state and
 * configuration, as well as static CSS styles for the card layout.
 */ parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $9a549ca08a876898$var$_ = (t)=>t, $9a549ca08a876898$var$t;
const $9a549ca08a876898$export$e8f30ede68e93366 = (0, $2SS2a.css)($9a549ca08a876898$var$t || ($9a549ca08a876898$var$t = $9a549ca08a876898$var$_`
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

  /* Skip mold styles (disables animations for performance) */
  :host([skip-mold-styles]) .mold-indicator,
  :host([skip-mold-styles]) .mold-indicator ha-state-icon,
  :host([skip-mold-styles]) .mold-indicator .mold-text,
  :host([skip-mold-styles]) .mold-indicator::before,
  :host([skip-mold-styles]) .mold-indicator::after {
    animation: none !important;
  }
  :host([skip-mold-styles]) .mold-indicator:hover,
  :host([skip-mold-styles]) .mold-indicator:hover::before {
    animation: none !important;
  }

  /* Dark theme adjustments */
  :host([dark]) .mold-indicator {
    background: linear-gradient(135deg, #d32f2f, #c62828);
    box-shadow: 0 2px 8px rgba(211, 47, 47, 0.4);
  }

  :host([dark]) .mold-indicator::before {
    background: linear-gradient(45deg, #d32f2f, #c62828, #d32f2f);
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $6d7979ce7cb6be76$var$_ = (t)=>t, $6d7979ce7cb6be76$var$t;
const $6d7979ce7cb6be76$export$e417a58d8f305947 = (0, $2SS2a.css)($6d7979ce7cb6be76$var$t || ($6d7979ce7cb6be76$var$t = $6d7979ce7cb6be76$var$_`
  /* Card border styling for smoke */
  :host([alarm='smoke']) ha-card {
    animation: var(--smoke-card-animation, none);
    border: var(--smoke-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Card border styling for gas */
  :host([alarm='gas']) ha-card {
    animation: var(--gas-card-animation, none);
    border: var(--gas-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Card border styling for water */
  :host([alarm='water']) ha-card {
    animation: var(--water-card-animation, none);
    border: var(--water-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Card border styling for occupancy */
  :host([alarm='occupied']) ha-card {
    animation: var(--occupancy-card-animation, none);
    border: var(--occupancy-card-border);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* Animation keyframes for smoke */
  @keyframes smoke-pulse {
    0% {
      box-shadow: 0 0 5px var(--smoke-card-border-color, var(--error-color));
    }
    100% {
      box-shadow: 0 0 20px var(--smoke-card-border-color, var(--error-color));
    }
  }

  /* Animation keyframes for gas */
  @keyframes gas-pulse {
    0% {
      box-shadow: 0 0 5px var(--gas-card-border-color, #ff9800);
    }
    100% {
      box-shadow: 0 0 20px var(--gas-card-border-color, #ff9800);
    }
  }

  /* Animation keyframes for water */
  @keyframes water-pulse {
    0% {
      box-shadow: 0 0 5px var(--water-card-border-color, #2196f3);
    }
    100% {
      box-shadow: 0 0 20px var(--water-card-border-color, #2196f3);
    }
  }

  /* Animation keyframes for occupancy */
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
`));



let $4fafc8f75bfc202b$var$_ = (t)=>t, $4fafc8f75bfc202b$var$t, $4fafc8f75bfc202b$var$t1, $4fafc8f75bfc202b$var$t2, $4fafc8f75bfc202b$var$t3, $4fafc8f75bfc202b$var$t4, $4fafc8f75bfc202b$var$t5, $4fafc8f75bfc202b$var$t6, $4fafc8f75bfc202b$var$t7, $4fafc8f75bfc202b$var$t8;
/**
 * Base theme and color definitions
 */ const $4fafc8f75bfc202b$var$hostThemeStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t || ($4fafc8f75bfc202b$var$t = $4fafc8f75bfc202b$var$_`
  /* Card Themes and Colors */
  :host {
    ${0}
    ${0}
    ${0}
    ${0}
  }

  :host([dark]) {
    ${0}
    ${0}
  }

  :host {
    --text-color: var(--primary-text-color);
    --background-color-card: var(--theme-background-color-card);
    --background-opacity-card: var(--opacity-background-inactive);
    --icon-color: var(--theme-color-icon);
    --background-color-icon: var(--theme-background-color-icon);
    --background-opacity-icon: var(--opacity-icon-fill-inactive);
  }
`), (0, $caf1696fa639ec30$export$dec94ffc2d530e03), (0, $caf1696fa639ec30$export$7ec899f7a316957e), (0, $caf1696fa639ec30$export$4aa0a1b480cdb1b6), (0, $caf1696fa639ec30$export$38d2ecc76f0c2959), (0, $caf1696fa639ec30$export$9462d50bf972df13), (0, $caf1696fa639ec30$export$eae85ad18a22ab6c));
/**
 * Base theme and color definitions
 */ const $4fafc8f75bfc202b$var$haCardThemeStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t1 || ($4fafc8f75bfc202b$var$t1 = $4fafc8f75bfc202b$var$_`
  /* hot owns the top + left edges, humid owns the bottom + right edges.
     Each state writes only the sides it owns, so when both are set the
     border splits diagonally with no rule fighting another over the same
     side -- no !important or source-order tricks needed. A single active
     state still paints all four sides via the catch-all rules below. */
  :host([hot]) ha-card {
    border-top: 3px solid var(--threshold-hot-color, var(--error-color));
    border-left: 3px solid var(--threshold-hot-color, var(--error-color));
    border-right: 3px solid var(--threshold-hot-color, var(--error-color));
    border-bottom: 3px solid var(--threshold-hot-color, var(--error-color));
  }

  :host([humid]) ha-card {
    border-top: 3px solid var(--threshold-humid-color, var(--info-color));
    border-left: 3px solid var(--threshold-humid-color, var(--info-color));
    border-right: 3px solid var(--threshold-humid-color, var(--info-color));
    border-bottom: 3px solid var(--threshold-humid-color, var(--info-color));
  }

  /* Both active: hot keeps top/left, humid keeps bottom/right. */
  :host([hot][humid]) ha-card {
    border-top-color: var(--threshold-hot-color, var(--error-color));
    border-left-color: var(--threshold-hot-color, var(--error-color));
    border-right-color: var(--threshold-humid-color, var(--info-color));
    border-bottom-color: var(--threshold-humid-color, var(--info-color));
  }

  /* Card-level dimming when the background image actually renders.
     room-background-image reflects [image] itself, so the card no
     longer tracks an image flag; icon_background mode never sets it on
     the card-level layer. */
  ha-card:has(> room-background-image[image]) {
    --opacity-theme: 0.3;
    --text-opacity-theme: 0.8;
    --opacity-icon-fill-inactive: 0.2;
  }

  :host([icon-opacity-preset='medium']) {
    --opacity-icon-inactive: 0.6;
    --opacity-icon-fill-inactive: 0.15;
    --opacity-icon-active: 1;
    --opacity-icon-fill-active: 0.2;
  }

  :host([icon-opacity-preset='high_visibility']) {
    --opacity-icon-inactive: 1;
    --opacity-icon-fill-inactive: 0.2;
    --opacity-icon-active: 1;
    --opacity-icon-fill-active: 0.2;
  }
`));
/**
 * Card container and background styling
 */ const $4fafc8f75bfc202b$var$cardContainerStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t2 || ($4fafc8f75bfc202b$var$t2 = $4fafc8f75bfc202b$var$_`
  ha-card {
    line-height: normal;
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: relative;
  }

  :host([frosted-glass]) ha-card {
    /* Frosted Glass theme uses a transparent base + an overlay pseudo-element */
    background: transparent;
    box-shadow: var(--theme-box-shadow-frosted);
    border-radius: var(--theme-border-radius-frosted);
    border: var(--theme-border-width-frosted) solid
      var(--theme-border-color-frosted);
  }

  :host([frosted-glass]) room-background-image {
    /* Frosted Glass paints its own tint; hide the theme color layer
       but keep any background image. */
    --background-color-card: transparent;
  }

  :host([frosted-glass]) ha-card::before {
    /* Mimic Frosted Glass card-mod overlay within our shadow DOM */
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--theme-glass-tint-frosted);
    opacity: 1;
    filter: none;
    backdrop-filter: var(--theme-backdrop-filter-frosted);
    -webkit-backdrop-filter: var(--theme-backdrop-filter-frosted);
    box-shadow: var(--theme-glass-inset-shadow-frosted);
    border-radius: inherit;
    pointer-events: none;
  }
`));
/**
 * Grid layout and positioning
 */ const $4fafc8f75bfc202b$var$gridLayoutStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t3 || ($4fafc8f75bfc202b$var$t3 = $4fafc8f75bfc202b$var$_`
  .grid {
    display: grid;
    grid-template-areas: var(
      --user-grid-template-areas,
      'i i i e' 'i i i e' 'r r . e' 'r r . e'
    );
    grid-template-columns: var(--user-grid-template-columns, 1fr 1fr 1fr 1fr);
    grid-template-rows: var(--user-grid-template-rows, 1fr 1fr 1fr 1fr);
    justify-items: center;
    aspect-ratio: var(--user-grid-aspect-ratio, 1/1);
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

  entity-collection,
  entity-slider {
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
`));
/**
 * Entity and component area styles
 */ const $4fafc8f75bfc202b$var$entityAreaStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t4 || ($4fafc8f75bfc202b$var$t4 = $4fafc8f75bfc202b$var$_`
  /* Common text styles */
  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content; /* don't cover other elements plz */
  }
`));
/**
 * Status entity indicator
 */ const $4fafc8f75bfc202b$var$statusEntityStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t5 || ($4fafc8f75bfc202b$var$t5 = $4fafc8f75bfc202b$var$_`
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

  /* scooty on upwards is slider */
  ha-card:has(horizontal-slider[variant='bar']) .problems {
    margin-bottom: calc(10% + var(--horizontal-slider-height, 6%) + 20px);
  }

  /* scooty on upwards is slider */
  ha-card:has(horizontal-slider[variant='ha']) .problems {
    margin-bottom: calc(10% + var(--horizontal-slider-height, 6%) + 10px);
  }

  /* Status entities indicator */
  .status-entities {
    width: 26px;
    height: 26px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    color: var(--black-color);
    position: relative;
    z-index: 1;
    font-weight: 600;
    cursor: pointer;
    transition:
      transform 0.2s ease-in-out,
      filter 0.2s ease-in-out;
  }

  .status-entities:hover {
    transform: scale(1.15);
    filter: brightness(1.1);
  }

  .status-entities:hover::before {
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
`));
/**
 * Sensor and label display styles
 */ const $4fafc8f75bfc202b$var$sensorLabelStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t6 || ($4fafc8f75bfc202b$var$t6 = $4fafc8f75bfc202b$var$_`
  /* Room name styling */
  .name {
    font-size: clamp(1.2rem, 6cqw, 2rem);
    font-weight: 500;
    color: var(--text-color);
  }
`));
/**
 * Full card action overlay styles
 */ const $4fafc8f75bfc202b$var$cardOverlayStyles = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t7 || ($4fafc8f75bfc202b$var$t7 = $4fafc8f75bfc202b$var$_`
  .card-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
  }
`));
const $4fafc8f75bfc202b$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($4fafc8f75bfc202b$var$t8 || ($4fafc8f75bfc202b$var$t8 = $4fafc8f75bfc202b$var$_`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), $4fafc8f75bfc202b$var$hostThemeStyles, $4fafc8f75bfc202b$var$haCardThemeStyles, $4fafc8f75bfc202b$var$cardContainerStyles, $4fafc8f75bfc202b$var$gridLayoutStyles, $4fafc8f75bfc202b$var$entityAreaStyles, $4fafc8f75bfc202b$var$sensorLabelStyles, $4fafc8f75bfc202b$var$statusEntityStyles, (0, $6d7979ce7cb6be76$export$e417a58d8f305947), (0, $9a549ca08a876898$export$e8f30ede68e93366), $4fafc8f75bfc202b$var$cardOverlayStyles);



var $dTmXl = parcelRequire("dTmXl");

let $01f4c5d41a54ca3c$var$_ = (t)=>t, $01f4c5d41a54ca3c$var$t, $01f4c5d41a54ca3c$var$t1, $01f4c5d41a54ca3c$var$t2, $01f4c5d41a54ca3c$var$t3;
class $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9 extends (0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $4fafc8f75bfc202b$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(config, this._config)) {
            this.skipMoldStyles = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_mold_styles');
            this._config = config;
        }
    }
    /**
   * Expose `_hass` / `_config` as `this.hass` / `this.config` for
   * `HassConfigMixin` and anything else that reads them generically.
   */ get hass() {
        return this._hass;
    }
    get config() {
        return this._config;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        var _this__hass, // Dispatch on our own shadow root so only descendants in *this* card's
        // shadow tree receive it. Each card has a distinct shadow root, so this
        // isolates events between sibling cards on the dashboard.
        _this_shadowRoot;
        (0, $dTmXl.d)(this._config, 'room-summary-card', 'set hass');
        const { roomInfo: roomInfo, roomEntity: roomEntity, sensors: sensors, isActive: isActive, isIconActive: isIconActive, thresholds: thresholds, flags: { alarm: alarm, dark: dark, frostedGlass: frostedGlass } } = (0, $c4ab0a640e168730$export$df764ae7d62abece)(hass, this._config, this);
        this.alarm = alarm;
        this.dark = dark;
        this.frostedGlass = frostedGlass;
        this._isActive = isActive;
        this._isIconActive = isIconActive;
        this.iconOpacityPreset = this._config.icon_opacity_preset;
        // Update states only if they've changed
        let shouldRender = false;
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(roomInfo, this._roomInformation)) {
            this._roomInformation = roomInfo;
            shouldRender = true;
        }
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(roomEntity, this._roomEntity)) {
            this._roomEntity = roomEntity;
            shouldRender = true;
        }
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(sensors, this._sensors)) {
            this._sensors = sensors;
            shouldRender = true;
        }
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(thresholds, this._thresholds)) {
            this._thresholds = thresholds;
            this.hot = thresholds.hot;
            this.humid = thresholds.humid;
            shouldRender = true;
        }
        if (shouldRender || hass.formatEntityState !== ((_this__hass = this._hass) === null || _this__hass === void 0 ? void 0 : _this__hass.formatEntityState)) // normally we wouldn't need to update the hass object this way,
        // but since state-display is using the formatEntityState function
        // we need to ensure it is updated when the new function is available
        // this is a workaround and prevents the need to re-render the card many times
        // https://github.com/home-assistant/frontend/issues/25648
        this._hass = hass;
        else (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.dispatchEvent(new CustomEvent('hass-update', {
            detail: {
                hass: hass
            }
        }));
    }
    // card configuration
    static getConfigElement() {
        return document.createElement('room-summary-card-editor');
    }
    static getStubConfig(hass) {
        // Get all area IDs and their friendly names
        const areas = Object.entries(hass.areas);
        // Find the first area that has matching entities
        const matchingArea = areas.find(([, area])=>{
            const areaName = area.area_id.toLowerCase().replaceAll(/\s+/g, '_');
            // Check if either entity exists for this area
            const hasLight = `light.${areaName}_light` in hass.entities || `light.${areaName}` in hass.entities;
            const hasFan = `switch.${areaName}_fan` in hass.entities || `fan.${areaName}` in hass.entities;
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
        var _this__sensors;
        (0, $dTmXl.d)(this._config, 'room-summary-card', 'render');
        if (!this._hass) return 0, $ci0wX.nothing;
        const roomEntity = (0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, this._roomEntity, this._config, {
            isMainRoomEntity: true,
            isActive: this._isIconActive,
            alarm: this.alarm
        });
        const cardStyle = (0, $5e4701340181d3da$export$6675fe814017d7b1)(this._hass, this._config, this._roomEntity, this.alarm, this._isActive, this._thresholds, (_this__sensors = this._sensors) === null || _this__sensors === void 0 ? void 0 : _this__sensors.ambientLightEntities);
        const problems = (0, $d71beedfb309b5b1$export$8093665c9ba8ead9)(this._hass, this._config, this._sensors, this);
        const actions = (0, $69eb2992476f80e8$export$f4c1e7ce0a330ff4)(this._roomEntity, this._config);
        return (0, $ci0wX.html)($01f4c5d41a54ca3c$var$t3 || ($01f4c5d41a54ca3c$var$t3 = $01f4c5d41a54ca3c$var$_`
      <ha-card style="${0}">
        <room-background-image
          .isActive=${0}
          .hass=${0}
          .config=${0}
        ></room-background-image>

        <div class="grid">
          ${0}

          <!-- Room Icon -->
          ${0}

          <!-- Entities Container -->
          ${0}

          <!-- Problem Indicator -->
          ${0}
        </div>

        ${0}

        <!-- Full Card Action Overlay -->
        ${0}
      </ha-card>
    `), cardStyle, this._isActive, this._hass, this._config, (0, $52a5e6cbabf7b8e2$export$a80b3bd66acc52ff)(this, this._hass, this._roomInformation, actions, this._config, this._sensors, this._isIconActive), roomEntity, (0, $1e40c00d469c9d00$exports.hasFeature)(this._config, 'slider') ? (0, $ci0wX.html)($01f4c5d41a54ca3c$var$t || ($01f4c5d41a54ca3c$var$t = $01f4c5d41a54ca3c$var$_`
                <entity-slider
                  .config=${0}
                  .hass=${0}
                ></entity-slider>
              `), this._config, this._hass) : (0, $ci0wX.html)($01f4c5d41a54ca3c$var$t1 || ($01f4c5d41a54ca3c$var$t1 = $01f4c5d41a54ca3c$var$_`
                <entity-collection
                  .config=${0}
                  .hass=${0}
                ></entity-collection>
              `), this._config, this._hass), problems, (0, $558a5ff0fe4616cd$export$cd0a0c83f075ecc7)(this._hass, this._config), (0, $1e40c00d469c9d00$exports.hasFeature)(this._config, 'full_card_actions') ? (0, $ci0wX.html)($01f4c5d41a54ca3c$var$t2 || ($01f4c5d41a54ca3c$var$t2 = $01f4c5d41a54ca3c$var$_`
              <div
                class="card-overlay"
                @action=${0}
                .actionHandler=${0}
              ></div>
            `), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, actions), (0, $b96673d7637fba33$export$8a44987212de21b)(actions)) : (0, $ci0wX.nothing));
    }
    constructor(...args){
        super(...args), /**
   * Whether the room is considered active (for card background styling)
   */ this._isActive = false, /**
   * Whether the icon should be styled as active (excludes ambient lights)
   */ this._isIconActive = false, /**
   * Whether to render the card with a frosted-glass overlay.
   * This is auto-detected from active HA theme name.
   */ this.frostedGlass = false;
    }
}
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_config", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_roomInformation", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_roomEntity", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_sensors", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_isActive", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_isIconActive", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_thresholds", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "dark", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "hot", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "humid", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "alarm", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true,
        attribute: 'skip-mold-styles'
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "skipMoldStyles", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true,
        attribute: 'frosted-glass'
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "frostedGlass", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true,
        attribute: 'icon-opacity-preset'
    })
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "iconOpacityPreset", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9.prototype, "_hass", void 0);



var $2QgUB = parcelRequire("2QgUB");

const $1c79672e60888038$export$7d2846cf165df04b = (state, badge)=>{
    if (!badge.states || !state) return undefined;
    for (const stateConfig of badge.states){
        var _state_attributes;
        var _state_attributes_stateConfig_attribute;
        // Determine what value to compare against
        const valueToMatch = stateConfig.attribute ? String((_state_attributes_stateConfig_attribute = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes[stateConfig.attribute]) !== null && _state_attributes_stateConfig_attribute !== void 0 ? _state_attributes_stateConfig_attribute : '') : state.state;
        const operator = stateConfig.operator || 'eq';
        if ((0, $44b62a71bbe065b9$export$8003fd10bb85e3f6)(valueToMatch, stateConfig.state, operator)) return stateConfig;
    }
    return undefined;
};



var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");

var $jc0SV = parcelRequire("jc0SV");
var $5abff3d3a915abb3$exports = {};
"use strict";
let $5abff3d3a915abb3$var$_ = (t)=>t, $5abff3d3a915abb3$var$t;
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/tile/badges/tile-badge.ts
 */ Object.defineProperty($5abff3d3a915abb3$exports, "__esModule", {
    value: true
});
$5abff3d3a915abb3$exports.renderTileBadge = void 0;
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");


var $h7W3o = parcelRequire("h7W3o");

var $a18fffde1709cd72$exports = {};
"use strict";
let $a18fffde1709cd72$var$_ = (t)=>t, $a18fffde1709cd72$var$t;
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/tile/badges/tile-badge-climate.ts
 */ Object.defineProperty($a18fffde1709cd72$exports, "__esModule", {
    value: true
});
$a18fffde1709cd72$exports.renderClimateBadge = void 0;
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");


var $b249f8e80c3f58bd$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/climate.ts
 */ Object.defineProperty($b249f8e80c3f58bd$exports, "__esModule", {
    value: true
});
$b249f8e80c3f58bd$exports.climateHvacModeIcon = $b249f8e80c3f58bd$exports.CLIMATE_HVAC_MODE_ICONS = $b249f8e80c3f58bd$exports.CLIMATE_HVAC_ACTION_TO_MODE = $b249f8e80c3f58bd$exports.compareClimateHvacModes = $b249f8e80c3f58bd$exports.ClimateEntityFeature = $b249f8e80c3f58bd$exports.CLIMATE_PRESET_NONE = $b249f8e80c3f58bd$exports.HVAC_MODES = void 0;
$b249f8e80c3f58bd$exports.HVAC_MODES = [
    'auto',
    'heat_cool',
    'heat',
    'cool',
    'dry',
    'fan_only',
    'off'
];
$b249f8e80c3f58bd$exports.CLIMATE_PRESET_NONE = 'none';
var $b249f8e80c3f58bd$var$ClimateEntityFeature;
(function(ClimateEntityFeature) {
    ClimateEntityFeature[ClimateEntityFeature["TARGET_TEMPERATURE"] = 1] = "TARGET_TEMPERATURE";
    ClimateEntityFeature[ClimateEntityFeature["TARGET_TEMPERATURE_RANGE"] = 2] = "TARGET_TEMPERATURE_RANGE";
    ClimateEntityFeature[ClimateEntityFeature["TARGET_HUMIDITY"] = 4] = "TARGET_HUMIDITY";
    ClimateEntityFeature[ClimateEntityFeature["FAN_MODE"] = 8] = "FAN_MODE";
    ClimateEntityFeature[ClimateEntityFeature["PRESET_MODE"] = 16] = "PRESET_MODE";
    ClimateEntityFeature[ClimateEntityFeature["SWING_MODE"] = 32] = "SWING_MODE";
    ClimateEntityFeature[ClimateEntityFeature["AUX_HEAT"] = 64] = "AUX_HEAT";
    ClimateEntityFeature[ClimateEntityFeature["TURN_OFF"] = 128] = "TURN_OFF";
    ClimateEntityFeature[ClimateEntityFeature["TURN_ON"] = 256] = "TURN_ON";
    ClimateEntityFeature[ClimateEntityFeature["SWING_HORIZONTAL_MODE"] = 512] = "SWING_HORIZONTAL_MODE";
})($b249f8e80c3f58bd$var$ClimateEntityFeature || ($b249f8e80c3f58bd$exports.ClimateEntityFeature = $b249f8e80c3f58bd$var$ClimateEntityFeature = {}));
const $b249f8e80c3f58bd$var$hvacModeOrdering = $b249f8e80c3f58bd$exports.HVAC_MODES.reduce((order, mode, index)=>{
    order[mode] = index;
    return order;
}, {});
const $b249f8e80c3f58bd$var$compareClimateHvacModes = (mode1, mode2)=>$b249f8e80c3f58bd$var$hvacModeOrdering[mode1] - $b249f8e80c3f58bd$var$hvacModeOrdering[mode2];
$b249f8e80c3f58bd$exports.compareClimateHvacModes = $b249f8e80c3f58bd$var$compareClimateHvacModes;
$b249f8e80c3f58bd$exports.CLIMATE_HVAC_ACTION_TO_MODE = {
    cooling: 'cool',
    defrosting: 'heat',
    drying: 'dry',
    fan: 'fan_only',
    heating: 'heat',
    idle: 'off',
    off: 'off',
    preheating: 'heat'
};
$b249f8e80c3f58bd$exports.CLIMATE_HVAC_MODE_ICONS = {
    cool: 'mdi:snowflake',
    dry: 'mdi:water-percent',
    fan_only: 'mdi:fan',
    auto: 'mdi:thermostat-auto',
    heat: 'mdi:fire',
    off: 'mdi:power',
    heat_cool: 'mdi:sun-snowflake-variant'
};
const $b249f8e80c3f58bd$var$climateHvacModeIcon = (mode)=>$b249f8e80c3f58bd$exports.CLIMATE_HVAC_MODE_ICONS[mode] || 'mdi:thermostat';
$b249f8e80c3f58bd$exports.climateHvacModeIcon = $b249f8e80c3f58bd$var$climateHvacModeIcon;


const $a18fffde1709cd72$var$renderClimateBadge = (stateObj, hass)=>{
    const hvacAction = stateObj.attributes.hvac_action;
    if (!hvacAction || hvacAction === 'off') return $ci0wX.nothing;
    // Adapt stateColorCss call - room-summary-card version has different signature
    const color = (0, $138ab67ea0f87e5c$exports.stateColorCss)(stateObj, 'badge', undefined, $b249f8e80c3f58bd$exports.CLIMATE_HVAC_ACTION_TO_MODE[hvacAction]);
    return (0, $ci0wX.html)($a18fffde1709cd72$var$t || ($a18fffde1709cd72$var$t = $a18fffde1709cd72$var$_`
    <ha-tile-badge
      style=${0}
    >
      <ha-attribute-icon
        .hass=${0}
        .stateObj=${0}
        attribute="hvac_action"
      >
      </ha-attribute-icon>
    </ha-tile-badge>
  `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--tile-badge-background-color': color || 'var(--primary-color)'
    }), hass, stateObj);
};
$a18fffde1709cd72$exports.renderClimateBadge = $a18fffde1709cd72$var$renderClimateBadge;


var $20086370ebd0c44d$exports = {};
"use strict";
let $20086370ebd0c44d$var$_ = (t)=>t, $20086370ebd0c44d$var$t;
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/tile/badges/tile-badge-humidifier.ts
 */ Object.defineProperty($20086370ebd0c44d$exports, "__esModule", {
    value: true
});
$20086370ebd0c44d$exports.renderHumidifierBadge = void 0;
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");


var $337114d42ad3e202$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/humidifier.ts
 */ Object.defineProperty($337114d42ad3e202$exports, "__esModule", {
    value: true
});
$337114d42ad3e202$exports.HUMIDIFIER_ACTION_MODE = $337114d42ad3e202$exports.HumidifierEntityDeviceClass = $337114d42ad3e202$exports.HumidifierEntityFeature = void 0;
var $337114d42ad3e202$var$HumidifierEntityFeature;
(function(HumidifierEntityFeature) {
    HumidifierEntityFeature[HumidifierEntityFeature["MODES"] = 1] = "MODES";
})($337114d42ad3e202$var$HumidifierEntityFeature || ($337114d42ad3e202$exports.HumidifierEntityFeature = $337114d42ad3e202$var$HumidifierEntityFeature = {}));
var $337114d42ad3e202$var$HumidifierEntityDeviceClass;
(function(HumidifierEntityDeviceClass) {
    HumidifierEntityDeviceClass["HUMIDIFIER"] = "humidifier";
    HumidifierEntityDeviceClass["DEHUMIDIFIER"] = "dehumidifier";
})($337114d42ad3e202$var$HumidifierEntityDeviceClass || ($337114d42ad3e202$exports.HumidifierEntityDeviceClass = $337114d42ad3e202$var$HumidifierEntityDeviceClass = {}));
$337114d42ad3e202$exports.HUMIDIFIER_ACTION_MODE = {
    drying: 'on',
    humidifying: 'on',
    idle: 'off',
    off: 'off'
};


const $20086370ebd0c44d$var$renderHumidifierBadge = (stateObj, hass)=>{
    const action = stateObj.attributes.action;
    if (!action || action === 'off') return $ci0wX.nothing;
    // Adapt stateColorCss call - room-summary-card version has different signature
    const color = (0, $138ab67ea0f87e5c$exports.stateColorCss)(stateObj, 'badge', undefined, $337114d42ad3e202$exports.HUMIDIFIER_ACTION_MODE[action]);
    return (0, $ci0wX.html)($20086370ebd0c44d$var$t || ($20086370ebd0c44d$var$t = $20086370ebd0c44d$var$_`
    <ha-tile-badge
      style=${0}
    >
      <ha-attribute-icon .hass=${0} .stateObj=${0} attribute="action">
      </ha-attribute-icon>
    </ha-tile-badge>
  `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--tile-badge-background-color': color || 'var(--primary-color)'
    }), hass, stateObj);
};
$20086370ebd0c44d$exports.renderHumidifierBadge = $20086370ebd0c44d$var$renderHumidifierBadge;


var $83f75968260883d3$exports = {};
"use strict";
let $83f75968260883d3$var$_ = (t)=>t, $83f75968260883d3$var$t, $83f75968260883d3$var$t1;
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/tile/badges/tile-badge-person.ts
 */ Object.defineProperty($83f75968260883d3$exports, "__esModule", {
    value: true
});
$83f75968260883d3$exports.renderPersonBadge = void 0;
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");


function $83f75968260883d3$var$getZone(entity, hass) {
    const state = entity.state;
    if (state === 'home' || state === 'not_home') return undefined;
    const zones = Object.values(hass.states).filter((stateObj)=>stateObj.entity_id.startsWith('zone.'));
    return zones.find((z)=>state === z.attributes.friendly_name);
}
const $83f75968260883d3$var$renderPersonBadge = (stateObj, hass)=>{
    const zone = $83f75968260883d3$var$getZone(stateObj, hass);
    const zoneIcon = zone === null || zone === void 0 ? void 0 : zone.attributes.icon;
    const color = (0, $138ab67ea0f87e5c$exports.stateColorCss)(stateObj, 'badge');
    if (zoneIcon) return (0, $ci0wX.html)($83f75968260883d3$var$t || ($83f75968260883d3$var$t = $83f75968260883d3$var$_`
      <ha-tile-badge
        style=${0}
      >
        <ha-icon .icon=${0}></ha-icon>
      </ha-tile-badge>
    `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--tile-badge-background-color': color || 'var(--primary-color)'
    }), zoneIcon);
    // Use icon strings instead of importing from @mdi/js
    const defaultIcon = stateObj.state === 'not_home' ? 'mdi:home-export-outline' : 'mdi:home';
    return (0, $ci0wX.html)($83f75968260883d3$var$t1 || ($83f75968260883d3$var$t1 = $83f75968260883d3$var$_`
    <ha-tile-badge
      style=${0}
    >
      <ha-icon .icon=${0}></ha-icon>
    </ha-tile-badge>
  `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--tile-badge-background-color': color || 'var(--primary-color)'
    }), defaultIcon);
};
$83f75968260883d3$exports.renderPersonBadge = $83f75968260883d3$var$renderPersonBadge;


const $5abff3d3a915abb3$var$renderTileBadge = (stateObj, hass)=>{
    if (stateObj.state === $c216464f2b025d6e$exports.UNKNOWN) return $ci0wX.nothing;
    if (stateObj.state === $c216464f2b025d6e$exports.UNAVAILABLE) return (0, $ci0wX.html)($5abff3d3a915abb3$var$t || ($5abff3d3a915abb3$var$t = $5abff3d3a915abb3$var$_`
      <ha-tile-badge
        style=${0}
      >
        <ha-icon icon="mdi:exclamation-thick"></ha-icon>
      </ha-tile-badge>
    `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--tile-badge-background-color': 'var(--orange-color)'
    }));
    const domain = (0, $h7W3o.computeDomain)(stateObj.entity_id);
    switch(domain){
        case 'person':
        case 'device_tracker':
            return (0, $83f75968260883d3$exports.renderPersonBadge)(stateObj, hass);
        case 'climate':
            return (0, $a18fffde1709cd72$exports.renderClimateBadge)(stateObj, hass);
        case 'humidifier':
            return (0, $20086370ebd0c44d$exports.renderHumidifierBadge)(stateObj, hass);
        default:
            return $ci0wX.nothing;
    }
};
$5abff3d3a915abb3$exports.renderTileBadge = $5abff3d3a915abb3$var$renderTileBadge;





var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");


var $2QgUB = parcelRequire("2QgUB");
var $9c76073bf75e1723$exports = {};

var $kJycS = parcelRequire("kJycS");
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/ws-templates.ts
 */ Object.defineProperty($9c76073bf75e1723$exports, "__esModule", {
    value: true
});
$9c76073bf75e1723$exports.subscribeRenderTemplate = void 0;
const $9c76073bf75e1723$var$subscribeRenderTemplate = (conn, onChange, params)=>conn.subscribeMessage((msg)=>onChange(msg), (0, $kJycS._)({
        type: 'render_template'
    }, params));
$9c76073bf75e1723$exports.subscribeRenderTemplate = $9c76073bf75e1723$var$subscribeRenderTemplate;


class $a8bfdc087294b7f3$export$d201aad20a44ca08 {
    get displayedText() {
        return this._displayedText;
    }
    sync(hass, entityId, template) {
        const trimmed = template === null || template === void 0 ? void 0 : template.trim();
        if (!(hass === null || hass === void 0 ? void 0 : hass.connection) || !trimmed) {
            this._tearDown();
            this._displayedText = '';
            this._subscriptionKey = undefined;
            this._requestUpdate();
            return;
        }
        const key = `${entityId}\0${trimmed}`;
        if (this._subscriptionKey === key && this._unsub) return;
        this._tearDown();
        this._subscriptionKey = key;
        this._displayedText = '';
        this._callbackGen++;
        const generation = this._callbackGen;
        this._unsub = (0, $9c76073bf75e1723$exports.subscribeRenderTemplate)(hass.connection, (result)=>{
            if (generation !== this._callbackGen) return;
            if ('error' in result) {
                console.warn('room-summary-card: label template:', result.error, `(${entityId})`);
                return;
            }
            var _result_result;
            this._displayedText = (_result_result = result.result) !== null && _result_result !== void 0 ? _result_result : '';
            this._requestUpdate();
        }, {
            template: trimmed,
            entity_ids: entityId,
            strict: true
        });
    }
    _tearDown() {
        if (this._unsub) {
            this._unsub.then((u)=>{
                u();
            });
            this._unsub = undefined;
        }
    }
    disconnect() {
        this._tearDown();
        this._subscriptionKey = undefined;
        this._callbackGen++;
        this._displayedText = '';
    }
    constructor(_requestUpdate){
        this._requestUpdate = _requestUpdate;
        this._callbackGen = 0;
        this._displayedText = '';
    }
}


var $e1a1e2291c993cc1$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/string/has-template.ts
 */ Object.defineProperty($e1a1e2291c993cc1$exports, "__esModule", {
    value: true
});
$e1a1e2291c993cc1$exports.isTemplateString = void 0;
const $e1a1e2291c993cc1$var$TEMPLATE_SYNTAX = /{%|{{/;
/** True when the string looks like Jinja (e.g. contains `{{` or `{%`). */ const $e1a1e2291c993cc1$var$isTemplateString = (value)=>$e1a1e2291c993cc1$var$TEMPLATE_SYNTAX.test(value);
$e1a1e2291c993cc1$exports.isTemplateString = $e1a1e2291c993cc1$var$isTemplateString;



var $g28NR = parcelRequire("g28NR");

var $dTmXl = parcelRequire("dTmXl");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
let $4851f26bdeb7e50a$var$_ = (t)=>t, $4851f26bdeb7e50a$var$t, $4851f26bdeb7e50a$var$t1, $4851f26bdeb7e50a$var$t2;
class $4851f26bdeb7e50a$export$27ddacf6292c3059 extends (0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)) {
    disconnectedCallback() {
        this._labelTemplateConn.disconnect();
        super.disconnectedCallback();
    }
    render() {
        (0, $dTmXl.d)(this.config, 'room-badge-label', 'render');
        if (!this.label) {
            this._labelTemplateConn.disconnect();
            return 0, $ci0wX.nothing;
        }
        if ((0, $e1a1e2291c993cc1$exports.isTemplateString)(this.label)) {
            this._labelTemplateConn.sync(this.hass, this.entityId, this.label);
            return (0, $ci0wX.html)($4851f26bdeb7e50a$var$t || ($4851f26bdeb7e50a$var$t = $4851f26bdeb7e50a$var$_`${0}`), this._labelTemplateConn.displayedText);
        }
        this._labelTemplateConn.disconnect();
        return (0, $ci0wX.html)($4851f26bdeb7e50a$var$t1 || ($4851f26bdeb7e50a$var$t1 = $4851f26bdeb7e50a$var$_`${0}`), this.label);
    }
    constructor(...args){
        super(...args), this._labelTemplateConn = new (0, $a8bfdc087294b7f3$export$d201aad20a44ca08)(()=>this.requestUpdate()), this.entityId = '';
    }
}
$4851f26bdeb7e50a$export$27ddacf6292c3059.styles = (0, $2SS2a.css)($4851f26bdeb7e50a$var$t2 || ($4851f26bdeb7e50a$var$t2 = $4851f26bdeb7e50a$var$_`
    :host {
      display: inline-flex;
      justify-content: center;
      padding: 0 2px;
      overflow: hidden;
      font-size: 0.65rem;
      line-height: 1;
      white-space: nowrap;
    }
  `));
$4851f26bdeb7e50a$export$27ddacf6292c3059 = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('room-badge-label')
], $4851f26bdeb7e50a$export$27ddacf6292c3059);


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $aeaea6f5f5e584ed$var$_ = (t)=>t, $aeaea6f5f5e584ed$var$t;
const $aeaea6f5f5e584ed$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($aeaea6f5f5e584ed$var$t || ($aeaea6f5f5e584ed$var$t = $aeaea6f5f5e584ed$var$_`
  :host {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  :host([position='top-right']) {
    top: -5%;
    right: -5%;
  }

  :host([position='top-left']) {
    top: -5%;
    left: -5%;
  }

  :host([position='bottom-right']) {
    bottom: -5%;
    right: -5%;
  }

  :host([position='bottom-left']) {
    bottom: -5%;
    left: -5%;
  }
`));


let $7191b93f31a09a17$var$_ = (t)=>t, $7191b93f31a09a17$var$t, $7191b93f31a09a17$var$t1, $7191b93f31a09a17$var$t2;
class $7191b93f31a09a17$export$37acb3580601e69a extends (0, $jc0SV.SubscribeEntityStateMixin)((0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $aeaea6f5f5e584ed$export$9dd6ff9ea0189349;
    }
    /**
   * Badge configuration
   */ set badge(badge) {
        if ((0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(badge, this._badge)) return;
        var _badge_position;
        // Set position (convert underscores to hyphens for CSS)
        const position = (_badge_position = badge.position) !== null && _badge_position !== void 0 ? _badge_position : 'top_right';
        this.position = position.replaceAll('_', '-');
        this.entity = badge.entity_id;
        this._badge = badge;
    }
    /**
   * Only update if we have a state.
   */ shouldUpdate(changedProperties) {
        return changedProperties.has('states');
    }
    /**
   * Render the badge
   */ render() {
        const config = this.config;
        const hass = this.hass;
        const state = this.state;
        const id = this.entity;
        (0, $dTmXl.d)(config, 'badge', 'render', id);
        // For homeassistant mode, use renderTileBadge (HA's native badge helper)
        const badge = this._badge;
        if (badge.mode === 'homeassistant') return (0, $5abff3d3a915abb3$exports.renderTileBadge)(state, hass);
        const matchingState = (0, $1c79672e60888038$export$7d2846cf165df04b)(state, badge);
        // For if_match mode, only render if a state match is found
        if (badge.mode === 'if_match' && !matchingState) return 0, $ci0wX.nothing;
        var _matchingState_label;
        const label = (_matchingState_label = matchingState === null || matchingState === void 0 ? void 0 : matchingState.label) !== null && _matchingState_label !== void 0 ? _matchingState_label : badge.label;
        return (0, $ci0wX.html)($7191b93f31a09a17$var$t2 || ($7191b93f31a09a17$var$t2 = $7191b93f31a09a17$var$_`
      ${0}
      <ha-tile-badge
        style=${0}
      >
        ${0}
      </ha-tile-badge>
    `), (matchingState === null || matchingState === void 0 ? void 0 : matchingState.styles) ? (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)(matchingState.styles) : (0, $ci0wX.nothing), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
            '--tile-badge-background-color': (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(matchingState === null || matchingState === void 0 ? void 0 : matchingState.icon_color)
        }), label ? (0, $ci0wX.html)($7191b93f31a09a17$var$t || ($7191b93f31a09a17$var$t = $7191b93f31a09a17$var$_`
              <room-badge-label
                .hass=${0}
                .config=${0}
                .entityId=${0}
                .label=${0}
              ></room-badge-label>
            `), hass, config, id !== null && id !== void 0 ? id : '', label) : (0, $ci0wX.html)($7191b93f31a09a17$var$t1 || ($7191b93f31a09a17$var$t1 = $7191b93f31a09a17$var$_`
              <ha-state-icon
                .hass=${0}
                .stateObj=${0}
                .icon=${0}
              ></ha-state-icon>
            `), hass, state, matchingState === null || matchingState === void 0 ? void 0 : matchingState.icon));
    }
    constructor(...args){
        super(...args), /**
   * Badge position (reflective attribute)
   */ this.position = 'top-right';
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true,
        attribute: 'position'
    })
], $7191b93f31a09a17$export$37acb3580601e69a.prototype, "position", void 0);



var $2QgUB = parcelRequire("2QgUB");
var $89c14c69d6c7f6bf$exports = {};
"use strict";
Object.defineProperty($89c14c69d6c7f6bf$exports, "__esModule", {
    value: true
});
$89c14c69d6c7f6bf$exports.createComputeLabel = $89c14c69d6c7f6bf$var$createComputeLabel;
/**
 * Builds a ha-form `computeLabel` callback with typed translation keys on `schema.label`.
 */ function $89c14c69d6c7f6bf$var$createComputeLabel(localize) {
    return (schema, hass)=>{
        if (!schema.label) return '';
        return `${localize(hass, schema.label)} ${schema.required ? `(${hass.localize('ui.panel.lovelace.editor.card.config.required')})` : `(${hass.localize('ui.panel.lovelace.editor.card.config.optional')})`}`;
    };
}



var $cfP8R = parcelRequire("cfP8R");
const $58c2b5810601848d$export$851056343f01ae23 = (0, $89c14c69d6c7f6bf$exports.createComputeLabel)((0, $cfP8R.localize));


var $559da9a3c5c02863$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/ensure-array.ts
 */ Object.defineProperty($559da9a3c5c02863$exports, "__esModule", {
    value: true
});
$559da9a3c5c02863$exports.ensureArray = $559da9a3c5c02863$var$ensureArray;
function $559da9a3c5c02863$var$ensureArray(value) {
    if (value === undefined || value === null || Array.isArray(value)) return value;
    return [
        value
    ];
}



var $5R2d0 = parcelRequire("5R2d0");

var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("aAO52");
var $bvVEG = parcelRequire("bvVEG");

var $2QgUB = parcelRequire("2QgUB");



var $5R2d0 = parcelRequire("5R2d0");


var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("aAO52");
var $bvVEG = parcelRequire("bvVEG");

let $68ce0c44dd114f11$var$_ = (t)=>t, $68ce0c44dd114f11$var$t, $68ce0c44dd114f11$var$t1, $68ce0c44dd114f11$var$t2, $68ce0c44dd114f11$var$t3;
class $68ce0c44dd114f11$export$806f47322f907427 extends (0, $2r9I1.LitElement) {
    _getKey(item, index) {
        // Use index as key to maintain stable identity during editing
        // This prevents focus loss when typing in form fields
        return `${this.mode}-${index}`;
    }
    _addItem() {
        if (this.mode === 'states') {
            const newState = {
                state: ''
            };
            const newStates = [
                ...this.states || [],
                newState
            ];
            const newIndex = newStates.length - 1;
            this._expandedStates = new Set([
                ...this._expandedStates,
                newIndex
            ]);
            (0, $5R2d0.fireEvent)(this, 'states-value-changed', {
                value: newStates
            });
        } else {
            const newThreshold = {
                threshold: 0
            };
            const newThresholds = [
                ...this.thresholds || [],
                newThreshold
            ];
            const newIndex = newThresholds.length - 1;
            this._expandedStates = new Set([
                ...this._expandedStates,
                newIndex
            ]);
            (0, $5R2d0.fireEvent)(this, 'thresholds-value-changed', {
                value: newThresholds
            });
        }
    }
    /**
   * Adjusts expanded state indices after removing an item at the specified index.
   * Indices greater than the removed index are decremented by 1.
   */ _adjustExpandedIndicesAfterRemoval(removedIndex) {
        const newExpanded = new Set(this._expandedStates);
        newExpanded.delete(removedIndex);
        const adjustedExpanded = new Set();
        for (const idx of newExpanded)if (idx > removedIndex) adjustedExpanded.add(idx - 1);
        else adjustedExpanded.add(idx);
        return adjustedExpanded;
    }
    /**
   * Removes a state item at the specified index and fires the appropriate event.
   */ _removeStateItem(index) {
        const newStates = (this.states || []).concat();
        newStates.splice(index, 1);
        this._expandedStates = this._adjustExpandedIndicesAfterRemoval(index);
        // Always ensure we send an array, even if empty
        (0, $5R2d0.fireEvent)(this, 'states-value-changed', {
            value: newStates.length > 0 ? newStates : []
        });
    }
    /**
   * Removes a threshold item at the specified index and fires the appropriate event.
   */ _removeThresholdItem(index) {
        const newThresholds = (this.thresholds || []).concat();
        newThresholds.splice(index, 1);
        this._expandedStates = this._adjustExpandedIndicesAfterRemoval(index);
        // Always ensure we send an array, even if empty
        (0, $5R2d0.fireEvent)(this, 'thresholds-value-changed', {
            value: newThresholds.length > 0 ? newThresholds : []
        });
    }
    _removeItem(index) {
        if (this.mode === 'states') this._removeStateItem(index);
        else this._removeThresholdItem(index);
    }
    /**
   * Removes empty string properties from a config object
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any -- deep config prune
    _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            // Skip empty strings
            if (value === '') continue;
            // Recursively clean nested objects
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _itemValueChanged(index, ev) {
        if (this.mode === 'states') {
            const newStates = (this.states || []).concat();
            const updatedState = ev.detail.value;
            // Ensure we have valid state before updating
            if (updatedState && typeof updatedState === 'object') {
                // Clean empty strings from the state config
                const cleanedState = this._cleanEmptyStrings(updatedState);
                newStates[index] = cleanedState;
            }
            // Always ensure we send an array
            (0, $5R2d0.fireEvent)(this, 'states-value-changed', {
                value: newStates
            });
        } else {
            const newThresholds = (this.thresholds || []).concat();
            const updatedThreshold = ev.detail.value;
            // Ensure we have valid threshold before updating
            if (updatedThreshold && typeof updatedThreshold === 'object') {
                // Clean empty strings from the threshold config
                const cleanedThreshold = this._cleanEmptyStrings(updatedThreshold);
                newThresholds[index] = cleanedThreshold;
            }
            // Always ensure we send an array
            (0, $5R2d0.fireEvent)(this, 'thresholds-value-changed', {
                value: newThresholds
            });
        }
    }
    _getItemTitle(item) {
        if (this.mode === 'states') {
            const state = item;
            if (state.label && !(0, $e1a1e2291c993cc1$exports.isTemplateString)(state.label)) return `${state.state} (${state.label})`;
            return state.state || 'New State';
        } else {
            var _threshold_threshold;
            const threshold = item;
            if (threshold.label && !(0, $e1a1e2291c993cc1$exports.isTemplateString)(threshold.label)) return `${threshold.threshold} (${threshold.label})`;
            return ((_threshold_threshold = threshold.threshold) === null || _threshold_threshold === void 0 ? void 0 : _threshold_threshold.toString()) || 'New Threshold';
        }
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass) return 0, $ci0wX.nothing;
        const entityId = this.entityId || '';
        const defaultLabel = this.mode === 'states' ? (0, $cfP8R.localize)(this.hass, 'editor.entity.states') : (0, $cfP8R.localize)(this.hass, 'editor.entity.thresholds');
        const addButtonLabel = this.mode === 'states' ? (0, $cfP8R.localize)(this.hass, 'editor.entity.add_state') : (0, $cfP8R.localize)(this.hass, 'editor.entity.add_threshold');
        const renderItems = ()=>{
            if (this.mode === 'states') {
                var _ensureArray;
                const states = (_ensureArray = (0, $559da9a3c5c02863$exports.ensureArray)(this.states)) !== null && _ensureArray !== void 0 ? _ensureArray : [];
                return (0, $bvVEG.repeat)(states, (item, index)=>this._getKey(item, index), (item, index)=>{
                    const isExpanded = this._expandedStates.has(index);
                    return (0, $ci0wX.html)($68ce0c44dd114f11$var$t || ($68ce0c44dd114f11$var$t = $68ce0c44dd114f11$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="state-header">
                  <div class="state-title">${0}</div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="state-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                        if (ev.detail.value) this._expandedStates = new Set([
                            ...this._expandedStates,
                            index
                        ]);
                        else {
                            const newExpanded = new Set(this._expandedStates);
                            newExpanded.delete(index);
                            this._expandedStates = newExpanded;
                        }
                    }, this._getItemTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                        e.stopPropagation();
                        this._removeItem(index);
                    }, this.hass, item, this._getStateSchema(entityId, this.hass, this.isSensor, this.isMainEntity), (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, this.hass), (ev)=>this._itemValueChanged(index, ev));
                });
            } else {
                var _ensureArray1;
                const thresholds = (_ensureArray1 = (0, $559da9a3c5c02863$exports.ensureArray)(this.thresholds)) !== null && _ensureArray1 !== void 0 ? _ensureArray1 : [];
                return (0, $bvVEG.repeat)(thresholds, (item, index)=>this._getKey(item, index), (item, index)=>{
                    const isExpanded = this._expandedStates.has(index);
                    return (0, $ci0wX.html)($68ce0c44dd114f11$var$t1 || ($68ce0c44dd114f11$var$t1 = $68ce0c44dd114f11$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="state-header">
                  <div class="state-title">${0}</div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="state-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                        if (ev.detail.value) this._expandedStates = new Set([
                            ...this._expandedStates,
                            index
                        ]);
                        else {
                            const newExpanded = new Set(this._expandedStates);
                            newExpanded.delete(index);
                            this._expandedStates = newExpanded;
                        }
                    }, this._getItemTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                        e.stopPropagation();
                        this._removeItem(index);
                    }, this.hass, item, this._getThresholdSchema(entityId, this.hass, this.isSensor, this.isMainEntity), (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, this.hass), (ev)=>this._itemValueChanged(index, ev));
                });
            }
        };
        return (0, $ci0wX.html)($68ce0c44dd114f11$var$t2 || ($68ce0c44dd114f11$var$t2 = $68ce0c44dd114f11$var$_`
      <label>
        ${0}
        (${0})
      </label>
      <div class="states">${0}</div>
      <mwc-button class="add-state" outlined @click=${0}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${0}
      </mwc-button>
    `), this.label || defaultLabel, this.hass.localize('ui.panel.lovelace.editor.card.config.optional'), renderItems(), this._addItem, addButtonLabel);
    }
    constructor(...args){
        super(...args), this.mode = 'states', this.isSensor = false, this.isMainEntity = false, this._expandedStates = new Set(), this._getStateSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass, isSensor, isMainEntity)=>{
            const schema = [
                {
                    name: 'state',
                    required: true,
                    label: 'editor.entity.state.state',
                    selector: {
                        text: {}
                    }
                },
                {
                    name: 'operator',
                    required: false,
                    label: 'editor.entity.state.operator',
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    value: 'eq',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.equal')
                                },
                                {
                                    value: 'ne',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.not_equal')
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'icon_color',
                    required: true,
                    label: 'editor.entity.state.icon_color',
                    selector: {
                        ui_color: {}
                    }
                }
            ];
            // Only include title_color for main entity (not sensors, not entities list)
            if (!isSensor && isMainEntity) schema.push({
                name: 'title_color',
                required: false,
                label: 'editor.entity.state.title_color',
                selector: {
                    ui_color: {}
                }
            });
            schema.push({
                name: 'icon',
                label: 'editor.entity.state.icon',
                required: false,
                selector: {
                    icon: {}
                }
            }, {
                name: 'label',
                label: 'editor.entity.state.label',
                selector: {
                    template: {
                        preview: true
                    }
                }
            }, {
                name: 'attribute',
                label: 'editor.entity.state.attribute',
                required: false,
                selector: {
                    attribute: {
                        entity_id: entity_id
                    }
                }
            }, {
                name: 'styles',
                label: 'editor.entity.state.styles',
                required: false,
                selector: {
                    object: {}
                }
            });
            return schema;
        }), this._getThresholdSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((entity_id, hass, isSensor, isMainEntity)=>{
            const schema = [
                {
                    name: 'threshold',
                    required: true,
                    label: 'editor.entity.threshold.threshold',
                    selector: {
                        number: {
                            mode: 'box'
                        }
                    }
                },
                {
                    name: 'icon_color',
                    required: true,
                    label: 'editor.entity.threshold.icon_color',
                    selector: {
                        ui_color: {}
                    }
                }
            ];
            // Only include title_color for main entity (not sensors, not entities list)
            if (!isSensor && isMainEntity) schema.push({
                name: 'title_color',
                required: false,
                label: 'editor.entity.threshold.title_color',
                selector: {
                    ui_color: {}
                }
            });
            schema.push({
                name: 'operator',
                required: false,
                label: 'editor.entity.threshold.operator',
                selector: {
                    select: {
                        mode: 'dropdown',
                        options: [
                            {
                                value: 'gt',
                                label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.greater_than')
                            },
                            {
                                value: 'gte',
                                label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.greater_than_or_equal')
                            },
                            {
                                value: 'lt',
                                label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.less_than')
                            },
                            {
                                value: 'lte',
                                label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.less_than_or_equal')
                            },
                            {
                                value: 'eq',
                                label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.equal')
                            }
                        ]
                    }
                }
            }, {
                name: 'icon',
                label: 'editor.entity.threshold.icon',
                required: false,
                selector: {
                    icon: {}
                }
            }, {
                name: 'label',
                label: 'editor.entity.threshold.label',
                selector: {
                    template: {
                        preview: true
                    }
                }
            }, {
                name: 'attribute',
                label: 'editor.entity.threshold.attribute',
                required: false,
                selector: {
                    attribute: {
                        entity_id: entity_id
                    }
                }
            }, {
                name: 'styles',
                label: 'editor.entity.threshold.styles',
                required: false,
                selector: {
                    object: {}
                }
            });
            return schema;
        });
    }
}
$68ce0c44dd114f11$export$806f47322f907427.styles = (0, $2SS2a.css)($68ce0c44dd114f11$var$t3 || ($68ce0c44dd114f11$var$t3 = $68ce0c44dd114f11$var$_`
    :host {
      margin-bottom: 20px;
      display: block;
    }

    label {
      display: block;
    }

    .states {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    ha-expansion-panel {
      --expansion-panel-summary-padding: 12px 16px;
      --expansion-panel-content-padding: 0;
    }

    .state-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .state-title {
      flex-grow: 1;
      font-weight: 500;
    }

    .remove-icon {
      --mdc-icon-button-size: 32px;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .state-content {
      padding: 16px;
    }

    .add-state {
      cursor: pointer;
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "hass", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "states", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "thresholds", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "label", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "entityId", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "mode", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "isSensor", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "isMainEntity", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $68ce0c44dd114f11$export$806f47322f907427.prototype, "_expandedStates", void 0);



var $kJycS = parcelRequire("kJycS");

function $a82cc86a625f1a34$export$a47fb462a08de82f(item, index) {
    return `badge-${index}`;
}
function $a82cc86a625f1a34$export$987b01ab9952d54f(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)){
        // Skip empty strings
        if (value === '') continue;
        // Recursively clean nested objects
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            const cleanedValue = $a82cc86a625f1a34$export$987b01ab9952d54f(value);
            if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
        } else if (Array.isArray(value)) {
            const cleanedArray = value.map((item)=>$a82cc86a625f1a34$export$987b01ab9952d54f(item)).filter((item)=>item !== '');
            if (cleanedArray.length > 0) cleaned[key] = cleanedArray;
        } else cleaned[key] = value;
    }
    return cleaned;
}
function $a82cc86a625f1a34$export$4de3ecff88b7fcf(badge) {
    let labelPreview = '';
    if (badge.label && !(0, $e1a1e2291c993cc1$exports.isTemplateString)(badge.label)) {
        const shortLabel = badge.label.length > 20 ? badge.label.slice(0, 20) + '...' : badge.label;
        labelPreview = ` - ${shortLabel}`;
    }
    if (badge.mode === 'show_always') return `Show Always (${badge.position || 'top_right'})${labelPreview}`;
    if (badge.mode === 'if_match') return `If Match (${badge.position || 'top_right'})${labelPreview}`;
    if (badge.mode === 'homeassistant') return `Home Assistant (${badge.position || 'top_right'})`;
    if (badge.states && badge.states.length > 0) return `States (${badge.states.length}) - ${badge.position || 'top_right'}${labelPreview}`;
    return `Badge ${badge.position || 'top_right'}${labelPreview}`;
}


function $8f046e6eaf17a10f$export$b8d75e5bff3bf8f1(badges, index, updatedBadge) {
    const newBadges = (badges || []).concat();
    if (updatedBadge && typeof updatedBadge === 'object') {
        const cleanedBadge = (0, $a82cc86a625f1a34$export$987b01ab9952d54f)(updatedBadge);
        newBadges[index] = cleanedBadge;
    }
    return newBadges;
}
function $8f046e6eaf17a10f$export$d34a18b0bcdd9675(badges, index, statesValue) {
    const newBadges = (badges || []).concat();
    if (!Array.isArray(statesValue)) {
        console.warn('Badge states value is not an array:', statesValue);
        return newBadges;
    }
    const cleanedStates = statesValue.map((state)=>(0, $a82cc86a625f1a34$export$987b01ab9952d54f)(state));
    newBadges[index] = (0, $kJycS._)({}, newBadges[index], cleanedStates.length > 0 ? {
        states: cleanedStates
    } : {});
    // Remove states property if empty
    if (cleanedStates.length === 0 && 'states' in newBadges[index]) delete newBadges[index].states;
    return newBadges;
}


function $3499cf776de5cef0$export$6d0b0f5c6805124e() {
    return {
        position: 'top_right'
    };
}
function $3499cf776de5cef0$export$6e633d348210e677(badges) {
    return [
        ...badges || [],
        $3499cf776de5cef0$export$6d0b0f5c6805124e()
    ];
}
function $3499cf776de5cef0$export$6f52e6fde4635246(expandedBadges, removedIndex) {
    const newExpanded = new Set(expandedBadges);
    newExpanded.delete(removedIndex);
    const adjustedExpanded = new Set();
    for (const idx of newExpanded)if (idx > removedIndex) adjustedExpanded.add(idx - 1);
    else adjustedExpanded.add(idx);
    return adjustedExpanded;
}
function $3499cf776de5cef0$export$1b2909c9365ec6ff(badges, index) {
    const newBadges = (badges || []).concat();
    newBadges.splice(index, 1);
    return newBadges.length > 0 ? newBadges : [];
}



var $cfP8R = parcelRequire("cfP8R");

const $e9b7a98281a80f12$export$7154f02cb7867cee = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((hass)=>{
    return [
        {
            name: 'entity_id',
            required: false,
            label: 'editor.entity.entity_id',
            selector: {
                entity: {}
            }
        },
        {
            name: 'label',
            required: false,
            label: 'editor.badge.label',
            selector: {
                template: {
                    preview: true
                }
            }
        },
        {
            name: 'position',
            required: false,
            label: 'editor.badge.position_label',
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            value: 'top_right',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.position.top_right') || 'Top Right'
                        },
                        {
                            value: 'top_left',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.position.top_left') || 'Top Left'
                        },
                        {
                            value: 'bottom_right',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.position.bottom_right') || 'Bottom Right'
                        },
                        {
                            value: 'bottom_left',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.position.bottom_left') || 'Bottom Left'
                        }
                    ]
                }
            }
        },
        {
            name: 'mode',
            required: false,
            label: 'editor.badge.mode_label',
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            value: 'show_always',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.mode.show_always') || 'Show Always'
                        },
                        {
                            value: 'if_match',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.mode.if_match') || 'If Match'
                        },
                        {
                            value: 'homeassistant',
                            label: (0, $cfP8R.localize)(hass, 'editor.badge.mode.homeassistant') || 'Home Assistant'
                        }
                    ]
                }
            }
        }
    ];
});



let $f0a2b09abb3b359a$var$_ = (t)=>t, $f0a2b09abb3b359a$var$t, $f0a2b09abb3b359a$var$t1, $f0a2b09abb3b359a$var$t2, $f0a2b09abb3b359a$var$t3, $f0a2b09abb3b359a$var$t4, $f0a2b09abb3b359a$var$t5, $f0a2b09abb3b359a$var$t6;
class $f0a2b09abb3b359a$export$fe6c0dc6457f5df9 extends (0, $2r9I1.LitElement) {
    _addBadge() {
        const newBadges = (0, $3499cf776de5cef0$export$6e633d348210e677)(this.badges);
        const newIndex = newBadges.length - 1;
        this._expandedBadges = new Set([
            ...this._expandedBadges,
            newIndex
        ]);
        (0, $5R2d0.fireEvent)(this, 'badges-value-changed', {
            value: newBadges
        });
    }
    _removeBadgeItem(index) {
        const newBadges = (0, $3499cf776de5cef0$export$1b2909c9365ec6ff)(this.badges, index);
        this._expandedBadges = (0, $3499cf776de5cef0$export$6f52e6fde4635246)(this._expandedBadges, index);
        (0, $5R2d0.fireEvent)(this, 'badges-value-changed', {
            value: newBadges
        });
    }
    _badgeValueChanged(index, ev) {
        const newBadges = (0, $8f046e6eaf17a10f$export$b8d75e5bff3bf8f1)(this.badges, index, ev.detail.value);
        (0, $5R2d0.fireEvent)(this, 'badges-value-changed', {
            value: newBadges
        });
    }
    _badgeStatesValueChanged(index, ev) {
        const newBadges = (0, $8f046e6eaf17a10f$export$d34a18b0bcdd9675)(this.badges, index, ev.detail.value);
        (0, $5R2d0.fireEvent)(this, 'badges-value-changed', {
            value: newBadges
        });
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass) return 0, $ci0wX.nothing;
        const entityId = this.entityId || '';
        var _ensureArray;
        const badges = (_ensureArray = (0, $559da9a3c5c02863$exports.ensureArray)(this.badges)) !== null && _ensureArray !== void 0 ? _ensureArray : [];
        const maxBadges = 4;
        const canAddMore = badges.length < maxBadges;
        const defaultLabel = (0, $cfP8R.localize)(this.hass, 'editor.entity.badges') || 'Badges';
        const addButtonLabel = (0, $cfP8R.localize)(this.hass, 'editor.entity.add_badge') || 'Add Badge';
        return (0, $ci0wX.html)($f0a2b09abb3b359a$var$t5 || ($f0a2b09abb3b359a$var$t5 = $f0a2b09abb3b359a$var$_`
      <label>
        ${0}
        (${0})
      </label>
      <div class="badges">
        ${0}
      </div>
      ${0}
    `), this.label || defaultLabel, this.hass.localize('ui.panel.lovelace.editor.card.config.optional'), (0, $bvVEG.repeat)(badges, (item, index)=>(0, $a82cc86a625f1a34$export$a47fb462a08de82f)(item, index), (item, index)=>{
            const isExpanded = this._expandedBadges.has(index);
            const badgeEntityId = item.entity_id || entityId;
            return (0, $ci0wX.html)($f0a2b09abb3b359a$var$t2 || ($f0a2b09abb3b359a$var$t2 = $f0a2b09abb3b359a$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="badge-header">
                  <div class="badge-title">${0}</div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="badge-content">
                  ${0}
                  ${0}
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                if (ev.detail.value) this._expandedBadges = new Set([
                    ...this._expandedBadges,
                    index
                ]);
                else {
                    const newExpanded = new Set(this._expandedBadges);
                    newExpanded.delete(index);
                    this._expandedBadges = newExpanded;
                }
            }, (0, $a82cc86a625f1a34$export$4de3ecff88b7fcf)(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                e.stopPropagation();
                this._removeBadgeItem(index);
            }, this.hass ? (0, $ci0wX.html)($f0a2b09abb3b359a$var$t || ($f0a2b09abb3b359a$var$t = $f0a2b09abb3b359a$var$_`
                        <ha-form
                          .hass=${0}
                          .data=${0}
                          .schema=${0}
                          .computeLabel=${0}
                          @value-changed=${0}
                        ></ha-form>
                      `), this.hass, item, (0, $e9b7a98281a80f12$export$7154f02cb7867cee)(this.hass), (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, this.hass), (ev)=>this._badgeValueChanged(index, ev)) : (0, $ci0wX.nothing), (()=>{
                if (!item.mode) {
                    const statesEditor = this.hass ? (0, $ci0wX.html)($f0a2b09abb3b359a$var$t1 || ($f0a2b09abb3b359a$var$t1 = $f0a2b09abb3b359a$var$_`
                            <room-summary-states-row-editor
                              .hass=${0}
                              .states=${0}
                              .entityId=${0}
                              .mode=${0}
                              .isSensor=${0}
                              .isMainEntity=${0}
                              label=${0}
                              @states-value-changed=${0}
                            ></room-summary-states-row-editor>
                          `), this.hass, item.states, badgeEntityId, 'states', false, false, (0, $cfP8R.localize)(this.hass, 'editor.entity.states'), (ev)=>this._badgeStatesValueChanged(index, ev)) : (0, $ci0wX.nothing);
                    return statesEditor;
                }
                return 0, $ci0wX.nothing;
            })());
        }), canAddMore ? (0, $ci0wX.html)($f0a2b09abb3b359a$var$t3 || ($f0a2b09abb3b359a$var$t3 = $f0a2b09abb3b359a$var$_`
            <mwc-button class="add-badge" outlined @click=${0}>
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${0}
            </mwc-button>
          `), this._addBadge, addButtonLabel) : (0, $ci0wX.html)($f0a2b09abb3b359a$var$t4 || ($f0a2b09abb3b359a$var$t4 = $f0a2b09abb3b359a$var$_`
            <div class="max-badges-message">
              ${0}
            </div>
          `), (0, $cfP8R.localize)(this.hass, 'editor.badge.max_badges') || `Maximum ${maxBadges} badges allowed`));
    }
    constructor(...args){
        super(...args), this._expandedBadges = new Set();
    }
}
$f0a2b09abb3b359a$export$fe6c0dc6457f5df9.styles = (0, $2SS2a.css)($f0a2b09abb3b359a$var$t6 || ($f0a2b09abb3b359a$var$t6 = $f0a2b09abb3b359a$var$_`
    :host {
      margin-bottom: 20px;
      display: block;
    }

    label {
      display: block;
    }

    .badges {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    ha-expansion-panel {
      --expansion-panel-summary-padding: 12px 16px;
      --expansion-panel-content-padding: 0;
    }

    .badge-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .badge-title {
      flex-grow: 1;
      font-weight: 500;
    }

    .remove-icon {
      --mdc-icon-button-size: 32px;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .badge-content {
      padding: 16px;
    }

    .add-badge {
      cursor: pointer;
    }

    .max-badges-message {
      color: var(--secondary-text-color);
      font-size: 0.9em;
      padding: 8px;
      text-align: center;
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $f0a2b09abb3b359a$export$fe6c0dc6457f5df9.prototype, "hass", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $f0a2b09abb3b359a$export$fe6c0dc6457f5df9.prototype, "badges", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $f0a2b09abb3b359a$export$fe6c0dc6457f5df9.prototype, "label", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $f0a2b09abb3b359a$export$fe6c0dc6457f5df9.prototype, "entityId", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $f0a2b09abb3b359a$export$fe6c0dc6457f5df9.prototype, "_expandedBadges", void 0);



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");

var $2QgUB = parcelRequire("2QgUB");

var $5R2d0 = parcelRequire("5R2d0");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
parcelRequire("aAO52");
var $bvVEG = parcelRequire("bvVEG");
let $8e72cbf99a87388e$var$_ = (t)=>t, $8e72cbf99a87388e$var$t, $8e72cbf99a87388e$var$t1, $8e72cbf99a87388e$var$t2, $8e72cbf99a87388e$var$t3, $8e72cbf99a87388e$var$t4, $8e72cbf99a87388e$var$t5, $8e72cbf99a87388e$var$t6;
class $8e72cbf99a87388e$export$12e5e4192ee344c7 extends (0, $2r9I1.LitElement) {
    _getKey(item, index) {
        // Generate a stable key based on entity_id and index
        const entityId = this._getEntityId(item);
        return `${entityId}-${index}`;
    }
    _getEntityId(item) {
        if (typeof item === 'string') return item;
        return item.entity_id;
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass) return 0, $ci0wX.nothing;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const addEntityClass = `add-entity${this.single ? ' single-mode' : ''}`;
        return (0, $ci0wX.html)($8e72cbf99a87388e$var$t5 || ($8e72cbf99a87388e$var$t5 = $8e72cbf99a87388e$var$_`
      <label>
        ${0}
      </label>
      ${0}
      ${0}
    `), this.label || `${this.hass.localize('ui.panel.lovelace.editor.card.generic.entities')} (${this.hass.localize('ui.panel.lovelace.editor.card.config.optional')})`, this.single ? (0, $ci0wX.html)($8e72cbf99a87388e$var$t1 || ($8e72cbf99a87388e$var$t1 = $8e72cbf99a87388e$var$_`
            <div class="entities">
              ${0}
            </div>
          `), (0, $bvVEG.repeat)(items, (item, index)=>this._getKey(item, index), (item, index)=>(0, $ci0wX.html)($8e72cbf99a87388e$var$t || ($8e72cbf99a87388e$var$t = $8e72cbf99a87388e$var$_`
                  <div class="entity">
                    <ha-entity-picker
                      allow-custom-entity
                      hide-clear-icon
                      .hass=${0}
                      .value=${0}
                      .index=${0}
                      .includeEntities=${0}
                      @value-changed=${0}
                    ></ha-entity-picker>
                    <ha-icon-button
                      .label=${0}
                      class="remove-icon"
                      .index=${0}
                      @click=${0}
                    >
                      <ha-icon icon="mdi:close"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      .label=${0}
                      class="edit-icon"
                      .index=${0}
                      @click=${0}
                    >
                      <ha-icon icon="mdi:pencil"></ha-icon>
                    </ha-icon-button>
                  </div>
                `), this.hass, this._getEntityId(item), index, this.availableEntities, this._valueChanged, this.hass.localize('ui.components.entity.entity-picker.clear'), index, this._removeRow, this.hass.localize('ui.components.entity.entity-picker.edit'), index, this._editRow))) : (0, $ci0wX.html)($8e72cbf99a87388e$var$t3 || ($8e72cbf99a87388e$var$t3 = $8e72cbf99a87388e$var$_`
            <ha-sortable
              handle-selector=".handle"
              @item-moved=${0}
            >
              <div class="entities">
                ${0}
              </div>
            </ha-sortable>
          `), this._rowMoved, (0, $bvVEG.repeat)(items, (item, index)=>this._getKey(item, index), (item, index)=>(0, $ci0wX.html)($8e72cbf99a87388e$var$t2 || ($8e72cbf99a87388e$var$t2 = $8e72cbf99a87388e$var$_`
                    <div class="entity">
                      <div class="handle">
                        <ha-icon icon="mdi:drag"></ha-icon>
                      </div>
                      <ha-entity-picker
                        allow-custom-entity
                        hide-clear-icon
                        .hass=${0}
                        .value=${0}
                        .index=${0}
                        .includeEntities=${0}
                        @value-changed=${0}
                      ></ha-entity-picker>
                      <ha-icon-button
                        .label=${0}
                        class="remove-icon"
                        .index=${0}
                        @click=${0}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </ha-icon-button>
                      <ha-icon-button
                        .label=${0}
                        class="edit-icon"
                        .index=${0}
                        @click=${0}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </ha-icon-button>
                    </div>
                  `), this.hass, this._getEntityId(item), index, this.availableEntities, this._valueChanged, this.hass.localize('ui.components.entity.entity-picker.clear'), index, this._removeRow, this.hass.localize('ui.components.entity.entity-picker.edit'), index, this._editRow))), this.single && items.length > 0 ? (0, $ci0wX.nothing) : (0, $ci0wX.html)($8e72cbf99a87388e$var$t4 || ($8e72cbf99a87388e$var$t4 = $8e72cbf99a87388e$var$_`
            <ha-entity-picker
              class=${0}
              .hass=${0}
              .includeEntities=${0}
              @value-changed=${0}
            ></ha-entity-picker>
          `), addEntityClass, this.hass, this.availableEntities, this._addEntity));
    }
    _addEntity(ev) {
        ev.stopPropagation(); // Stop the picker's event from bubbling up
        const value = ev.detail.value;
        if (value === '') return;
        const target = ev.target;
        // In single mode, replace instead of add
        if (this.single) {
            target.value = '';
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: [
                    value
                ]
            });
            return;
        }
        if (this.field === 'entities') {
            const newConfigEntities = [
                ...this.entities || [],
                value
            ];
            target.value = '';
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            // For lights, convert string to LightConfig
            const lightValue = value;
            const newConfigLights = [
                ...this.lights || [],
                lightValue
            ];
            target.value = '';
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _removeRow(ev) {
        const index = ev.currentTarget.index;
        if (index === undefined) return;
        if (this.field === 'entities') {
            const newConfigEntities = (this.entities || []).concat();
            newConfigEntities.splice(index, 1);
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            const newConfigLights = (this.lights || []).concat();
            newConfigLights.splice(index, 1);
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _updateItemInArray(array, index, value) {
        const newArray = array.concat();
        if (value === '' || value === undefined) newArray.splice(index, 1);
        else {
            const currentItem = newArray[index];
            if (typeof currentItem === 'string') newArray[index] = value;
            else {
                const itemObj = currentItem;
                newArray[index] = (0, $1izJ2._)((0, $kJycS._)({}, itemObj), {
                    entity_id: value
                });
            }
        }
        return newArray;
    }
    _valueChanged(ev) {
        const value = ev.detail.value;
        const index = ev.target.index;
        if (index === undefined) return;
        if (this.field === 'entities') {
            const newConfigEntities = this._updateItemInArray(this.entities || [], index, value);
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigEntities
            });
        } else {
            const newConfigLights = this._updateItemInArray(this.lights || [], index, value);
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newConfigLights
            });
        }
    }
    _editRow(ev) {
        const index = ev.currentTarget.index;
        if (index === undefined) return;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const elementConfig = items[index];
        // Determine the type based on field
        let elementType = 'entity';
        if (this.field === 'lights') elementType = 'light';
        (0, $5R2d0.fireEvent)(this, 'edit-detail-element', {
            subElementConfig: {
                index: index,
                type: elementType,
                elementConfig: elementConfig,
                field: this.field
            }
        });
    }
    _rowMoved(ev) {
        ev.stopPropagation();
        const { oldIndex: oldIndex, newIndex: newIndex } = ev.detail;
        const items = this.field === 'entities' ? this.entities || [] : this.lights || [];
        const newItems = items.concat();
        const [movedItem] = newItems.splice(oldIndex, 1);
        if (movedItem !== undefined) {
            newItems.splice(newIndex, 0, movedItem);
            (0, $5R2d0.fireEvent)(this, 'value-changed', {
                value: newItems
            });
        }
    }
    constructor(...args){
        super(...args), this.field = 'entities', this.single = false;
    }
}
$8e72cbf99a87388e$export$12e5e4192ee344c7.styles = (0, $2SS2a.css)($8e72cbf99a87388e$var$t6 || ($8e72cbf99a87388e$var$t6 = $8e72cbf99a87388e$var$_`
    ha-entity-picker {
      margin-top: 8px;
    }
    .add-entity {
      display: block;
      margin-left: 31px;
      margin-right: 71px;
      margin-inline-start: 31px;
      margin-inline-end: 71px;
      direction: var(--direction);
    }
    .add-entity.single-mode {
      margin-left: 0;
      margin-inline-start: 0;
    }
    .entities {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .entity {
      display: flex;
      align-items: center;
    }

    .entity .handle {
      padding-right: 8px;
      cursor: move; /* fallback if grab cursor is unsupported */
      cursor: grab;
      padding-inline-end: 8px;
      padding-inline-start: initial;
      direction: var(--direction);
    }
    .entity .handle > * {
      pointer-events: none;
    }

    .entity ha-entity-picker {
      flex-grow: 1;
      min-width: 0;
    }

    .remove-icon,
    .edit-icon {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "hass", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "entities", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "lights", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "label", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "field", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "single", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $8e72cbf99a87388e$export$12e5e4192ee344c7.prototype, "availableEntities", void 0);



var $kJycS = parcelRequire("kJycS");

var $2QgUB = parcelRequire("2QgUB");


var $5R2d0 = parcelRequire("5R2d0");

var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");



let $43564874ab3ed043$var$_ = (t)=>t, $43564874ab3ed043$var$t, $43564874ab3ed043$var$t1, $43564874ab3ed043$var$t2, $43564874ab3ed043$var$t3, $43564874ab3ed043$var$t4;
class $43564874ab3ed043$export$5062b3ea8745e421 extends (0, $2r9I1.LitElement) {
    setConfig(config) {
        if (typeof config === 'string') this._config = {
            entity_id: config
        };
        else this._config = (0, $kJycS._)({}, config);
    }
    set value(value) {
        if (!value) {
            this._config = undefined;
            return;
        }
        this.setConfig(value);
    }
    get value() {
        return this._config;
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass || !this._config) return 0, $ci0wX.nothing;
        let schema;
        if (this.type === 'entity') schema = this._entitiesSchema(this.hass);
        else if (this.type === 'sensor') schema = this._sensorsSchema;
        else schema = this._lightsSchema(this.hass);
        // Only access states/thresholds/badges for entity/sensor types, not for lights
        const states = this.type !== 'light' && Array.isArray(this._config.states) ? this._config.states : undefined;
        const thresholds = this.type !== 'light' && Array.isArray(this._config.thresholds) ? this._config.thresholds : undefined;
        const badges = this.type !== 'light' && Array.isArray(this._config.badges) ? this._config.badges : undefined;
        const thresholdsEditor = this.type === 'entity' || this.type === 'sensor' ? (0, $ci0wX.html)($43564874ab3ed043$var$t || ($43564874ab3ed043$var$t = $43564874ab3ed043$var$_`
            <room-summary-states-row-editor
              .hass=${0}
              .thresholds=${0}
              .entityId=${0}
              .mode=${0}
              .isSensor=${0}
              .isMainEntity=${0}
              label=${0}
              @thresholds-value-changed=${0}
            ></room-summary-states-row-editor>
          `), this.hass, thresholds, this._config.entity_id, 'thresholds', this.type === 'sensor', this.isMainEntity, (0, $cfP8R.localize)(this.hass, 'editor.entity.thresholds'), this._thresholdsValueChanged) : (0, $ci0wX.nothing);
        const badgesEditor = this.type === 'entity' || this.type === 'sensor' ? (0, $ci0wX.html)($43564874ab3ed043$var$t1 || ($43564874ab3ed043$var$t1 = $43564874ab3ed043$var$_`
            <room-summary-badge-row-editor
              .hass=${0}
              .badges=${0}
              .entityId=${0}
              label=${0}
              @badges-value-changed=${0}
            ></room-summary-badge-row-editor>
          `), this.hass, badges, this._config.entity_id, (0, $cfP8R.localize)(this.hass, 'editor.entity.badges'), this._badgesValueChanged) : (0, $ci0wX.nothing);
        return (0, $ci0wX.html)($43564874ab3ed043$var$t3 || ($43564874ab3ed043$var$t3 = $43564874ab3ed043$var$_`
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      ${0}
    `), this.hass, this._config, schema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, this.hass), this._valueChanged, this._config.entity_id && this.type !== 'light' ? (0, $ci0wX.html)($43564874ab3ed043$var$t2 || ($43564874ab3ed043$var$t2 = $43564874ab3ed043$var$_`
            <room-summary-states-row-editor
              .hass=${0}
              .states=${0}
              .entityId=${0}
              .mode=${0}
              .isSensor=${0}
              .isMainEntity=${0}
              label=${0}
              @states-value-changed=${0}
            ></room-summary-states-row-editor>
            ${0} ${0}
          `), this.hass, states, this._config.entity_id, 'states', this.type === 'sensor', this.isMainEntity, (0, $cfP8R.localize)(this.hass, 'editor.entity.states'), this._statesValueChanged, thresholdsEditor, badgesEditor) : (0, $ci0wX.nothing));
    }
    /**
   * Removes empty string properties from a config object
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any -- deep config prune
    _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            // Skip empty strings
            if (value === '') continue;
            // Recursively clean nested objects
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _statesValueChanged(ev) {
        if (!this._config) return;
        const statesValue = ev.detail.value;
        // Ensure states is always an array, never an object
        if (!Array.isArray(statesValue)) {
            console.warn('States value is not an array:', statesValue);
            return;
        }
        // Clean empty strings from each state config
        const cleanedStates = statesValue.map((state)=>this._cleanEmptyStrings(state));
        const newConfig = (0, $kJycS._)({}, this._config, cleanedStates.length > 0 ? {
            states: cleanedStates
        } : {});
        // If states array is empty, ensure we remove the property
        if (cleanedStates.length === 0 && 'states' in newConfig) delete newConfig.states;
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: newConfig
        });
    }
    _thresholdsValueChanged(ev) {
        if (!this._config) return;
        const thresholdsValue = ev.detail.value;
        // Ensure thresholds is always an array, never an object
        if (!Array.isArray(thresholdsValue)) {
            console.warn('Thresholds value is not an array:', thresholdsValue);
            return;
        }
        // Clean empty strings from each threshold config
        const cleanedThresholds = thresholdsValue.map((threshold)=>this._cleanEmptyStrings(threshold));
        const newConfig = (0, $kJycS._)({}, this._config, cleanedThresholds.length > 0 ? {
            thresholds: cleanedThresholds
        } : {});
        // If thresholds array is empty, ensure we remove the property
        if (cleanedThresholds.length === 0 && 'thresholds' in newConfig) delete newConfig.thresholds;
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: newConfig
        });
    }
    _badgesValueChanged(ev) {
        if (!this._config) return;
        const badgesValue = ev.detail.value;
        // Ensure badges is always an array, never an object
        if (!Array.isArray(badgesValue)) {
            console.warn('Badges value is not an array:', badgesValue);
            return;
        }
        // Clean empty strings from each badge config
        const cleanedBadges = badgesValue.map((badge)=>this._cleanEmptyStrings(badge));
        const newConfig = (0, $kJycS._)({}, this._config, cleanedBadges.length > 0 ? {
            badges: cleanedBadges
        } : {});
        // If badges array is empty, ensure we remove the property
        if (cleanedBadges.length === 0 && 'badges' in newConfig) delete newConfig.badges;
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: newConfig
        });
    }
    _valueChanged(ev) {
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: ev.detail.value
        });
    }
    constructor(...args){
        super(...args), this.type = 'entity', this.isMainEntity = false, this._entitiesSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((hass)=>{
            return [
                {
                    name: 'entity_id',
                    required: true,
                    label: 'editor.entity.entity_id',
                    selector: {
                        entity: {}
                    }
                },
                {
                    name: 'icon',
                    label: 'editor.entity.entity_icon',
                    selector: {
                        icon: {}
                    }
                },
                {
                    name: 'label',
                    label: 'editor.entity.entity_label',
                    selector: {
                        template: {
                            preview: true
                        }
                    }
                },
                {
                    name: 'attribute',
                    label: 'editor.entity.entity_attribute',
                    selector: {
                        ui_state_content: {
                            allow_context: true
                        }
                    },
                    context: {
                        filter_entity: 'entity_id'
                    }
                },
                {
                    type: 'grid',
                    name: '',
                    label: 'editor.entity.entity_label',
                    schema: [
                        {
                            name: 'on_color',
                            label: 'editor.entity.entity_on_color',
                            selector: {
                                ui_color: {}
                            }
                        },
                        {
                            name: 'off_color',
                            label: 'editor.entity.entity_off_color',
                            selector: {
                                ui_color: {}
                            }
                        }
                    ]
                },
                {
                    name: 'features',
                    label: 'editor.features.features',
                    required: false,
                    selector: {
                        select: {
                            multiple: true,
                            mode: 'list',
                            options: [
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.entity.use_entity_icon'),
                                    value: 'use_entity_icon'
                                },
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.entity.show_state'),
                                    value: 'show_state'
                                },
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.entity.hide_zero_attribute_domains'),
                                    value: 'hide_zero_attribute_domains'
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'interactions',
                    label: 'editor.interactions.interactions',
                    type: 'expandable',
                    flatten: true,
                    icon: 'mdi:gesture-tap',
                    schema: [
                        {
                            name: 'tap_action',
                            label: 'editor.interactions.tap_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'toggle'
                                }
                            }
                        },
                        {
                            name: 'double_tap_action',
                            label: 'editor.interactions.double_tap_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'more-info'
                                }
                            }
                        },
                        {
                            name: 'hold_action',
                            label: 'editor.interactions.hold_action',
                            required: false,
                            selector: {
                                ui_action: {
                                    default_action: 'none'
                                }
                            }
                        }
                    ]
                },
                {
                    name: 'styles',
                    label: 'editor.styles.css_styles',
                    type: 'expandable',
                    flatten: true,
                    icon: 'mdi:brush-variant',
                    schema: [
                        {
                            name: 'styles',
                            label: 'editor.entity.styles',
                            required: false,
                            selector: {
                                object: {}
                            }
                        }
                    ]
                },
                {
                    name: 'slider',
                    label: 'editor.entity.slider',
                    type: 'expandable',
                    icon: 'mdi:gauge',
                    schema: [
                        {
                            name: 'style',
                            label: 'editor.entity.slider_style',
                            required: false,
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: [
                                        {
                                            label: (0, $cfP8R.localize)(hass, 'editor.entity.slider_style_bar'),
                                            value: 'bar'
                                        },
                                        {
                                            label: (0, $cfP8R.localize)(hass, 'editor.entity.slider_style_ha'),
                                            value: 'ha'
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            name: 'hide_icon',
                            label: 'editor.entity.slider_hide_icon',
                            required: false,
                            selector: {
                                boolean: {}
                            }
                        }
                    ]
                }
            ];
        }), this._sensorsSchema = [
            {
                name: 'entity_id',
                required: true,
                label: 'editor.entity.entity_id',
                selector: {
                    entity: {}
                }
            },
            {
                name: 'icon',
                label: 'editor.entity.entity_icon',
                selector: {
                    icon: {}
                }
            },
            {
                name: 'label',
                label: 'editor.entity.entity_label',
                selector: {
                    template: {
                        preview: true
                    }
                }
            },
            {
                name: 'attribute',
                label: 'editor.entity.entity_attribute',
                selector: {
                    ui_state_content: {
                        allow_context: true
                    }
                },
                context: {
                    filter_entity: 'entity_id'
                }
            },
            {
                name: 'interactions',
                label: 'editor.interactions.interactions',
                type: 'expandable',
                flatten: true,
                icon: 'mdi:gesture-tap',
                schema: [
                    {
                        name: 'tap_action',
                        label: 'editor.interactions.tap_action',
                        required: false,
                        selector: {
                            ui_action: {
                                default_action: 'more-info'
                            }
                        }
                    },
                    {
                        name: 'double_tap_action',
                        label: 'editor.interactions.double_tap_action',
                        required: false,
                        selector: {
                            ui_action: {
                                default_action: 'none'
                            }
                        }
                    },
                    {
                        name: 'hold_action',
                        label: 'editor.interactions.hold_action',
                        required: false,
                        selector: {
                            ui_action: {
                                default_action: 'none'
                            }
                        }
                    }
                ]
            }
        ], this._lightsSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((hass)=>{
            return [
                {
                    name: 'entity_id',
                    required: true,
                    label: 'editor.entity.entity_id',
                    selector: {
                        entity: {
                            filter: {
                                domain: [
                                    'light',
                                    'switch'
                                ]
                            }
                        }
                    }
                },
                {
                    name: 'type',
                    label: 'editor.light.type',
                    required: false,
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.light.ambient') || 'Ambient',
                                    value: 'ambient'
                                }
                            ]
                        }
                    }
                }
            ];
        });
    }
}
$43564874ab3ed043$export$5062b3ea8745e421.styles = (0, $2SS2a.css)($43564874ab3ed043$var$t4 || ($43564874ab3ed043$var$t4 = $43564874ab3ed043$var$_`
    ha-form {
      padding: 16px;
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "hass", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "_config", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "type", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "isMainEntity", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $43564874ab3ed043$export$5062b3ea8745e421.prototype, "value", null);




var $2QgUB = parcelRequire("2QgUB");

var $5R2d0 = parcelRequire("5R2d0");
var $86955fac4f8f9f66$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/editor/hui-element-editor.ts
 */ Object.defineProperty($86955fac4f8f9f66$exports, "__esModule", {
    value: true
});


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
let $ffd7d578a1e62621$var$_ = (t)=>t, $ffd7d578a1e62621$var$t, $ffd7d578a1e62621$var$t1, $ffd7d578a1e62621$var$t2, $ffd7d578a1e62621$var$t3;
class $ffd7d578a1e62621$export$ddca213b44fe1587 extends (0, $2r9I1.LitElement) {
    render() {
        return (0, $ci0wX.html)($ffd7d578a1e62621$var$t || ($ffd7d578a1e62621$var$t = $ffd7d578a1e62621$var$_`
      <div class="header">
        <div class="back-title">
          <ha-icon-button-prev
            .label=${0}
            @click=${0}
          ></ha-icon-button-prev>
          <span slot="title">
            ${0}
          </span>
        </div>
        <ha-icon-button
          class="gui-mode-button"
          @click=${0}
          .disabled=${0}
          .label=${0}
        >
          <ha-icon
            icon=${0}
          ></ha-icon>
        </ha-icon-button>
      </div>
      ${0}
    `), this.hass.localize('ui.common.back'), this._goBack, this.hass.localize(`ui.panel.lovelace.editor.sub-element-editor.types.row`), this._toggleMode, !this._guiModeAvailable, this.hass.localize(this._guiMode ? 'ui.panel.lovelace.editor.edit_card.show_code_editor' : 'ui.panel.lovelace.editor.edit_card.show_visual_editor'), this._guiMode ? 'mdi:code-braces' : 'mdi:list-box-outline', this._renderEditor());
    }
    _renderEditor() {
        const type = this.config.type;
        if (type === 'entity' || type === 'sensor' || type === 'light') {
            var _this_config_isMainEntity;
            if (this._guiMode) return (0, $ci0wX.html)($ffd7d578a1e62621$var$t1 || ($ffd7d578a1e62621$var$t1 = $ffd7d578a1e62621$var$_`
          <room-summary-entity-detail-editor
            class="editor"
            .hass=${0}
            .value=${0}
            .type=${0}
            .isMainEntity=${0}
            @config-changed=${0}
          ></room-summary-entity-detail-editor>
        `), this.hass, this.config.elementConfig, type, (_this_config_isMainEntity = this.config.isMainEntity) !== null && _this_config_isMainEntity !== void 0 ? _this_config_isMainEntity : false, this._handleConfigChanged);
            else // YAML mode
            return (0, $ci0wX.html)($ffd7d578a1e62621$var$t2 || ($ffd7d578a1e62621$var$t2 = $ffd7d578a1e62621$var$_`
          <ha-yaml-editor
            .defaultValue=${0}
            autofocus
            .hass=${0}
            @value-changed=${0}
            dir="ltr"
            .showErrors=${0}
          ></ha-yaml-editor>
        `), this.config.elementConfig || {}, this.hass, this._handleYAMLChanged, false);
        }
        return 0, $ci0wX.nothing;
    }
    _handleConfigChanged(ev) {
        ev.stopPropagation();
        const value = ev.detail.config;
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: value
        });
    }
    _handleYAMLChanged(ev) {
        ev.stopPropagation();
        const value = ev.detail.value;
        (0, $5R2d0.fireEvent)(this, 'config-changed', {
            config: value
        });
    }
    _toggleMode() {
        this._guiMode = !this._guiMode;
    }
    _goBack() {
        (0, $5R2d0.fireEvent)(this, 'go-back');
    }
    constructor(...args){
        super(...args), this._guiModeAvailable = true, this._guiMode = true;
    }
}
$ffd7d578a1e62621$export$ddca213b44fe1587.styles = (0, $2SS2a.css)($ffd7d578a1e62621$var$t3 || ($ffd7d578a1e62621$var$t3 = $ffd7d578a1e62621$var$_`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--divider-color);
    }

    .back-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .editor {
      padding: 16px;
    }

    ha-icon-button-prev {
      color: var(--primary-color);
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "config", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "_guiModeAvailable", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $ffd7d578a1e62621$export$ddca213b44fe1587.prototype, "_guiMode", void 0);



var $2QgUB = parcelRequire("2QgUB");



var $5R2d0 = parcelRequire("5R2d0");

var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("aAO52");
var $bvVEG = parcelRequire("bvVEG");

let $460e8ac2e6479550$var$_ = (t)=>t, $460e8ac2e6479550$var$t, $460e8ac2e6479550$var$t1, $460e8ac2e6479550$var$t2;
class $460e8ac2e6479550$export$b79a6ddbd7dc2198 extends (0, $2r9I1.LitElement) {
    _getKey(item, index) {
        return `threshold-${this.thresholdType}-${index}`;
    }
    _addThreshold() {
        const newThreshold = {};
        const newThresholds = [
            ...this.thresholds || [],
            newThreshold
        ];
        const newIndex = newThresholds.length - 1;
        this._expandedThresholds = new Set([
            ...this._expandedThresholds,
            newIndex
        ]);
        (0, $5R2d0.fireEvent)(this, 'threshold-entries-value-changed', {
            value: newThresholds
        });
    }
    _adjustExpandedIndicesAfterRemoval(removedIndex) {
        const newExpanded = new Set(this._expandedThresholds);
        newExpanded.delete(removedIndex);
        const adjustedExpanded = new Set();
        for (const idx of newExpanded)if (idx > removedIndex) adjustedExpanded.add(idx - 1);
        else adjustedExpanded.add(idx);
        return adjustedExpanded;
    }
    _removeThresholdItem(index) {
        const newThresholds = (this.thresholds || []).concat();
        newThresholds.splice(index, 1);
        this._expandedThresholds = this._adjustExpandedIndicesAfterRemoval(index);
        (0, $5R2d0.fireEvent)(this, 'threshold-entries-value-changed', {
            value: newThresholds.length > 0 ? newThresholds : []
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- deep config prune
    _cleanEmptyStrings(obj) {
        if (!obj || typeof obj !== 'object') return obj;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)){
            if (value === '') continue;
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const cleanedValue = this._cleanEmptyStrings(value);
                if (Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
            } else if (Array.isArray(value)) cleaned[key] = value.map((item)=>this._cleanEmptyStrings(item));
            else cleaned[key] = value;
        }
        return cleaned;
    }
    _thresholdValueChanged(index, ev) {
        const newThresholds = (this.thresholds || []).concat();
        const updatedThreshold = ev.detail.value;
        if (updatedThreshold && typeof updatedThreshold === 'object') {
            const cleanedThreshold = this._cleanEmptyStrings(updatedThreshold);
            newThresholds[index] = cleanedThreshold;
        }
        (0, $5R2d0.fireEvent)(this, 'threshold-entries-value-changed', {
            value: newThresholds
        });
    }
    _getThresholdTitle(item) {
        if (item.entity_id && item.value) return `${item.entity_id}: ${item.value}`;
        if (item.value) return item.value.toString();
        if (item.entity_id) return item.entity_id;
        return 'New Threshold';
    }
    render() {
        if (!this.hass) return 0, $ci0wX.nothing;
        const defaultLabel = this.thresholdType === 'temperature' ? this.hass.localize('editor.threshold.temperature_thresholds') || 'Temperature Thresholds' : this.hass.localize('editor.threshold.humidity_thresholds') || 'Humidity Thresholds';
        const addButtonLabel = this.thresholdType === 'temperature' ? this.hass.localize('editor.threshold.add_temperature_threshold') || 'Add Temperature Threshold' : this.hass.localize('editor.threshold.add_humidity_threshold') || 'Add Humidity Threshold';
        var _ensureArray;
        const thresholds = (_ensureArray = (0, $559da9a3c5c02863$exports.ensureArray)(this.thresholds)) !== null && _ensureArray !== void 0 ? _ensureArray : [];
        return (0, $ci0wX.html)($460e8ac2e6479550$var$t1 || ($460e8ac2e6479550$var$t1 = $460e8ac2e6479550$var$_`
      <label>
        ${0}
        (${0})
      </label>
      <div class="thresholds">
        ${0}
      </div>
      <mwc-button class="add-threshold" outlined @click=${0}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${0}
      </mwc-button>
    `), this.label || defaultLabel, this.hass.localize('ui.panel.lovelace.editor.card.config.optional'), (0, $bvVEG.repeat)(thresholds, (item, index)=>this._getKey(item, index), (item, index)=>{
            const isExpanded = this._expandedThresholds.has(index);
            return (0, $ci0wX.html)($460e8ac2e6479550$var$t || ($460e8ac2e6479550$var$t = $460e8ac2e6479550$var$_`
              <ha-expansion-panel
                .expanded=${0}
                @expanded-changed=${0}
              >
                <div slot="header" class="threshold-header">
                  <div class="threshold-title">
                    ${0}
                  </div>
                  <ha-icon-button
                    .label=${0}
                    class="remove-icon"
                    .index=${0}
                    @click=${0}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="threshold-content">
                  <ha-form
                    .hass=${0}
                    .data=${0}
                    .schema=${0}
                    .computeLabel=${0}
                    @value-changed=${0}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            `), isExpanded, (ev)=>{
                if (ev.detail.value) this._expandedThresholds = new Set([
                    ...this._expandedThresholds,
                    index
                ]);
                else {
                    const newExpanded = new Set(this._expandedThresholds);
                    newExpanded.delete(index);
                    this._expandedThresholds = newExpanded;
                }
            }, this._getThresholdTitle(item), this.hass.localize('ui.components.entity.entity-picker.clear'), index, (e)=>{
                e.stopPropagation();
                this._removeThresholdItem(index);
            }, this.hass, item, this.hass ? this._getThresholdSchema(this.hass, this.thresholdType, this.availableEntities || []) : [], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, this.hass), (ev)=>this._thresholdValueChanged(index, ev));
        }), this._addThreshold, addButtonLabel);
    }
    constructor(...args){
        super(...args), this.thresholdType = 'temperature', this._expandedThresholds = new Set(), this._getThresholdSchema = (0, $f554b0d97be25fc9$export$2e2bcd8739ae039)((hass, thresholdType, availableEntities)=>{
            const isTemperature = thresholdType === 'temperature';
            const entityFilter = isTemperature ? {
                device_class: 'temperature'
            } : {
                device_class: 'humidity'
            };
            return [
                {
                    name: 'entity_id',
                    label: isTemperature ? 'editor.threshold.temperature_entity' : 'editor.threshold.humidity_entity',
                    required: false,
                    selector: {
                        entity: {
                            multiple: false,
                            include_entities: availableEntities,
                            filter: entityFilter
                        }
                    }
                },
                {
                    name: 'value',
                    label: isTemperature ? 'editor.threshold.temperature_threshold' : 'editor.threshold.humidity_threshold',
                    required: false,
                    selector: isTemperature ? {
                        number: {
                            mode: 'box',
                            unit_of_measurement: "\xb0"
                        }
                    } : {
                        number: {
                            mode: 'slider',
                            unit_of_measurement: '%',
                            min: 0,
                            max: 100
                        }
                    }
                },
                {
                    name: 'operator',
                    label: isTemperature ? 'editor.threshold.temperature_operator' : 'editor.threshold.humidity_operator',
                    required: false,
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    value: 'gt',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.greater_than')
                                },
                                {
                                    value: 'gte',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.greater_than_or_equal')
                                },
                                {
                                    value: 'lt',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.less_than')
                                },
                                {
                                    value: 'lte',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.less_than_or_equal')
                                },
                                {
                                    value: 'eq',
                                    label: (0, $cfP8R.localize)(hass, 'editor.threshold.operator.equal')
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'color',
                    label: isTemperature ? 'editor.threshold.temperature_color' : 'editor.threshold.humidity_color',
                    required: false,
                    selector: {
                        ui_color: {}
                    }
                }
            ];
        });
    }
}
$460e8ac2e6479550$export$b79a6ddbd7dc2198.styles = (0, $2SS2a.css)($460e8ac2e6479550$var$t2 || ($460e8ac2e6479550$var$t2 = $460e8ac2e6479550$var$_`
    :host {
      margin-bottom: 20px;
      display: block;
    }

    label {
      display: block;
    }

    .thresholds {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    ha-expansion-panel {
      --expansion-panel-summary-padding: 12px 16px;
      --expansion-panel-content-padding: 0;
    }

    .threshold-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .threshold-title {
      flex-grow: 1;
      font-weight: 500;
    }

    .remove-icon {
      --mdc-icon-button-size: 32px;
      color: var(--secondary-text-color);
      margin-left: 8px;
    }

    .threshold-content {
      padding: 16px;
    }

    .add-threshold {
      cursor: pointer;
    }
  `));
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "hass", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "thresholds", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "label", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "thresholdType", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        attribute: false
    })
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "availableEntities", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $460e8ac2e6479550$export$b79a6ddbd7dc2198.prototype, "_expandedThresholds", void 0);



var $2QgUB = parcelRequire("2QgUB");


var $kJycS = parcelRequire("kJycS");


const $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20 = (hass, config)=>{
    // Define base entities for the area
    // Support both naming conventions: light.{area}_light / light.{area} and switch.{area}_fan / fan.{area}
    const baseEntities = [
        `light.${config.area}_light`,
        `light.${config.area}`,
        `switch.${config.area}_fan`,
        `fan.${config.area}`
    ];
    const configEntities = config.entities || [];
    // Combine base and config entities unless fan is removed
    const entities = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'exclude_default_entities') ? configEntities : baseEntities.concat(configEntities);
    const stickyEntitiesEnabled = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'sticky_entities');
    const hideHiddenEntities = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'hide_hidden_entities');
    // Process and transform entities
    const states = entities.map((entity)=>{
        var _hass_entities_entity_entity_id, _entity_slider;
        // Transform string format to entity config for convenience
        if (typeof entity === 'string') entity = {
            entity_id: entity
        };
        // Skip hidden entities if the feature is enabled
        if (hideHiddenEntities && ((_hass_entities_entity_entity_id = hass.entities[entity.entity_id]) === null || _hass_entities_entity_entity_id === void 0 ? void 0 : _hass_entities_entity_entity_id.hidden)) return undefined;
        // Skip entities rendered as the horizontal slider with hide_icon set
        // — they're represented by the bottom bar and shouldn't also occupy
        // an icon slot.
        if ((_entity_slider = entity.slider) === null || _entity_slider === void 0 ? void 0 : _entity_slider.hide_icon) return undefined;
        const state = (0, $6d9b59681496f671$export$50fdfeece43146fd)(hass.states, entity.entity_id);
        const isBaseEntity = baseEntities.includes(entity.entity_id);
        // If state is not found:
        // - For base entities: always return undefined (don't apply sticky entities)
        // - For config entities: apply sticky entities logic if enabled
        if (!state) {
            if (isBaseEntity || !stickyEntitiesEnabled) return undefined;
            // Return entity with undefined state for sticky entities (user-defined only)
            return {
                config: entity,
                state: undefined
            };
        }
        // Create entity information with defaults
        return {
            config: (0, $kJycS._)({
                tap_action: {
                    action: 'toggle'
                },
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                }
            }, entity),
            state: state
        };
    }).filter((entity)=>entity !== undefined);
    return states;
};



var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");


var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $97576b6c0b409321$var$_ = (t)=>t, $97576b6c0b409321$var$t;
const $97576b6c0b409321$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($97576b6c0b409321$var$t || ($97576b6c0b409321$var$t = $97576b6c0b409321$var$_`
  :host {
    /* Lanes needed for the current entity count, capped by the user max.
       --entity-count is set inline by the component; doing the division in
       CSS keeps --user-entities-wrap overridable from themes/card-mod. */
    --entity-columns: clamp(
      1,
      round(up, calc(var(--entity-count, 1) / var(--user-entities-wrap, 4))),
      var(--user-entities-max-columns, 99)
    );
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(var(--user-entities-wrap, 4), 1fr);
    grid-auto-columns: 1fr;
    justify-self: end;
    justify-items: center;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    /* Strip width scales with column count so wrapped icons keep full size;
       a single column matches the pre-wrap 0.23 strip ratio. */
    aspect-ratio: calc(0.23 * var(--entity-columns)) / 1;
    /* Fixed lane width override. Height is definite, so when this resolves
       it wins over the ratio-derived width; while --user-entity-column-width
       is unset the declaration is invalid and width falls back to auto. */
    width: calc(
      var(--user-entity-column-width) * var(--entity-columns) + 8px *
        (var(--entity-columns) - 1)
    );
    padding: 5px 5px 5px 0;
    /* Overlap the card interior instead of growing the outer grid track,
       so the room icon keeps its size when the strip widens. Override with
       min-width: auto under styles.entities to shrink the room icon instead. */
    min-width: 0;
    /* Columns fill right-to-left: the first column stays on the card's
       right edge and wrapped columns appear to its LEFT. Override with
       direction: ltr under styles.entities to wrap rightward instead. */
    direction: rtl;
  }

  /* Keep icon labels/state text left-to-right despite the rtl grid. */
  :host > * {
    direction: ltr;
  }
`));


let $b96a40707b142c90$var$_ = (t)=>t, $b96a40707b142c90$var$t;
class $b96a40707b142c90$export$b15c5e7ddecda86e extends (0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $97576b6c0b409321$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        (0, $dTmXl.d)(this.config, 'entity-collection', 'set hass');
        const states = (0, $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20)(hass, this.config);
        // Update entities only if they've changed
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(states, this._entities)) {
            this._entities = states;
            // Drives --entity-columns (strip width) in styles.ts
            this.style.setProperty('--entity-count', `${states.length}`);
        }
        this._hass = hass;
    }
    render() {
        var _this_config_styles;
        (0, $dTmXl.d)(this.config, 'entity-collection', 'render');
        if (!this._hass || !this._entities) return 0, $ci0wX.nothing;
        const stateIcons = this._entities.map((entity)=>(0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, entity, this.config));
        return (0, $ci0wX.html)($b96a40707b142c90$var$t || ($b96a40707b142c90$var$t = $b96a40707b142c90$var$_`
      ${0} ${0}
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.entities), stateIcons);
    }
}
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $b96a40707b142c90$export$b15c5e7ddecda86e.prototype, "_entities", void 0);



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");

var $2QgUB = parcelRequire("2QgUB");




var $gp9lG = parcelRequire("gp9lG");

var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");



var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $f759aa516e0b7c12$var$_ = (t)=>t, $f759aa516e0b7c12$var$t;
const $f759aa516e0b7c12$export$e473b1e54f52a381 = (0, $2SS2a.css)($f759aa516e0b7c12$var$t || ($f759aa516e0b7c12$var$t = $f759aa516e0b7c12$var$_`
  /* Bar filled with light color - gradient from darker bottom to lighter top */
  :host([slider='bar'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent),
      var(--slider-bar-color, var(--primary-color));
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    opacity: 0.8;
  }

  /* Black line indicator that moves up and down */
  :host([slider='bar'])::after {
    content: '';
    position: absolute;
    /* Clamp so 8px indicator stays fully visible (4px from each edge) */
    top: clamp(4px, var(--slider-position, 100%), calc(100% - 4px));
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 8px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 1.5px;
    transition: top 0.1s ease;
    pointer-events: none;
  }

  :host([slider='bar']) {
    height: 90%;
    cursor: grab;
    /* Clip to pill shape matching the bar (60% wide centered = 20% inset each side) */
    clip-path: inset(0 20% round 100px);
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $96950da6892d218c$var$_ = (t)=>t, $96950da6892d218c$var$t;
const $96950da6892d218c$export$21761a6d1a44a7c1 = (0, $2SS2a.css)($96950da6892d218c$var$t || ($96950da6892d218c$var$t = $96950da6892d218c$var$_`
  /* Outlined container - transparent fill with border */
  :host([slider='bar-filled'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
  }

  /* Proportional fill that grows from bottom to top based on brightness */
  :host([slider='bar-filled'])::after {
    content: '';
    position: absolute;
    top: var(--slider-position, 100%);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    background: var(--slider-bar-color, var(--primary-color));
    border-radius: 0 0 100px 100px;
    transition: top 0.1s ease;
    pointer-events: none;
  }

  :host([slider='bar-filled']) {
    height: 90%;
    cursor: grab;
    /* Clip to pill shape matching the bar (60% wide centered = 20% inset each side) */
    clip-path: inset(0 20% round 100px);
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $901270b2493e33e0$var$_ = (t)=>t, $901270b2493e33e0$var$t;
const $901270b2493e33e0$export$6a08aa478781aaec = (0, $2SS2a.css)($901270b2493e33e0$var$t || ($901270b2493e33e0$var$t = $901270b2493e33e0$var$_`
  :host {
    position: relative;
    aspect-ratio: 0.23 / 1;
    height: 80%;
    margin: auto 0;
    display: flex;
    justify-content: center;
  }

  .icon-container {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
    transition: opacity 0.2s ease;
    z-index: 1;
  }

  .icon-container.dragging {
    cursor: grabbing;
    opacity: 0.8;
    transition: none;
  }

  .bar-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
    z-index: 1;
  }

  .bar-container.dragging {
    cursor: grabbing;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $e19bccd92d554256$var$_ = (t)=>t, $e19bccd92d554256$var$t;
const $e19bccd92d554256$export$ad212a111b68f21e = (0, $2SS2a.css)($e19bccd92d554256$var$t || ($e19bccd92d554256$var$t = $e19bccd92d554256$var$_`
  :host([slider='dots'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      transparent calc(25% - 3px),
      rgba(0, 0, 0, 0.3) calc(25% - 3px),
      rgba(0, 0, 0, 0.3) calc(25% + 3px),
      transparent calc(25% + 3px)
    );
    border-radius: 4px;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $b2ea6eeb9077a02f$var$_ = (t)=>t, $b2ea6eeb9077a02f$var$t;
const $b2ea6eeb9077a02f$export$3e7306559c17cc08 = (0, $2SS2a.css)($b2ea6eeb9077a02f$var$t || ($b2ea6eeb9077a02f$var$t = $b2ea6eeb9077a02f$var$_`
  :host([slider='dual-rail'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 2px,
      transparent 2px,
      transparent 10px,
      rgba(0, 0, 0, 0.2) 10px,
      rgba(0, 0, 0, 0.2) 12px
    );
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $714d4a2967f8611f$var$_ = (t)=>t, $714d4a2967f8611f$var$t;
const $714d4a2967f8611f$export$6ef8cf202682aa0c = (0, $2SS2a.css)($714d4a2967f8611f$var$t || ($714d4a2967f8611f$var$t = $714d4a2967f8611f$var$_`
  :host([slider='filled'])::before {
    content: '';
    position: absolute;
    top: var(--slider-position, 50%);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: rgba(var(--rgb-primary-color, 0, 0, 0), 0.2);
    border-radius: 100px;
    transition: top 0.1s ease;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $81fe55ef12dfd96d$var$_ = (t)=>t, $81fe55ef12dfd96d$var$t;
const $81fe55ef12dfd96d$export$5e0a6dda271e0bc = (0, $2SS2a.css)($81fe55ef12dfd96d$var$t || ($81fe55ef12dfd96d$var$t = $81fe55ef12dfd96d$var$_`
  :host([slider='glow'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    background: rgba(var(--rgb-primary-color, 66, 133, 244), 0.4);
    border-radius: 3px;
    box-shadow:
      0 0 8px rgba(var(--rgb-primary-color, 66, 133, 244), 0.6),
      0 0 12px rgba(var(--rgb-primary-color, 66, 133, 244), 0.3);
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $be3e4d9cb518b59b$var$_ = (t)=>t, $be3e4d9cb518b59b$var$t;
const $be3e4d9cb518b59b$export$f7c9dadfe1ac0b54 = (0, $2SS2a.css)($be3e4d9cb518b59b$var$t || ($be3e4d9cb518b59b$var$t = $be3e4d9cb518b59b$var$_`
  :host([slider='gradient'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.3)
    );
    border-radius: 3px;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $03caac4924d9fa33$var$_ = (t)=>t, $03caac4924d9fa33$var$t;
const $03caac4924d9fa33$export$e7c3612ff1a38069 = (0, $2SS2a.css)($03caac4924d9fa33$var$t || ($03caac4924d9fa33$var$t = $03caac4924d9fa33$var$_`
  :host([slider='grid'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      transparent calc(25% - 1px),
      rgba(0, 0, 0, 0.15) calc(25% - 1px),
      rgba(0, 0, 0, 0.15) calc(25% + 1px),
      transparent calc(25% + 1px)
    );
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $0aaf3bbccf70eb1e$var$_ = (t)=>t, $0aaf3bbccf70eb1e$var$t;
const $0aaf3bbccf70eb1e$export$dae7cf860e07354f = (0, $2SS2a.css)($0aaf3bbccf70eb1e$var$t || ($0aaf3bbccf70eb1e$var$t = $0aaf3bbccf70eb1e$var$_`
  :host([slider='line'])::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $1ecaad60d5c0a19d$var$_ = (t)=>t, $1ecaad60d5c0a19d$var$t;
const $1ecaad60d5c0a19d$export$6843b69d7bcb6ad0 = (0, $2SS2a.css)($1ecaad60d5c0a19d$var$t || ($1ecaad60d5c0a19d$var$t = $1ecaad60d5c0a19d$var$_`
  :host([slider='notched'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 10%,
      rgba(0, 0, 0, 0.25) 10%,
      rgba(0, 0, 0, 0.25) 12%,
      rgba(0, 0, 0, 0.15) 12%
    );
    border-radius: 100px;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $21ee7e152b437233$var$_ = (t)=>t, $21ee7e152b437233$var$t;
const $21ee7e152b437233$export$d5205ee1ccf387a8 = (0, $2SS2a.css)($21ee7e152b437233$var$t || ($21ee7e152b437233$var$t = $21ee7e152b437233$var$_`
  :host([slider='outlined'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $f04ce3d97140e7c3$var$_ = (t)=>t, $f04ce3d97140e7c3$var$t;
const $f04ce3d97140e7c3$export$76175558080e6e66 = (0, $2SS2a.css)($f04ce3d97140e7c3$var$t || ($f04ce3d97140e7c3$var$t = $f04ce3d97140e7c3$var$_`
  :host([slider='shadow-trail'])::after {
    content: '';
    position: absolute;
    top: var(--slider-position, 50%);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 40px;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.15) 0%,
      transparent 70%
    );
    transition: top 0.1s ease;
    pointer-events: none;
  }
`));


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $c226af6278e43e6e$var$_ = (t)=>t, $c226af6278e43e6e$var$t;
const $c226af6278e43e6e$export$99381478aa3ea20f = (0, $2SS2a.css)($c226af6278e43e6e$var$t || ($c226af6278e43e6e$var$t = $c226af6278e43e6e$var$_`
  :host([slider='track'])::before {
    content: '';
    position: absolute;
    top: -12%;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    box-shadow:
      inset 0 2px 4px rgba(0, 0, 0, 0.3),
      inset 0 -1px 2px rgba(255, 255, 255, 0.1);
  }
`));


let $b2acc8a8a7db7b5b$var$_ = (t)=>t, $b2acc8a8a7db7b5b$var$t;
const $b2acc8a8a7db7b5b$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($b2acc8a8a7db7b5b$var$t || ($b2acc8a8a7db7b5b$var$t = $b2acc8a8a7db7b5b$var$_`
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), (0, $901270b2493e33e0$export$6a08aa478781aaec), (0, $c226af6278e43e6e$export$99381478aa3ea20f), (0, $0aaf3bbccf70eb1e$export$dae7cf860e07354f), (0, $714d4a2967f8611f$export$6ef8cf202682aa0c), (0, $be3e4d9cb518b59b$export$f7c9dadfe1ac0b54), (0, $b2ea6eeb9077a02f$export$3e7306559c17cc08), (0, $e19bccd92d554256$export$ad212a111b68f21e), (0, $1ecaad60d5c0a19d$export$6843b69d7bcb6ad0), (0, $03caac4924d9fa33$export$e7c3612ff1a38069), (0, $81fe55ef12dfd96d$export$5e0a6dda271e0bc), (0, $f04ce3d97140e7c3$export$76175558080e6e66), (0, $21ee7e152b437233$export$d5205ee1ccf387a8), (0, $f759aa516e0b7c12$export$e473b1e54f52a381), (0, $96950da6892d218c$export$21761a6d1a44a7c1));


let $21a9ea85b7e2278b$var$_ = (t)=>t, $21a9ea85b7e2278b$var$t;
class $21a9ea85b7e2278b$export$ec4599f0917a20c8 extends (0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $b2acc8a8a7db7b5b$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        var _this_config, _states_;
        (0, $dTmXl.d)(this.config, 'entity-slider', 'set hass');
        // Update slider style from config
        this.sliderStyle = ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.slider_style) || 'minimalist';
        const states = (0, $ec7fd3dcfcac1ba4$export$a2d3d3a06f345f20)(hass, this.config);
        const firstEntity = (0, $1izJ2._)((0, $kJycS._)({}, states[0]), {
            config: (0, $1izJ2._)((0, $kJycS._)({}, (_states_ = states[0]) === null || _states_ === void 0 ? void 0 : _states_.config), {
                tap_action: {
                    action: 'none'
                },
                hold_action: {
                    action: 'none'
                },
                double_tap_action: {
                    action: 'none'
                }
            })
        });
        // Update entity only if it's changed
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(firstEntity, this._entity)) {
            var _state_attributes;
            this._entity = firstEntity;
            // Update position based on brightness attribute
            const state = firstEntity === null || firstEntity === void 0 ? void 0 : firstEntity.state;
            const brightness = state === null || state === void 0 ? void 0 : (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.brightness;
            if (brightness !== undefined && brightness !== null) {
                // Convert brightness (0-255) to position (100-0%)
                // Higher brightness = higher position (lower percentage, towards top)
                const brightnessNum = Number(brightness);
                this._yPosition = 100 - brightnessNum / 255 * 100;
            } else this._yPosition = 100;
            // For bar and bar-filled styles, get the entity color and set it as a CSS variable
            if ((this.sliderStyle === 'bar' || this.sliderStyle === 'bar-filled') && state) {
                const isActive = (0, $gp9lG.stateActive)(state);
                const entityColor = (0, $273edb1bb8e481ef$export$de96a622725f4284)(hass, firstEntity, undefined, isActive);
                // Set color as CSS variable, defaulting to a fallback if no color found
                if (entityColor) this.style.setProperty('--slider-bar-color', entityColor);
                else // Use a default color if no entity color is found
                this.style.setProperty('--slider-bar-color', 'var(--primary-color)');
            }
        }
        this._hass = hass;
    }
    render() {
        var _this_config_styles;
        (0, $dTmXl.d)(this.config, 'entity-slider', 'render');
        if (!this._hass || !this._entity) return 0, $ci0wX.nothing;
        // Set CSS custom property for slider position (used by filled, shadow-trail, bar, and bar-filled styles)
        this.style.setProperty('--slider-position', `${this._yPosition}%`);
        const isBarStyle = this.sliderStyle === 'bar' || this.sliderStyle === 'bar-filled';
        const draggingClass = this._isDragging ? 'dragging' : '';
        const containerClass = `${isBarStyle ? 'bar' : 'icon'}-container ${draggingClass}`;
        const containerStyle = isBarStyle ? (0, $ci0wX.nothing) : `top: ${this._yPosition}%`;
        return (0, $ci0wX.html)($21a9ea85b7e2278b$var$t || ($21a9ea85b7e2278b$var$t = $21a9ea85b7e2278b$var$_`
      ${0}
      <div
        class=${0}
        style=${0}
        @mousedown=${0}
        @touchstart=${0}
      >
        ${0}
      </div>
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.entities), containerClass, containerStyle, this._handleDragStart, this._handleTouchStart, isBarStyle ? (0, $ci0wX.nothing) : (0, $d71beedfb309b5b1$export$6697a659ce63852)(this._hass, this._entity, this.config));
    }
    constructor(...args){
        super(...args), /**
   * Slider style - reflected to DOM as data-slider-style attribute
   */ this.sliderStyle = 'minimalist', /**
   * Whether the icon is currently being dragged
   */ this._isDragging = false, /**
   * Vertical position of the icon (0-100, percentage from top)
   * Default: 50 (centered)
   */ this._yPosition = 100, /**
   * Store initial drag state
   */ this._dragStartY = 0, this._dragStartPosition = 0, /**
   * Handle drag start (mouse)
   */ this._handleDragStart = (e)=>{
            this._isDragging = true;
            this._dragStartY = e.clientY;
            this._dragStartPosition = this._yPosition;
            document.addEventListener('mousemove', this._handleDragMove);
            document.addEventListener('mouseup', this._handleDragEnd);
        }, /**
   * Handle drag start (touch)
   */ this._handleTouchStart = (e)=>{
            if (!e.touches[0]) return;
            this._isDragging = true;
            this._dragStartY = e.touches[0].clientY;
            this._dragStartPosition = this._yPosition;
            document.addEventListener('touchmove', this._handleTouchMove);
            document.addEventListener('touchend', this._handleTouchEnd);
        }, /**
   * Handle drag move (mouse)
   */ this._handleDragMove = (e)=>{
            if (!this._isDragging) return;
            const containerHeight = this.offsetHeight;
            if (!containerHeight) return;
            const deltaY = e.clientY - this._dragStartY;
            const deltaPercent = deltaY / containerHeight * 100;
            // Update position with constraints (0-100%)
            this._yPosition = Math.max(0, Math.min(100, this._dragStartPosition + deltaPercent));
        }, /**
   * Handle drag move (touch)
   */ this._handleTouchMove = (e)=>{
            if (!this._isDragging || !e.touches[0]) return;
            const containerHeight = this.offsetHeight;
            if (!containerHeight) return;
            const deltaY = e.touches[0].clientY - this._dragStartY;
            const deltaPercent = deltaY / containerHeight * 100;
            // Update position with constraints (0-100%)
            this._yPosition = Math.max(0, Math.min(100, this._dragStartPosition + deltaPercent));
        }, /**
   * Handle drag end (mouse)
   */ this._handleDragEnd = ()=>{
            var _this__entity_state, _this__entity;
            this._isDragging = false;
            document.removeEventListener('mousemove', this._handleDragMove);
            document.removeEventListener('mouseup', this._handleDragEnd);
            // Update entity brightness: position (0-100%) to brightness (255-0)
            (0, $d3a1c41917263588$export$bfd42fd87279097a)(this._hass, (_this__entity = this._entity) === null || _this__entity === void 0 ? void 0 : (_this__entity_state = _this__entity.state) === null || _this__entity_state === void 0 ? void 0 : _this__entity_state.entity_id, Math.round((100 - this._yPosition) * 2.55));
        }, /**
   * Handle drag end (touch)
   */ this._handleTouchEnd = ()=>{
            var _this__entity_state, _this__entity;
            this._isDragging = false;
            document.removeEventListener('touchmove', this._handleTouchMove);
            document.removeEventListener('touchend', this._handleTouchEnd);
            // Update entity brightness: position (0-100%) to brightness (255-0)
            (0, $d3a1c41917263588$export$bfd42fd87279097a)(this._hass, (_this__entity = this._entity) === null || _this__entity === void 0 ? void 0 : (_this__entity_state = _this__entity.state) === null || _this__entity_state === void 0 ? void 0 : _this__entity_state.entity_id, Math.round((100 - this._yPosition) * 2.55));
        };
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true,
        attribute: 'slider'
    })
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "sliderStyle", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_entity", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_isDragging", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $21a9ea85b7e2278b$export$ec4599f0917a20c8.prototype, "_yPosition", void 0);



var $kJycS = parcelRequire("kJycS");

var $2QgUB = parcelRequire("2QgUB");





var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");

var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $042bfa5e9e75bf5a$var$_ = (t)=>t, $042bfa5e9e75bf5a$var$t;
const $042bfa5e9e75bf5a$export$5aaff3aa40310f76 = (entity, hass, config)=>{
    var _entity_config_badges_slice, _entity_config_badges;
    return (_entity_config_badges = entity.config.badges) === null || _entity_config_badges === void 0 ? void 0 : (_entity_config_badges_slice = _entity_config_badges.slice(0, 4)) === null || _entity_config_badges_slice === void 0 ? void 0 : _entity_config_badges_slice.map((badge)=>{
        var _badge_entity_id;
        return (0, $ci0wX.html)($042bfa5e9e75bf5a$var$t || ($042bfa5e9e75bf5a$var$t = $042bfa5e9e75bf5a$var$_`
      <room-badge
        .hass=${0}
        .config=${0}
        .badge=${0}
      ></room-badge>
    `), hass, config, (0, $1izJ2._)((0, $kJycS._)({}, badge), {
            entity_id: (_badge_entity_id = badge.entity_id) !== null && _badge_entity_id !== void 0 ? _badge_entity_id : entity.config.entity_id
        }));
    });
};




var $12mnG = parcelRequire("12mnG");


var $8jUVR = parcelRequire("8jUVR");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $48eb237c515e3f80$var$_ = (t)=>t, $48eb237c515e3f80$var$t, $48eb237c515e3f80$var$t1, $48eb237c515e3f80$var$t2, $48eb237c515e3f80$var$t3, $48eb237c515e3f80$var$t4;
function $48eb237c515e3f80$export$69e61e2a00cc1668(hass, config, entity, isMainRoomEntity) {
    var _config_background_options, _config_background;
    const showEntityLabels = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'show_entity_labels');
    var _config_background_options_includes;
    const hideForMainRoomIcon = isMainRoomEntity && ((_config_background_options_includes = config === null || config === void 0 ? void 0 : (_config_background = config.background) === null || _config_background === void 0 ? void 0 : (_config_background_options = _config_background.options) === null || _config_background_options === void 0 ? void 0 : _config_background_options.includes('hide_icon_only')) !== null && _config_background_options_includes !== void 0 ? _config_background_options_includes : false);
    if (!showEntityLabels || hideForMainRoomIcon) return 0, $ci0wX.nothing;
    return (0, $ci0wX.html)($48eb237c515e3f80$var$t || ($48eb237c515e3f80$var$t = $48eb237c515e3f80$var$_`<room-entity-label
    .hass=${0}
    .config=${0}
    .entity=${0}
  ></room-entity-label>`), hass, config, entity);
}
function $48eb237c515e3f80$export$7550a2852884ab9f(hass, config, props) {
    if ((0, $1e40c00d469c9d00$exports.hasFeature)(config, 'hide_sensor_labels')) return 0, $ci0wX.nothing;
    return (0, $ci0wX.html)($48eb237c515e3f80$var$t1 || ($48eb237c515e3f80$var$t1 = $48eb237c515e3f80$var$_`<room-sensor-label
    .hass=${0}
    .config=${0}
    .sensor=${0}
    .entity=${0}
  ></room-sensor-label>`), hass, config, props.sensor, props.entity);
}
function $48eb237c515e3f80$export$23d92e23bb73dc02(hass, entity, conn, fallback) {
    // First priority: label from state/threshold result
    // or a configured label (second priority)
    const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(entity);
    const label = (0, $3eeea5b8a350985f$export$9d7fd66a8622e6b5)(entity, thresholdResult);
    // check if the label is a template string
    if (label && (0, $e1a1e2291c993cc1$exports.isTemplateString)(label)) {
        conn.sync(hass, entity.config.entity_id, label);
        return (0, $ci0wX.html)($48eb237c515e3f80$var$t2 || ($48eb237c515e3f80$var$t2 = $48eb237c515e3f80$var$_`${0}`), conn.displayedText);
    }
    conn.disconnect();
    // if the label is not a template string, return it
    if (label) return (0, $ci0wX.html)($48eb237c515e3f80$var$t3 || ($48eb237c515e3f80$var$t3 = $48eb237c515e3f80$var$_`${0}`), label);
    const state = entity.state;
    if (!state) return 0, $ci0wX.nothing;
    // Third priority: attribute value if attribute is configured
    if (entity.config.attribute || fallback === 'state-display') return (0, $8jUVR.stateDisplay)(hass, state, entity.config.attribute);
    // Fallback: entity name
    return (0, $ci0wX.html)($48eb237c515e3f80$var$t4 || ($48eb237c515e3f80$var$t4 = $48eb237c515e3f80$var$_`${0}`), (0, $12mnG.computeEntityName)(state, hass));
}




var $8jUVR = parcelRequire("8jUVR");

var $b6f5c4f1cc0fefd9$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/state-display/state-display.ts
 */ Object.defineProperty($b6f5c4f1cc0fefd9$exports, "__esModule", {
    value: true
});
$b6f5c4f1cc0fefd9$exports.DEFAULT_STATE_CONTENT_DOMAINS = $b6f5c4f1cc0fefd9$exports.HIDDEN_ZERO_ATTRIBUTES_DOMAINS = void 0;
// Attributes that should not be shown if their value is 0 */
$b6f5c4f1cc0fefd9$exports.HIDDEN_ZERO_ATTRIBUTES_DOMAINS = {
    valve: [
        'current_position'
    ],
    cover: [
        'current_position'
    ],
    fan: [
        'percentage'
    ],
    light: [
        'brightness'
    ]
};
$b6f5c4f1cc0fefd9$exports.DEFAULT_STATE_CONTENT_DOMAINS = {
    climate: [
        'state',
        'current_temperature'
    ],
    cover: [
        'state',
        'current_position'
    ],
    fan: 'percentage',
    humidifier: [
        'state',
        'current_humidity'
    ],
    light: 'brightness',
    timer: 'remaining_time',
    update: 'install_status',
    valve: [
        'state',
        'current_position'
    ]
};


function $380d0e56e7a53b83$export$ca29d1e2c5c9d7bc(state) {
    const { domain: domain, state: entityState, attributes: attributes } = state;
    // Only apply to domains that have zero-attribute hiding logic
    const hiddenZeroAttributes = (0, $b6f5c4f1cc0fefd9$exports.HIDDEN_ZERO_ATTRIBUTES_DOMAINS)[domain];
    if (!hiddenZeroAttributes) return false;
    // Get the default content for this domain
    const defaultContent = (0, $b6f5c4f1cc0fefd9$exports.DEFAULT_STATE_CONTENT_DOMAINS)[domain];
    if (!defaultContent) return false;
    // Handle array content (e.g., cover: ["state", "current_position"])
    const contentArray = (0, $559da9a3c5c02863$exports.ensureArray)(defaultContent);
    // Find all attributes in the content array that are in the hidden zero attributes list
    // These are the attributes that would be filtered out if they're 0/null
    const zeroAttributesInContent = contentArray.filter((attr)=>hiddenZeroAttributes.includes(attr));
    // If no zero-attribute domains are in the content, we can't determine if we should hide
    if (zeroAttributesInContent.length === 0) return false;
    // Check if ALL zero-attribute domains in content would be filtered out
    // Per Home Assistant's logic: returns undefined if attribute == null OR
    // (attribute is in HIDDEN_ZERO_ATTRIBUTES_DOMAINS and !attribute)
    const allZeroAttributesFiltered = zeroAttributesInContent.every((attr)=>{
        const attributeValue = attributes[attr];
        // Matches Home Assistant's condition: attribute == null || (!attribute for hidden domains)
        return attributeValue == null || !attributeValue;
    });
    if (!allZeroAttributesFiltered) // Some zero-attribute domains have non-zero values, so they would be shown
    return false;
    // All zero-attribute domains are filtered out
    // Home Assistant would either show "state" (if in content) or fall back to state
    // In both cases, if entity is inactive, we want to hide to avoid redundant "off"/"closed"
    const isInactive = (domain === 'light' || domain === 'fan') && entityState === 'off';
    const isClosed = (domain === 'cover' || domain === 'valve') && entityState === 'closed';
    return isInactive || isClosed;
}


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $64ed32997eb866dd$var$_ = (t)=>t, $64ed32997eb866dd$var$t;
function $64ed32997eb866dd$export$25d11e1ce3afd7f7(hass, entity, hideIconContent) {
    const { state: state } = entity;
    // Check if show_state feature is enabled for this entity
    const showStateEnabled = (0, $b02f37b9ae80224f$export$47f3d980c4d9b226)(entity, 'show_state') && !hideIconContent;
    if (!showStateEnabled) return 0, $ci0wX.nothing;
    // Check if we should hide state display when inactive (for zero-attribute domains)
    const hideZeroAttributeDomains = (0, $b02f37b9ae80224f$export$47f3d980c4d9b226)(entity, 'hide_zero_attribute_domains');
    if (hideZeroAttributeDomains && state) {
        const shouldHideState = (0, $380d0e56e7a53b83$export$ca29d1e2c5c9d7bc)(state);
        if (shouldHideState) return 0, $ci0wX.nothing;
    }
    // Render the state display
    return (0, $ci0wX.html)($64ed32997eb866dd$var$t || ($64ed32997eb866dd$var$t = $64ed32997eb866dd$var$_`<div class="entity-state">${0}</div>`), (0, $8jUVR.stateDisplay)(hass, state));
}






parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");

const $591072dd54c0e5bc$export$5edf3a158822b217 = (hass, entity, isActive)=>{
    const { state: state } = entity;
    const filter = (0, $138ab67ea0f87e5c$exports.stateColorBrightness)(state);
    const styleData = (0, $07e9954134d2b2af$export$de2836153ec9a0b1)(hass, 'icon', entity, isActive);
    if (!styleData) return 0, $ci0wX.nothing;
    // An entity picture paints the icon fill, so show it at full opacity
    // while the entity is active instead of the dimmed fill.
    const opacity = (0, $be1aa69a1c2a424c$export$b372a12fd687417)(entity) && styleData.active ? '1' : `var(--opacity-icon-fill-${styleData.activeClass})`;
    return (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)({
        '--icon-color': styleData.cssColor,
        '--icon-opacity': `var(--opacity-icon-${styleData.activeClass})`,
        '--background-color-icon': styleData.cssColor,
        '--background-opacity-icon': opacity,
        '--state-color-icon-theme': styleData.themeOverride,
        '--icon-filter': filter
    });
};




const $ac519daeba261117$export$d5d9aad110ad14a = (entity, config, options = {})=>{
    const { thresholdResult: thresholdResult } = options;
    const { state: state } = entity;
    if (!state) return undefined;
    // Priority 1: Threshold/state icon (if configured and matches current state)
    // This allows dynamic state-based icons to override static configured icons
    if (thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.icon) return thresholdResult.icon;
    // Priority 2: Configured icon (fallback/default)
    if (entity.config.icon) return entity.config.icon;
    // Priority 3: Climate icon (if applicable)
    const useClimateIcons = !(0, $1e40c00d469c9d00$exports.hasFeature)(config, 'skip_climate_styles') && state.domain === 'climate';
    if (useClimateIcons) {
        var _state_attributes;
        // Prefer hvac_action over state for more accurate icon representation
        const hvacAction = (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.hvac_action;
        if (hvacAction && (0, $b249f8e80c3f58bd$exports.CLIMATE_HVAC_ACTION_TO_MODE)[hvacAction]) {
            const mode = (0, $b249f8e80c3f58bd$exports.CLIMATE_HVAC_ACTION_TO_MODE)[hvacAction];
            return (0, $b249f8e80c3f58bd$exports.CLIMATE_HVAC_MODE_ICONS)[mode];
        }
        // Fall back to state.state (which contains the hvac_mode)
        const hvacMode = state.state;
        if (hvacMode) return (0, $b249f8e80c3f58bd$exports.climateHvacModeIcon)(hvacMode);
    }
    // Priority 4: Let ha-state-icon use default (undefined)
    return undefined;
};





var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");
var $lYE5o = parcelRequire("lYE5o");

var $2QgUB = parcelRequire("2QgUB");


var $g28NR = parcelRequire("g28NR");


var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
var $aaQtJ = parcelRequire("aaQtJ");
let $1bb40fdc00566efe$var$_ = (t)=>t, $1bb40fdc00566efe$var$t;
class $1bb40fdc00566efe$export$ac61db8e407dba59 extends (0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return (0, $2SS2a.css)($1bb40fdc00566efe$var$t || ($1bb40fdc00566efe$var$t = $1bb40fdc00566efe$var$_`
      :host {
        position: absolute;
        font-size: 0.7em;
        text-align: center;
        overflow: hidden;
        margin-top: 75%;
        display: var(--user-entity-label-display, block);
      }
    `));
    }
    disconnectedCallback() {
        this._labelTemplateConn.disconnect();
        super.disconnectedCallback();
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        (0, $dTmXl.d)(this.config, 'room-entity-label', 'render');
        return (0, $48eb237c515e3f80$export$23d92e23bb73dc02)(this.hass, this.entity, this._labelTemplateConn, 'entity-name');
    }
    constructor(...args){
        super(...args), this._labelTemplateConn = new (0, $a8bfdc087294b7f3$export$d201aad20a44ca08)(()=>this.requestUpdate());
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Object,
        hasChanged: (a, b)=>!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(a, b)
    })
], $1bb40fdc00566efe$export$ac61db8e407dba59.prototype, "entity", void 0);
$1bb40fdc00566efe$export$ac61db8e407dba59 = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('room-entity-label')
], $1bb40fdc00566efe$export$ac61db8e407dba59);


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $3221e0e6382742ce$var$_ = (t)=>t, $3221e0e6382742ce$var$t;
const $3221e0e6382742ce$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($3221e0e6382742ce$var$t || ($3221e0e6382742ce$var$t = $3221e0e6382742ce$var$_`
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

  /* When the background layer owns the card background (it reflects
     [icon-bg] only on the main room icon), route the user-configured
     --user-opacity to the icon fill instead of the card. */
  .icon room-background-image[icon-bg] {
    --icon-color-opacity: var(--user-opacity, var(--background-opacity-icon));
  }

  /* State icon styling */
  .icon ha-state-icon {
    width: 50%;
    color: var(--icon-color);
    opacity: var(--icon-opacity);
    --mdc-icon-size: 100%;
    filter: var(--icon-filter, none);
  }

  /* Entity state styling */
  .entity-state {
    position: absolute;
    font-size: var(--user-entity-state-font-size, 0.6em);
    text-align: center;
    overflow: hidden;
    margin-top: 90%;
    display: block;
    color: var(--user-entity-state-color, var(--secondary-text-color));
    opacity: var(--user-entity-state-opacity, 1);
    font-weight: var(--user-entity-state-font-weight, normal);
  }

  .box {
    cursor: pointer;
    align-self: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* Alarm styling: map the active alarm onto the generic --icon-alarm-*
     variables consumed by room-background-image's layers. */
  :host([room][alarm]) .icon {
    --icon-alarm-transition: all 0.3s ease;
  }

  :host([room][alarm='smoke']) .icon {
    --icon-alarm-animation: var(--smoke-icon-animation);
    --icon-alarm-color: var(--smoke-icon-color);
  }

  :host([room][alarm='gas']) .icon {
    --icon-alarm-animation: var(--gas-icon-animation);
    --icon-alarm-color: var(--gas-icon-color);
  }

  :host([room][alarm='water']) .icon {
    --icon-alarm-animation: var(--water-icon-animation);
    --icon-alarm-color: var(--water-icon-color);
  }

  :host([room][alarm='occupied']) .icon {
    --icon-alarm-animation: var(--occupancy-icon-animation);
    --icon-alarm-color: var(--occupancy-icon-color);
  }
`));


let $21884f49b48db948$var$_ = (t)=>t, $21884f49b48db948$var$t, $21884f49b48db948$var$t1, $21884f49b48db948$var$t2;
class $21884f49b48db948$export$8063c4212d705050 extends (0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $3221e0e6382742ce$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ set config(config) {
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(config, this._config)) {
            // Calculate hiding logic for main room entity
            if (this.isMainRoomEntity) this._hideRoomIcon = (0, $1e40c00d469c9d00$exports.hasFeature)(config, 'hide_room_icon');
            // todo super.config?
            this._config = config;
        }
    }
    /**
   * Whether the icon glyph/state text is replaced by an image:
   * the entity's own picture, or `hide_icon_only` on the main room entity.
   * The picture/gating rules themselves live in `room-background-image`
   * (fixes #333, #383, #404).
   */ get _hideIconContent() {
        return (0, $be1aa69a1c2a424c$export$3474b6a6793aedb2)(this._config, this.entity, this.isMainRoomEntity);
    }
    render() {
        var _this__config_styles, _this__config, _this__config_styles1, _this__config1;
        (0, $dTmXl.d)(this._config, 'room-state-icon', 'render');
        const { state: state } = this.entity;
        if (!state) return 0, $ci0wX.nothing;
        // With the icon hidden the box is just card body, so card-level
        // `config.actions` win over the entity's own actions
        if (this._hideRoomIcon) {
            const boxEntity = (0, $69eb2992476f80e8$export$f4c1e7ce0a330ff4)(this.entity, this._config);
            return (0, $ci0wX.html)($21884f49b48db948$var$t || ($21884f49b48db948$var$t = $21884f49b48db948$var$_`<div
        class="box"
        @action=${0}
        .actionHandler=${0}
      ></div>`), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, boxEntity), (0, $b96673d7637fba33$export$8a44987212de21b)(boxEntity));
        }
        const thresholdResult = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(this.entity);
        const iconStyle = (0, $591072dd54c0e5bc$export$5edf3a158822b217)(this.hass, this.entity, this.isActive);
        const iconStyles = (0, $kJycS._)({}, (_this__config = this._config) === null || _this__config === void 0 ? void 0 : (_this__config_styles = _this__config.styles) === null || _this__config_styles === void 0 ? void 0 : _this__config_styles.entity_icon, this.isMainRoomEntity ? (_this__config1 = this._config) === null || _this__config1 === void 0 ? void 0 : (_this__config_styles1 = _this__config1.styles) === null || _this__config_styles1 === void 0 ? void 0 : _this__config_styles1.room_entity_icon : undefined, this.entity.config.styles, thresholdResult === null || thresholdResult === void 0 ? void 0 : thresholdResult.styles);
        const icon = (0, $ac519daeba261117$export$d5d9aad110ad14a)(this.entity, this._config, {
            thresholdResult: thresholdResult
        });
        // Render badges (max 4)
        const badgeElements = (0, $042bfa5e9e75bf5a$export$5aaff3aa40310f76)(this.entity, this.hass, this._config);
        var _this_isActive;
        return (0, $ci0wX.html)($21884f49b48db948$var$t2 || ($21884f49b48db948$var$t2 = $21884f49b48db948$var$_`
      ${0}
      <div
        class="icon"
        style=${0}
        @action=${0}
        .actionHandler=${0}
      >
        <room-background-image
          icon
          .room=${0}
          .roomEntity=${0}
          .isActive=${0}
          .hass=${0}
          .config=${0}
        ></room-background-image>
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)(iconStyles), iconStyle, (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, this.entity), (0, $b96673d7637fba33$export$8a44987212de21b)(this.entity), this.isMainRoomEntity, this.entity, (_this_isActive = this.isActive) !== null && _this_isActive !== void 0 ? _this_isActive : false, this.hass, this._config, this._hideIconContent ? (0, $ci0wX.nothing) : (0, $ci0wX.html)($21884f49b48db948$var$t1 || ($21884f49b48db948$var$t1 = $21884f49b48db948$var$_`<ha-state-icon
              .hass=${0}
              .stateObj=${0}
              .icon=${0}
            ></ha-state-icon>`), this.hass, state, icon), badgeElements, (0, $48eb237c515e3f80$export$69e61e2a00cc1668)(this.hass, this._config, this.entity, this.isMainRoomEntity), (0, $64ed32997eb866dd$export$25d11e1ce3afd7f7)(this.hass, this.entity, this._hideIconContent));
    }
    constructor(...args){
        super(...args), /**
   * Whether this is the main room entity (for applying room-specific hiding logic)
   */ this.isMainRoomEntity = false;
    }
}
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_config", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $21884f49b48db948$export$8063c4212d705050.prototype, "_hideRoomIcon", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Object,
        hasChanged: (newVal, oldVal)=>{
            return !(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(newVal, oldVal);
        }
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "entity", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true,
        attribute: 'room'
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "isMainRoomEntity", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "isActive", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true
    })
], $21884f49b48db948$export$8063c4212d705050.prototype, "alarm", void 0);



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");

var $2QgUB = parcelRequire("2QgUB");

var $30f636dbed1da0d8$exports = {};
'use strict';

const $30f636dbed1da0d8$var$memoizeOne = (fn, isEqual = $ee3d06fe83a6a770$exports, { cachePromiseRejection: cachePromiseRejection = false } = {})=>{
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
$30f636dbed1da0d8$exports = $30f636dbed1da0d8$var$memoizeOne;


const $bd80f520e20b7898$export$306d3b376c79075a = (0, (/*@__PURE__*/$parcel$interopDefault($30f636dbed1da0d8$exports)))((hass)=>hass.callWS({
        type: 'frontend/get_icons',
        category: 'entity_component'
    }), ()=>true);



var $00ea4c3dd58344cb$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/icon.ts
 */ Object.defineProperty($00ea4c3dd58344cb$exports, "__esModule", {
    value: true
});
$00ea4c3dd58344cb$exports.FALLBACK_DOMAIN_ICONS = void 0;
$00ea4c3dd58344cb$exports.FALLBACK_DOMAIN_ICONS = {
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



var $g28NR = parcelRequire("g28NR");

var $htQni = parcelRequire("htQni");





var $dTmXl = parcelRequire("dTmXl");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $aaQtJ = parcelRequire("aaQtJ");


var $ci0wX = parcelRequire("ci0wX");

var $lV8FJ = parcelRequire("lV8FJ");

var $lV8FJ = parcelRequire("lV8FJ");

var $lnb0z = parcelRequire("lnb0z");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $01e5acdf5646665e$var$s = (i, t)=>{
    var _i__$AO;
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)(_i__$AO = i._$AO) === null || _i__$AO === void 0 ? void 0 : _i__$AO.call(i, t, !1), $01e5acdf5646665e$var$s(i, t);
    return !0;
}, $01e5acdf5646665e$var$o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === (e === null || e === void 0 ? void 0 : e.size));
}, $01e5acdf5646665e$var$r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), $01e5acdf5646665e$var$c(t);
    }
};
function $01e5acdf5646665e$var$h(i) {
    void 0 !== this._$AN ? ($01e5acdf5646665e$var$o(this), this._$AM = i, $01e5acdf5646665e$var$r(this)) : this._$AM = i;
}
function $01e5acdf5646665e$var$n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)$01e5acdf5646665e$var$s(r[i], !1), $01e5acdf5646665e$var$o(r[i]);
            else null != r && ($01e5acdf5646665e$var$s(r, !1), $01e5acdf5646665e$var$o(r));
        } else $01e5acdf5646665e$var$s(this, i);
    }
}
const $01e5acdf5646665e$var$c = (i)=>{
    var _i, _i1;
    var __$AP, __$AQ;
    i.type == (0, $lnb0z.PartType).CHILD && ((__$AP = (_i = i)._$AP) !== null && __$AP !== void 0 ? __$AP : _i._$AP = $01e5acdf5646665e$var$n, (__$AQ = (_i1 = i)._$AQ) !== null && __$AQ !== void 0 ? __$AQ : _i1._$AQ = $01e5acdf5646665e$var$h);
};
class $01e5acdf5646665e$export$7d025501802325e extends (0, $lnb0z.Directive) {
    _$AT(i, t, e) {
        super._$AT(i, t, e), $01e5acdf5646665e$var$r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        var _this_reconnected, _this, _this_disconnected, _this1;
        i !== this.isConnected && (this.isConnected = i, i ? (_this_reconnected = (_this = this).reconnected) === null || _this_reconnected === void 0 ? void 0 : _this_reconnected.call(_this) : (_this_disconnected = (_this1 = this).disconnected) === null || _this_disconnected === void 0 ? void 0 : _this_disconnected.call(_this1)), t && ($01e5acdf5646665e$var$s(this, i), $01e5acdf5646665e$var$o(this));
    }
    setValue(t) {
        if ((0, $lV8FJ.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
}


/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7a8c63ab0b6f1045$export$74673a32c6041f3e = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class $7a8c63ab0b6f1045$export$71341b9b69479007 {
    disconnect() {
        this.G = void 0;
    }
    reconnect(t) {
        this.G = t;
    }
    deref() {
        return this.G;
    }
    constructor(t){
        this.G = t;
    }
}
class $7a8c63ab0b6f1045$export$193ea5a420bb5c41 {
    get() {
        return this.Y;
    }
    pause() {
        var _this_Y;
        (_this_Y = this.Y) !== null && _this_Y !== void 0 ? _this_Y : this.Y = new Promise((t)=>this.Z = t);
    }
    resume() {
        var _this_Z, _this;
        (_this_Z = (_this = this).Z) === null || _this_Z === void 0 ? void 0 : _this_Z.call(_this), this.Y = this.Z = void 0;
    }
    constructor(){
        this.Y = void 0, this.Z = void 0;
    }
}



var $lnb0z = parcelRequire("lnb0z");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7b5ce03f476dfece$var$n = (t)=>!(0, $lV8FJ.isPrimitive)(t) && "function" == typeof t.then, $7b5ce03f476dfece$var$h = 1073741823;
class $7b5ce03f476dfece$export$51c6edf8ee19b71a extends (0, $01e5acdf5646665e$export$7d025501802325e) {
    render(...s) {
        var _s_find;
        return (_s_find = s.find((t)=>!$7b5ce03f476dfece$var$n(t))) !== null && _s_find !== void 0 ? _s_find : (0, $ci0wX.noChange);
    }
    update(s, i) {
        const e = this._$Cbt;
        let r = e.length;
        this._$Cbt = i;
        const o = this._$CK, c = this._$CX;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$Cwt); t++){
            const s = i[t];
            if (!$7b5ce03f476dfece$var$n(s)) return this._$Cwt = t, s;
            t < r && s === e[t] || (this._$Cwt = $7b5ce03f476dfece$var$h, r = 0, Promise.resolve(s).then(async (t)=>{
                for(; c.get();)await c.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const e = i._$Cbt.indexOf(s);
                    e > -1 && e < i._$Cwt && (i._$Cwt = e, i.setValue(t));
                }
            }));
        }
        return 0, $ci0wX.noChange;
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
    constructor(){
        super(...arguments), this._$Cwt = $7b5ce03f476dfece$var$h, this._$Cbt = [], this._$CK = new (0, $7a8c63ab0b6f1045$export$71341b9b69479007)(this), this._$CX = new (0, $7a8c63ab0b6f1045$export$193ea5a420bb5c41);
    }
}
const $7b5ce03f476dfece$export$a40009bd2c363351 = (0, $lnb0z.directive)($7b5ce03f476dfece$export$51c6edf8ee19b71a);





var $2QgUB = parcelRequire("2QgUB");

/**
 * Formats a number with appropriate decimal places
 */ const $23d9b52a9a7ecac4$var$formatNumber = (value, maxDecimals = 1)=>{
    return value.toFixed(maxDecimals).replace(/\.?0+$/, '');
};
/**
 * Adds appropriate spacing before unit if needed
 */ const $23d9b52a9a7ecac4$var$blankBeforeUnit = (unit)=>{
    // Units that don't need a space (like % or °)
    const noSpaceUnits = [
        '%',
        "\xb0C",
        "\xb0F"
    ];
    return noSpaceUnits.some((u)=>unit.includes(u)) ? '' : ' ';
};
const $23d9b52a9a7ecac4$export$6b5316c1eb8ef7e7 = (averagedSensor)=>`${$23d9b52a9a7ecac4$var$formatNumber(averagedSensor.average)}${$23d9b52a9a7ecac4$var$blankBeforeUnit(averagedSensor.uom)}${averagedSensor.uom}`;



var $g28NR = parcelRequire("g28NR");


var $dTmXl = parcelRequire("dTmXl");

parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $yv2EM = parcelRequire("yv2EM");
var $aaQtJ = parcelRequire("aaQtJ");
let $3b95f56107a2cba7$var$_ = (t)=>t, $3b95f56107a2cba7$var$t;
class $3b95f56107a2cba7$export$ef860f80ba8a1734 extends (0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement)) {
    disconnectedCallback() {
        this._labelTemplateConn.disconnect();
        super.disconnectedCallback();
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        (0, $dTmXl.d)(this.config, 'room-sensor-label', 'render');
        if (this.sensor) return (0, $ci0wX.html)($3b95f56107a2cba7$var$t || ($3b95f56107a2cba7$var$t = $3b95f56107a2cba7$var$_`${0}`), (0, $23d9b52a9a7ecac4$export$6b5316c1eb8ef7e7)(this.sensor));
        if (!this.entity) return 0, $ci0wX.nothing;
        return (0, $48eb237c515e3f80$export$23d92e23bb73dc02)(this.hass, this.entity, this._labelTemplateConn, 'state-display');
    }
    constructor(...args){
        super(...args), this._labelTemplateConn = new (0, $a8bfdc087294b7f3$export$d201aad20a44ca08)(()=>this.requestUpdate());
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Object,
        hasChanged: (a, b)=>!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(a, b)
    })
], $3b95f56107a2cba7$export$ef860f80ba8a1734.prototype, "entity", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Object,
        hasChanged: (a, b)=>!(0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))(a, b)
    })
], $3b95f56107a2cba7$export$ef860f80ba8a1734.prototype, "sensor", void 0);
$3b95f56107a2cba7$export$ef860f80ba8a1734 = (0, $2QgUB.__decorate)([
    (0, $yv2EM.customElement)('room-sensor-label')
], $3b95f56107a2cba7$export$ef860f80ba8a1734);


parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $a2c19dc37818e84b$var$_ = (t)=>t, $a2c19dc37818e84b$var$t;
const $a2c19dc37818e84b$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($a2c19dc37818e84b$var$t || ($a2c19dc37818e84b$var$t = $a2c19dc37818e84b$var$_`
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
    color: var(--sensor-icon-color);
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
`));


let $0a8df7eca34388c3$var$_ = (t)=>t, $0a8df7eca34388c3$var$t, $0a8df7eca34388c3$var$t1, $0a8df7eca34388c3$var$t2, $0a8df7eca34388c3$var$t3, $0a8df7eca34388c3$var$t4, $0a8df7eca34388c3$var$t5, $0a8df7eca34388c3$var$t6;
class $0a8df7eca34388c3$export$265e5e10b1eff6c6 extends (0, $htQni.HassUpdateMixin)((0, $g28NR.HassConfigMixin)((0, $2r9I1.LitElement))) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $a2c19dc37818e84b$export$9dd6ff9ea0189349;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        (0, $dTmXl.d)(this.config, 'sensor-collection', 'set hass');
        this._hass = hass;
        this.hide = (0, $1e40c00d469c9d00$exports.hasFeature)(this.config, 'hide_sensor_icons');
        var _this_config_sensor_layout;
        this.layout = (_this_config_sensor_layout = this.config.sensor_layout) !== null && _this_config_sensor_layout !== void 0 ? _this_config_sensor_layout : 'default';
    }
    render() {
        var _this_config_styles;
        (0, $dTmXl.d)(this.config, 'sensor-collection', 'render');
        (0, $dTmXl.d)(this.config, 'sensor-collection', 'config', this.config);
        (0, $dTmXl.d)(this.config, 'sensor-collection', 'sensors', this.sensors);
        if (!this._hass || (0, $1e40c00d469c9d00$exports.hasFeature)(this.config, 'hide_climate_label')) return 0, $ci0wX.nothing;
        return (0, $ci0wX.html)($0a8df7eca34388c3$var$t || ($0a8df7eca34388c3$var$t = $0a8df7eca34388c3$var$_`
      ${0}
      ${0}
      ${0}
    `), (0, $6f5f72559a4d178c$export$3703ea65b0ac4726)((_this_config_styles = this.config.styles) === null || _this_config_styles === void 0 ? void 0 : _this_config_styles.sensors), this.sensors.averaged.map((sensor)=>this.renderSensor(sensor, true)), this.sensors.individual.map((sensor)=>this.renderSensor(sensor, false)));
    }
    renderSensor(sensor, isAveraged) {
        if (isAveraged) {
            const s = sensor;
            const isMultiple = s.states.length > 1;
            if (isMultiple) return (0, $ci0wX.html)($0a8df7eca34388c3$var$t1 || ($0a8df7eca34388c3$var$t1 = $0a8df7eca34388c3$var$_`
          <div class="sensor">
            ${0}
            ${0}
          </div>
        `), this.renderMultiIcon(s), (0, $48eb237c515e3f80$export$7550a2852884ab9f)(this._hass, this.config, {
                sensor: s
            }));
            // Use the first state from averaged sensor
            const state = s.states[0];
            return this.renderSingleSensor(state);
        }
        // Use the sensor directly as EntityState
        return this.renderSingleSensor(sensor);
    }
    renderSingleSensor(state) {
        // Look up sensor config from config.sensors
        const sensorConfig = this.getSensorConfig(state.entity_id);
        // Create EntityInformation with sensor config for state-based styling and actions
        const info = {
            config: (0, $1izJ2._)((0, $kJycS._)({
                tap_action: {
                    action: 'more-info'
                },
                hold_action: {
                    action: 'none'
                },
                double_tap_action: {
                    action: 'none'
                }
            }, sensorConfig), {
                entity_id: state.entity_id
            }),
            state: state
        };
        // Get state/threshold-based styling result
        const result = (0, $3eeea5b8a350985f$export$76969a794fd1f893)(info);
        // Icon priority: state/threshold icon > configured icon > default
        // State-based icons override configured icons for dynamic behavior
        const icon = (result === null || result === void 0 ? void 0 : result.icon) || (sensorConfig === null || sensorConfig === void 0 ? void 0 : sensorConfig.icon);
        return (0, $ci0wX.html)($0a8df7eca34388c3$var$t2 || ($0a8df7eca34388c3$var$t2 = $0a8df7eca34388c3$var$_`
      <div
        class="sensor"
        style=${0}
        @action=${0}
        .actionHandler=${0}
      >
        ${0}
        ${0}
      </div>
    `), (0, $709101fc184637c4$export$1e5b4ce2fa884e6a)((0, $kJycS._)({
            '--sensor-icon-color': (0, $2acaa25b6d047245$export$de247ce18e8ed95f)(result === null || result === void 0 ? void 0 : result.color)
        }, result === null || result === void 0 ? void 0 : result.styles)), (0, $b96673d7637fba33$export$3d3654ce4577c53d)(this, info), (0, $b96673d7637fba33$export$8a44987212de21b)(info), this.renderStateIcon(state, icon), (0, $48eb237c515e3f80$export$7550a2852884ab9f)(this._hass, this.config, {
            entity: info
        }));
    }
    /**
   * Gets the sensor configuration for a given entity ID
   * @param entityId - The entity ID to look up
   * @returns The SensorConfig if found, undefined otherwise
   */ getSensorConfig(entityId) {
        if (!this.config.sensors) return undefined;
        const sensor = this.config.sensors.find((s)=>{
            const sensorEntityId = typeof s === 'string' ? s : s.entity_id;
            return sensorEntityId === entityId;
        });
        // Return undefined if not found or if it's a string (no config)
        if (!sensor || typeof sensor === 'string') return undefined;
        return sensor;
    }
    renderMultiIcon(sensor) {
        if (this.hide) return 0, $ci0wX.nothing;
        const iconPromise = (0, $bd80f520e20b7898$export$306d3b376c79075a)(this._hass).then((icons)=>{
            var _icons_resources_sensor_domain_sensor_device_class, _icons_resources_sensor_domain, _icons_resources;
            const icon = (_icons_resources = icons.resources) === null || _icons_resources === void 0 ? void 0 : (_icons_resources_sensor_domain = _icons_resources[sensor.domain]) === null || _icons_resources_sensor_domain === void 0 ? void 0 : (_icons_resources_sensor_domain_sensor_device_class = _icons_resources_sensor_domain[sensor.device_class]) === null || _icons_resources_sensor_domain_sensor_device_class === void 0 ? void 0 : _icons_resources_sensor_domain_sensor_device_class.default;
            if (icon) return (0, $ci0wX.html)($0a8df7eca34388c3$var$t3 || ($0a8df7eca34388c3$var$t3 = $0a8df7eca34388c3$var$_`<ha-icon .icon=${0}></ha-icon>`), icon);
            const fallback = (0, $00ea4c3dd58344cb$exports.FALLBACK_DOMAIN_ICONS)[sensor.domain];
            return fallback ? (0, $ci0wX.html)($0a8df7eca34388c3$var$t4 || ($0a8df7eca34388c3$var$t4 = $0a8df7eca34388c3$var$_`<ha-icon .icon=${0}></ha-icon>`), fallback) : (0, $ci0wX.nothing);
        });
        return (0, $ci0wX.html)($0a8df7eca34388c3$var$t5 || ($0a8df7eca34388c3$var$t5 = $0a8df7eca34388c3$var$_`${0}`), (0, $7b5ce03f476dfece$export$a40009bd2c363351)(iconPromise));
    }
    renderStateIcon(state, icon) {
        if (this.hide || !state) return 0, $ci0wX.nothing;
        return (0, $ci0wX.html)($0a8df7eca34388c3$var$t6 || ($0a8df7eca34388c3$var$t6 = $0a8df7eca34388c3$var$_`<ha-state-icon
      .hass=${0}
      .stateObj=${0}
      .icon=${0}
    ></ha-state-icon>`), this._hass, state, icon);
    }
}
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Object
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "sensors", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: Boolean,
        reflect: true
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "hide", void 0);
(0, $2QgUB.__decorate)([
    (0, $aaQtJ.property)({
        type: String,
        reflect: true
    })
], $0a8df7eca34388c3$export$265e5e10b1eff6c6.prototype, "layout", void 0);



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");

var $2QgUB = parcelRequire("2QgUB");

var $kJycS = parcelRequire("kJycS");
const $9ba75f3d2f9df1e6$export$2590a8944915c591 = [
    'room-summary-card',
    'room-summary-card-editor',
    'room-state-icon',
    'sensor-collection',
    'entity-collection',
    'entity-slider',
    'horizontal-slider',
    'badge',
    'room-badge-label',
    'room-entity-label',
    'room-sensor-label',
    'area-statistics',
    'problem-dialog',
    'problem-entity-list',
    'problem-entity-row'
];
const $9ba75f3d2f9df1e6$export$8eaae07eebefd324 = [
    'render',
    'set hass',
    'config',
    'sensors'
];
const $9ba75f3d2f9df1e6$export$aec4292bc15b41f9 = [
    {
        id: 'off',
        label: 'Off',
        description: 'Remove debug from card config',
        debug: undefined
    },
    {
        id: 'renders',
        label: 'Renders',
        description: 'Log every component render',
        debug: {
            categories: [
                'render'
            ]
        }
    },
    {
        id: 'all',
        label: 'Everything',
        description: 'All components and categories',
        debug: {}
    }
];



var $kJycS = parcelRequire("kJycS");


function $d7d56d0af32e9563$export$2796f5c42b4e627b(debug) {
    var _debug_scope, _debug_categories;
    if (!debug) return undefined;
    var _debug_scope_filter;
    const scope = (_debug_scope_filter = (_debug_scope = debug.scope) === null || _debug_scope === void 0 ? void 0 : _debug_scope.filter((entry)=>entry.length > 0)) !== null && _debug_scope_filter !== void 0 ? _debug_scope_filter : undefined;
    var _debug_categories_filter;
    const categories = (_debug_categories_filter = (_debug_categories = debug.categories) === null || _debug_categories === void 0 ? void 0 : _debug_categories.filter((entry)=>entry.length > 0)) !== null && _debug_categories_filter !== void 0 ? _debug_categories_filter : undefined;
    if (!(scope === null || scope === void 0 ? void 0 : scope.length) && !(categories === null || categories === void 0 ? void 0 : categories.length)) return {};
    return (0, $kJycS._)({}, (scope === null || scope === void 0 ? void 0 : scope.length) ? {
        scope: scope
    } : {}, (categories === null || categories === void 0 ? void 0 : categories.length) ? {
        categories: categories
    } : {});
}
function $d7d56d0af32e9563$export$958b05bb4df75a59(config) {
    const debug = config.debug;
    var _debug_scope, _debug_categories;
    return {
        enabled: debug !== undefined,
        scope: [
            ...(_debug_scope = debug === null || debug === void 0 ? void 0 : debug.scope) !== null && _debug_scope !== void 0 ? _debug_scope : []
        ],
        categories: [
            ...(_debug_categories = debug === null || debug === void 0 ? void 0 : debug.categories) !== null && _debug_categories !== void 0 ? _debug_categories : []
        ]
    };
}
function $d7d56d0af32e9563$export$6c7e32eb6724deff(config, data) {
    const next = (0, $kJycS._)({}, config);
    if (!data.enabled) {
        delete next.debug;
        return next;
    }
    next.debug = $d7d56d0af32e9563$export$2796f5c42b4e627b({
        scope: data.scope,
        categories: data.categories
    });
    return next;
}
function $d7d56d0af32e9563$export$248e45c8fe33617e(config) {
    const current = config.debug;
    for (const preset of (0, $9ba75f3d2f9df1e6$export$aec4292bc15b41f9)){
        if (preset.debug === undefined) {
            if (current === undefined) return preset.id;
            continue;
        }
        if ((0, (/*@__PURE__*/$parcel$interopDefault($ee3d06fe83a6a770$exports)))($d7d56d0af32e9563$export$2796f5c42b4e627b(preset.debug), $d7d56d0af32e9563$export$2796f5c42b4e627b(current))) return preset.id;
    }
    return null;
}
function $d7d56d0af32e9563$export$e0fe7c7e0171fed2(debug) {
    var _debug_scope, _debug_categories, _debug_categories1, _debug_scope1;
    if (debug === undefined) return '# debug disabled';
    const lines = [
        'debug:'
    ];
    if (!((_debug_scope = debug.scope) === null || _debug_scope === void 0 ? void 0 : _debug_scope.length) && !((_debug_categories = debug.categories) === null || _debug_categories === void 0 ? void 0 : _debug_categories.length)) {
        lines.push('  {}  # all components and categories');
        return lines.join('\n');
    }
    if ((_debug_categories1 = debug.categories) === null || _debug_categories1 === void 0 ? void 0 : _debug_categories1.length) {
        lines.push('  categories:');
        for (const category of debug.categories)lines.push(`    - ${category}`);
    }
    if ((_debug_scope1 = debug.scope) === null || _debug_scope1 === void 0 ? void 0 : _debug_scope1.length) {
        lines.push('  scope:');
        for (const component of debug.scope)lines.push(`    - ${component}`);
    }
    return lines.join('\n');
}


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $adbc1d2930ef985d$var$_ = (t)=>t, $adbc1d2930ef985d$var$t, $adbc1d2930ef985d$var$t1;
function $adbc1d2930ef985d$var$getDebugFormSchema() {
    return [
        {
            name: 'enabled',
            label: 'Enable console debug logging',
            selector: {
                boolean: {}
            }
        },
        {
            name: 'categories',
            label: 'Categories (empty = all)',
            selector: {
                select: {
                    multiple: true,
                    mode: 'list',
                    options: (0, $9ba75f3d2f9df1e6$export$8eaae07eebefd324).map((value)=>({
                            value: value,
                            label: value
                        }))
                }
            }
        },
        {
            name: 'scope',
            label: 'Components (empty = all)',
            selector: {
                select: {
                    multiple: true,
                    mode: 'list',
                    options: (0, $9ba75f3d2f9df1e6$export$2590a8944915c591).map((value)=>({
                            value: value,
                            label: value
                        }))
                }
            }
        }
    ];
}
function $adbc1d2930ef985d$var$applyPreset(config, presetId) {
    const preset = (0, $9ba75f3d2f9df1e6$export$aec4292bc15b41f9).find((entry)=>entry.id === presetId);
    if (!preset) return config;
    const next = (0, $kJycS._)({}, config);
    if (preset.debug === undefined) {
        delete next.debug;
        return next;
    }
    next.debug = (0, $kJycS._)({}, preset.debug);
    return next;
}
function $adbc1d2930ef985d$export$486f5d7e7aec4cd8(params) {
    const { hass: hass, config: config, onConfigChanged: onConfigChanged, onClose: onClose } = params;
    const panelData = (0, $d7d56d0af32e9563$export$958b05bb4df75a59)(config);
    const yamlSnippet = (0, $d7d56d0af32e9563$export$e0fe7c7e0171fed2)(config.debug);
    const activePresetId = (0, $d7d56d0af32e9563$export$248e45c8fe33617e)(config);
    const onPanelValueChanged = (ev)=>{
        const value = ev.detail.value;
        onConfigChanged((0, $d7d56d0af32e9563$export$6c7e32eb6724deff)(config, value));
    };
    const onPresetClick = (presetId)=>{
        onConfigChanged($adbc1d2930ef985d$var$applyPreset(config, presetId));
    };
    const onCopyYaml = async ()=>{
        try {
            await navigator.clipboard.writeText(yamlSnippet);
        } catch (e) {
        // Clipboard may be unavailable outside a secure context
        }
    };
    return (0, $ci0wX.html)($adbc1d2930ef985d$var$t1 || ($adbc1d2930ef985d$var$t1 = $adbc1d2930ef985d$var$_`
    <ha-expansion-panel outlined expanded class="debug-panel">
      <div slot="header" class="debug-panel-header">
        <ha-icon icon="mdi:bug"></ha-icon>
        <span>Debug logging</span>
        <ha-icon-button
          .label=${0}
          @click=${0}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
      <div class="debug-panel-body">
        <p class="debug-panel-hint">
          Logs appear in the browser devtools console.
        </p>
        <div class="debug-presets" role="group" aria-label="Debug presets">
          ${0}
        </div>
        <ha-form
          .hass=${0}
          .data=${0}
          .schema=${0}
          @value-changed=${0}
        ></ha-form>
        <div class="debug-yaml">
          <code>${0}</code>
          <button type="button" class="debug-copy-yaml" @click=${0}>
            Copy YAML
          </button>
        </div>
      </div>
    </ha-expansion-panel>
  `), 'Hide debug menu', (ev)=>{
        ev.stopPropagation();
        onClose();
    }, (0, $9ba75f3d2f9df1e6$export$aec4292bc15b41f9).map((preset)=>(0, $ci0wX.html)($adbc1d2930ef985d$var$t || ($adbc1d2930ef985d$var$t = $adbc1d2930ef985d$var$_`
              <button
                type="button"
                class="debug-preset ${0}"
                @click=${0}
                title=${0}
                aria-pressed=${0}
              >
                ${0}
              </button>
            `), activePresetId === preset.id ? 'active' : '', ()=>onPresetClick(preset.id), preset.description, activePresetId === preset.id, preset.label)), hass, panelData, $adbc1d2930ef985d$var$getDebugFormSchema(), onPanelValueChanged, yamlSnippet, onCopyYaml);
}



var $h7W3o = parcelRequire("h7W3o");
var $5904596835f72707$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/sensor.ts
 */ Object.defineProperty($5904596835f72707$exports, "__esModule", {
    value: true
});
$5904596835f72707$exports.getSensorNumericDeviceClasses = void 0;
let $5904596835f72707$var$sensorNumericDeviceClassesCache;
const $5904596835f72707$var$getSensorNumericDeviceClasses = async (hass)=>{
    if ($5904596835f72707$var$sensorNumericDeviceClassesCache) return $5904596835f72707$var$sensorNumericDeviceClassesCache;
    $5904596835f72707$var$sensorNumericDeviceClassesCache = hass.callWS({
        type: 'sensor/numeric_device_classes'
    });
    return $5904596835f72707$var$sensorNumericDeviceClassesCache;
};
$5904596835f72707$exports.getSensorNumericDeviceClasses = $5904596835f72707$var$getSensorNumericDeviceClasses;



var $cfP8R = parcelRequire("cfP8R");
const $cf084a38eb33c4f3$export$76fcdb2ea14db822 = {
    name: 'actions',
    label: 'editor.interactions.interactions',
    type: 'expandable',
    icon: 'mdi:gesture-tap',
    schema: [
        {
            name: 'tap_action',
            label: 'editor.interactions.tap_action',
            required: false,
            selector: {
                ui_action: {
                    default_action: 'navigate'
                }
            }
        },
        {
            name: 'double_tap_action',
            label: 'editor.interactions.double_tap_action',
            required: false,
            selector: {
                ui_action: {
                    default_action: 'more-info'
                }
            }
        },
        {
            name: 'hold_action',
            label: 'editor.interactions.hold_action',
            required: false,
            selector: {
                ui_action: {
                    default_action: 'none'
                }
            }
        }
    ]
};


const $ebeb8808033cc92f$export$5c1d9ab613e2f923 = (hass, area)=>{
    return Object.values(hass.entities).filter((entity)=>{
        var _hass_devices_entity_device_id;
        return entity.area_id === area || entity.device_id && ((_hass_devices_entity_device_id = hass.devices[entity.device_id]) === null || _hass_devices_entity_device_id === void 0 ? void 0 : _hass_devices_entity_device_id.area_id) === area;
    }).map((entity)=>entity.entity_id);
};
const $ebeb8808033cc92f$export$aff8e21126109cb8 = async (hass, area)=>{
    const entities = Object.values(hass.entities).filter((entity)=>{
        var _hass_devices_entity_device_id;
        const entityDomain = (0, $h7W3o.computeDomain)(entity.entity_id);
        return entityDomain === 'sensor' && (entity.area_id === area || entity.device_id && ((_hass_devices_entity_device_id = hass.devices[entity.device_id]) === null || _hass_devices_entity_device_id === void 0 ? void 0 : _hass_devices_entity_device_id.area_id) === area);
    });
    const numericDeviceClasses = await (0, $5904596835f72707$exports.getSensorNumericDeviceClasses)(hass);
    const classes = entities.map((entity)=>{
        var _hass_states_entity_entity_id;
        var _hass_states_entity_entity_id_attributes_device_class;
        return (_hass_states_entity_entity_id_attributes_device_class = (_hass_states_entity_entity_id = hass.states[entity.entity_id]) === null || _hass_states_entity_entity_id === void 0 ? void 0 : _hass_states_entity_entity_id.attributes.device_class) !== null && _hass_states_entity_entity_id_attributes_device_class !== void 0 ? _hass_states_entity_entity_id_attributes_device_class : '';
    }).filter((c)=>c && numericDeviceClasses.numeric_device_classes.includes(c));
    return [
        ...new Set(classes)
    ];
};
const $ebeb8808033cc92f$var$schemeStyles = (hass)=>{
    return {
        name: 'styles',
        label: 'editor.styles.styles',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:brush-variant',
        schema: [
            {
                name: 'background',
                label: 'editor.background.background',
                type: 'expandable',
                icon: 'mdi:format-paint',
                schema: [
                    {
                        name: 'image',
                        label: 'editor.background.background_image',
                        selector: {
                            media: {
                                image_upload: true
                            }
                        }
                    },
                    {
                        name: 'image_entity',
                        label: 'editor.background.background_image_entity',
                        selector: {
                            entity: {
                                filter: {
                                    domain: [
                                        'camera',
                                        'image',
                                        'person'
                                    ]
                                }
                            }
                        }
                    },
                    {
                        name: 'opacity',
                        label: 'editor.background.background_opacity',
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
                        label: 'editor.features.options',
                        selector: {
                            select: {
                                multiple: true,
                                mode: 'list',
                                options: [
                                    {
                                        label: (0, $cfP8R.localize)(hass, 'editor.background.disable_background_image'),
                                        value: 'disable'
                                    },
                                    {
                                        label: (0, $cfP8R.localize)(hass, 'editor.icon.icon_background'),
                                        value: 'icon_background'
                                    },
                                    {
                                        label: (0, $cfP8R.localize)(hass, 'editor.icon.hide_icon_only'),
                                        value: 'hide_icon_only'
                                    },
                                    {
                                        label: (0, $cfP8R.localize)(hass, 'editor.background.hide_gradient'),
                                        value: 'hide_gradient'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'styles',
                label: 'editor.styles.css_styles',
                type: 'expandable',
                icon: 'mdi:spray',
                schema: [
                    {
                        name: 'card',
                        label: 'editor.styles.card_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'stats',
                        label: 'editor.styles.stats_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    },
                    {
                        name: 'title',
                        label: 'editor.styles.title_styles',
                        required: false,
                        selector: {
                            object: {}
                        }
                    }
                ]
            },
            {
                name: 'icon_opacity_preset',
                label: 'editor.styles.icon_opacity_preset',
                required: false,
                selector: {
                    select: {
                        mode: 'dropdown',
                        options: [
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.styles.icon_opacity_default'),
                                value: 'default'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.styles.icon_opacity_medium'),
                                value: 'medium'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.styles.icon_opacity_high_visibility'),
                                value: 'high_visibility'
                            }
                        ]
                    }
                }
            }
        ]
    };
};
const $ebeb8808033cc92f$export$2763e19f10bf2cf8 = (hass)=>{
    return [
        {
            name: 'styles',
            label: 'editor.styles.css_styles',
            type: 'grid',
            column_min_width: '100%',
            schema: [
                {
                    name: 'entities',
                    label: 'editor.styles.entities_container_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                },
                {
                    name: 'entity_icon',
                    label: 'editor.styles.entity_icon_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                },
                {
                    name: 'room_entity_icon',
                    label: 'editor.styles.room_entity_icon_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                }
            ]
        },
        {
            name: 'slider_style',
            label: 'editor.slider.slider_style',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.minimalist'),
                            value: 'minimalist'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.track'),
                            value: 'track'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.line'),
                            value: 'line'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.filled'),
                            value: 'filled'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.gradient'),
                            value: 'gradient'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.dual_rail'),
                            value: 'dual-rail'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.dots'),
                            value: 'dots'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.notched'),
                            value: 'notched'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.grid'),
                            value: 'grid'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.glow'),
                            value: 'glow'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.shadow_trail'),
                            value: 'shadow-trail'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.outlined'),
                            value: 'outlined'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.bar'),
                            value: 'bar'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.slider.bar_filled'),
                            value: 'bar-filled'
                        }
                    ]
                }
            }
        }
    ];
};
const $ebeb8808033cc92f$export$157fbfc8be11fdc6 = (hass, entities)=>{
    return [
        {
            name: 'lights',
            label: 'editor.background.light_entities',
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
        },
        $ebeb8808033cc92f$export$7f37e4e3829f238c(hass)
    ];
};
const $ebeb8808033cc92f$export$40b696e9a591543c = (hass, sensorClasses, entities)=>{
    return [
        {
            name: 'sensors',
            label: 'editor.sensor.individual_sensor_entities',
            required: false,
            selector: {
                entity: {
                    multiple: true,
                    include_entities: entities
                }
            }
        },
        {
            name: 'sensor_classes',
            label: 'editor.sensor.sensor_classes',
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
            name: 'sensor_layout',
            label: 'editor.layout.sensor_layout',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.default_in_label_area'),
                            value: 'default'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.bottom'),
                            value: 'bottom'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.vertical_stack'),
                            value: 'stacked'
                        }
                    ]
                }
            }
        }
    ];
};
const $ebeb8808033cc92f$export$8709ba19f35e0c23 = (hass, sensorClasses)=>{
    return [
        {
            name: 'sensor_classes',
            label: 'editor.sensor.sensor_classes',
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
            name: 'sensor_layout',
            label: 'editor.layout.sensor_layout',
            required: false,
            selector: {
                select: {
                    mode: 'dropdown',
                    options: [
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.default_in_label_area'),
                            value: 'default'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.bottom'),
                            value: 'bottom'
                        },
                        {
                            label: (0, $cfP8R.localize)(hass, 'editor.layout.vertical_stack'),
                            value: 'stacked'
                        }
                    ]
                }
            }
        },
        {
            name: 'styles',
            label: 'editor.styles.css_styles',
            type: 'grid',
            column_min_width: '100%',
            schema: [
                {
                    name: 'sensors',
                    label: 'editor.styles.sensor_styles',
                    required: false,
                    selector: {
                        object: {}
                    }
                }
            ]
        }
    ];
};
const $ebeb8808033cc92f$export$9b953466d2b38742 = ()=>({
        name: 'area',
        label: 'editor.area.area',
        required: true,
        selector: {
            area: {}
        }
    });
const $ebeb8808033cc92f$export$1b129ae08555a818 = (hass)=>[
        {
            name: 'content',
            label: 'editor.layout.content',
            type: 'expandable',
            flatten: true,
            icon: 'mdi:text-short',
            schema: [
                {
                    name: 'area_name',
                    label: 'editor.area.area_name',
                    required: false,
                    selector: {
                        text: {}
                    }
                }
            ]
        },
        {
            name: 'problem',
            label: 'editor.problem.problem',
            type: 'expandable',
            icon: 'mdi:alert-circle',
            schema: [
                {
                    name: 'display',
                    label: 'editor.problem.problem_display',
                    required: false,
                    selector: {
                        select: {
                            mode: 'dropdown',
                            options: [
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.problem.problem_display_always'),
                                    value: 'always'
                                },
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.problem.problem_display_active_only'),
                                    value: 'active_only'
                                },
                                {
                                    label: (0, $cfP8R.localize)(hass, 'editor.problem.problem_display_never'),
                                    value: 'never'
                                }
                            ]
                        }
                    }
                }
            ]
        },
        (0, $cf084a38eb33c4f3$export$76fcdb2ea14db822),
        $ebeb8808033cc92f$var$schemeStyles(hass),
        $ebeb8808033cc92f$var$featuresSchema(hass)
    ];
/**
 * Returns schema for a single alarm configuration (occupancy, smoke, gas_leak, or water_leak)
 */ const $ebeb8808033cc92f$var$getAlarmConfigSchema = (hass, entities, alarmType)=>{
    const isSmoke = alarmType === 'smoke';
    const isGas = alarmType === 'gas';
    const isWater = alarmType === 'water';
    let label;
    let icon;
    let entitiesLabel;
    let deviceClass;
    if (isSmoke) {
        label = 'editor.alarm.smoke_detection';
        icon = 'mdi:smoke-detector';
        entitiesLabel = 'editor.alarm.smoke_detectors';
        deviceClass = [
            'smoke'
        ];
    } else if (isGas) {
        label = 'editor.alarm.gas_detection';
        icon = 'mdi:gas-cylinder';
        entitiesLabel = 'editor.alarm.gas_sensors';
        deviceClass = [
            'gas'
        ];
    } else if (isWater) {
        label = 'editor.alarm.water_detection';
        icon = 'mdi:water-alert';
        entitiesLabel = 'editor.alarm.water_sensors';
        deviceClass = [
            'moisture'
        ];
    } else {
        label = 'editor.alarm.occupancy_detection';
        icon = 'mdi:motion-sensor';
        entitiesLabel = 'editor.alarm.motion_occupancy_presence_sensors';
        deviceClass = [
            'motion',
            'occupancy',
            'presence'
        ];
    }
    let cardBorderColorLabel;
    let iconColorLabel;
    if (isSmoke) {
        cardBorderColorLabel = 'editor.card.card_border_color_smoke';
        iconColorLabel = 'editor.icon.icon_background_color_smoke';
    } else if (isGas) {
        cardBorderColorLabel = 'editor.card.card_border_color_gas';
        iconColorLabel = 'editor.icon.icon_background_color_gas';
    } else if (isWater) {
        cardBorderColorLabel = 'editor.card.card_border_color_water';
        iconColorLabel = 'editor.icon.icon_background_color_water';
    } else {
        cardBorderColorLabel = 'editor.card.card_border_color_occupied';
        iconColorLabel = 'editor.icon.icon_background_color_occupied';
    }
    return {
        name: alarmType,
        label: label,
        type: 'expandable',
        icon: icon,
        schema: [
            {
                name: 'entities',
                label: entitiesLabel,
                required: true,
                selector: {
                    entity: {
                        multiple: true,
                        include_entities: entities,
                        filter: {
                            domain: [
                                'binary_sensor'
                            ],
                            device_class: deviceClass
                        }
                    }
                }
            },
            {
                name: 'card_border_color',
                label: cardBorderColorLabel,
                required: false,
                selector: {
                    ui_color: {}
                }
            },
            {
                name: 'icon_color',
                label: iconColorLabel,
                required: false,
                selector: {
                    ui_color: {}
                }
            },
            {
                name: 'options',
                label: 'editor.alarm.alarm_options',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: [
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.card.disable_card_border'),
                                value: 'disabled_card_styles'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.card.disable_card_border_animations'),
                                value: 'disabled_card_styles_animation'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.icon.disable_icon_color'),
                                value: 'disable_icon_styles'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.icon.disable_icon_animations'),
                                value: 'disable_icon_animation'
                            }
                        ]
                    }
                }
            }
        ]
    };
};
const $ebeb8808033cc92f$export$510b3679edaaf6b = (hass, entities)=>{
    return [
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'occupancy'),
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'smoke'),
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'gas'),
        $ebeb8808033cc92f$var$getAlarmConfigSchema(hass, entities, 'water')
    ];
};
const $ebeb8808033cc92f$var$featuresSchema = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:list-box',
        schema: [
            {
                name: 'features',
                label: 'editor.features.features',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: [
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.stats.hide_area_stats'),
                                value: 'hide_area_stats'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.icon.hide_room_icon'),
                                value: 'hide_room_icon'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.styles.skip_climate_styles'),
                                value: 'skip_climate_styles'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.card.skip_card_background_styles'),
                                value: 'skip_entity_styles'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.styles.skip_mold_styles'),
                                value: 'skip_mold_styles'
                            },
                            {
                                label: (0, $cfP8R.localize)(hass, 'editor.features.full_card_actions'),
                                value: 'full_card_actions'
                            }
                        ]
                    }
                }
            }
        ]
    };
};
const $ebeb8808033cc92f$export$a3234059ca65f80a = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.entity.show_entity_labels'),
                        value: 'show_entity_labels'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.features.exclude_default_entities'),
                        value: 'exclude_default_entities'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.entity.ignore_entity'),
                        value: 'ignore_entity'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.features.sticky_entities'),
                        value: 'sticky_entities'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.features.slider'),
                        value: 'slider'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.features.hide_hidden_entities'),
                        value: 'hide_hidden_entities'
                    }
                ]
            }
        }
    };
};
const $ebeb8808033cc92f$export$7f37e4e3829f238c = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.background.multi_light_background'),
                        value: 'multi_light_background'
                    }
                ]
            }
        }
    };
};
const $ebeb8808033cc92f$export$e8b24eae43edea4f = (hass)=>{
    return {
        name: 'features',
        label: 'editor.features.features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensors'),
                        value: 'hide_climate_label'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensor_icons'),
                        value: 'hide_sensor_icons'
                    },
                    {
                        label: (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensor_labels'),
                        value: 'hide_sensor_labels'
                    }
                ]
            }
        }
    };
};




var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $b76dc3474f73e549$var$_ = (t)=>t, $b76dc3474f73e549$var$t;
function $b76dc3474f73e549$export$633a60486668629e(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged, onEntitiesRowChanged: onEntitiesRowChanged, onEditDetailElement: onEditDetailElement } = params;
    return (0, $ci0wX.html)($b76dc3474f73e549$var$t || ($b76dc3474f73e549$var$t = $b76dc3474f73e549$var$_`
    <div class="entities-tab">
      <div class="info-header">
        ${0}
      </div>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <div class="info-header">
        <div>${0}</div>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>${0}</li>
          <li>
            ${0}
          </li>
          <li>${0}</li>
          <li>${0}</li>
          <li>${0}</li>
        </ul>
      </div>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), (0, $cfP8R.localize)(hass, 'editor.entities.entities_info'), hass, config.entities, entities, hass.localize('ui.panel.lovelace.editor.card.generic.entities') || 'Entities', onEntitiesRowChanged, onEditDetailElement, hass, config, (0, $ebeb8808033cc92f$export$2763e19f10bf2cf8)(hass), (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged, (0, $cfP8R.localize)(hass, 'editor.features.features_info'), (0, $cfP8R.localize)(hass, 'editor.features.show_entity_labels_desc'), (0, $cfP8R.localize)(hass, 'editor.features.exclude_default_entities_desc'), (0, $cfP8R.localize)(hass, 'editor.features.ignore_entity_desc'), (0, $cfP8R.localize)(hass, 'editor.features.sticky_entities_desc'), (0, $cfP8R.localize)(hass, 'editor.features.slider_desc'), hass, config, [
        (0, $ebeb8808033cc92f$export$a3234059ca65f80a)(hass)
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged);
}





var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $f2a06477c32045b7$var$_ = (t)=>t, $f2a06477c32045b7$var$t, $f2a06477c32045b7$var$t1;
function $f2a06477c32045b7$export$eb43fb94789f71b0(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged, onLightsRowChanged: onLightsRowChanged, onEditDetailElement: onEditDetailElement } = params;
    const infoText = 'editor.background.multi_light_background_info';
    return (0, $ci0wX.html)($f2a06477c32045b7$var$t1 || ($f2a06477c32045b7$var$t1 = $f2a06477c32045b7$var$_`
    <div class="entities-tab">
      ${0}
      <room-summary-entities-row-editor
        .hass=${0}
        .lights=${0}
        .availableEntities=${0}
        field="lights"
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <div class="info-header">
        <div>${0}</div>
      </div>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), infoText ? (0, $ci0wX.html)($f2a06477c32045b7$var$t || ($f2a06477c32045b7$var$t = $f2a06477c32045b7$var$_` <div class="info-header">${0}</div> `), (0, $cfP8R.localize)(hass, infoText)) : (0, $ci0wX.nothing), hass, config.lights, entities, hass.localize('editor.background.light_entities') || 'Light entities', onLightsRowChanged, onEditDetailElement, (0, $cfP8R.localize)(hass, 'editor.features.features_info'), hass, config, [
        (0, $ebeb8808033cc92f$export$7f37e4e3829f238c)(hass)
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged);
}




parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $2753b9fff4eabaa1$var$_ = (t)=>t, $2753b9fff4eabaa1$var$t;
function $2753b9fff4eabaa1$export$3aced84aff4edb7f(params) {
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged, onEntityRowChanged: onEntityRowChanged, onEditDetailElement: onEditDetailElement } = params;
    const areaSchema = (0, $ebeb8808033cc92f$export$9b953466d2b38742)();
    const restSchema = (0, $ebeb8808033cc92f$export$1b129ae08555a818)(hass);
    // Convert single entity to array for row-editor
    const entityArray = config.entity ? [
        config.entity
    ] : [];
    return (0, $ci0wX.html)($2753b9fff4eabaa1$var$t || ($2753b9fff4eabaa1$var$t = $2753b9fff4eabaa1$var$_`
    <div class="entities-tab">
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        .single=${0}
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), hass, config, [
        areaSchema
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged, hass, entityArray, entities, true, hass.localize('editor.area.room_entity') || 'Room Entity', onEntityRowChanged, onEditDetailElement, hass, config, restSchema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged);
}



var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");



var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $733e085d0161322d$var$_ = (t)=>t, $733e085d0161322d$var$t, $733e085d0161322d$var$t1;
function $733e085d0161322d$export$71d9f56309acfb74(params) {
    var _config_thresholds, _config_thresholds1, _config_thresholds2;
    const { hass: hass, config: config, entities: entities, onValueChanged: onValueChanged } = params;
    const schema = (0, $ebeb8808033cc92f$export$510b3679edaaf6b)(hass, entities);
    const infoText = 'editor.alarm.alarm_info';
    const handleTemperatureThresholdsChanged = (ev)=>{
        var _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2;
        const thresholds = ev.detail.value;
        const newConfig = (0, $1izJ2._)((0, $kJycS._)({}, config), {
            thresholds: (0, $1izJ2._)((0, $kJycS._)({}, config.thresholds), {
                temperature: thresholds.length > 0 ? thresholds : undefined
            })
        });
        // Remove thresholds object if both temperature and humidity are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    const handleHumidityThresholdsChanged = (ev)=>{
        var _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2;
        const thresholds = ev.detail.value;
        const newConfig = (0, $1izJ2._)((0, $kJycS._)({}, config), {
            thresholds: (0, $1izJ2._)((0, $kJycS._)({}, config.thresholds), {
                humidity: thresholds.length > 0 ? thresholds : undefined
            })
        });
        // Remove thresholds object if both temperature and humidity are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    const handleMoldThresholdChanged = (ev)=>{
        var _ev_detail_value, _newConfig_thresholds, _newConfig_thresholds1, _newConfig_thresholds2, _newConfig_thresholds3;
        const moldValue = (_ev_detail_value = ev.detail.value) === null || _ev_detail_value === void 0 ? void 0 : _ev_detail_value.mold;
        const newConfig = (0, $1izJ2._)((0, $kJycS._)({}, config), {
            thresholds: (0, $kJycS._)({}, config.thresholds, moldValue !== undefined && moldValue !== null ? {
                mold: moldValue
            } : {})
        });
        // Remove thresholds object if all fields are empty
        if (!((_newConfig_thresholds = newConfig.thresholds) === null || _newConfig_thresholds === void 0 ? void 0 : _newConfig_thresholds.temperature) && !((_newConfig_thresholds1 = newConfig.thresholds) === null || _newConfig_thresholds1 === void 0 ? void 0 : _newConfig_thresholds1.humidity) && !((_newConfig_thresholds2 = newConfig.thresholds) === null || _newConfig_thresholds2 === void 0 ? void 0 : _newConfig_thresholds2.mold)) delete newConfig.thresholds;
        else if (!((_newConfig_thresholds3 = newConfig.thresholds) === null || _newConfig_thresholds3 === void 0 ? void 0 : _newConfig_thresholds3.mold)) delete newConfig.thresholds.mold;
        onValueChanged(new CustomEvent('value-changed', {
            detail: {
                value: newConfig
            }
        }));
    };
    return (0, $ci0wX.html)($733e085d0161322d$var$t1 || ($733e085d0161322d$var$t1 = $733e085d0161322d$var$_`
    ${0}
    <ha-form
      .hass=${0}
      .data=${0}
      .schema=${0}
      .computeLabel=${0}
      @value-changed=${0}
    ></ha-form>
    <ha-expansion-panel outlined>
      <div slot="header" class="thresholds-header">
        <ha-icon icon="mdi:thermometer-alert"></ha-icon>
        <span class="thresholds-title"
          >${0}</span
        >
      </div>
      <div class="thresholds-section">
        <room-summary-thresholds-row-editor
          .hass=${0}
          .thresholds=${0}
          .thresholdType=${0}
          .availableEntities=${0}
          label=${0}
          @threshold-entries-value-changed=${0}
        ></room-summary-thresholds-row-editor>
        <room-summary-thresholds-row-editor
          .hass=${0}
          .thresholds=${0}
          .thresholdType=${0}
          .availableEntities=${0}
          label=${0}
          @threshold-entries-value-changed=${0}
        ></room-summary-thresholds-row-editor>
        <ha-form
          .hass=${0}
          .data=${0}
          .schema=${0}
          .computeLabel=${0}
          @value-changed=${0}
        ></ha-form>
      </div>
    </ha-expansion-panel>
  `), infoText ? (0, $ci0wX.html)($733e085d0161322d$var$t || ($733e085d0161322d$var$t = $733e085d0161322d$var$_` <div class="info-header">${0}</div> `), (0, $cfP8R.localize)(hass, infoText)) : (0, $ci0wX.nothing), hass, config, schema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged, (0, $cfP8R.localize)(hass, 'editor.threshold.thresholds'), hass, ((_config_thresholds = config.thresholds) === null || _config_thresholds === void 0 ? void 0 : _config_thresholds.temperature) || [], 'temperature', entities, hass.localize('editor.threshold.temperature_thresholds'), handleTemperatureThresholdsChanged, hass, ((_config_thresholds1 = config.thresholds) === null || _config_thresholds1 === void 0 ? void 0 : _config_thresholds1.humidity) || [], 'humidity', entities, hass.localize('editor.threshold.humidity_thresholds'), handleHumidityThresholdsChanged, hass, {
        mold: (_config_thresholds2 = config.thresholds) === null || _config_thresholds2 === void 0 ? void 0 : _config_thresholds2.mold
    }, [
        {
            name: 'mold',
            label: 'editor.threshold.mold_threshold',
            required: false,
            selector: {
                number: {
                    mode: 'slider',
                    unit_of_measurement: '%',
                    min: 0,
                    max: 100
                }
            }
        }
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), handleMoldThresholdChanged);
}





var $cfP8R = parcelRequire("cfP8R");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
let $338d9b587813c56d$var$_ = (t)=>t, $338d9b587813c56d$var$t;
function $338d9b587813c56d$export$359e193b1547165(params) {
    const { hass: hass, config: config, entities: entities, sensorClasses: sensorClasses, onValueChanged: onValueChanged, onSensorsRowChanged: onSensorsRowChanged, onEditDetailElement: onEditDetailElement } = params;
    const restSchema = (0, $ebeb8808033cc92f$export$8709ba19f35e0c23)(hass, sensorClasses);
    return (0, $ci0wX.html)($338d9b587813c56d$var$t || ($338d9b587813c56d$var$t = $338d9b587813c56d$var$_`
    <div class="entities-tab">
      <div class="info-header">
        ${0}
      </div>
      <room-summary-entities-row-editor
        .hass=${0}
        .entities=${0}
        .availableEntities=${0}
        field="entities"
        label=${0}
        @value-changed=${0}
        @edit-detail-element=${0}
      ></room-summary-entities-row-editor>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
      <div class="info-header">
        <div>${0}</div>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>${0}</li>
          <li>${0}</li>
          <li>${0}</li>
        </ul>
      </div>
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}
      ></ha-form>
    </div>
  `), (0, $cfP8R.localize)(hass, 'editor.sensor.sensors_info'), hass, config.sensors, entities, hass.localize('editor.sensor.individual_sensor_entities') || 'Individual sensor entities', onSensorsRowChanged, onEditDetailElement, hass, config, restSchema, (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged, (0, $cfP8R.localize)(hass, 'editor.sensor.features_info'), (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensors_desc'), (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensor_icons_desc'), (0, $cfP8R.localize)(hass, 'editor.sensor.hide_sensor_labels_desc'), hass, config, [
        (0, $ebeb8808033cc92f$export$e8b24eae43edea4f)(hass)
    ], (schema)=>(0, $58c2b5810601848d$export$851056343f01ae23)(schema, hass), onValueChanged);
}


parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");

var $ci0wX = parcelRequire("ci0wX");


var $lnb0z = parcelRequire("lnb0z");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $94ecd7aeca8c09b3$export$7d1e3a5e95ceca43 = ()=>new $94ecd7aeca8c09b3$var$h;
class $94ecd7aeca8c09b3$var$h {
}
const $94ecd7aeca8c09b3$var$o = new WeakMap, $94ecd7aeca8c09b3$export$eff4d24c3ff7876e = (0, $lnb0z.directive)(class extends (0, $01e5acdf5646665e$export$7d025501802325e) {
    render(i) {
        return 0, $ci0wX.nothing;
    }
    update(i, [s]) {
        var _i_options;
        const e = s !== this.G;
        return e && void 0 !== this.G && this.rt(void 0), (e || this.lt !== this.ct) && (this.G = s, this.ht = (_i_options = i.options) === null || _i_options === void 0 ? void 0 : _i_options.host, this.rt(this.ct = i.element)), $ci0wX.nothing;
    }
    rt(t) {
        if (this.isConnected || (t = void 0), "function" == typeof this.G) {
            var _this_ht;
            const i = (_this_ht = this.ht) !== null && _this_ht !== void 0 ? _this_ht : globalThis;
            let s = $94ecd7aeca8c09b3$var$o.get(i);
            void 0 === s && (s = new WeakMap, $94ecd7aeca8c09b3$var$o.set(i, s)), void 0 !== s.get(this.G) && this.G.call(this.ht, void 0), s.set(this.G, t), void 0 !== t && this.G.call(this.ht, t);
        } else this.G.value = t;
    }
    get lt() {
        var _o_get, _this_G;
        var _this_ht;
        return "function" == typeof this.G ? (_o_get = $94ecd7aeca8c09b3$var$o.get((_this_ht = this.ht) !== null && _this_ht !== void 0 ? _this_ht : globalThis)) === null || _o_get === void 0 ? void 0 : _o_get.get(this.G) : (_this_G = this.G) === null || _this_G === void 0 ? void 0 : _this_G.value;
    }
    disconnected() {
        this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
        this.rt(this.ct);
    }
});




let $82f367c6f871e29a$var$_ = (t)=>t, $82f367c6f871e29a$var$t;
function $82f367c6f871e29a$export$c12c36dfee4d12e2(params) {
    const { currentTab: currentTab, showLeftScroll: showLeftScroll, showRightScroll: showRightScroll, tabContainerRef: tabContainerRef, onScroll: onScroll, onTabClick: onTabClick, onDebugMenuToggle: onDebugMenuToggle, onAlarmTabSecretClick: onAlarmTabSecretClick, debugPanel: debugPanel, tabContent: tabContent } = params;
    return (0, $ci0wX.html)($82f367c6f871e29a$var$t || ($82f367c6f871e29a$var$t = $82f367c6f871e29a$var$_`
    <div class="card-config">
      <div class="tab-bar-wrapper">
        <div
          class="scroll-indicator scroll-indicator-left ${0}"
        >
          <svg class="scroll-arrow" viewBox="0 0 24 24">
            <path
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
        </div>
        <div
          class="tab-bar-container"
          ${0}
          @scroll=${0}
        >
          <div class="custom-tab-bar">
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Main
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Entities
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Lights
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Sensors
            </button>
            <button
              class="custom-tab ${0}"
              @click=${0}
            >
              Alarm
            </button>
          </div>
        </div>
        <div
          class="scroll-indicator scroll-indicator-right ${0}"
        >
          <svg class="scroll-arrow" viewBox="0 0 24 24">
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </div>
      </div>
      ${0} ${0}
    </div>
  `), showLeftScroll ? 'visible' : '', (0, $94ecd7aeca8c09b3$export$eff4d24c3ff7876e)(tabContainerRef), onScroll, currentTab === 0 ? 'active' : '', (ev)=>{
        onTabClick(0);
        if (ev.shiftKey) onDebugMenuToggle === null || onDebugMenuToggle === void 0 ? void 0 : onDebugMenuToggle();
    }, currentTab === 1 ? 'active' : '', ()=>onTabClick(1), currentTab === 2 ? 'active' : '', ()=>onTabClick(2), currentTab === 3 ? 'active' : '', ()=>onTabClick(3), currentTab === 4 ? 'active' : '', ()=>{
        onTabClick(4);
        onAlarmTabSecretClick === null || onAlarmTabSecretClick === void 0 ? void 0 : onAlarmTabSecretClick();
    }, showRightScroll ? 'visible' : '', debugPanel !== null && debugPanel !== void 0 ? debugPanel : (0, $ci0wX.nothing), tabContent);
}



/**
 * Utility functions for cleaning up configuration objects
 */ /**
 * Removes empty arrays from a configuration object
 * @param config - The configuration object to clean
 * @param key - The key to check for empty arrays
 */ function $2294891ef4a556a4$export$cad94c565c931d44(config, key) {
    const arr = config[key];
    if (Array.isArray(arr) && !arr.length) delete config[key];
}
function $2294891ef4a556a4$export$4e25f33241712942(config, key) {
    const obj = config[key];
    if (!obj || typeof obj !== 'object') return;
    const record = obj;
    for (const k of Object.keys(record)){
        if (!record[k]) delete record[k];
        $2294891ef4a556a4$export$cad94c565c931d44(record, k);
    }
    if (!Object.keys(obj).length) delete config[key];
}



var $5R2d0 = parcelRequire("5R2d0");

function $0bc175ba06f09633$export$57ed763a527776f2(element, config) {
    if (!config) return;
    // Clean default values
    if (config.sensor_layout === 'default') delete config.sensor_layout;
    // Clean up undefined entity field
    if (config.entity === undefined) delete config.entity;
    // Clean up empty arrays
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'features');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'entities');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'lights');
    (0, $2294891ef4a556a4$export$cad94c565c931d44)(config, 'sensor_classes');
    // Clean empty strings from entity configs
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'entity');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'entities');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'lights');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'sensors');
    // Clean nested objects
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'background');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'thresholds');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'occupancy');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'smoke');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'gas');
    (0, $2294891ef4a556a4$export$4e25f33241712942)(config, 'water');
    (0, $5R2d0.fireEvent)(element, 'config-changed', {
        config: config
    });
}


/**
 * @file Sub-element Change Handler Utilities
 * @description Utility functions for handling sub-element configuration changes in the editor.
 */ 
var $kJycS = parcelRequire("kJycS");

var $1izJ2 = parcelRequire("1izJ2");
/**
 * Normalizes a value to either a string or EntityConfig
 */ function $f02a0f7965e0b168$var$normalizeEntityValue(value) {
    if (!value) return undefined;
    return value;
}
function $f02a0f7965e0b168$export$12af996a8c28e0e9(config, value) {
    if (!value) return {
        config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
            entity: undefined
        }),
        shouldGoBack: true
    };
    const normalizedValue = $f02a0f7965e0b168$var$normalizeEntityValue(value);
    return {
        config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
            entity: normalizedValue
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$89654eeaac3a5675(config, value, index) {
    const newConfigEntities = (config.entities || []).concat();
    if (!value) {
        newConfigEntities.splice(index, 1);
        return {
            config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
                entities: newConfigEntities
            }),
            shouldGoBack: true
        };
    }
    const normalizedValue = $f02a0f7965e0b168$var$normalizeEntityValue(value);
    newConfigEntities[index] = normalizedValue;
    return {
        config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
            entities: newConfigEntities
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$a9959ef3c8b3dcec(config, value, index) {
    const newConfigSensors = (config.sensors || []).concat();
    if (!value) {
        newConfigSensors.splice(index, 1);
        return {
            config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
                sensors: newConfigSensors
            }),
            shouldGoBack: true
        };
    }
    // Sensors can be strings or SensorConfig (which extends BaseEntityConfig)
    const normalizedValue = typeof value === 'string' ? value : value;
    newConfigSensors[index] = normalizedValue;
    return {
        config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
            sensors: newConfigSensors
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$599599e7109cb02(config, value, index) {
    const newConfigLights = (config.lights || []).concat();
    if (!value) {
        newConfigLights.splice(index, 1);
        return {
            config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
                lights: newConfigLights
            }),
            shouldGoBack: true
        };
    }
    // Lights can be strings or LightConfigObject
    // If it's a string, use it directly
    // If it's a LightConfigObject (has type property), use it as object
    // If it's an EntityConfig (has label/attribute/icon/etc but no type), extract entity_id as string
    let lightConfig;
    if (typeof value === 'string') lightConfig = value;
    else if ('type' in value) {
        // It's a LightConfigObject - use it as is, but simplify to string if type is undefined
        const lightObj = (0, $kJycS._)({
            entity_id: value.entity_id
        }, value.type ? {
            type: value.type
        } : {});
        // If type is not set, simplify to just the entity_id string
        lightConfig = lightObj.type ? lightObj : lightObj.entity_id;
    } else // It's an EntityConfig (has label/attribute/icon/etc but no type) - extract just entity_id as string
    lightConfig = value.entity_id;
    newConfigLights[index] = lightConfig;
    return {
        config: (0, $1izJ2._)((0, $kJycS._)({}, config), {
            lights: newConfigLights
        }),
        shouldGoBack: false
    };
}
function $f02a0f7965e0b168$export$879d6ba342fa9eda(config, value, subElementConfig, currentTab) {
    const { field: field, index: index } = subElementConfig;
    // Handle single entity field (from tab 0)
    if (field === 'entities' && currentTab === 0) return $f02a0f7965e0b168$export$12af996a8c28e0e9(config, value);
    // Handle entities array (from tab 1)
    if (field === 'entities' && currentTab === 1) return $f02a0f7965e0b168$export$89654eeaac3a5675(config, value, index);
    // Handle sensors array (from tab 3)
    if (field === 'entities' && currentTab === 3) return $f02a0f7965e0b168$export$a9959ef3c8b3dcec(config, value, index);
    // Handle lights array
    if (field === 'lights') return $f02a0f7965e0b168$export$599599e7109cb02(config, value, index);
    // Default: no change
    return {
        config: config,
        shouldGoBack: false
    };
}


/**
 * Updates scroll indicators based on container scroll position
 * @param container - The scrollable container element
 * @returns Object with showLeftScroll and showRightScroll boolean values
 */ function $e3c4dcc70c15e57e$export$b08e81f6b8074e1b(container) {
    if (!container) return {
        showLeftScroll: false,
        showRightScroll: false
    };
    const { scrollLeft: scrollLeft, scrollWidth: scrollWidth, clientWidth: clientWidth } = container;
    // Show left indicator if scrolled right
    const showLeftScroll = scrollLeft > 5;
    // Show right indicator if there's more content to the right
    const showRightScroll = scrollLeft < scrollWidth - clientWidth - 5;
    return {
        showLeftScroll: showLeftScroll,
        showRightScroll: showRightScroll
    };
}



var $1k7sd = parcelRequire("1k7sd");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d6d54e2212c78dd0$export$61db76a97f26b7e1 = {
    INITIAL: 0,
    PENDING: 1,
    COMPLETE: 2,
    ERROR: 3
}, $d6d54e2212c78dd0$export$d4c72bab9d6cc13a = Symbol();
class $d6d54e2212c78dd0$export$2dea7024bcdd7731 {
    get taskComplete() {
        return this.t || (1 === this.i ? this.t = new Promise((t, s)=>{
            this.o = t, this.h = s;
        }) : 3 === this.i ? this.t = Promise.reject(this.l) : this.t = Promise.resolve(this.u)), this.t;
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
        var _this_q;
        let s, h;
        t !== null && t !== void 0 ? t : t = this.T(), this.O = t, 1 === this.i ? (_this_q = this.q) === null || _this_q === void 0 ? void 0 : _this_q.abort() : (this.t = void 0, this.o = void 0, this.h = void 0), this.i = 1, "afterUpdate" === this.autoRun ? queueMicrotask(()=>this._.requestUpdate()) : this._.requestUpdate();
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
            if (s === $d6d54e2212c78dd0$export$d4c72bab9d6cc13a) this.i = 0;
            else {
                if (!1 === e) {
                    var _this_o, _this;
                    try {
                        var _this_k, _this1;
                        (_this_k = (_this1 = this).k) === null || _this_k === void 0 ? void 0 : _this_k.call(_this1, s);
                    } catch (e) {}
                    this.i = 2, (_this_o = (_this = this).o) === null || _this_o === void 0 ? void 0 : _this_o.call(_this, s);
                } else {
                    var _this_h, _this2;
                    try {
                        var _this_A, _this3;
                        (_this_A = (_this3 = this).A) === null || _this_A === void 0 ? void 0 : _this_A.call(_this3, h);
                    } catch (e) {}
                    this.i = 3, (_this_h = (_this2 = this).h) === null || _this_h === void 0 ? void 0 : _this_h.call(_this2, h);
                }
                this.u = s, this.l = h;
            }
            this._.requestUpdate();
        }
    }
    abort(t) {
        var _this_q;
        1 === this.i && ((_this_q = this.q) === null || _this_q === void 0 ? void 0 : _this_q.abort(t));
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
                var _t_initial;
                return (_t_initial = t.initial) === null || _t_initial === void 0 ? void 0 : _t_initial.call(t);
            case 1:
                var _t_pending;
                return (_t_pending = t.pending) === null || _t_pending === void 0 ? void 0 : _t_pending.call(t);
            case 2:
                var _t_complete;
                return (_t_complete = t.complete) === null || _t_complete === void 0 ? void 0 : _t_complete.call(t, this.value);
            case 3:
                var _t_error;
                return (_t_error = t.error) === null || _t_error === void 0 ? void 0 : _t_error.call(t, this.error);
            default:
                throw Error("Unexpected status: " + this.i);
        }
    }
    constructor(t, s, i){
        var _this_T, _this;
        this.p = 0, this.i = 0, (this._ = t).addController(this);
        const h = "object" == typeof s ? s : {
            task: s,
            args: i
        };
        var _h_argsEqual, _h_autoRun;
        this.v = h.task, this.j = h.args, this.m = (_h_argsEqual = h.argsEqual) !== null && _h_argsEqual !== void 0 ? _h_argsEqual : $d6d54e2212c78dd0$export$41b40a0c6412e2a2, this.k = h.onComplete, this.A = h.onError, this.autoRun = (_h_autoRun = h.autoRun) !== null && _h_autoRun !== void 0 ? _h_autoRun : !0, "initialValue" in h && (this.u = h.initialValue, this.i = 2, this.O = (_this_T = (_this = this).T) === null || _this_T === void 0 ? void 0 : _this_T.call(_this));
    }
}
const $d6d54e2212c78dd0$export$41b40a0c6412e2a2 = (s, i)=>s === i || s.length === i.length && s.every((s, h)=>!(0, $1k7sd.notEqual)(s, i[h]));





var $dTmXl = parcelRequire("dTmXl");
parcelRequire("fPVm8");
var $ci0wX = parcelRequire("ci0wX");
var $2r9I1 = parcelRequire("2r9I1");
parcelRequire("jcMWt");
var $lYE5o = parcelRequire("lYE5o");

parcelRequire("fPVm8");
var $2SS2a = parcelRequire("2SS2a");
let $500688a290281052$var$_ = (t)=>t, $500688a290281052$var$t;
const $500688a290281052$export$9dd6ff9ea0189349 = (0, $2SS2a.css)($500688a290281052$var$t || ($500688a290281052$var$t = $500688a290281052$var$_`
  .card-config {
    display: flex;
    flex-direction: column;
  }

  .tab-bar-wrapper {
    position: relative;
    border-bottom: 1px solid var(--divider-color);
  }

  .tab-bar-container {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin; /* Firefox */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }

  /* Scroll hint gradients */
  .scroll-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-indicator.visible {
    opacity: 1;
  }

  .scroll-indicator-left {
    left: 0;
    background: linear-gradient(
      to right,
      var(--card-background-color, var(--primary-background-color)) 0%,
      transparent 100%
    );
  }

  .scroll-indicator-right {
    right: 0;
    background: linear-gradient(
      to left,
      var(--card-background-color, var(--primary-background-color)) 0%,
      transparent 100%
    );
  }

  .scroll-arrow {
    width: 20px;
    height: 20px;
    fill: var(--primary-text-color);
    opacity: 0.6;
    filter: drop-shadow(0 0 2px var(--card-background-color));
  }

  /* Custom scrollbar styling for Chrome, Safari and Opera */
  .tab-bar-container::-webkit-scrollbar {
    height: 4px;
  }

  .tab-bar-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .tab-bar-container::-webkit-scrollbar-thumb {
    background: var(--divider-color);
    border-radius: 2px;
  }

  .tab-bar-container::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-text-color);
  }

  .custom-tab-bar {
    display: flex;
    min-width: min-content;
    gap: 0;
  }

  .custom-tab {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    min-width: 72px;
    padding: 0 16px;
    text-transform: uppercase;
    transition:
      border-color 0.2s ease,
      color 0.2s ease;
    white-space: nowrap;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-tab:hover {
    color: var(--primary-color);
  }

  .custom-tab.active {
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
  }

  .custom-tab:focus {
    outline: none;
  }

  .custom-tab:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  ha-form {
    padding: 16px 0;
  }

  .entities-tab {
    padding: 16px 0;
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  .info-header {
    padding: 16px;
    background-color: var(--info-background-color, rgba(33, 150, 243, 0.1));
    border-left: 4px solid var(--info-color, var(--primary-color));
    border-radius: 4px;
    color: var(--primary-text-color);
    font-size: 0.9em;
    line-height: 1.5;
  }

  ha-expansion-panel {
    margin-top: 10px;
    display: block;
    --expansion-panel-content-padding: 0;
    border-radius: var(--ha-border-radius-md);
    --ha-card-border-radius: var(--ha-border-radius-md);
  }

  .thresholds-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .thresholds-title {
    font-weight: 500;
  }

  .thresholds-section {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .debug-panel {
    margin: 8px 0 0;
    --expansion-panel-summary-padding: 0 12px;
    --expansion-panel-content-padding: 0 12px;
    border-color: var(--warning-color, #ff9800);
  }

  .debug-panel-header {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    font-weight: 500;
    color: var(--warning-color, #ff9800);
  }

  .debug-panel-header ha-icon-button {
    margin-left: auto;
  }

  .debug-panel-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .debug-panel-hint {
    margin: 0;
    font-size: 0.85em;
    line-height: 1.4;
    color: var(--secondary-text-color);
  }

  .debug-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .debug-preset {
    appearance: none;
    margin: 0;
    padding: 6px 14px;
    border: 1px solid var(--divider-color);
    border-radius: var(--ha-border-radius-sm, 4px);
    background: var(--card-background-color, var(--primary-background-color));
    color: var(--primary-color);
    cursor: pointer;
    font: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease,
      color 0.15s ease,
      box-shadow 0.15s ease;
  }

  .debug-preset:hover {
    border-color: var(--primary-color);
    background: rgba(var(--rgb-primary-color), 0.12);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  }

  .debug-preset:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .debug-preset.active {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .debug-preset.active:hover {
    filter: brightness(1.05);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .debug-yaml {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: var(--code-editor-background-color, rgba(0, 0, 0, 0.05));
    border-radius: var(--ha-border-radius-sm, 4px);
  }

  .debug-yaml code {
    font-family: var(--code-font-family, monospace);
    font-size: 0.8em;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .debug-copy-yaml {
    appearance: none;
    align-self: flex-start;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: var(--primary-color);
    cursor: pointer;
    font: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .debug-copy-yaml:hover {
    color: var(--light-primary-color, var(--primary-color));
    filter: brightness(1.15);
  }

  .debug-copy-yaml:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 2px;
  }
`));


let $0f35678ae26800e3$var$_ = (t)=>t, $0f35678ae26800e3$var$t, $0f35678ae26800e3$var$t1, $0f35678ae26800e3$var$t2, $0f35678ae26800e3$var$t3, $0f35678ae26800e3$var$t4, $0f35678ae26800e3$var$t5;
class $0f35678ae26800e3$export$be1ca41262ce011e extends (0, $2r9I1.LitElement) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $500688a290281052$export$9dd6ff9ea0189349;
    }
    /**
   * renders the lit element card
   * @returns The rendered HTML template
   */ render() {
        (0, $dTmXl.d)(this._config, 'room-summary-card-editor', 'render');
        if (!this.hass || !this._config) return 0, $ci0wX.nothing;
        // Show sub-element editor if active
        if (this._subElementEditorConfig) return (0, $ci0wX.html)($0f35678ae26800e3$var$t || ($0f35678ae26800e3$var$t = $0f35678ae26800e3$var$_`
        <room-summary-sub-element-editor
          .hass=${0}
          .config=${0}
          .cardConfig=${0}
          @go-back=${0}
          @config-changed=${0}
        ></room-summary-sub-element-editor>
      `), this.hass, this._subElementEditorConfig, this._config, this._goBack, this._handleSubElementChanged);
        return (0, $82f367c6f871e29a$export$c12c36dfee4d12e2)({
            currentTab: this._currentTab,
            showLeftScroll: this._showLeftScroll,
            showRightScroll: this._showRightScroll,
            tabContainerRef: this._tabContainerRef,
            onScroll: ()=>{
                const indicators = (0, $e3c4dcc70c15e57e$export$b08e81f6b8074e1b)(this._tabContainerRef.value);
                this._showLeftScroll = indicators.showLeftScroll;
                this._showRightScroll = indicators.showRightScroll;
            },
            onTabClick: (index)=>{
                this._currentTab = index;
            },
            onDebugMenuToggle: ()=>this._toggleDebugMenu(),
            onAlarmTabSecretClick: ()=>this._handleAlarmTabSecretClick(),
            debugPanel: this._debugMenuUnlocked ? (0, $adbc1d2930ef985d$export$486f5d7e7aec4cd8)({
                hass: this.hass,
                config: this._config,
                onConfigChanged: (config)=>{
                    this._config = config;
                    (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, config);
                },
                onClose: ()=>{
                    this._debugMenuUnlocked = false;
                }
            }) : undefined,
            tabContent: this._renderTabContent()
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Update scroll indicators after render
        if (changedProperties.has('_config') || changedProperties.has('_currentTab')) setTimeout(()=>{
            const indicators = (0, $e3c4dcc70c15e57e$export$b08e81f6b8074e1b)(this._tabContainerRef.value);
            this._showLeftScroll = indicators.showLeftScroll;
            this._showRightScroll = indicators.showRightScroll;
        }, 100);
    }
    _renderTabContent() {
        // Main tab (tab 0)
        if (this._currentTab === 0) return this._getEntitiesTask.render({
            initial: ()=>(0, $ci0wX.nothing),
            pending: ()=>(0, $ci0wX.nothing),
            complete: (value)=>{
                return (0, $2753b9fff4eabaa1$export$3aced84aff4edb7f)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this),
                    onEntityRowChanged: this._entityRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $ci0wX.html)($0f35678ae26800e3$var$t1 || ($0f35678ae26800e3$var$t1 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Entities tab (tab 1)
        if (this._currentTab === 1) return this._getEntitiesTask.render({
            initial: ()=>(0, $ci0wX.nothing),
            pending: ()=>(0, $ci0wX.nothing),
            complete: (value)=>{
                return (0, $b76dc3474f73e549$export$633a60486668629e)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this),
                    onEntitiesRowChanged: this._entitiesRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $ci0wX.html)($0f35678ae26800e3$var$t2 || ($0f35678ae26800e3$var$t2 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Lights tab (tab 2)
        if (this._currentTab === 2) return this._getEntitiesTask.render({
            initial: ()=>(0, $ci0wX.nothing),
            pending: ()=>(0, $ci0wX.nothing),
            complete: (value)=>{
                return (0, $f2a06477c32045b7$export$eb43fb94789f71b0)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this),
                    onLightsRowChanged: this._lightsRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $ci0wX.html)($0f35678ae26800e3$var$t3 || ($0f35678ae26800e3$var$t3 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Sensors tab (tab 3)
        if (this._currentTab === 3) return this._getEntitiesTask.render({
            initial: ()=>(0, $ci0wX.nothing),
            pending: ()=>(0, $ci0wX.nothing),
            complete: (value)=>{
                return (0, $338d9b587813c56d$export$359e193b1547165)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    sensorClasses: value.sensorClasses,
                    onValueChanged: this._valueChanged.bind(this),
                    onSensorsRowChanged: this._sensorsRowChanged.bind(this),
                    onEditDetailElement: this._editDetailElement.bind(this)
                });
            },
            error: (error)=>(0, $ci0wX.html)($0f35678ae26800e3$var$t4 || ($0f35678ae26800e3$var$t4 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        // Occupancy tab (tab 4)
        if (this._currentTab === 4) return this._getEntitiesTask.render({
            initial: ()=>(0, $ci0wX.nothing),
            pending: ()=>(0, $ci0wX.nothing),
            complete: (value)=>{
                return (0, $733e085d0161322d$export$71d9f56309acfb74)({
                    hass: this.hass,
                    config: this._config,
                    entities: value.entities,
                    onValueChanged: this._valueChanged.bind(this)
                });
            },
            error: (error)=>(0, $ci0wX.html)($0f35678ae26800e3$var$t5 || ($0f35678ae26800e3$var$t5 = $0f35678ae26800e3$var$_`${0}`), error)
        });
        return 0, $ci0wX.nothing;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        this._config = (0, $kJycS._)({}, config);
        if (config.debug !== undefined) this._debugMenuUnlocked = true;
    }
    _valueChanged(ev) {
        const config = ev.detail.value;
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, config);
    }
    _entitiesRowChanged(ev) {
        const value = ev.detail.value;
        const field = ev.target.field;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        this._config = (0, $1izJ2._)((0, $kJycS._)({}, this._config), {
            [field]: value
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _sensorsRowChanged(ev) {
        const value = ev.detail.value;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        this._config = (0, $1izJ2._)((0, $kJycS._)({}, this._config), {
            sensors: value
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _lightsRowChanged(ev) {
        const value = ev.detail.value;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        this._config = (0, $1izJ2._)((0, $kJycS._)({}, this._config), {
            lights: value
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _entityRowChanged(ev) {
        const value = ev.detail.value;
        // Guard: only process if value is an array (from our custom component)
        // If it's a string, it's from the picker directly and should be ignored
        if (!Array.isArray(value)) return;
        // Convert array back to single entity (take first element or undefined)
        const entityValue = value.length > 0 ? value[0] : undefined;
        this._config = (0, $1izJ2._)((0, $kJycS._)({}, this._config), {
            entity: entityValue
        });
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _editDetailElement(ev) {
        const config = (0, $kJycS._)({}, ev.detail.subElementConfig);
        // Set type to 'sensor' if we're on the sensors tab (tab 3)
        if (this._currentTab === 3 && config.field === 'entities') config.type = 'sensor';
        // Set type to 'light' if we're on the lights tab (tab 2)
        if (this._currentTab === 2 && config.field === 'lights') config.type = 'light';
        // Set isMainEntity to true if we're on the main tab (tab 0) and field is 'entities'
        // Main entity is edited on tab 0, entities list is edited on tab 1
        config.isMainEntity = this._currentTab === 0 && config.field === 'entities';
        this._subElementEditorConfig = config;
    }
    _handleSubElementChanged(ev) {
        ev.stopPropagation();
        if (!this._config || !this.hass || !this._subElementEditorConfig) return;
        const value = ev.detail.config;
        const result = (0, $f02a0f7965e0b168$export$879d6ba342fa9eda)(this._config, value, this._subElementEditorConfig, this._currentTab);
        this._config = result.config;
        // Update sub-element editor config with the new value
        this._subElementEditorConfig = (0, $1izJ2._)((0, $kJycS._)({}, this._subElementEditorConfig), {
            elementConfig: value
        });
        if (result.shouldGoBack) this._goBack();
        ev.detail.value = this._config;
        (0, $0bc175ba06f09633$export$57ed763a527776f2)(this, this._config);
    }
    _goBack() {
        this._subElementEditorConfig = undefined;
    }
    _toggleDebugMenu() {
        this._debugMenuUnlocked = !this._debugMenuUnlocked;
    }
    _handleAlarmTabSecretClick() {
        this._alarmTabClickCount += 1;
        globalThis.clearTimeout(this._alarmTabClickTimer);
        this._alarmTabClickTimer = globalThis.setTimeout(()=>{
            this._alarmTabClickCount = 0;
        }, 600);
        if (this._alarmTabClickCount >= 3) {
            this._alarmTabClickCount = 0;
            this._toggleDebugMenu();
        }
    }
    constructor(...args){
        super(...args), /**
   * Current active tab index
   */ this._currentTab = 0, /**
   * Scroll state for tab container
   */ this._showLeftScroll = false, this._showRightScroll = false, /**
   * Reference to the tab bar container for scroll detection
   */ this._tabContainerRef = (0, $94ecd7aeca8c09b3$export$7d1e3a5e95ceca43)(), this._debugMenuUnlocked = false, this._alarmTabClickCount = 0, /**
   * Task that fetches the entities asynchronously
   * Uses the Home Assistant web sockets Promise
   */ this._getEntitiesTask = new (0, $d6d54e2212c78dd0$export$2dea7024bcdd7731)(this, {
            task: async ([area])=>{
                if (!area) return {
                    sensorClasses: [],
                    entities: []
                };
                const sensorClasses = await (0, $ebeb8808033cc92f$export$aff8e21126109cb8)(this.hass, area);
                const entities = (0, $ebeb8808033cc92f$export$5c1d9ab613e2f923)(this.hass, area);
                return {
                    sensorClasses: sensorClasses,
                    entities: entities
                };
            },
            args: ()=>{
                var _this__config;
                return [
                    (_this__config = this._config) === null || _this__config === void 0 ? void 0 : _this__config.area
                ];
            }
        });
    }
}
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_config", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_currentTab", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_showLeftScroll", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_showRightScroll", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_subElementEditorConfig", void 0);
(0, $2QgUB.__decorate)([
    (0, $lYE5o.state)()
], $0f35678ae26800e3$export$be1ca41262ce011e.prototype, "_debugMenuUnlocked", void 0);




const $e8d2a89e60068f3e$export$eef4717271055433 = (hass, entityId)=>{
    const entity = (0, $370eb512b0573832$export$fcf7c33d7fd02301)(hass.entities, entityId);
    if (!entity) return null;
    const device = entity.device_id ? (0, $62a596c6a9bc2e04$export$30c823bc834d6ab4)(hass.devices, entity.device_id) : undefined;
    var _entity_area_id;
    const area = (_entity_area_id = entity.area_id) !== null && _entity_area_id !== void 0 ? _entity_area_id : device === null || device === void 0 ? void 0 : device.area_id;
    if (!area) return null;
    return [
        {
            label: 'Room summary',
            config: {
                type: 'custom:room-summary-card',
                area: area
            }
        },
        {
            label: 'Room summary with featured entity',
            config: {
                type: 'custom:room-summary-card',
                area: area,
                entity: entityId
            }
        }
    ];
};


var $1e8946f92a148373$exports = {};
"use strict";
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/lovelace_custom_cards.ts
 */ Object.defineProperty($1e8946f92a148373$exports, "__esModule", {
    value: true
});
$1e8946f92a148373$exports.customCards = void 0;
const $1e8946f92a148373$var$customCardsWindow = globalThis;
if (!('customCards' in $1e8946f92a148373$var$customCardsWindow)) $1e8946f92a148373$var$customCardsWindow.customCards = [];
$1e8946f92a148373$exports.customCards = $1e8946f92a148373$var$customCardsWindow.customCards;


var $649c526c16197344$exports = {};
$649c526c16197344$exports = JSON.parse("{\"name\":\"room-summary-card\",\"version\":\"2.0.0\",\"author\":{\"name\":\"Patrick Masters\",\"url\":\"https://curiouscat.consulting/projects/ha-room-summary-card?utm_source=github-room-summary-card&utm_medium=package-metadata&utm_campaign=oss-presence&utm_content=author-url\"},\"license\":\"ISC\",\"prettier\":\"@homeassistant-extras/config/prettier\",\"description\":\"Custom card Home Assistant which can show a summary of room entities.\",\"homepage\":\"https://homeassistant-extras.github.io/room-summary-card/\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/homeassistant-extras/room-summary-card.git\"},\"bugs\":{\"url\":\"https://github.com/homeassistant-extras/room-summary-card/issues\"},\"source\":\"src/index.ts\",\"module\":\"dist/room-summary-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"@parcel/resolver-default\":{\"packageExports\":true},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\",\"lint\":\"eslint .\",\"lint:fix\":\"eslint . --fix\",\"format\":\"prettier --write .\",\"pass\":\"yarn format && yarn typecheck && yarn lint && yarn test\",\"typecheck\":\"tsc --noEmit && tsc -p tsconfig.test.json --noEmit\",\"test\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha\",\"test:coverage\":\"nyc yarn test\",\"test:watch\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha --watch\",\"test:e2e\":\"playwright test\",\"test:e2e:auth\":\"source .env && npx playwright codegen --save-storage=$PLAYWRIGHT_HA_STORAGE_STATE $PLAYWRIGHT_HA_ORIGIN\",\"update\":\"npx npm-check-updates -u && yarn install\"},\"devDependencies\":{\"@eslint/js\":\"^10.0.1\",\"@homeassistant-extras/config\":\"^0.3.1\",\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@open-wc/testing\":\"^4.0.0\",\"@parcel/transformer-inline-string\":\"^2.16.4\",\"@playwright/test\":\"^1.61.1\",\"@testing-library/dom\":\"^10.4.1\",\"@trivago/prettier-plugin-sort-imports\":\"^6.0.2\",\"@types/chai\":\"^5.2.3\",\"@types/jsdom\":\"^28.0.3\",\"@types/mocha\":\"^10.0.10\",\"@types/node\":\"^26.1.1\",\"@types/sinon\":\"^22.0.0\",\"chai\":\"^6.2.2\",\"eslint\":\"^10.7.0\",\"eslint-plugin-lit\":\"^2.3.1\",\"eslint-plugin-wc\":\"^3.1.0\",\"globals\":\"^17.7.0\",\"jsdom\":\"^29.1.1\",\"mocha\":\"^11.7.6\",\"nyc\":\"^18.0.0\",\"parcel\":\"^2.16.4\",\"prettier\":\"3.9.5\",\"prettier-plugin-organize-imports\":\"^4.3.0\",\"sinon\":\"^22.0.0\",\"ts-node\":\"^10.9.2\",\"tsconfig-paths\":\"^4.2.0\",\"typescript\":\"^6.0.3\",\"typescript-eslint\":\"^8.64.0\"},\"dependencies\":{\"@homeassistant-extras/hass\":\"^0.6.0\",\"@lit/task\":\"^1.0.3\",\"async-memoize-one\":\"^1.2.1\",\"fast-deep-equal\":\"^3.1.3\",\"lit\":\"^3.3.3\",\"memoize-one\":\"^6.0.0\"}}");


// Register the custom element with the browser
customElements.define('room-summary-card', (0, $01f4c5d41a54ca3c$export$90a7a1e0555e0bc9));
customElements.define('room-summary-card-editor', (0, $0f35678ae26800e3$export$be1ca41262ce011e));
customElements.define('sensor-collection', (0, $0a8df7eca34388c3$export$265e5e10b1eff6c6));
customElements.define('entity-collection', (0, $b96a40707b142c90$export$b15c5e7ddecda86e));
customElements.define('entity-slider', (0, $21a9ea85b7e2278b$export$ec4599f0917a20c8));
customElements.define('room-state-icon', (0, $21884f49b48db948$export$8063c4212d705050));
customElements.define('room-badge', (0, $7191b93f31a09a17$export$37acb3580601e69a));
customElements.define('room-summary-entity-detail-editor', (0, $43564874ab3ed043$export$5062b3ea8745e421));
customElements.define('room-summary-entities-row-editor', (0, $8e72cbf99a87388e$export$12e5e4192ee344c7));
customElements.define('room-summary-states-row-editor', (0, $68ce0c44dd114f11$export$806f47322f907427));
customElements.define('room-summary-thresholds-row-editor', (0, $460e8ac2e6479550$export$b79a6ddbd7dc2198));
customElements.define('room-summary-badge-row-editor', (0, $f0a2b09abb3b359a$export$fe6c0dc6457f5df9));
customElements.define('room-summary-sub-element-editor', (0, $ffd7d578a1e62621$export$ddca213b44fe1587));
// Register the card with Home Assistant's custom card registry
(0, $1e8946f92a148373$exports.customCards) === null || (0, $1e8946f92a148373$exports.customCards) === void 0 ? void 0 : (0, $1e8946f92a148373$exports.customCards).push({
    // Unique identifier for the card type
    type: 'room-summary-card',
    // Display name in the UI
    name: 'Room Summary',
    // Card description for the UI
    description: 'A card to summarize the status of a room, including temperature, humidity, and any problem entities.',
    // Show a preview of the card in the UI
    preview: true,
    // URL for the card's documentation
    documentationURL: 'https://github.com/homeassistant-extras/room-summary-card',
    getEntitySuggestion: // Card-picker entity suggestion hook (Home Assistant 2026.6+)
    $e8d2a89e60068f3e$export$eef4717271055433
});
console.info(`%c\u{1F431} Poat's Tools: room-summary-card - ${(0, $649c526c16197344$exports.version)}`, 'color: #CFC493;');


//# sourceMappingURL=room-summary-card.js.map
