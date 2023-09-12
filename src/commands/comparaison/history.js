const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('history')
        .setDescription('Plot number of achievements history for all players on a specified game')
        .addStringOption(option =>
            option.setName('game_name')
                .setDescription('name of the game as you specified it (do /list_games)')
                .setRequired(true)),
    async execute(interaction, globalVariables) {
        const game_name = interaction.options.getString('game_name')
        const gameObject = globalVariables.Games.find(game => game.name === game_name)
        if (typeof gameObject === 'undefined') {
            await interaction.reply('Game not found!');
            return
        }
        if (!gameObject.guilds.includes(interaction.guildId)) {
            await interaction.reply('Game not in the guild list!');
            return
        }
        gameObject.displayAchievementsHistory(interaction)
    }
};