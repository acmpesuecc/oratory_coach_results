function showUpload() {
    document.querySelector('.welcome-section').style.display = 'none';
    document.querySelector('.upload-section').style.display = 'block';
}

function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        document.querySelector('.upload-section').style.display = 'none';
        document.querySelector('.result-section').style.display = 'block';
    } else {
        alert('Please upload a file.');
    }
}

function viewFacialGestures() {
    window.location.href = "facial-gestures.html";
}

function viewBodyGestures() {
    window.location.href = "body-gestures.html";
}

function viewSentimentAnalysis() {
    window.location.href = "sentimental-tone-analysis.html";
}
function viewAggregateResults() {
    window.location.href = "aggregates.html"; // Redirect to the aggregate results page
}


function goHome() {
    document.querySelector('.result-section').style.display = 'none';
    document.querySelector('.welcome-section').style.display = 'block';
}