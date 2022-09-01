let f = 5;
for (let i = 0; i < f; i++) {
    let resultJ = '';
    for (let j = 0; j < f; ++j) {
        if (i % 2 == 0) resultJ += ' ' + '#';
        else resultJ += '#' + ' ';
    }

    console.log(resultJ);
}
