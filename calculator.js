<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>
<body>

    <h2>Calculator</h2>

   <input type="number" id="num1" placeholder="Enter the first number"><br><br>
   <input type="number" id="num2" placeholder="Enter the second number"><br><br>
   <select id="operator">
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (-)</option>
        <option value="multiply">Multiplication (×)</option>
        <option value="divide">Division (÷)</option>
    </select>
    <br>
    <br>

    <button onclick="calculate()"> = </button>
    <p id="calcResult"></p>

    <script>
        function add(a, b) 
        {
            return a + b;
        }

        function subtract(a, b) 
        {
            return a - b;
        }

        function multiply(a, b) 
        {
            return a * b;
        }

        function divide(a, b) 
        {
            if (b === 0) 
            {
                return "Error: Division by zero";
            }
            return a / b;
        }

        function printResult(result) 
        {
            document.getElementById('calcResult').innerText = "Result: " + result;
        }

        function calculate() 
        {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let operator = document.getElementById('operator').value;
            let result;

            if (isNaN(num1) || isNaN(num2)) 
            {
                result = "Please enter valid numbers";
            } 
            else 
            {
                switch(operator) 
                {
                    case 'add': 
                    result = add(num1, num2); 
                    break;
                    case 'subtract': 
                    result = subtract(num1, num2); 
                    break;
                    case 'multiply':
                    result = multiply(num1, num2); 
                    break;
                    case 'divide': 
                    result = divide(num1, num2); 
                    break;
                    default: 
                    result = "Invalid operation";
                }
            }

            printResult(result);
        }
    </script>

</body>
</html>
