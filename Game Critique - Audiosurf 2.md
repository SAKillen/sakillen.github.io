# Game Critique - Audiosurf 2
- Developed by: Dylan Fitterer
- Released: May 26, 2015
- Platforms: Microsoft Windows, Mac OS X, Linux
## Summary
Audiosurf 2 is a rhythm puzzle game that has players traveling along a course formed from a music file. Though the game includes several tracks by default, the game's main selling point is for players to play courses generated from their own music libraries. In addition to several basic play modes, the game allows for the creation and acquisition of user-created modes and skins, which often creatively stretch the definition of the game. The game has leaderboards which, during play, show competing players' scores in real time as the player progresses.
## Features to Test
- Music management: The game must be able to recognize AAC, FLAC, MP3, Ogg Vorbis, and WAV file types, and read them from internal or external storage. If external storage is removed, the game should redirect to the most recent music library.
- Track generation: Regardless of length, format, or content, the game must be able to generate a course from a given file.
- User-generated modes and skins: Players must be able to create modes and/or skins, upload them, and then download them for use.
- Leaderboards: Leaderboards must keep track of the top ten players for three categories: global, regional, and friends. A leaderboard must be present for every combination of song and mode (e.g. for songs A and B, and modes A and B, there must be four song/mode leaderboards: A/A, A/B, B/A, and B/B). During play, the scores of players that have played the current song/mode combination must be displayed as they were at the current moment in the song.
