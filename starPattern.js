let n = 5;

for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n; j++) {
        row += "*";
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row)
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1);
    }
    console.log(row)
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1);
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += j + 1;
    }
    console.log(row)
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += "*";
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if ((n - (i + 1)) > j) {
            row += " ";
        } else {
            row += "*";
        }
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row = "";
    let one = 1;
    for (let j = 0; j <= i; j++) {
        row += one;
        if(one === 1){
            one = 0;
        }else{
            one = 1;
        }
    }
    console.log(row)
}

let one = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    
    for (let j = 0; j <= i; j++) {
        row += one;
        if(one === 1){
            one = 0;
        }else{
            one = 1;
        }
    }
    console.log(row)
}