function countBs(q, c) {
    let a = 0;
    for (m = 0; m < q.length; m++) {
        let b = q.charAt(m);
        if (b === c) a++;
    }
    return a;
}
console.log(countBs('Dima is the best boyfriend', 'i'));
