function computeAverage() {
  const regno = document.getElementById("regno").value.trim();
  const subcode = document.getElementById("subcode").value.trim();
  const test1 = parseFloat(document.getElementById("test1").value);
  const test2 = parseFloat(document.getElementById("test2").value);
  const test3 = parseFloat(document.getElementById("test3").value);
  const resultDiv = document.getElementById("result");

  // Clear result area
  resultDiv.innerHTML = "";

  if (!regno || !subcode || isNaN(test1) || isNaN(test2) || isNaN(test3)) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please fill all fields correctly.";
    return;
  }

  const marks = [test1, test2, test3];
  marks.sort((a, b) => b - a); // Descending
  const avg = ((marks[0] + marks[1]) / 2).toFixed(2);

  resultDiv.style.color = "green";
  resultDiv.textContent = `Average of best two tests: ${avg}`;
}
