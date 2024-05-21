function jsonify() {
    const questTitle = document.getElementById('questTitle').value;
    const questDescription = document.getElementById('questDescription').value;
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = document.getElementById('correctOption').value;

    const jsonOutput = {
        questTitle: questTitle,
        questDescription: questDescription,
        question: question,
        options: [option1, option2, option3, option4],
        correctOption: correctOption
    };

    document.getElementById('jsonOutput').textContent = JSON.stringify(jsonOutput, null, 2);
}
