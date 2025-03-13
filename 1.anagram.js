



function anagram(arr) {

    let arrLength = countLengthArr(arr)

    let result = []
    let resultLength = 0

    for (let i = 0; i < arrLength; i++) {
        //loop pertama untuk loop seluruh componen arr

        //element yang dicari
        let x = arr[i]
       

        //arr dimesi kedua
        let anagrams = []
        let anagramsLength = 0;

        //push ke anagrams
        anagrams[anagramsLength] = x;
        anagramsLength += 1;

        let arrLength = countLengthArr(arr)
        
        for (let j = i + 1; j < arrLength; j++) {
            //element arr setelah yang di cari
            // [ setelah yang di cari.... sampe n ]
            let arrHuruf = arr[j]
            // let arrHurufLength = countLengthArr(arrHuruf)


            if(sortAlfabet(arrHuruf) === sortAlfabet(x)){
                anagrams[anagramsLength] = arrHuruf
                anagramsLength += 1
                // anagrams.push(arrHuruf)
                arr[j] = ""
            }
        }

        result[resultLength] = anagrams
        resultLength += 1;

  
        anagrams = []
        anagramsLength = 0
    }

    //bersihkan result dari array kosong ""

    console.log(result);
    
    
    let clearResult = []
    let clearResultLength = 0

    for (let i = 0; i < resultLength; i++) {
        const e = result[i];
        
        
        if(e[0] !== ''){
            clearResult[clearResultLength] = e
            clearResultLength += 1
        }
    }



    return clearResult

}

function countLengthArr(arr){
    let dump = 0;
    let dump2 = 1;
    while(  arr[dump2] != undefined){
      dump ++;
      dump2 ++;
    }

    let wordLength = dump2;

    return wordLength
}


function sortAlfabet(word) {
   

    let wordLength = countLengthArr(word);


    //sorting untuk alfabet
    const alfabet = "abcdefghijklmnopqrstuvwxyz";
    let alfabetLength = 26;

    let sorted = [];
    let sortedLength = 0;

    for (let i = 0; i <= alfabetLength; i++) {

        //loop setiap huruf word
        for (let j = 0; j < wordLength; j++) {
            const searchedWord = word[j];

            if (searchedWord === alfabet[i]) {
                sorted[i] = searchedWord
            }
            sortedLength += 1
        }

    }

    
    //sorted sudah terisi berdasarkan index
    //loop untuk menghapus spasi

    let result = ""

    for (let i = 0; i < sortedLength; i++) {
        if (sorted[i] !== "" && sorted[i] != undefined && sorted[i] != null) {
            result += sorted[i]
        }

    }

    return result



}

// console.log(sortAlfabet("hudzaifah"));




console.log(anagram(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']));
