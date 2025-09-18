const outputString = getArgs() || "Hello World";
let tempString = ""

for (const char of outputString.split("")) {
    for(let i = 32; i<=126; i++) {
        tempString += String.fromCharCode(i);
        console.log(tempString);
        if(String.fromCharCode(i) === char) {
            break;
        } else {
            tempString = tempString.slice(0, -1)
        }
        await sleep(10);
    }
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function getArgs() {
    const args = process.argv;
    //console.log(args)
    //console.log(args);
    if(args.length === 3 && args[2].startsWith("--output")) {
        const output = args[2].split("=")[1]
        //console.log(output);
        return output;
    }
}