const Discord = require('discord.js');

const c = require('../config.json')
module.exports.run = async (client, message, args) => {
    serverr = 'jogar.redeharmony.com';
    let url = "http://mcapi.us/server/status?ip=" + serverr;
    request(url, function (err, response, body) {

        var status = "Offline";
        if (body.online) {
            status = "Online";
        }

        // PC Ping
        body = JSON.parse(body);

        let embed = new Discord.RichEmbed()
            .setAuthor(`Informações sobre o servidor.`)
            .setDescription(`Estamos com atualmente **${body.players.now}/${body.players.max}** jogadores jogando.
Junte-se a estes jogadores através de: \`jogar.redeharmony.com\``)

            .setColor(c.corpadrão)
        message.channel.send(embed)
    })
}