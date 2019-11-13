/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
        let len = numArray.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (numArray[j] > numArray[j + 1]) {
                    let tmp = numArray[j];
                    numArray[j] = numArray[j + 1];
                    numArray[j + 1] = tmp;
                }
            }
        }
        return numArray;
    };