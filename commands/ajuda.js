const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {

        const helpinicial = new Discord.RichEmbed()
            .setTitle(`| **Menu de Ajuda** | `)
            .setColor("0x0000FF")
            .setThumbnail(message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription("๐| Reaja de acordo com a categoria do comando desejado |๐:")
            .addField("Comandos de utilidade em geral", "๐")            
            .addField("Comandos de diversรขo", "๐") 
            .addField("Comandos de jogos", "๐ฎ")    
            .addField("Comandos do discord", "๐๏ธ")                   
            .addField("Comandos de moderaรงรขo", "๐ง")
            .addField("Comandos da staff", "๐ฎโโ๏ธ")            
            .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
        message.channel.send(helpinicial).catch(e => message.channel.send(helpinicial))
            .then(async (msg) => {
                await msg.react("๐")
                await msg.react("๐")          
                await msg.react("๐ฎ")  
                await msg.react("๐๏ธ")    
                await msg.react("๐ฎโโ๏ธ")
                await msg.react("๐ง")                
                await msg.react("๐")
                const filter = (reaction, user) => ['๐', '๐', '๐', '๐ง', '๐ฎโโ๏ธ', '๐๏ธ', '๐ฎ'].includes(reaction.emoji.name) && user.id === message.author.id
                const collector = msg.createReactionCollector(filter, { time: 90000 })
                collector.on("collect", r => {
             
                    switch (r.emoji.name) {
                        case '๐ง':
                            const embedmod = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:aVerified:670962155524194423>| Meus Comandos de moderaรงรฃo:")
                                .addField("Ban", "Ao executares este comando irรก banir uma pessoa.")
                                .addField("Clear", "Limpa as mensagens do chat.")
                                .addField("Kick", "Irรก expulsar um usuรกrio do servidor.")
                                .addField("Mute", "Irรก mutar permanentemente um user.")
                                .addField("Tempban", "Bane temporรกriamente uma pessoa.")
                                .addField("Tempmute", "Muta temporรกriamente uma pessoa.")
                                .addField("Unban", "Desbane uma pessoa.")
                                .addField("Unmute", "Desmuta um usuรกrio.")
                                .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
                            msg.edit(embedmod)
                            break;
                            case '๐':
                                const embedgerl = new Discord.RichEmbed()
                                .setTitle(`| **Menu de Ajuda** | `)
                                    .setColor("0x0000FF")
                                    .setThumbnail(message.author.displayAvatarURL)
                                    .setTimestamp()
                                    .setDescription("<a:loading:670962115103686659>| Meus Comandos de moderaรงรฃo :")
                                    .addField("Ticket", "Abre um ticket de suporte!")
                                    .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
                                msg.edit(embedgerl)
                                break;                            
                        case '๐ฎโโ๏ธ':
                            const embedstaff = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:Pin:670962168149311509>| Meus Comandos da staff:")
                                .addField("Addcargo", "Para adicionar um cargo a um membro do servidor")
                                .addField("Anuncio", "Faz um anรบncio no canal onde o comando foi realizado.")
                                .addField("Anunciopv", "Faz um anรบncio no privado de todos os membros.")                                    
                                .addField("Delcargo", "Para remover um cargo a um membro do servidor")
                                .addField("Votacao", "Faz uma votaรงรฃo no servidor.")
                                .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)


                                msg.edit(embedstaff)
                                break;                            
                        case '๐':
                            const embedfun = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:Neon_Heart:670962164323844096>| Meus Comandos de diversรฃo:")
                                .addField("Beijar", "Beija uma pessoa <3.")
                                .addField("Corrida", "Desafia um membro a competir numa corrida!")
                                .addField("Fakemsg", "Manda uma mensagem de um usuรกrio qualquer com o texto que quiseres!")
                                .addField("Moeda", "Manda a moeda ao ar!")
                                .addField("Numero", "Ao executar o comando, irรก enviar um nรบmero aleatรณrio.")
                                .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
                                    msg.edit(embedfun)
                                    break;
                        case '๐๏ธ':
                            const embedds = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                            .setColor("0x0000FF")
                            .setThumbnail(message.author.displayAvatarURL)
                            .setTimestamp()
                            .setDescription("<a:discord:670962100473954344>| Meus Comandos do discord:")
                            .addField("Avatar", "Manda o teu avatar ou de um membro do servidor.")
                            .addField("Botinfo", "Manda as informaรงรตes do bot.")
                            .addField("Convite", "Manda um convite do servidor no chat.")
                            .addField("Ping", "Manda o ping da api e do bot.")
                            .addField("Reiniciar", "Reinicia o bot.")  
                            .addField("Servericon", "Manda o icon do servidor.")
                            .addField("Serverinfo", "Manda as informaรงรตes do servidor.")   
                            .addField("Sugestao", "Envia uma sugestรฃo para o servidor!")  
                            .addField("Userinfo", "Manda as informaรงรตes de um usuรกrio.")                
                            .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
                            
                                msg.edit(embedds)    
                            break;
                                case '๐ฎ':
                                    const embedjg = new Discord.RichEmbed()
                                    .setTitle(`| **Menu de Ajuda** | `)
                                        .setColor("0x0000FF")
                                        .setThumbnail(message.author.displayAvatarURL)
                                        .setTimestamp()
                                        .setDescription("<a:Minecraft:670962098268012554>| Meus Comandos de jogos:")
                                        .addField("Skin", "Digita um nick e o bot manda a skin de minecraft.")
                                        .setFooter("Lojinha da Fran ยฉ 2020", client.user.avatarURL)
        
        
                                        msg.edit(embedjg)
                                        break;                                              
                        break;
                        case '๐':
                                    msg.edit(helpinicial)                                  
                    }

                })})}         
