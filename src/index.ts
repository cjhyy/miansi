export interface ErrorMessage {
  message: string
  stack: Array<{
    line: number
    column: number
    filename: string
  }>
}


export function parseError(err: Error): ErrorMessage {
  let arr=err.toString().split(/\n/)
  console.log(arr[0])
  let ans:ErrorMessage={
      message:'',
      stack:[]
  }

   ans.message=arr[0]
   arr.shift()

   arr.forEach((item)=>{
      let reg=/.+(http:\/\/.+):(.+):(.+)/
      let result=item.match(reg)
  
      if (result){
        let tmp={
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