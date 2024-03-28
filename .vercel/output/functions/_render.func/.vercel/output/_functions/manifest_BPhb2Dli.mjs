import { Z as bold, _ as red, $ as yellow, a0 as dim, a1 as blue } from './chunks/astro_D1VOB1hM.mjs';
import 'clsx';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.4.4_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/en/about","isIndex":false,"type":"page","pattern":"^\\/en\\/About\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"About","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/About.astro","pathname":"/en/About","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BJ6SW67C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#hero-section[data-astro-cid-shwxrd6l]{opacity:0;animation:fadeIn .8s ease-in-out forwards}\n"}],"routeData":{"route":"/en/index copy","isIndex":false,"type":"page","pattern":"^\\/en\\/index copy\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"index copy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index copy.astro","pathname":"/en/index copy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":".a[data-astro-cid-hsm7kq5b]{color:#000;underline:#000 2px}\n"}],"routeData":{"route":"/en/projects","isIndex":false,"type":"page","pattern":"^\\/en\\/Projects\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"Projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/Projects.astro","pathname":"/en/Projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/en/request","isIndex":false,"type":"page","pattern":"^\\/en\\/request\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"request","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/request.astro","pathname":"/en/request","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#hero-section[data-astro-cid-shwxrd6l]{opacity:0;animation:fadeIn .8s ease-in-out forwards}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/fr/apropos","isIndex":false,"type":"page","pattern":"^\\/fr\\/Apropos\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"Apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/Apropos.astro","pathname":"/fr/Apropos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/fr/demande","isIndex":false,"type":"page","pattern":"^\\/fr\\/demande\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"demande","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/demande.astro","pathname":"/fr/demande","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":".a[data-astro-cid-naqqqebl]{color:#000;underline:#000 2px}\n"}],"routeData":{"route":"/fr/projets","isIndex":false,"type":"page","pattern":"^\\/fr\\/Projets\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"Projets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/Projets.astro","pathname":"/fr/Projets","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BJ6SW67C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#hero-section[data-astro-cid-shwxrd6l]{opacity:0;animation:fadeIn .8s ease-in-out forwards}\n"}],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/pt/pedido","isIndex":false,"type":"page","pattern":"^\\/pt\\/pedido\\/?$","segments":[[{"content":"pt","dynamic":false,"spread":false}],[{"content":"pedido","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pt/pedido.astro","pathname":"/pt/pedido","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":".a[data-astro-cid-xtkrc4yt]{color:#000;underline:#000 2px}\n"}],"routeData":{"route":"/pt/projetos","isIndex":false,"type":"page","pattern":"^\\/pt\\/Projetos\\/?$","segments":[[{"content":"pt","dynamic":false,"spread":false}],[{"content":"Projetos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pt/Projetos.astro","pathname":"/pt/Projetos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"}],"routeData":{"route":"/pt/sobre","isIndex":false,"type":"page","pattern":"^\\/pt\\/Sobre\\/?$","segments":[[{"content":"pt","dynamic":false,"spread":false}],[{"content":"Sobre","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pt/Sobre.astro","pathname":"/pt/Sobre","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BJ6SW67C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#hero-section[data-astro-cid-shwxrd6l]{opacity:0;animation:fadeIn .8s ease-in-out forwards}\n"}],"routeData":{"route":"/pt","isIndex":true,"type":"page","pattern":"^\\/pt\\/?$","segments":[[{"content":"pt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pt/index.astro","pathname":"/pt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ0CDjUl.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/About.hs9auKQb.css"},{"type":"inline","content":"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#hero-section[data-astro-cid-shwxrd6l]{opacity:0;animation:fadeIn .8s ease-in-out forwards}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://luna-landing-rust.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/About.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/Projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index copy.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/request.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/Apropos.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/Projets.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/demande.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Projetos.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Sobre.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/pedido.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/fr/Apropos.astro":"chunks/pages/Apropos_Ds89pBGG.mjs","/src/pages/pt/Projetos.astro":"chunks/pages/Projetos_DcLWUd6K.mjs","/src/pages/fr/Projets.astro":"chunks/pages/Projets_3pf8Ae3X.mjs","/src/pages/pt/Sobre.astro":"chunks/pages/Sobre_CZnYgAEM.mjs","/src/pages/fr/demande.astro":"chunks/pages/demande_BB3FvnM6.mjs","/node_modules/.pnpm/astro@4.4.4_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BnQ7jVvD.mjs","/src/pages/pt/pedido.astro":"chunks/pages/pedido_CWdUG4nR.mjs","/src/pages/en/request.astro":"chunks/pages/request_I4TIQhQD.mjs","\u0000@astrojs-manifest":"manifest_BPhb2Dli.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/node_modules/.pnpm/@astrojs+react@3.1.0_@types+react-dom@18.2.22_@types+react@18.2.73_react-dom@18.2.0_react@18.2.0_vite@5.1.4/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.4.4_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_P4BwqgtL.mjs","\u0000@astro-page:src/pages/en/About@_@astro":"chunks/About_i8Y2DiLx.mjs","\u0000@astro-page:src/pages/en/index copy@_@astro":"chunks/index copy_BVIMdOPH.mjs","\u0000@astro-page:src/pages/en/Projects@_@astro":"chunks/Projects_D4yi2Jme.mjs","\u0000@astro-page:src/pages/en/request@_@astro":"chunks/request_C7aDMvJz.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"chunks/index_CUK1KPcz.mjs","\u0000@astro-page:src/pages/fr/Apropos@_@astro":"chunks/Apropos_CEfZgkU1.mjs","\u0000@astro-page:src/pages/fr/demande@_@astro":"chunks/demande_BgJNztLr.mjs","\u0000@astro-page:src/pages/fr/Projets@_@astro":"chunks/Projets_BC8mdV6o.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"chunks/index_BixLcRA4.mjs","\u0000@astro-page:src/pages/pt/pedido@_@astro":"chunks/pedido_8LrmIefZ.mjs","\u0000@astro-page:src/pages/pt/Projetos@_@astro":"chunks/Projetos_BL8xSkX-.mjs","\u0000@astro-page:src/pages/pt/Sobre@_@astro":"chunks/Sobre_CjKLlAap.mjs","\u0000@astro-page:src/pages/pt/index@_@astro":"chunks/index_BrmtnXsl.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CwmJTzvP.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/aurevendeneva.md":"chunks/aurevendeneva_Sn7Dp0Lq.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/dmrepairs.md":"chunks/dmrepairs_BeBIaO6x.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/electromoveis.md":"chunks/electromoveis_CCkLas18.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/lapattedekiwi.md":"chunks/lapattedekiwi_CKRq_Wll.mjs","C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/talapetsworld.md":"chunks/talapetsworld_CmKSAdNP.mjs","@/components/ui/aurora-background":"_astro/aurora-background.A9oTlJ2J.js","/astro/hoisted.js?q=0":"_astro/hoisted.DJ0CDjUl.js","/astro/hoisted.js?q=1":"_astro/hoisted.BJ6SW67C.js","@astrojs/react/client.js":"_astro/client.DURhWcR2.js","@/components/ui/macbook-scroll":"_astro/macbook-scroll.C_TwS98Q.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/rubik-latin-ext-wght-normal.dLedyG89.woff2","/_astro/rubik-cyrillic-wght-normal.B2b851D6.woff2","/_astro/rubik-hebrew-wght-normal.ByHZ5yRs.woff2","/_astro/rubik-latin-wght-normal.CfpeRlx2.woff2","/_astro/rubik-arabic-wght-normal.B1cAZTnW.woff2","/_astro/rubik-cyrillic-ext-wght-normal.CmWdqlJJ.woff2","/_astro/About.hs9auKQb.css","/aurevedeneva.png","/dmrepairs.png","/electromoveis.png","/favicon.svg","/img.png","/lapattedekiwi.png","/mockupPresta.psd","/moi.png","/rocket.webp","/seo.webp","/talapetsworld.png","/template.webp","/_astro/aurora-background.A9oTlJ2J.js","/_astro/client.DURhWcR2.js","/_astro/hoisted.BJ6SW67C.js","/_astro/hoisted.DJ0CDjUl.js","/_astro/index.CSLRt44l.js","/_astro/macbook-scroll.C_TwS98Q.js","/_astro/utils.CncOiEpe.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
