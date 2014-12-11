var Cylon = require('cylon');

Cylon.robot({
    connections: {
        keyboard: { adaptor: 'keyboard' }
    },
    devices: {
        keyboard: { driver: 'keyboard' }
    },
    work: function(my) {
        my.keyboard.on('space', function(key) {
            console.log("space pressed");
        });
    }
}).start();