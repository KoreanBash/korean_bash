module.exports.randomPieces = (pieces) => {
  let tempStor = pieces;
  const storage = [];
  let randomNum =  () => {
    return Math.floor(Math.random() * (tempStor.length));
  }

  while (tempStor.length > 0) {
    let num = randomNum();
    console.log(num);
    storage.push(tempStor[num]);
    tempStor.splice(num, 1);
  }
  return storage;
}
