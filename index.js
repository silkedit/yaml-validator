const silkedit = require('silkedit');
const yaml = require('js-yaml');

module.exports = {
	activate: function() {
	},

	commands: {
		"validate": () => {
			const editView = silkedit.API.activeTextEditView()
			if (editView != null) {
			  try {
			    yaml.safeLoad(editView.text())
			    silkedit.API.alert(silkedit.t("yaml-validator:valid", "Valid YAML content!"))
			  } catch(e) {
			    silkedit.API.alert(silkedit.t("yaml-validator:invalid", "Invalid YAML content!"))
			  }
			}
		}
	}
}
