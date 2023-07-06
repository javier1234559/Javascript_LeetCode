function maxArea(height: number[]): number {
  let n:number = height.length;
  let Maxarea:number = Number.MIN_VALUE;
  if(n < 2){
    Maxarea = height[0];
    return Maxarea;
  }

  //define 2 pointers
  let left:number = 0;
  let right:number = n - 1;

  //excute main logic
  while(right > left){
    let waterheight :number = Math.min(height[left] , height[right]) ;
    let area :number = Math.abs(right - left) * waterheight ;
    Maxarea = Math.max(area , Maxarea)
    //we already have largest width when start at the end
    //so target is to find the highest vertical lines 
    if(height[left] < height[right]){ 
        left++;
    }else{
        right--;
    }
  }
  return Maxarea;
};



console.log(maxArea( [1,8,6,2,5,4,8,3,7]))