module.exports = {
	"extends": "airbnb",
	"parserOptions": {
	"ecmaVersion": 6
	},
	"env": {
		"node": true,
		"es6": true,
		"browser": true,
		"mocha": true
	},
	"rules":{
		"no-unused-vars": 0,
			 "line-break-style": 0,
       "quotes": ["error", "double",{"avoidEscape": true}],
       "quote-props": ["error", "always"],
       "no-trailing-spaces": [
         "error",
         {
           "skipBlankLines": false,
           "ignoreComments": false
         }
        ],
        "prefer-destructuring": [
          "error",
          {
            "VariableDeclarator": {
            "array": false,
            "object": false
          },
          "AssignmentExpression": {
            "array": true,
            "object": false
          }
        }, {
          "enforceForRenamedProperties": false
        }],
        "import/newline-after-import": ["error", {"count": 1}],
        "semi": 0,
        "comma-dangle": ["error", "never"]
	}
}