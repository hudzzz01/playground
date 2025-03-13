
function anagram(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        //loop pertama untuk loop seluruh componen arr

        //element yang dicari
        let x = arr[i]
       

        //arr dimesi kedua
        let anagrams = []
        anagrams.push(x)
        
        for (let j = i + 1; j < arr.length; j++) {

            //element arr setelah yang di cari
            // [ setelah yang di cari.... sampe n ]
            let arrHuruf = arr[j]

            if(sortAlfabet(arrHuruf) === sortAlfabet(x)){
                anagrams.push(arrHuruf)
                arr[j] = ""
                
            }
        }

        result.push(anagrams)
        anagrams = []

    }

    //bersihkan result dari array kosong ""
    
    let clearResult = []
    for (let i = 0; i < result.length; i++) {
        const e = result[i];
        
        
        if(e[0] !== ''){
            clearResult.push(e)
        }
    }




    return clearResult

}


function sortAlfabet(word) {
    let dump = 0;
    let dump2 = 1;
    while(  word[dump2] != undefined){
      dump ++;
      dump2 ++;
    }

    let wordLength = dump2;



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




console.log(anagram(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
));
