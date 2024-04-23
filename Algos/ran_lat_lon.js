max_lon = 180000000
max_lat = 90000000

rand_lat = Math.floor(Math.random() * (max_lat - -max_lat) + -max_lat)/1000000
rand_lon = Math.floor(Math.random() * (max_lon - -max_lon) + -max_lon)/1000000
console.log(rand_lat)
console.log(rand_lon)