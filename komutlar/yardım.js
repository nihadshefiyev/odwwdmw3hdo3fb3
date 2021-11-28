const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["⬅️","➡️"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} - Tarafından İstendi`)
      .setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Davet Komutları: ⬅️ \n Ana Menü: ➡️**`)
  .setImage("https://i.imgur.com/c03tOqw.png")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["⬅️","➡️"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "⬅️") {
    const kobscode = new Discord.MessageEmbed()
      .setColor("BLUE")
 .addField("**Davet Komutları**", `\n**!**__rütbe-ekle @rol davet__ = **__Rütbe Ekler__** \n**!**__rütbeler__ = **__Rütbeleri Gösterir 1 Den 10'a Kadar__** \n**!**__rütbe-sıfırla__ = **__Rütbeyi Sıfırlar.__** \n**!**__davetleri-sıfırla__ = **__Davetleri Sıfırlar.__** \n**!**__top__ = **__Lider Tablosunu Gösterir.__** \n**!**__davetlerim__ = **__Davetlerinizi Gösterir.__** \n**!**__bonus-ekle__ = **__Bonus Ekler.__** \n**!**__davet-kanal #kanal__ = **__Davet Kanalını Ayarlar.__** \n**!**__davet-kanal-sıfırla__ = **__Davet Kanalını Sıfırlar.__**`)
.setImage("https://i.imgur.com/c03tOqw.png")
  .setThumbnail(client.user.avatarURL())
 menü.edit(kobscode)
  }
 if(reaction.emoji.name == "➡️") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};