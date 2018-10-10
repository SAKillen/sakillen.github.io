# Test Case

## Test Details

* Test Case ID:
  * #3.3
* Test Case Name:
  * #2
* Component: 
  * Save Game
* Test Case Designer:
  * Steven Killen
* Creation Date:
  * Oct. 9, 2018
* Modified By:
  * Steven Killen
* Modified Date:
  * Oct. 10, 2018
  * Oct. 12, 2018
* Requirements Covered:
  * The file must be saved in a particular format and include all the game data that needs to be read back in at a later time so the game can continue.
* Test Description/Purpose:
  * Confirm that the save file is saved in its entirety with the proper format, and can later be read from storage.
* Pre-Test Conditions:
  * Save file exists
## Test Steps: 
| # | Description | Expected Result | Check (√) |
| --- | --- | --- | --- |
| 1 |Load into story mode. |The game will load where last saved. |√ |			
| 2 |Save the game. |The game will save the current state of the game. |√ |			
| 3 |Do things in the game that can be observed, and don't save the game. |These changes will be discarded upon loading a save file.|√ |			
| 4 |Reload the most recent save. |The game will load the most recent save file. |√ |			
| 5 |Exit and reload the game. |The game will return to the main menu. |√ |			
| 6 |Load into story mode. |The game will load the most recent save file. |√ |		

## Overall Test Status:



## Run History:
| # |	Run Date |	Run By |	Results |
| --- | --- | --- | --- |
| 1 |Oct. 9, 2018 |Steven Killen |Pass |			
| 2 |Oct. 10, 2018 |Steven Killen |Fail at Step 4 |			
| 3 |Oct 12, 2018 |Steven Killen |Pass |			

