const silkedit = require('silkedit');
const yaml = require('js-yaml');

module.exports = {
	activate: function() {
	},

	commands: {
		"validate": () => {
			const editView = silkedit.App.activeTextEditView()
			if (editView != null) {
			  try {
			    yaml.safeLoad(editView.text())
			    silkedit.alert(silkedit.tr("yaml-validator:valid", "Valid YAML content!"))
			  } catch(e) {
			    silkedit.alert(silkedit.tr("yaml-validator:invalid", "Invalid YAML content!"))
			  }
			}
		}
	}
}
