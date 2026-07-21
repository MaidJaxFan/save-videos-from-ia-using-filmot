import fs from 'fs/promises';

const output = `output_${Math.floor(Math.random() * 9999)}.txt`;
const csv = await fs.readFile(process.argv[2], 'utf8')

const csv2 = csv.split("\n").slice(1);
var finalOutputArray = [];
for(let i = 0; i < csv2.length; i++) {
    var v = csv2[i];
    if(!v) continue;
    console.log(`Retrieving archived videoplayback URL for ${v.split(",")[1]} from IA`)
    const req = await fetch(`https://web.archive.org/web/1oe_/http://wayback-fakeurl.archive.org/yt/${v.split(",")[0]}`);
    if(!req.ok) {
        console.log(`IA responded with ${req.status}. It is likely the video was not archived. :(`)
        continue;
    }
    console.log(`Retrieved videoplayback URL for ${v.split(",")[1]} from IA successfully.`);
    finalOutputArray.push(`${v.split(",")[1]},${req.url}`);
}
var finalstring = "";
for(let i = 0; i < finalOutputArray.length; i++) {
    finalstring += finalOutputArray[i] + "\n";
}
await fs.writeFile(output, finalstring, "utf8");
console.log("Outputted to " + output);