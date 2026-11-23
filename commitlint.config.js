export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'header-max-length': [2, 'always', 100],
    'scope-enum': [2, 'always', ['api', 'ui', 'db', 'deps']]
  }
}

// Rule format is `[level, applicability, value]`
// where level is `0` (off), `1` (warning), or `2` (error)