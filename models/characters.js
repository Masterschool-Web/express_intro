import characters from '../characters.json' assert {type:'json'};

export const getAll=()=>{
   return characters
}

export const getById=(id)=>{
   return characters.find(ch=>ch.id===parseInt(id));
}

export const getBirthMonth=(month)=>{
   return characters.filter(ch=>ch.born.toLowerCase().includes(month.toLowerCase()));
}

export const getBloodType=(blood)=>{
   return characters.filter(ch=>ch.blood.toLowerCase().includes(blood.toLowerCase()));
}

export const getMatches=()=>{
   const chunks=chunk(shuffle(characters),6);
   return {
      match1:[[...chunks[0]],[...chunks[1]]],
      match2:[[...chunks[2]],[...chunks[3]]],
      referees:[[...chunks[4]]],
   }
}

//Helper functions:
const chunk=(items,size)=>{
   let chunk=[];
   items=[].concat(...items);
   while(items.length){
      chunk.push(items.splice(0,size))
   }
   return chunk;
}

const shuffle=(arr)=>{
   const last=arr.length;
   let n;
   while(last>0){
      n=rand(last);
      swap(arr,n,--last);
   }
   return arr;
}

const swap=(arr,i,j)=>{
   let temp=arr[i];
   arr[i]=arr[j];
   arr[j]=temp;
   return arr;
}

const rand=(n)=>{
   return Math.floor(Math.random()*n);
}

