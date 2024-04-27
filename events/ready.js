const { ActivityType, Events } = require("discord.js")
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    let activities = ["EmiWn ❤️ S T A R", "EmiWn 💛 S T A R", "EmiWn 💚 S T A R", "EmiWn 💜 S T A R", "EmiWn 💙 S T A R", "EmiWn 🤍 S T A R", "EmiWn 🧡 S T A R", "EmiWn 🖤 S T A R", "EmiWn 🤎 S T A R"], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
  }
};