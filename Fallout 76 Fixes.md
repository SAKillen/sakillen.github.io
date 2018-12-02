# 5 Bugs in Fallout 76...and How to Fix Them
## Fallout 76 crashes on PC with the error message "Fallout 76 has stopped working"
This is black box compatibility and performance testing. Black box, because it is infeasible for Bethesda to know and test every possible hardware configuration that users will have, compatibility, because this PC-centric bug is alluded to on Bethesda's own support site as being the result of differing hardware and software configurations, and performance, because the game outright ceases to function under certain system conditions. The solution to this problem is further internal testing on machines with both different hardware and different system software, and even different versions of said software.

Testing steps:
- Select a PC, taking careful note of its harware and software configuration
- Start and load into the game
- Monitor system performance while playing the game for at least several hours
- If the game has not crashed, quit the game
- Select another PC with a different hardware and software configuration
- Start and load into the game
- Monitor system performance while playing the game for at least several hours
- If the game has not crashed, quit the game
## "No Access Granted" error when trying to lauch Fallout 76
This is black box smoke testing. Black box, because this error is a post-release problem, seemingly stemming from a difference between beta and retail activation keys, and smoke, because the process by which the problem is encountered is a simple login attempt. The solution to this problem is to do quick, automated login attempts for accounts with retail keys on machines that previously had/currently have the game's beta installed.

Testing steps:
- Select a PC with the beta version of the game installed
- Using the same account as the beta, activate and install a retail copy of the game
- Launch the retail version of the game
## Lever-Action Rifle does not properly reload ammunition
This is white box functional testing. White box, because Bethesda has direct access to the game's code and can more directly determine and fix the problem, and functional, because reloading is a core functionality of weapons. The solution to this problem is to debug the rifle in the development environment.

Testing steps:
- Load into the game, making sure the player character has a Lever-Action Rifle
- Fire the weapon to deplete ammunition
- Attempt to reload the weapon
## Player models may appear invisible or partially invisible
This is white box functional testing. White box, because Bethesda has direct access to the game's code and can more directly determine and fix the problem, and functional, because invisibility, presumably caused at random by equipping outfits, makes it impossible to ascertain the location of affected players, which is potentially catastrophic for hostile player encounters. The solution to this problem is to debug the player models in the development environment.

Testing steps:
- Load into the game on two separate machines
- Make sure both characters are on the same server
- Equip different outfits onto each player
- Continue cycling through outfits until full or partial invisiblity is observed
## Assaultrons can occasionally fire infinite head beams
This is white box functional testing. White box, because Bethesda has direct access to the game's code and can more directly determine and fix the problem, and functional, because Assaultrons are (presumably) not intended to fire infinite head beams, and are therefore not functioning correctly. The solution to this problem is to debug the Assaultron attack functionality in the development environment.

Testing steps:
- Load into the game
- Find and initiate combat with an Assaultron
- Observe head beams
