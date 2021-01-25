/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

'use strict';

ss.env.TRAVIS_JOB_NUMBER;

// We need to start fake servers, otherwise the tunnel does not start.
var fakeServers = [];
var hosts = [];

PORTS.forEach(function(port) {
  fakeServers.push(http.createServer(function() {}).listen(port));
  hosts.push({name: HOSTNAME, port: port, sslFlag: 0});
});

var tunnel =
    new BrowserStackTunnel({key: ACCESS_KEY, localIdentifier: TUNNEL_IDENTIFIER, hosts: hosts});

    }
  }
});

tunnel.on('error', function(error) {
  console.error(error);
});


// TODO(i): we should properly stop the tunnel when tests are done.
// tunnel.stop(function(error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('browserStack tunnel has stopped');
//   }
//});
