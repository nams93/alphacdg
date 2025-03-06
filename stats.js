<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistiques des Évaluations</title>
    <link rel="stylesheet" href="styles.css"> <!-- Liaison avec le CSS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <h1>📊 Statistiques des Évaluations</h1>
        <p>Suivi des performances des agents.</p>
        
        <!-- Lien retour vers la page principale -->
        <a href="index.html" class="btn">⬅ Retour au formulaire</a>
        
        <!-- Tableau des évaluations -->
        <table id="statsTable">
            <thead>
                <tr>
                    <th>Agent</th>
                    <th>Attentif à la radio</th>
                    <th>Anticipation des directions</th>
                    <th>Vigilance</th>
                    <th>Placements</th>
                    <th>Respect des consignes</th>
                    <th>Prise de contact</th>
                </tr>
            </thead>
            <tbody>
                <!-- Les données seront ajoutées dynamiquement ici -->
            </tbody>
        </table>
        
        <!-- Graphique des performances -->
        <canvas id="statsChart"></canvas>
        
        <button onclick="exportPDF()">📄 Exporter en PDF</button>
    </div>
    
    <script src="stats.js"></script>
</body>
</html>

