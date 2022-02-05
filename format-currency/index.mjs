import assert from 'assert'; 
const number = 123456.789;

const actual = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(number);
const expect = "R$ 123.456,79"

assert.equal(actual, expect)