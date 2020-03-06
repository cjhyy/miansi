export interface ErrorMessage {
  message: string;
  stack: Array<{
    line: number;
    column: number;
    filename: string;
  }>;
}


export function parseError(err: Error): ErrorMessage {
  
  const arr=err.toString().split(/\n/)
  const ans: ErrorMessage={
      message:'',
      stack:[]
  }

   ans.message=arr[0]
   ans.message=ans.message.substr(7)
   const mid=ans.message.match(/.+: (.*)$/)
   ans.message=mid?mid[1]:""
   arr.shift()
  
   arr.forEach((item)=>{
      const reg=/.*(http:\/\/.+):(.+):(.+)/
      const result=item.match(reg)
  
      if (result){
        const tmp={
          line:0,
          column:0,
          filename:''
        } 
        tmp.line=Number(result[2])
        tmp.column=Number(result[3])
        tmp.filename=result[1]
        ans.stack.push(tmp)
      } 

    })
  
  
    return ans
}