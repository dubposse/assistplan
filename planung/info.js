const ids = ["kollege1","kollege2","kollege3","kollege4","kollege5","kollege6","kollege7","kollege8","kollege9","kollege0"];
let output = "Wunschfrei & Wunscharbeiten Übersicht:\n\n";

// Einfache Datumserkennung (ISO oder deutsch)
function isDateString(str) {
    return /^\d{4}-\d{2}-\d{2}$/.test(str) || /^\d{2}\.\d{2}\.\d{4}$/.test(str);
}

function getWunschfreiText(id, wunschfrei) {
    if (!wunschfrei || !isDateString(wunschfrei.trim())) return "";
    return `${id}: Wunschfrei: ${wunschfrei}\n`;
}

function getWunscharbeitenText(id, wunscharbeiten, schicht, wunschfrei) {
    if (!wunscharbeiten || !isDateString(wunscharbeiten.trim())) return "";
    let text = `    Wunscharbeiten: ${wunscharbeiten}`;
    if (schicht) text += ` (Schicht ${schicht})`;

    // Prüfen, ob Wunschfrei und Wunscharbeiten am selben Tag sind
    if (wunschfrei && isDateString(wunschfrei.trim())) {
        const wunschfreiTage = wunschfrei.split(",").map(s => s.trim());
        const wunscharbeitenTage = wunscharbeiten.split(",").map(s => s.trim());
        const gemeinsameTage = wunschfreiTage.filter(tag => wunscharbeitenTage.includes(tag));
        if (gemeinsameTage.length > 0) {
            text += `\n    ⚠️ Achtung: Wunschfrei und Wunscharbeiten am selben Tag (${gemeinsameTage.join(", ")})!`;
        }
    }

    return text + "\n\n";
}

ids.forEach(id => {
    // Wunschfrei
    const wunschfreiEl = document.getElementById(`${id}-wunschfrei-input`);
    let wunschfrei = wunschfreiEl && wunschfreiEl.value ? wunschfreiEl.value : "";

    // Wunscharbeiten
    const wunscharbeitenEl = document.getElementById(`${id}-wunscharbeiten-input`);
    const wunscharbeitenSchichtEl = document.getElementById(`${id}-wunscharbeiten-schicht-input`);
    let wunscharbeiten = wunscharbeitenEl && wunscharbeitenEl.value ? wunscharbeitenEl.value : "";
    let schicht = wunscharbeitenSchichtEl && wunscharbeitenSchichtEl.value ? wunscharbeitenSchichtEl.value : "";

    output += getWunschfreiText(id, wunschfrei);
    output += getWunscharbeitenText(id, wunscharbeiten, schicht, wunschfrei);
});

console.log(output);
