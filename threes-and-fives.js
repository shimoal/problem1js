var sum = 0;
var currentsum = 0;

for (var i = 0; i < 10; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
	sum = currentsum + i;
	currentsum = sum;
} else {};
};

return sum;
