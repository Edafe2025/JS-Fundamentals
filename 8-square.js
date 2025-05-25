const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0){
    console.log("Missing size");
}
else {
    let i = 0;
    while(i < size){
        let row = "";
        for(let j = 0; j < size; j++){
            row += "X";
        }
        console.log(row);
        i++;
    }
}