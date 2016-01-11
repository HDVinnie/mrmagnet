angular.module('mrmagnet').factory('webtorrentService', function ($http, $injector) {
    "use strict";

    var WebTorrent = require('webtorrent');
    var client = new WebTorrent();

    function addMagnet (magnetUrl) {
        return client.add(magnetUrl);
    }

    function getAllTorrents () {
        return client.torrents;
    }

    function seedingFiles (file, callback) {
        return client.seed(file, callback);
    }

    return {
        addMagnet: addMagnet,
        getAllTorrents: getAllTorrents,
        seedingFiles: seedingFiles
    }
});
