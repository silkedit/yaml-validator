const silkedit = require('silkedit');
const yaml = require('js-yaml');

module.exports = {
	activate: function() {
	},

	commands: {
		'validate': () => {
			const editView = silkedit.App.activeTextEditView()
			if (editView != null) {
			  try {
			    yaml.safeLoad(editView.text())
			    silkedit.alert(silkedit.tr('valid', 'yaml-validator', 'Valid YAML content!'))
			  } catch(e) {
			    silkedit.alert(silkedit.tr('invalid', 'yaml-validator', 'Invalid YAML content!'))
			  }
			}
		}
	}
}
