let findclicked=0;

//use rest operator to return minimum of all numbers passed 
//function to call for array smallest element
let arrayhandle=(a)=>{
    let temp=0;
    for(let i=0;i<a.length;i++){
        for (let j = i; j > 0; j--) {
            if (a[j] < a[j - 1]) {
             temp = a[j];
             a[j] = a[j - 1];
             a[j - 1] = temp;
            }
    }
}

return a;
}

//event listner function for html
document.getElementById('sub').addEventListener('click',_=>{
    
    // if the operations in array is done then add button will change to reload button 
    if(findclicked>0){
        window.location.reload();
    }
    else{
        let inp=document.getElementById('inp').value;
        let newnum=document.getElementById('q1')
        let element=document.createElement('span')
        element.innerText=inp;
        element.className='arr';
        newnum.appendChild(element);    
    }
})


//find click event handler
document.getElementById('find').addEventListener('click',_=>{
    const arr=document.getElementsByClassName('arr');
    let sendarr=[];
    for(let i=0;i<arr.length;i++){
        sendarr[i]=Number(arr[i].innerText);
    }
    arrayhandle(sendarr)
    let result=document.createElement('p');
    result.innerText='Smallest number is : ' + sendarr[0];
    let newnum=document.getElementById('q1');
    newnum.appendChild(result)
    primecheck(sendarr);
    
    // if the array is checked once then it will update the value of find button click
    findclicked=+1;
    if(findclicked>0){
        document.getElementById('sub').innerText='Reset'
    }
})


//function to check prime number is present or not
let primecheck= (a)=>{
    for(i=0;i<a.length;i++){
        let count=0;
        // update dom if the number 1 is present in array
        if(a[i]=='1'){
            console.log('prime number is present');
            let result=document.createElement('p');
            result.innerText='Prime number found';
            let newnum=document.getElementById('q1');
            newnum.appendChild(result)
            break;
        }
        else{
            for(j=2;j*j<=a[i];j++){
                if(a[i]%j==0){
                    count++;
                }
            }
        }
        // it will update the dom if prime number is present 
        if(count==0){
            let result=document.createElement('p');
            result.innerText='Prime number found';
            let newnum=document.getElementById('q1');
            newnum.appendChild(result)
            
        }
    }
}