const txt=document.getElementById('txt');
const check=document.getElementById('check');
const reset=document.getElementById('reset');
const totalText=document.querySelector('.total');
const upperText=document.querySelector('.upper');
const lowerText=document.querySelector('.lower');
const numberText=document.querySelector('.number');
const specialText=document.querySelector('.special');
const wordText=document.querySelector('.word');
const sentenceText=document.querySelector('.sentence');
let upper=0;
let lower=0;
let number=0;
let special=0;
let sentenceNumber=1;
let word=1;
check.addEventListener('click',function(){
    sentence=txt.value;
    sentenceLength=sentence.length;
    totalText.innerText=sentenceLength;

    if(sentenceLength==0){
        Swal.fire('Please Write the text...')
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Count result is ready',
            showConfirmButton: false,
            timer: 1500
          })
        for(i=0;i<sentenceLength;i++){
            if (sentence[i] >= 'A' && sentence[i] <= 'Z'){
                upper++;
            }
            else if (sentence[i] >= 'a' && sentence[i] <= 'z'){
                lower++;
            }
            else if (sentence[i] >= '0' && sentence[i] <= '9'){
                number++;
            }
            else if (sentence[i] == ' ' && sentence[i-1] != ' '){
                word++;
            }
            else if (sentence[i] == '.' && (sentence[i+1] == ' ' || (sentence[i+1] >= 0 && sentence[i+1] <= 'z')) ){
                sentenceNumber++;
            }
            else{
                special++;
            }
                
        }
            
        upperText.innerText=upper;
        lowerText.innerText=lower;
        numberText.innerText=number;
        specialText.innerText=special;
        wordText.innerText=word;
        sentenceText.innerText=sentenceNumber;
        
    
        reset.addEventListener('click',function(){
           location.reload();
           
        })
    }
    
})