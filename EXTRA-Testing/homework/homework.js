const layout = [
    [ // A = 0
       { type: 'VIP', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
    ],
    [ // B = 1
       { type: 'NORMAL', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
       { type: 'NORMAL', booked: false },
    ],
    [ // C = 2
       { type: 'NORMAL', booked: false },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'ECONOMIC', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: true },
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: false },
    ],
 ];

// const test2= {}
// test2.test = 'test'
// test2 = []
//  console.log(layout.push(''))
//  const test = ''
//  test = 'asdasd'

function checkSeatStatus(rowCode, columnNum) {
    if(typeof rowCode != 'string') throw new TypeError('First parameter is not a string.')
    if(typeof columnNum != 'number') throw new TypeError('Second parameter is not a number.')

    let row = getRowNumber(rowCode)
    let column = layout[row]
    let seat = column[columnNum]
    
    return seat.booked
}

function book(rowCode, columnNum) {
    let isBooked = checkSeatStatus(rowCode, columnNum)

    if(isBooked) {
        return 'Seat in ' + rowCode + columnNum +' is already booked'
    } else {
        layout[getRowNumber(rowCode)][columnNum].booked = true
        return 'Seat in ' + rowCode + columnNum +' successfully booked'
    }
}

function getRowNumber(str) { // 'A'.charCodeAt(3)
    // if(str === 'A') return 0

    // switch(str) {
    //     case 'A':
    //         return 0
    //     case 'B': 
    //         return 1
    // }

    return str.toUpperCase().charCodeAt(0) - 65
}

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
}