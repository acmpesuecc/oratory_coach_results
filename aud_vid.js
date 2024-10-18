function showUpload() {
    document.querySelector('.welcome-section').style.display = 'none';
    document.querySelector('.upload-section').style.display = 'block';
}

function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        document.querySelector('.upload-section').style.display = 'none';
        document.querySelector('.result-section').style.display = 'block';
        window.location.href = "aggregates.html";
    } else {
        alert('Please upload a file.');
    }
}

function goHome() {
    document.querySelector('.result-section').style.display = 'none';
    document.querySelector('.welcome-section').style.display = 'block';
}