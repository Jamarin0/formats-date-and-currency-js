import assert from "assert";
const date = new Date("2022-02-04 00:00"); //  node -p 'new Date("2022-02-04 00:00")'
//2022-02-04T03:00:00.000Z

{
  const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/;
  const [full, year, month, day] = regex.exec(date.toISOString());
  const actual = `${day}/${month}/${year}`;
  const expected = "04/02/2022";
  assert.equal(actual, expected);
}

// toLocaleDateString
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

{
  const actual = date.toLocaleDateString("pt-br", options);
  const expected = "4 de fevereiro de 2022";
  assert.equal(actual, expected);
}

{
  const actual = date.toLocaleDateString("pt-br", {
    ...options,
    month: "numeric",
  });
  const expected = "04/02/2022";
  assert.equal(actual, expected);
}

//Intl

{
  const actual = new Intl.DateTimeFormat("pt-br").format(date);
  const expected = "04/02/2022";
  assert.equal(actual, expected);
}


{
    const actual = new Intl.DateTimeFormat("pt-br", {
        dateStyle: "full", timeStyle: "long"
    }).format(date);
    
    const expected = "sexta-feira, 4 de fevereiro de 2022 00:00:00 BRT";
    assert.equal(actual, expected);
}
