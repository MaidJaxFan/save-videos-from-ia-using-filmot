import fs from 'fs/promises';
const input = await fs.readFile(process.argv[2], "utf8");

const inputArray = input.split("\n")
const output = `RUN_THIS_SCRIPT_TO_DOWNLOAD${Math.floor(Math.random() * 10000)}.sh`
const commands = ["#!/bin/bash"]
for(let i = 0; i < inputArray.length; i++) {
    const index = inputArray[i].indexOf(",");
    var title = inputArray[i].slice(0, index);
    title = title.substring(1, title.length - 1);
    const url = inputArray[i].slice(index + 1);

    commands.push("\n");
    commands.push(`wget --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -e robots=off -O "${title}.mp4" '${url}'`)
}

console.log("Output script is: " + output)
await fs.writeFile(output, commands.join(""), "utf8");

