var yaml = require('js-yaml');

module.exports = {
	activate: function() {
	},

	commands: {
		"validate": () => {
			const editView = silk.activeView()
			if (editView != null) {
			  try {
			    yaml.safeLoad(editView.text())
			    silk.alert(silk.t("yaml-validator:valid", "Valid YAML content!"))
			  } catch(e) {
			    silk.alert(silk.t("yaml-validator:invalid", "Invalid YAML content!"))
			  }
			}
		}
	}
}
