"use strict";
//Merge Interval
//Array
//https://leetcode.com/problems/merge-intervals/description/
Object.defineProperty(exports, "__esModule", { value: true });
function merge(intervals) {
    if (intervals.length <= 1)
        return intervals;
    //sort all the first element of small interval with the first element of next interval
    intervals.sort((a, b) => a[0] - b[0]);
    //declare new list 
    let result = [];
    let beforeInterval = intervals[0];
    result.push(beforeInterval);
    for (let item of intervals) {
        let nextInterval = item;
        if (nextInterval[0] <= beforeInterval[1]) { //beforeInterval[1] instead of beforeInterval[beforeInterval.length-1]
            beforeInterval[1] = Math.max(beforeInterval[1], nextInterval[1]); //update which if largest Interval by compare 2 last item of 2 interval
        }
        else {
            beforeInterval = item;
            result.push(beforeInterval);
        }
    }
    return result;
}
;
console.log(merge([[1, 4], [4, 5]]));
