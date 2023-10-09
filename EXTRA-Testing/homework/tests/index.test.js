const {checkSeatStatus, getRowNumber, book} = require('../homework') // destructuring

describe('checkSeatStatus', () => {
    it('Es una funcion', () => {
        expect(typeof checkSeatStatus).toEqual('function')
    })

    it('Debe devolver un error si el primer parametro no es un string', () => {
        expect(() => checkSeatStatus(0)).toThrow(new TypeError('First parameter is not a string.'))
    })

    it('Debe devolver un error si el segundo parametro no es numero', () => {
        expect(() => checkSeatStatus('0', '0')).toThrow(new TypeError('Second parameter is not a number.'))
        expect(() => checkSeatStatus('0')).toThrow(new TypeError('Second parameter is not a number.'))
        expect(() => checkSeatStatus('0', {})).toThrow(new TypeError('Second parameter is not a number.'))
    })

    it('Debe devolver si la butaca esta reservada', () => {
        expect(checkSeatStatus('A', 0)).toBe(false)
        expect(checkSeatStatus('A', 1)).toBe(true)
    })
})

describe('getRowNumber', () => {
    it('Debe devolver el numero fila de butacas', () => {
        expect(getRowNumber('C')).toBe(2)
    })
})

describe('book', () => {
    it('Debe reservar una butaca si esta disponible', () => {
        expect(checkSeatStatus('A', 0)).toBe(false)
        expect(book('A', 0)).toBe('Seat in A0 successfully booked')
        expect(checkSeatStatus('A', 0)).toBe(true)
    })

    it('Debe devolver un error si la butaca ya está reservada', () => {
        expect(checkSeatStatus('A', 1)).toBe(true)
        expect(book('A', 1)).toBe('Seat in A1 is already booked')
    })
})
