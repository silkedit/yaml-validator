const silkedit = require('silkedit');
const yaml = require('js-yaml');

module.exports = {
	activate: function() {
	},

	commands: {
		'validate': () => {
			const textEdit = silkedit.App.activeTextEdit()
			if (textEdit != null) {
			  try {
			    yaml.safeLoad(textEdit.text)
			    silkedit.alert(silkedit.tr('valid', 'yaml-validator', 'Valid YAML content!'))
			  } catch(e) {
			    silkedit.alert(silkedit.tr('invalid', 'yaml-validator', 'Invalid YAML content!'))
			  }
			}
		}
	}
}
