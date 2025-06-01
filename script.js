document.getElementById("parlayForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const checkboxes = document.querySelectorAll("#matches input[type=checkbox]:checked");
    if (checkboxes.length === 0) {
        document.getElementById("result").innerText = "Pilih minimal satu pertandingan.";
        return;
    }
    let totalOdds = 1;
    checkboxes.forEach(cb => {
        totalOdds *= parseFloat(cb.value);
    });
    document.getElementById("result").innerText = "Total Odds Parlay: " + totalOdds.toFixed(2);
});
