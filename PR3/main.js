// 1) --------------------------------------

const firstRow = prompt("Введите первую строку")
const secondRow = prompt("Введите вторую строку")
const letter = prompt("Введите букву")

const getRow = (firstRow, secondRow, letter) => {
    let firstRowCount = 0;
    let secondRowCount = 0;
    for (let i = 0; i < firstRow.length; i++){
        if(firstRow.charAt(i) == letter) firstRowCount++
    }
    for (let i = 0; i < secondRow.length; i++){
        if(secondRow.charAt(i) == letter) secondRowCount++
    }
    if (firstRowCount > secondRowCount) return firstRow
    else if (firstRowCount < secondRowCount) return secondRow
    else return "equal"
}

console.log(getRow(firstRow, secondRow, letter))


// 2) --------------------------------------

const formattedPhone = phone => {
    let tt = phone.split('');
    if (phone.length == 11) {
        if (phone.charAt(0) !== '+') {
            tt.splice(0, "", "+")
            if(phone.charAt(1) !== "7") tt[1] = "7" 
            tt.splice(2, "", " ")
            tt.splice(3, " ", "(")
            tt.splice(7, "", ")")
            tt.splice(8, "", " ")
            tt.splice(12,"", "-")
            tt.splice(15,"", "-")          
        }
    }
    else if (phone.length == 10) {
        if (phone.charAt(0) !== '+') {
                tt.splice(0, "", "+")
                tt.splice(1, "", "7")
            tt.splice(2, "", " ")
            tt.splice(3, " ", "(")
            tt.splice(7, "", ")")
            tt.splice(8, "", " ")
            tt.splice(12,"", "-")
            tt.splice(15,"", "-")          
        }
    }
        
    else if (phone.length == 12) {
        tt.splice(2,"", " ")
        tt.splice(3," ", "(")
        tt.splice(7, "", ")")
        tt.splice(8, "", " ")
        tt.splice(12,"", "-")
        tt.splice(15,"", "-")
    }
    else if (phone.length == 13) {
        tt.splice(3,"", "(")
        tt.splice(7,"", ")")
        tt.splice(11,"", "-")
        tt.splice(14,"", "-")
    }
    else {
        return alert('неверный формат номера');
    }
        return tt.join('')
}

console.log(formattedPhone("9211234567")); // +7 (123) 456-78-90