module.exports = {
	"roots": [
	  "<rootDir>/test"
	],
	"testEnvironment": "node",
	"testMatch": [
	  "**/__tests__/**/*.+(ts|tsx|js)",
	  "**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	"transform": {
	  "^.+\\.(ts|tsx|js)$": "ts-jest"
	}
  }