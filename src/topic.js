function willCompute() {
    let mth = document.getElementById('mth').value;
    let eg = document.getElementById('eg').value;
    let p = document.getElementById('p').value;
    let ch = document.getElementById('ch').value;
    let bl = document.getElementById('bl').value;

    if (mth === '' || eg === '' || p === '' || ch === '' || bl === '') {
        document.getElementsByClassName('tot')[0].innerHTML = 'Input field cannot be empty';
        return;
    }

    let tot = parseFloat(mth) + parseFloat(eg) + parseFloat(p) + parseFloat(ch) + parseFloat(bl);

    let avg = tot / 5 ;

    if (avg >= 55) {
        document.getElementsByClassName('pnt')[0].innerHTML = 'PASSED';
    }
     else {
        document.getElementsByClassName('pnt')[0].innerHTML = 'FAILED';
    }

    document.getElementsByClassName('tot')[0].innerHTML = tot;
    document.getElementsByClassName('avg')[0].innerHTML = avg;
}

function clearFields() {
    document.getElementById('mth').value = '';
    document.getElementById('eg').value = '';
    document.getElementById('p').value = '';
    document.getElementById('ch').value = '';
    document.getElementById('bl').value = '';
    document.getElementsByClassName('tot')[0].innerHTML = '';
    document.getElementsByClassName('pnt')[0].innerHTML = '';
    document.getElementsByClassName('avg')[0].innerHTML = '';
}