# Steam achievements alert discord bot
This is a discord bot showing Steam achievements when unlocked. 

You can also use it to compare achievements with your friends on a specified game and show progress for the game (% unlocked achievements).

It uses Discord API and Steam API and you'll need keys for both. Refer to https://discord.com/developers/docs/intro to know how to add a bot in a discord server.

Have fun !

Command lines (type !help) :
- *!on* Specify the channel where the new achievements will be displayed
- *!compare [game_name] [optional:user_discord_tag]* Compare achievements between players
- *!removegame game_name* Remove a game to comparaison list
- *!addgame [game_name] [game_id]* Add a game to comparaison list (A game must be in this list to be compared)
- *!listgames* List the comparaison list
- *!addplayer @player [steam_user_id] [nickname]*\n\tAdd a new player to be listened
- *!removeplayer @player* Remove a player from listening list
- *!listplayers* Show the listened players list
