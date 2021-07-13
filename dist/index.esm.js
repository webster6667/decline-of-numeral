var r=function(r,t){if(r=+r,isNaN(r))throw new Error("type of quantity expect only number");return t[r%100>4&&r%100<20?2:[2,0,1,1,1,2][r%10<5?r%10:5]]};export default r;export{r as declineOfNumeral};
