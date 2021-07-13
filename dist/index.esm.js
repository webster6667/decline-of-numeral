export default function(t,e){if(t=+t,2===e.length&&e.push(e[1]),isNaN(t))throw new Error("type of quantity expect only number");return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}
