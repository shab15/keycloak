
var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
	"realm": "nodejs",
	"bearer-only": true,
	"auth-server-url": "http://localhost:8080/auth/",
	"ssl-required": "none",
	"resource": "shab",
	"enable-cors": true,
	"use-resource-role-mappings": true,
	"confidential-port": 0
  };

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        return initKeycloak();
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};