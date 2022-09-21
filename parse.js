function to_string(num,radix){ //把一个十进制数转换为传参的进制数
    if(num == 0) return num;
    let res = '',rate,i;
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(num < 0){//对负数的处理
        res += '-'
        num = Math.abs(num)
    }
    for(i = 0;i<num;i++){
        if(Math.pow(radix,i) <= num && Math.pow(radix,i+1) > num){
            break;
        }
    }
    
    while(i>=0){
        rate = Math.floor(num/Math.pow(radix,i));//获得最高的幂数的倍数
        res += digits[rate]; 
        num -= rate * Math.pow(radix,i); 
        i--;
    }
    return res; 
}

function parse_int(str,radix){ 
    str = (str+'').toUpperCase();
    let res = 0,abs = 1,len = str.length,i;
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(str[0] === '-'){//对负数的处理
        abs = -1;
        str=str.substring(1)
    }
    for(i = len - 1;i >= 0; i--){
        res += digits.indexOf(str[len-1-i]) * Math.pow(radix,i)
    }
    return abs*res;
}


console.log(to_string(46,23))
console.log(parse_int(20,23))
