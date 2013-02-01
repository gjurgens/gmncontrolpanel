GMN.Server.Config = function(_options) {
	var options = {
		"server":"http://guessmynumber.jurgens.com.ar",
		"port":"80"
	}

	for(var option in _options) {
		options[option] = _options[option];
	}

	return {
		"setServer":function(server) {
			options.server = server;
		},
		"getServer":function() {
			return options.server;
		},
		"setPort":function(port) {
			options.port = port;
		},
		"getPort":function() {
			return options.port;
		},
		"setAdminPassword":function(AdminPassword) {
			options.AdminPassword = AdminPassword;
		},
		"getAdminPassword":function() {
			return options.AdminPassword;
		}
	}
}();