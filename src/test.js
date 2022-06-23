const objectConvert = {
    key1: 'keyVal1',
    key2: 'keyVal2',
    key3: 'keyVal3',
    key4: 'keyVal4'
};
const objectToArrayConvert = (obj) => {
    return Object.keys(obj).reduce((arrayRes, current) => {
      arrayRes.push({id: current, value: obj[current]})
      return arrayRes;
    }, []);
}
console.log(objectToArrayConvert(objectConvert));


const listName = ['truong', 'ngocasdasdasd', 'thanh']

const howToLong = (listName)=>{
    return listName.reduce((longToWord, word)=>{
        return longToWord.length > word.length ? longToWord : word
    },[])
}

console.log(howToLong(listName));




const findMin = (listNumber)=>{
    return listNumber.reduce((minNum,num)=>{

        return (minNum % 2 == 0) ? minNum : num

    },{})
}

console.log(findMin(listNumber))

const listNumber = [9,1022,4001,88,3]

const findChan = (listNumber) =>{
    return listNumber.filter((item)=>{
        return item %2 == 0;
    }).map((value)=>{
        return value * 2
    }).reduce((itemList,item)=>{
        return itemList > item ? itemList : item
    })
}

console.log(findChan(listNumber))

