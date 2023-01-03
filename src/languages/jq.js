/*
 * Lanaguage: jq
 * Description: jq is a lightweight and flexible command-line JSON processor.
 * Author: Glenn Jackman https://github.com/glennj
 * Website: https://github.com/stedolan/jq/wiki/jq-Language-Description
 */

export default function(hljs) {
  const JQ_IDENT = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/;
  const PUNCTUATION = {
    scope: "punctuation",
    match: /[][{}()|,;:]/,
    relevance: 0
  };
  const VARIABLE = {
    scope: 'variable',
    begin: /\$/,
    contains: [ JQ_IDENT ],
  };
  // JSON numbers are like C numbers but without octal or hex form
  const JSON_NUMBER = {
    scope: 'number',
    begin: '-?(?:\\b(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][-+]?\\d+)?)',
    relevance: 0,
  };
  // TODO how to highlight contains interpolations
  const STRING_INTERPOLATE = {
    begin: '\\(',
    end: ')'
  };
  const KEYWORDS = [
    'import', 'include', 'module',
    'as', 'label', 'break',
    'if', 'then', 'elif', 'else', 'end',
    'and', 'or', 'not',
    'try', 'catch',
  ];
  const FUNCTION_DEFINITION = {
    begin: [
      'def',
      '\\s+',
      JQ_IDENT,
      '\\s*(?:\\(.+?\\))?\\s*',
      ':',
    ],
    beginScope: {
      1: 'keyword',
      3: 'title',
      5: 'keyword',
    }
  };
  const FORMATTERS = {
    scope: 'built_in',
    match: '@',
    contains: [ 'text', 'json', 'html', 'uri', 'csv', 'tsv', 'sh', 'base64', 'base64d' ],
  };
  const BUILTINS = {
    scope: 'built_in',
    keywords: [
      'IN',
      'INDEX',
      'JOIN',
      'acos',
      'acosh',
      'add',
      'all',
      'any',
      'arrays',
      'ascii_downcase',
      'ascii_upcase',
      'asin',
      'asinh',
      'atan',
      'atan2',
      'atanh',
      'booleans',
      'bsearch',
      'builtins',
      'capture',
      'cbrt',
      'ceil',
      'combinations',
      'contains',
      'copysign',
      'cos',
      'cosh',
      'debug',
      'del',
      'delpaths',
      'drem',
      'empty',
      'endswith',
      'env',
      'erf',
      'erfc',
      'error',
      'exp',
      'exp10',
      'exp2',
      'explode',
      'expm1',
      'fabs',
      'fdim',
      'finites',
      'first',
      'flatten',
      'floor',
      'floor',
      'fma',
      'fmax',
      'fmin',
      'fmod',
      'foreach',
      'frexp',
      'from_entries',
      'fromdate',
      'fromdateiso8601',
      'fromjson',
      'fromstream',
      'gamma',
      'getpath',
      'gmtime',
      'group_by',
      'gsub',
      'halt',
      'halt_error',
      'has',
      'hypot',
      'implode',
      'in',
      'index',
      'indices',
      'infinite',
      'input',
      'input_filename',
      'input_line_number',
      'inputs',
      'inside',
      'isempty',
      'isfinite',
      'isinfinite',
      'isnan',
      'isnormal',
      'iterables',
      'j0',
      'j1',
      'jn',
      'join',
      'keys',
      'keys_unsorted',
      'last',
      'ldexp',
      'leaf_paths',
      'length',
      'lgamma',
      'limit',
      'localtime',
      'log',
      'log10',
      'log1p',
      'log2',
      'logb',
      'ltrimstr',
      'map',
      'map_values',
      'match',
      'max',
      'max_by',
      'min',
      'min_by',
      'mktime',
      'modf',
      'modulemeta',
      'nan',
      'nearbyint',
      'nextafter',
      'nexttoward',
      'normals',
      'now',
      'nth',
      'nulls',
      'numbers',
      'objects',
      'path',
      'paths',
      'pow',
      'pow10',
      'range',
      'recurse',
      'recurse_down',
      'reduce',
      'remainder',
      'reverse',
      'rindex',
      'rint',
      'round',
      'rtrimstr',
      'scalars',
      'scalb',
      'scalbln',
      'scan',
      'select',
      'setpath',
      'significand',
      'sin',
      'sinh',
      'sort',
      'sort_by',
      'split',
      'splits',
      'sqrt',
      'startswith',
      'stderr',
      'strflocaltime',
      'strftime',
      'strings',
      'strptime',
      'sub',
      'tan',
      'tanh',
      'test',
      'tgamma',
      'to_entries',
      'todate',
      'todateiso8601',
      'tojson',
      'tonumber',
      'tostream',
      'tostring',
      'transpose',
      'trunc',
      'truncate_stream',
      'type',
      'unique',
      'unique_by',
      'until',
      'utf8length',
      'values',
      'walk',
      'while',
      'with_entries',
      'y0',
      'y1',
      'yn',
    ]
  };

  return {
    name: 'jq',
    aliases: ['jq'],
    disableAutodetect: true,
    keywords: {
      keyword: KEYWORDS,
      literal: ['true', 'false', 'null'],
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      JSON_NUMBER,
      PUNCTUATION,
      FUNCTION_DEFINITION,
      VARIABLE,
      FORMATTERS,
      BUILTINS
    ],
  };
}
