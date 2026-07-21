# save-videos-from-ia-using-filmot
A few sloppy Node.js scripts to save deleted/privated YouTube videos from IA using Filmot to provide the title and IDs.
Linux only.

# How to use?
Search for the channel on Filmot. Type in anything into the caption but make sure to select the channel you want.

When you get to the results page, click on the link to the channel page. (next to the video titles).

There should be a text box with "Search term within the channel" as the placeholder. Write your search term into it and click "Auto" (captions), "Manual" (captions), or "Title" (video title) 

Now click "Export". In the menu that pops up, make sure the export format is set to CSV, and then deselect everything except Title and VideoID, and then click "Export Data".

Now put the CSV file in the same directory as the scripts and type into a terminal:

node index.js

followed by the file name of the CSV file, and hit Enter.

When it finishes retrieving the videoplayback links, the resulting file will be "output_XXXX".txt, where XXXX is a random number. Now type:

node step2.js

followed by the file name of the output_XXXX.txt file, and hit Enter.

You can now run the resulting Bash script, which is under the name of "RUN_THIS_SCRIPT_TO_DOWNLOADXXXX.sh", where XXXX is a random number.

If you encounter errors and if you are on an NTFS drive, try running the script on an Ext4 drive, as NTFS prohibits some characters in filenaes.
