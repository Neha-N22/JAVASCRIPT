<!DOCTYPE html>
<html>
<head>
  <title>Store Earnings</title>
</head>
<body>
  <script>
    let tshirtCount = 5;
    let capCount = 3;
    let tshirtPrice = 400;
    let capPrice = 150;
    let totalEarnings = (tshirtCount * tshirtPrice) + (capCount * capPrice);
    document.write("Total earnings: " + totalEarnings + "<br>");

    // Update t-shirt price 
    tshirtPrice = 450;

    // Recalculate the total earnings
    let updatedTotalEarnings = (tshirtCount * tshirtPrice) + (capCount * capPrice);
    document.write("Updated total earnings: " + updatedTotalEarnings);
  </script>
</body>
</html>
