/**
* nom du fichier: description
*
* Auteur :
* KHODJA Mehdi Nassim
*
* Copyright © 2019 Trend-Tech
**/

module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": ["error", "absolute-first"],
        "import/newline-after-import": "error",
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "printWidth": 120,
                "singleQuote": true,
                "useTabs": false,
                "tabWidth": 4,
                "semi": true,
                "bracketSpacing": true
            }
        ]
    },
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
    },
    "parser": "babel-eslint"
}