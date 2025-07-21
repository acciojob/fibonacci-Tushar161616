function fibonacci(num) {
// your code here
	
        let n1 = 0, n2 = 1;

        for (let i = 0; i < num; i++) {
            // Print the number
            alert(n1 + " ");

            // Swap
            int n3 = n2 + n1;
            n1 = n2;
            n2 = n3;
        }

}

module.exports = fibonacci;
